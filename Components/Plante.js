import React from 'react';

const Plante = ({ ajouterProduit }) => {
  const plantes = [
    { src: 'Plante2.jpg', nom: 'Monstera', prix: 15 },
    { src: 'Plante1.jpg', nom: 'Ficus Lyrata', prix: 16 },
    { src: 'Plante9.jpg', nom: 'Pothos Argenté', prix: 9 },
    { src: 'Plante3.jpg', nom: 'Calathea', prix: 20 },
    { src: 'Plante7.jpg', nom: 'Olivier', prix: 25 },
    { src: 'Plante4.jpg', nom: 'Cactus', prix: 6 },
    { src: 'Plante6.jpg', nom: 'Basilique', prix: 5 },
    { src: 'Plante8.jpg', nom: 'Succulente', prix: 8 },
    { src: 'Plante5.jpg', nom: 'Menthe', prix: 4 },
  ];

  return (
    <div>
      <div className="my-image">
        {plantes.map((plante, index) => (
          <div key={index}>
            <img src={`/img/${plante.src}`} className="to-image" />
            <h3>{plante.nom}</h3>

            <div className="prix">
              <div className="myPrix">
                {plante.prix}€
              </div>
            </div>

            <div className="stars">
              <div className="myEtoile">
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="etoile">
                <span>★</span>
                <span>★</span>
              </div>
            </div>

            <button onClick={() => ajouterProduit(plante.nom, plante.prix)}>Ajouter</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plante;
