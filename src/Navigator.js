import React, { Component} from 'react';
//Colocar el snippetcomplementario en SASS llamado " asds"
//Grande = Navigator__container open
//Punto = Navigator__dot open
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
                            <div>
                                        <p className={  `Navigator__button__prev ${  Menu ? 'open': '' } `  } >❮</p>
                                    </div>
                                <div className='Navigator__container__mySlides'> 
                                <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_01" className='Navigator__links'>Presentación</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_02" className='Navigator__links'>Habilidades en Front-End</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_03" className='Navigator__links'>Habilidades en Back-End</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_04" className='Navigator__links'>Habilidades en IDE</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_05" className='Navigator__links'>Habilidades en Office</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_06" className='Navigator__links'>Habilidades en BB.DD.</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_07" className='Navigator__links'>Habilidades en Conceptos</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_08" className='Navigator__links'>Habilidades en Control de versiones</a>
                                </div>
                                <div className='Navigator__container__mySlides'>
                                    <a onClick={   ()=> this.setState(   { menu: toggleMenu }   )   }  href="#sector_09" className='Navigator__links'>Contacto</a>

                                </div>
                                <div>
                                        <p  className={  `Navigator__button__next ${  Menu ? 'open': '' } `  }  >❯</p>
                                    </div>
                                <div className={  `Navigator__dot__container ${  Menu ? 'open': '' } `  } >
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
                                <span className={  `Navigator__dot ${  Menu ? 'open': '' } `  } ></span> 
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




