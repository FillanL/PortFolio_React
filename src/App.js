import React from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

import Nav from './Containers/Nav';
import Content from './Containers/Content';
import Footer from './Containers/Footer';

import './Scss/App.scss';

library.add(fab, faBars)

function App() {
  // let width = window.innerWidth;
// || document.documentElement.clientWidth
// || document.body.clientWidth;
  
// console.log(width)
  return (
    <>
      <Nav />
      <Content/>
      <Footer/> 
    </>
  );
}

export default App;
