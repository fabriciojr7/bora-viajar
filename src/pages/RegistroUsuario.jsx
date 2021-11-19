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
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth'
import { auth } from '../services/firebase'

const urlCapa = '../images/capa-registro.jpg'
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
        border: '1px solid',
        borderRadius: '15px',
        padding: '25px'
    }
}))

export default function SignUp() {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    let history = useHistory()
    const registro = async () => {
        history.push('/')
        try {
            const user = await createUser(auth, email, pass)
            console.log(user)

        } catch (error) {
            console.log(error.message)
        }
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
                    <Typography component="h1" variant="h4">
                        Cadastro Bora Viajar
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Seu melhor email"
                                    name="email"
                                    autoComplete="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Informe sua senha"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => { setPass(e.target.value) }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={registro}
                        >
                            Confirmar Cadastro
                        </Button>
                        <Grid container >
                            <Grid item>
                                <Link href="/" variant="body2">
                                    Já possui uma conta? Faça o login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}