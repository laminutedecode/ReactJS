import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <Link
    // je peut maintenant lui passer du state
    state={"test de state"}
    to="/contact"
    // aller ensuite dans le fichier contact
    >Contact</Link>
    </div>
  )
}
