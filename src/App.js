import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';
function App() {
  const Click = (text) =>{
    alert(text)
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <Profile name="Youssef" img="./img.jpg" bio="I am 20 years old" profession="enginner" Click={Click}></Profile>
      </header>
    </div>
  );
}

export default App;
