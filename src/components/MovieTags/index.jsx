import React from 'react';

export function MovieTags({ tags }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {tags.map((tag) => (
        <span key={tag} style={{borderRadius: '8px', background: '#312E38', fontSize: '12px', fontWeight: '400', padding: '5px 16px'}}>
          {tag}
        </span>
      ))}
    </div>
  );
};
