
import { ADD_ARTICLE } from '../actions/actions';

const initialState = {
  articles: []
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload]
      };
    default:
      return state;
  }
};

export default articleReducer;

// Dans ce reducer, lorsqu'une action de type ADD_ARTICLE est déclenchée, le state est mis à jour pour inclure le nouvel article.
