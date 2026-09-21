import React from 'react';
import SeverityBadge from './SeverityBadge';

/**
 * EmergencyDetail Component
 * Cấu trúc bắt buộc theo yêu cầu:
 * 1. Title (chiếm full width card, clamp responsive, không chia cắt từ tiếng Việt)
 * 2. Severity Badge (nằm DƯỚI title, không nằm bên phải)
 * 3. Emergency Instruction (chữ to rõ ràng, không bị ngắt cụt)
 * 4. Primary Emergency Button (full width, tối thiểu 72px, hỗ trợ 2 dòng tự nhiên)
 */
export default function EmergencyDetail({ currentCase, onActionClick, hotline = "0395 151 151" }) {
  if (!currentCase) return null;

  return (
    <div className="emergency-detail-card bg-white rounded-4 border-2 border-danger overflow-hidden shadow-sm mb-4">
      <div className="row g-0 align-items-center">
        {/* Cột trái: Hình ảnh y tế lớn */}
        <div className="col-12 col-md-5">
          <div
            className="w-100 bg-light d-flex align-items-center justify-content-center p-3 p-md-4"
            style={{ minHeight: '260px' }}
          >
            <img
              src={currentCase.image}
              alt={`Hình minh họa tình trạng ${currentCase.title}`}
              className="img-fluid rounded-3"
              style={{ maxHeight: '280px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Cột phải: Nội dung cấp cứu theo thứ tự chuẩn */}
        <div className="col-12 col-md-7 p-4 p-md-5">
          <div className="condition-detail">
            {/* 1. Title: Chiếm toàn bộ chiều rộng card */}
            <h1 className="condition-title problem-detail-title text-dark">
              {currentCase.title}
            </h1>

            {/* 2. Severity Badge: Nằm riêng biệt DƯỚI title */}
            <div className="condition-severity severity-wrapper">
              <SeverityBadge
                severity={currentCase.severity}
                customText={currentCase.badgeLabel}
              />
            </div>

            {/* 3. Emergency Instruction: Lệnh hành động tức thì */}
            <p className="condition-instruction emergency-instruction text-danger">
              {currentCase.instruction || currentCase.leadHeading}
            </p>

            {/* 4. Primary Emergency Button: Full width */}
            <button
              type="button"
              className="condition-action emergency-action-btn btn btn-emergency-red shadow"
              onClick={onActionClick}
              aria-label="Xem ngay hướng dẫn cấp cứu"
            >
              <span>
                XEM HƯỚNG DẪN<br className="d-sm-none" /> CẤP CỨU ↓
              </span>
            </button>
          </div>

          {/* Hotline hỗ trợ khẩn cấp 24/7 */}
          <div className="mt-3">
            <a
              href={`tel:${hotline.replace(/\s/g, '')}`}
              className="btn btn-outline-danger fw-bold d-inline-flex align-items-center justify-content-center gap-2 w-100 py-2"
              style={{ minHeight: '48px', borderRadius: '12px' }}
            >
              <i className="bi bi-telephone-fill" aria-hidden="true"></i>
              <span>GỌI CẤP CỨU 24/7: {hotline}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
