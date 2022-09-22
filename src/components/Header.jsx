import React from 'react';

import { Favorite, Menu, Search, ShoppingBasket } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

function Header(props) {
  return (
    <AppBar
      position='static'
      sx={{ mb: '30px' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            logo
          </IconButton>

          <Typography
            variant='h6'
            noWrap
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
            }}
          >
            MARONEL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Products
            </Button>
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Pricing
            </Button>{' '}
            <Button sx={{ my: 2, color: 'white', display: 'block' }}>
              Blog
            </Button>
          </Box>

          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, gap: 1 }}
          >
            <IconButton color='inherit'>
              <Menu />
            </IconButton>
            <IconButton color='inherit'>
              <Search />
            </IconButton>
          </Box>

          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            logo
          </IconButton>

          <Typography
            variant='h5'
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MARONEL
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              gap: { xs: 2, md: 5 },
            }}
          >
            <IconButton color='inherit'>
              <Favorite />
            </IconButton>
            <IconButton color='inherit'>
              <ShoppingBasket />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
