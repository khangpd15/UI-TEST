import React from 'react';

/**
 * RedFlagAlert Component (Mục 4)
 * - Cảnh báo khẩn cấp khi phát hiện dấu hiệu nguy hiểm
 * - Tuân thủ nguyên tắc an toàn: Không khẳng định bệnh, không chẩn đoán y khoa
 * - Cung cấp 3 nút: [📞 GỌI HỖ TRỢ], [🏥 ĐẾN CƠ SỞ Y TẾ], [▶ XEM HƯỚNG DẪN AN TOÀN]
 */
export default function RedFlagAlert({
  redFlags = [],
  onViewSafeSteps,
  hotline = "0916 973 161"
}) {
  const hotlineClean = hotline.replace(/\s/g, '');

  return (
    <div className="ai-redflag-box my-3 p-3 p-md-4 bg-white rounded-4 border-2 border-danger shadow animate__animated animate__shakeX">
      {/* 1. Header cảnh báo */}
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="badge bg-danger text-white px-3 py-2 fs-6 fw-bold d-inline-flex align-items-center gap-2">
          <span style={{ fontSize: '18px' }} aria-hidden="true">⚠️</span>
          <span>CẢNH BÁO NGUY HIỂM</span>
        </span>
      </div>

      <h3 className="h4 fw-heavy text-danger mb-2">
        Thông tin bạn cung cấp có dấu hiệu cần được nhân viên y tế đánh giá khẩn cấp!
      </h3>

      <p className="text-dark fw-medium fs-6 mb-3">
        Hệ thống phát hiện các yếu tố rủi ro tổn thương thị lực cần can thiệp chuyên môn ngay:
      </p>

      {/* Danh sách các Red Flags phát hiện */}
      {redFlags.length > 0 && (
        <ul className="list-group list-group-flush mb-4 rounded-3 border">
          {redFlags.map((flag, idx) => (
            <li key={idx} className="list-group-item list-group-item-danger d-flex align-items-center gap-2 py-2 fw-bold small">
              <i className="bi bi-exclamation-triangle-fill text-danger"></i>
              <span>{flag}</span>
            </li>
          ))}
        </ul>
      )}

      {/* 3 Nút hành động y tế khẩn cấp (Mục 4) */}
      <div className="d-grid gap-2">
        {/* Nút 1: Gọi Hotline hỗ trợ y tế khẩn cấp */}
        <a
          href={`tel:${hotlineClean}`}
          className="btn btn-danger btn-lg py-3 fw-bold d-flex align-items-center justify-content-center gap-2 shadow"
          style={{ minHeight: '56px', borderRadius: '14px', fontSize: '1.1rem' }}
        >
          <i className="bi bi-telephone-fill fs-5" aria-hidden="true"></i>
          <span>GỌI CẤP CỨU MẮT 24/7: {hotline}</span>
        </a>

        {/* Nút 2: Đến cơ sở y tế gần nhất */}
        <a
          href="https://maps.google.com/?q=bệnh+viện+mắt+gần+nhất"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger btn-lg py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
          style={{ minHeight: '52px', borderRadius: '14px' }}
        >
          <span style={{ fontSize: '20px' }} aria-hidden="true">🏥</span>
          <span>TÌM BỆNH VIỆN MẮT GẦN NHẤT</span>
        </a>

        {/* Nút 3: Xem hướng dẫn sơ cứu an toàn tức thì */}
        <button
          type="button"
          className="btn btn-light border py-3 fw-bold text-dark d-flex align-items-center justify-content-center gap-2 mt-1"
          onClick={onViewSafeSteps}
          style={{ minHeight: '50px', borderRadius: '14px' }}
        >
          <span aria-hidden="true">▶</span>
          <span>XEM HƯỚNG DẪN XỬ LÝ AN TOÀN TỨC THÌ</span>
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-3 pt-2 text-center text-muted small border-top">
        <i className="bi bi-shield-check me-1"></i>
        <span>AI chỉ cung cấp hướng dẫn hỗ trợ ban đầu, không thay thế chẩn đoán hoặc tư vấn trực tiếp từ nhân viên y tế.</span>
      </div>
    </div>
  );
}
