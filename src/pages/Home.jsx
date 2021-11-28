import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotel from '../components/Hotel'
import { Toolbar, Box } from '@mui/material';

import api from "../services/api";
import { db } from '../services/firebase'
import { collection, getDocs } from "@firebase/firestore";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.light,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        justifySelf: 'center',

        minHeight: '800px',
        width: '70%',
        marginTop: 25,

        flexWrap: 'wrap',
        gap: '20px',
    },
}))

export default function Home() {
    const classes = useStyles()
    const [hoteis, sethoteis] = useState([])
    const [user, setUser] = useState([])


    useEffect(() => {
        getDocs(collection(db, 'clientes'))
            .then((snapshot) => {
                let dados = []
                snapshot.forEach((snap) => {
                    dados.push(snap.data())
                })
                dados = dados.filter((dado) => dado.email === localStorage.getItem('email'))[0]
                setUser(dados)
            })
            .catch((error) => {
                console.log(error)
            })


        //eslint-disable-next-line react-hooks/exhaustive-deps        
    }, []);

    useEffect(() => {
        console.log(user)
        api.get(`/carteira/recomendacao?balance=${user.saldo}`).then(({ data }) => {
            console.log(data.data)
            if (Object.keys(data).includes('data')) {
                sethoteis(data.data)
            }

        })
    }, [user]);
    return (
        <div className={classes.root}>
            <Header saldo={user.saldo} />

            <Box className={classes.main}>

                {typeof hoteis === 'object' && hoteis.map((hotel, index) => (
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
                ))}
            </Box>
            <Toolbar />
            <Footer />
        </div>
    )
}