import React from "react";
import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    footer:{
        display: 'flex',
        alignItems: 'center',
    }
}))
export default function Footer() {
    const classes = useStyles()

    return (
        <AppBar position='static' color= 'secondary' className={classes.footer} >
            <Toolbar>                
                <Typography  variant="strong" >
                    Projeto desenvolvido por Fabricio, Felipe, João Victor, Karollayne e Larissa &copy; 2021
                </Typography>                
            </Toolbar>
        </AppBar>
    )
}