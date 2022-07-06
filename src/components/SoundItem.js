import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { IconContext } from 'react-icons';
import SliderVolumn from './Slider';

const SoundItem = ({ Component, Audio }) => {
  const [volume, setVolume] = useState(50);
  const [rerender, setRerender] = useState(true);
  const color = Audio.isPlaying || Audio.isHover ? 'white' : '#ABE3CF';

  const HandleVolume = (value) => {
    setVolume(value);
    Audio.audio.volume = volume / 100;
  };

  const AudioHandler = () => {
    // const SelectedAudio = GlobalAudio.find((audio) => audio.name === name);
    if (!Audio.isPlaying) {
      Audio.audio.play();
      Audio.isPlaying = true;
      setRerender(!rerender);
    } else {
      Audio.audio.pause();
      Audio.isPlaying = false;
      setRerender(!rerender);
    }
  };

  const AudioMouseEnterHandler = () => {
    Audio.isHover = true;
    setRerender(!rerender);
  };
  const AudioMouseLeaveHandler = () => {
    Audio.isHover = false;
    setRerender(!rerender);
  };
  return (
    <IconContext.Provider value={{ color: color }}>
      <Grid item xs={3}>
        <Component
          size={50}
          style={{ marginLeft: 30 }}
          onClick={() => {
            AudioHandler();
          }}
          onMouseEnter={() => {
            AudioMouseEnterHandler();
          }}
          onMouseLeave={() => {
            AudioMouseLeaveHandler();
          }}
        />
        {Audio.isPlaying && (
          <SliderVolumn volume={volume} setVolume={HandleVolume} />
        )}
      </Grid>
    </IconContext.Provider>
  );
};

export default SoundItem;
