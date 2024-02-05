
import { useSelector } from 'react-redux';

export default function UserProfile(){
  // Utilisation du hook useSelector pour extraire le nom d'utilisateur du state Redux
  const username = useSelector(state => state.user.username);

  return (
    <div>
      <h2>Profil utilisateur</h2>
      <p>Nom d'utilisateur : {username}</p>
    </div>
  );
};


