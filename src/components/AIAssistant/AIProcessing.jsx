import React from 'react';

/**
 * AIProcessing Component (Mục 3)
 * - Hiển thị trạng thái phân tích tình huống y tế
 */
export default function AIProcessing() {
  return (
    <div className="ai-processing-box my-4 p-4 text-center bg-white rounded-4 border shadow-sm animate__animated animate__fadeIn">
      <div className="d-inline-flex align-items-center justify-content-center bg-light text-visi-primary rounded-circle mb-3 p-3 border">
        <div className="spinner-border text-visi-primary" role="status" style={{ width: '48px', height: '48px' }}>
          <span className="visually-hidden">Đang phân tích...</span>
        </div>
      </div>

      <h3 className="h4 fw-heavy text-dark mb-2 d-flex align-items-center justify-content-center gap-2">
        <span aria-hidden="true">🤖</span>
        <span>ĐANG PHÂN TÍCH TÌNH HUỐNG</span>
      </h3>

      <p className="text-muted fs-6 mb-3">
        "Đang xác định nhóm sự cố mắt và đối chiếu dấu hiệu cảnh báo y tế..."
      </p>

      {/* Thanh tiến trình mô phỏng các bước kiểm tra */}
      <div className="progress mx-auto" style={{ height: '6px', maxWidth: '320px' }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-visi-primary"
          role="progressbar"
          style={{ width: '85%' }}
          aria-valuenow={85}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}
