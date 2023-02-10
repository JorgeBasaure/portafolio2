import React, {Component} from 'react';
import Conceptperk from './sample/ConceptDevToolPerk.json'
import DData from './sample/DescData.json'

class PortafolioConcept extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortConcept">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasConcept extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkConcept'> <h1>Habilidades Herramientas de conceptos</h1>
           <p>{Conceptperk[0].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[0].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[0].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[0].description_Perk} /> 
  
          <p>{Conceptperk[1].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[1].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[1].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[1].description_Perk} /> 
  
          <p>{Conceptperk[2].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[2].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[2].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[2].description_Perk} /> 
        
          <p>{Conceptperk[3].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[3].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[3].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[3].description_Perk} /> 
        </div> 
      );
    }
  }
  
  
  export default HerramientasConcept;