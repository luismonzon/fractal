import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(12)
    }
}))


const Login = () => {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container maxWidth='xs'>
            <div className={classes.paper}>
                <form noValidate>
                    <TextField id="email"
                        variant="outlined"
                        type="text"
                        label="Email"
                        fullWidth
                        margin="normal"
                        required
                        onInput={event => setEmail(event.target.value)}
                    ></TextField>
                    <TextField
                        id="password"
                        variant="outlined"
                        type="password"
                        label="Password"
                        fullWidth
                        margin="normal"
                        required
                        onInput={event => setPassword(event.target.value)}
                    ></TextField>
                    <Button
                        fullWidth
                        color="primary"
                        type="submit"
                        variant="contained"
                        margin="normal"
                    >
                        Sign in
                </Button>
                </form>
            </div>

        </Container>
    )
}

export default Login;