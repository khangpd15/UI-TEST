import React from 'react';

export default function Footer({ onNavigate, onCallEmergency }) {
  return (
    <footer className="visi-footer">
      <div className="container">
        <div className="row g-4">
          {/* Cột 1: Thương hiệu ReMiCare & VISI Medical Group */}
          <div className="col-12 col-md-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-3"
                style={{ width: '38px', height: '38px', color: 'var(--visi-primary)' }}
              >
                <i className="bi bi-eye-fill fs-5"></i>
              </div>
              <div>
                <span className="h4 mb-0 fw-heavy text-white">ReMiCare</span>
                <span className="badge bg-light text-dark ms-2 small">KHANGEYE Ecosystem</span>
              </div>
            </div>

            <p className="fw-semibold text-light mb-2">
              Sức khỏe mắt – Sơ cứu – Chăm sóc
            </p>
            <p className="small" style={{ color: '#DDEFEF', lineHeight: '1.5' }}>
              Thành viên thuộc hệ sinh thái y khoa <strong>KHANGEYE</strong>. Định hướng y khoa chuyên sâu về nhãn khoa với thông điệp <em>"Mỗi ánh mắt, một niềm tin"</em>.
            </p>

            <div className="p-2 px-3 rounded-2 mt-3" style={{ background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
              <span className="small text-white-50 d-block">
                ⚠️ Hướng dẫn ban đầu giúp bảo vệ giác mạc. Luôn đưa bệnh nhân đến cơ sở y tế mắt gần nhất.
              </span>
            </div>
          </div>

          {/* Cột 2: Links */}
          <div className="col-6 col-md-3">
            <h4 className="h6 fw-bold text-uppercase text-white tracking-wider mb-3">
              Danh mục
            </h4>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 fs-6">
              <li>
                <button
                  type="button"
                  className="btn btn-link text-start p-0 text-white-50 text-decoration-none"
                  onClick={() => onNavigate && onNavigate('home')}
                >
                  Trang chủ
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-start p-0 text-white-50 text-decoration-none"
                  onClick={() => onNavigate && onNavigate('eye-problems')}
                >
                  Sức khỏe mắt
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-start p-0 text-white-50 text-decoration-none"
                  onClick={() => onNavigate && onNavigate('first-aid')}
                >
                  Sơ cứu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="btn btn-link text-start p-0 text-white-50 text-decoration-none"
                  onClick={() => onNavigate && onNavigate('knowledge')}
                >
                  Kiến thức
                </button>
              </li>
            </ul>
          </div>

          {/* Cột 3: Emergency Hotline */}
          <div className="col-6 col-md-4">
            <h4 className="h6 fw-bold text-uppercase text-white tracking-wider mb-3">
              Cấp cứu 24/7
            </h4>
            <p className="small text-white-50 mb-2">
              Đường dây nóng hỗ trợ khẩn cấp:
            </p>
            <a
              href="tel:0916973161"
              className="d-inline-flex align-items-center gap-2 fw-heavy text-white fs-4 text-decoration-none p-2 px-3 rounded-3"
              style={{ backgroundColor: 'var(--emergency)' }}
            >
              <i className="bi bi-telephone-fill"></i>
              <span>0916 973 161</span>
            </a>
            <p className="small text-white-50 mt-3 mb-0">
              Trực ban y tế nhãn khoa luôn sẵn sàng tiếp nhận hướng dẫn cấp cứu tức thời.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="visi-footer-bottom d-flex flex-wrap align-items-center justify-content-between gap-2">
          <span>
            © {new Date().getFullYear()} ReMiCare • KHANGEYE. Bảo lưu mọi quyền.
          </span>
          <span className="small text-white-50">
            Tiêu chuẩn Trợ năng Y tế WCAG 2.1 AA/AAA
          </span>
        </div>
      </div>
    </footer>
  );
}
