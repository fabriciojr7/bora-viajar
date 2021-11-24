import React, { useState } from 'react'
import {
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const useStyles = makeStyles((theme) => ({
  carousel: {
    width: '70%',
    height: '400px',
    backgroundColor: 'black',

  },
  carouselInner: {
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex'
  },
  left: {
    flex: '5%',
    height: '100%',
    '&:hover': {
      backgroundColor: 'rgb(0, 0, 0, 0.6)',
    },
    display: 'grid',
    placeItems: 'center',
    color: 'white',
    cursor: 'pointer',

  },
  right: {
    flex: '5%',
    height: '100%',
    '&:hover': {
      backgroundColor: 'rgb(0, 0, 0, 0.6)',
    },


    display: 'grid',
    placeItems: 'center',
    color: 'white',
    cursor: 'pointer',
  },
  center: {
    flex: '90%',
    height: '100%',
    display: 'grid',
    placeItems: 'self-end',
    fontFamily: 'Arial, Helvetica, sans-serif',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',

  },
  numerador: {
    backgroundColor: 'rgb(0, 0, 0, 0.4)',
    border: '1px',
    padding: '5px',
    borderRadius: '10px',
    marginBottom: '3px'
  }
}));


export default function CarrosselSlider({ images }) {
  const classes = useStyles()
  const [indexImage, setIndexImage] = useState(0)

  return (
    <div className={classes.carousel}>
      <div
        className={classes.carouselInner}
        style={{ backgroundImage: `url(${images && images[indexImage]})` }}
      >
        <div className={classes.left}
          onClick={() => {
            indexImage > 0 && setIndexImage(indexImage - 1)
          }}
        >
          <MdOutlineArrowBackIos style={{ fontSize: 20 }} />
        </div>

        <div className={classes.center} >
          <Typography className={classes.numerador} variant='p' component='span'>
            {indexImage + 1}/{images && images.length}
          </Typography>
        </div>

        <div className={classes.right}
          onClick={() => {
            indexImage < images.length - 1 && setIndexImage(indexImage + 1)
          }}
        >
          <MdOutlineArrowForwardIos style={{ fontSize: 20 }} />
        </div>
      </div>
    </div>
  )
}

