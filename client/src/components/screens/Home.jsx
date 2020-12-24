import React from 'react';
import SideBar from './layout/SideBar';
import Feeds from './layout/Feeds';
import Widgets from './layout/Widgets';


const Home = ()=>{
    return(
        <React.Fragment>
        <div className="app">

            {/* SideBar */}
            <SideBar className="sidebar"/>

            {/* Feeds */}
            <Feeds/>
           
            {/* Widgets */}
            <Widgets/>

            {/* Tweets */}
        </div>
        </React.Fragment>
    )
}
export default Home;