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

/**
 * AIAssistant Master Component (Mục 10, 12, 13, 14, 15)
 * Quản lý state machine:
 * "idle" -> "listening" -> "review" -> "processing" -> "question" -> "result" / "redFlag" -> "error"
 * Hỗ trợ:
 * - Desktop: 2 cột song song (Interaction bên trái, Result Panel bên phải)
 * - Mobile: Stacked thẳng đứng
 */
export default function AIAssistant({
  initialCaseId = null,
  onBack,
  hotline = "0395 151 151"
}) {
  const [mode, setMode] = useState('idle'); // idle | listening | review | processing | question | result | redFlag | error
  const [transcript, setTranscript] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [pendingFollowUps, setPendingFollowUps] = useState([]);
  const [followUpAnswers, setFollowUpAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  // Khởi tạo nếu có caseId truyền vào sẵn (ví dụ: 'EM-01', 'EM-03', 'chemical-splash')
  useEffect(() => {
    if (initialCaseId) {
      // Map caseId từ firstAid sang eyeCareCategory
      let categoryKey = 'FOREIGN_BODY_DUST';
      const idStr = (initialCaseId || '').toLowerCase();
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

      // Nếu cần hỏi thêm câu hỏi làm rõ (Section 6 - Flow 2)
      if (response.needsMoreQuestions && response.followUpQuestions && response.followUpQuestions.length > 0) {
        setPendingFollowUps(response.followUpQuestions);
        setMode('question');
        return;
      }

      // Nếu có Red Flag nguy hiểm (Section 4 - Flow 3)
      if (response.redFlags && response.redFlags.length > 0) {
        setMode('redFlag');
        return;
      }

      // Thành công bình thường (Section 5 - Flow 1)
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

  // Bắt đầu lại lượt tương tác mới
  const handleReset = () => {
    setMode('idle');
    setTranscript('');
    setAnalysisResult(null);
    setFollowUpAnswers({});
    setPendingFollowUps([]);
    setErrorMessage(null);
  };

  const hasResult = analysisResult && (mode === 'result' || mode === 'redFlag');

  return (
    <div className="ai-assistant-container py-3 py-md-4 animate__animated animate__fadeIn">
      {/* Nút quay lại nếu có */}
      {onBack && (
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

      {/* CẤU TRÚC GIAO DIỆN (Desktop 2 cột, Mobile 1 cột - Mục 12 & 13) */}
      <div className="row g-3 g-lg-4 align-items-start">
        {/* CỘT TRÁI (LEFT): TƯƠNG TÁC GIỌNG NÓI & CONVERSATION */}
        <div className={`col-12 ${hasResult ? 'col-lg-5' : 'col-lg-8 mx-auto'}`}>
          {/* 1. Bộ thu âm giọng nói trung tâm */}
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

          {/* Nút đặt câu hỏi mới khi đã có kết quả */}
          {hasResult && (
            <div className="mt-3 text-center">
              <button
                type="button"
                className="btn btn-outline-secondary w-100 fw-bold py-2 d-inline-flex align-items-center justify-content-center gap-2"
                onClick={handleReset}
                style={{ minHeight: '46px', borderRadius: '12px' }}
              >
                <i className="bi bi-arrow-repeat"></i>
                <span>NÓI VỀ SỰ CỐ MẮT KHÁC</span>
              </button>
            </div>
          )}
        </div>

        {/* CỘT PHẢI (RIGHT): KẾT QUẢ SƠ CỨU, VIDEO, GIỌNG ĐỌC, CÁC BƯỚC */}
        {hasResult && (
          <div className="col-12 col-lg-7 animate__animated animate__fadeIn">
            {/* 1. Nếu có Red Flag nguy cấp */}
            {mode === 'redFlag' && (
              <RedFlagAlert
                redFlags={analysisResult.redFlags}
                onViewSafeSteps={handleViewSafeSteps}
                hotline={hotline}
              />
            )}

            {/* 2. Tiêu đề xác nhận tình huống */}
            <SituationResult analysisResult={analysisResult} />

            {/* 3. Video hướng dẫn sơ cứu (YouTube Embed) */}
            <VideoGuide video={analysisResult.video} />

            {/* 4. Hướng dẫn bằng giọng đọc y tế tiếng Việt */}
            {analysisResult.audioScript && (
              <div className="p-3 bg-white rounded-4 border shadow-sm mb-4">
                <AudioGuide
                  title="HƯỚNG DẪN XỬ LÝ"
                  conditionName={analysisResult.summary}
                  text={analysisResult.audioScript}
                  isEmergency={analysisResult.severity === 'emergency' || analysisResult.severity === 'critical' || analysisResult.severity === 'high'}
                />
              </div>
            )}

            {/* 5. Các bước xử lý chuẩn y tế */}
            <FirstAidSteps steps={analysisResult.steps} />

            {/* 6. Khi nào cần đi khám */}
            <WarningSigns warningSigns={analysisResult.warningSigns} hotline={hotline} />
          </div>
        )}
      </div>
    </div>
  );
}
