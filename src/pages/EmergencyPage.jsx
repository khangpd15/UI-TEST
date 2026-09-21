import React, { useEffect } from 'react';
import AIAssistant from '../components/AIAssistant/AIAssistant';
import { firstAidList } from '../data/firstAidData';

/**
 * EmergencyPage - AI Trợ lý sơ cứu mắt
 */
export default function EmergencyPage({ caseId = 'EM-03', onBack, onSelectOtherCase }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mobileViewport = document.getElementById('mobile-viewport-scroll');
    if (mobileViewport) mobileViewport.scrollTo({ top: 0, behavior: 'smooth' });
  }, [caseId]);

  return (
    <div className="emergency-page py-3 py-md-4 animate__animated animate__fadeIn">
      <div className="container">
        {/* 🤖 AI TRỢ LÝ SƠ CỨU MẮT */}
        <AIAssistant
          initialCaseId={caseId}
          onBack={onBack}
          hotline="0395 151 151"
        />

        {/* Chuyển nhanh sang trường hợp cấp cứu mắt khác (EM-01 đến EM-06) */}
        <div className="bg-white rounded-4 p-4 border my-4 shadow-sm">
          <h3 className="h6 fw-bold text-muted text-uppercase mb-3">
            <i className="bi bi-arrow-repeat text-visi-primary me-2"></i>
            Hoặc chọn nhanh trường hợp cấp cứu chuẩn hóa (EM-01 → EM-06):
          </h3>
          <div className="d-flex flex-wrap gap-2">
            {firstAidList.map((item) => {
              if (item.id === caseId || item.audio_id === caseId) return null;
              return (
                <button
                  key={item.id}
                  type="button"
                  className="btn btn-outline-secondary btn-sm py-2 px-3 fw-bold bg-white"
                  onClick={() => onSelectOtherCase && onSelectOtherCase(item.id)}
                  style={{ minHeight: '40px', borderRadius: '10px' }}
                >
                  <span className="me-1">{item.icon}</span>
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
