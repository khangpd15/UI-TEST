import React, { useState, useEffect, useRef } from 'react';
import RemiPenguin from './RemiPenguin';
import RemiChat from './RemiChat';
import './remiMascot.css';

/**
 * RemiMascot: Floating Mascot Chatbot "Remi"
 * Chú chim cánh cụt nhỏ đồng hành chăm sóc mắt cho REMiCare
 * Khả năng:
 * - Chạy từ mép màn hình bên này sang bên kia màn hình (Full Screen Sprint)
 * - Tỏa khói/bụi chân phì phì sau gót chân cực kỳ sống động
 * - Dừng lại nhảy mừng rỡ, ngó nghiêng chào người dùng
 * - Click vào bất cứ lúc nào để mở khung chat tư vấn
 */
export default function RemiMascot({
  activePage = 'home',
  selectedCaseId = null,
  onSelectCase
}) {
  const [isOpen, setIsOpen] = useState(false);
  // Trạng thái: 'entering' | 'resting' | 'sprinting'
  const [mode, setMode] = useState('entering');
  const [restAction, setRestAction] = useState('idle'); // 'idle' | 'jump' | 'tilt'
  const [showGreeting, setShowGreeting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [greetingText, setGreetingText] = useState('👋 Xin chào! Cần Remi giúp gì không?');
  const greetingTimerRef = useRef(null);
  const sprintCycleTimerRef = useRef(null);
  const restActionTimerRef = useRef(null);

  // 1. Kiểm tra kích thước màn hình để responsive kích cỡ mascot (Desktop 70px, Mobile 56px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Hiệu ứng xuất hiện (Entrance) khi mở trang + Speech Bubble
  useEffect(() => {
    if (activePage === 'emergency' && selectedCaseId) {
      setGreetingText('🐧 Bạn cần Remi hỗ trợ tình huống này không?');
    } else {
      setGreetingText('👋 Xin chào! Cần Remi giúp gì không?');
    }

    setMode('entering');
    const enterTimer = setTimeout(() => {
      setMode('resting');
      setShowGreeting(true);

      // Tự biến mất speech bubble sau 4.5 giây
      greetingTimerRef.current = setTimeout(() => {
        setShowGreeting(false);
        // Bắt đầu chu kỳ chạy qua lại màn hình kèm khói
        setMode('sprinting');
      }, 4500);
    }, 1800);

    return () => {
      clearTimeout(enterTimer);
      if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
    };
  }, [activePage, selectedCaseId]);

  // 3. Chu kỳ chuyển đổi giữa Chạy hết màn hình (Sprinting) và Nghỉ tại căn cứ (Resting)
  useEffect(() => {
    if (isOpen || mode === 'entering') return;

    if (mode === 'sprinting') {
      // Một vòng chạy qua chạy lại hết 14 giây
      sprintCycleTimerRef.current = setTimeout(() => {
        // Sau 1 vòng chạy hết màn hình, Remi dừng nghỉ 5 giây tại căn cứ
        setMode('resting');
        setRestAction('jump');

        restActionTimerRef.current = setTimeout(() => {
          setRestAction('idle');
        }, 1500);
      }, 14000);
    } else if (mode === 'resting') {
      // Nghỉ 5 giây rồi tiếp tục phi nước đại qua lại màn hình
      sprintCycleTimerRef.current = setTimeout(() => {
        setMode('sprinting');
      }, 5000);
    }

    return () => {
      if (sprintCycleTimerRef.current) clearTimeout(sprintCycleTimerRef.current);
      if (restActionTimerRef.current) clearTimeout(restActionTimerRef.current);
    };
  }, [mode, isOpen]);

  // Mở Chat khi click vào Remi ở bất cứ vị trí nào trên đường chạy
  const handleToggleChat = () => {
    if (!isOpen) {
      if (sprintCycleTimerRef.current) clearTimeout(sprintCycleTimerRef.current);
      if (restActionTimerRef.current) clearTimeout(restActionTimerRef.current);
      setShowGreeting(false);
      setMode('resting');
      setRestAction('jump');

      setTimeout(() => {
        setIsOpen(true);
      }, 200);
    } else {
      setIsOpen(false);
    }
  };

  // Đóng Chat
  const handleCloseChat = () => {
    setIsOpen(false);
    setMode('resting');
    setRestAction('idle');
  };

  // Kích cỡ mascot
  const mascotSize = isMobile ? 56 : 70;

  // Lớp CSS của khung chạy dọc theo trục màn hình
  const getRunnerClass = () => {
    if (mode === 'entering') return 'remi-entering';
    if (mode === 'sprinting') return 'remi-sprinting-across';
    return 'remi-at-home';
  };

  // Lớp CSS của nút mascot
  const getButtonClass = () => {
    if (mode === 'sprinting') return 'remi-is-sprinting';
    if (mode === 'resting' && restAction === 'jump') return 'remi-anim-jump';
    if (mode === 'resting' && restAction === 'tilt') return 'remi-anim-tilt';
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

      {/* Trục đường chạy ngang màn hình (Mascot Track từ cuối màn hình này qua bên kia) */}
      {!isOpen && (
        <div className="remi-mascot-track" aria-label="Mascot Remi đang tuần tra">
          <div className={`remi-runner-container ${getRunnerClass()}`}>
            {/* Speech Bubble hiển thị khi Remi đang nghỉ ở góc */}
            {showGreeting && mode === 'resting' && (
              <div
                className="remi-greeting-bubble"
                onClick={handleToggleChat}
                role="status"
                aria-live="polite"
              >
                <span className="fw-semibold">{greetingText}</span>
              </div>
            )}

            {/* Nút Mascot Trigger có thể click bất cứ lúc nào */}
            <button
              type="button"
              className={`remi-trigger-btn ${getButtonClass()}`}
              onClick={handleToggleChat}
              aria-label="Mở trợ lý chăm sóc mắt Remi"
              title="Bấm vào Remi để hỏi về mắt!"
            >
              {/* Hiệu ứng khói / bụi chân chạy phì phì (Cartoon Dust/Smoke Trail) */}
              <div className="remi-smoke-trail" aria-hidden="true">
                <span className="remi-puff puff-1"></span>
                <span className="remi-puff puff-2"></span>
                <span className="remi-puff puff-3"></span>
                <span className="remi-puff puff-4"></span>
                <span className="remi-puff puff-5"></span>
                <span className="remi-spark spark-1"></span>
                <span className="remi-spark spark-2"></span>
              </div>

              <RemiPenguin
                size={mascotSize}
                animation={mode === 'sprinting' ? 'waddle' : restAction}
              />

              {/* Chấm tròn báo hiệu sẵn sàng khi nghỉ */}
              {mode === 'resting' && <span className="remi-badge-ping" aria-hidden="true"></span>}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
