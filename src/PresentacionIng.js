import React, { Component } from 'react';
import prof from './sample/Profile.json'



class PortafolioDev extends Component {
  state = { show: false }
  render() {
    if (!this.state.show) {
      return (
        <p>{this.props.mytext}</p>
      )
    }
  }
}


class PresentacionDev extends Component {

  render() {

    return (
      <div className="profile">

        <h1 className="profile__name">Presentación  Ajuste para los DIV</h1>
        <div className="profile--title"><p>{prof[0].title}</p></div>
         <div className='profile__Spersonal'>
            <div className="profile--personal"></div>
            <div className="profile--paragraph"><PortafolioDev mytext={prof[0].description} /></div>
        </div>

        <div  className="profile--title"><p>{prof[1].title}</p></div>
  <div className='profile__Sacademy'>
      <div className="profile--academy"></div>
      <div  className="profile--paragraph"><PortafolioDev mytext={prof[1].description} /></div>
  </div>

    <div className="profile--title"><p>{prof[2].title}</p></div>    
    <div className='profile__Sjob'>
      <div className="profile--job"></div>
      <div  className="profile--paragraph"><PortafolioDev mytext={prof[2].description} /></div>
    </div>
        
      </div>
    );
  }
}


export default PresentacionDev;