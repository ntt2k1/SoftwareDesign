import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderVolumn({ volume, setVolume }) {
  const handleVolume = (e) => {
    setVolume(e.target.value);
  };

  return (
    <Box>
      <Slider
        sx={{ color: '#FDFEFE' }}
        defaultValue={50}
        aria-label="Default"
        valueLabelDisplay="auto"
        value={volume}
        onChange={handleVolume}
      />
    </Box>
  );
}
