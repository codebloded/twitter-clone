import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import { Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import TwitterIcon from "@material-ui/icons/Twitter"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        textAlign: 'center'
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

export default function Login() {
    const classes = useStyles();
    const rootRef = React.useRef(null);

   
    return (
        <div>
            <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        container={() => rootRef.current}
      >
              
                    <Paper >
                        <Container className={classes.mainDiv}>
                            <TwitterIcon fontSize="large" color="primary" />
                            <Typography variant="h4" component="h1" className={classes.txt}>
                                See what's happening in the world right now
                            </Typography>
                            <form>
                                <Container className={classes.form}>
                                    <TextField id='standard-basic' label='username' />
                                    <TextField id='standard-basic' label='password' />
                                </Container>
                            </form>
                            <Button className={classes.btn} variant="contained" color="primary">Login</Button>
                            <p>Have an account?</p>
                        </Container>
                    </Paper>
            </Modal>
        </div>
    );
}
