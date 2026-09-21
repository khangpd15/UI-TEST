import React, { useState, useEffect, useRef } from 'react';
import RemiPenguin from './RemiPenguin';
import RemiChat from './RemiChat';
import './remiMascot.css';

// Danh sách câu nói khi chạy tới chính giữa màn hình (Ưu tiên câu user yêu cầu)
const CENTER_QUOTES = [
  "😜 Đố anh bắt được em!",
  "😜 Đố anh bắt được em!", // Tăng trọng số xuất hiện
  "🏃‍♂️ Đố bạn bắt được Remi!",
  "💨 Bắt hụt rùi nha lêu lêu!",
  "⚡ Nhanh như một cơn gió!",
  "😎 Thử bắt Remi xem nào!",
  "🐧 Chạy ngay đi trước khi mắt mỏi!"
];

// Danh sách câu nói trend / mẹo chăm sóc mắt thú vị ở các vị trí khác
const TREND_QUOTES = [
  "👀 Mắt sáng ngời ngời dáng xinh nha!",
  "🧊 20-20-20: Nhìn xa 6m thư giãn đi bạn!",
  "✨ Đừng nhìn màn hình lâu quá đó nha!",
  "🐧 Tui chỉ là chú chim cánh cụt thui mà!",
  "💖 Bắt được Remi có thưởng lớn nha!",
  "👁️ Giữ khoảng cách 50cm với màn hình nghen!",
  "🌿 Cho mắt nghỉ ngơi 30 giây đi bạn ui!",
  "🔥 Mắt khỏe để đu trend nha!",
  "💧 Mỏi mắt thì chớp mắt vài cái nha!"
];

const HOME_QUOTES = [
  "👋 Cần Remi tư vấn mắt gì không?",
  "🐧 Bạn muốn hỏi gì cứ bấm Remi nha!",
  "💡 Cần sơ cứu mắt gì cứ hỏi Remi nghen!"
];

