import React, { useEffect } from 'react';
import AIAssistant from '../components/AIAssistant/AIAssistant';

/**
 * AIAssistantPage
 * Trang chuyên biệt cho AI Trợ lý Sơ cứu Mắt
 */
export default function AIAssistantPage({ initialCaseId = null, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mobileViewport = document.getElementById('mobile-viewport-scroll');
    if (mobileViewport) mobileViewport.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="ai-assistant-page py-3 py-md-4">
      <div className="container">
        <AIAssistant
          initialCaseId={initialCaseId}
          onBack={onBack}
          hotline="0916 973 161"
        />
      </div>
    </div>
  );
}
