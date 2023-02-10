import React, {Component} from 'react';
import Officeperk from './sample/PerkOffice.json'
import DData from './sample/DescData.json'

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
           <p>{Officeperk[0].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[0].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[0].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[0].description_Perk} /> 
  
          <p>{Officeperk[1].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[1].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[1].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[1].description_Perk} /> 
  
          <p>{Officeperk[2].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[2].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[2].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[2].description_Perk} /> 

          <p>{Officeperk[3].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[3].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[3].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[3].description_Perk} /> 
  
          <p>{Officeperk[4].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[4].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[4].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[4].description_Perk} /> 
  
          <p>{Officeperk[5].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[5].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[5].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[5].description_Perk} /> 

          <p>{Officeperk[6].title}</p>
          <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[6].Level_Perk} />
          <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[6].Hours_perk} />
          <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[6].description_Perk} /> 
        
        </div> 
      );
    }
  }
  
  
  export default HerramientasOffice;