// ReMiCare - Speech Utilities (TTS & Voice AI Recognition)
// Đọc giọng tiếng Việt vi-VN, rate: 0.95, pitch: 1.0 chuẩn y tế

let currentUtterance = null;
let lastSpokenText = '';

export const speakText = (text, onStart, onEnd, onError) => {
  if (!('speechSynthesis' in window)) {
    if (onError) onError('Trình duyệt không hỗ trợ đọc âm thanh');
    return false;
  }

  // Khi chuyển sang audio khác → audio trước phải dừng
  window.speechSynthesis.cancel();
  lastSpokenText = text;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.95; // Chuẩn hóa 0.95 cho giọng đọc y tế rõ ràng
  utterance.pitch = 1.0;

  // Tìm voice tiếng Việt nếu có
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang && (v.lang.includes('vi') || v.lang.includes('VN')));
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

export const pauseSpeaking = () => {
  if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
    window.speechSynthesis.pause();
  }
};

export const resumeSpeaking = () => {
  if ('speechSynthesis' in window && window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
  }
};

export const stopSpeaking = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    currentUtterance = null;
  }
};

export const replayText = (onStart, onEnd, onError) => {
  if (lastSpokenText) {
    return speakText(lastSpokenText, onStart, onEnd, onError);
  }
  return false;
};

export const isSpeaking = () => {
  return 'speechSynthesis' in window && window.speechSynthesis.speaking;
};

export const isPaused = () => {
  return 'speechSynthesis' in window && window.speechSynthesis.paused;
};

