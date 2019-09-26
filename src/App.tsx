import React from 'react';
import './App.scss';

import Home from './components/home/Home';
import Footer from './components/footer/Footer';

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
      <Home />
      <Footer />
    </div>
  );
}

export default App;
