import React from 'react';
import SeverityBadge from '../components/SeverityBadge';
import { firstAidList } from '../data/firstAidData';

export default function FirstAidPage({ onSelectCase }) {
  return (
    <div className="first-aid-page py-4 py-md-5 section-soft-teal animate__animated animate__fadeIn">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4 pb-2 max-w-md mx-auto">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-white border border-danger border-opacity-50 rounded-pill mb-2">
            <i className="bi bi-bandaid-fill text-danger"></i>
            <span className="small fw-bold text-danger">
              HƯỚNG DẪN CẤP CỨU NHÃN KHOA
            </span>
          </div>
          <h1 className="h1 fw-heavy mb-2">
            SƠ CỨU CHẤN THƯƠNG MẮT
          </h1>
          <p className="text-muted fs-6 mb-0">
            Chọn tai nạn xảy ra để xem quy trình 3 bước xử trí đúng chuẩn y tế.
          </p>
        </div>

        {/* Danh sách các card chấn thương: col-12 col-sm-6 col-lg-4 */}
        <div className="row g-3 g-md-4">
          {firstAidList.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <div
                className="problem-card h-100"
                onClick={() => onSelectCase && onSelectCase(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    if (onSelectCase) onSelectCase(item.id);
                  }
                }}
                aria-label={`Sơ cứu: ${item.title}`}
              >
                <div className="problem-card-image-wrapper position-relative">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div
                    className="position-absolute top-0 start-0 m-2 badge bg-white text-dark shadow-sm border px-2 py-1 fs-6 d-flex align-items-center gap-1"
                  >
                    <span>{item.icon}</span>
                    <span className="badge bg-dark text-white font-monospace me-1">{item.audio_id || item.id}</span>
                    <span className="fw-bold">{item.title}</span>
                  </div>
                </div>

                <div className="problem-card-body">
                  <div>
                    <div className="mb-2">
                      <SeverityBadge severity={item.severity} customText={item.badgeText} />
                    </div>
                    <p className="small text-muted mb-2">
                      <strong>Dấu hiệu:</strong> {item.brief}
                    </p>
                    <div className="p-2 rounded bg-light border mb-2">
                      <span className="small fw-bold text-danger d-block">
                        ⚡ Hành động: {item.action}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-visi-primary w-100 fw-bold mt-2"
                    style={{ minHeight: '46px' }}
                  >
                    <span>XEM HƯỚNG DẪN 3 BƯỚC →</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
