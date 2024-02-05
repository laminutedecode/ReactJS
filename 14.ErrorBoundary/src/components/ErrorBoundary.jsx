// Importation de la classe Component du module 'react'
import { Component } from 'react';

// Définition d'une classe ErrorBoundary qui étend la classe Component de React
class ErrorBoundary extends Component {
  // Constructeur de la classe avec un paramètre 'props'
  constructor(props) {
    // Appel du constructeur de la classe parente (Component) avec les 'props' passés en paramètre
    super(props);
    // Initialisation du state de l'ErrorBoundary avec des propriétés hasError, error et errorInfo
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // Méthode de cycle de vie de React appelée en cas d'erreur dans les composants enfants
  componentDidCatch(error, errorInfo) {
    // Mise à jour du state avec les informations sur l'erreur
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  // Méthode de rendu du composant
  render() {
    // Vérification si une erreur est survenue
    if (this.state.hasError) {
      // Si une erreur est détectée, affichage d'un message d'erreur et des détails de l'erreur
      return (
        <div>
          <h2>Une erreur est survenue.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    // Si aucune erreur, affichage des composants enfants
    return this.props.children;
  }
}

// Exportation de la classe ErrorBoundary pour pouvoir l'utiliser ailleurs dans l'application
export default ErrorBoundary;
