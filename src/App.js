import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Kepler.gl Map Application</h1>
      </header>
      <ParentComponent />
    </div>
  );
}

export default App;