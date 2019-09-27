import React, { Component } from 'react';
import './Home.scss';
import bolsonaro from './bolsonaro.png';

import PhrasesService from '../../services/PhrasesService';

import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';

interface IHomeState {
  paragraphsCount: number,
  phrases: String,
}

export class Home extends Component<{}, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      paragraphsCount: 1,
      phrases: "",
    }
  }

  phrasesService = new PhrasesService();

  async componentWillMount() {
    this.setState({ phrases: await this.phrasesService.getPhrases(this.state.paragraphsCount) })
  }

  render() {
    return (
      <div className="home">
        <div className="col">
          <div className="form col">
            <p>Nosso presidente acabou de fazer uma declaração com</p>
            <Input type="number" value={this.state.paragraphsCount}/>
            <p>parágrafos.</p>
          </div>
          <div className="result col">
            <span className="first-quote">"</span>
            <Textarea value={this.state.phrases} readOnly />
            <span className="second-quote">"</span>
          </div>
          <div className="buttons col">
            <Button>GERAR</Button>
            <div className="spacer"></div>
            <Button>COPIAR</Button>
          </div>
        </div>
        <div className="col">
          <div className="col bolsonaro-picture">
            <img src={bolsonaro} alt="Presidente bolsonaro fazendo sinais de arminhas com as mãos e rindo pakas" />
          </div>
          <div className="col bolsonaro-statement">
            <h1>"Olha, eu não falei isso aí não, tá okay?!"</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
