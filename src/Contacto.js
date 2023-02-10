import React, {Component} from 'react';
import Contacto from './sample/Contact.json'


class Contact extends Component
{
  state = {show: false}
   render()
    {
      if (!this.state.show){
        return(
          <p id='Contacto'>{this.props.mytext}  {this.props.subtitle}</p>
        )
      }   
    }
}
class Emailr extends Component
{
    state = {show: false}
    render()
     {
       if (!this.state.show){
         return(
            <p id='ContactoMail'>{this.props.mytext} <a href={this.props.subtitle}>{this.props.subtitle}</a></p>
            
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
        <div className="ContactoDev"> <h1>{Contacto[0].title}</h1>
           <ul>
               <li><Contact mytext={Contacto[0].Address}  subtitle= {Contacto[1].Address} /></li>
                <li><Contact mytext={Contacto[0].Contact_phone}  subtitle={Contacto[1].Contact_phone} /></li>
                <li><Emailr mytext={Contacto[0].E_mail}  subtitle={Contacto[1].E_mail} /></li>
           </ul>
        </div> 
      );
    }
  }
  
  
  export default DatosContacto;