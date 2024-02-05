
import { useParams } from 'react-router-dom';

const User = () => {
  // Utilisez le hook useParams pour extraire les paramètres de l'URL
  const { userId } = useParams();

  return (
    <div>
      <h2>User Page</h2>
      <p>UserID: {userId}</p>
    </div>
  );
};

export default User;
