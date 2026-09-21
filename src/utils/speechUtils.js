// ReMiCare - Speech Utilities (TTS & Voice AI Recognition)
// Đọc giọng tiếng Việt vi-VN, tốc độ vừa phải cho người cao tuổi, nhận diện triệu chứng mắt

let currentUtterance = null;

export const speakText = (text, onStart, onEnd, onError) => {
  if (!('speechSynthesis' in window)) {
    if (onError) onError('Trình duyệt không hỗ trợ đọc âm thanh');
    return false;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.9; // Tốc độ hơi chậm, rõ ràng cho người cao tuổi
  utterance.pitch = 1.0;

  // Try to find a Vietnamese voice if available
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang.includes('vi') || v.lang.includes('VN'));
  if (viVoice) {
    utterance.voice = viVoice;
  }

  utterance.onstart = () => {
    if (onStart) onStart();
  };

  utterance.onend = () => {
    currentUtterance = null;
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    currentUtterance = null;
    if (onError) onError(e);
  };

  currentUtterance = utterance;
  window.speechSynthesis.speak(utterance);
  return true;
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};

export const isSpeaking = () => {
  return 'speechSynthesis' in window && window.speechSynthesis.speaking;
};

// Keyword-based Medical Triage Engine for Voice Input
export const analyzeSymptomQuery = (query) => {
  const q = (query || '').toLowerCase().trim();
  
  if (q.includes('hóa chất') || q.includes('xà phòng') || q.includes('nước tẩy') || q.includes('axit') || q.includes('vôi')) {
    return {
      matched: true,
      caseId: 'chemical-splash',
      title: 'Hóa chất vào mắt',
      severity: 'emergency',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Cần xối nước sạch liên tục ngay lập tức trong 15-20 phút!'
    };
  }

  if (q.includes('va đập') || q.includes('bị đấm') || q.includes('bóng') || q.includes('té') || q.includes('ngã') || q.includes('bầm')) {
    return {
      matched: true,
      caseId: 'blunt-trauma',
      title: 'Mắt bị va đập',
      severity: 'emergency',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Không được ấn hay dụi mắt. Chườm lạnh nhẹ quanh hốc mắt và đến viện ngay.'
    };
  }

  if (q.includes('dị vật') || q.includes('mạt sắt') || q.includes('dằm') || q.includes('thủy tinh') || q.includes('găm')) {
    return {
      matched: true,
      caseId: 'foreign-object',
      title: 'Dị vật găm vào mắt',
      severity: 'emergency',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Tuyệt đối KHÔNG tự ý rút dị vật ra! Che mắt bằng cốc sạch và đi cấp cứu.'
    };
  }

  if (q.includes('móc câu') || q.includes('câu cá')) {
    return {
      matched: true,
      caseId: 'fishhook',
      title: 'Móc câu vào mắt',
      severity: 'emergency',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Tuyệt đối không giật móc câu ra khỏi mắt. Cắt dây câu và đến bệnh viện.'
    };
  }

  if (q.includes('bỏng') || q.includes('hàn') || q.includes('lửa') || q.includes('dầu ăn sôi')) {
    return {
      matched: true,
      caseId: 'eye-burn',
      title: 'Bỏng mắt',
      severity: 'emergency',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Làm mát vùng mặt bằng nước mát sạch ngay và đi kiểm tra chuyên khoa.'
    };
  }

  if (q.includes('bụi') || q.includes('cát') || q.includes('cộm') || q.includes('xót')) {
    return {
      matched: true,
      caseId: 'dust-in-eye',
      title: 'Bụi vào mắt',
      severity: 'warning',
      severityLabel: 'CẦN ĐƯỢC KHÁM',
      advice: 'Không dụi mắt. Nhỏ nước muối sinh lý nhiều lần hoặc chớp mắt trong bát nước sạch.'
    };
  }

  if (q.includes('đỏ') || q.includes('ghèn') || q.includes('rỉ') || q.includes('đau mắt đỏ')) {
    return {
      matched: true,
      caseId: 'red-eye',
      title: 'Mắt đỏ + ghèn',
      severity: 'warning',
      severityLabel: 'CẦN ĐƯỢC KHÁM',
      advice: 'Vệ sinh nước muối sinh lý, dùng khăn riêng tránh lây và đến gặp bác sĩ mắt.'
    };
  }

  if (q.includes('đục') || q.includes('mây') || q.includes('cườm khô')) {
    return {
      matched: true,
      caseId: 'cloudy-eye',
      title: 'Mắt bị đục',
      severity: 'warning',
      severityLabel: 'CẦN ĐƯỢC KHÁM',
      advice: 'Dấu hiệu đục thủy tinh thể, cần khám chuyên sâu đo thị lực tại bệnh viện.'
    };
  }

  if (q.includes('mờ') || q.includes('tối sầm') || q.includes('không thấy')) {
    return {
      matched: true,
      caseId: 'blurry-vision',
      title: 'Nhìn mờ đột ngột',
      severity: 'warning',
      severityLabel: 'CẦN ĐƯỢC KHÁM',
      advice: 'Dừng công việc, không tự lái xe. Cần đi kiểm tra đáy mắt và nhãn áp ngay.'
    };
  }

  // Default fallback if query entered doesn't match a specific eye trauma
  return {
    matched: false,
    caseId: null,
    title: 'Triệu chứng chưa xác định rõ',
    severity: 'warning',
    severityLabel: 'CẦN ĐƯỢC KHÁM',
    advice: 'Bạn hãy mô tả rõ hơn như "bụi vào mắt", "hóa chất", "va đập", hoặc liên hệ hotline để được bác sĩ tư vấn.'
  };
};
