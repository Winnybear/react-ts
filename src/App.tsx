import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello name="TypeScript" enthusiasmLevel={10}></Hello>
        <StatefulHello name="TypeScript" enthusiasmLevel={1}></StatefulHello>
      </header>
    </div>
  );
}

export default App;
