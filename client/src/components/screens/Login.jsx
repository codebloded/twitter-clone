import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'
import {Link, useHistory} from 'react-router-dom'
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
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory()

    const postCredentials = () => {
        fetch("http://localhost:4000/login", {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error(`${data.error}`);
                } else {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user))
                    toast.success("Login sucessfully")
                    history.push('/');
                }
            }).catch(err => {
                console.log(err);
            })
    }



    return (
        <div>
        <ToastContainer/>
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
                                <TextField
                                    inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                     id='standard-basic' label='Email' />
                                <TextField
                                    inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                        value={password}
                                        type="password"
                                        onChange={(e)=>setPassword(e.target.value)}
                                     id='standard-basic' label='Password' />
                            </Container>
                            <Button className={classes.btn}
                                onClick={() => postCredentials()}
                                variant="contained" color="primary">Login</Button>
                        </form>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                                <p style={{ textAlign: 'center' }}>Don't have an account?</p></Link>
                    </Container>
                </Paper>
            </Modal>
        </div>
    );
}
