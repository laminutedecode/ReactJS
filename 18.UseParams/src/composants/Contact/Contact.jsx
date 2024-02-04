import React from 'react'

// importer la methode

import {useLocation} from 'react-router-dom'

export default function Contact() {

const location = useLocation()

console.log(location);

// cela nous retourne un objet avec des infos sur notre page

//  dans cette objet vous avez:
//  le hash = pour l'utilisations des ancres
//  key = la clé des route. chaque route possède une clé unique
// pathname = chemin d'accès
// search = si dans votre liens il ya un ? qui appele des requette comme une API
// state = state données a qui jaurais pu passer un objets un tableaux etc...

  return (
    <div>
      <h1>PAGE CONTACT</h1>
    </div>
  );
}
