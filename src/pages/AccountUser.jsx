import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  //  Toolbar,
    Box,
    Container,
    CssBaseline,
    TextField,
    Grid,
    //Typography,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from '@mui/material';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
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

export default function AccountUser() {
    const classes = useStyles()
    const [tipo, setTipo] = useState('Depósito');

    const handleChange = (event) => {
        setTipo(event.target.value);
    };
    return (
        <>
            <Header />
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
                        {/* <Typography component="h1" variant="h4">
                            Cadastro Bora Viajar
                        </Typography> */}
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
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="sobreNome"
                                        label="Sobre Nome"
                                        name="sobreNome"
                                        autoComplete="family-name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="cpf"
                                        required
                                        fullWidth
                                        id="cpd"
                                        label="CPF"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="data_nasc"
                                        label="Data de Nascimento"
                                        name="data_nasc"
                                        autoComplete="family-name"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
                                    //onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="Senha"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    //onChange={(e) => { setPass(e.target.value) }}
                                    />
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                // onClick={registro}
                                >
                                    Adicionar Transação
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <InputLabel id="tipo">Tipo</InputLabel>
                                <FormControl sx={{ minWidth: 120 }}>
                                    <Select
                                        labelId="tipo-label"
                                        id="tipo"
                                        value={tipo}
                                        label='Tipo'
                                        onChange={handleChange}
                                    >
                                 
                                        <MenuItem value={10}>Depósito</MenuItem>
                                        <MenuItem value={20}>Retirada</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>




                        </Box>
                    </Box>



                </Container>
            </Box>
            <Footer />
        </>
    )


}