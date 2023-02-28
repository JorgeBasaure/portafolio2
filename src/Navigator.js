import React, { Component } from 'react';

class Navegador extends Component
{
    state = { show: false }
    render()
    {
     if (!this.state.show)
     {
        return(
            <nav className='Navigator'>
                <div className='Navigator__container'>
                    <a href="#sector_01" className='Navigator__links'>Presentación</a>
                    <a href="#sector_02" className='Navigator__links'>Habilidades en Front-End</a>
                    <a href="#sector_03" className='Navigator__links'>Habilidades en Back-End</a>
                    <a href="#sector_04" className='Navigator__links'>Habilidades en IDE</a>
                    <a href="#sector_05" className='Navigator__links'>Habilidades en Office</a>
                    <a href="#sector_06" className='Navigator__links'>Habilidades en BB.DD.</a>
                    <a href="#sector_07" className='Navigator__links'>Habilidades en Conceptos</a>
                    <a href="#sector_08" className='Navigator__links'>Habilidades en Control de versiones</a>
                    <a href="#sector_09" className='Navigator__links'>Contacto</a>
                </div>
            </nav>
        )
     }
    }
}
export default Navegador;