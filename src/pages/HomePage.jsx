import React from 'react';
import HeroSection from '../components/HeroSection';
import EyeProblemCard from '../components/EyeProblemCard';
import EmergencyBanner from '../components/EmergencyBanner';
import KnowledgeCard from '../components/KnowledgeCard';
import { eyeProblems } from '../data/eyeProblems';
import { eyeDiseases } from '../data/knowledgeData';

export default function HomePage({ onSelectProblem, onNavigate, onOpenVoiceAssistant }) {
  return (
    <div className="home-page animate__animated animate__fadeIn">
      {/* 1. HERO SECTION (White) */}
      <HeroSection
        onCheckProblems={() => {
          const el = document.getElementById('problem-cards-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenVoiceAssistant={onOpenVoiceAssistant}
      />

      {/* 2. VISUAL-FIRST PROBLEM CARDS SECTION (Mục 4: 1 card/row on <576px, 2 on 576-991px, 3 on 992px+) */}
      <section className="py-4 py-md-5 section-soft-teal" id="problem-cards-section">
        <div className="container">
          {/* Tiêu đề section */}
          <div className="text-center mb-4 pb-2 max-w-md mx-auto">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-white border border-secondary border-opacity-25 rounded-pill mb-2">
              <i className="bi bi-grid-fill" style={{ color: 'var(--visi-primary)' }}></i>
              <span className="small fw-bold" style={{ color: 'var(--visi-primary-dark)' }}>
                DẤU HIỆU NHẬN BIẾT MẮT
              </span>
            </div>
            <h2 className="h2 fw-heavy mb-2">
              CHỌN TÌNH TRẠNG GIỐNG VỚI BẠN
            </h2>
            <p className="mb-0 text-muted fs-6">
              Hình ảnh lớn, chạm 1 lần để xem ngay các bước xử lý cấp cứu hoặc chăm sóc.
            </p>
          </div>

          {/* Grid responsive theo chuẩn mục 4: col-12 col-sm-6 col-lg-4 */}
          <div className="row g-3 g-md-4">
            {eyeProblems.map((problem) => (
              <div key={problem.id} className="col-12 col-sm-6 col-lg-4">
                <EyeProblemCard
                  problem={problem}
                  onClick={() => onSelectProblem(problem.caseId)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EMERGENCY SECTION BANNER */}
      <EmergencyBanner
        onNavigateToFirstAid={() => onNavigate('first-aid')}
      />

      {/* 4. KNOWLEDGE SECTION */}
      <section className="py-4 py-md-5 section-white border-top">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between mb-4 pb-2 gap-2">
            <div>
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill mb-2">
                <i className="bi bi-journal-medical text-info"></i>
                <span className="small fw-bold" style={{ color: 'var(--visi-primary-dark)' }}>
                  CHUYÊN MỤC Y KHOA THƯỜNG THỨC
                </span>
              </div>
              <h2 className="h2 fw-heavy mb-1">
                KIẾN THỨC SỨC KHỎE MẮT
              </h2>
              <p className="mb-0 text-muted fs-6">
                Thông tin nhãn khoa ngắn gọn, dễ hiểu, tích hợp giọng đọc tự động.
              </p>
            </div>

            <button
              type="button"
              className="btn btn-visi-outline fw-bold"
              onClick={() => onNavigate('knowledge')}
            >
              Xem tất cả bệnh mắt <i className="bi bi-arrow-right ms-1"></i>
            </button>
          </div>

          {/* Cards theo chuẩn col-12 col-sm-6 col-lg-4 */}
          <div className="row g-3 g-md-4">
            {eyeDiseases.slice(0, 3).map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-lg-4">
                <KnowledgeCard
                  item={item}
                  onSelect={() => onNavigate('knowledge')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
