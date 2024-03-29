import React, {Component} from 'react';
import CtrlVerperk from './sample/CVersionPerk.json';
import DData from './sample/DescData.json';
import Typed from'react-typed';


class PortafolioCtrlVer extends Component
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
                        return(
                                <p className="PortCtrlVer__specs">{ mytextLines }<Typed strings={ subtitleLines }  typeSpeed={ 10 } startDelay={ 5000 } /></p>
                        ) ;
                } ;   
        } ;
}

class HerramientasCtrlVer extends Component
{
//TODO  Poner un for para iterar cada habilidad 
//Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
        render ( )
        {
                return(

                        <div className='PerkCtrlVer' id='sector_08'>
                                <h1 className='PerkCtrlVer__title'>Habilidades en control de versiones</h1>
                
                                <div className="CtrlVerlogo__SGIT">
                                        <div className="CtrlVerlogo__SGIT--container">
                                                <div className="CtrlVerlogo__GIT"></div>
                                        </div>

                                        <div className="CtrlVerlogo__stats">
                                                <p  className='PerkCtrlVer__name'>{ CtrlVerperk[  0 ].title }</p>

                                                <PortafolioCtrlVer mytext={ DData[ 0 ].Level_Perk }  subtitle= { CtrlVerperk[ 0 ].Level_Perk } />
                                                <PortafolioCtrlVer mytext={ DData[ 0 ].Hours_perk }  subtitle={ CtrlVerperk[ 0 ].Hours_perk } />
                                                <PortafolioCtrlVer mytext={ DData[ 0 ].description_Perk }  subtitle={ CtrlVerperk[ 0 ].description_Perk } />
                                        </div>
                                </div>

                        </div>

                ) ;
        } ;
} ;


export default HerramientasCtrlVer ;