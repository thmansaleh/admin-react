import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstallButton from './InstallButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <InstallButton/>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn saba
        </a>
      </header>
    </div>
  );
}

export default App;
