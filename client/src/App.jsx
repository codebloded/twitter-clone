import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../src/components/screens/Login';
import Start from '../src/components/screens/Start';

const Routing = ()=>{
  return(
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route  exact path='/login' component={Login}/>
    </Switch>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
  );
}

export default App;
