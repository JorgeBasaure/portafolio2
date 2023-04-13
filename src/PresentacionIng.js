import React, { Component } from 'react';
import prof from './sample/Profile.json';
import Typed from'react-typed';


class PortafolioDev extends Component 
{
  
  constructor( )
    {
      super( )
      //Separar por tipo de dato
      this.state = {
        show : false, 
        menu : false
    } ;
} ;


  render( ) 
    {
      const textLines = [ this.props.mytext ] ;
      const stateShow = this.state.show ;

    if ( !stateShow ) 
      {
        return (
          <p className="perfil__ing"><Typed strings={ textLines } typeSpeed={ 10 }  startDelay={ 2000 }/></p>
        ) ;
      } ;
    } ;
} ;


class PresentacionDev extends Component {
  //TODO  Poner un for para iterar cada habilidad 
  //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
  render( ) 
  {
    return (
      <div className="profile" id='sector_01'>
        <h1>Presentación</h1>

      <div className='profiletable'>

        <div  className="profiletable--title"><p>{ prof[0].title }</p></div>

          <div className='profiletable__Spersonal'>
            <div className="profiletable--personal"></div>
            <div  className="profiletable--Pparagraph"><PortafolioDev mytext={ prof[0].description } /></div>
        </div>

        <div  className="profiletable--title"><p>{ prof[1].title }</p></div>
        
        <div className='profiletable__Sacademy'>
            <div className="profiletable--academy"></div>
            <div  className="profiletable--Aparagraph"><PortafolioDev mytext={ prof[1].description } /></div>
        </div>

        <div className="profiletable--title"><p>{prof[2].title}</p></div>    

            <div className='profiletable__Sjob'>
                <div className="profiletable--job"></div>
                <div  className="profiletable--Jparagraph"><PortafolioDev mytext={prof[2].description} /></div>
            </div>
        </div> 
      </div>
    ) ;
  } ;
} ;


export default PresentacionDev;