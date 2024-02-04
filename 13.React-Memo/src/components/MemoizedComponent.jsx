// MemoizedComponent.js
import React from 'react';
import SimpleComponent from './MyComposant';

// React.memo est une fonction qui peut être utilisée pour optimiser les performances des composants fonctionnels React en les memoïzant. La memoïsation est une technique qui consiste à mémoriser (ou mettre en cache) les résultats de certaines opérations coûteuses, afin d'éviter de les recalculer à chaque rendu, à moins que les entrées (props) du composant ne changent.
const MemoizedComponent = React.memo(SimpleComponent);
// Lorsqu'un composant est enveloppé dans React.memo, il se souvient de la sortie renvoyée pour un ensemble particulier de props, et si les props n'ont pas changé entre deux rendus successifs, le composant n'est pas rendu à nouveau, et la sortie memoïzée est renvoyée directement.

export default MemoizedComponent;
