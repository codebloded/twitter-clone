import React from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import { Button } from "@material-ui/core";

export default function SideBar(){
  return(
    <div className='sidebar'>
    <TwitterIcon className="sidebar__twitterIcon"/>
    <SideBarOption Icon={HomeIcon} text="Home"/>
    <SideBarOption Icon={MailOutlinedIcon} text="Message"/>
    <SideBarOption Icon={NotificationsOutlinedIcon} text="Notifications"/>
    <SideBarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
    <SideBarOption Icon={SubjectOutlinedIcon} text="List"/>
    <SideBarOption Icon={PermIdentityOutlinedIcon} text="Profile"/>
    <Button className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
  
}