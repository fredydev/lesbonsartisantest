import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route,Redirect} from "react-router-dom";
import Main from './components/MainComponent';
import UploadResult from './components/UpladResult';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/success" component={UploadResult} />
        
      </Switch>
    </div>
  );
}

export default App;
