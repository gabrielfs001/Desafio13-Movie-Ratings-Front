import React from 'react';

export function StarRating({ value, font }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {stars.map((star) => (
        <span key={star} style={{ color:'#FF859B', fontSize: font ? `${font}px` : '12px' }}>
          {star <= value ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};
