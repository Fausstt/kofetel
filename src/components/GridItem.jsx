import { Box, Button, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';

function GridItem({ item }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Grid
      sx={{ overflow: 'hidden', display: 'flex', height: '550px' }}
      item
      xs={item.small}
      md={item.big}
    >
      <Box
        sx={{
          padding: 6,
          width: '100%',
          backgroundPosition: 'center',
          backgroundImage: `url(${item.img})`,
        }}
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <Link
          underline='none'
          href={item.link ? item.link : '#'}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '10px 20px',
              height: '100%',
              while: '100%',
              color: '#fff',
              transition: 'background-color 0.5s linear',
              bgcolor: `${isHover ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.0)'}`,
            }}
          >
            <Typography
              sx={{ fontWeight: '700' }}
              variant='h4'
            >
              {item.title}
            </Typography>
            {isHover && (
              <Box>
                <Typography
                  sx={{ mb: 4 }}
                  variant='h4'
                >
                  {item.body}
                </Typography>
                <Button
                  color='inherit'
                  variant='outlined'
                >
                  Переглянуты
                </Button>
              </Box>
            )}
          </Box>
        </Link>
      </Box>
    </Grid>
  );
}

export default GridItem;
