import React from 'react';
import './App.css';
import './sidebar.css';
import './feeds.css';
import './tweet.css';
import './profile.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../src/components/screens/Login';
import Start from '../src/components/screens/Start';
import Home from '../src/components/screens/Home';
import Profile from '../src/components/screens/Profile';


const Routing = ()=>{
  return(
    <Switch>
      <Route exact path='/' component={Start}/>
      <Route  exact path='/login' component={Login}/>
      <Route  exact path='/home' component={Home}/>
      <Route  exact path='/profile' component={Profile}/>
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
