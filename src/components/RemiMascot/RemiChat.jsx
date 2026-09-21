import React, { useState, useEffect, useRef } from 'react';
import RemiPenguin from './RemiPenguin';
import { analyzeSymptomQuery } from '../../utils/speechUtils';
import { firstAidMap } from '../../data/firstAidData';
import { eyeDiseases } from '../../data/knowledgeData';

export default function RemiChat({
  activePage = 'home',
  selectedCaseId = null,
  onSelectCase,
  onClose
}) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [voiceError, setVoiceError] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Khởi tạo lời chào theo Context (Mục 11 & 12)
  useEffect(() => {
    let initialGreeting = "👋 Chào bạn! Cần Remi tư vấn gì về mắt hông?";
    let initialSuggestions = [
      "Bụi bay vào mắt",
      "Hóa chất bắn vào mắt",
      "Va đập bầm mắt",
      "Đau mắt đỏ"
    ];

    // Nếu đang ở màn hình sơ cứu một ca cụ thể (selectedCase !== null)
    if (activePage === 'emergency' && selectedCaseId) {
      const foundCase = firstAidMap[selectedCaseId] || firstAidMap[String(selectedCaseId).toUpperCase()];
      if (foundCase) {
        initialGreeting = `🐧 Bạn cần hỗ trợ gì về sơ cứu **${foundCase.title}** không?`;
        initialSuggestions = [
          "Khi nào cần đi cấp cứu?",
          "Có được dụi mắt không?",
          "Cần làm gì đầu tiên?"
        ];
      }
    } else if (activePage === 'knowledge') {
      initialGreeting = "👋 Chào bạn! Bạn muốn tìm hiểu bệnh mắt hay tật khúc xạ nào?";
      initialSuggestions = [
        "Dấu hiệu bệnh Glôcôm",
        "Phòng ngừa cận thị",
        "Mắt khô mỏi nên làm gì?"
      ];
    }

    setMessages([
      {
        id: 'msg-init',
        sender: 'remi',
        text: initialGreeting,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        suggestions: initialSuggestions
      }
    ]);
  }, [activePage, selectedCaseId]);

  // Tự động cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isListening]);

  // Tự động focus input khi mở
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Lắng nghe phím ESC để đóng
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Thiết lập Web Speech Recognition API để tái sử dụng Voice Input
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'vi-VN';

      recognition.onstart = () => {
        setIsListening(true);
        setVoiceError(null);
      };

      recognition.onresult = (event) => {
        const current = event.resultIndex;
        const transcriptText = event.results[current][0].transcript;
        setInputText(transcriptText);

        if (event.results[current].isFinal) {
          setIsListening(false);
          handleSend(transcriptText);
        }
      };

      recognition.onerror = (e) => {
        setIsListening(false);
        if (e.error === 'not-allowed') {
          setVoiceError('Chưa cấp quyền microphone. Bạn có thể gõ văn bản nhé.');
        } else {
          setVoiceError('Chưa nghe rõ giọng nói. Hãy thử lại hoặc nhập câu hỏi.');
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const toggleListening = () => {
    setVoiceError(null);
    if (isListening) {
      if (recognitionRef.current) recognitionRef.current.stop();
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch {
          recognitionRef.current.stop();
          setTimeout(() => recognitionRef.current.start(), 200);
        }
      } else {
        // Fallback mô phỏng nếu trình duyệt không hỗ trợ Web Speech
        setIsListening(true);
        setTimeout(() => {
          setIsListening(false);
          const demo = 'Bụi bay vào mắt phải làm sao?';
          setInputText(demo);
          handleSend(demo);
        }, 1800);
      }
    }
  };

  // Logic phản hồi của Remi: Tận dụng dataset hiện tại, tuân thủ nguyên tắc y khoa
  const generateRemiResponse = (query) => {
    const qLower = query.toLowerCase();

    // 1. Phân tích qua engine triệu chứng sẵn có
    const symptomAnalysis = analyzeSymptomQuery(query);

    // 2. Tình huống đặc biệt: Hỏi khi nào đi cấp cứu
    if (qLower.includes('khi nào') && (qLower.includes('cấp cứu') || qLower.includes('đi viện') || qLower.includes('khám'))) {
      return {
        text: "Bạn cần đến ngay cơ sở y tế chuyên khoa mắt nếu có các dấu hiệu nguy hiểm sau:\n• Giảm hoặc mất thị lực đột ngột\n• Đau nhức buốt sâu trong nhãn cầu\n• Thấy máu trong mắt hoặc rách rỉ dịch\n• Dị vật nhọn cắm vào mắt\n• Bỏng hóa chất (sau khi đã rửa liên tục 15-20 phút)\n• Đồng tử bị méo mó hoặc không vận động mắt được.",
        disclaimer: "Đây là hướng dẫn sơ cứu ban đầu. Khi có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay."
      };
    }

    // 3. Tình huống: Hỏi có được dụi mắt không
    if (qLower.includes('dụi mắt') || qLower.includes('day mắt')) {
      return {
        text: "Tuyệt đối **KHÔNG ĐƯỢC DỤI MẮT** trong bất kỳ tình huống nào! Hành động dụi mắt sẽ chà xát dị vật vào giác mạc gây trầy xước, loét lòng đen hoặc khiến hóa chất ngấm sâu hơn vào mô mắt.",
        disclaimer: "Hãy rửa mắt nhẹ nhàng bằng nước sạch hoặc nước muối sinh lý NaCl 0.9%."
      };
    }

    // 4. Nếu khớp tình huống cấp cứu (EM-01 đến EM-06)
    if (symptomAnalysis && symptomAnalysis.matched && symptomAnalysis.category === 'emergency') {
      const emergencyCase = firstAidMap[symptomAnalysis.audio_id] || firstAidMap[symptomAnalysis.caseId];
      let stepsText = "";
      if (emergencyCase && emergencyCase.steps) {
        stepsText = "\n\n" + emergencyCase.steps.map(s => `• **${s.title}:** ${s.desc}`).join("\n");
      }

      return {
        text: `Remi nhận thấy tình huống này tương ứng với **${symptomAnalysis.title}** (${symptomAnalysis.audio_id}).\n\n${symptomAnalysis.advice}${stepsText}`,
        actionCaseId: emergencyCase ? emergencyCase.id : symptomAnalysis.caseId,
        actionCaseTitle: symptomAnalysis.title,
        severity: symptomAnalysis.severity,
        severityLabel: symptomAnalysis.severityLabel,
        disclaimer: "Remi không đưa ra chẩn đoán y tế xác định. Nếu có dấu hiệu nghiêm trọng, hãy tìm kiếm chăm sóc y tế khẩn cấp ngay."
      };
    }

    // 5. Nếu khớp bệnh lý mắt (DIS-01 đến DIS-10)
    if (symptomAnalysis && symptomAnalysis.matched && symptomAnalysis.category === 'disease_info') {
      const matchedDisease = eyeDiseases.find(d => d.id === symptomAnalysis.audio_id);
      let keyPointsText = "";
      if (matchedDisease && matchedDisease.keyPoints) {
        keyPointsText = "\n\n**Điểm quan trọng:**\n" + matchedDisease.keyPoints.map(p => `• ${p}`).join("\n");
      }

      return {
        text: `Về **${symptomAnalysis.title}**:\n${symptomAnalysis.advice}${keyPointsText}`,
        actionDiseaseId: matchedDisease ? matchedDisease.id : null,
        actionDiseaseTitle: symptomAnalysis.title,
        disclaimer: "Thông tin này nhằm mục đích giáo dục sức khỏe và không thay thế chẩn đoán hoặc tư vấn của bác sĩ."
      };
    }

    // 6. Tình huống: Mắt đỏ (như ví dụ Mục 7 của yêu cầu)
    if (qLower.includes('mắt đỏ') || qLower.includes('đỏ mắt') || qLower.includes('dau mat do')) {
      return {
        text: "Mắt đỏ có thể xuất phát từ nhiều nguyên nhân như: kích ứng bụi, dị ứng, viêm kết mạc do vi khuẩn hoặc do virus.\n\nBạn có thể cho Remi biết mắt bạn có bị đau nhức dữ dội, ngứa nhiều, chảy nước mắt hay có ghèn dính mi mắt vào buổi sáng không?",
        suggestions: [
          "Có ghèn dính mi mắt",
          "Ngứa mắt dữ dội",
          "Mắt đỏ kèm đau rát",
          "Chảy nước mắt liên tục"
        ],
        disclaimer: "Thông tin nhằm mục đích tham khảo. Bạn nên được bác sĩ mắt thăm khám nếu tình trạng đỏ kéo dài."
      };
    }

    // 7. Fallback thân thiện, không chẩn đoán bừa
    return {
      text: "Remi đã lắng nghe. Bạn có thể mô tả rõ hơn cảm giác ở mắt (ví dụ: bị cộm xót, cay mắt, mờ, va đập hay dính chất gì) để Remi hỗ trợ thông tin sơ cứu chính xác nhất nhé!",
      suggestions: [
        "Bụi bay vào mắt",
        "Hóa chất bắn vào mắt",
        "Nước sôi bắn vào mắt",
        "Mắt nhìn xa bị mờ"
      ],
      disclaimer: "Remi là trợ lý đồng hành hỗ trợ thông tin, không thay thế bác sĩ chuyên khoa."
    };
  };

  const handleSend = (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Remi suy nghĩ và trả lời nhẹ nhàng
    setTimeout(() => {
      const responseData = generateRemiResponse(query);
      const remiMsg = {
        id: `remi-${Date.now()}`,
        sender: 'remi',
        text: responseData.text,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        actionCaseId: responseData.actionCaseId,
        actionCaseTitle: responseData.actionCaseTitle,
        suggestions: responseData.suggestions,
        disclaimer: responseData.disclaimer
      };
      setMessages(prev => [...prev, remiMsg]);
    }, 450);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div
      className="remi-chat-panel animate__animated animate__fadeInUp animate__faster"
      role="dialog"
      aria-label="Cửa sổ trò chuyện với Remi"
      aria-modal="false"
    >
      {/* 1. Header Chat */}
      <div className="remi-chat-header d-flex align-items-center justify-content-between p-3 border-bottom">
        <div className="d-flex align-items-center gap-2">
          <div className="remi-header-avatar">
            <RemiPenguin size={40} animation="peeking" />
          </div>
          <div>
            <div className="d-flex align-items-center gap-1">
              <h2 className="h6 fw-bold mb-0 text-dark">Remi</h2>
              <span className="remi-status-dot" title="Sẵn sàng hỗ trợ"></span>
            </div>
            <span className="small text-muted" style={{ fontSize: '0.78rem' }}>
              Trợ lý chăm sóc mắt • Bạn đồng hành
            </span>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-sm btn-light rounded-circle remi-close-btn"
          onClick={onClose}
          aria-label="Đóng trợ lý Remi"
        >
          ✕
        </button>
      </div>

      {/* 2. Chat Conversation Body */}
      <div className="remi-chat-body p-3" aria-live="polite">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`remi-message-wrapper d-flex mb-3 ${
              msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'
            }`}
          >
            {msg.sender === 'remi' && (
              <div className="remi-msg-avatar me-2 align-self-end">
                <RemiPenguin size={32} animation="waving" />
              </div>
            )}

            <div className={`remi-message-bubble ${msg.sender === 'user' ? 'remi-user-bubble' : 'remi-bot-bubble'}`}>
              <div className="remi-msg-text" style={{ whiteSpace: 'pre-line' }}>
                {msg.text}
              </div>

              {/* Nút hành động xem chi tiết case nếu có */}
              {msg.actionCaseId && (
                <div className="mt-2 pt-2 border-top border-light-subtle">
                  <button
                    type="button"
                    className="btn btn-sm btn-visi-primary w-100 fw-bold py-1 px-2 d-flex align-items-center justify-content-center gap-1 shadow-sm"
                    style={{ fontSize: '0.82rem', borderRadius: '8px' }}
                    onClick={() => {
                      if (onSelectCase) onSelectCase(msg.actionCaseId);
                      onClose();
                    }}
                  >
                    <span>Xem hướng dẫn xử lý chi tiết</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              )}

              {/* Chú thích disclaimer y tế */}
              {msg.disclaimer && (
                <div className="remi-msg-disclaimer mt-2 text-muted fst-italic">
                  <i className="bi bi-shield-exclamation text-teal me-1"></i>
                  {msg.disclaimer}
                </div>
              )}

              <span className="remi-msg-time d-block text-end mt-1">
                {msg.time}
              </span>

              {/* Gợi ý tương tác nhanh */}
              {msg.suggestions && msg.suggestions.length > 0 && (
                <div className="remi-suggestions-container mt-2 pt-1 d-flex flex-wrap gap-1">
                  {msg.suggestions.map((sug, i) => (
                    <button
                      key={i}
                      type="button"
                      className="btn btn-sm btn-outline-secondary remi-suggestion-chip"
                      onClick={() => handleSend(sug)}
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isListening && (
          <div className="remi-listening-pulse p-2 rounded-3 bg-light border d-flex align-items-center justify-content-center gap-2 mb-2 shadow-sm">
            <RemiPenguin size={36} animation="listening" />
            <span className="spinner-grow spinner-grow-sm text-danger" role="status"></span>
            <span className="small fw-bold text-danger">Remi đang lắng nghe bạn nói...</span>
          </div>
        )}

        {voiceError && (
          <div className="alert alert-warning py-1 px-2 small mb-2" role="alert">
            <i className="bi bi-exclamation-triangle-fill me-1"></i>
            {voiceError}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* 3. Footer Input & Microphone (Mục 6 & 7) */}
      <form onSubmit={handleSubmit} className="remi-chat-footer p-2 border-top bg-white">
        <div className="input-group">
          <input
            ref={inputRef}
            type="text"
            className="form-control remi-chat-input"
            placeholder={isListening ? "Đang lắng nghe giọng nói..." : "Hỏi Remi về mắt..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isListening}
            aria-label="Nhập câu hỏi cho Remi"
          />

          {/* Nút Microphone Voice Input */}
          <button
            type="button"
            className={`btn remi-mic-btn ${isListening ? 'btn-danger' : 'btn-outline-secondary'}`}
            onClick={toggleListening}
            title={isListening ? "Dừng ghi âm" : "Nói câu hỏi bằng microphone"}
            aria-label="Dùng microphone đặt câu hỏi"
          >
            <i className={`bi ${isListening ? 'bi-stop-fill' : 'bi-mic-fill'}`}></i>
          </button>

          {/* Nút gửi */}
          <button
            type="submit"
            className="btn btn-visi-primary remi-send-btn px-3"
            disabled={!inputText.trim()}
            aria-label="Gửi câu hỏi"
          >
            <i className="bi bi-send-fill"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
