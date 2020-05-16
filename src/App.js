import React from 'react';
import './App.css';
import HeaderComponent from './containers/Header/HeaderComponent';
import BodyComponent from './containers/Body/BodyComponent';
import MainComponent from './containers/Main/MainComponent';
import FooterComponent from './containers/Footer/FooterComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <BodyComponent />
      <MainComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
