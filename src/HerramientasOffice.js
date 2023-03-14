import React, {Component} from 'react';
import Officeperk from './sample/PerkOffice.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';

class PortafolioOffice extends Component
{
  state = {show: false}
   render()
    {
        const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p className="PortOffice__specs">{this.props.mytext} <Typed strings={subtitleLines}  typeSpeed={10} startDelay={5000} /></p>
        )
      }   
    }
}
class HerramientasOffice extends Component{
    //TODO :  colocar  --container    a los logos
    render()
    {
      
      return(
        <div className='PerkOffice' id='sector_05'> 
                <h1 className='PerkOffice__title'>Habilidades Microsoft Office</h1>

                <div className="Officelogo__SWORD">
                        <div className="Officelogo__SWORD--container">
                                <div className="Officelogo__WORD"></div>
                        </div>
                        

                        <div className="Officelogo__stats">
                                  <p className='PerkOffice__name'>{Officeperk[0].title}</p>

                                  <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[0].Level_Perk} />
                                  <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[0].Hours_perk} />
                                  <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[0].description_Perk} /> 
                        </div>
                </div>



                <div className="Officelogo__SEXCEL">
                        <div className="Officelogo__SEXCEL--container">
                                <div className="Officelogo__EXCEL"></div>
                        </div>
                        

                        <div className="Officelogo__stats">
                                <p className='PerkOffice__name'>{Officeperk[1].title}</p>

                                <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[1].Level_Perk} />
                                <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[1].Hours_perk} />
                                <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[1].description_Perk} />
                        </div>
                </div>
                


                <div className="Officelogo__SPROJECT">
                        <div className="Officelogo__SPROJECT--container ">
                                <div className="Officelogo__PROJECT"></div>
                        </div>
                        

                        <div className="Officelogo__stats">
                                <p className='PerkOffice__name'>{Officeperk[2].title}</p>

                                <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[2].Level_Perk} />
                                <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[2].Hours_perk} />
                                <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[2].description_Perk} /> 
                        </div>
                </div>
                


                <div className="Officelogo__SSHAREPOINT">
                        <div className="Officelogo__SSHAREPOINT--container">
                                <div className="Officelogo__SHAREPOINT"></div>
                         </div>
                       

                       <div className="Officelogo__stats">
                              <p className='PerkOffice__name'>{Officeperk[3].title}</p>

                              <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[3].Level_Perk} />
                              <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[3].Hours_perk} />
                              <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[3].description_Perk} /> 
                       </div>
                </div>



                <div className="Officelogo__SPOWERBI">
                        <div className="Officelogo__SPOWERBI--container">
                                <div className="Officelogo__POWERBI"></div>
                        </div>
                      

                      <div className="Officelogo__stats">
                              <p className='PerkOffice__name'>{Officeperk[4].title}</p>

                              <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[4].Level_Perk} />
                              <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[4].Hours_perk} />
                              <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[4].description_Perk} /> 
                      </div>
                </div>
                


                <div className="Officelogo__SVISIO">
                        <div className="Officelogo__SVISIO--container">
                                <div className="Officelogo__VISIO"></div>
                        </div>
                      

                      <div className="Officelogo__stats">
                              <p className='PerkOffice__name'>{Officeperk[5].title}</p>

                              <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[5].Level_Perk} />
                              <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[5].Hours_perk} />
                              <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[5].description_Perk} /> 
                      </div>
                </div>
                


                <div className="Officelogo__SPP">
                        <div className="Officelogo__SPP--container">
                                <div className="Officelogo__PP"></div>
                        </div>
                      

                      <div className="Officelogo__stats">
                              <p className='PerkOffice__name'>{Officeperk[6].title}</p>

                              <PortafolioOffice mytext={DData[0].Level_Perk}  subtitle= {Officeperk[6].Level_Perk} />
                              <PortafolioOffice mytext={DData[0].Hours_perk}  subtitle={Officeperk[6].Hours_perk} />
                              <PortafolioOffice mytext={DData[0].description_Perk}  subtitle={Officeperk[6].description_Perk} /> 
                      </div>
                </div>
        </div> 
      );
    }
  }
  
  
  export default HerramientasOffice;