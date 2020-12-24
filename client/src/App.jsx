import React from 'react';
import './App.css';
import './sidebar.css';
import './feeds.css';
import './tweet.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../src/components/screens/Login';
import Start from '../src/components/screens/Start';
import Home from '../src/components/screens/Home';


const Routing = ()=>{
  return(
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route  exact path='/login' component={Login}/>
      <Route  exact path='/home' component={Home}/>
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
