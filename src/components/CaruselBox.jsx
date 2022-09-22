import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CaruselBox({ w = 1500, h = 660, previewImg }) {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        maxHeight: h,
        maxWidth: w,
        width: '100%',
      }}
    >
      <Carousel
        indicators={false}
        fade
      >
        {previewImg.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className='d-block w-100'
              src={item.img}
              alt={item.lable}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default CaruselBox;
