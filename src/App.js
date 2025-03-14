import logo from './logo.svg';
import './App.css';
import ExibeHora from './ExibeHora.js';
import RecipeTitle from './RecipeTitle.js';
import Rotas from './Rotas.js';

function App() {
  return (
    <div className="App">
      <Rotas/>
      <RecipeTitle/>
      <ExibeHora/>
    </div>
  );
}

export default App;
