import React, {Component} from 'react';
import BEperk from './sample/PerkBE.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';


class PortafolioBE extends Component
{
  state = {show: false}
   render()
    {
        const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p className="PortBE__specs">{this.props.mytext} <Typed strings={subtitleLines}  typeSpeed={20} startDelay={40} /></p>
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

           <div className="BElogo__SVBNET">
                    <div className="BElogo__VBNET"></div>
                    <div>
                              <p className='PerkBe__name'>{BEperk[0].title}</p>

                              <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[0].Level_Perk} />
                              <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[0].Hours_perk} />
                              <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[0].description_Perk} /> 
                    </div>
           </div>
           

           <div className="BElogo__SJAVA">
                  <div className="BElogo__JAVA"></div>

                 <div>
                          < p className='PerkBe__name'>{BEperk[1].title}</p>

                          <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[1].Level_Perk} />
                          <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[1].Hours_perk} />
                          <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[1].description_Perk} /> 
                 </div>
           </div>
          



            <div className="BElogo__SCSHARP">
                    <div className="BElogo__CSHARP"></div>

                    <div>
                            <p className='PerkBe__name'>{BEperk[2].title}</p>

                            <PortafolioBE mytext={DData[0].Level_Perk}  subtitle= {BEperk[2].Level_Perk} />
                            <PortafolioBE mytext={DData[0].Hours_perk}  subtitle={BEperk[2].Hours_perk} />
                            <PortafolioBE mytext={DData[0].description_Perk}  subtitle={BEperk[2].description_Perk} /> 
                    </div>
            </div>
          


        
        </div> 
      );
    }
  }
  
  
  export default HerramientasBE;