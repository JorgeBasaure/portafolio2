import React, { Component} from 'react';
//Colocar el snippetcomplementario en SASS llamado " asds"
//Grande = Navigator__container open
//Punto = Navigator__dot open
const containerOpen = document.querySelector('.Navigator__container__mySlides')
const dotOpen = document.querySelectorAll(".Navigator__dot.open")
//TODO: Mejorar esta funcion.
dotOpen.forEach( ( cadaDotOpen,i ) => 
        {
            dotOpen[i].window.addEventListener( 'click',()=>{
                    let calc = 11.1
                    let pos = i
                    let op = 44.4 - (calc*pos)
                    containerOpen.style.transform = `translateX(${ op }%)`

                    dotOpen.forEach( ( cadaDotOpen,i ) => {
                            dotOpen[i].classList.remove('on')
                        })    
                        dotOpen[i].classList.add('on')
                })
        } )

class NavegadorResp extends Component
{

        state ={ 
                        show: false, 
                        menu:false,

                    }
                    



        render()
            {

                const toggleMenu = !this.state.menu
                const Menu = this.state.menu
                const containerOpen = document.querySelector('.Navigator__container__mySlides')
const dotOpen = document.querySelectorAll(".Navigator__dot.open")
        

                if (!this.state.show)
                    {
                        return(
                        
                        <nav  className='Navigator' id='myNavigator'> 
                        
                            <div className={  `Navigator__container ${  Menu ? 'open': '' } `  } >

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
                                        <p className={  `Navigator__button__prev ${  Menu ? 'open': '' } `  } >❮</p>
                                    </div>

                                <div className='Navigator__listdot'>

                                <ul className={  `Navigator__dot__container ${  Menu ? 'open': '' } `  } >
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ 44.4 }%)`   }  className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ 33.3 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ 22.2 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ 11.1 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ 0 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ -11.1 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ -22.2 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ -33.3 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                    <li  onClick={   ()=>  containerOpen.style.transform = `translateX(${ -44.4 }%)`   }   className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></li> 
                                </ul>

                                </div>

                                <div>
                                        <p  className={  `Navigator__button__next ${  Menu ? 'open': '' } `  }  >❯</p>
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


<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>
*/




