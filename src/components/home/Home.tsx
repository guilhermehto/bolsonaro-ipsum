import React from 'react';
import './Home.scss';

import Input from '../input/Input';
import Textarea from '../textarea/Textarea';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="form col">
        <p>Nosso presidente acabou de fazer uma declaração com</p>
        <Input type="number" />
        <p>parágrafos.</p>
      </div>
      <div className="result col">
        <span className="first-quote">"</span>
        <Textarea />
        <span className="second-quote">"</span>
      </div>
      <div className="buttons col">
        <button>GERAR</button>
        <button>COPIAR</button>
      </div>
    </div>
  );
}

export default Home;
