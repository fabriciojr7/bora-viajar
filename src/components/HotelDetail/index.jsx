import React from 'react';
import {
    AppBar,
    Dialog,
    Divider,
    Toolbar,
    IconButton,
    Typography,
    Slide,
    Box,
    Container,
    Grid,
} from '@mui/material';
import { MdClose, MdOutlineNightShelter, MdGroups, MdOutlineCheck } from "react-icons/md";
import { IoIosBed, IoMdBed } from "react-icons/io";
import { makeStyles } from '@mui/styles';
import CarrosselSlider from '../CarroselSlider';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center',
        padding: '15px 0'
    },
    infosPrincipal: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '15px 10px'
    },
    iconText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descricao: {
        background: '#eeeeee',
        padding: '15px 10px'
    },
    descricaoTotal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imovel: {
        padding: '15px 10px'
    },
    itemsImovel: {
        textAlign: 'center',
        padding: '15px 0'
    },
    boxCarrossel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px 0'
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function HotelDetail({
    open,
    onClose,
    title,
    persons,
    rooms,
    couple_beds,
    single_beds,
    subtitle,
    description,
    images,
    features,
    price
}) {
    const classes = useStyles()

    const definefeature = (feature) => {
        if (feature.value === 0 || feature.value === false) return (
            <Typography color="text.secondary">
                {feature.value} {feature.feature}
            </Typography>
        )
        else return (
            <Typography >
                <MdOutlineCheck /> {feature.value} {feature.feature}
            </Typography>
        )
    }

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={onClose}
                TransitionComponent={Transition}
            >

                <AppBar color='secondary' sx={{ position: 'relative' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Bora Viajar
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={onClose}
                            aria-label="close"
                        >
                            <MdClose />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container>
                    <Typography variant='h4' className={classes.title}>
                        {title}
                    </Typography>
                    <Divider />

                    <Box className={classes.boxCarrossel}>
                        <CarrosselSlider images={images} />
                    </Box>
                    <Divider />

                    <Box className={classes.infosPrincipal}>
                        <Grid container spacing={4} columns={12}>
                            <Grid item xs={3}>
                                <Typography variant='span' className={classes.iconText}>
                                    <MdGroups style={{ fontSize: 32 }} />
                                    {persons} Pessoas
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='span' className={classes.iconText}>
                                    <MdOutlineNightShelter style={{ fontSize: 32 }} />
                                    {rooms} Quartos (incl. suítes)
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='span' className={classes.iconText}>
                                    <IoIosBed style={{ fontSize: 32 }} />
                                    {couple_beds} Camas de casal
                                </Typography>
                            </Grid>

                            <Grid item xs={3}>
                                <Typography variant='span' className={classes.iconText}>
                                    <IoMdBed style={{ fontSize: 32 }} />
                                    {single_beds} Sofa-camas
                                </Typography>
                            </Grid>
                        </Grid>

                    </Box>
                    <Divider />

                    <Box className={classes.descricao}>
                        <Typography>
                            Descrição
                        </Typography>
                        <Container maxWidth="sm">
                            <Box className={classes.descricaoTotal}>
                                <Typography className={classes.title} variant='h6'>
                                    {subtitle}
                                </Typography>

                                <Typography >
                                    {description}
                                </Typography>
                                <Toolbar/>
                                <Typography color='primary' >
                                    A partir de R${price} a diária                                    
                                </Typography>
                            </Box>
                        </Container>

                    </Box>
                    <Divider />

                    <Box className={classes.imovel}>
                        <Typography>
                            O que tem no imóvel?
                        </Typography>
                        <Container maxWidth="sm">
                            <Box className={classes.itemsImovel}>
                                <Grid container spacing={4} columns={12}>
                                    {features?.map((feature) => (
                                        <Grid item xs={6}>
                                            {definefeature(feature)}
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Container>
                    </Box>
                </Container>
            </Dialog>
        </>
    );
}
