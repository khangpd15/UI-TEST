import React from 'react';

/**
 * WarningSigns Component (Mục 5)
 * - Khối "KHI NÀO CẦN ĐI KHÁM?"
 * - Hiển thị các dấu hiệu nguy hiểm cảnh báo người dùng đến bệnh viện
 */
export default function WarningSigns({ warningSigns = [], hotline = "0916 973 161" }) {
  if (!warningSigns || warningSigns.length === 0) return null;

  return (
    <div className="ai-warnings-box mb-4 p-3 p-md-4 bg-white rounded-4 border border-warning shadow-sm">
      <div className="d-flex align-items-center gap-2 mb-3 border-bottom pb-2">
        <span style={{ fontSize: '20px' }} aria-hidden="true">⚠️</span>
        <h3 className="h5 fw-heavy text-dark mb-0">
          KHI NÀO CẦN ĐI CẤP CỨU?
        </h3>
      </div>

      <p className="text-muted small mb-3">
        Hãy đến ngay bệnh viện hoặc cơ sở y tế chuyên khoa mắt nếu xuất hiện một trong các dấu hiệu cảnh báo dưới đây:
      </p>

      <div className="d-flex flex-column gap-2 mb-3">
        {warningSigns.map((sign, idx) => (
          <div key={idx} className="d-flex align-items-start gap-2 p-2 rounded bg-warning-subtle text-dark">
            <i className="bi bi-exclamation-circle-fill text-warning flex-shrink-0 mt-1"></i>
            <span className="small fw-semibold">{sign}</span>
          </div>
        ))}
      </div>

      {/* Nút gọi khẩn cấp nếu có dấu hiệu nặng */}
      <div className="pt-2">
        <a
          href={`tel:${hotline.replace(/\s/g, '')}`}
          className="btn btn-outline-danger fw-bold w-100 py-2 d-flex align-items-center justify-content-center gap-2"
          style={{ minHeight: '46px', borderRadius: '12px' }}
        >
          <i className="bi bi-telephone-fill"></i>
          <span>HỖ TRỢ TƯ VẤN Y TẾ 24/7: {hotline}</span>
        </a>
      </div>
    </div>
  );
}
