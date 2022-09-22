import { Grid, Box } from '@mui/material';
import React from 'react';
import GridItem from './GridItem';

function GridList({ previewList }) {
  return (
    <Box>
      <Grid
        container
        spacing={5}
      >
        {previewList.map((item) => (
          <GridItem
            key={item.id}
            item={item}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default GridList;
