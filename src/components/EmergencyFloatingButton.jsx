import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function EmergencyFloatingButton({ hotline = "0916973161" }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Nút gọi khẩn cấp cố định chân màn hình (Section 13) */}
      <div className="emergency-floating-bar-mobile" aria-label="Gọi hỗ trợ khẩn cấp y tế">
        <button
          type="button"
          className="emergency-floating-action-btn"
          onClick={() => setShowModal(true)}
          aria-label="Gọi hỗ trợ khẩn cấp"
        >
          <span style={{ fontSize: '24px' }} aria-hidden="true">☎</span>
          <span>GỌI HỖ TRỢ KHẨN CẤP</span>
        </button>
      </div>

      {/* Modal xác nhận cuộc gọi */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        backdrop="static"
        keyboard={true}
        aria-labelledby="emergency-hotline-modal-title"
      >
        <Modal.Header closeButton className="bg-danger text-white border-0 py-3">
          <Modal.Title id="emergency-hotline-modal-title" className="d-flex align-items-center gap-2 fw-bold fs-4">
            <i className="bi bi-telephone-fill" aria-hidden="true"></i>
            <span>BẠN CÓ MUỐN GỌI HỖ TRỢ?</span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4 text-center bg-light">
          <div className="mb-3">
            <div
              className="d-inline-flex align-items-center justify-content-center bg-danger text-white rounded-circle mb-3 shadow"
              style={{ width: '76px', height: '76px', fontSize: '32px' }}
            >
              <i className="bi bi-hospital" aria-hidden="true"></i>
            </div>
            <h4 className="fw-heavy text-dark mb-1">
              Đường dây nóng cấp cứu ReMiCare - KHANGEYE
            </h4>
            <p className="text-danger fw-bold fs-2 mb-2 font-monospace">
              0916 973 161
            </p>
            <p className="text-muted fs-6 mb-0">
              Trực ban y tế 24/7 – Luôn sẵn sàng hướng dẫn sơ cứu chấn thương mắt tức thì.
            </p>
          </div>

          <div className="d-grid gap-3 pt-2">
            <a
              href={`tel:${hotline}`}
              className="btn btn-danger btn-lg py-3 fw-bold fs-4 d-flex align-items-center justify-content-center gap-2 shadow"
              onClick={() => setShowModal(false)}
            >
              <i className="bi bi-telephone-outbound-fill" aria-hidden="true"></i>
              <span>☎ GỌI NGAY: {hotline}</span>
            </a>

            <button
              type="button"
              className="btn btn-outline-secondary btn-lg py-3 fw-bold fs-5"
              onClick={() => setShowModal(false)}
            >
              ✕ HỦY BỎ
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
