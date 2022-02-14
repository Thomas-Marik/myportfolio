
import './App.css';
import Navigation from './components/Navigation/Navigation';
import NavBar from './components/NavBar/NavBar'

const App=()=> {
  return (
    <div className="app">
      <div className="navbar">
        <NavBar/>
      </div>
      <div className='content'>
        <Navigation/>
      </div>
    </div>
  );
}

export default App;
