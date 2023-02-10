import React, {Component} from 'react';
import FEperk from './sample/PerkFE.json'
import DData from './sample/DescData.json'
import logo from './logo.svg';



class PortafolioFE extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortFE">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}

class HerramientasFE extends Component{
  //TODO  Cambiar el esqueleto HTML cambiando div, por p
  //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
  render()
  {
    
    return(
      <div className='PerkFe'> <h1>Habilidades Front-End</h1>
         <p>{FEperk[0].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[0].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[0].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[0].description_Perk} /> 

        <p>{FEperk[1].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[1].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[1].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[1].description_Perk} /> 

        <p>{FEperk[2].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[2].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[2].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[2].description_Perk} /> 


        <p>{FEperk[3].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[3].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[3].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[3].description_Perk} /> 

        <div>
           <img src={logo} className="App-logo" alt="logo" />
           </div>
        <p>{FEperk[4].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[4].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[4].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[4].description_Perk} /> 

      
      </div> 
    );
  }
}


export default HerramientasFE;


