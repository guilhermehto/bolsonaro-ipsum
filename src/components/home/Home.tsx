import React, { Component } from 'react';
import './Home.scss';
import bolsonaro from './bolsonaro.png';

import PhrasesService from '../../services/PhrasesService';

import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';

interface IHomeState {
  paragraphsCount: number,
  phrases: string,
}

export class Home extends Component<{}, IHomeState> {
  phrasesService = new PhrasesService();
  textarea: any;
  
  constructor(props: any) {
    super(props);
    this.state = {
      paragraphsCount: 1,
      phrases: "",
    }
  }


  async generateNewParagraphs() {
    this.setState({ phrases: await this.phrasesService.getPhrases(this.state.paragraphsCount) })
  }

  async componentWillMount() {
    await this.generateNewParagraphs();
  }

  handleParagraphsCountChange = (event: any) => {
    let targetValue = event.target.value;
    targetValue = targetValue < 0 ? 1 : targetValue;
    targetValue = targetValue >= 10 ? 10 : targetValue;
    this.setState({ paragraphsCount: targetValue })
  }

  handleGenerate = async () => {
    await this.generateNewParagraphs();
  }

  handleCopy = () => {
    navigator.clipboard.writeText(this.state.phrases);
  }

  render() {
    return (
      <div className="home">
        <div className="col">
          <div className="form col">
            <p>Nosso presidente acabou de fazer uma declaração com</p>
            <Input type="number" value={this.state.paragraphsCount} onChange={this.handleParagraphsCountChange} />
            <p>parágrafos.</p>
          </div>
          <div className="result col">
            <span className="first-quote">"</span>
            <Textarea value={this.state.phrases} readOnly />
            <span className="second-quote">"</span>
          </div>
          <div className="buttons col">
            <Button onClick={this.handleGenerate}>GERAR</Button>
            <div className="spacer"></div>
            <Button onClick={this.handleCopy}>COPIAR</Button>
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
