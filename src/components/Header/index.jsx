import React from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { MdAccountCircle } from "react-icons/md";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    saldo: {
        paddingRight: theme.spacing(3)
    },
    logo: {
        height: 80,
    }
}))
export default function Header() {
    const classes = useStyles()

    return (
        <AppBar color='secondary' >
            <Toolbar>
                <Typography variant="h4" >
                    Bora Viajar
                </Typography>
                <div className={classes.grow} />

                <Typography className={classes.saldo} variant="h6" >
                    Saldo: R$ 100,00
                </Typography>

                <Button variant='outlined' startIcon={<MdAccountCircle />}>
                    Perfil
                </Button>
            </Toolbar>

        </AppBar>
    )
}