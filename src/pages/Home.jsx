import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotel from "../components/Hotel";
import { Toolbar, Box } from "@mui/material";

import api from "../services/api";
import { db } from "../services/firebase";
import { collection, getDocs } from "@firebase/firestore";
import BemVindo from "../components/BemVindo";
import Loading from "../components/Loading";
import SemSaldo from "../components/SemSaldo";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    flex: 1,

    justifyContent: "center",
    alignItems: "center"
  },
  main: {
    display: "flex",
    justifyContent: "center",
    justifySelf: "center",

    minHeight: "800px",
    width: "70%",
    marginTop: 25,

    flexWrap: "wrap",
    gap: "20px"
  }
}));

export default function Home() {
  const classes = useStyles();
  const [hoteis, sethoteis] = useState([]);
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);
  const formatarReal = (valor) => (valor ? valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : "R$ 0,00");

  useEffect(() => {
    getDocs(collection(db, "clientes"))
      .then((snapshot) => {
        let dados = [];
        snapshot.forEach((snap) => {
          dados.push(snap.data());
        });

        const email = localStorage.getItem("email");
        const userData = dados.find((user) => user.email === email);
        setUser(userData);
      })
      .catch((error) => {
        alert("Erro ao buscar dados do usuário");
      });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user && user.saldo !== undefined && user.saldo !== null) {
      api
        .get(`/carteira/recomendacao?balance=${user.saldo}`)
        .then(({ data }) => {
          sethoteis(data.data);
          setLoad(true);
        })
        .catch((error) => {
          alert("Erro ao buscar hoteis");
        });
    }
  }, [user]);



  return (
    <div className={classes.root}>
      <Header saldo={formatarReal(user?.saldo)} />

      {
        load ? (
          <Box className={classes.main}>
            <BemVindo nome={user?.nome} sobrenome={user?.sobrenome} />
            {
              (user?.saldo > 0) ? (
                typeof hoteis === "object" &&
                hoteis.map((hotel, index) => (
                  <Hotel
                    key={index}
                    title={hotel.title}
                    img={hotel.img}
                    location={hotel.location}
                    price={hotel.price}
                    persons={hotel.persons}
                    rooms={hotel.rooms}
                    origin={hotel.origin}
                  />
                ))
              ) : (
                <SemSaldo/>
              )
            }
          </Box>
        ) : (
          <Loading />
        )
      }

      <Toolbar />
      <Footer />
    </div>
  );
}
