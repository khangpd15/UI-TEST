import React from 'react';

/**
 * FirstAidSteps Component (Mục 5)
 * - Hiển thị các bước sơ cứu 1, 2, 3... theo đúng quy trình y tế
 * - Phân biệt trực quan bước NÊN LÀM và KHÔNG ĐƯỢC LÀM
 */
export default function FirstAidSteps({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="ai-steps-box mb-4 p-3 p-md-4 bg-white rounded-4 border shadow-sm">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-2">
        <span style={{ fontSize: '20px' }} aria-hidden="true">📋</span>
        <h3 className="h5 fw-heavy text-dark mb-0">
          CÁC BƯỚC XỬ LÝ SƠ CỨU CẦN LÀM
        </h3>
      </div>

      <div className="steps-list d-flex flex-column gap-3">
        {steps.map((step, idx) => {
          const isDangerNotice = step.isDo === false || step.title.toLowerCase().includes('không');

          return (
            <div
              key={idx}
              className={`p-3 rounded-3 border ${
                isDangerNotice ? 'bg-danger-subtle border-danger' : 'bg-light border-light-subtle'
              }`}
            >
              <div className="d-flex align-items-start gap-3">
                {/* Số thứ tự bước */}
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0 text-white shadow-sm"
                  style={{
                    width: '36px',
                    height: '36px',
                    minWidth: '36px',
                    minHeight: '36px',
                    fontSize: '15px',
                    backgroundColor: isDangerNotice ? 'var(--emergency)' : 'var(--visi-primary)'
                  }}
                >
                  {step.num || `0${idx + 1}`}
                </div>

                {/* Nội dung bước */}
                <div className="flex-grow-1">
                  <h4
                    className={`h6 fw-heavy mb-1 ${
                      isDangerNotice ? 'text-danger' : 'text-dark'
                    }`}
                  >
                    {isDangerNotice && <span className="me-1">🚫</span>}
                    {step.title}
                  </h4>
                  <p className="text-dark small mb-0" style={{ lineHeight: '1.55' }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
