import React, { Component } from 'react';
import prof from './sample/Profile.json'
import PicDev from './img/20230131_124854.jpg'
import AcdDev from './img/bellavista-7___Selected.jpg'
import JobDev from './img/1332946447-lmb-bic-mut-10.jpg'
class PortafolioDev extends Component {
  state = { show: false }
  render() {
    if (!this.state.show) {
      return (
        <p id="perfil">{this.props.mytext}</p>
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

        <div>
          <p>{prof[0].title}</p>
          <img src={PicDev} alt="" />
        </div>
        <div>

          <PortafolioDev mytext={prof[0].description} />
        </div>

        <div>
          <p>{prof[1].title}</p>
          <img src={AcdDev} alt="" />
        </div>
        <div>

          <PortafolioDev mytext={prof[1].description} />
        </div>
        <div>
        <p>{prof[2].title}</p>
          <img src={JobDev} alt="" />
          </div>
        <div>
          
          <PortafolioDev mytext={prof[2].description} /></div>

      </div>
    );
  }
}


export default PresentacionDev;