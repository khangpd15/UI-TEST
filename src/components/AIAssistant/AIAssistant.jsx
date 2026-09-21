import React, { useState, useEffect } from 'react';
import VoiceRecorder from './VoiceRecorder';
import SpeechTranscript from './SpeechTranscript';
import AIProcessing from './AIProcessing';
import FollowUpQuestion from './FollowUpQuestion';
import RedFlagAlert from './RedFlagAlert';
import SituationResult from './SituationResult';
import VideoGuide from './VideoGuide';
import AudioGuide from '../AudioGuide';
import FirstAidSteps from './FirstAidSteps';
import WarningSigns from './WarningSigns';

import { analyzeEyeSituation } from '../../services/aiService';
import { EYE_CARE_CATEGORIES } from '../../data/eyeCareCategories';
import { findVideoByCategory } from '../../data/videoLibrary';
import { stopSpeaking } from '../../utils/speechUtils';

/**
 * AIAssistant Master Component
 * Flow UX chuẩn hóa:
 * - Khi CHƯA chọn tình huống (selectedCase === null):
 *   Hiển thị trung tâm: Microphone + "Nói với trợ lý" + Nhập tình huống văn bản + Tình huống mẫu
 * - Khi ĐÃ chọn tình huống (selectedCase !== null):
 *   Ẩn toàn bộ khu vực microphone/input/quick sample.
 *   Tập trung toàn bộ màn hình vào KẾT QUẢ SƠ CỨU:
 *   [Tên tình huống / Mức độ / Disclaimer]
 *   LÀM GÌ NGAY?
 *   KHÔNG ĐƯỢC LÀM GÌ?
 *   KHI NÀO CẦN ĐI CẤP CỨU?
 *   Action [ 🔊 NGHE HƯỚNG DẪN SƠ CỨU ]
 *   Action [ 🎬 VIDEO HƯỚNG DẪN ]
 *   Action [ ☎ GỌI HỖ TRỢ KHẨN CẤP ]
 *   Nút [ 🔄 NÓI VỀ SỰ CỐ MẮT KHÁC ] để quay lại trạng thái chọn tình huống.
 */
