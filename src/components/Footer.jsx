import { ArrowForwardIos } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

function Footer(props) {
  return (
    <AppBar
      position='static'
      sx={{
        top: 'auto',
        bottom: 0,
        mt: '30px',
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar sx={{ padding: 3 }}>
          <Grid
            container
            spacing={5}
          >
            <Grid
              item
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton>logo</IconButton>

                <Typography
                  variant='h6'
                  noWrap
                  sx={{
                    mr: 4,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                  }}
                >
                  MARONEL
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant='h6'
                  noWrap
                  sx={{
                    fontWeight: 550,
                    letterSpacing: 3,
                    color: 'inherit',
                  }}
                >
                  Киев,вул,Драгамирова,2а
                </Typography>
                <Typography
                  variant='h5'
                  noWrap
                  sx={{
                    fontWeight: 550,
                    letterSpacing: 3,
                    color: 'inherit',
                    textDecoration: 'underline',
                  }}
                >
                  +380 (66) 000 33 88
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    opacity: 0.5,
                    letterSpacing: 2,
                  }}
                >
                  © 2016-2021 MARONEL. Всі права захищені
                </Typography>
              </Box>
            </Grid>

            <Grid
              item
              md={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                  Підпишіться
                  <br />
                  на солодке:
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <TextField
                    color='secondary'
                    variant='outlined'
                    label='Електроная почта'
                  />
                  <IconButton>
                    <ArrowForwardIos
                      color='inherit'
                      fontSize='large'
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              md={4}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography>
                  Зворотний
                  <br />
                  дзвинок:
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <TextField
                    color='secondary'
                    variant='outlined'
                    label='+380 (__) ___-__-__'
                  />
                  <IconButton>
                    <ArrowForwardIos
                      color='inherit'
                      fontSize='large'
                    />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
