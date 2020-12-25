import { Avatar, Button } from "@material-ui/core"
import React from "react"
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import LinkIcon from '@material-ui/icons/Link';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

export default function ProfileBox() {
    return (
        <div className="profile__box">
            <div className="profile__cover">
                <img src="https://pbs.twimg.com/profile_banners/1272757579643449344/1592923065/1500x500" />
            </div>
            <div className="profile__main">
                <div className="profile__upper">
                    <img src="https://avatars2.githubusercontent.com/u/48005711?s=460&u=abaa04acd2f5c5e72173ff7201ca4a1abcd7a509&v=4" />

                    <div>

                        <Button className="edit__btn" variant="contained">
                            Edit Image
                        </Button>
                    </div>
                </div>
                <div className="profile__info">
                    <h2>icodeRohan
                    </h2>
                    <span>@rohanxajput</span>
                    <div className="para">A Prototypical computer nerdMan technologist
Liv'in with full of negative vibesNegative squared cross mark
Stay away cuz i==toxic for youExpressionless faceExpressionless face
Python and JavaScript enthusiasts
WeB D | Express|Node</div>

                    <div className="profile__lastDiv">

                        <div className="profile__tags1">
                            <h4>
                                <span className="icons">
                                    <RoomOutlinedIcon fontSize="small" />
                                </span>
                        New Delhi, India
                        </h4>
                            <h4>
                                <span className="icons" >
                                    <CakeOutlinedIcon  fontSize="small" />
                                </span>
                        Born January 16, 2001
                        </h4>
                        </div>

                        <div className="profile__tags1">
                            <h4>
                           <span className="icons" >
                            <LinkIcon fontSize="small"/>
                        </span>
                        <a href="https://codebloded.github.io/icoderohan/" target="__blank"> codebloded.github.io/icoderohan/</a></h4>
                            <h4>
                            <span className="icons">
                            <EventOutlinedIcon   fontSize="small"/>
                        </span>
                            Joined June 2020</h4>
                        </div>
                    </div>
                    <div className="profile__followx">
                        <h3>
                            122 <span>Following</span>
                        </h3>
                        <h3>
                            22 <span>Followers</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}