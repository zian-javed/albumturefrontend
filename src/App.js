import NavBar from './components/navbar/navBar.js';
import './App.css';

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <NavBar /> 
      <h1> Final Project </h1>

    </div>
  );
}

export default App;
