// Un reducer est une fonction qui prend l'état actuel et une action comme arguments, puis retourne un nouvel état. Il spécifie comment l'état de l'application doit changer en réponse à une action donnée.
// Les reducers sont responsables de la gestion des modifications d'état de manière prévisible et sans effets secondaires.
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;