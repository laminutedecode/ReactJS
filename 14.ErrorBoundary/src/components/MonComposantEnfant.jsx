import React from 'react'

class MonComposantEnfant extends React.Component {
  componentDidMount() {
    // Simuler une erreur lors du montage du composant
    throw new Error('Erreur simulée dans MonComposantEnfant');
  }

  render() {
    return <div>Contenu du composant enfant</div>;
  }
}

export default MonComposantEnfant;
