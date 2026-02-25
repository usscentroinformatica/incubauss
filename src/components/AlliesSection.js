import React from 'react';
// import aliado1 from '../assets/img/aliado1.png'; // Para cuando tengas los logos

const AlliesSection = () => {
  // Array vacío por ahora, pero puedes llenarlo después con los nombres de los aliados
  const allies = []; 

  return (
    <section className="allies">
      <h2>Nuestros aliados</h2>
      <div className="allies-container">
        {allies.length > 0 ? (
          allies.map((ally, index) => <span key={index}>{ally}</span>)
        ) : (
          <p>Próximamente...</p> // Mensaje temporal mientras consigues los logos
        )}
      </div>
    </section>
  );
};

export default AlliesSection;