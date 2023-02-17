import React, {Component} from 'react';
import Conceptperk from './sample/ConceptDevToolPerk.json';
import DData from './sample/DescData.json';
//import logoBIZAGIM from './img/CONCEPT/modeler-logo-md.svg';
//import logoSTARUML from './img/CONCEPT/7642181.png';
//import logoSAPPD from './img/CONCEPT/logo-powerdesigner.png';
//import logoBALSAMIQ from './img/CONCEPT/balsamiq-logo-screen-1000x500.png';

class PortafolioConcept extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortConcept__specs">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasConcept extends Component{
    //TODO  Colocar los logos faltantes
    render()
    {
      
      return(
        <div className='PerkConcept'>
           <h1 className='PerkConcept__title'>Habilidades Herramientas de conceptos</h1>


           <div className="Conceptlogo__BIZAGIM"></div>

           <p className='PerkConcept__name'>{Conceptperk[0].title}</p>

          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[0].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[0].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[0].description_Perk} />


          <div className="Conceptlogo__STARUML"></div>

          <p className='PerkConcept__name'>{Conceptperk[1].title}</p>

          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[1].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[1].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[1].description_Perk} /> 
          

          <div className="Conceptlogo__SAPPD"></div>

          <p className='PerkConcept__name'>{Conceptperk[2].title}</p>

          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[2].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[2].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[2].description_Perk} /> 
          
          
          <div className="Conceptlogo__BALSAMIQ"></div>

          <p className='PerkConcept__name'>{Conceptperk[3].title}</p>

          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[3].Level_Perk} />
          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[3].Hours_perk} />
          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[3].description_Perk} /> 
        </div> 
      );
    }
  }
  
  
  export default HerramientasConcept;