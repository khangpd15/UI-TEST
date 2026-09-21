import React from 'react';

/**
 * RemiPenguin SVG Mascot Component
 * Chú chim cánh cụt Remi - Bạn đồng hành chăm sóc mắt REMiCare
 * Phong cách 2D vector, dễ thương, chuẩn y tế, tông màu xanh ngọc teal/navy & trắng
 */
export default function RemiPenguin({
  size = 72,
  animation = 'idle', // 'idle' | 'waddle' | 'jump' | 'tilt' | 'listening' | 'waving'
  className = '',
  ariaHidden = true
}) {
  return (
    <div
      className={`remi-penguin-wrapper remi-anim-${animation} ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-hidden={ariaHidden}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="remi-penguin-svg"
      >
        <defs>
          {/* Bóng đổ nhẹ dưới chân */}
          <radialGradient id="remiShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0B7F86" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0B7F86" stopOpacity="0" />
          </radialGradient>

          {/* Gradient thân chim cánh cụt: Teal - Navy y tế */}
          <linearGradient id="remiBodyGrad" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0E7490" />
            <stop offset="50%" stopColor="#0B7F86" />
            <stop offset="100%" stopColor="#155E75" />
          </linearGradient>

          {/* Gradient bụng trắng kem */}
          <linearGradient id="remiBellyGrad" x1="50" y1="35" x2="50" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0FDFA" />
          </linearGradient>

          {/* Gradient mỏ và chân cam tươi */}
          <linearGradient id="remiBeakGrad" x1="45" y1="48" x2="55" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* 1. Bóng đổ dưới đáy */}
        <ellipse cx="50" cy="92" rx="30" ry="6" fill="url(#remiShadow)" />

        {/* 2. Đôi chân nhỏ nhắn màu cam */}
        <g className="remi-feet">
          <ellipse cx="40" cy="88" rx="8" ry="4.5" fill="url(#remiBeakGrad)" className="remi-foot-left" />
          <ellipse cx="60" cy="88" rx="8" ry="4.5" fill="url(#remiBeakGrad)" className="remi-foot-right" />
        </g>

        {/* 3. Thân hình tròn đầy đặn đáng yêu */}
        <g className="remi-body-group">
          {/* Cánh trái */}
          <path
            className="remi-wing-left"
            d="M 24 50 C 14 55 12 68 20 74 C 25 76 28 68 28 60 Z"
            fill="#0E7490"
          />

          {/* Cánh phải */}
          <path
            className="remi-wing-right"
            d="M 76 50 C 86 55 88 68 80 74 C 75 76 72 68 72 60 Z"
            fill="#0E7490"
          />

          {/* Thân chính */}
          <path
            d="M 50 16 C 30 16 22 34 22 55 C 22 74 32 87 50 87 C 68 87 78 74 78 55 C 78 34 70 16 50 16 Z"
            fill="url(#remiBodyGrad)"
          />

          {/* Chỏm tóc nhỏ trên đỉnh đầu đặc trưng REMiCare */}
          <path
            d="M 50 16 C 47 10 44 9 43 7 C 47 8 50 11 52 14 C 54 10 57 8 59 7 C 57 10 54 12 52 16 Z"
            fill="#0E7490"
          />

          {/* 4. Vùng mặt và bụng trắng tròn sáng */}
          <path
            d="M 50 26 C 36 26 31 38 31 52 C 31 68 38 82 50 82 C 62 82 69 68 69 52 C 69 38 64 26 50 26 Z"
            fill="url(#remiBellyGrad)"
          />

          {/* 5. Đôi mắt to tròn long lanh thân thiện */}
          <g className="remi-eyes">
            {/* Mắt trái */}
            <circle cx="41" cy="45" r="5" fill="#0F172A" />
            <circle cx="39.5" cy="43.5" r="1.8" fill="#FFFFFF" />
            <circle cx="42.5" cy="46.5" r="0.8" fill="#FFFFFF" />

            {/* Mắt phải */}
            <circle cx="59" cy="45" r="5" fill="#0F172A" />
            <circle cx="57.5" cy="43.5" r="1.8" fill="#FFFFFF" />
            <circle cx="60.5" cy="46.5" r="0.8" fill="#FFFFFF" />
          </g>

          {/* 6. Má hồng phớt phớt nhẹ nhàng */}
          <ellipse cx="34" cy="51" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.45" />
          <ellipse cx="66" cy="51" rx="4.5" ry="2.8" fill="#FB7185" opacity="0.45" />

          {/* 7. Chiếc mỏ nhỏ nhắn xinh xắn */}
          <path
            d="M 45 49 C 47 48 53 48 55 49 C 56 52 52 56 50 56 C 48 56 44 52 45 49 Z"
            fill="url(#remiBeakGrad)"
          />

          {/* 8. Điểm nhấn huy hiệu y tế nhỏ xíu hình trái tim/chữ thập trên ngực */}
          <circle cx="50" cy="67" r="4.5" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1" />
          <path d="M 50 64.5 L 50 69.5 M 47.5 67 L 52.5 67" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
