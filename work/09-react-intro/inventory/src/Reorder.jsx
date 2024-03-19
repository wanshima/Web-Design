import React from 'react';

function Reorder({ onReorder }) {
  return (
    <div className="fade-in">
      <button onClick={onReorder}>Reorder</button>
    </div>
  );

}

export default Reorder;