import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import KnowledgeCard from '../components/KnowledgeCard';
import AudioGuide from '../components/AudioGuide';
import { eyeDiseases } from '../data/knowledgeData';

export default function KnowledgePage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="knowledge-page py-4 py-md-5 section-white animate__animated animate__fadeIn">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-4 pb-2 max-w-md mx-auto">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 bg-light border rounded-pill mb-2">
            <i className="bi bi-book-half" style={{ color: 'var(--visi-primary)' }}></i>
            <span className="small fw-bold" style={{ color: 'var(--visi-primary-dark)' }}>
              CẨM NANG Y KHOA VISI MEDICAL GROUP
            </span>
          </div>
          <h1 className="h1 fw-heavy mb-2">
            KIẾN THỨC SỨC KHỎE MẮT
          </h1>
          <p className="text-muted fs-6 mb-0">
            Tổng hợp các bệnh lý mắt phổ biến, phương pháp phòng ngừa và lời khuyên từ bác sĩ nhãn khoa.
          </p>
        </div>

        {/* Lưới các thẻ kiến thức: col-12 col-sm-6 col-lg-4 */}
        <div className="row g-3 g-md-4">
          {eyeDiseases.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-lg-4">
              <KnowledgeCard
                item={item}
                onSelect={(clicked) => setSelectedArticle(clicked)}
              />
            </div>
          ))}
        </div>

        {/* Modal chi tiết bài viết */}
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
                  <i className="bi bi-journal-text"></i>
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
                    <span
                      className="badge mb-2 fs-6 px-3 py-1"
                      style={{ backgroundColor: 'var(--visi-primary)', color: '#FFFFFF' }}
                    >
                      Chuyên mục: {selectedArticle.category}
                    </span>
                    <p className="fs-5 fw-bold text-dark mb-2">
                      {selectedArticle.summary}
                    </p>
                  </div>
                </div>

                <AudioGuide
                  title={`Nghe tóm tắt: ${selectedArticle.title}`}
                  text={selectedArticle.audioScript}
                />

                <div className="p-3 rounded-3 mt-3" style={{ backgroundColor: 'var(--visi-background-soft)', border: '1.5px solid var(--visi-border)' }}>
                  <h4 className="h6 fw-bold mb-2 text-uppercase" style={{ color: 'var(--visi-primary-dark)' }}>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    Lời khuyên từ bác sĩ nhãn khoa VISI:
                  </h4>
                  <ul className="mb-0 fs-6">
                    {selectedArticle.keyPoints.map((point, index) => (
                      <li key={index} className="mb-2 fw-semibold text-secondary">
                        {point}
                      </li>
                    ))}
                  </ul>
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
