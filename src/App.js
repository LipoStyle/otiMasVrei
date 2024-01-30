import './App.css';
import React, { useState } from 'react';

// importing component
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import Footer from './components/footer/Footer';

function App() {
  const [mainBody, setMainBody] = useState("home");
  const changeComponent = (component) =>{
    setMainBody(component)
  }

  return (
    <div className="App">
      <Header changeBody={changeComponent}/>
      <MainBody bodyToPreview={mainBody}/>
      <Footer />
    </div>
  );
}

export default App;
