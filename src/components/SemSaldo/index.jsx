import * as React from 'react';
import {
    Box,
    Typography,
    Toolbar
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const semSaldo = '../images/sem-saldo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    box: {
        marginTop: 0,
        border: '1px',
        backgroundColor: 'white',
        padding: '50px',
        boxShadow: '0 0 1em black',
        display: 'flex',
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
    }

}))

export default function SemSaldo() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Box className={classes.box} sx={{ display: 'flex' }}>
                <Typography variant='h5'>
                    Irmão, você não possui saldo Suficiente!
                </Typography>
                <Toolbar />
                <img src={semSaldo} alt="Logo" height={300} />
                <Toolbar />
                <Typography variant='h5'>
                    Vá ao seu perfil, e realize um depósito.
                </Typography>
            </Box>
        </div>

    );
}
