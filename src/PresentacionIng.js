import React, { Component } from 'react';
import prof from './sample/Profile.json'



class PortafolioDev extends Component {
  state = { show: false }
  render() {
    if (!this.state.show) {
      return (
        <p id="profile__paragraph">{this.props.mytext}</p>
      )
    }
  }
}


class PresentacionDev extends Component {

  render() {

    return (
      <div className="profile">

        <h1 className="profile__name">Presentación</h1>

         <div>
            <p   className="profile__title">{prof[0].title}</p>
         </div>
        <div className="profile__personal"> 
        </div>
        <div>
          <PortafolioDev mytext={prof[0].description} />
        </div>


  <div >
          <p className="profile__title">{prof[1].title}</p>
        </div>

        <div className="profile__academy">
        </div>

        <div>
          <PortafolioDev mytext={prof[1].description} />
        </div>



        <div>
        <p className="profile__title">{prof[2].title}</p>
          </div>
         <div className="profile__job">
          </div>
        <div>
          
          <PortafolioDev mytext={prof[2].description} /></div>

      </div>
    );
  }
}


export default PresentacionDev;