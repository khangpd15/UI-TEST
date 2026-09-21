import React from 'react';
import { eyeIllustrations } from '../data/eyeImages';

export default function HeroSection({ onCheckProblems, onOpenVoiceAssistant }) {
  return (
    <section className="hero-section section-white">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          {/* CỘT TRÁI (LEFT) */}
          <div className="col-12 col-lg-7 text-center text-lg-start">
            {/* Tagline hệ sinh thái KHANGEYE */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border border-secondary border-opacity-25 rounded-pill mb-3">
              <span style={{ color: 'var(--visi-primary)' }}>✦</span>
              <span className="small fw-bold" style={{ color: 'var(--visi-primary-dark)' }}>
                HỆ SINH THÁI Y KHOA KHANGEYE • "MỖI ÁNH MẮT, MỘT NIỀM TIN"
              </span>
            </div>

            {/* Heading chính */}
            <h1 className="display-6 fw-heavy text-dark mb-3">
              MẮT BẠN ĐANG GẶP VẤN ĐỀ GÌ?
            </h1>

            {/* Subheading tối đa 1-2 dòng, không đoạn văn dài */}
            <p className="lead fw-medium mb-4" style={{ color: 'var(--visi-text-muted)', fontSize: '1.2rem' }}>
              Chọn hình ảnh giống với tình trạng hiện tại để nhận chỉ dẫn sơ cứu chuẩn y khoa tức thì.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3">
              <button
                type="button"
                className="btn btn-visi-primary btn-lg px-4 py-3 fw-bold shadow-sm"
                onClick={onCheckProblems}
              >
                <i className="bi bi-shield-check fs-5"></i>
                <span>XEM HƯỚNG DẪN</span>
              </button>

              <button
                type="button"
                className="btn btn-visi-outline btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
                onClick={onOpenVoiceAssistant}
              >
                <i className="bi bi-mic-fill fs-5"></i>
                <span>NÓI VỚI TRỢ LÝ AI</span>
              </button>
            </div>
          </div>

          {/* CỘT PHẢI (RIGHT): Hình ảnh y tế / bác sĩ chăm sóc mắt */}
          <div className="col-12 col-lg-5">
            <div className="hero-caregiver-box">
              <img
                src={eyeIllustrations.heroCaregiver}
                alt="Minh họa bác sĩ nhãn khoa KHANGEYE kiểm tra mắt"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
