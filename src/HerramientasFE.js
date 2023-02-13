import React, {Component} from 'react';
import FEperk from './sample/PerkFE.json'
import DData from './sample/DescData.json'
import logoReact from './logo.svg';
import logoHTML5 from './img/FE/HTML5_logo_and_wordmark.svg';
import logoSASS from './img/FE/Sass_Logo_Color.svg';
import logoJS from './img/FE/javascript-logo-svgrepo-com.svg';
import logoPHP from './img/FE/php2-svgrepo-com.svg';

//TERMINADO EL ESQUELETO


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

  render()
  {
    
    return(
      <div className='PerkFe'> <h1>Habilidades Front-End</h1>
         <div>
         <img src={logoHTML5} className="FE-logo" alt="logoHTML5" />
         </div>
         <p>{FEperk[0].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[0].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[0].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[0].description_Perk} /> 
        <div>
        <img src={logoSASS} className="FE-logo" alt="logoSASS" />
         </div>
        <p>{FEperk[1].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[1].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[1].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[1].description_Perk} /> 
        <div>
        <img src={logoJS} className="FE-logo" alt="logoJS" />
         </div>
        <p>{FEperk[2].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[2].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[2].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[2].description_Perk} /> 
        <div>
        <img src={logoPHP} className="FE-logo" alt="logoPHP" />
         </div>
        <p>{FEperk[3].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[3].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[3].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[3].description_Perk} /> 

        <div>
           <img src={logoReact} className="App-logo" alt="logo" />
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


