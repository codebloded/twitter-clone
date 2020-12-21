import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import TwitterIcon from "@material-ui/icons/Twitter"



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
    form: {
        display: 'flex',
        flexDirection: 'column',
        color: 'white'
    },
    btn: {
        margin: '4px'
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        width: '100vw',

    },
    txt: {
        fontWeight: 'bold',

    },
    mainDiv: {
        paddingTop: '100px',
        paddingBottom: '100px',
        backgroundColor: "rgb(26, 27, 31)",
        color: 'white',
        // textAlign: 'center'
    },
    img: {
        height: "90vh",
        width: "fixContent"
    },
    box: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

export default function SignUp(props) {
  
    const classes = useStyles();

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={props.openx}
                onClose={props.cl}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openx}>

                    <Paper >
                        <Container className={classes.mainDiv}>
                            <TwitterIcon fontSize="large" style={{ textAlign: 'center'}} color="primary" />
                            <Typography variant="h4" component="h1" className={classes.txt}>
                                Create Your Account.
                            </Typography>
                            <form noValidate autoComplete="off">
                                <Container className={classes.form} style={{ textAlign: 'center'}}>
                                    <TextField id='standard-basic'  label='Name' />
                                    <br></br>
                                    <TextField id='standard-basic'  label='Email' />
                                    <br></br>
                                    <Typography variant="h6" component="h6" className={classes.txt}>
                                        Date of Birth.
                            </Typography>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else</p>
                                    <br></br>
                                   
                                        <TextField
                                            id="date"
                                            label="Birthday"
                                            color='secondary'
                                            type="date"
                                            defaultValue="2017-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                <br></br>
                            <Button className={classes.btn} variant="contained" color="primary">Sign Up</Button>
                                </Container>
                            </form>
                            <p style={{ textAlign: 'center'}}>Have an account?</p>
                        </Container>
                    </Paper>

                </Fade>
            </Modal>
        </div>
    );
}
