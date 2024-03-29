import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/sass/index.scss';
import App from './App';
import Navegador from './Navigator';
import HerramientasFE from './HerramientasFE';
import HerramientasBE from './HerramientasBE';
import HerramientasIDE from './HerramientasIDE';
import HerramientasOffice from './HerramientasOffice';
import PresentacionDev from './PresentacionIng';
import ManejoSQL from './ManejoBD';
import HerramientasConcept from './HerramientasConcept';
import HerramientasCtrlVer from './HerramientasControlVersiones';
import DatosContacto from './Contacto';
//TODO: Hacer la  seccion de descripción como una lista de habilidades aprendidas.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

        <React.StrictMode>      
                <Navegador/>
                <PresentacionDev/>
                <HerramientasFE />
                <HerramientasBE/>
                <HerramientasIDE/>
                <HerramientasOffice/>
                <ManejoSQL/>
                <HerramientasConcept/>
                <HerramientasCtrlVer/>
                <DatosContacto/>
                <App />
        </React.StrictMode>
        
);

