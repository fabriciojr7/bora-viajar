import React, { useState, useEffect } from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { MdGroup, MdBedroomChild, MdLocalOffer } from "react-icons/md";

import HotelDetail from '../HotelDetail';

import api from '../../services/api';

export default function Hotel({ title, img, location, price, persons, rooms, origin }) {
  const [dialogOpened, setDialogOpened] = useState(false)

  function handleDialog() {
    setDialogOpened((prevState) => !prevState)
  }

  const definePrice = () => {
    if (price === '') return 'Consulte a diária'
    return (
      <>
        <MdLocalOffer fontSize="small" /> {`R$ ${price} a diária`}
      </>
    )
  }

  const [detail, setDetail] = useState([])

  useEffect(() => {
    api.get(`/temporada/buscar?origin=${origin}`).then(({ data }) => {
      setDetail(data.data)
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <Card sx={{ maxWidth: 350, minWidth: 350 }}>
        <CardActionArea
          onClick={handleDialog}
        >
          <CardMedia
            component="img"
            height="210"
            width="230"
            image={img}
          />
          <CardContent>
            <Typography variant='p' component='span' >
              {title}
            </Typography>
            <Typography variant="body2" color="primary.dark">
              <MdGroup fontSize="small" />{`${persons} Pessoas `}
              <MdBedroomChild fontSize="small" />{`${rooms} Quartos(inc. suítes)`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {definePrice()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>



      <HotelDetail
        open={dialogOpened}
        onClose={handleDialog}
        title={detail.title}
        persons={detail.number_of_persons}
        rooms={detail.number_of_rooms}
        couple_beds={detail.number_of_couple_beds}
        single_beds={detail.number_of_single_beds}
        subtitle={detail.subtitle}
        description={detail.description}
        images={detail.imgs}
        features={detail.features}
        price={price}
      />
    </>
  );
}