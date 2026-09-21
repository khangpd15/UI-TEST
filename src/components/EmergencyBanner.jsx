import React from 'react';

export default function EmergencyBanner({ onNavigateToFirstAid }) {
  return (
    <section className="py-4 py-md-5 section-white">
      <div className="container">
        <div className="emergency-banner-box">
          <div className="row align-items-center g-3">
            {/* Cột trái: Icon đỏ & Tiêu đề & Subtext ngắn */}
            <div className="col-12 col-md-8 text-center text-md-start">
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-2">
                <i className="bi bi-exclamation-triangle-fill text-danger fs-3" aria-hidden="true"></i>
                <span className="badge bg-danger text-white px-2 py-1 fw-bold text-uppercase">
                  Cấp cứu nhãn khoa
                </span>
              </div>

              <h2 className="emergency-banner-title">
                MẮT BỊ CHẤN THƯƠNG?
              </h2>

              <p className="fs-5 fw-semibold mb-0" style={{ color: 'var(--emergency-dark)' }}>
                Một số trường hợp cần được xử lý ngay để bảo toàn thị lực. Tuyệt đối không tự ý dụi mắt.
              </p>
            </div>

            {/* Cột phải: Button xem hướng dẫn sơ cứu */}
            <div className="col-12 col-md-4 text-center text-md-end">
              <button
                type="button"
                className="btn btn-emergency-red btn-lg py-3 px-4 fw-bold shadow-sm w-100 w-md-auto"
                onClick={onNavigateToFirstAid}
                style={{ minHeight: '52px' }}
              >
                <span>🔴 XEM HƯỚNG DẪN SƠ CỨU</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
