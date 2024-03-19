import React from 'react';

function Reorder({ onReorder }) {
  return <button className="fade-in" onClick={onReorder}>Reorder</button>;
}

export default Reorder;