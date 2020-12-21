import React from "react"
import { Container, makeStyles, Button, Typography } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from "react-router-dom";
import SignUp from './SignUp';
const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',

    },
    txt: {
        fontWeight: 'bolder',
        color: 'black'
    },
    btn: {
        display: 'flex',
        flexDirection: "column",
       
    },
    button:{
        margin: "3px",
        borderRadius: "18px",
         backgroundColor: 'black',
        color: "white",
        width: "-webkit-fill-available",
    },
    link:{
        textDecoration:'none'
    }


}))

const Start = () => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
      setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <div className={classes.box}>

            <div className='App-header'>
            <SignUp opn ={handleOpen} cl={handleClose} openx={open}/>
                <Container maxWidth="lg">
                    <div>
                        <div className={classes.box}>
                            <SearchRoundedIcon fontSize="large" />
                            <h5>Follow your interests.</h5>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className={classes.box}>
                            <GroupIcon fontSize="large" />
                            <h5>Hear what people are talking about.</h5>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <div className={classes.box}>
                            <SmsIcon fontSize="large" />
                            <h5>Join the conversation.</h5>
                        </div>
                    </div>
                </Container>
                <Container fixed >
                    <Typography variant="h4" component="h2" className={classes.txt}>
                        See what's happening in the world right now
       </Typography>
                    <br></br>
                    <p className={classes.txt}>Join twitter today</p>
                    <div className={classes.btn}>
                        <Button variant="contained" color='primary' className={classes.button} onClick={handleOpen}>Sign up</Button>
                       <Link to="/login" className={classes.link}> <Button variant="contained" color="primary"className={classes.button} >Login</Button></Link>
                    </div>
                  
                </Container>
            </div>
        </div>

    )
}
export default Start;