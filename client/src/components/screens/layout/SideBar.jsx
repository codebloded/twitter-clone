import React from "react"
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home'
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SubjectOutlinedIcon from '@material-ui/icons/SubjectOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import { Backdrop, Button, Fade, makeStyles, Modal } from "@material-ui/core";
import { Link } from "react-router-dom";
import TweetBox from '../layout/TweetBox'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
export default function SideBar(){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <>
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className="tweetbox__modal">
          <TweetBox/>
        </div>
        </Fade>
      </Modal>
    </div>
    <div className='sidebar'>
    <TwitterIcon className="sidebar__twitterIcon"/>
    <Link style={{textDecoration:'none', color:"black"}} to="/home"><SideBarOption Icon={HomeIcon} text="Home"/></Link>
    <SideBarOption Icon={MailOutlinedIcon} text="Message"/>
    <SideBarOption Icon={NotificationsOutlinedIcon} text="Notifications"/>
    <SideBarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
    <SideBarOption Icon={SubjectOutlinedIcon} text="List"/>
    <Link style={{textDecoration:'none', color:"black"}} to='/profile'>
    <SideBarOption Icon={PermIdentityOutlinedIcon} text="Profile"/></Link>
    <Button className='sidebar__tweet' onClick={handleOpen} fullWidth>Tweet</Button>
    </div>
    </>
  )
  
}