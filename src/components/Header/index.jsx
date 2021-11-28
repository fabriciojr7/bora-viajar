import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { MdAccountCircle } from "react-icons/md";

import {
    signOut
} from 'firebase/auth'
import { auth } from '../../services/firebase'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    saldo: {
        paddingRight: theme.spacing(3)
    },
    logo: {
        height: 80,
    },
    colorIcon: {
        color: theme.palette.primary.light
    },


}))
export default function Header({saldo}) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = async () => {
        await signOut(auth)
    }

    return (
        <AppBar color='secondary' sx={{ position: 'relative' }}>
            <Toolbar>
                <Typography variant="h4" >
                    <Link href="/" color="inherit" underline="none">
                        Bora Viajar
                    </Link>
                </Typography>
                <div className={classes.grow} />
                <Typography className={classes.saldo} variant="h6" >
                    Saldo: {saldo}
                </Typography>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color='inherit'
                >
                    <MdAccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        {/* <Link href="/perfil" color="inherit" underline="none"> */}
                            Informações da conta
                        {/* </Link> */}
                    </MenuItem>
                    <MenuItem onClick={logout}>Sair</MenuItem>
                </Menu>
            </Toolbar>

        </AppBar>
    )
}



