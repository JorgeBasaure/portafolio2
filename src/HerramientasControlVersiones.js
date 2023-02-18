import React, {Component} from 'react';
import CtrlVerperk from './sample/CVersionPerk.json';
import DData from './sample/DescData.json';

class PortafolioCtrlVer extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortCtrlVer__specs">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasCtrlVer extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkCtrlVer'>
              <h1 className='PerkCtrlVer__title'>Habilidades en control de versiones</h1>
                
              <div className="CtrlVerlogo__SGIT">
                     <div className="CtrlVerlogo__GIT"></div>

                     <div>
                            <p  className='PerkCtrlVer__name'>{CtrlVerperk[0].title}</p>

                            <PortafolioCtrlVer mytext={DData[0].Level_Perk}  subtitle= {CtrlVerperk[0].Level_Perk} />
                            <PortafolioCtrlVer mytext={DData[0].Hours_perk}  subtitle={CtrlVerperk[0].Hours_perk} />
                            <PortafolioCtrlVer mytext={DData[0].description_Perk}  subtitle={CtrlVerperk[0].description_Perk} />
                     </div>
              </div>
        </div> 
      );
    }
  }
  
  
  export default HerramientasCtrlVer;