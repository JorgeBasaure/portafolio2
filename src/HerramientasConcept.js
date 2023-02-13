import React, {Component} from 'react';
import Conceptperk from './sample/ConceptDevToolPerk.json';
import DData from './sample/DescData.json';
import logoBIZAGIM from './img/CONCEPT/modeler-logo-md.svg';
import logoSTARUML from './img/CONCEPT/7642181.png';
import logoSAPPD from './img/CONCEPT/logo-powerdesigner.png';
import logoBALSAMIQ from './img/CONCEPT/balsamiq-logo-screen-1000x500.png';

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
    //TODO  Colocar los logos faltantes
    render()
    {
      
      return(
        <div className='PerkConcept'> <h1>Habilidades Herramientas de conceptos</h1>
                  <div>
         <img src={logoBIZAGIM} className="IDE-logo" alt="logoBIZAGIM" />
         </div>
           <p>{Conceptperk[0].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[0].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[0].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[0].description_Perk} /> 
          <div>
         <img src={logoSTARUML} className="IDE-logo" alt="logoSTARUML}" />
         </div>
          <p>{Conceptperk[1].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[1].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[1].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[1].description_Perk} /> 
          <div>
         <img src={logoSAPPD} className="IDE-logo" alt="logoSAPPD}" />
         </div>
          <p>{Conceptperk[2].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[2].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[2].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[2].description_Perk} /> 
          <div>
         <img src={logoBALSAMIQ} className="IDE-logo" alt="logoBALSAMIQ" />
         </div>
          <p>{Conceptperk[3].title}</p>
          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[3].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[3].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[3].description_Perk} /> 
        </div> 
      );
    }
  }
  
  
  export default HerramientasConcept;