// le hook useSelector est une fonction fournie par la bibliothèque React-Redux, utilisée dans les applications React pour extraire des données du state global du Redux store. Il permet à un composant de souscrire sélectivement à des parties spécifiques du state Redux, et de re-render uniquement lorsque ces parties du state changent.
import './App.css'
import { Provider } from 'react-redux';
import UserProfile from './components/Profil'
import store from './store/store'; 

function App() {

  


  return (
    <>
    <Provider store={store}>
      <div>
        <UserProfile />
      </div>
    </Provider>
      
    </>
  )
}

export default App
