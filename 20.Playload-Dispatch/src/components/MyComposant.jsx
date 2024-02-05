// Enfin, dans votre composant React, vous pouvez utiliser dispatch pour déclencher l'action avec la charge utile appropriée :
import { useDispatch } from 'react-redux';
import { addArticle } from '../actions/actions';

const MyComponent = () => {
  const dispatch = useDispatch();

  const handleAddArticle = () => {
    const newArticle = {
      title: 'Nouvel article',
      content: 'Contenu de l\'article'
    };

    dispatch(addArticle(newArticle));

    console.log(newArticle);
  };

  return (
    <div>
      <button onClick={handleAddArticle}>Ajouter un article</button>
    </div>
  );
};

export default MyComponent;

// Dans cet exemple, lorsque le bouton est cliqué, la fonction handleAddArticle est appelée, déclenchant l'action addArticle avec la charge utile de newArticle. La fonction dispatch s'assure que l'action est envoyée au reducer, qui met à jour l'état en conséquence.
