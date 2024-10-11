import React, { useState } from 'react';
import Plante from './Plante'; 

const Panier = () => {
  const [panierOuvert, setPanierOuvert] = useState(false);
  const [produits, setProduits] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);

  const ouvrirPanier = () => {
    setPanierOuvert(!panierOuvert);
  };

  const ajouterProduit = (nom, prix) => {
    const nouveauProduit = { nom, prix }; 
    setProduits([...produits, nouveauProduit]);
    setPrixTotal(prixTotal + prix);
  };

  const viderPanier = () => {
    setProduits([]);
    setPrixTotal(0);
  };

  return (
    <div >
      <button onClick={ouvrirPanier} className='ouvrir'>
        {panierOuvert ? 'Fermer le panier' : 'Ouvrir le panier'}
      </button>
      <div className='panier'>
      {panierOuvert && (
        <div className='monpanier'>
          {produits.length === 0 ? (
            <p>Votre panier est vide</p>
          ) : (
            <div>
              <h2>Panier :</h2>
              <ul>
                {produits.map((produit, index) => (
                  <li key={index}>
                    {produit.nom} - {produit.prix}€
                  </li>
                ))}
              </ul>
              <h3>Prix total : {prixTotal}€</h3>
            </div>
          )}

          <button onClick={viderPanier} className='vider'> Vider le panier</button>
        </div>
      )}
      </div>
    

      <Plante ajouterProduit={ajouterProduit} /> 
    </div>
  );
};

export default Panier;
