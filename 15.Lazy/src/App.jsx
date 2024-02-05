// "Lazy loading" (chargement paresseux) en React est une technique qui consiste à retarder le chargement de certaines parties de votre application jusqu'à ce qu'elles soient réellement nécessaires. Cela peut améliorer les performances en ne chargeant que le code dont vous avez besoin au moment opportun, plutôt que de tout charger dès le début. Imaginons jai deux composant dont lun avec un bouton pour afficher le deuxieme composant
import './App.css'
import ComposantA from './components/ComposantA'

function App() {
return(
  
  <>
  <ComposantA />
  </>
  )
 
}

export default App
