import React, { useState, useEffect } from 'react';

/**
 * DeviceViewSwitcher:
 * Cung cấp bảng chuyển đổi giữa chế độ Desktop toàn màn hình và
 * chế độ giả lập điện thoại Mobile chân thực (iPhone 390x844 / 375x812 / Tablet 768px)
 * sử dụng iframe để kích hoạt 100% CSS Media Queries thực của thiết bị di động.
 */
export default function DeviceViewSwitcher({ children }) {
  const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top;
  const [deviceMode, setDeviceMode] = useState('mobile-390'); // 'mobile-390' | 'mobile-375' | 'tablet-768' | 'desktop'
  const [isToolbarVisible, setIsToolbarVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState('09:41');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  // Đánh dấu thẻ html/body khi đang chạy trong iframe điện thoại để tối ưu thanh cuộn
  useEffect(() => {
    if (isInsideIframe) {
      document.documentElement.classList.add('is-inside-iframe');
      document.body.classList.add('is-inside-iframe');
    }
  }, [isInsideIframe]);

  // Nếu đang chạy bên trong iframe mô phỏng điện thoại, chỉ hiển thị ứng dụng không lặp lại thanh toolbar
  if (isInsideIframe) {
    return <div className="embedded-mobile-root">{children}</div>;
  }

  return (
    <div className="device-switcher-root">
      {/* 1. BẢNG CHUYỂN ĐỔI THIẾT BỊ (TOP TOOLBAR) */}
      {isToolbarVisible ? (
        <aside className="device-toolbar-wrapper" aria-label="Bảng chuyển đổi giao diện Mobile và Desktop">
          <div className="device-toolbar-container">
            {/* Title */}
            <div className="device-toolbar-title">
              <i className="bi bi-phone-fill fs-5" style={{ color: '#38BDF8' }}></i>
              <span>CHẾ ĐỘ XEM GIAO DIỆN:</span>
            </div>

            {/* Switch buttons */}
            <div className="device-btn-group" role="group" aria-label="Chọn kích thước hiển thị">
              <button
                type="button"
                className={`device-mode-btn ${deviceMode === 'mobile-390' ? 'active' : ''}`}
                onClick={() => setDeviceMode('mobile-390')}
                title="Khung điện thoại iPhone / Android chuẩn 390x844"
              >
                <span>📱</span>
                <span>Mobile (390×844)</span>
              </button>

              <button
                type="button"
                className={`device-mode-btn ${deviceMode === 'mobile-375' ? 'active' : ''}`}
                onClick={() => setDeviceMode('mobile-375')}
                title="Khung điện thoại nhỏ gọn 375x812"
              >
                <span>📱</span>
                <span>Mobile Nhỏ (375×812)</span>
              </button>

              <button
                type="button"
                className={`device-mode-btn ${deviceMode === 'tablet-768' ? 'active' : ''}`}
                onClick={() => setDeviceMode('tablet-768')}
                title="Máy tính bảng iPad / Tablet 768px"
              >
                <span>📲</span>
                <span>Tablet (768px)</span>
              </button>

              <button
                type="button"
                className={`device-mode-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
                onClick={() => setDeviceMode('desktop')}
                title="Toàn màn hình máy tính Desktop"
              >
                <span>💻</span>
                <span>Desktop (Full)</span>
              </button>
            </div>

            {/* Spec indicator & Collapse button */}
            <div className="d-flex align-items-center gap-2">
              <span className="device-spec-tag d-none d-sm-inline">
                {deviceMode === 'mobile-390' && 'Đề xuất: 390 × 844 px (Mobile First)'}
                {deviceMode === 'mobile-375' && 'Đề xuất: 375 × 812 px (Compact)'}
                {deviceMode === 'tablet-768' && 'Kích thước: 768 × 960 px'}
                {deviceMode === 'desktop' && 'Kích thước: 100% Toàn màn hình'}
              </span>

              <button
                type="button"
                className="btn btn-sm btn-outline-secondary text-light py-1 px-2 border-0"
                onClick={() => setIsToolbarVisible(false)}
                title="Thu gọn thanh công cụ này"
                style={{ minHeight: '32px' }}
              >
                <i className="bi bi-chevron-up"></i>
              </button>
            </div>
          </div>
        </aside>
      ) : (
        /* Nút mở lại thanh công cụ khi bị thu gọn */
        <button
          type="button"
          className="toolbar-expand-btn"
          onClick={() => setIsToolbarVisible(true)}
          title="Mở bảng chuyển đổi giao diện"
        >
          <i className="bi bi-phone-fill text-info"></i>
          <span>Đổi chế độ xem</span>
        </button>
      )}

      {/* 2. KHUNG HIỂN THỊ NỘI DUNG */}
      {deviceMode === 'desktop' ? (
        /* CHẾ ĐỘ TOÀN MÀN HÌNH DESKTOP (Full width standard) */
        <div className="desktop-view-container">
          {children}
        </div>
      ) : (
        /* CHẾ ĐỘ MÔ PHỎNG ĐIỆN THOẠI (True Mobile First với Iframe) */
        <div className="simulator-backdrop">
          <div className={`phone-mockup-frame mode-${deviceMode}`}>
            {/* Top Status Bar điện thoại */}
            <div className="phone-status-bar">
              <span>{currentTime}</span>
              <div className="phone-dynamic-island"></div>
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-reception-4 fs-6"></i>
                <i className="bi bi-wifi fs-6"></i>
                <i className="bi bi-battery-full fs-5"></i>
              </div>
            </div>

            {/* Khung cuộn màn hình điện thoại với Iframe kích hoạt chuẩn xác Media Query Mobile 390px */}
            <iframe
              src="/?embed=1"
              title="ReMiCare Mobile Viewport"
              style={{
                width: '100%',
                flex: 1,
                minHeight: 0,
                border: 'none',
                backgroundColor: '#FFFFFF'
              }}
            />

            {/* Bottom Home Indicator */}
            <div className="phone-home-bar-area">
              <div className="phone-home-indicator"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
