import React, { useState, useEffect, useRef } from 'react';
import RemiPenguin from './RemiPenguin';
import RemiChat from './RemiChat';
import './remiMascot.css';

/**
 * RemiMascot: Floating Mascot Chatbot "Remi"
 * Chú chim cánh cụt nhỏ đồng hành chăm sóc mắt cho REMiCare
 * Có khả năng chạy lon ton qua lại trên màn hình, nhảy và tương tác thân thiện
 */
export default function RemiMascot({
  activePage = 'home',
  selectedCaseId = null,
  onSelectCase
}) {
  const [isOpen, setIsOpen] = useState(false);
  // Trạng thái hoạt ảnh: 'entrance' | 'idle' | 'patrol' | 'jump' | 'tilt'
  const [animState, setAnimState] = useState('entrance');
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

  // 2. Hiệu ứng bước vào màn hình (Entrance Walk) khi tải trang + Speech Bubble
  useEffect(() => {
    // Nếu đang ở trang sơ cứu một case cụ thể, cập nhật câu chào ngữ cảnh
    if (activePage === 'emergency' && selectedCaseId) {
      setGreetingText('🐧 Bạn cần Remi hỗ trợ tình huống này không?');
    } else {
      setGreetingText('👋 Xin chào! Cần Remi giúp gì không?');
    }

    // Remi chạy từ ngoài vào vị trí trong 1.8s
    setAnimState('entrance');
    const entranceTimer = setTimeout(() => {
      setAnimState('idle');
      setShowGreeting(true);

      // Tự biến mất speech bubble sau 4.5 giây
      greetingTimerRef.current = setTimeout(() => {
        setShowGreeting(false);
      }, 4500);
    }, 1800);

    return () => {
      clearTimeout(entranceTimer);
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    };
  }, [activePage, selectedCaseId]);

  // 3. Chu kỳ hoạt động sống động: Chạy qua chạy lại (Patrol), Nhảy (Jump), Nghiêng đầu (Tilt)
  useEffect(() => {
    if (isOpen) {
      setAnimState('idle');
      return;
    }

    // Danh sách các hành động có trọng số để ưu tiên chạy qua chạy lại (patrol)
    const actionPool = ['patrol', 'patrol', 'patrol', 'jump', 'tilt'];
    let actionIndex = 0;

    // Bắt đầu chu kỳ cử động sau khi lời chào ban đầu kết thúc
    const startIdleCycle = () => {
      idleIntervalRef.current = setInterval(() => {
        const nextAction = actionPool[actionIndex % actionPool.length];
        actionIndex++;
        setAnimState(nextAction);

        // Thời gian reset về idle tương ứng theo từng chuyển động
        let duration = 5000; // 'patrol' kéo dài 5s
        if (nextAction === 'jump') duration = 1200;
        if (nextAction === 'tilt') duration = 1500;

        if (animResetTimerRef.current) clearTimeout(animResetTimerRef.current);
        animResetTimerRef.current = setTimeout(() => {
          setAnimState('idle');
        }, duration);
      }, 8500);
    };

    // Khởi động chu kỳ sau 5 giây để không chồng chéo với entrance
    const initialDelay = setTimeout(startIdleCycle, 5000);

    return () => {
      clearTimeout(initialDelay);
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      if (animResetTimerRef.current) clearTimeout(animResetTimerRef.current);
    };
  }, [isOpen]);

  // Mở Chat khi click vào Remi
  const handleToggleChat = () => {
    if (!isOpen) {
      // Dừng ngay mọi cử động chạy và nhảy nhẹ mở chat
      if (idleIntervalRef.current) clearInterval(idleIntervalRef.current);
      if (animResetTimerRef.current) clearTimeout(animResetTimerRef.current);
      setAnimState('jump');
      setShowGreeting(false);
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);

      setTimeout(() => {
        setIsOpen(true);
        setAnimState('idle');
      }, 250);
    } else {
      setIsOpen(false);
    }
  };

  // Đóng Chat
  const handleCloseChat = () => {
    setIsOpen(false);
    setAnimState('idle');
  };

  // Kích cỡ mascot: Desktop: 70px (trong khoảng 64–80px), Mobile: 56px (trong khoảng 52–64px)
  const mascotSize = isMobile ? 56 : 70;

  // Lớp CSS theo trạng thái cử động
  const getAnimationClass = () => {
    if (animState === 'entrance') return 'remi-entrance-walk';
    if (animState === 'patrol') return 'remi-anim-patrol';
    if (animState === 'jump') return 'remi-anim-jump';
    if (animState === 'tilt') return 'remi-anim-tilt';
    return '';
  };

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
        {/* Speech Bubble hiển thị ngắn khi vào trang (chỉ hiện khi không đang chạy) */}
        {!isOpen && showGreeting && animState !== 'patrol' && (
          <div
            className="remi-greeting-bubble"
            onClick={handleToggleChat}
            role="status"
            aria-live="polite"
          >
            <span className="fw-semibold">{greetingText}</span>
          </div>
        )}

        {/* Nút Mascot Trigger với animation chạy qua chạy lại */}
        <button
          type="button"
          className={`remi-trigger-btn ${getAnimationClass()}`}
          onClick={handleToggleChat}
          aria-label={isOpen ? "Đóng trợ lý Remi" : "Mở trợ lý chăm sóc mắt Remi"}
          aria-expanded={isOpen}
          title="Trợ lý Remi - Bạn đồng hành chăm sóc mắt"
        >
          <RemiPenguin
            size={mascotSize}
            animation={isOpen ? 'idle' : animState}
          />

          {/* Chấm tròn báo hiệu sẵn sàng */}
          {!isOpen && <span className="remi-badge-ping" aria-hidden="true"></span>}
        </button>
      </div>
    </>
  );
}
