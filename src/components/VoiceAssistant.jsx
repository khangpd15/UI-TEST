import React, { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import { analyzeSymptomQuery, speakText, stopSpeaking } from '../utils/speechUtils';
import SeverityBadge from './SeverityBadge';

export default function VoiceAssistant({ onSelectCase }) {
  const [showModal, setShowModal] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [diagnosisResult, setDiagnosisResult] = useState(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'vi-VN';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const text = event.results[current][0].transcript;
        setTranscript(text);

        if (event.results[current].isFinal) {
          handleAnalyze(text);
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
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

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
      } catch {
        recognitionRef.current.stop();
        setTimeout(() => recognitionRef.current.start(), 200);
      }
    } else {
      // Simulation for unsupported browsers
      setIsListening(true);
      setTimeout(() => {
        setIsListening(false);
        const demo = 'Tôi bị hóa chất tẩy rửa bắn vào mắt rát quá';
        setTranscript(demo);
        handleAnalyze(demo);
      }, 2000);
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
    speakText(`${result.title}. ${result.advice}`);
  };

  const handleGoToCase = () => {
    if (diagnosisResult && diagnosisResult.caseId) {
      stopSpeaking();
      setShowModal(false);
      if (onSelectCase) onSelectCase(diagnosisResult.caseId);
    }
  };

  const samplePrompts = [
    "Hóa chất bắn vào mắt",
    "Dị vật nhọn cắm vào mắt",
    "Bụi bay vào mắt cộm xót",
    "Mắt bị va đập",
    "Bỏng nhiệt do dầu mỡ sôi",
    "Tia hàn chói rát mắt",
    "Cận thị nhìn xa mờ",
    "Đau mắt đỏ có ghèn"
  ];

  return (
    <>
      {/* Nút nổi Floating FAB màu Teal (Section 12: right: 24px; bottom: 96px;) */}
      {!showModal && (
        <button
          type="button"
          className="voice-assistant-fab"
          onClick={() => setShowModal(true)}
          aria-label="Hỏi bằng giọng nói"
        >
          <span style={{ fontSize: '20px' }} aria-hidden="true">🎙️</span>
          <span>Hỏi bằng giọng nói</span>
        </button>
      )}

      {/* Bootstrap Modal */}
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
          <Modal.Title id="voice-modal-title" className="d-flex align-items-center gap-2 fw-heavy text-dark fs-4">
            <span style={{ color: 'var(--visi-primary)' }}>🎙️</span>
            <span>Bạn đang gặp vấn đề gì với mắt?</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4 bg-light">
          <div className="text-center mb-4">
            <p className="text-muted fs-5 mb-3">
              Hãy bấm nút và nói tình trạng của bạn (ví dụ: <em>"Tôi bị dính hóa chất"</em> hoặc <em>"Mắt bị va chạm đau nhức"</em>).
            </p>

            {/* Button BẮT ĐẦU NÓI lớn */}
            <button
              type="button"
              className={`btn btn-lg py-3 px-5 fw-bold shadow ${
                isListening ? 'btn-danger' : 'btn-visi-primary'
              }`}
              style={{ borderRadius: '16px', minWidth: '240px', minHeight: '64px' }}
              onClick={isListening ? handleStopListening : handleStartListening}
            >
              <i className={`bi ${isListening ? 'bi-stop-fill' : 'bi-mic-fill'} fs-4 me-2`}></i>
              <span>{isListening ? 'ĐANG LẮNG NGHE... (BẤM DỪNG)' : '🎙️ BẮT ĐẦU NÓI'}</span>
            </button>
          </div>

          {transcript && (
            <div className="bg-white p-3 rounded-3 border mb-3">
              <span className="small text-muted fw-bold d-block mb-1">
                Lời nói nhận diện được:
              </span>
              <p className="fs-5 fw-bold text-dark mb-0">"{transcript}"</p>
            </div>
          )}

          {diagnosisResult && (
            <div className="condition-card bg-white rounded-3 border-2 border-danger mb-3 shadow-sm">
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

                  <p className="condition-instruction text-dark fw-medium mb-3">
                    {diagnosisResult.advice}
                  </p>

                  <div className="text-muted small fst-italic mb-3" style={{ fontSize: '0.8rem' }}>
                    <i className="bi bi-info-circle-fill text-visi-primary me-1"></i>
                    <strong>Lưu ý:</strong> Thông tin hỗ trợ sơ cứu ban đầu, không thay thế chẩn đoán hoặc tư vấn của bác sĩ.
                  </div>

                  {diagnosisResult.caseId && (
                    <button
                      type="button"
                      className="condition-action btn btn-emergency-red w-100 fw-bold"
                      onClick={handleGoToCase}
                    >
                      XEM HƯỚNG DẪN XỬ LÝ CHI TIẾT →
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Quick touch prompt chips */}
          <div className="border-top pt-3">
            <span className="small text-muted fw-bold d-block mb-2">
              Hoặc chọn nhanh triệu chứng thường gặp:
            </span>
            <div className="d-flex flex-wrap gap-2">
              {samplePrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="btn btn-outline-secondary btn-sm py-2 px-3 fw-semibold bg-white"
                  style={{ minHeight: '40px', borderRadius: '10px' }}
                  onClick={() => {
                    setTranscript(prompt);
                    handleAnalyze(prompt);
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
