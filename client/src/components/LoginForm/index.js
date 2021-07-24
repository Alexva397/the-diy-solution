import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { GoogleLoginButton, FacebookLoginButton, TwitterLoginButton } from "react-social-login-buttons";
import auth from "../../utils/auth";
import axios from "axios";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Alexva397/the-diy-solution">
                JP Eiler, Alex Vadeboncoeur, Katie Patterson, Katy Chadwell
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(6),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#fc4a1a",
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    socialBtn: {
        marginTop: "1em",
    },
    errMssg: {
        marginTop: "10em",
        textAlign: "center"
    }
}));

function SignIn() {
    const classes = useStyles();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    // const [errorMessage, setErrorMessage] = useState(false);
    const [open, setOpen] = React.useState(false);

    // useEffect(() => {
    //     // setErrorMessage(false);
    // })

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("/api/user/login", { username: loginUsername, password: loginPassword })
        .then((res) => {
            console.log(res)
            if (res.data.redirect === "/landing") {
                // setErrorMessage(false);
                setOpen(false);
                window.location = "/landing";
            } else {
                // setErrorMessage(true);
                setOpen(true);
            }
        });

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                    <strong>Username</strong> or <strong>Password</strong> is incorrect.               
                </Alert>
            </Snackbar>
            {/* <Snackbar open={errorMessage} autoHideDuration={6000}>
                <Alert severity="error">
                    <strong>Username</strong> or <strong>Password</strong> is incorrect.               
                </Alert>
            </Snackbar> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        onChange={e => setLoginUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={e => setLoginPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container justifycontent="flex-end">
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                First time? Click here to sign up.
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <div className={classes.socialBtn}>
                    <GoogleLoginButton
                        onClick={auth.googleLogin}
                    />
                    <FacebookLoginButton 
                        onClick={auth.facebookLogin}
                    />
                    <TwitterLoginButton
                        onClick={auth.twitterLogin}
                    />
                </div>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignIn;