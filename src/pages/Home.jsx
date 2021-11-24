import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hotel from '../components/Hotel'
import { Toolbar, Box } from '@mui/material';

import api from "../services/api";

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

    useEffect(() => {
        api.get('/temporada').then(({ data }) => {
            sethoteis(data.data)
        })
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={classes.root}>
            <Header />
            <Box className={classes.main}>
                {hoteis?.map((hotel, index) => (
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