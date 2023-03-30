import React, { Component} from 'react';
//Colocar el snippetcomplementario en SASS llamado " asds"
class NavegadorResp extends Component
{
    
        state ={ 
                        show: false, 
                        menu:false 
                    }

        render()
            {
                const toggleMenu = !this.state.menu
                const Menu = this.state.menu
                if (!this.state.show)
                    {
                        return(
                        
                        <nav  className='Navigator' id='myNavigator'> 
                            <div className={  `Navigator__container ${  Menu ? 'open': '' } `  } >
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_01" className='Navigator__links'>Presentación</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_02" className='Navigator__links'>Habilidades en Front-End</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_03" className='Navigator__links'>Habilidades en Back-End</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_04" className='Navigator__links'>Habilidades en IDE</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_05" className='Navigator__links'>Habilidades en Office</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_06" className='Navigator__links'>Habilidades en BB.DD.</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_07" className='Navigator__links'>Habilidades en Conceptos</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_08" className='Navigator__links'>Habilidades en Control de versiones</a>
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_09" className='Navigator__links'>Contacto</a>
                            </div>
                            <div className='Navigator__responsive'>
                                <div onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  className={  `Hamburger ${  Menu ? 'open': '' } `  }>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>  
                                </div>
                        </nav>
                        )
                    }                  
            }
}
export default NavegadorResp;
/*Equivalente a función:
import React, { useState } from 'react';
function BurguerButton()
{
    return(
                const [menu,setMenu] = useState (false)
                const toggleMenu = () => { setMenu (!menu) }
                <div onClick={ toggleMenu } className={`Hamburger  ${Menu ? 'open': ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
    )
}
export default BurguerButton
*/




