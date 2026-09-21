import React, { useEffect } from 'react';
import AIAssistant from '../components/AIAssistant/AIAssistant';
import { firstAidCases } from '../data/firstAidData';

/**
 * EmergencyPage - Được nâng cấp toàn diện thành màn hình "AI TRỢ LÝ SƠ CỨU MẮT"
 * Thay vì người dùng phải tự tìm tình huống và đọc hướng dẫn, người dùng có thể nói
 * bằng tiếng Việt về tình huống đang gặp phải. Hệ thống sử dụng Speech-to-Text để
 * chuyển giọng nói thành văn bản, phân tích tình huống, xác định nhóm sự cố mắt phù hợp,
 * kiểm tra dấu hiệu cảnh báo, sau đó cung cấp hướng dẫn sơ cứu phù hợp kèm video và giọng đọc.
 */
export default function EmergencyPage({ caseId = 'dust-in-eye', onBack, onSelectOtherCase }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mobileViewport = document.getElementById('mobile-viewport-scroll');
    if (mobileViewport) mobileViewport.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseId]);

  return (
    <div className="emergency-page py-3 py-md-4 animate__animated animate__fadeIn">
      <div className="container">
        {/* 🤖 AI TRỢ LÝ SƠ CỨU MẮT (Thay thế màn hình hướng dẫn xử lý cũ) */}
        <AIAssistant
          initialCaseId={caseId}
          onBack={onBack}
          hotline="0395 151 151"
        />

        {/* Chuyển nhanh sang trường hợp chấn thương mắt khác */}
        <div className="bg-white rounded-4 p-4 border my-4 shadow-sm">
          <h3 className="h6 fw-bold text-muted text-uppercase mb-3">
            <i className="bi bi-arrow-repeat text-visi-primary me-2"></i>
            Hoặc chọn nhanh trường hợp mắt đã định danh trong hệ thống:
          </h3>
          <div className="d-flex flex-wrap gap-2">
            {Object.keys(firstAidCases).map((key) => {
              const c = firstAidCases[key];
              if (key === caseId) return null;
              return (
                <button
                  key={key}
                  type="button"
                  className="btn btn-outline-secondary btn-sm py-2 px-3 fw-bold bg-white"
                  onClick={() => onSelectOtherCase && onSelectOtherCase(key)}
                  style={{ minHeight: '40px', borderRadius: '10px' }}
                >
                  <span className="me-1">👉</span>
                  <span>{c.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
