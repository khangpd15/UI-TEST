import React, { useState } from 'react';
import { speakText, stopSpeaking } from '../utils/speechUtils';

export default function KnowledgeCard({ item, onSelect }) {
  const { title, category, image, summary, audioScript } = item;
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSpeak = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speakText(
        audioScript || summary,
        () => setIsPlaying(true),
        () => setIsPlaying(false),
        () => setIsPlaying(false)
      );
    }
  };

  return (
    <div
      className="knowledge-service-card"
      onClick={() => onSelect && onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onSelect) onSelect(item);
        }
      }}
      aria-label={`Kiến thức mắt: ${title}. ${summary}`}
    >
      {/* Ảnh y tế lớn (50-60% card) */}
      <div className="knowledge-card-img-box position-relative">
        <img src={image} alt={`Minh họa ${title}`} loading="lazy" />
        <span
          className="position-absolute top-0 start-0 m-2 badge px-2 py-1"
          style={{ backgroundColor: 'var(--visi-primary)', color: '#FFFFFF', fontSize: '0.8rem' }}
        >
          {category}
        </span>
      </div>

      {/* Nội dung: tiêu đề + mô tả không quá 2 dòng */}
      <div className="p-3 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          <h3 className="h5 fw-heavy mb-2" style={{ color: 'var(--visi-text)' }}>
            {title}
          </h3>
          <p
            className="mb-3 text-muted fw-medium"
            style={{
              fontSize: '1rem',
              lineHeight: '1.45',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}
          >
            {summary}
          </p>
        </div>

        {/* Action button */}
        <div className="d-flex align-items-center justify-content-between pt-2 border-top">
          <button
            type="button"
            className={`btn btn-sm ${isPlaying ? 'btn-danger' : 'btn-visi-outline'} d-inline-flex align-items-center gap-1`}
            onClick={handleSpeak}
            style={{ minHeight: '38px', padding: '6px 12px', fontSize: '0.9rem' }}
            aria-label={isPlaying ? 'Dừng đọc' : `Nghe tóm tắt ${title}`}
          >
            <i className={`bi ${isPlaying ? 'bi-stop-fill' : 'bi-volume-up-fill'}`}></i>
            <span>{isPlaying ? 'Dừng' : '🔊 Nghe'}</span>
          </button>

          <span className="fw-bold small" style={{ color: 'var(--visi-primary)' }}>
            Xem chi tiết →
          </span>
        </div>
      </div>
    </div>
  );
}
