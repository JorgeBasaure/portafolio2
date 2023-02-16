import React, {Component} from 'react';
import IDEperk from './sample/PerkIDEtools.json';
import DData from './sample/DescData.json';
import logoVS from './img/IDE/Visual_Studio_Icon_2019.svg';
import logoVSC from './img/IDE/vscode.svg';
import logoSQLMS from './img/IDE/sql-server-icon-png-11348.png';
import logoNETBEANS from './img/IDE/icons8-netbeans-512.svg';
import logoNOTEPAD2PLUS from './img/IDE/Notepad++_Logo.svg'

class PortafolioIDE extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortIDE__specs">{this.props.mytext}  {this.props.subtitle}</p>
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
        <div className='PerkIDE'> 
        <h1 className='PerkIDE__title'>Habilidades en IDE</h1>
           <div>

         <img src={logoVS} className="IDElogo__VS" alt="logoVS" />
         </div>
           <p className='PerkIDE__name'>{IDEperk[0].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[0].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[0].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[0].description_Perk} /> 
          <div>

         <img src={logoVSC} className="IDElogo__VSC" alt="logoVSC" />
         </div>
          <p className='PerkIDE__name'>{IDEperk[1].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[1].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[1].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[1].description_Perk} /> 
          <div>

         <img src={logoSQLMS} className="IDElogo__SQLMS" alt="logoSQLMS" />
         </div>
          <p className='PerkIDE__name'>{IDEperk[2].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[2].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[2].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[2].description_Perk} /> 
          <div>

         <img src={logoNETBEANS} className="IDElogo__NETBEANS" alt="logoNETBEANS" />
         </div>
          <p className='PerkIDE__name'>{IDEperk[3].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[3].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[3].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[3].description_Perk} /> 
          <div>

         <img src={logoNOTEPAD2PLUS} className="IDElogo__NOTEPAD2PLUS" alt="logoNOTEPAD2PLUS" />
         </div>
          <p className='PerkIDE__name'>{IDEperk[4].title}</p>
          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[4].Level_Perk} />
          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[4].Hours_perk} />
          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[4].description_Perk} /> 
        </div> 
      );
    }
  }
  
  
  export default HerramientasIDE;