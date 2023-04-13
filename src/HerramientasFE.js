import React, {Component} from 'react';
import FEperk from './sample/PerkFE.json'
import DData from './sample/DescData.json'
import Typed from'react-typed';


class PortafolioFE extends Component
{

  constructor( )
  {
      super( ) ;
  //Separar por tipo de dato
      this.state = {
          show : false, 
          menu : false
      } ;
  } ;


   render( )
    {
      const subtitleLines = [ this.props.subtitle ] ;
      const mytextLines = [ this.props.mytext ] ;
      const stateShow = this.state.show ;

        if ( !stateShow )
        {
            return (
              <p className="PortFE__specs">{ mytextLines } <Typed strings={ subtitleLines }  typeSpeed={ 10 } startDelay={ 5000 } /></p>
          ) ;
        } ;   
      } ;
} ;

class HerramientasFE extends Component
{

  render( )
  {
    return(

      <div className='PerkFe' id='sector_02'>

        <div className='PerkFe__title'><h1>Habilidades Front-End</h1></div>
        
          <div  className='FElogo__SHTML5'>
                    <div  className='FElogo__SHTML5--container'>
                        <div className="FElogo__HTML5"> </div>
                    </div>
                    <div className="FElogo__stats">
                          <p className='PerkFe__name'>{ FEperk[0].title }</p>

                          <PortafolioFE mytext={ DData[ 0 ].Level_Perk }  subtitle= { FEperk[ 0 ].Level_Perk } />
                          <PortafolioFE mytext={ DData[ 0 ].Hours_perk }  subtitle={ FEperk[ 0 ].Hours_perk } />
                          <PortafolioFE mytext={ DData[ 0 ].description_Perk }  subtitle={ FEperk[ 0 ].description_Perk } /> 
                  </div>
            </div>
        
        <div className='FElogo__Styles'>

                <div className='FElogo__Styles--container'>
                    <div className='FElogo__CSS'></div>
                    <div  className='FElogo__PLUS'><p>+</p></div>
                    <div  className="FElogo__SASS"></div>
                </div>

                  <div className="FElogo__stats">
                            < p className='PerkFe__name'>{ FEperk[ 1 ].title }</p>

                            <PortafolioFE mytext={ DData[ 0 ].Level_Perk }  subtitle= { FEperk[ 1 ].Level_Perk } />
                            <PortafolioFE mytext={ DData[ 0 ].Hours_perk }  subtitle={ FEperk[ 1 ].Hours_perk } />
                            <PortafolioFE mytext={ DData[ 0 ].description_Perk }  subtitle={ FEperk[ 1 ].description_Perk } /> 
                  </div>
        </div>
        
        <div className='FElogo__SJS'>
                <div className='FElogo__SJS--container'>
                      <div className="FElogo__JS"></div>
                </div>
                  
                  <div className="FElogo__stats">
                          <p className='PerkFe__name'>{ FEperk[ 2 ].title }</p>

                          <PortafolioFE mytext={ DData[ 0 ].Level_Perk }  subtitle= { FEperk[ 2 ].Level_Perk } />
                          <PortafolioFE mytext={ DData[ 0 ].Hours_perk }  subtitle={ FEperk[2].Hours_perk } />
                          <PortafolioFE mytext={ DData[ 0 ].description_Perk }  subtitle={ FEperk[ 2 ].description_Perk } /> 
                  </div>
        </div>
        
        <div  className='FElogo__SPHP'>
            <div  className='FElogo__SPHP--container'>
              <div  className="FElogo__PHP"></div>
            </div>
            
            <div className="FElogo__stats">
                      <p className='PerkFe__name'>{ FEperk[ 3 ].title }</p>

                      <PortafolioFE mytext={ DData[ 0 ].Level_Perk }  subtitle= { FEperk[ 3 ].Level_Perk } />
                      <PortafolioFE mytext={ DData[ 0 ].Hours_perk }  subtitle={ FEperk[ 3 ].Hours_perk } />
                      <PortafolioFE mytext={ DData[ 0 ].description_Perk }  subtitle={ FEperk[ 3 ].description_Perk } /> 
            </div>
        </div>
        
        <div className="FElogo__SREACT">
        <div className="FElogo__SREACT--container">
          <div className="FElogo__REACT"></div>
        </div>
          
                <div className="FElogo__stats">
                      <p className='PerkFe__name'>{ FEperk[ 4 ].title }</p>
        
                      <PortafolioFE mytext={ DData[ 0 ].Level_Perk }  subtitle= { FEperk[ 4 ].Level_Perk } />
                      <PortafolioFE mytext={ DData[ 0 ].Hours_perk }  subtitle={ FEperk[ 4 ].Hours_perk } />
                      <PortafolioFE mytext={ DData[ 0 ].description_Perk }  subtitle={ FEperk[ 4 ].description_Perk } /> 
                </div>
            </div>
        
      </div> 
    ) ;
  } ;
}  ;


export default HerramientasFE ;


