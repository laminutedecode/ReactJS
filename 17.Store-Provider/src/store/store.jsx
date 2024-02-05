// Le Store est essentiellement un conteneur qui détient l'état global de votre application. Il s'agit d'une sorte de base de données centrale qui contient l'état de tous les composants de votre application React.
// Il permet d'accéder et de modifier l'état de manière centralisée, garantissant ainsi un état cohérent pour toute l'application.

import { createStore  } from 'redux';
import counterReducer from '../reducers/counterReducer';

const store = createStore(counterReducer)

export default store;