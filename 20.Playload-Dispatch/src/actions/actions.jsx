
export const ADD_ARTICLE = 'ADD_ARTICLE';

export const addArticle = (article) => {
  return {
    type: ADD_ARTICLE,
    payload: article
  };
};


// Dans cet exemple, ADD_ARTICLE est une action que vous définissez et addArticle est un créateur d'actions. Le créateur d'actions crée une action avec un type (dans ce cas, ADD_ARTICLE) et une charge utile (payload), qui est l'article à ajouter.