import React, {Component} from 'react';
import Conceptperk from './sample/ConceptDevToolPerk.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';

class PortafolioConcept extends Component
{
  state = {show: false}
   render()
    {
      const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p className="PortConcept__specs">{this.props.mytext}<Typed strings={subtitleLines}  typeSpeed={20} startDelay={40} /></p>
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


              <div className="Conceptlogo__SBIZAGIM">
                    <div className="Conceptlogo__BIZAGIM"></div>

                    <div>
                          <p className='PerkConcept__name'>{Conceptperk[0].title}</p>

                          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[0].Level_Perk} />
                          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[0].Hours_perk} />
                          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[0].description_Perk} />
                    </div>
              </div>
              
              <div className="Conceptlogo__SSTARUML">
                    <div className="Conceptlogo__STARUML"></div>

                    <div>
                          <p className='PerkConcept__name'>{Conceptperk[1].title}</p>

                          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[1].Level_Perk} />
                          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[1].Hours_perk} />
                          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[1].description_Perk} />
                    </div>
              </div>
              
              <div className="Conceptlogo__SSAPPD">
                    <div className="Conceptlogo__SAPPD"></div>

                    <div>
                          <p className='PerkConcept__name'>{Conceptperk[2].title}</p>

                          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[2].Level_Perk} />
                          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[2].Hours_perk} />
                          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[2].description_Perk} />
                    </div>
              </div>
              
              <div className="Conceptlogo__SBALSAMIQ">
                    <div className="Conceptlogo__BALSAMIQ"></div>

                    <div>
                          <p className='PerkConcept__name'>{Conceptperk[3].title}</p>

                          <PortafolioConcept mytext={DData[0].Level_Perk}  subtitle= {Conceptperk[3].Level_Perk} />
                          <PortafolioConcept mytext={DData[0].Hours_perk}  subtitle={Conceptperk[3].Hours_perk} />
                          <PortafolioConcept mytext={DData[0].description_Perk}  subtitle={Conceptperk[3].description_Perk} />
                    </div>
              </div>
        </div> 
      );
    }
  }
  
  
  export default HerramientasConcept;