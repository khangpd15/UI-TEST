import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmergencyFloatingButton from './components/EmergencyFloatingButton';
import VoiceAssistant from './components/VoiceAssistant';
import RemiMascot from './components/RemiMascot/RemiMascot';
import DeviceViewSwitcher from './components/DeviceViewSwitcher';

// Pages
import HomePage from './pages/HomePage';
import EmergencyPage from './pages/EmergencyPage';
import FirstAidPage from './pages/FirstAidPage';
import KnowledgePage from './pages/KnowledgePage';
import AIAssistantPage from './pages/AIAssistantPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCaseId, setSelectedCaseId] = useState('chemical-splash');
  const [textScale, setTextScale] = useState('normal'); // 'normal' | 'large' | 'xlarge'

  // Cập nhật class trên <body> khi đổi kích cỡ chữ cho người cao tuổi
  useEffect(() => {
    document.body.classList.remove('scale-normal', 'scale-large', 'scale-xlarge');
    document.body.classList.add(`scale-${textScale}`);
  }, [textScale]);

  // Cuộn lên đầu trang (hỗ trợ cả cuộn cửa sổ và cuộn khung mobile viewport)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mobileViewport = document.getElementById('mobile-viewport-scroll');
    if (mobileViewport) {
      mobileViewport.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Điều hướng tới trang cấp cứu chi tiết
  const handleSelectProblem = (caseId) => {
    setSelectedCaseId(caseId);
    setActivePage('emergency');
    scrollToTop();
  };

  // Điều hướng trang chung
  const handleNavigate = (page) => {
    if (page === 'eye-problems') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('problem-cards-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setActivePage(page);
      scrollToTop();
    }
  };

  // Mở modal cuộc gọi khẩn cấp
  const handleTriggerEmergencyCall = () => {
    const btn = document.querySelector('.emergency-floating-action-btn');
    if (btn) btn.click();
  };

  return (
    <DeviceViewSwitcher>
      <div className="d-flex flex-column min-vh-100 position-relative w-100">
        {/* 1. Header Navigation & Accessibility Controls (Section 4) */}
        <Navbar
          activePage={activePage}
          setActivePage={handleNavigate}
          textScale={textScale}
          setTextScale={setTextScale}
          onCallEmergency={handleTriggerEmergencyCall}
        />

        {/* 2. Main Content Wrapper */}
        <main id="main-content" className="flex-grow-1 page-content-wrapper" tabIndex={-1}>
          {activePage === 'home' && (
            <HomePage
              onSelectProblem={handleSelectProblem}
              onNavigate={handleNavigate}
              onOpenVoiceAssistant={() => handleNavigate('ai-assistant')}
            />
          )}

          {activePage === 'ai-assistant' && (
            <AIAssistantPage
              onBack={() => setActivePage('home')}
            />
          )}

          {activePage === 'emergency' && (
            <EmergencyPage
              caseId={selectedCaseId}
              onBack={() => setActivePage('home')}
              onSelectOtherCase={(newCaseId) => setSelectedCaseId(newCaseId)}
            />
          )}

          {activePage === 'first-aid' && (
            <FirstAidPage
              onSelectCase={handleSelectProblem}
            />
          )}

          {activePage === 'knowledge' && (
            <KnowledgePage />
          )}
        </main>

        {/* 3. Footer (Section 16) */}
        <Footer
          onNavigate={handleNavigate}
          onCallEmergency={handleTriggerEmergencyCall}
        />

        {/* 4. Floating Mascot Chatbot "Remi" (Đồng hành chăm sóc mắt trên toàn website) */}
        <RemiMascot
          activePage={activePage}
          selectedCaseId={selectedCaseId}
          onSelectCase={handleSelectProblem}
        />

        {/* 5. Fixed Emergency Floating Button (Section 13: bottom: 16px; left: 16px; right: 16px;) */}
        <EmergencyFloatingButton
          hotline="0916973161"
        />
      </div>
    </DeviceViewSwitcher>
  );
}
