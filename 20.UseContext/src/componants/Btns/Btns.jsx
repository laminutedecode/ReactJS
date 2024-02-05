import './Btns.css'


// 10 importer use context et theme contexte
import React, {useContext} from 'react'
import { ThemeContext } from "../../ThemeContexte";

export default function Btns() {

// 11) créer une variable
const {toggleTheme, theme} = useContext(ThemeContext)

  return (
  // 12) ensuite je lajoute au bouton
      <button
      onClick={toggleTheme}
       className='btn'>{theme ? "LIGHT" : "NIGHT"}</button>

      // 13 créerles classe dans lindex.css
   
  )
}
