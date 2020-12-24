import { Avatar, Button, TextField } from '@material-ui/core';
import React from 'react';
import PhotoSizeSelectActualOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActualOutlined';
import GifOutlinedIcon from '@material-ui/icons/GifOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

export default function TweetBox(){
    return(
        <div className="tweetbox">
            <div className="tweetbox__input">
                
                <Avatar/>
                <TextField className="input" novalidate
                autoComplete="off" fullWidth id='standard-basic' variant="standard" label="What's happening?"/>
              
            </div>
            <div className="tweetbox__icon">
            <PhotoSizeSelectActualOutlinedIcon/>
                <GifOutlinedIcon/>
                <EqualizerOutlinedIcon/>
                <SentimentSatisfiedOutlinedIcon/>
                <EventOutlinedIcon/>
                <Button className="tweet__btn" variant="contained">Tweet</Button>

            </div>
        </div>
    )
}