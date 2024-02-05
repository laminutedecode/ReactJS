// Les actions sont des objets qui représentent une intention de modifier l'état du store. Elles sont généralement dispatchées (envoyées) au store par les composants de l'application.
// Ces objets décrivent simplement ce qui s'est passé, mais ne spécifient pas comment l'état doit être modifié. C'est le rôle des reducers.

export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};


