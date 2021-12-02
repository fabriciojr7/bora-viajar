import * as React from 'react';
import {
    CircularProgress,
    Box,
    Typography,
    Toolbar
} from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    load: {
        
        border: '1px',
        backgroundColor: 'white',
        padding: '50px',
        boxShadow: '0 0 1em black',
        display: 'flex',
        flexDirection: 'Column',
        justifyContent: 'center',
        alignItems: 'center',
        
    }

}))

export default function Loading() {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <Box className={classes.load} sx={{ display: 'flex' }}>
                <CircularProgress size={150} color="secondary" disableShrink />
                <Toolbar />
                <Typography variant='h2'>
                    Aguarde...
                </Typography>
            </Box>
        </div>

    );
}
