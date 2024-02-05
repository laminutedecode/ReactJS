import React, { useState, lazy, Suspense } from 'react';

// Utilisez React.lazy pour charger dynamiquement ComposantB
const ComposantB = lazy(() => import('./ComposantB'));

export default function ComposantA() {
  const [showComposantB, setShowComposantB] = useState(false);

  const handleClick = () => {
    // Charger le ComposantB seulement lorsque l'utilisateur clique sur le bouton
    setShowComposantB(true);
  };

  return (
    <div>
      <h1>Composant A</h1>
      <button onClick={handleClick}>Charger Composant B</button>
      {/* Utilisez Suspense pour gérer le chargement asynchrone */}
      <Suspense fallback={<div>Chargement...</div>}>
        {showComposantB && <ComposantB />}
      </Suspense>
    </div>

  );
}

// Dans cet exemple, le composant ComposantA a un bouton qui, une fois cliqué, déclenche le chargement du ComposantB. Le chargement du ComposantB se fait de manière asynchrone grâce à la fonction import(). Le state showComposantB est utilisé pour conditionnellement afficher le ComposantB une fois qu'il est chargé.lazy permet de charger dynamiquement le composant ComposantB. De plus, le composant Suspense est utilisé pour gérer le chargement asynchrone et afficher un indicateur de chargement (fallback) pendant le chargement du composant ComposantB. 