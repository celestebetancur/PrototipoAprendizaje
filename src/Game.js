import React from 'react';
import GameDiv from './GameDiv'
import Footer from './Footer';
import p5 from 'p5';
import AnimHeader from './animations/AnimHeader';
import Bird from './animations/Bird';
import name from './assets/quest.png';
import map from './assets/map.jpg';
import farming from './assets/farming.jpeg';

let header = new p5(AnimHeader,'canvas');
let questScreen = new p5(Bird);
let sceneNumber = 1;

class Game extends React.Component {

  state = {h: '', name: '', scene: sceneNumber};

  componentDidMount(){
    let temp = new Date().getHours();
    let hourSec = temp < 12 ? "Buen día" : temp < 18 && temp ? "Buenas tardes" : "Buenas Noches";
    this.setState({h: hourSec});
    //this.setState({h: hourSec}, ()=> console.log(this.state.h));
  }

  onFormSubmit = (e) =>{
    e.preventDefault();
    this.setState({scene: ++sceneNumber});
    console.log(this.setState.scene);
  }

  onButtonSubmit = (click) => {
    this.setState({scene: ++sceneNumber});
  }

  scene(){
    switch (this.state.scene) {
      case 1:
        var temp = `¡Hola ${this.state.name}!
        Vamos a iniciar esta aventura, que te llevará
        por caminos de descubrimento en tierras de fantasia.
        Disfruta este viaje de aprendizaje...`
        return(
          <div class="container">
            <div class="col" id="game"></div>
            <div class="row">
              <div class="col">
                <img src={name} class="rounded float-start" alt="..." />
              </div>
              <GameDiv
                text={temp}
                onSubmit={this.onButtonSubmit}
                buttonText="¡let's Quest!"/>
            </div>
          </div>
        );
    case 2:
      return (
        <div className="container">
          <div className="row"></div>
          <div className="row align-items-center">
          <div id="game" className="col-6">
          </div>
          <div className="col">
            <form onSubmit={this.onFormSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">{this.state.h} valiente, dime ¿cuál es tu nombre?</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={(e)=> this.setState({name: e.target.value})}></input>
              </div>
                <div>{this.state.name} ¿Ese es tu nombre?</div>
              <button
                type="submit"
                className="btn btn-primary">lets Quest!</button>
            </form>
            </div>
          </div>
        </div>
      );
    case 3:
      var temp = `${this.state.name} mi nombre es Eeto y te acompañaré en este el viaje.`;
      return(
        <div class="container">
          <div class="col" id="game"></div>
          <div class="row">
            <div class="col">
            </div>
            <GameDiv
              text={temp}
              onSubmit={this.onButtonSubmit}
              buttonText="¡Vamos!"/>
          </div>
        </div>
      );
    case 4:
     var temp = "Empecemos: \nEn la imagen puedes ver el mapa de esta aventura y la primera pregunta para ti será: ¿En donde quisieras empezar?"
      return(
        <div class="container">
          <div class="col" id="game"></div>
          <div class="row">
            <div class="col">
              <img src={map} class="rounded float-start" alt="..." width="640px" height="480px" />
            </div>
            <GameDiv
              text={temp}
              onSubmit={this.onButtonSubmit}
              buttonText="¡Vamos!"/>
          </div>
        </div>
      );
      case 5:
      var temp = `Muy bien ${this.state.name}, escogiste la tierra de la siembra y la cosecha`
      return(
        <div class="container">
          <div class="col" id="game"></div>
          <div class="row">
            <div class="col">
              <img src={map} class="rounded float-start" alt="..." width="640px" height="480px" />
            </div>
            <GameDiv
              text={temp}
              onSubmit={this.onButtonSubmit}
              buttonText="¡Sembrar y cosechar!"/>
          </div>
        </div>
      );
      case 6:
      var temp = `Bueno ${this.state.name}, en esta primera misión debes recoger, contar y distribuir
                  algunos alimentos, comenzaremos con pequeñas cantidades`
      return(
        <div class="container">
          <div class="col" id="game"></div>
          <div class="row">
            <div class="col">
              <img src={farming} class="rounded float-start" alt="..." width="640px" height="480px" />
            </div>
            <GameDiv
              text={temp}
              onSubmit={this.onButtonSubmit}
              buttonText="Empecemos de una vez"/>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>{this.scene()}</div>
    );
  }
}

export default Game;
