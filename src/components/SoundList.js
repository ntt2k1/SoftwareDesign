import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';

import GlobalAudio from '../Data/GlobalAudio';
import SoundItem from './SoundItem';

const SoundList = () => {
  const [rerender, setRerender] = useState(true);
  const AudioHandler = (name) => {
    const SelectedAudio = GlobalAudio.find((audio) => audio.name === name);
    if (!SelectedAudio.isPlaying) {
      SelectedAudio.audio.play();
      SelectedAudio.isPlaying = true;
      setRerender(!rerender);
    } else {
      SelectedAudio.audio.pause();
      SelectedAudio.isPlaying = false;
      setRerender(!rerender);
    }
  };

  const AudioMouseEnterHandler = (name) => {
    const SelectedAudio = GlobalAudio.find((audio) => audio.name === name);
    SelectedAudio.isHover = true;
    setRerender(!rerender);
  };
  const AudioMouseLeaveHandler = (name) => {
    const SelectedAudio = GlobalAudio.find((audio) => audio.name === name);
    SelectedAudio.isHover = false;
    setRerender(!rerender);
  };
  return (
    <Container maxWidth="sm">
      <Grid container columnSpacing={3} rowSpacing={10} xs={12}>
        {GlobalAudio.map((audio) => {
          const Component = audio.logo;
          return (
            <SoundItem
              AudioHandler={AudioHandler}
              name={audio.name}
              Component={Component}
              ColorHex={audio.isPlaying || audio.isHover}
              AudioMouseEnterHandler={AudioMouseEnterHandler}
              AudioMouseLeaveHandler={AudioMouseLeaveHandler}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default SoundList;
