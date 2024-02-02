
import './App.css';
import Content from './componants/Content/Content'
import ThemeContextProvider from './ThemeContexte'

// L'API de contexte est un outils de React quii nous permet de gerer le state globalement. il repond a une problèmatique que les props drilling alllourdi le code. On entend souvent APi contexte et Redux . Les deux sont des states manager et ils ont donc le même but. Context permet l'uthentification, les langues, les thème et redux permet de gerer les grande application qui ont beaucoup de states etd e mise a jour cibler. L'API de contexte permet donc des modifications global



function App() {
  return (
    <div className="App">
      {/* 4) apres avoir crer le contexte entoure content du provider et importe useContext dans contenu.js*/}
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
