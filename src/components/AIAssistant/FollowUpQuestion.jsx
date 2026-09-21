import React, { useState } from 'react';

/**
 * FollowUpQuestion Component (Mục 6)
 * - Đặt câu hỏi làm rõ khi transcript mơ hồ
 * - Các nút lựa chọn: [ Có ], [ Không ], [ Không chắc ]
 * - Tối đa 2-4 câu hỏi
 */
export default function FollowUpQuestion({ questions, onAnswerComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  if (!questions || questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleSelectOption = (option) => {
    const updatedAnswers = {
      ...answers,
      [currentQ.id]: option
    };
    setAnswers(updatedAnswers);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onAnswerComplete(updatedAnswers);
    }
  };

  return (
    <div className="ai-followup-box my-3 p-4 bg-white rounded-4 border shadow-sm animate__animated animate__fadeIn">
      <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: '20px' }} aria-hidden="true">🤖</span>
          <span className="fw-bold text-visi-primary small text-uppercase">
            CÂU HỎI LÀM RÕ TỪ TRỢ LÝ Y TẾ ({currentIndex + 1}/{questions.length})
          </span>
        </div>
        <span className="badge bg-light text-muted border">Cần bổ sung thông tin</span>
      </div>

      <div className="mb-4">
        <h4 className="h5 fw-heavy text-dark mb-2">
          "{currentQ.question}"
        </h4>
        <p className="text-muted small mb-0">
          Hãy chọn câu trả lời mô tả chính xác nhất cảm giác hiện tại ở mắt của bạn:
        </p>
      </div>

      {/* 3 Lựa chọn: Có | Không | Không chắc (Mục 6) */}
      <div className="row g-2">
        {currentQ.options.map((opt, idx) => (
          <div key={idx} className="col-12 col-sm-4">
            <button
              type="button"
              className="btn btn-outline-visi-primary w-100 fw-bold py-3 fs-6 d-flex align-items-center justify-content-center"
              onClick={() => handleSelectOption(opt)}
              style={{ minHeight: '52px', borderRadius: '12px' }}
            >
              <span>{opt}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
