import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Container
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
    signInWithEmailAndPassword as signIn
} from 'firebase/auth'
import { auth } from '../services/firebase'
import MyAlert from '../components/MyAlert';

const logoLogin = '../images/logoLogin.svg'
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

    const [alertOpened, setAlertOpened] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [typeAlert, setTypeAlert] = useState('')

    function handleAlert() {
        setAlertOpened((prevState) => !prevState)
    }

    //Login com email e senha    
    const login = () => {
        signIn(auth, email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('email', user.email)


            })
            .catch((error) => {
                if (email === '' || pass === '') {
                    setMsgAlert('Email e senha precisam ser preenchidos')
                    setTypeAlert('error')
                    handleAlert()
                } else {
                    setMsgAlert('Dados invalidos, verifique!')
                    setTypeAlert('error')
                    handleAlert()
                }
            })
    }

    return (
        <Box className={classes.root}>
            <Container maxWidth="xs">
                <MyAlert
                    open={alertOpened}
                    onClose={handleAlert}
                    msg={msgAlert}
                    type={typeAlert}
                />
                <Container className={classes.box} maxWidth="xs">

                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <img src={logoLogin} alt="Logo" height={200}/>
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
            </Container>
        </Box>
    );
}