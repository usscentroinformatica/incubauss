import React from 'react';

const VerticalLines = () => {
  const lines = ['Salud', 'Tecnología', 'Empresarial', 'Social', 'Educación'];
  
  return (
    <section className="vertical-lines">
      <h2>Líneas verticales de INCUBA</h2>
      <div className="lines-container">
        {lines.map((line, index) => (
          <div key={index} className="line-item">
            <h3>{line}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VerticalLines;