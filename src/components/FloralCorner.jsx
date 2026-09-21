import React from 'react';

const FloralCorner = ({ position = 'top-right', className = '', opacity = 0.5 }) => {
  const isTop = position.includes('top');
  const isRight = position.includes('right');
  const isLeft = position.includes('left');
  const isBottom = position.includes('bottom');

  let transform = '';
  if (isTop && isLeft) transform = 'scale(-1, 1)'; // Flip horizontally
  if (isBottom && isRight) transform = 'scale(1, -1)'; // Flip vertically
  if (isBottom && isLeft) transform = 'scale(-1, -1)'; // Flip both

  const getPositionClasses = () => {
    switch (position) {
      case 'top-right': return 'top-0 right-0';
      case 'top-left': return 'top-0 left-0';
      case 'bottom-right': return 'bottom-0 right-0';
      case 'bottom-left': return 'bottom-0 left-0';
      default: return 'top-0 right-0';
    }
  };

  return (
    <div
      className={`absolute w-32 h-32 sm:w-40 sm:h-40 pointer-events-none transition-all duration-700 ${getPositionClasses()} ${className}`}
      style={{ opacity, transform }}
    >
      <img
        src="/floral-corner.png"
        alt=""
        className="w-full h-full object-contain mix-blend-multiply"
        style={{ filter: 'contrast(1.2) brightness(1.1) sepia(0.3) hue-rotate(-10deg) drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
      />
    </div>
  );
};

export default FloralCorner;
