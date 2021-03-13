import { Button, Card, Container, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import React from 'react';
import './index.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1)
        },
      },
  }));

const Login = () => {
    const classes = useStyles();
    return (
        <>
            <div className="login">
                <Container>
                    <h2 className="heading-login">Login</h2>
                    <Card className="main">
                        <form className={classes.root} noValidate autoComplete="off">
                            <FormControl fullWidth >
                                <TextField id="email" label="Email" variant="outlined" value="" />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField id="password" label="password" type="password" value="" variant="outlined" />
                            </FormControl>
                            <FormControl fullWidth>
                                <Button variant="contained" color="primary" className="btn-login">
                                    Login
                                </Button>
                                <Link to="/sign-up" className="login-link">Don't have an account? Sign up.</Link>
                            </FormControl>
                        </form>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default Login;