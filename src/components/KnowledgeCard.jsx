import React, { useState } from 'react';
import { speakText, stopSpeaking } from '../utils/speechUtils';
import SeverityBadge from './SeverityBadge';

/**
 * KnowledgeCard Component (Đồng bộ 21/09/2026 - Mục 7, 8, 10)
 * - Bệnh lý (Group A): [Tên bệnh lý] -> Dấu hiệu thường gặp -> Audio [▶ Nghe hướng dẫn] -> Lưu ý disclaimer
 * - Cấp cứu (Group B): [Tình huống cấp cứu] -> LÀM GÌ NGAY? -> KHÔNG ĐƯỢC LÀM GÌ? -> KHI NÀO CẦN ĐI CẤP CỨU? -> Audio [🔊 Nghe hướng dẫn sơ cứu]
 */
export default function KnowledgeCard({ item, onSelect }) {
  const {
    audio_id,
    title,
    category,
    priority,
    priorityLabel,
    image,
    summary,
    description,
    action,
    warning,
    redFlags,
    audioScript,
    disclaimer
  } = item;

  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);

  const isEmergency = category === 'emergency';

  const handleSpeak = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speakText(
        audioScript || summary || description,
        () => {
          setIsPlaying(true);
          setHasEnded(false);
        },
        () => {
          setIsPlaying(false);
          setHasEnded(true);
        },
        () => {
          setIsPlaying(false);
          setHasEnded(false);
        }
      );
    }
  };

  // Xác định nhãn nút theo chuẩn Mục 10
  let buttonLabel = isEmergency ? '🔊 Nghe hướng dẫn sơ cứu' : '▶ Nghe hướng dẫn';
  if (isPlaying) {
    buttonLabel = '⏸ Tạm dừng';
  } else if (hasEnded) {
    buttonLabel = '▶ Nghe lại';
  }

  return (
    <div
      className="knowledge-service-card h-100 d-flex flex-column"
      onClick={() => onSelect && onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onSelect) onSelect(item);
        }
      }}
      aria-label={`${title}. ${summary || description}`}
    >
      {/* 1. Ảnh y tế lớn với badge mã Audio ID và Priority */}
      <div className="knowledge-card-img-box position-relative">
        <img src={image} alt={`Minh họa ${title}`} loading="lazy" />
        <div className="position-absolute top-0 start-0 m-2 d-flex flex-wrap gap-1" style={{ zIndex: 2, pointerEvents: 'none' }}>
          {audio_id && (
            <span className="badge bg-dark text-white px-2 py-1 font-monospace" style={{ fontSize: '0.8rem' }}>
              {audio_id}
            </span>
          )}
          <span
            className="badge px-2 py-1"
            style={{
              backgroundColor: isEmergency ? 'var(--visi-emergency)' : 'var(--visi-primary)',
              color: '#FFFFFF',
              fontSize: '0.8rem'
            }}
          >
            {isEmergency ? 'Cấp cứu' : 'Bệnh lý'}
          </span>
        </div>
        <div className="position-absolute top-0 end-0 m-2" style={{ zIndex: 2, pointerEvents: 'none' }}>
          <SeverityBadge severity={priority} customText={priorityLabel} />
        </div>
      </div>

      {/* 2. Thân card: Cấu trúc nội dung chuẩn y tế */}
      <div className="p-3 d-flex flex-column flex-grow-1 justify-content-between">
        <div>
          {/* Tên tình trạng / Bệnh lý */}
          <h3 className="h5 fw-heavy mb-2 text-dark">
            {title}
          </h3>

          {/* GROUP A: BỆNH LÝ MẮT (Mục 7) */}
          {!isEmergency && (
            <div className="mb-3">
              <div className="small fw-bold text-muted text-uppercase mb-1">
                Dấu hiệu thường gặp:
              </div>
              <p
                className="mb-2 text-secondary fw-medium"
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.45',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}
              >
                {summary || description}
              </p>
            </div>
          )}

          {/* GROUP B: CẤP CỨU CHẤN THƯƠNG MẮT (Mục 8) */}
          {isEmergency && (
            <div className="mb-3 fs-7">
              {action && (
                <div className="p-2 mb-1 rounded bg-success-subtle border border-success-subtle">
                  <span className="small fw-bold text-success d-block">
                    ⚡ LÀM GÌ NGAY?
                  </span>
                  <span className="small text-dark fw-medium">{action}</span>
                </div>
              )}
              {warning && (
                <div className="p-2 mb-1 rounded bg-danger-subtle border border-danger-subtle">
                  <span className="small fw-bold text-danger d-block">
                    🚫 KHÔNG ĐƯỢC LÀM GÌ?
                  </span>
                  <span className="small text-dark fw-medium">{warning}</span>
                </div>
              )}
              {redFlags && (
                <div className="p-2 rounded bg-warning-subtle border border-warning-subtle">
                  <span className="small fw-bold text-dark d-block">
                    🏥 KHI NÀO CẦN ĐI CẤP CỨU?
                  </span>
                  <span className="small text-dark fw-medium">{redFlags}</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* 3. Action button & Disclaimer chuẩn hóa */}
        <div className="pt-2 border-top">
          <div className="d-flex align-items-center justify-content-between gap-2 mb-2">
            <button
              type="button"
              className={`btn btn-sm ${isPlaying ? 'btn-danger' : isEmergency ? 'btn-emergency-red' : 'btn-visi-outline'} d-inline-flex align-items-center gap-1 fw-bold`}
              onClick={handleSpeak}
              style={{ minHeight: '38px', padding: '6px 14px', fontSize: '0.85rem' }}
              aria-label={isPlaying ? 'Tạm dừng' : buttonLabel}
            >
              <span>{buttonLabel}</span>
            </button>

            <span className="fw-bold small text-visi-primary">
              Chi tiết →
            </span>
          </div>

          {/* Disclaimer đồng bộ */}
          <div className="text-muted small fst-italic" style={{ fontSize: '0.75rem', lineHeight: '1.3' }}>
            <strong>Lưu ý:</strong> {disclaimer || (isEmergency ? 'Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.' : 'Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.')}
          </div>
        </div>
      </div>
    </div>
  );
}
