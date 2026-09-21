import React, { useState } from 'react';

/**
 * VideoGuide Component (Mục 5, 7, 8)
 * - Embed trực tiếp YouTube iframe video
 * - Không mở tab mới
 * - Có nút Play và Fullscreen tích hợp
 * - Hiển thị fallback sạch nếu chưa tìm thấy video
 */
export default function VideoGuide({ video }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Nếu không có video phù hợp (Mục 8)
  if (!video || !video.embedUrl) {
    return (
      <div className="ai-video-box mb-4 p-4 bg-light rounded-4 border text-center">
        <div className="d-flex align-items-center justify-content-center gap-2 mb-2 text-muted">
          <span style={{ fontSize: '24px' }}>🎬</span>
          <span className="fw-bold">VIDEO HƯỚNG DẪN</span>
        </div>
        <p className="text-muted mb-0 small">
          "Chưa tìm thấy video hướng dẫn phù hợp. Vui lòng theo dõi các bước xử lý bằng văn bản và giọng đọc bên dưới."
        </p>
      </div>
    );
  }

  return (
    <div className="ai-video-box mb-4 p-3 p-md-4 bg-white rounded-4 border shadow-sm">
      {/* 1. Tiêu đề khối video */}
      <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
        <div className="d-flex align-items-center gap-2">
          <span style={{ fontSize: '20px' }} aria-hidden="true">🎬</span>
          <h3 className="h5 fw-heavy text-dark mb-0">
            VIDEO HƯỚNG DẪN SƠ CỨU
          </h3>
        </div>

        {video.verified && (
          <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1 small d-inline-flex align-items-center gap-1">
            <i className="bi bi-shield-check"></i>
            <span>Đã kiểm duyệt y khoa</span>
          </span>
        )}
      </div>

      <p className="small text-muted mb-3">
        {video.title} {video.duration && `(${video.duration})`}
      </p>

      {/* 2. Container YouTube Iframe Player 16:9 */}
      <div
        className="ratio ratio-16x9 rounded-3 overflow-hidden border bg-dark position-relative shadow-sm"
        style={{ borderRadius: '14px' }}
      >
        <iframe
          src={`${video.embedUrl}?rel=0&modestbranding=1&enablejsapi=1${isPlaying ? '&autoplay=1' : ''}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 0 }}
        ></iframe>
      </div>

      {/* 3. Nguồn y khoa và chú thích */}
      <div className="d-flex align-items-center justify-content-between mt-2 pt-1 flex-wrap gap-2 small text-muted">
        <span>
          <i className="bi bi-hospital me-1 text-visi-primary"></i>
          Nguồn: {video.source || "ReMiCare Medical Group"}
        </span>
        <span>
          <i className="bi bi-translate me-1"></i>
          Phụ đề: Tiếng Việt
        </span>
      </div>
    </div>
  );
}
