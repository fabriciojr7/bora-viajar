import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
    signInWithEmailAndPassword as signIn
} from 'firebase/auth'
import { auth } from '../services/firebase'
const urlCapa = '../images/capa-login.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${urlCapa}) no-repeat center center fixed`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        backgroundColor: 'white',
        border: '1px',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 0 1em black'
        
    }
}))

export default function Login() {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    //Login com email e senha    
    const login = () => {
        signIn(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('email', user.email)
              
                
            })
            .catch((error) => {             
                alert(error.message)
            })
    }
    
    return (
        <Box className={classes.root}>
            <Container className={classes.box} maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h2">
                        Bora Viajar
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Informe seu email"
                            onChange={(e) => { setEmail(e.target.value) }}
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color=""
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Informe sua senha"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => { setPass(e.target.value) }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={login}
                        >
                            Acessar o Bora Viajar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="/registro" variant="body2">
                                    {"Ainda não possui uma conta? Faça o cadastro"}
                                </Link>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
}