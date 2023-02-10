import React, {Component} from 'react';
import BEperk from './sample/PerkBE.json'
import DData from './sample/DescData.json'

class PortafolioBE extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortBE">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasBE extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkBE'> <h1>Habilidades Back-End</h1>
           <p>{BEperk[0].title}</p>
          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[0].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[0].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[0].description_Perk} /> 
  
          <p>{BEperk[1].title}</p>
          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[1].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[1].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[1].description_Perk} /> 
           
          <p>{BEperk[2].title}</p>
          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[2].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[2].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[2].description_Perk} /> 
        
        </div> 
      );
    }
  }
  
  
  export default HerramientasBE;