import React, {Component} from 'react';
import Officeperk from './sample/PerkOffice.json';
import DData from './sample/DescData.json';
import logoWORD from './img/Office/icons8-microsoft-word-2019-512.svg';
import logoEXCEL from './img/Office/icons8-microsoft-excel-2019-480.svg';
import logoPROJECT from './img/Office/icons8-microsoft-project-2019-480.svg';
import logoSHAREPOINT from './img/Office/icons8-microsoft-sharepoint-2019-480.svg';
import logoPOWERBI from './img/Office/New_Power_BI_Logo.svg';
import logoVISIO from './img/Office/icons8-microsoft-visio-2019-480.svg';
import logoPP from './img/Office/icons8-microsoft-powerpoint-2019-480.svg';

class PortafolioOffice extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortOffice">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasOffice extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className='PerkOffice'> <h1>Habilidades Microsoft Office</h1>
         <div>
         <img src={logoWORD} className="IDE-logo" alt="logoWORD" />
         </div>
           <p>{Officeperk[0].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[0].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[0].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[0].description_Perk} /> 
          <div>
         <img src={logoEXCEL} className="IDE-logo" alt="logoEXCEL" />
         </div>
          <p>{Officeperk[1].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[1].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[1].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[1].description_Perk} /> 
          <div>
         <img src={logoPROJECT} className="IDE-logo" alt="logoPROJECT" />
         </div>
          <p>{Officeperk[2].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[2].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[2].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[2].description_Perk} /> 
          <div>
         <img src={logoSHAREPOINT} className="IDE-logo" alt="logoSHAREPOINT" />
         </div>
          <p>{Officeperk[3].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[3].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[3].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[3].description_Perk} /> 
          <div>
         <img src={logoPOWERBI} className="IDE-logo" alt="logoPOWERBI" />
         </div>
          <p>{Officeperk[4].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[4].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[4].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[4].description_Perk} /> 
          <div>
         <img src={logoVISIO} className="IDE-logo" alt="logoVISIO" />
         </div>
          <p>{Officeperk[5].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[5].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[5].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[5].description_Perk} /> 
          <div>
         <img src={logoPP} className="IDE-logo" alt="logoPP" />
         </div>
          <p>{Officeperk[6].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[6].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[6].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[6].description_Perk} /> 
        
        </div> 
      );
    }
  }
  
  
  export default HerramientasOffice;