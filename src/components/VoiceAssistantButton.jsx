import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { analyzeSymptomQuery, speakText, stopSpeaking } from '../utils/speechUtils';
import SeverityBadge from './SeverityBadge';

export default function VoiceAssistantButton({ onSelectCase }) {
  const [showModal, setShowModal] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const [recognitionError, setRecognitionError] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Check Web Speech Recognition API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'vi-VN';

      recognition.onstart = () => {
        setIsListening(true);
        setRecognitionError(null);
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const text = event.results[current][0].transcript;
        setTranscript(text);

        // If final result
        if (event.results[current].isFinal) {
          handleAnalyze(text);
        }
      };

      recognition.onerror = (event) => {
        setIsListening(false);
        if (event.error === 'not-allowed') {
          setRecognitionError('Chưa cấp quyền microphone. Bạn có thể chọn câu hỏi nhanh bên dưới.');
        } else {
          setRecognitionError('Không thu được âm thanh rõ. Hãy thử lại hoặc chọn gợi ý bên dưới.');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const handleStartListening = () => {
    setTranscript('');
    setDiagnosisResult(null);
    setRecognitionError(null);

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch (err) {
        // If already active, restart
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      }
    } else {
      // Fallback simulation for unsupported browsers
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        const demoText = 'Tôi bị hóa chất bắn vào mắt xót quá';
        setTranscript(demoText);
        handleAnalyze(demoText);
      }, 2500);
    }
  };

  const handleStopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleAnalyze = (queryText) => {
    const result = analyzeSymptomQuery(queryText);
    setDiagnosisResult(result);

    // Speak quick feedback to user
    const feedback = `${result.title}. Mức độ: ${result.severityLabel}. ${result.advice}`;
    speakText(feedback);
  };

  const handleQuickSelect = (queryText) => {
    setTranscript(queryText);
    handleAnalyze(queryText);
  };

  const handleGoToCase = () => {
    if (diagnosisResult && diagnosisResult.caseId) {
      stopSpeaking();
      setShowModal(false);
      if (onSelectCase) {
        onSelectCase(diagnosisResult.caseId);
      }
    }
  };

  const quickPrompts = [
    { text: 'Hóa chất bắn vào mắt', icon: '🧪' },
    { text: 'Bụi bay vào cộm xót', icon: '💨' },
    { text: 'Mắt bị va đập đau sưng', icon: '⚽' },
    { text: 'Dị vật găm vào mắt', icon: '🪵' },
    { text: 'Mắt đỏ có nhiều ghèn', icon: '👁️' },
    { text: 'Nhìn mờ đột ngột', icon: '🔍' }
  ];

  return (
    <>
      {/* Nút nổi Trợ lý giọng nói (Vị trí: bottom: 90px; right: 20px) */}
      <button
        type="button"
        className="voice-assistant-floating-btn"
        onClick={() => setShowModal(true)}
        aria-label="Mở trợ lý hỏi bằng giọng nói"
      >
        <span className="voice-icon-pulse" aria-hidden="true">
          <i className="bi bi-mic-fill"></i>
        </span>
        <span className="fw-bold">Hỏi bằng giọng nói</span>
      </button>

      {/* Modal Trợ lý giọng nói */}
      <Modal
        show={showModal}
        onHide={() => {
          stopSpeaking();
          handleStopListening();
          setShowModal(false);
        }}
        centered
        size="lg"
        backdrop="static"
        aria-labelledby="voice-modal-title"
      >
        <Modal.Header closeButton className="border-bottom py-3">
          <Modal.Title id="voice-modal-title" className="d-flex align-items-center gap-2 fw-heavy text-primary fs-3">
            <i className="bi bi-mic-fill text-danger" aria-hidden="true"></i>
            <span>TRỢ LÝ TƯ VẤN BẰNG GIỌNG NÓI</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4 bg-light">
          <div className="text-center mb-4">
            <h4 className="fw-bold text-dark mb-2">
              Bạn hãy nói cho tôi biết mắt đang gặp vấn đề gì.
            </h4>
            <p className="text-muted fs-5 mb-0">
              Ví dụ: <em>"Tôi bị hóa chất bắn vào mắt"</em> hoặc <em>"Mắt bị bóng đập trúng sưng đau"</em>
            </p>
          </div>

          {/* Nút BẮT ĐẦU NÓI cực lớn */}
          <div className="d-flex justify-content-center mb-4">
            <button
              type="button"
              className={`btn btn-lg d-flex flex-column align-items-center justify-content-center gap-2 shadow-lg ${
                isListening ? 'btn-danger' : 'btn-primary'
              }`}
              style={{
                width: '100%',
                maxWidth: '340px',
                minHeight: '110px',
                borderRadius: '24px',
                padding: '20px'
              }}
              onClick={isListening ? handleStopListening : handleStartListening}
              aria-label={isListening ? 'Đang lắng nghe, bấm để dừng' : 'Bắt đầu nói để tra cứu triệu chứng'}
            >
              <i className={`bi ${isListening ? 'bi-mic-mute-fill' : 'bi-mic-fill'}`} style={{ fontSize: '38px' }} aria-hidden="true"></i>
              <span className="fw-heavy fs-4">
                {isListening ? 'ĐANG LẮNG NGHE... (BẤM DỪNG)' : '🎙️ BẮT ĐẦU NÓI'}
              </span>
            </button>
          </div>

          {/* Hiển thị câu nói vừa nhận diện */}
          {transcript && (
            <div className="bg-white p-3 rounded-3 border mb-3 shadow-sm">
              <p className="small text-muted mb-1 fw-bold">
                <i className="bi bi-chat-quote-fill me-1 text-primary"></i> Câu nói của bạn:
              </p>
              <p className="fs-5 fw-bold text-dark mb-0">
                "{transcript}"
              </p>
            </div>
          )}

          {recognitionError && (
            <div className="alert alert-warning py-2 mb-3" role="alert">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {recognitionError}
            </div>
          )}

          {/* Kết quả chẩn đoán và phân loại mức độ nguy hiểm */}
          {diagnosisResult && (
            <div className="condition-card bg-white rounded-3 border-2 border-danger mb-4 shadow-sm">
              <div className="condition-card-body">
                <div className="condition-detail">
                  <h1 className="condition-title text-dark">
                    {diagnosisResult.title}
                  </h1>

                  <div className="condition-severity">
                    <SeverityBadge
                      severity={diagnosisResult.severity}
                      customText={diagnosisResult.severityLabel}
                    />
                  </div>

                  <p className="condition-instruction text-danger">
                    {diagnosisResult.advice}
                  </p>

                  {diagnosisResult.caseId && (
                    <button
                      type="button"
                      className="condition-action btn btn-emergency-red"
                      onClick={handleGoToCase}
                    >
                      XEM HƯỚNG DẪN SƠ CỨU
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Gợi ý chạm nhanh 1 lần cho người không muốn nói hoặc môi trường ồn */}
          <div className="border-top pt-3">
            <p className="small text-muted fw-bold mb-2 text-uppercase">
              <i className="bi bi-hand-index-thumb-fill text-primary me-1"></i> Hoặc chạm nhanh 1 lần vào triệu chứng:
            </p>
            <div className="d-flex flex-wrap gap-2">
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="btn btn-outline-secondary btn-sm py-2 px-3 fw-bold d-inline-flex align-items-center gap-2"
                  style={{ minHeight: '44px', borderRadius: '12px' }}
                  onClick={() => handleQuickSelect(item.text)}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
