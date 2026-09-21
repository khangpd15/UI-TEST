import { eyeIllustrations } from './eyeImages';

/**
 * eyeProblems.js - Danh mục các tình huống cấp cứu thường gặp trên Trang chủ (HomePage)
 * Chuẩn hóa 21/09/2026: Đồng bộ ID và mức độ ưu tiên theo chuẩn EM-01 đến EM-06
 */

export const eyeProblems = [
  {
    id: 1,
    caseId: "EM-05",
    audio_id: "EM-05",
    title: "Mắt bị va đập",
    category: "emergency",
    priority: "high",
    severity: "high",
    badgeText: "Khẩn cấp",
    image: eyeIllustrations.bluntTrauma
  },
  {
    id: 2,
    caseId: "EM-02",
    audio_id: "EM-02",
    title: "Dị vật nhọn / cắm vào mắt",
    category: "emergency",
    priority: "critical",
    severity: "critical",
    badgeText: "Cực kỳ khẩn cấp",
    image: eyeIllustrations.penetratingObject
  },
  {
    id: 3,
    caseId: "EM-03",
    audio_id: "EM-03",
    title: "Hóa chất bắn vào mắt",
    category: "emergency",
    priority: "critical",
    severity: "critical",
    badgeText: "Cực kỳ khẩn cấp",
    image: eyeIllustrations.chemicalSplash
  },
  {
    id: 4,
    caseId: "EM-01",
    audio_id: "EM-01",
    title: "Dị vật nhỏ / Bụi vào mắt",
    category: "emergency",
    priority: "high",
    severity: "high",
    badgeText: "Khẩn cấp",
    image: eyeIllustrations.smallForeignObject
  },
  {
    id: 5,
    caseId: "EM-04",
    audio_id: "EM-04",
    title: "Bỏng nhiệt ở mắt",
    category: "emergency",
    priority: "high",
    severity: "high",
    badgeText: "Khẩn cấp",
    image: eyeIllustrations.thermalBurn
  },
  {
    id: 6,
    caseId: "EM-06",
    audio_id: "EM-06",
    title: "Tổn thương do tia hàn / UV",
    category: "emergency",
    priority: "medium",
    severity: "medium",
    badgeText: "Cần lưu ý",
    image: eyeIllustrations.uvWelding
  }
];
