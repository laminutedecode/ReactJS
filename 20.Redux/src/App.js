import "./App.css";
//  Redux permet de gerer sont state comme L'API de context dailleur il utilise l'API de context sous le capot.
//  redux nous permet de créer un store qui aura plusieurs méthodes qui vont nous permettre de manipuler les données. le dispatcher va envoyer au reducer des infos , le reducer va lui passer lancien state au nouveau state, le state va ensuite hydrater le composant. Tout cela sera injecter par la suite dans le composant qui affichera les données ou effectura une action par rapport a ces données stockées dans le store.

// 1) Dans le terminal: npm install redux et  npm install React redux

function App() {
  return <div className="App"></div>;
}

export default App;
