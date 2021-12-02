import React, { useState } from 'react';
import {
    Button,
    CssBaseline,
    TextField,
    Link,
    Grid,
    Box,
    Typography,
    Container,
    FormGroup,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth'
import { collection, addDoc } from '@firebase/firestore';
import { auth, db } from '../services/firebase'
import MyAlert from '../components/MyAlert';
import Privacidade from '../components/Privacidade'
import Termos from '../components/Termos';

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
        border: '1px',
        borderRadius: '15px',
        padding: '25px',
        boxShadow: '0 0 1em black'
    }
}))

export default function SignUp() {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [nome, setnome] = useState('')
    const [sobreNome, setsobreNome] = useState('')

    const [alertOpened, setAlertOpened] = useState(false)
    const [msgAlert, setMsgAlert] = useState('')
    const [typeAlert, setTypeAlert] = useState('')
    function handleAlert() {
        setAlertOpened((prevState) => !prevState)
    }

    const [check, setCheck] = useState(true)
    const handleCheck = (e) => {
        setCheck(!e.target.checked)
    }

    const [openedPrivacidade, setOpenedPrivacidade] = useState(false)

    function handlePrivacidade() {
        setOpenedPrivacidade((prevState) => !prevState)
    }

    const [openedTermos, setOpenedTermos] = useState(false)

    function handleTermos() {
        setOpenedTermos((prevState) => !prevState)
    }

    const clienteCollection = collection(db, 'clientes')


    let history = useHistory()
    const registro = async () => {
        try {
            const user = await createUser(auth, email, pass)
            await addDoc(clienteCollection, { nome: nome, sobrenome: sobreNome, email: email, saldo: 0 })
            localStorage.setItem('email', email)
            history.push('/')
        } catch (error) {
            if (email === '' || pass === '' || nome === '' || sobreNome === '') {
                setMsgAlert('Todos os dados precisam ser preenchidos')
                setTypeAlert('error')
                handleAlert()
            } else if (error.code === 'auth/email-already-in-use') {
                setMsgAlert('O e-mail informado já foi utilizado!')
                setTypeAlert('error')
                handleAlert()
            } else {
                setMsgAlert('Dados invalidos, verifique!')
                setTypeAlert('error')
                handleAlert()
            }
        }
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
                        <Typography component="h1" variant="h4">
                            Cadastro Bora Viajar
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="nome"
                                        required
                                        fullWidth
                                        id="nome"
                                        label="Nome"
                                        autoFocus
                                        onChange={(e) => { setnome(e.target.value) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="sobreNome"
                                        label="Sobrenome"
                                        name="sobreNome"
                                        autoComplete="family-name"
                                        onChange={(e) => { setsobreNome(e.target.value) }}
                                    />
                                </Grid>

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

                                <Grid item xs={12} >
                                    <span> Leia as </span>
                                    <Button size="small"
                                        component="button"
                                        underline='hover'
                                        onClick={handlePrivacidade}
                                    >
                                        Política de Privacidade
                                    </Button>
                                    <span> e os </span>

                                    <Button size="small"
                                        component="button"
                                        underline='hover'
                                        onClick={handleTermos}
                                    >
                                        Termos de Uso
                                    </Button>
                                    <span> para se proteger. </span>
                                </Grid>

                                <Grid item xs={12} >
                                    <div class="form-check">
                                        <FormGroup>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox onChange={handleCheck} />
                                                }
                                                label="Li e Aceito" />
                                        </FormGroup>
                                    </div>
                                </Grid>
                            </Grid>
                            <Button disabled={check} id="botaoCadastro"
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
            </Container>

            <Privacidade open={openedPrivacidade} onClose={handlePrivacidade} />
            <Termos open={openedTermos} onClose={handleTermos}/>
        </Box>
    );


}