// Keyword-based Medical Triage Engine for Voice Input (Chuẩn hóa 21/09/2026)
export const analyzeSymptomQuery = (query) => {
  const q = (query || '').toLowerCase().trim();
  
  // EM-03: Hóa chất bắn vào mắt (Critical)
  if (q.includes('hóa chất') || q.includes('xà phòng') || q.includes('nước tẩy') || q.includes('axit') || q.includes('vôi') || q.includes('bazo') || q.includes('cồn')) {
    return {
      matched: true,
      audio_id: 'EM-03',
      caseId: 'chemical-splash',
      title: 'Sơ cứu hóa chất bắn vào mắt',
      category: 'emergency',
      priority: 'critical',
      severity: 'critical',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Cần rửa mắt ngay lập tức dưới vòi nước sạch liên tục 15-20 phút, không chờ đến bệnh viện mới rửa.'
    };
  }

  // EM-02: Dị vật nhọn / vật cắm vào mắt (Critical)
  if (q.includes('mạt sắt') || q.includes('dằm') || q.includes('thủy tinh') || q.includes('găm') || q.includes('móc câu') || q.includes('vật nhọn') || q.includes('xuyên') || (q.includes('dị vật') && (q.includes('nhọn') || q.includes('cắm') || q.includes('găm') || q.includes('sâu')))) {
    return {
      matched: true,
      audio_id: 'EM-02',
      caseId: 'foreign-object',
      title: 'Sơ cứu dị vật nhọn / Vật cắm vào mắt',
      category: 'emergency',
      priority: 'critical',
      severity: 'critical',
      severityLabel: 'CỰC KỲ KHẨN CẤP',
      advice: 'Tuyệt đối KHÔNG tự rút dị vật ra, không ấn hoặc băng ép nhãn cầu. Che nhẹ mắt bằng cốc sạch và đi cấp cứu ngay.'
    };
  }

  // EM-01: Dị vật nhỏ / Bụi / Cát (High)
  if (q.includes('bụi') || q.includes('cát') || q.includes('dị vật nhỏ') || q.includes('cộm xót') || (q.includes('dị vật') && !q.includes('nhọn') && !q.includes('găm'))) {
    return {
      matched: true,
      audio_id: 'EM-01',
      caseId: 'dust-in-eye',
      title: 'Sơ cứu dị vật nhỏ vào mắt',
      category: 'emergency',
      priority: 'high',
      severity: 'high',
      severityLabel: 'KHẨN CẤP',
      advice: 'Tuyệt đối không dụi mắt. Rửa mắt bằng nước sạch hoặc nước muối sinh lý ngay.'
    };
  }

  // EM-04: Bỏng nhiệt ở mắt (High)
  if (q.includes('bỏng nhiệt') || q.includes('nước sôi') || q.includes('dầu mỡ') || q.includes('dầu ăn sôi') || q.includes('lửa')) {
    return {
      matched: true,
      audio_id: 'EM-04',
      caseId: 'thermal-burn',
      title: 'Sơ cứu bỏng nhiệt ở mắt',
      category: 'emergency',
      priority: 'high',
      severity: 'high',
      severityLabel: 'KHẨN CẤP',
      advice: 'Làm mát và rửa mắt bằng nước sạch ngay. Tuyệt đối không bôi mỡ trăn hay mẹo dân gian.'
    };
  }

  // EM-05: Chấn thương do va đập (High)
  if (q.includes('va đập') || q.includes('bị đấm') || q.includes('bóng') || q.includes('té') || q.includes('ngã') || q.includes('bầm')) {
    return {
      matched: true,
      audio_id: 'EM-05',
      caseId: 'blunt-trauma',
      title: 'Sơ cứu chấn thương do va đập vào mắt',
      category: 'emergency',
      priority: 'high',
      severity: 'high',
      severityLabel: 'KHẨN CẤP',
      advice: 'Cho người bị nạn nghỉ ngơi, chườm lạnh nhẹ quanh hốc mắt, không ấn lên nhãn cầu.'
    };
  }

  // EM-06: Tia hàn / UV (Medium)
  if (q.includes('hàn') || q.includes('tia hàn') || q.includes('hồ quang') || q.includes('tia uv') || q.includes('chói mắt sau khi hàn')) {
    return {
      matched: true,
      audio_id: 'EM-06',
      caseId: 'welding-uv',
      title: 'Tổn thương mắt do tia hàn / tia UV',
      category: 'emergency',
      priority: 'medium',
      severity: 'medium',
      severityLabel: 'CẦN LƯU Ý',
      advice: 'Rời khỏi nguồn sáng ngay, không dụi mắt, tuyệt đối không tự ý dùng thuốc tê nhỏ mắt.'
    };
  }

  // DIS-08: Viêm kết mạc / Mắt đỏ
  if (q.includes('đỏ') || q.includes('ghèn') || q.includes('rỉ') || q.includes('đau mắt đỏ') || q.includes('kết mạc')) {
    return {
      matched: true,
      audio_id: 'DIS-08B',
      caseId: 'red-eye',
      title: 'Dấu hiệu thường gặp: Đau mắt đỏ (Viêm kết mạc)',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Vệ sinh bằng nước muối sinh lý, dùng khăn riêng tránh lây lan và nên được bác sĩ kiểm tra.'
    };
  }

  // DIS-05: Đục thủy tinh thể
  if (q.includes('đục') || q.includes('mây') || q.includes('cườm khô')) {
    return {
      matched: true,
      audio_id: 'DIS-05',
      caseId: 'cloudy-eye',
      title: 'Dấu hiệu thường gặp: Đục thủy tinh thể',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Nhìn mờ như màn sương che. Bạn nên đến bệnh viện chuyên khoa mắt để được bác sĩ khám và đo thị lực.'
    };
  }

  // DIS-06: Glôcôm
  if (q.includes('glôcôm') || q.includes('cườm nước') || q.includes('nhãn áp') || q.includes('quầng sáng')) {
    return {
      matched: true,
      audio_id: 'DIS-06',
      caseId: 'glaucoma',
      title: 'Dấu hiệu thường gặp: Glôcôm (Cườm nước)',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Bệnh có thể tiến triển âm thầm làm thu hẹp tầm nhìn. Bạn nên đo nhãn áp và khám mắt định kỳ.'
    };
  }

  // DIS-07: Khô mắt
  if (q.includes('khô mắt') || q.includes('mỏi mắt') || q.includes('rát mắt')) {
    return {
      matched: true,
      audio_id: 'DIS-07',
      caseId: 'dry-fatigue',
      title: 'Dấu hiệu thường gặp: Khô mắt',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Cho mắt nghỉ ngơi, chớp mắt đều, nhỏ nước mắt nhân tạo không chất bảo quản.'
    };
  }

  // DIS-01: Cận thị
  if (q.includes('cận thị') || q.includes('nhìn xa mờ')) {
    return {
      matched: true,
      audio_id: 'DIS-01',
      caseId: 'myopia',
      title: 'Dấu hiệu thường gặp: Cận thị',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Khó khăn khi nhìn xa, nhìn gần rõ hơn. Bạn nên đến cơ sở nhãn khoa để đo khúc xạ chính xác.'
    };
  }

  // General Blurry Vision
  if (q.includes('mờ') || q.includes('tối sầm') || q.includes('không thấy')) {
    return {
      matched: true,
      audio_id: 'DIS-09',
      caseId: 'blurry-vision',
      title: 'Dấu hiệu thường gặp: Giảm thị lực / Nhìn mờ',
      category: 'disease_info',
      priority: 'low',
      severity: 'low',
      severityLabel: 'THÔNG TIN',
      advice: 'Thông tin tham khảo: Dừng ngay việc lái xe hay thao tác nguy hiểm. Bạn nên được bác sĩ chuyên khoa mắt kiểm tra đáy mắt.'
    };
  }

  // Default fallback non-diagnostic
  return {
    matched: false,
    caseId: null,
    title: 'Thông tin chưa xác định rõ',
    category: 'disease_info',
    priority: 'low',
    severity: 'low',
    severityLabel: 'THÔNG TIN',
    advice: 'Bạn có thể mô tả cụ thể hơn như "bụi vào mắt", "hóa chất", "va đập", "cận thị" để nhận hướng dẫn phù hợp.'
  };
};
