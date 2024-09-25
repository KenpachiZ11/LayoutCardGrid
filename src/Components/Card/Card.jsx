import React from 'react'

export const Card = ({ aspectRatio }) => {
  const [widthRatio, heightRatio] = aspectRatio.split('x').map(Number);

  const height = (100 / widthRatio) * heightRatio;

  const cardStyle = {
    width: '100%',
    backgroundColor: 'grey',
    height: `${height}px`,
    boxSizing: 'border-box',
  }

  return (
    <div style={cardStyle}>
      <h1>Card</h1>
    </div>
  )
}
