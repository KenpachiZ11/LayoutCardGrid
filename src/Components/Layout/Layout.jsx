import React from 'react';

export const Layout = ({ children, columns }) => {
  const gridStyle = { 
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '20px'
  };
  return (
    <div style={gridStyle}>
      { children }
    </div>
  )
}
