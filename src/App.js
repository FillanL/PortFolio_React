import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import Nav from './Containers/Nav';
import Content from './Containers/Content';
import Footer from './Containers/Footer';
// import Webmode from './Components/Webmode';

// import './Scss/App.scss';
// import JsonStyling from './Components/JsonStyling';

library.add(fab, faBars)

function App() {
  // let width = window.innerWidth;
// || document.documentElement.clientWidth
// || document.body.clientWidth;
  
// console.log(width)
  return (
    <div className="App">
      <Nav />
      {/* <Webmode/> */}
      <Content/>
      {/* <JsonStyling/> */}
      <Footer/> 
    </div>
  );
}

export default App;
