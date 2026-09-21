import React, { useState, useEffect } from 'react';
import { speakText, stopSpeaking } from '../utils/speechUtils';

/**
 * AudioGuide Component
 * - Nền trắng, chuẩn y tế, tối giản, không trang trí thừa
 * - Tiêu đề phân cấp 2 tầng: "HƯỚNG DẪN XỬ LÝ" và tên tình trạng (ví dụ: "Bụi vào mắt")
 * - Một nút chính duy nhất: "▶ PHÁT HƯỚNG DẪN" (min-height ≥ 48px)
 * - Mặc định KHÔNG hiển thị transcript dài
 * - Thay thế bằng collapsible "▸ Xem nội dung giọng đọc" / "▾ Thu gọn nội dung giọng đọc"
 */
export default function AudioGuide({ text, title = "HƯỚNG DẪN XỬ LÝ", conditionName = "", isEmergency = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasEnded, setHasEnded] = useState(false);
  const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

  useEffect(() => {
    setHasEnded(false);
    setIsPlaying(false);
    return () => {
      stopSpeaking();
    };
  }, [text]);

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopSpeaking();
      setIsPlaying(false);
    } else {
      speakText(
        text,
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

  // Xác định tình huống có phải cấp cứu không
  const isEmergencyContext = isEmergency || 
    title.toLowerCase().includes('cấp cứu') || 
    title.toLowerCase().includes('sơ cứu') ||
    title.toLowerCase().includes('hóa chất') ||
    title.toLowerCase().includes('dị vật') ||
    title.toLowerCase().includes('va đập') ||
    title.toLowerCase().includes('bỏng');

  // Xác định nhãn nút theo chuẩn Mục 10
  let buttonLabel = isEmergencyContext ? '🔊 Nghe hướng dẫn sơ cứu' : '▶ Nghe hướng dẫn';
  if (isPlaying) {
    buttonLabel = '⏸ Tạm dừng';
  } else if (hasEnded) {
    buttonLabel = '▶ Nghe lại';
  }

  // Tách tiêu đề: Dòng 1 "HƯỚNG DẪN XỬ LÝ", Dòng 2 "Bụi vào mắt"
  let categoryTitle = title;
  let caseName = conditionName;

  if (!caseName && title.includes(':')) {
    const parts = title.split(':');
    categoryTitle = parts[0].trim();
    caseName = parts.slice(1).join(':').trim();
  }

  return (
    <div className="audio-guide-container my-3" aria-label="Khối nghe hướng dẫn âm thanh">
      {/* 1. Tiêu đề 2 tầng rõ ràng */}
      <div className="d-flex align-items-start justify-content-between mb-3 flex-wrap gap-2">
        <div>
          <div className="d-flex align-items-center gap-2 mb-1">
            <span style={{ fontSize: '18px' }} aria-hidden="true">🔊</span>
            <span className="small fw-bold text-uppercase text-muted" style={{ letterSpacing: '0.5px' }}>
              {categoryTitle}
            </span>
          </div>
          {caseName && (
            <h3 className="h4 fw-heavy text-dark mb-0">
              {caseName}
            </h3>
          )}
        </div>

        {isPlaying && (
          <span className="badge bg-success text-white px-3 py-2 fw-bold d-inline-flex align-items-center gap-2 align-self-center">
            <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            <span>Đang phát giọng đọc...</span>
          </span>
        )}
      </div>

      {/* 2. Một nút bấm chính duy nhất: Tối thiểu 48px, chuẩn y tế */}
      <button
        type="button"
        className={`btn ${isPlaying ? 'btn-emergency-red' : 'audio-guide-btn-teal'} shadow-sm`}
        onClick={handleTogglePlay}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? 'Tạm dừng hướng dẫn' : buttonLabel}
      >
        <span>{buttonLabel}</span>
      </button>

      {/* 3. Accordion/Collapsible: Mặc định đóng, click để mở xem transcript */}
      <div className="pt-2">
        <button
          type="button"
          className="btn btn-link text-decoration-none text-muted p-0 d-inline-flex align-items-center gap-1 fw-bold small"
          onClick={() => setIsTranscriptOpen(!isTranscriptOpen)}
          aria-expanded={isTranscriptOpen}
          aria-controls="audio-transcript-box"
          style={{ minHeight: '36px' }}
        >
          <span aria-hidden="true" style={{ fontSize: '14px' }}>
            {isTranscriptOpen ? '▾' : '▸'}
          </span>
          <span>
            {isTranscriptOpen ? 'Thu gọn nội dung giọng đọc' : 'Xem nội dung giọng đọc'}
          </span>
        </button>

        {isTranscriptOpen && (
          <div
            id="audio-transcript-box"
            className="mt-2 p-3 bg-light rounded-3 border"
            style={{ borderColor: 'var(--visi-border)', borderLeft: '4px solid var(--visi-primary)' }}
          >
            <p className="mb-0 text-dark" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              "{text}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
