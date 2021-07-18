import React, { useState } from "react";
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
// import GoogleButton from "react-google-button";
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";
// import API from "../../utils/API";
import axios from "axios";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/Alexva397/the-diy-solution">
                JP Eiler, Alexander Vadeboncoeur, Katie Patterson, Katy Chadwell
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(20),
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
}));

function SignIn() {
    const classes = useStyles();

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const googleLogin = () => {
        window.open("http://localhost:3001/api/user/auth/google", "_self");
    }

    const facebookLogin = () => {
        window.open("http://localhost:3001/api/user/auth/facebook", "_self");
    }

    const handleSubmit = e => {
        e.preventDefault();

        axios.post("/api/user/login", { username: loginUsername, password: loginPassword })
        .then((res) => {
            if (res.data.redirect === "/landing") {
                window.location = "/landing";
            } else if (res.data.redirect === "/login"){
                window.location = "/login";
            }
        });

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
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
                <GoogleLoginButton
                    className={classes.socialBtn}
                    onClick={googleLogin}
                />
                <FacebookLoginButton 
                    className={classes.socialBtn}
                    onClick={facebookLogin}
                />
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default SignIn;