import React from 'react';

/**
 * SeverityBadge component (Mục 6, 7, 8):
 * Luôn là flex container căn giữa, không bị tách dòng icon với text, không vỡ layout.
 */
export default function SeverityBadge({ severity = 'warning', customText = null, className = '' }) {
  // Loại bỏ các emoji tiền tố nếu customText đã chứa sẵn emoji để tránh bị lặp thành 2 icon tròn
  const cleanText = customText ? customText.replace(/^[🔴🟡🟢⚠️!\s]+/u, '').trim() : null;

  if (severity === 'emergency') {
    return (
      <div className={`severity-badge severity-badge-emergency ${className}`} role="status">
        <span className="severity-content">
          <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>🔴</span>
          <span>{cleanText || 'Cần xử lý ngay'}</span>
        </span>
      </div>
    );
  }

  if (severity === 'safe') {
    return (
      <div className={`severity-badge severity-badge-safe ${className}`} role="status">
        <span className="severity-content">
          <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>🟢</span>
          <span>{cleanText || 'Chăm sóc tại nhà'}</span>
        </span>
      </div>
    );
  }

  // default: warning
  return (
    <div className={`severity-badge severity-badge-warning ${className}`} role="status">
      <span className="severity-content">
        <span aria-hidden="true" style={{ fontSize: '14px', lineHeight: 1 }}>🟡</span>
        <span>{cleanText || 'Cần được khám'}</span>
      </span>
    </div>
  );
}

