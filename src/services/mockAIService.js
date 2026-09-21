// ReMiCare - Mock AI Service for Eye Care
// Phân tích câu nói tự nhiên, phát hiện Red Flags, map vào category chuẩn y tế

import { EYE_CARE_CATEGORIES } from '../data/eyeCareCategories';
import { findVideoByCategory } from '../data/videoLibrary';

/**
 * Danh sách từ khóa dấu hiệu báo động đỏ y khoa (Red Flags)
 */
const RED_FLAG_PATTERNS = [
  {
    flag: "Giảm hoặc mất thị lực đột ngột",
    keywords: ["giảm thị lực", "mất thị lực", "không thấy gì", "mù", "tối sầm", "mờ tịt", "không nhìn thấy"]
  },
  {
    flag: "Đau nhức dữ dội hoặc tăng nhanh",
    keywords: ["đau dữ dội", "đau buốt óc", "đau nhức tăng nhanh", "đau nhức kinh khủng", "đau không chịu nổi"]
  },
  {
    flag: "Chảy máu hoặc rách rách nhãn cầu",
    keywords: ["chảy máu", "rách mắt", "rách mí", "máu chảy", "xuất huyết", "máu đỏ ngập"]
  },
  {
    flag: "Vật thể đâm xuyên hoặc găm sâu",
    keywords: ["đâm xuyên", "xuyên thấu", "móc câu", "găm sâu", "dị vật găm", "đâm vào mắt"]
  },
  {
    flag: "Hóa chất ăn mòn (Axit / Bazơ / Nước tẩy)",
    keywords: ["hóa chất", "axit", "bazo", "thuốc tẩy", "nước tẩy bồn cầu", "vôi bột"]
  },
  {
    flag: "Mắt biến dạng hoặc méo đồng tử",
    keywords: ["biến dạng", "đồng tử méo", "xẹp mắt", "méo tròng"]
  },
  {
    flag: "Không thể mở mắt",
    keywords: ["không thể mở mắt", "không mở được mắt", "nhắm nghiền"]
  },
  {
    flag: "Nhìn đôi (Song thị)",
    keywords: ["nhìn đôi", "hai hình", "song thị"]
  }
];

/**
 * Chuẩn hóa chuỗi tiếng Việt để so khớp từ khóa
 */
function normalizeText(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/**
 * Hàm phân tích tình huống giả lập AI
 * @param {string} transcript - Văn bản từ giọng nói của người dùng
 * @param {object} followUpAnswers - Câu trả lời cho các câu hỏi phụ nếu có
 * @returns {Promise<object>} Cấu trúc JSON chuẩn Section 9
 */
export async function mockAIAnalyze(transcript, followUpAnswers = {}) {
  // Giả lập độ trễ mạng y tế thực tế (450ms)
  await new Promise(resolve => setTimeout(resolve, 450));

  const textLower = (transcript || "").toLowerCase();
  const textNorm = normalizeText(transcript);

  // 1. KIỂM TRA RED FLAGS
  const detectedRedFlags = [];
  for (const item of RED_FLAG_PATTERNS) {
    const isMatched = item.keywords.some(kw => {
      return textLower.includes(kw) || textNorm.includes(normalizeText(kw));
    });
    if (isMatched) {
      detectedRedFlags.push(item.flag);
    }
  }

  // Nếu người dùng trả lời có giảm thị lực trong follow-up:
  if (followUpAnswers.visionLoss === 'Có') {
    if (!detectedRedFlags.includes("Giảm hoặc mất thị lực đột ngột")) {
      detectedRedFlags.push("Giảm hoặc mất thị lực đột ngột");
    }
  }

  // 2. PHÁT HIỆN TÌNH HUỐNG MƠ HỒ CẦN CÂU HỎI LÀM RÕ (Section 6)
  // Nếu câu nói quá ngắn hoặc mơ hồ và chưa có câu trả lời follow-up
  const isTooVague =
    textLower.includes("cái gì đó bay vào") ||
    textLower.includes("có gì đó trong mắt") ||
    (textLower.includes("khó chịu") && !textLower.includes("hàn") && !textLower.includes("hóa chất")) ||
    (transcript.trim().split(/\s+/).length <= 4 && !textLower.includes("hàn") && !textLower.includes("hóa chất"));

  const hasAnsweredFollowUps = Object.keys(followUpAnswers).length > 0;

  if (isTooVague && !hasAnsweredFollowUps) {
    return {
      category: null,
      confidence: 0.45,
      needsMoreQuestions: true,
      followUpQuestions: [
        {
          id: "seesForeignObject",
          question: "Bạn có nhìn thấy hoặc cảm nhận rõ dị vật trong mắt không?",
          options: ["Có", "Không", "Không chắc"]
        },
        {
          id: "visionLoss",
          question: "Mắt có bị giảm thị lực hay đau nhức dữ dội không?",
          options: ["Có", "Không", "Không chắc"]
        }
      ],
      redFlags: detectedRedFlags,
      summary: "Thông tin hiện có chưa đủ để xác định cụ thể tình huống mắt.",
      recommendedVideoId: null,
      steps: [],
      warningSigns: []
    };
  }

  // 3. SO KHỚP VÀO DANH MỤC DANH ĐỊNH (Section 3)
  // Ưu tiên so khớp theo điểm trọng số từ khóa
  let bestCategory = null;
  let highestScore = 0;

  // Điểm số cơ bản theo từng category
  for (const [catKey, catData] of Object.entries(EYE_CARE_CATEGORIES)) {
    let score = 0;
    for (const kw of catData.keywords) {
      const kwNorm = normalizeText(kw);
      if (textLower.includes(kw)) {
        score += 3;
      } else if (textNorm.includes(kwNorm)) {
        score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestCategory = catData;
    }
  }

  // Nếu người dùng đã trả lời câu hỏi phụ:
  if (!bestCategory && hasAnsweredFollowUps) {
    if (followUpAnswers.seesForeignObject === 'Có') {
      bestCategory = EYE_CARE_CATEGORIES.FOREIGN_BODY_DUST;
      highestScore = 3;
    } else {
      bestCategory = EYE_CARE_CATEGORIES.CORNEAL_SCRATCH;
      highestScore = 2;
    }
  }

  // Fallback mặc định an toàn nếu không match từ khóa nào:
  if (!bestCategory) {
    bestCategory = EYE_CARE_CATEGORIES.FOREIGN_BODY_DUST;
  }

  // Tính toán confidence theo mức độ khớp
  const confidence = Math.min(0.98, Math.max(0.75, 0.70 + (highestScore * 0.05)));

  // Tìm video tương ứng
  const matchedVideo = findVideoByCategory(bestCategory.id);

  return {
    category: bestCategory.id,
    confidence: Number(confidence.toFixed(2)),
    needsMoreQuestions: false,
    followUpQuestions: [],
    redFlags: detectedRedFlags,
    summary: bestCategory.title,
    subtitle: bestCategory.subtitle,
    severity: bestCategory.severity,
    severityLabel: bestCategory.severityLabel,
    recommendedVideoId: matchedVideo ? matchedVideo.id : bestCategory.recommendedVideoId,
    video: matchedVideo,
    steps: bestCategory.steps,
    warningSigns: bestCategory.warningSigns,
    audioScript: bestCategory.audioScript
  };
}
