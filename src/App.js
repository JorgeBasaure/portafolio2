import React, {Component} from 'react';
import logo from './logo.svg';
import '../src/sass/App.scss';

//TODO: Administrar las clases, id, y todo lo que tenga que ver con las identificaciones de etiquietas para SASS y CSS3

class App extends Component
{

        render()
        {

                return (

                        <div>
                                <img src={logo} className="App-logo" alt="logo" />
                                <em>Portafolio en constante desarrollo. Por favor, espere.</em>
                        </div>

                ) ;
        } ;
} ;

export default App ;
