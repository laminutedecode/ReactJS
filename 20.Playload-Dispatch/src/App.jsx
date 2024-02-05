// "dispatch" est associé à la gestion des actions dans le contexte de Redux,et "payload" est généralement la charge utile associée à une action, c'est-à-dire les données que vous souhaitez envoyer avec l'action.

// Supposons que vous ayez une application React avec Redux configuré. Vous pourriez avoir un reducer qui gère l'état d'une liste d'articles dans votre application. Voici à quoi cela pourrait ressembler :
import './App.css'
import MyComposant from './components/MyComposant'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import articleReducer from './reducer/reducer';
function App() {

  // Création du store avec le reducer
const store = createStore(articleReducer);
  

  return (
    <>
     <Provider store={store}>
      <div>
        <h1>Playload et Dispatch</h1>
        <MyComposant />
      </div>
    </Provider>
    </>
  )
}

export default App
