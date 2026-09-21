import React, { useState, useEffect, useRef } from 'react';
import RemiPenguin from './RemiPenguin';
import RemiChat from './RemiChat';
import './remiMascot.css';

/**
 * RemiMascot: Floating Mascot Chatbot "Remi"
 * Chú chim cánh cụt nhỏ đồng hành chăm sóc mắt cho REMiCare
 */
export default function RemiMascot({
  activePage = 'home',
  selectedCaseId = null,
  onSelectCase
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [animState, setAnimState] = useState('idle'); // 'idle' | 'waddle' | 'jump' | 'tilt'
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [greetingText, setGreetingText] = useState('👋 Xin chào! Cần Remi giúp gì không?');
  const greetingTimerRef = useRef(null);
  const idleIntervalRef = useRef(null);
  const animResetTimerRef = useRef(null);

  // 1. Kiểm tra kích thước màn hình để responsive kích cỡ mascot (Desktop 64-80px, Mobile 52-64px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Hiệu ứng xuất hiện khi mở trang + Speech Bubble tự biến mất sau 4.5 giây
  useEffect(() => {
    // Nếu đang ở trang sơ cứu một case cụ thể, cập nhật câu chào nhẹ
    if (activePage === 'emergency' && selectedCaseId) {
      setGreetingText('🐧 Bạn cần Remi hỗ trợ tình huống này không?');
    } else {
      setGreetingText('👋 Xin chào! Cần Remi giúp gì không?');
    }

    const enterTimer = setTimeout(() => {
      setShowGreeting(true);
      // Tự biến mất sau 4.5 giây
      greetingTimerRef.current = setTimeout(() => {
        setShowGreeting(false);
      }, 4500);
    }, 900);

    return () => {
      clearTimeout(enterTimer);
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    };
  }, [activePage, selectedCaseId]);

  // 3. Chu kỳ hoạt ảnh tự nhiên khi mascot đang nghỉ (không đứng im, không spam liên tục)
  useEffect(() => {
    if (isOpen) {
      setAnimState('idle');
      return;
    }

    // Cứ 8 - 11 giây thực hiện một cử động nhẹ (waddle / jump / tilt)
    idleIntervalRef.current = setInterval(() => {
      const animations = ['waddle', 'jump', 'tilt'];
      const nextAnim = animations[Math.floor(Math.random() * animations.length)];
      setAnimState(nextAnim);

      // Sau 1.5 giây thì trở về trạng thái nghỉ
      animResetTimerRef.current = setTimeout(() => {
        setAnimState('idle');
      }, 1500);
    }, 9000);

    return () => {
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      if (animResetTimerRef.current) clearTimeout(animResetTimerRef.current);
    };
  }, [isOpen]);

  // Mở Chat khi click vào Remi
  const handleToggleChat = () => {
    if (!isOpen) {
      // Nhảy nhẹ một cái rồi mở chat
      setAnimState('jump');
      setShowGreeting(false);
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);

      setTimeout(() => {
        setIsOpen(true);
        setAnimState('idle');
      }, 200);
    } else {
      setIsOpen(false);
    }
  };

  // Đóng Chat
  const handleCloseChat = () => {
    setIsOpen(false);
    setAnimState('idle');
  };

  // Kích cỡ mascot: Desktop: 70px (64–80px), Mobile: 56px (52–64px)
  const mascotSize = isMobile ? 56 : 70;

  return (
    <>
      {/* Khung Chat Panel khi được mở */}
      {isOpen && (
        <RemiChat
          activePage={activePage}
          selectedCaseId={selectedCaseId}
          onSelectCase={onSelectCase}
          onClose={handleCloseChat}
        />
      )}

      {/* Floating Mascot Button */}
      <div className="remi-mascot-wrapper">
        {/* Speech Bubble hiển thị ngắn khi vào trang */}
        {!isOpen && showGreeting && (
          <div
            className="remi-greeting-bubble"
            onClick={handleToggleChat}
            role="status"
            aria-live="polite"
          >
            <span className="fw-semibold">{greetingText}</span>
          </div>
        )}

        {/* Nút Mascot Trigger */}
        <button
          type="button"
          className={`remi-trigger-btn remi-entrance ${
            animState !== 'idle' ? `remi-anim-${animState}` : ''
          }`}
          onClick={handleToggleChat}
          aria-label={isOpen ? "Đóng trợ lý Remi" : "Mở trợ lý chăm sóc mắt Remi"}
          aria-expanded={isOpen}
          title="Trợ lý Remi - Bạn đồng hành chăm sóc mắt"
        >
          <RemiPenguin size={mascotSize} animation={isOpen ? 'idle' : animState} />
          
          {/* Chấm tròn báo hiệu sẵn sàng */}
          {!isOpen && <span className="remi-badge-ping" aria-hidden="true"></span>}
        </button>
      </div>
    </>
  );
}
