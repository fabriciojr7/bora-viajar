import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
    Box,
    Container,
    CssBaseline,
    TextField,
    Grid,
    Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Divider
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { db } from '../services/firebase'
import { collection, getDocs } from "@firebase/firestore";
import Transacao from "../components/Transacao";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        minHeight: '88vh',
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
    },
    divisao: {
        padding: '20px',
    },
    titleTransacao: {
        textAlign: 'center',
        padding: '20px'
    }
}))


export default function AccountUser() {
    const classes = useStyles()
    const [tipo, setTipo] = useState(1);
    const [user, setUser] = useState([])

    const [dialogOpened, setDialogOpened] = useState(false)
    function handleDialog() {
        setDialogOpened((prevState) => !prevState)
    }
    const formatarReal = (valor) => valor ? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'


    useEffect(() => {
        getDocs(collection(db, 'clientes'))
            .then((snapshot) => {
                let dados = []
                snapshot.forEach((snap) => {
                    dados.push(snap.data())
                })

                const email = localStorage.getItem('email')
                const userData = dados.find(user => user.email === email)
                setUser(userData)

            })
            .catch((error) => {
                alert('Erro ao buscar dados do usuário')
            })

        //eslint-disable-next-line react-hooks/exhaustive-deps        
    }, []);


    const handleChange = (event) => {
        setTipo(event.target.value);
    };

    return (
        <>
            <Header saldo={formatarReal(user?.saldo)} />

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
                            Dados do Cliente
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="nome"
                                        fullWidth
                                        id="nome"
                                        label="Nome"
                                        autoFocus
                                        defaultValue={user && user.nome}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="sobreNome"
                                        label="Sobrenome"
                                        name="sobreNome"
                                        autoComplete="family-name"
                                        defaultValue={user && user.sobrenome}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                        defaultValue={user && user.email}
                                    //onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </Grid>
                            </Grid>

                            <Divider className={classes.divisao} />

                            <Typography className={classes.titleTransacao}>
                                Realizar Transação
                            </Typography>

                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                                        <InputLabel id="tipo">Tipo</InputLabel>
                                        <Select
                                            labelId="tipo-label"
                                            id="tipo"
                                            value={tipo}
                                            label='Tipo'
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={1}>Depósito</MenuItem>
                                            <MenuItem value={2}>Retirada</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} sm={7}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={handleDialog}
                                    >
                                        Adicionar Transação
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Transacao
                open={dialogOpened}
                onClose={handleDialog}
                user={user !== undefined && user}
                type={tipo}
            />


            <Footer />
        </>
    )


}