import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Container, Paper, TextField, Typography, Snackbar, SnackbarContent } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab/'
import TwitterIcon from "@material-ui/icons/Twitter"
import { Link, useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify'




const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
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
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [dob, setDOb] = useState();

    const postCredentials = () => {

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            toast.error('Invaild Email');
            return
        }
        fetch("http://localhost:4000/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                dob: dob
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.info(`${data.error}`)
                } else {
                    toast.success(`${data.message}`);
                    history.push('/login');
                }
            }).catch(err => {
                console.log(err);
            })
    }

    const classes = useStyles();

    return (
        <div>
            <ToastContainer />
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
                            <TwitterIcon fontSize="large" style={{ textAlign: 'center' }} color="primary" />
                            <Typography variant="h4" component="h1" className={classes.txt}>
                                Create Your Account.
                            </Typography>
                            <form noValidate autoComplete="off">
                                <Container className={classes.form} style={{ textAlign: 'center' }}>
                                    <TextField
                                        inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                        style={{ color: 'white' }}
                                        onChange={(e) => setName(e.target.value)}
                                        value={name} id='standard-basic'
                                        label='Name' />
                                    <br></br>
                                    <TextField
                                        inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                        id='standard-basic'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        label='Email' />
                                    <br></br>
                                    <TextField
                                        inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                        id='standard-basic'
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password} label='passowrd' />
                                    <br></br>

                                    <Typography variant="h6"
                                        inputProps={{ style: { fontFamily: 'Arial', color: 'white' } }}
                                        component="h6" className={classes.txt}>
                                        Date of Birth.
                            </Typography>
                                    <p>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else</p>
                                    <br></br>

                                    <TextField
                                        style={{ color: 'white' }}
                                        id="date"
                                        label="Birthday"
                                        color='secondary'
                                        type="date"
                                        value={dob}
                                        onChange={(e) => setDOb(e.target.value)}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <br></br>
                                    <Button className={classes.btn} variant="contained"
                                        onClick={() => postCredentials()}
                                        color="primary">Sign Up</Button>
                                </Container>
                            </form>
                            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                <p style={{ textAlign: 'center' }}>Already Have an account?</p></Link>
                        </Container>
                    </Paper>

                </Fade>
            </Modal>
        </div>
    );
}
