import React, { useState } from 'react';
//TODO Referenciar  className="Hamburger__line" despues en el span
function BurguerButton()
{
    //const [menu,setMenu] = useState (false)
   // const toggleMenu = () => { setMenu (!menu) }
   //<div onClick={ toggleMenu } className={`Hamburger  ${menu ? 'open': ''}`}>
    return(
                <div className='Hamburger'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>                
    )
}
export default BurguerButton
