import React, { useEffect } from 'react';
import { Grid, Container } from '@mui/material';

import GlobalAudio from '../Data/GlobalAudio';
import SoundItem from './SoundItem';

const SoundList = () => {
  useEffect(() => {
    GlobalAudio.forEach((e) => e.audio.load());
  }, []);

  return (
    <Container maxWidth="sm">
      <Grid container columnSpacing={3} rowSpacing={10} xs={12}>
        {GlobalAudio.map((audio) => {
          return (
            <SoundItem name={audio.name} Component={audio.logo} Audio={audio} />
          );
        })}
      </Grid>
    </Container>
  );
};

export default SoundList;
