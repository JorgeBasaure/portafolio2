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
          <p className="PortFE__specs">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}

class HerramientasFE extends Component{

  render()
  {
    
    return(
      <div className='PerkFe'> 
        <h1 className='PerkFe__title'>Habilidades Front-End</h1>
         <div>

         <img src={logoHTML5} className="FElogo__HTML5" alt="logoHTML5" />
         </div>
         <p className='PerkFe__name'>{FEperk[0].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[0].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[0].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[0].description_Perk} /> 
        <div>

        <img src={logoSASS} className="FElogo__SASS" alt="logoSASS" />
         </div>
        <p className='PerkFe__name'>{FEperk[1].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[1].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[1].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[1].description_Perk} /> 
        <div>

        <img src={logoJS} className="FElogo__JS" alt="logoJS" />
         </div>
        <p className='PerkFe__name'>{FEperk[2].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[2].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[2].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[2].description_Perk} /> 
        <div>

        <img src={logoPHP} className="FElogo__PHP" alt="logoPHP" />
         </div>
        <p className='PerkFe__name'>{FEperk[3].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[3].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[3].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[3].description_Perk} /> 
        
        <div>
           <img src={logoReact} className="FElogo__REACT" alt="logo" />
           </div>
        <p className='PerkFe__name'>{FEperk[4].title}</p>
        <PortafolioFE mytext={DData[0].Level_Perk}  subtitle= {FEperk[4].Level_Perk} />
        <PortafolioFE mytext={DData[0].Hours_perk}  subtitle={FEperk[4].Hours_perk} />
        <PortafolioFE mytext={DData[0].description_Perk}  subtitle={FEperk[4].description_Perk} /> 

      
      </div> 
    );
  }
}


export default HerramientasFE;


