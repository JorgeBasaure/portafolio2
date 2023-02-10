import React, {Component} from 'react';
import IDEperk from './sample/PerkIDEtools.json'
import DData from './sample/DescData.json'

class PortafolioIDE extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortIDE">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasIDE extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkIDE'> <h1>Habilidades en IDE</h1>
           <p>{IDEperk[0].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[0].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[0].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[0].description_Perk} /> 
  
          <p>{IDEperk[1].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[1].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[1].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[1].description_Perk} /> 
  
          <p>{IDEperk[2].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[2].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[2].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[2].description_Perk} /> 
        
          <p>{IDEperk[3].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[3].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[3].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[3].description_Perk} /> 
  
          <p>{IDEperk[4].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[4].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[4].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[4].description_Perk} /> 
        </div> 
      );
    }
  }
  
  
  export default HerramientasIDE;