import React, {Component} from 'react';
import SQLPerk from './sample/PerkSQL.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';
class PortafolioSQL extends Component
{
  state = {show: false}
   render()
    {
      const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p id="PortSQL__specs">{this.props.mytext} <Typed strings={subtitleLines}  typeSpeed={10} startDelay={4000} /></p>
        )
      }   
    }
}
class ManejoSQL extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkSQL'> 
              <h1 className='PerkSQL__title'>Habilidades Base de datos (Persistencia)</h1>

              <div className="SQLlogo__SMSQL">
                    <div className="SQLlogo__MSQL"></div>

                    <div className="SQLlogo__stats">
                          <p className='PerkSQL__name'>{SQLPerk[0].title}</p>

                          <PortafolioSQL mytext={DData[0].Level_Perk}  subtitle= {SQLPerk[0].Level_Perk} />
                          <PortafolioSQL mytext={DData[0].Hours_perk}  subtitle={SQLPerk[0].Hours_perk} />
                          <PortafolioSQL mytext={DData[0].description_Perk}  subtitle={SQLPerk[0].description_Perk} /> 
                    </div>
              </div>
        </div> 
      );
    }
  }
  
  
  export default ManejoSQL;