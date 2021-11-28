import React, { useState } from "react";
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
                                        fullWidth
                                        id="nome"
                                        label="Nome"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="sobreNome"
                                        label="Sobrenome"
                                        name="sobreNome"
                                        autoComplete="family-name"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        name="email"
                                        autoComplete="email"
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
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    // onClick={registro}
                                    >
                                        Adicionar Transação
                                    </Button>
                                </Grid>

                            </Grid>


                        </Box>
                    </Box>



                </Container>
            </Box>
            <Footer />
        </>
    )


}