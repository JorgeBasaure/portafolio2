import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';

/* function WenaCabros(props) 
{
  return(
   <div id="prueba">{props.mytext}</div>
  )
} */

class App extends Component{
  /* state = 
  {
    curriculum: prof
  } */

  render()
  {
    
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <em>Trabajando en ello. Por favor, espere.</em>
      </div>
    );
  }

}

export default App;
