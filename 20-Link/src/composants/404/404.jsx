import React from 'react'
import './404.css'

// on créer le bouton pour revenir 

import {useNavigate} from 'react-router-dom'

export default function P404() {

const navigation = useNavigate()

const retourHome = ()=> navigation('/')

  return (
    <div className="p404">404
    <button onClick={retourHome}>Retour à l'accueil</button></div>
  )
}
