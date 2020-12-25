import React from 'react';
import SideBar from './layout/SideBar';
import Widgets from './layout/Widgets';
import ProfileBox from './layout/ProfileBox'
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Tweets from './layout/Tweets'

export default function Profile(){
    return(
        <div className="app">
        <SideBar/>
        <div className="feed">
            <div className='feed__header'>
            <Link style={{textDecoration:'none', color:"black" }} to='/home'><ArrowBackOutlinedIcon style={{marginLeft:'12px', marginRight:'10px'}}  fontSize="default"/></Link>
            <h1>icodeRohan</h1>
            </div>
        <ProfileBox/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        <Tweets/>
        
        </div>
        <Widgets/>
        </div>
    )
}