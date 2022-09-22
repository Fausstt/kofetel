import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/App.scss';

import { previewSlider, previewList } from './data/data';

function App(props) {
  return (
    <>
      <Header />
      <Home
        previewImg={previewSlider}
        previewList={previewList}
      />
      <Footer />
    </>
  );
}

export default App;
