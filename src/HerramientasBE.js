import React, {Component} from 'react';
import BEperk from './sample/PerkBE.json';
import DData from './sample/DescData.json';


//TODO: Verificar si los logos son expandibles, si no buscar logo svg java grande
class PortafolioBE extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id="PortBE__specs">{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class HerramientasBE extends Component{
 
    render()
    {
      
      return(
        <div className='PerkBe'> 
        <h1 className='PerkBe__title'>Habilidades Back-End</h1>


           <div className="BElogo__VBNET"></div>

           <p className='PerkBe__name'>{BEperk[0].title}</p>

          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[0].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[0].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[0].description_Perk} /> 


          <div className="BElogo__JAVA"></div>

          <p className='PerkBe__name'>{BEperk[1].title}</p>

          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[1].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[1].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[1].description_Perk} /> 


          <div className="BElogo__CSHARP"></div>

          <p className='PerkBe__name'>{BEperk[2].title}</p>

          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[2].Level_Perk} />
          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[2].Hours_perk} />
          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[2].description_Perk} /> 
        
        </div> 
      );
    }
  }
  
  
  export default HerramientasBE;