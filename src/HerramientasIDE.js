import React, {Component} from 'react';
import IDEperk from './sample/PerkIDEtools.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';

class PortafolioIDE extends Component
{
  state = {show: false}
   render()
    {
        const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p className="PortIDE__specs">{this.props.mytext} <Typed strings={subtitleLines}  typeSpeed={10} startDelay={5000} /></p>
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
        <div className='PerkIDE' id='sector_04'> 
            <h1 className='PerkIDE__title'>Habilidades en IDE</h1>

            <div className="IDElogo__SVS">
            <div className="IDElogo__SVS--container">
                        <div className="IDElogo__VS"></div>
            </div>
                    

                    <div className="IDElogo__stats">
                            <p className='PerkIDE__name'>{IDEperk[0].title}</p>

                            <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[0].Level_Perk} />
                            <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[0].Hours_perk} />
                            <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[0].description_Perk} /> 
                    </div>
            </div>
           

           

           <div className="IDElogo__SVSC">
                 <div className="IDElogo__SVSC--container">
                         <div className="IDElogo__VSC"></div>
                </div>
                    

                    <div className="IDElogo__stats">
                            <p className='PerkIDE__name'>{IDEperk[1].title}</p>

                            <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[1].Level_Perk} />
                            <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[1].Hours_perk} />
                            <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[1].description_Perk} /> 
                    </div>
           </div>
          

          

            <div className="IDElogo__SSQLMS">
                <div className="IDElogo__SSQLMS--container">
                        <div className="IDElogo__SQLMS"></div>
                </div>
                   

                    <div className="IDElogo__stats">
                            <p className='PerkIDE__name'>{IDEperk[2].title}</p>

                            <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[2].Level_Perk} />
                            <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[2].Hours_perk} />
                            <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[2].description_Perk} />
                    </div>
            </div>
          

           
            <div className="IDElogo__SNETBEANS">
                <div className="IDElogo__SNETBEANS--container">
                        <div className="IDElogo__NETBEANS"></div>
                 </div>
                    

                    <div className="IDElogo__stats">
                            <p className='PerkIDE__name'>{IDEperk[3].title}</p>

                            <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[3].Level_Perk} />
                            <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[3].Hours_perk} />
                            <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[3].description_Perk} />
                    </div>

           </div>
            

           
           <div className="IDElogo__SNOTEPAD2PLUS">
                <div className="IDElogo__SNOTEPAD2PLUS--container">
                        <div className="IDElogo__NOTEPAD2PLUS"></div>
                </div>
                  

                  <div className="IDElogo__stats">
                          <p className='PerkIDE__name'>{IDEperk[4].title}</p>

                          <PortafolioIDE mytext={DData[0].Level_Perk}  subtitle= {IDEperk[4].Level_Perk} />
                          <PortafolioIDE mytext={DData[0].Hours_perk}  subtitle={IDEperk[4].Hours_perk} />
                          <PortafolioIDE mytext={DData[0].description_Perk}  subtitle={IDEperk[4].description_Perk} /> 
                  </div>
           </div>
        


        </div> 
      );
    }
  }
  
  
  export default HerramientasIDE;