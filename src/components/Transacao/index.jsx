import * as React from "react";
import PropTypes from "prop-types";
import { Button, TextField } from "@mui/material/";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { MdClose } from "react-icons/md";
import Typography from "@mui/material/Typography";

import { collection, getDocs, updateDoc, doc } from "@firebase/firestore";
import { auth, db } from "../../services/firebase";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2)
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1)
  }
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, display: "flex", justifyContent: "space-between" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500]
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
  onClose: PropTypes.func.isRequired
};

export default function Transacao({ open, onClose, user, type }) {
  const formatarReal = (valor) => (valor ? valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "R$ 0,00");

  function tipoTransacao(tipo) {
    if (tipo === 1) return "Transação (Depósito)";
    return "Transação (Retirada)";
  }

  function handleTransacao(event) {
    event.preventDefault();
    const valor = document.getElementsByName("valor_t")[0].value;

    if (valor === "") {
      alert("Preencha o valor da transação!");
      return;
    } else {
      try {
        const valor_t = parseFloat(valor);
        /* deposito */
        if (type === 1 && valor_t < 0) {
            alert("Valor inválido!");
          return;
        } else if (type !== 1 && valor_t > user.saldo) { 
            alert("Saldo insuficiente!");
            return;
        }


        /* acha o cliente pelo email no localStorage */
        const email = localStorage.getItem("email");

        getDocs(collection(db, "clientes")).then((snapshot) => {
          let cliente = null;

          snapshot.forEach((doc) => {
            if (doc.data().email === email) {
              cliente = doc;
            }
          });

          if (cliente === null) {
            alert("Cliente não encontrado!");
            return;
          }

          const saldo = cliente.data().saldo;
          let novoSaldo = 0;
          if (type === 1) {
            novoSaldo = saldo + valor_t;
          } else {
            novoSaldo = saldo - valor_t;
          }

          const clienteRef = doc(db, "clientes", cliente.id);
          updateDoc(clienteRef, { saldo: novoSaldo })
            .then(() => {
              onClose();
              window.location.reload();
            })
            .catch(() => {
              alert("Erro ao realizar a transação!");
            });
        });
      } catch (error) {
        console.log(error);
        alert("Valor inválido!");
        return;
      }
    }
  }

  return (
    <div onKeyDown={(e) => e.key === "Enter" && handleTransacao(e)}>
      <BootstrapDialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {tipoTransacao(type)}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>Saldo atual: {formatarReal(user?.saldo)}</Typography>

          <TextField name="valor_t" fullWidth id="valor_t" label="Valor da transação" autoFocus />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleTransacao} color="primary">
            Realizar Transação
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
