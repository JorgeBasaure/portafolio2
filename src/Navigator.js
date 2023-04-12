import React, { Component } from 'react';
//Colocar el snippetcomplementario en SASS llamado " asds"

//TODO: Hacer un evento que ponga en posición neutral a "MySlides" cuando esté fuera del modo responsivo.





class NavegadorResp extends Component
{
constructor(){
    super()
    this.state={
        show: false, 
        menu:false,
        index:1
    }
}

    IndexDotClick = () => {

        const containerOpen = document.querySelector('.Navigator__container__mySlides')
        const dotOpen = document.querySelectorAll(".Navigator__dot.open")
        let calc = 100/dotOpen.length;
        const xIndex = calc *4;

        dotOpen.forEach( ( cadaDotOpen,i ) => 
        {
            dotOpen[i].addEventListener( 'click',()=>{

                const op = xIndex - (calc*i);


                    containerOpen.style.transform = `translateX(${ op }%)`


                    dotOpen.forEach( ( cadaDotOpen,i ) => {
                            dotOpen[i].classList.remove('on')
                       
                        })    
                        dotOpen[i].classList.add('on')

                })
        } )
       
      };

    mySlidesReset = () =>
        {
            const containerOpen = document.querySelector('.Navigator__container__mySlides');
            containerOpen.addEventListener( 'mouseover',()=>{
            containerOpen.style.transform = `translateX(${ 0 }%)`
            });
        };

//TODO: Arrastrar el carrousel tal cual como la versión de "DotClicks"


    indexArrowClickPlus = () =>
    {
        const count = this.state.index;
        this.setState( { index : count + 1 } )
        //this.setState( prevState => ( { index: prevState.index+ 1 } ))

        let value = count + 1
        const containerOpen = document.querySelector('.Navigator__container__mySlides')
        const arrowOpen = document.querySelectorAll(".Navigator__links")
      
        if ( value > arrowOpen.length )
        {
            value = value - arrowOpen.length
            this.setState( { index:count - ( arrowOpen.length - 1 ) } )
        }
        let calc = 100 / arrowOpen.length;
        const xIndex = calc * 4;
        const op = ( xIndex + calc ) + ( calc * -value )

            containerOpen.style.transform = `translateX(${ op }%)` 
         
    };
    indexArrowClickMinus = () =>
    {
        const count = this.state.index;
        this.setState( { index : count - 1 } )
        //this.setState( prevState => ( { index: prevState.index -1 } ))

        let value = count - 1
        let reset = 1
        const containerOpen = document.querySelector('.Navigator__container__mySlides')
        const arrowOpen = document.querySelectorAll(".Navigator__links")
    
        if ( value < reset )
        {
            value = value + arrowOpen.length
            this.setState( { index:count + ( arrowOpen.length - 1 ) } )
        }

            let calc = 100 / arrowOpen.length;
            const xIndex = calc * 4;
            const op = ( xIndex + calc ) + ( calc * -value )

            containerOpen.style.transform = `translateX(${ op }%)`


    };

        render()
            {
                
                const toggleMenu = !this.state.menu
                const Menu = this.state.menu

                if (!this.state.show)
                
                    {
                        return(
                        
                        <nav  className='Navigator' id='myNavigator'> 
                        
                            <div   className={  `Navigator__container ${  Menu ? 'open': '' } `  } >

                                <div className='Navigator__container__mySlides'> 
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

                                <div>
                                        <p   onClick={   ( )=> this.indexArrowClickMinus( )  }     className={  `Navigator__button__prev ${  Menu ? 'open': '' } `  } >❮</p>
                                    </div>
<p   className='prueba'>{this.state.index}</p>
                                <div className='Navigator__listdot' >
                                
                                <ul className={  `Navigator__dot__container ${  Menu ? 'open': '' } `  } >
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  this.IndexDotClick()   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                </ul>

                                </div>

                                <div>
                                        <p  onClick={   ( )=> this.indexArrowClickPlus( )   }     className={  `Navigator__button__next ${  Menu ? 'open': '' } `  }  >❯</p>
                                    </div>

                            </div>

                            <div className='Navigator__responsive'>
                                <div onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  className={  `Hamburger ${  Menu ? 'open': '' } `  }>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
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
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
    )
}
export default BurguerButton
*/