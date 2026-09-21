import React from 'react';
import SeverityBadge from './SeverityBadge';

export default function EyeProblemCard({ problem, onClick }) {
  const { title, image, severity, badgeText } = problem;

  return (
    <div
      className="problem-card"
      onClick={() => onClick && onClick(problem)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onClick) onClick(problem);
        }
      }}
      aria-label={`Tình trạng: ${title}. ${badgeText}. Chạm để xem hướng dẫn.`}
    >
      {/* 1. Hình ảnh y tế lớn */}
      <div className="problem-card-image-wrapper">
        <img
          src={image}
          alt={`Hình minh họa ${title}`}
          loading="lazy"
        />
      </div>

      {/* 2. Thân card: Title đồng đều + Badge & Arrow riêng biệt (Mục 5, 9, 10) */}
      <div className="problem-card-body">
        <h3 className="problem-card-title">{title}</h3>

        <div className="severity-badge-container">
          <SeverityBadge severity={severity} customText={badgeText} />
          <span className="card-arrow" aria-hidden="true">→</span>
        </div>
      </div>
    </div>
  );
}
