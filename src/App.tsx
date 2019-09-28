import React from 'react';
import './App.scss';

import Home from './components/home/Home';
import Footer from './components/footer/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>BOLSONARO IPSUM</h1>
        <hr />
        <hr />
        <div className="paper-info">
          <p>{new Date().toLocaleDateString("en-NZ")}</p>
          <p>Brasília - DF</p>
          <p>Brasil acima de tudo{/* meu pau acima de todos */}</p>
        </div>
        <hr />
        <hr />
      </header>
      <div className="desktop-only">
        <div className="hero-news">
          {/* <h1><span>TEM</span> <span>QUE</span> <span>MUDAR</span> <span>ISSO</span> <span>AÍ!</span></h1> */}
          <h1>TEM QUE MUDAR ISSO AÍ!</h1>
        </div>
      </div>
      <div className="mobile-only">
        <div className="hero-news">
          <h2>
            TEM QUE MUDAR ISSO AÍ!
        </h2>
        </div>
      </div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
