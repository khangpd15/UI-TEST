// ReMiCare - AI Service Abstraction Layer (Section 17)
// Tách biệt hoàn toàn tầng gọi AI giữa giao diện Frontend và dịch vụ Backend
// Hiện tại kết nối với mockAIService, sẵn sàng đổi sang POST /api/ai/eye-care/analyze

import { mockAIAnalyze } from './mockAIService';

/**
 * Phân tích tình huống cấp cứu mắt bằng AI
 * @param {object} params
 * @param {string} params.transcript - Chuỗi giọng nói/chữ nhập của người dùng
 * @param {object} [params.followUpAnswers] - Câu trả lời câu hỏi làm rõ
 * @returns {Promise<object>} Structured AI Response theo chuẩn Section 9
 */
export async function analyzeEyeSituation({ transcript, followUpAnswers = {} }) {
  if (!transcript || typeof transcript !== 'string') {
    throw new Error('Thiếu thông tin mô tả tình huống để phân tích');
  }

  // Khi có Backend API chính thức, chỉ cần mở đoạn này:
  /*
  const response = await fetch('/api/ai/eye-care/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ transcript, followUpAnswers })
  });
  if (!response.ok) {
    throw new Error('Lỗi kết nối máy chủ phân tích y tế');
  }
  return await response.json();
  */

  // Tạm thời gọi mock service chạy client-side
  return await mockAIAnalyze(transcript, followUpAnswers);
}
