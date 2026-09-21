import React, { useState, useMemo } from 'react';
import Modal from 'react-bootstrap/Modal';
import KnowledgeCard from '../components/KnowledgeCard';
import AudioGuide from '../components/AudioGuide';
import SeverityBadge from '../components/SeverityBadge';
import { eyeDiseases } from '../data/knowledgeData';

export default function KnowledgePage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all'); // 'all' | 'disease_info' | 'emergency'
  const [searchQuery, setSearchQuery] = useState('');

  // Lọc và tìm kiếm theo title, audio_id, description, keywords (Mục 13)
  const filteredList = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return eyeDiseases.filter((item) => {
      // 1. Lọc theo category
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // 2. Lọc theo từ khóa tìm kiếm
      if (!query) return true;

      const titleMatch = item.title && item.title.toLowerCase().includes(query);
      const idMatch = item.audio_id && item.audio_id.toLowerCase().includes(query);
      const summaryMatch = item.summary && item.summary.toLowerCase().includes(query);
      const descMatch = item.description && item.description.toLowerCase().includes(query);
      const keywordMatch = item.keywords && item.keywords.some((k) => k.toLowerCase().includes(query));
      const actionMatch = item.action && item.action.toLowerCase().includes(query);

      return titleMatch || idMatch || summaryMatch || descMatch || keywordMatch || actionMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="knowledge-page py-4 py-md-5 section-white animate__animated animate__fadeIn">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4 pb-2 max-w-md mx-auto">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill mb-2">
            <i className="bi bi-book-half" style={{ color: 'var(--visi-primary)' }}></i>
            <span className="small fw-bold" style={{ color: 'var(--visi-primary-dark)' }}>
              CẨM NANG Y KHOA KHANGEYE
            </span>
          </div>
          <h1 className="h1 fw-heavy mb-2">
            HƯỚNG DẪN Y KHOA & CẤP CỨU MẮT
          </h1>
          <p className="text-muted fs-6 mb-0">
            Tổng hợp kịch bản âm thanh chuẩn hóa: 12 bệnh lý mắt (DIS-01 → DIS-10) và 6 tình huống cấp cứu (EM-01 → EM-06).
          </p>
        </div>

        {/* Thanh tìm kiếm & Bộ lọc chuẩn Category (Mục 13) */}
        <div className="bg-light p-3 p-md-4 rounded-4 border mb-4">
          <div className="row g-3 align-items-center">
            {/* Input Search */}
            <div className="col-12 col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white border-end-0">
                  <i className="bi bi-search text-muted"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder="Tìm theo tên, mã (DIS-01, EM-03), từ khóa (hóa chất, bụi, cận thị...)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ minHeight: '44px' }}
                  aria-label="Tìm kiếm kịch bản âm thanh y khoa"
                />
                {searchQuery && (
                  <button
                    className="btn btn-outline-secondary bg-white border-start-0"
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Xóa tìm kiếm"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="col-12 col-md-6">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                <button
                  type="button"
                  className={`btn btn-sm px-3 py-2 fw-bold ${
                    activeCategory === 'all' ? 'btn-visi-primary' : 'btn-outline-secondary bg-white'
                  }`}
                  onClick={() => setActiveCategory('all')}
                  style={{ minHeight: '40px', borderRadius: '20px' }}
                >
                  Tất cả ({eyeDiseases.length})
                </button>
                <button
                  type="button"
                  className={`btn btn-sm px-3 py-2 fw-bold ${
                    activeCategory === 'disease_info' ? 'btn-visi-primary' : 'btn-outline-secondary bg-white'
                  }`}
                  onClick={() => setActiveCategory('disease_info')}
                  style={{ minHeight: '40px', borderRadius: '20px' }}
                >
                  Bệnh lý mắt (12)
                </button>
                <button
                  type="button"
                  className={`btn btn-sm px-3 py-2 fw-bold ${
                    activeCategory === 'emergency' ? 'btn-emergency-red' : 'btn-outline-secondary bg-white'
                  }`}
                  onClick={() => setActiveCategory('emergency')}
                  style={{ minHeight: '40px', borderRadius: '20px' }}
                >
                  Sơ cứu cấp cứu (6)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thông báo nếu không tìm thấy kết quả */}
        {filteredList.length === 0 && (
          <div className="text-center py-5 bg-light rounded-4 border">
            <i className="bi bi-search fs-1 text-muted d-block mb-2"></i>
            <h4 className="fw-bold text-dark mb-1">Không tìm thấy nội dung phù hợp</h4>
            <p className="text-muted small mb-3">
              Thử tìm bằng các từ khóa như "hóa chất", "bụi", "cận thị", "glôcôm", "tia hàn" hoặc đổi bộ lọc.
            </p>
            <button
              type="button"
              className="btn btn-visi-outline btn-sm fw-bold px-3 py-2"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Xem tất cả nội dung
            </button>
          </div>
        )}

        {/* Lưới các thẻ kiến thức: col-12 col-sm-6 col-lg-4 */}
        <div className="row g-3 g-md-4">
          {filteredList.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <KnowledgeCard
                item={item}
                onSelect={(clicked) => setSelectedArticle(clicked)}
              />
            </div>
          ))}
        </div>

        {/* Modal chi tiết bài viết / kịch bản sơ cứu */}
        <Modal
          show={!!selectedArticle}
          onHide={() => setSelectedArticle(null)}
          centered
          size="lg"
          aria-labelledby="knowledge-detail-title"
        >
          {selectedArticle && (
            <>
              <Modal.Header closeButton className="py-3 bg-light border-bottom">
                <Modal.Title id="knowledge-detail-title" className="d-flex align-items-center gap-2 fw-heavy fs-4" style={{ color: 'var(--visi-primary-dark)' }}>
                  <span className="badge bg-dark text-white font-monospace fs-6">
                    {selectedArticle.audio_id}
                  </span>
                  <span>{selectedArticle.title}</span>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body className="p-4">
                <div className="row g-3 align-items-center mb-3">
                  <div className="col-12 col-sm-5 text-center">
                    <img
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="img-fluid rounded-3 border"
                      style={{ maxHeight: '180px' }}
                    />
                  </div>
                  <div className="col-12 col-sm-7">
                    <div className="d-flex flex-wrap gap-2 mb-2">
                      <span
                        className="badge fs-6 px-3 py-1"
                        style={{
                          backgroundColor: selectedArticle.category === 'emergency' ? 'var(--visi-emergency)' : 'var(--visi-primary)',
                          color: '#FFFFFF'
                        }}
                      >
                        {selectedArticle.category === 'emergency' ? 'Cấp cứu mắt' : 'Bệnh lý mắt'}
                      </span>
                      {selectedArticle.category === 'emergency' && (
                        <SeverityBadge
                          severity={selectedArticle.priority}
                          customText={selectedArticle.priorityLabel}
                        />
                      )}
                    </div>
                    <p className="fs-5 fw-bold text-dark mb-1">
                      {selectedArticle.summary}
                    </p>
                  </div>
                </div>

                {/* Audio Guide Component tích hợp */}
                <AudioGuide
                  title={selectedArticle.category === 'emergency' ? `Cấp cứu: ${selectedArticle.title}` : `Hướng dẫn: ${selectedArticle.title}`}
                  text={selectedArticle.audioScript}
                  isEmergency={selectedArticle.category === 'emergency'}
                />

                {/* CẤU TRÚC CHI TIẾT BỆNH LÝ (GROUP A) */}
                {selectedArticle.category === 'disease_info' && (
                  <div className="p-3 rounded-3 mt-3" style={{ backgroundColor: 'var(--visi-background-soft)', border: '1.5px solid var(--visi-border)' }}>
                    <h4 className="h6 fw-bold mb-2 text-uppercase" style={{ color: 'var(--visi-primary-dark)' }}>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      Lời khuyên từ bác sĩ nhãn khoa:
                    </h4>
                    {selectedArticle.keyPoints && (
                      <ul className="mb-0 fs-6">
                        {selectedArticle.keyPoints.map((point, index) => (
                          <li key={index} className="mb-2 fw-semibold text-secondary">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {/* CẤU TRÚC CHI TIẾT CẤP CỨU (GROUP B - Mục 8) */}
                {selectedArticle.category === 'emergency' && (
                  <div className="mt-3">
                    {selectedArticle.action && (
                      <div className="p-3 mb-2 rounded-3 bg-success-subtle border border-success-subtle">
                        <h5 className="h6 fw-bold text-success mb-1">
                          ⚡ LÀM GÌ NGAY?
                        </h5>
                        <p className="mb-0 text-dark fw-semibold">{selectedArticle.action}</p>
                      </div>
                    )}
                    {selectedArticle.warning && (
                      <div className="p-3 mb-2 rounded-3 bg-danger-subtle border border-danger-subtle">
                        <h5 className="h6 fw-bold text-danger mb-1">
                          🚫 KHÔNG ĐƯỢC LÀM GÌ?
                        </h5>
                        <p className="mb-0 text-dark fw-semibold">{selectedArticle.warning}</p>
                      </div>
                    )}
                    {selectedArticle.redFlags && (
                      <div className="p-3 rounded-3 bg-warning-subtle border border-warning-subtle">
                        <h5 className="h6 fw-bold text-dark mb-1">
                          🏥 KHI NÀO CẦN ĐI CẤP CỨU?
                        </h5>
                        <p className="mb-0 text-dark fw-semibold">{selectedArticle.redFlags}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Disclaimer chuẩn y tế (Mục 12) */}
                <div className="mt-3 p-3 bg-light rounded-3 border text-muted small fst-italic">
                  <i className="bi bi-info-circle-fill text-visi-primary me-2"></i>
                  <strong>Lưu ý:</strong> {selectedArticle.disclaimer}
                </div>
              </Modal.Body>

              <Modal.Footer className="border-top-0 py-2">
                <button
                  type="button"
                  className="btn btn-visi-primary w-100 py-2 fw-bold fs-5"
                  onClick={() => setSelectedArticle(null)}
                >
                  ĐÃ HIỂU, ĐÓNG LẠI
                </button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>
    </div>
  );
}
