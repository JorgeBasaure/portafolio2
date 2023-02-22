import React, { Component } from 'react';
import prof from './sample/Profile.json';
import Typed from'react-typed';

//TODO: VERIFICAR SI SE PUEDE PONER MAS CLASES CON LA VELOCIDAD
//DE TIPEO DISTINTA.
class PortafolioDev extends Component {
  state = { show: false }

  render() {
    const textLines = [this.props.mytext];

    if (!this.state.show) {
      return (
       <p className="perfil__ing"><Typed strings={textLines} typeSpeed={10}  startDelay={2000}/></p>
       //
        
      )
    }
  }
}


class PresentacionDev extends Component {
  //TODO  Poner un for para iterar cada habilidad 
  //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
  render() {

    return (
      <div className="profile">
        <h1>Presentación</h1>


<div  className="profile--title"><p>{prof[0].title}</p></div>

<div className='profile__Spersonal'>
        <div className="profile--personal"></div>
        <div  className="profile--Pparagraph"><PortafolioDev mytext={prof[0].description} /></div>
</div>

        <div  className="profile--title"><p>{prof[1].title}</p></div>
        
  <div className='profile__Sacademy'>
      <div className="profile--academy"></div>
      <div  className="profile--Aparagraph"><PortafolioDev mytext={prof[1].description} /></div>
  </div>

    <div className="profile--title"><p>{prof[2].title}</p></div>    
    <div className='profile__Sjob'>
      <div className="profile--job"></div>
      <div  className="profile--Jparagraph"><PortafolioDev mytext={prof[2].description} /></div>
    </div>
        
      </div>
    );
  }
}


export default PresentacionDev;