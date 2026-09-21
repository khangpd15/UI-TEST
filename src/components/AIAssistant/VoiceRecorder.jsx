import React, { useState, useEffect, useRef } from 'react';

/**
 * VoiceRecorder Component (Mục 1, 2, 19)
 * - Nút microphone lớn trung tâm với 4 trạng thái: IDLE, LISTENING, PROCESSING, ERROR
 * - Web Speech API Speech-to-Text tiếng Việt (vi-VN)
 * - Fallback <textarea> khi trình duyệt không hỗ trợ hoặc khi người dùng muốn gõ chữ
 * - Danh sách câu mẫu 1-chạm để demo trực tiếp
 */
export default function VoiceRecorder({
  mode,
  onStartListening,
  onStopListening,
  onTranscriptChange,
  onSubmitManualText
}) {
  const [hasSpeechSupport, setHasSpeechSupport] = useState(true);
  const [manualText, setManualText] = useState('');
  const [isTextMode, setIsTextMode] = useState(false);
  const [speechError, setSpeechError] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setHasSpeechSupport(false);
      setIsTextMode(true);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'vi-VN';

      recognition.onstart = () => {
        setSpeechError(null);
      };

      recognition.onresult = (event) => {
        let currentText = '';
        for (let i = 0; i < event.results.length; i++) {
          currentText += event.results[i][0].transcript + ' ';
        }
        onTranscriptChange(currentText.trim());
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed') {
          setSpeechError('Microphone chưa được cấp quyền trên trình duyệt.');
        } else if (event.error === 'no-speech') {
          setSpeechError('Chưa nhận diện được giọng nói, vui lòng thử lại.');
        } else {
          setSpeechError('Không nhận diện được giọng nói.');
        }
      };

      recognition.onend = () => {
        // Tự động kết thúc
      };

      recognitionRef.current = recognition;
    } catch {
      setHasSpeechSupport(false);
      setIsTextMode(true);
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
    };
  }, [onTranscriptChange]);

  // Điều khiển khi mode thay đổi từ bên ngoài
  useEffect(() => {
    if (mode === 'listening' && recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch {
        // đã start
      }
    } else if (mode !== 'listening' && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // đã stop
      }
    }
  }, [mode]);

  const handleMicClick = () => {
    if (mode === 'listening') {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {
          // ignore
        }
      }
      onStopListening();
    } else if (mode === 'idle' || mode === 'error' || mode === 'review') {
      setSpeechError(null);
      onStartListening();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch {
          // ignore
        }
      }
    }
  };

  const samplePrompts = [
    {
      label: "Bỏng mắt do hàn (Demo Mục 20)",
      text: "Em đang hàn sắt thì tự nhiên mắt bị rát, chảy nước mắt và rất khó mở mắt."
    },
    {
      label: "Bụi vào mắt cộm xót",
      text: "Tui đang làm việc thì bụi bay vào mắt, giờ mắt rất cộm và chảy nước mắt."
    },
    {
      label: "Hóa chất bắn vào mắt (Red Flag)",
      text: "Bị hóa chất xà phòng tẩy bồn cầu bắn vào mắt đau rát dữ dội và không nhìn thấy gì nữa"
    },
    {
      label: "Bị bóng đập vào mắt",
      text: "Tôi bị bóng đá đập mạnh vào mắt, mắt đang bầm tím sưng to nhìn mờ"
    },
    {
      label: "Cành cây quẹt mắt",
      text: "Bị cành cây quẹt vào lòng đen mắt, đau nhói chảy nước mắt sống"
    },
    {
      label: "Mơ hồ (Cần hỏi thêm)",
      text: "Mắt tôi bị cái gì đó bay vào khó chịu quá"
    }
  ];

  const handleSelectSample = (promptText) => {
    onTranscriptChange(promptText);
    onSubmitManualText(promptText);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualText.trim()) {
      onTranscriptChange(manualText.trim());
      onSubmitManualText(manualText.trim());
    }
  };

  // Xác định text và class của nút Micro theo state
  let buttonLabel = "Nói với trợ lý";
  let buttonClass = "ai-mic-btn-idle";

  if (mode === 'listening') {
    buttonLabel = "Đang lắng nghe...";
    buttonClass = "ai-mic-btn-listening";
  } else if (mode === 'processing') {
    buttonLabel = "Đang phân tích tình huống...";
    buttonClass = "ai-mic-btn-processing";
  } else if (mode === 'error' || speechError) {
    buttonLabel = "Không nhận diện được giọng nói";
    buttonClass = "ai-mic-btn-error";
  }

  return (
    <div className="ai-recorder-box text-center p-3 p-md-4 bg-white rounded-4 border shadow-sm">
      {/* 1. Header chính của AI Assistant (Mục 1) */}
      <div className="mb-3 mb-md-4">
        <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light rounded-pill border mb-2">
          <span style={{ fontSize: '18px' }} aria-hidden="true">🤖</span>
          <span className="small fw-bold text-uppercase text-visi-primary" style={{ letterSpacing: '0.5px' }}>
            HỆ THỐNG TRÍ TUỆ NHÂN TẠO Y TẾ REMICARE
          </span>
        </div>
        <h2 className="h3 fw-heavy text-dark mb-1">
          AI TRỢ LÝ SƠ CỨU MẮT
        </h2>
        <p className="text-muted fs-6 mb-0">
          "Nói cho tôi biết chuyện gì đang xảy ra."
        </p>
      </div>

      {/* 2. Nút Microphone trung tâm (Mục 1 & 2) */}
      {!isTextMode && (
        <div className="ai-mic-wrapper my-4">
          <div className={`ai-mic-pulse-ring ${mode === 'listening' ? 'active' : ''}`}>
            <button
              type="button"
              className={`ai-mic-large-btn ${buttonClass}`}
              onClick={handleMicClick}
              disabled={mode === 'processing'}
              aria-label={buttonLabel}
            >
              {mode === 'listening' ? (
                <span className="ai-mic-icon recording-pulse" aria-hidden="true">⏹</span>
              ) : mode === 'processing' ? (
                <span className="spinner-border text-white" role="status" aria-hidden="true" style={{ width: '36px', height: '36px' }}></span>
              ) : (
                <span className="ai-mic-icon" aria-hidden="true">🎙️</span>
              )}
            </button>
          </div>

          <div className="mt-3">
            <span className={`fw-bold fs-5 ${mode === 'listening' ? 'text-danger' : mode === 'error' ? 'text-danger' : 'text-dark'}`}>
              {speechError || buttonLabel}
            </span>
            {mode === 'listening' && (
              <p className="small text-muted mt-1 mb-0">
                Hãy nói to, rõ ràng về sự cố mắt bạn vừa gặp phải. Bấm để dừng khi nói xong.
              </p>
            )}
          </div>
        </div>
      )}

      {/* 3. Fallback nhập chữ bằng Textarea (Mục 19) */}
      {isTextMode && (
        <div className="ai-text-input-box text-start my-3">
          {!hasSpeechSupport && (
            <div className="alert alert-warning py-2 px-3 small mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-info-circle-fill"></i>
              <span>Trình duyệt chưa hỗ trợ nhập giọng nói trực tiếp. Bạn có thể nhập tình huống bằng văn bản dưới đây.</span>
            </div>
          )}

          <form onSubmit={handleManualSubmit}>
            <label htmlFor="ai-manual-text" className="form-label fw-bold text-dark small">
              MÔ TẢ TÌNH HUỐNG SỰ CỐ MẮT:
            </label>
            <textarea
              id="ai-manual-text"
              className="form-control form-control-lg border-2"
              rows={3}
              placeholder="Ví dụ: Em đang hàn sắt thì tự nhiên mắt bị rát, chảy nước mắt..."
              value={manualText}
              onChange={(e) => setManualText(e.target.value)}
              style={{ fontSize: '1rem', borderRadius: '12px' }}
            />
            <div className="d-flex justify-content-between align-items-center mt-2 flex-wrap gap-2">
              {hasSpeechSupport && (
                <button
                  type="button"
                  className="btn btn-sm btn-link text-decoration-none text-muted p-0"
                  onClick={() => setIsTextMode(false)}
                >
                  <i className="bi bi-mic-fill me-1"></i>
                  Chuyển sang nói bằng Microphone
                </button>
              )}
              <button
                type="submit"
                className="btn btn-visi-primary fw-bold px-4 ms-auto"
                style={{ minHeight: '48px', borderRadius: '12px' }}
                disabled={!manualText.trim() || mode === 'processing'}
              >
                {mode === 'processing' ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    <span>ĐANG PHÂN TÍCH...</span>
                  </>
                ) : (
                  <>
                    <span>PHÂN TÍCH TÌNH HUỐNG</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Nút chuyển đổi gõ chữ khi có micro */}
      {hasSpeechSupport && !isTextMode && (
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary py-1 px-3 rounded-pill"
            onClick={() => setIsTextMode(true)}
            style={{ fontSize: '0.85rem' }}
          >
            <i className="bi bi-keyboard me-1"></i>
            Hoặc nhập tình huống bằng văn bản
          </button>
        </div>
      )}

      {/* 4. Danh sách câu mẫu demo 1-chạm (Rất hữu ích khi demo hoặc test) */}
      <div className="ai-sample-chips text-start mt-3 pt-3 border-top">
        <span className="small fw-bold text-muted d-block mb-2">
          <i className="bi bi-lightbulb-fill text-warning me-1"></i>
          Hoặc chọn nhanh câu mô tả mẫu để thử nghiệm AI:
        </span>
        <div className="d-flex flex-wrap gap-2">
          {samplePrompts.map((item, idx) => (
            <button
              key={idx}
              type="button"
              className="btn btn-light btn-sm text-start py-2 px-3 border text-dark fw-medium"
              onClick={() => handleSelectSample(item.text)}
              style={{ borderRadius: '10px', fontSize: '0.85rem', lineHeight: 1.3 }}
              title={item.text}
            >
              <span className="text-visi-primary fw-bold me-1">👉</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
