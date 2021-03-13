import { Button, Card, Checkbox, Container, FormControl, FormControlLabel } from '@material-ui/core';
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

const SignUp = () => {
    const classes = useStyles();
    return (
        <>
            <div className="sign-up">
                <Container>
                    <h2 className="heading-login">Sign Up</h2>
                    <Card className="main">
                        <form className={classes.root} noValidate autoComplete="off">
                            <FormControl fullWidth >
                                <TextField id="name" label="Name" variant="outlined" value="" />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField id="email" label="Email" variant="outlined" value="" />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField id="password" label="password" type="password" value="" variant="outlined" />
                            </FormControl>
                            <FormControl fullWidth >
                                <TextField id="cfmpassword" label="​confirm password" type="password" value="" variant="outlined" />
                            </FormControl>
                            <FormControl>
                                <FormControlLabel 
                                    className="check"
                                    control={
                                        <Checkbox                  
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label="Do you agree"
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Button variant="contained" color="primary" className="btn-login">
                                    Login
                                </Button>
                                <Link to="/login" className="login-link">Already have an account? Login.</Link>
                            </FormControl>
                        </form>
                    </Card>
                </Container>
            </div>
        </>
    );
}

export default SignUp;