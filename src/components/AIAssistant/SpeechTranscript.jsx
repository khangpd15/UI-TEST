import React from 'react';

/**
 * SpeechTranscript Component (Mục 2)
 * - Khi đang nghe: Hiển thị transcript realtime và nút [⏹ DỪNG]
 * - Khi dừng: Hiển thị card "NỘI DUNG BẠN ĐÃ NÓI" kèm nút [🎙️ Nói lại] và [✓ Xác nhận]
 */
export default function SpeechTranscript({
  mode,
  transcript,
  onStopListening,
  onResetVoice,
  onConfirmTranscript
}) {
  if (!transcript && mode !== 'listening') return null;

  return (
    <div className="ai-transcript-box my-3 p-3 p-md-4 bg-white rounded-4 border shadow-sm animate__animated animate__fadeIn">
      {/* 1. Trạng thái đang lắng nghe realtime */}
      {mode === 'listening' && (
        <div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="badge bg-danger text-white px-3 py-2 fw-bold d-inline-flex align-items-center gap-2">
              <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
              <span>🎙️ ĐANG LẮNG NGHE...</span>
            </span>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm fw-bold px-3 py-1 rounded-pill"
              onClick={onStopListening}
              style={{ minHeight: '36px' }}
            >
              <span>⏹ DỪNG</span>
            </button>
          </div>

          <div className="p-3 bg-light rounded-3 border">
            <p className="mb-0 text-dark fst-italic" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              {transcript ? `"${transcript}"` : "Đang chờ bạn phát âm..."}
            </p>
          </div>
        </div>
      )}

      {/* 2. Trạng thái đã dừng & xác nhận (Review Mode) */}
      {(mode === 'review' || mode === 'processing' || mode === 'question') && (
        <div>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <span className="small fw-bold text-uppercase text-muted" style={{ letterSpacing: '0.5px' }}>
              <i className="bi bi-chat-quote-fill text-visi-primary me-1"></i>
              NỘI DUNG BẠN ĐÃ NÓI:
            </span>

            <span className="badge bg-light text-dark border px-2 py-1 small">
              Đã nhận diện
            </span>
          </div>

          <div
            className="p-3 mb-3 bg-light rounded-3 border"
            style={{ borderLeft: '4px solid var(--visi-primary)' }}
          >
            <p className="mb-0 fw-semibold text-dark" style={{ fontSize: '1.15rem', lineHeight: '1.55' }}>
              "{transcript}"
            </p>
          </div>

          {/* Các nút hành động: Nói lại hoặc Xác nhận */}
          {mode === 'review' && (
            <div className="d-flex align-items-center justify-content-end gap-2 flex-wrap">
              <button
                type="button"
                className="btn btn-outline-secondary fw-bold px-3 py-2"
                onClick={onResetVoice}
                style={{ minHeight: '48px', borderRadius: '12px' }}
              >
                <i className="bi bi-arrow-repeat me-1"></i>
                <span>NÓI LẠI</span>
              </button>

              <button
                type="button"
                className="btn btn-visi-primary fw-bold px-4 py-2 shadow-sm"
                onClick={onConfirmTranscript}
                style={{ minHeight: '48px', borderRadius: '12px' }}
              >
                <i className="bi bi-check-circle-fill me-2"></i>
                <span>XÁC NHẬN</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
