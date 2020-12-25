import React from 'react'
import TweetBox from './TweetBox';
import Tweets from './Tweets';
import '../../../tweet.css'


export default function Feeds(){
    return(
        <div className='feed'>
            <div className="feed__header">
                <h1>Home</h1>
            </div>
            <TweetBox/>
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
    )
}