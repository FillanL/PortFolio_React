import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import Nav from './Containers/Nav';
import Content from './Containers/Content';
import Footer from './Containers/Footer';

library.add(fab, faBars)

function App() {
  return (
    <div className="App">
      <Nav />
      <Content/>
      <Footer/> 
    </div>
  );
}

export default App;
