import React from 'react';
import SeverityBadge from '../SeverityBadge';

/**
 * SituationResult Component (Mục 5, 9, 18)
 * - Hiển thị tên tình huống đã nhận diện
 * - Mức độ cảnh báo (Severity Badge chuẩn)
 * - Tỷ lệ tự tin phân loại hệ thống (confidence)
 * - Tuyên bố miễn trừ trách nhiệm y tế
 */
export default function SituationResult({ analysisResult }) {
  if (!analysisResult) return null;

  const {
    summary,
    subtitle,
    severity = 'warning',
    severityLabel,
    confidence = 0.9
  } = analysisResult;

  const confidencePercent = Math.round(confidence * 100);

  return (
    <div className="ai-situation-result mb-4 p-3 p-md-4 bg-white rounded-4 border shadow-sm">
      {/* 1. Header trạng thái nhận diện triệu chứng */}
      <div className="d-flex align-items-center justify-content-between mb-2 flex-wrap gap-2">
        <span className="badge bg-success-subtle text-success border border-success-subtle px-3 py-2 fw-bold d-inline-flex align-items-center gap-2">
          <i className="bi bi-info-circle-fill"></i>
          <span>THÔNG TIN THAM KHẢO BAN ĐẦU</span>
        </span>

        {/* Chỉ số confidence của hệ thống (Mục 9) */}
        <span className="badge bg-light text-muted border px-2 py-1 small" title="Độ tin cậy phân loại của thuật toán khớp từ khóa">
          Độ khớp từ khóa: {confidencePercent}%
        </span>
      </div>

      {/* 2. Tên tình huống */}
      <h2 className="h3 fw-heavy text-dark mb-2">
        {summary}
      </h2>

      {subtitle && (
        <p className="text-muted fs-6 mb-3">
          {subtitle}
        </p>
      )}

      {/* 3. Severity Badge */}
      <div className="mb-3">
        <SeverityBadge
          severity={severity}
          customText={severityLabel}
        />
      </div>

      {/* 4. Disclaimer y tế bắt buộc (Mục 12, 18) */}
      <div className="p-3 bg-light rounded-3 border" style={{ fontSize: '0.85rem', color: '#555' }}>
        <i className="bi bi-info-circle-fill text-visi-primary me-2"></i>
        <span>
          <strong>Lưu ý:</strong> {severity === 'critical'
            ? 'Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế khẩn cấp.'
            : (severity === 'high' || severity === 'emergency' || severity === 'medium')
            ? 'Đây là hướng dẫn sơ cứu ban đầu. Tình huống này cần được đánh giá y tế sớm.'
            : 'Thông tin này nhằm mục đích giáo dục và không thay thế chẩn đoán hoặc tư vấn của bác sĩ.'}
        </span>
      </div>
    </div>
  );
}