/**
 * RemiMascot: Floating Mascot Chatbot "Remi"
 * Chú chim cánh cụt nhỏ đồng hành chăm sóc mắt cho REMiCare
 * Khả năng:
 * - Chạy ngang suốt từ mép phải sang mép trái màn hình
 * - Dừng ở chính giữa màn hình nói "Đố anh bắt được em!"
 * - Dừng ở các vị trí nói câu trend thú vị
 * - Hiệu ứng khói/bụi chân phì phì sau gót chân cực kỳ sống động
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
  const [isFeetActive, setIsFeetActive] = useState(false); // Quạt chân khi đang chạy
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleText, setBubbleText] = useState('👋 Xin chào! Cần Remi giúp gì không?');
  const [isMobile, setIsMobile] = useState(false);

  const timersRef = useRef([]);
  const sprintIndexRef = useRef(0);

  // Xóa sạch toàn bộ timer đang chờ
  const clearAllTimers = () => {
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
  };

  const addTimer = (fn, delay) => {
    const t = setTimeout(fn, delay);
    timersRef.current.push(t);
    return t;
  };

  // 1. Kiểm tra kích thước màn hình để responsive kích cỡ mascot (Desktop 70px, Mobile 56px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 576);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. Hiệu ứng xuất hiện khi mở trang + Chào ban đầu
  useEffect(() => {
    clearAllTimers();

    let initialGreeting = '👋 Xin chào! Cần Remi giúp gì không?';
    if (activePage === 'emergency' && selectedCaseId) {
      initialGreeting = '🐧 Bạn cần Remi hỗ trợ tình huống này không?';
    }

    setMode('entering');
    setBubbleText(initialGreeting);

    // Sau 1.8s Remi vào vị trí góc phải
    addTimer(() => {
      setMode('resting');
      setShowBubble(true);

      // 4.5 giây sau ẩn lời chào và bắt đầu chạy qua lại màn hình
      addTimer(() => {
        setShowBubble(false);
        setMode('sprinting');
      }, 4200);
    }, 1800);

    return () => clearAllTimers();
  }, [activePage, selectedCaseId]);

  // 3. Quản lý chu kỳ Chạy qua lại màn hình & Dừng nói chuyện ở chính giữa / mép
  useEffect(() => {
    if (isOpen || mode === 'entering') return;

    if (mode === 'sprinting') {
      setIsFeetActive(true);
      const sprintCount = sprintIndexRef.current;
      sprintIndexRef.current += 1;

      // --- Điểm dừng 1: CHÍNH GIỮA MÀN HÌNH (t = 3.2s) ---
      addTimer(() => {
        setIsFeetActive(false); // Dừng guồng chân

        // Ưu tiên tuyệt đối câu "Đố anh bắt được em!"
        let quote = "😜 Đố anh bắt được em!";
        if (sprintCount > 0) {
          quote = CENTER_QUOTES[Math.floor(Math.random() * CENTER_QUOTES.length)];
        }
        setBubbleText(quote);
        setShowBubble(true);
      }, 3200);

      // Tiếp tục chạy từ giữa sang trái (t = 5.4s)
      addTimer(() => {
        setShowBubble(false);
        setIsFeetActive(true);
      }, 5400);

      // --- Điểm dừng 2: MÉP TRÁI MÀN HÌNH (t = 8.0s) ---
      addTimer(() => {
        setIsFeetActive(false); // Dừng guồng chân
        const trendQuote = TREND_QUOTES[Math.floor(Math.random() * TREND_QUOTES.length)];
        setBubbleText(trendQuote);
        setShowBubble(true);
      }, 8000);

      // Tiếp tục chạy từ trái về phải (t = 10.2s)
      addTimer(() => {
        setShowBubble(false);
        setIsFeetActive(true);
      }, 10200);

      // --- Điểm dừng 3: VỀ ĐÍCH MÉP PHẢI (t = 15.0s) ---
      addTimer(() => {
        setIsFeetActive(false);
        const homeQuote = HOME_QUOTES[Math.floor(Math.random() * HOME_QUOTES.length)];
        setBubbleText(homeQuote);
        setShowBubble(true);
      }, 15000);

      // Hoàn thành vòng chạy 16s, chuyển sang nghỉ ngơi
      addTimer(() => {
        setMode('resting');
        setRestAction('jump');

        addTimer(() => {
          setRestAction('idle');
        }, 1500);

        // Sau 4 giây nghỉ, ẩn bubble và bắt đầu chu kỳ chạy tiếp theo
        addTimer(() => {
          setShowBubble(false);
          setMode('sprinting');
        }, 4500);
      }, 16000);

    } else if (mode === 'resting') {
      setIsFeetActive(false);
    }

    return () => clearAllTimers();
  }, [mode, isOpen]);

  // Mở Chat khi click vào Remi ở bất cứ vị trí nào trên đường chạy
  const handleToggleChat = () => {
    if (!isOpen) {
      clearAllTimers();
      setShowBubble(false);
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
    let classes = [];
    if (mode === 'sprinting') {
      classes.push('remi-is-sprinting');
      if (isFeetActive) classes.push('remi-feet-active');
    }
    if (mode === 'resting') {
      if (restAction === 'jump') classes.push('remi-anim-jump');
      if (restAction === 'tilt') classes.push('remi-anim-tilt');
    }
    return classes.join(' ');
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

      {/* Trục đường chạy ngang màn hình từ mép bên này sang bên kia */}
      {!isOpen && (
        <div className="remi-mascot-track" aria-label="Mascot Remi đang tuần tra">
          <div className={`remi-runner-container ${getRunnerClass()}`}>
            {/* Speech Bubble hiển thị câu nói "Đố anh bắt được em" hoặc câu trend */}
            {showBubble && (
              <div
                className="remi-greeting-bubble"
                onClick={handleToggleChat}
                role="status"
                aria-live="polite"
              >
                <span>{bubbleText}</span>
              </div>
            )}

            {/* Nút Mascot Trigger có thể bấm bất cứ lúc nào */}
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
                animation={isFeetActive ? 'waddle' : restAction}
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
