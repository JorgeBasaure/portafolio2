import React, {Component} from 'react';
import Contacto from './sample/Contact.json';
import Typed from'react-typed';


class Contact extends Component
{
  state = {show: false}
   render()
    {
      const subtitleLines = [this.props.subtitle];
      if (!this.state.show){
        return(
          <p className='Contacto__specs'>{this.props.mytext}<Typed strings={subtitleLines}  typeSpeed={10} startDelay={5000} /></p>
        )
      }   
    }
}
class Emailr extends Component
{
    state = {show: false}
    render()
     {
      const subtitleLines = [this.props.subtitle];
       if (!this.state.show){
         return(
            <p className='ContactoMail'>{this.props.mytext} <a href={subtitleLines}><Typed strings={subtitleLines}   typeSpeed={10} startDelay={5000} /></a></p>
            
         );
       }
    }
}
class DatosContacto extends Component{
    //TODO  Poner un for para iterar cada habilidad 
    //Hacer para cada clase de habilidad tal cual como eatá implementado este codigo.
    render()
    {
      
      return(
        <div className="ContactoDev" id='sector_09'> 
              <h1  className="ContactoDev__title">{Contacto[0].title}</h1>

              <div className="ContactoDevlogo__SLDIN">
              <div className="ContactoDevlogo__SLDIN--container">
              <div className="ContactoDevlogo__LDIN"></div>
              </div>
                   
                    
                    <div className="ContactoDevlogo__stats">
                          <ul>
                                <li><Contact mytext={Contacto[0].Address}  subtitle= {Contacto[1].Address} /></li>
                                <li><Contact mytext={Contacto[0].Contact_phone}  subtitle={Contacto[1].Contact_phone} /></li>
                                <li><Emailr mytext={Contacto[0].E_mail}  subtitle={Contacto[1].E_mail} /></li>
                          </ul>
                    </div>


              </div>
        </div> 
      );
    }
  }
  
  
  export default DatosContacto;