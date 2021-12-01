import React from 'react';
import {
    Typography,
    Container,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}))

export default function BemVindo({ nome, sobrenome }) {
    const classes = useStyles()
    return (
        <Container >
            <Typography className={classes.title} component="p" variant="h4">
                Bem Vindo(a) {nome} {sobrenome}
            </Typography>
        </Container>
    );
}