
export const ADD_ARTICLE = 'ADD_ARTICLE';

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article
  };
};
// Payload : Le "payload" est une propriété de l'objet action qui contient les données que vous souhaitez envoyer avec l'action. Cela peut être n'importe quel type de données JavaScript, comme une chaîne, un nombre, un objet ou un tableau. Le payload contient généralement les informations nécessaires pour mettre à jour l'état de l'application de manière appropriée en fonction de l'action déclenchée.

// Dans cet exemple, ADD_ARTICLE est une action et addArticle est un créateur d'actions. Le créateur d'actions crée une action avec un type (dans ce cas, ADD_ARTICLE) et une charge utile (payload), qui est l'article à ajouter.