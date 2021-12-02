import * as React from 'react';
import PropTypes from 'prop-types';
import {Button, TextField} from '@mui/material/';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import { MdClose } from "react-icons/md";
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <MdClose />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function Transacao({ open, onClose, user, type }) {
    const formatarReal = (valor) => valor ? valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'

    function tipoTransacao(tipo) {
        if (tipo === 1) return 'Transação (Depósito)'
        return 'Transação (Retirada)'
    }

    return (
        <div>

            <BootstrapDialog
                onClose={onClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
                    {tipoTransacao(type)}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Saldo atual: {formatarReal(user?.saldo)}
                    </Typography>

                    <TextField
                      
                        name="valor_t"
                        fullWidth
                        id="valor_t"
                        label="Valor da transação"
                        autoFocus
                    />

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>
                        Realizar Transação
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}
