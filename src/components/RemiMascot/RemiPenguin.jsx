import React from 'react';
import { REMI_IMAGES } from '../../data/mascotImages';

/**
 * RemiPenguin Mascot Component
 * Sử dụng bộ hình ảnh minh họa chim cánh cụt Remi chính thức (10 tư thế thiết kế)
 */
export default function RemiPenguin({
  size = 72,
  animation = 'idle', // 'idle' | 'waddle' | 'running' | 'walking' | 'jump' | 'tilt' | 'curious' | 'suggest' | 'waving' | 'peeking' | 'listening' | 'bye' | 'sleeping'
  className = '',
  ariaHidden = true,
  alt = 'Mascot chim cánh cụt Remi'
}) {
  // Chọn ảnh minh họa theo đúng tư thế tương ứng
  let imgSrc = REMI_IMAGES.curious;

  switch (animation) {
    case 'running':
    case 'waddle':
      imgSrc = REMI_IMAGES.running;
      break;
    case 'walking':
      imgSrc = REMI_IMAGES.walking;
      break;
    case 'jump':
    case 'jumping':
      imgSrc = REMI_IMAGES.jumping;
      break;
    case 'tilt':
    case 'curious':
      imgSrc = REMI_IMAGES.curious;
      break;
    case 'suggest':
      imgSrc = REMI_IMAGES.suggest;
      break;
    case 'waving':
      imgSrc = REMI_IMAGES.waving;
      break;
    case 'peeking':
    case 'chatPeeking':
    case 'chat':
      imgSrc = REMI_IMAGES.chatPeeking;
      break;
    case 'listening':
      imgSrc = REMI_IMAGES.listening;
      break;
    case 'bye':
      imgSrc = REMI_IMAGES.bye;
      break;
    case 'sleeping':
      imgSrc = REMI_IMAGES.sleeping;
      break;
    case 'idle':
    default:
      imgSrc = REMI_IMAGES.curious;
      break;
  }

  return (
    <div
      className={`remi-penguin-wrapper remi-anim-${animation} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
      aria-hidden={ariaHidden}
    >
      <img
        src={imgSrc}
        alt={alt}
        className="remi-penguin-img"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 10px rgba(7, 95, 102, 0.18))',
          pointerEvents: 'none',
          userSelect: 'none'
        }}
        draggable="false"
      />
    </div>
  );
}
