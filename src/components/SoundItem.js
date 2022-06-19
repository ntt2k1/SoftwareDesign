import React from 'react';
import { Grid } from '@mui/material';
import { IconContext } from 'react-icons';

const SoundItem = ({
  AudioHandler,
  name,
  Component,
  ColorHex,
  AudioMouseEnterHandler,
  AudioMouseLeaveHandler,
}) => {
  const color = ColorHex ? 'white' : '#ABE3CF';
  return (
    <IconContext.Provider value={{ color: color }}>
      <Grid item xs={3}>
        <Component
          size={50}
          onClick={() => {
            AudioHandler(name);
          }}
          onMouseEnter={() => {
            AudioMouseEnterHandler(name);
          }}
          onMouseLeave={() => {
            AudioMouseLeaveHandler(name);
          }}
        />
      </Grid>
    </IconContext.Provider>
  );
};

export default SoundItem;
