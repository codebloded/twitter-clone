import { Avatar } from "@material-ui/core"
import React from "react"
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'; 
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@material-ui/icons/RepeatOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
export default function ({
    text,
    image,
    username,
    displayName,
    idVerified,
    avatar
}){
    return(
        <div className="tweet">
            <div className="tweet__avatar">
                <Avatar/>
            </div>
            <div className="tweet__body">
                <div className="tweet__header">
                    <div className="tweet__headerText">
                        <h4>
                            Rohan <span className="tweet__username"><VerifiedUserIcon className="tweet__badge"/>@rohanxajput</span>
                        </h4>
                    </div>
                    <div className="tweet__description">
                        <p>Hey are you fucking crazt while making this twitter clone</p>
                    </div>
                </div>
                <img src="https://i.imgflip.com/3jfdee.jpg"/>
                <div className="tweet__footer">
                    <ChatBubbleOutlinedIcon />
                    <RepeatOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/>
                    <PublishOutlinedIcon/>
                </div>
            </div>

        </div>
    )
}