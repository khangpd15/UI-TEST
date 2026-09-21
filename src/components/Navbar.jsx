import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, textScale, setTextScale, onCallEmergency }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'ai-assistant', label: '🤖 AI Sơ cứu' },
    { id: 'eye-problems', label: 'Sức khỏe mắt' },
    { id: 'first-aid', label: 'Sơ cứu' },
    { id: 'knowledge', label: 'Kiến thức' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsNavOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Chuyển đến nội dung chính
      </a>

      <header className="sticky-top visi-navbar">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between flex-nowrap w-100">
            {/* Logo ReMiCare (Mục 15: "ReMiCare / HỆ SINH THÁI VISI" không bị wrap vỡ chữ) */}
            <div
              className="visi-brand-logo cursor-pointer flex-shrink-0"
              onClick={() => handleNavClick('home')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNavClick('home')}
              aria-label="ReMiCare - Hệ sinh thái VISI"
            >
              <div className="visi-logo-icon">
                <i className="bi bi-eye-fill"></i>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center gap-1">
                  <span className="visi-brand-title">ReMiCare</span>
                  <span className="badge bg-light text-muted border px-1 py-0 small d-none d-sm-inline" style={{ fontSize: '0.65rem' }}>
                    VISI
                  </span>
                </div>
                <span className="brand-subtitle">
                  HỆ SINH THÁI VISI
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="d-none d-lg-flex align-items-center gap-1" aria-label="Điều hướng chính">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`btn ${
                    activePage === item.id ? 'btn-visi-primary' : 'btn-link text-dark text-decoration-none'
                  } fw-semibold px-3 py-2`}
                  onClick={() => handleNavClick(item.id)}
                  style={{ minHeight: '40px', fontSize: '0.98rem' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Right Actions: A/A+/A++ & CTA ☎ Hỗ trợ */}
            <div className="d-flex align-items-center gap-1 gap-sm-2 flex-shrink-0">
              {/* Accessibility Font Size Toggle */}
              <div className="text-size-toggle-group" role="group" aria-label="Chỉnh cỡ chữ">
                <button
                  type="button"
                  className={`text-size-btn ${textScale === 'normal' ? 'active' : ''}`}
                  onClick={() => setTextScale('normal')}
                  title="Cỡ chữ tiêu chuẩn"
                  aria-pressed={textScale === 'normal'}
                >
                  A
                </button>
                <button
                  type="button"
                  className={`text-size-btn ${textScale === 'large' ? 'active' : ''}`}
                  onClick={() => setTextScale('large')}
                  title="Cỡ chữ lớn"
                  aria-pressed={textScale === 'large'}
                >
                  A+
                </button>
                <button
                  type="button"
                  className={`text-size-btn ${textScale === 'xlarge' ? 'active' : ''}`}
                  onClick={() => setTextScale('xlarge')}
                  title="Cỡ chữ cực lớn"
                  aria-pressed={textScale === 'xlarge'}
                >
                  A++
                </button>
              </div>

              {/* Desktop CTA: ☎ Hỗ trợ */}
              <button
                type="button"
                className="btn btn-visi-outline d-none d-md-inline-flex align-items-center gap-2 px-3 fw-bold"
                onClick={onCallEmergency}
                style={{ minHeight: '40px', fontSize: '0.95rem' }}
              >
                <i className="bi bi-telephone-fill text-danger"></i>
                <span>☎ Hỗ trợ</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                className="btn btn-outline-secondary d-lg-none p-1 d-flex align-items-center justify-content-center flex-shrink-0"
                type="button"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-expanded={isNavOpen}
                aria-label="Mở menu điều hướng"
                style={{ width: '38px', height: '38px', minWidth: '38px', minHeight: '38px', borderRadius: '10px' }}
              >
                <i className={`bi ${isNavOpen ? 'bi-x-lg' : 'bi-list'} fs-4`} aria-hidden="true"></i>
              </button>
            </div>
          </div>

          {/* Mobile Collapse Menu */}
          {isNavOpen && (
            <div className="d-lg-none pt-3 pb-2 border-top mt-2">
              <nav className="d-grid gap-2" aria-label="Điều hướng di động">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`btn text-start ${
                      activePage === item.id ? 'btn-visi-primary' : 'btn-light text-dark'
                    } py-2 px-3 fw-bold`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  type="button"
                  className="btn btn-emergency-red py-2 px-3 fw-bold mt-2 d-flex align-items-center justify-content-center gap-2"
                  onClick={() => {
                    setIsNavOpen(false);
                    if (onCallEmergency) onCallEmergency();
                  }}
                >
                  <i className="bi bi-telephone-fill"></i>
                  <span>☎ GỌI HỖ TRỢ KHẨN CẤP</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
