import React from 'react';

export default function DoDontSection({ doList = [], dontList = [] }) {
  // Default fallback if not passed directly
  const defaultDo = [
    { icon: "🧴", text: "Rửa mắt sạch bằng nước/nước muối" },
    { icon: "🏥", text: "Đến bệnh viện chuyên khoa mắt ngay" },
    { icon: "☎", text: "Gọi hỗ trợ cấp cứu 0395 151 151" }
  ];

  const defaultDont = [
    { icon: "👁️", text: "Không dụi mắt dưới bất kỳ hình thức nào" },
    { icon: "🪝", text: "Không tự rút dị vật hoặc kéo gắp" },
    { icon: "💊", text: "Không tự dùng thuốc khi chưa có chỉ định" }
  ];

  const actualDo = doList.length > 0 ? doList : defaultDo;
  const actualDont = dontList.length > 0 ? dontList : defaultDont;

  return (
    <div className="dodont-section my-4" aria-label="Bảng hướng dẫn Nên làm và Không được làm">
      <div className="row g-4">
        {/* CỘT NÊN LÀM (Màu thương hiệu xanh/teal an toàn của VISI) */}
        <div className="col-12 col-md-6">
          <div className="dodont-card-box dodont-visi-safe">
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-success border-opacity-25">
              <span className="fs-3 text-success">✓</span>
              <h3 className="h4 fw-heavy text-success mb-0">NÊN LÀM</h3>
            </div>
            <ul className="list-unstyled mb-0">
              {actualDo.map((item, idx) => (
                <li key={`do-${idx}`} className="d-flex align-items-start gap-3 mb-3 fs-5 fw-bold" style={{ color: 'var(--visi-text)' }}>
                  <span style={{ fontSize: '26px', lineHeight: '1' }}>{item.icon || '🧴'}</span>
                  <span>{typeof item === 'string' ? item : item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CỘT KHÔNG ĐƯỢC (Màu đỏ cấp cứu nghiêm ngặt) */}
        <div className="col-12 col-md-6">
          <div className="dodont-card-box dodont-visi-prohibited">
            <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom border-danger border-opacity-25">
              <span className="fs-3 text-danger">✕</span>
              <h3 className="h4 fw-heavy text-danger mb-0">KHÔNG ĐƯỢC</h3>
            </div>
            <ul className="list-unstyled mb-0">
              {actualDont.map((item, idx) => (
                <li key={`dont-${idx}`} className="d-flex align-items-start gap-3 mb-3 fs-5 fw-bold text-danger">
                  <span style={{ fontSize: '26px', lineHeight: '1' }}>{item.icon || '👁️'}</span>
                  <span>{typeof item === 'string' ? item : item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
