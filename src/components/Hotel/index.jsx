import React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';
import { MdGroup, MdBedroomChild, MdLocalOffer } from "react-icons/md";

export default function Hotel({ title, img, location, price, persons, rooms }) {
  const definePrice = () => {
    if (price === '') return 'Consulte a diária'
    return (
      <>
        <MdLocalOffer fontSize="small" /> {`R$ ${price} a diária`}
      </>
    )
  }

  return (
    <>
      <Card sx={{ maxWidth: 350, minWidth: 350  }}>
        <CardActionArea>
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
    </>
  );
}