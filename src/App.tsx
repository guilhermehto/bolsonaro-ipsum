import React from 'react';
import logo from './logo.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>BOLSONARO IPSUM</h1>
        <hr/>
        <hr/>
        <div className="paper-info">
          <p>{new Date().toLocaleDateString("en-NZ")}</p>
          <p>Brasília - DF</p>
          <p>Brasil acima de todos</p>
        </div>
        <hr/>
        <hr/>
      </header>
      <div className="hero-news">
        <h1><span>TEM</span> <span>QUE</span> <span>MUDAR</span> <span>ISSO</span> <span>AÍ!</span></h1>
      </div>
    </div>
  );
}

export default App;
