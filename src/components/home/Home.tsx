import React from 'react';
import './Home.scss';

import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';

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
        <Button>GERAR</Button>
        <div className="spacer"></div>
        <Button>COPIAR</Button>
      </div>
    </div>
  );
}

export default Home;