export default function AIAssistant({
  initialCaseId = null,
  onBack,
  onReset,
  hotline = "0916 973 161"
}) {
  const [mode, setMode] = useState('idle'); // idle | listening | review | processing | question | result | redFlag | error
  const [transcript, setTranscript] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [pendingFollowUps, setPendingFollowUps] = useState([]);
  const [followUpAnswers, setFollowUpAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  // Hàm tải dữ liệu tình huống theo ID (EM-01 đến EM-06 hoặc DIS-01 đến DIS-10)
  const loadCase = (caseIdentifier) => {
    if (!caseIdentifier) return;
    let categoryKey = 'FOREIGN_BODY_DUST';
    const idStr = String(caseIdentifier).toLowerCase();
    if (idStr.includes('em-03') || idStr.includes('chemical')) categoryKey = 'CHEMICAL_EYE_EXPOSURE';
    else if (idStr.includes('em-02') || idStr.includes('object') || idStr.includes('fishhook') || idStr.includes('metal')) categoryKey = 'PENETRATING_OBJECT';
    else if (idStr.includes('em-01') || idStr.includes('dust')) categoryKey = 'FOREIGN_BODY_DUST';
    else if (idStr.includes('em-04') || idStr.includes('thermal') || idStr.includes('burn')) categoryKey = 'THERMAL_BURN';
    else if (idStr.includes('em-05') || idStr.includes('blunt') || idStr.includes('trauma')) categoryKey = 'BLUNT_EYE_TRAUMA';
    else if (idStr.includes('em-06') || idStr.includes('welding') || idStr.includes('uv')) categoryKey = 'WELDING_UV_EXPOSURE';
    else if (idStr.includes('red-eye')) categoryKey = 'RED_EYE_INFECTION';

    const catData = EYE_CARE_CATEGORIES[categoryKey] || EYE_CARE_CATEGORIES.FOREIGN_BODY_DUST;
    const matchedVideo = findVideoByCategory(catData.id);

    setAnalysisResult({
      category: catData.id,
      audio_id: catData.audio_id || catData.caseId,
      confidence: 0.95,
      needsMoreQuestions: false,
      redFlags: (catData.severity === 'emergency' || catData.severity === 'critical') ? ['Tình huống khẩn cấp cần xử trí ngay'] : [],
      summary: catData.title,
      subtitle: catData.subtitle,
      severity: catData.severity,
      severityLabel: catData.severityLabel,
      recommendedVideoId: matchedVideo ? matchedVideo.id : null,
      video: matchedVideo,
      steps: catData.steps,
      warningSigns: catData.warningSigns,
      audioScript: catData.audioScript
    });

    setMode('result');
  };

  // Khởi tạo nếu có caseId truyền vào sẵn
  useEffect(() => {
    if (initialCaseId) {
      loadCase(initialCaseId);
    }
  }, [initialCaseId]);

  // Bắt đầu lắng nghe
  const handleStartListening = () => {
    setTranscript('');
    setErrorMessage(null);
    setMode('listening');
  };

  // Dừng nghe -> Chuyển sang review
  const handleStopListening = () => {
    setMode('review');
  };

  // Cập nhật transcript realtime
  const handleTranscriptChange = (text) => {
    setTranscript(text);
  };

  // Khi nhập bằng văn bản và submit
  const handleSubmitManualText = async (text) => {
    setTranscript(text);
    await triggerAnalysis(text, {});
  };

  // Xác nhận transcript để AI phân tích
  const handleConfirmTranscript = async () => {
    if (!transcript.trim()) {
      setErrorMessage('Chưa có nội dung giọng nói để phân tích. Vui lòng nói lại.');
      setMode('error');
      return;
    }
    await triggerAnalysis(transcript, {});
  };

  // Thực hiện phân tích AI
  const triggerAnalysis = async (inputText, answers) => {
    setMode('processing');
    setErrorMessage(null);

    try {
      const response = await analyzeEyeSituation({
        transcript: inputText,
        followUpAnswers: answers
      });

      setAnalysisResult(response);

      // Nếu cần hỏi thêm câu hỏi làm rõ (Section 6)
      if (response.needsMoreQuestions && response.followUpQuestions && response.followUpQuestions.length > 0) {
        setPendingFollowUps(response.followUpQuestions);
        setMode('question');
        return;
      }

      // Nếu có Red Flag nguy hiểm
      if (response.redFlags && response.redFlags.length > 0) {
        setMode('redFlag');
        return;
      }

      // Thành công bình thường
      setMode('result');
    } catch (err) {
      console.error('AI Analysis error:', err);
      setErrorMessage('Đã xảy ra lỗi khi phân tích. Vui lòng thử lại.');
      setMode('error');
    }
  };

  // Khi người dùng trả lời xong các câu hỏi phụ
  const handleFollowUpAnswerComplete = async (completedAnswers) => {
    setFollowUpAnswers(completedAnswers);
    await triggerAnalysis(transcript, completedAnswers);
  };

  // Khi người dùng từ màn hình RedFlag muốn xem các bước an toàn
  const handleViewSafeSteps = () => {
    setMode('result');
  };

  // Bắt đầu lại lượt tương tác mới - Quay lại màn hình chọn tình huống
  const handleReset = () => {
    stopSpeaking();
    setMode('idle');
    setTranscript('');
    setAnalysisResult(null);
    setFollowUpAnswers({});
    setPendingFollowUps([]);
    setErrorMessage(null);
    if (onReset) onReset();
  };

  // Kiểm tra đã có tình huống sơ cứu cụ thể được chọn chưa
  const hasSelectedCase = Boolean(analysisResult && (mode === 'result' || mode === 'redFlag'));

  return (
    <div className="ai-assistant-container py-3 py-md-4 animate__animated animate__fadeIn">
      {/* Nút quay lại trang trước nếu có */}
      {onBack && !hasSelectedCase && (
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-visi-outline d-inline-flex align-items-center gap-2 fw-bold"
            onClick={onBack}
            style={{ minHeight: '44px', borderRadius: '12px' }}
            aria-label="Quay lại"
          >
            <i className="bi bi-arrow-left fs-5"></i>
            <span>QUAY LẠI</span>
          </button>
        </div>
      )}

      {/* Thông báo lỗi nếu có */}
      {errorMessage && (
        <div className="alert alert-danger d-flex align-items-center justify-content-between mb-3 rounded-3">
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-exclamation-octagon-fill fs-5"></i>
            <span>{errorMessage}</span>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger fw-bold"
            onClick={handleReset}
          >
            Thử lại
          </button>
        </div>
      )}

      {/* TRẠNG THÁI 1: CHƯA CHỌN TÌNH HUỐNG (selectedCase === null) */}
      {!hasSelectedCase && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {/* 1. Bộ thu âm giọng nói trung tâm + Gõ chữ + Câu mẫu */}
            <VoiceRecorder
              mode={mode}
              onStartListening={handleStartListening}
              onStopListening={handleStopListening}
              onTranscriptChange={handleTranscriptChange}
              onSubmitManualText={handleSubmitManualText}
            />

            {/* 2. Hiển thị Transcript Realtime & Review */}
            <SpeechTranscript
              mode={mode}
              transcript={transcript}
              onStopListening={handleStopListening}
              onResetVoice={handleReset}
              onConfirmTranscript={handleConfirmTranscript}
            />

            {/* 3. Trạng thái phân tích AI */}
            {mode === 'processing' && <AIProcessing />}

            {/* 4. Câu hỏi làm rõ thông tin nếu mơ hồ */}
            {mode === 'question' && (
              <FollowUpQuestion
                questions={pendingFollowUps}
                onAnswerComplete={handleFollowUpAnswerComplete}
              />
            )}
          </div>
        </div>
      )}

      {/* TRẠNG THÁI 2: ĐÃ CHỌN TÌNH HUỐNG SƠ CỨU CỤ THỂ (selectedCase !== null) */}
      {hasSelectedCase && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9 animate__animated animate__fadeIn">
            {/* Top Navigation Bar: Nút "Nói về sự cố mắt khác" & Quay lại */}
            <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary fw-bold py-2 px-3 d-inline-flex align-items-center gap-2 shadow-sm"
                onClick={handleReset}
                style={{ minHeight: '44px', borderRadius: '12px' }}
              >
                <i className="bi bi-arrow-repeat fs-5 text-visi-primary"></i>
                <span>NÓI VỀ SỰ CỐ MẮT KHÁC</span>
              </button>

              {onBack && (
                <button
                  type="button"
                  className="btn btn-link text-decoration-none text-muted fw-bold d-inline-flex align-items-center gap-1"
                  onClick={onBack}
                >
                  <i className="bi bi-arrow-left"></i>
                  <span>Về trang chủ</span>
                </button>
              )}
            </div>

            {/* 1. Nếu có Red Flag nguy cấp */}
            {mode === 'redFlag' && (
              <RedFlagAlert
                redFlags={analysisResult.redFlags}
                onViewSafeSteps={handleViewSafeSteps}
                hotline={hotline}
              />
            )}

            {/* 2. Tiêu đề xác nhận tình huống (KẾT QUẢ SƠ CỨU) */}
            <SituationResult analysisResult={analysisResult} />

            {/* 3. Action Âm thanh: 🔊 NGHE HƯỚNG DẪN SƠ CỨU (Đưa lên đầu ngay dưới tiêu đề tình huống) */}
            {analysisResult.audioScript && (
              <div className="p-3 p-md-4 bg-white rounded-4 border shadow-sm mb-4">
                <AudioGuide
                  title="HƯỚNG DẪN SƠ CỨU"
                  conditionName={analysisResult.summary}
                  text={analysisResult.audioScript}
                  isEmergency={true}
                />
              </div>
            )}

            {/* 4. CÁC BƯỚC HÀNH ĐỘNG VÀNG: LÀM GÌ NGAY? & KHÔNG ĐƯỢC LÀM GÌ? */}
            <FirstAidSteps steps={analysisResult.steps} />

            {/* 5. KHI NÀO CẦN ĐI CẤP CỨU? (Báo động đỏ & Hotline) */}
            <WarningSigns warningSigns={analysisResult.warningSigns} hotline={hotline} />

            {/* 6. Video hướng dẫn sơ cứu (YouTube Embed) */}
            <VideoGuide video={analysisResult.video} />

            {/* 7. Nút quay lại trạng thái chọn tình huống ở chân trang */}
            <div className="mt-4 pt-3 border-top text-center">
              <button
                type="button"
                className="btn btn-outline-primary fw-bold px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 shadow-sm"
                onClick={handleReset}
                style={{ minHeight: '48px', borderRadius: '12px', fontSize: '1rem' }}
              >
                <i className="bi bi-arrow-repeat fs-5"></i>
                <span>NÓI VỀ SỰ CỐ MẮT KHÁC</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
