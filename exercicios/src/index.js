import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './components/BomDia';

// import Primeiro from './components/Primeiro'
// import Multi from './components/Multiplos'; 
import Multi, { BoaNoite } from './components/Multiplos';
 
ReactDOM.render(
    <div>
        <Multi.BoaTarde nome="Marc"></Multi.BoaTarde>
        <BoaNoite nome="Lipe"></BoaNoite>
    </div>
    , document.getElementById('root'))
