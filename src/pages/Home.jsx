import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import CaruselBox from '../components/CaruselBox';
import PreviewList from '../components/GridList';

function Home({ previewImg, previewList }) {
  return (
    <Container
      maxWidth='xl'
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
      }}
    >
      <CaruselBox previewImg={previewImg} />

      <PreviewList previewList={previewList} />
    </Container>
  );
}

export default Home;
