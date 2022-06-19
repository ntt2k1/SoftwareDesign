import { BsCloudRain, BsCloudLightning, BsWind, BsTree } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';
import { IoWaterOutline } from 'react-icons/io5';
import { AiOutlineFire } from 'react-icons/ai';
import { CgCoffee } from 'react-icons/cg';

const audios = [
  {
    name: 'rain',
    logo: BsCloudRain,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655648533/Soundy/200271__jmbphilmes__rain-light-1-rural_vxb58j.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'thunder',
    logo: BsCloudLightning,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655649844/Soundy/thunder_diyew2.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'night',
    logo: HiOutlineMoon,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655652190/Soundy/summer_night_axfagx.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'water',
    logo: IoWaterOutline,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655652294/Soundy/water_c4nhbc.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'wind',
    logo: BsWind,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655652518/Soundy/wind_pkeoh0.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'bonfire',
    logo: AiOutlineFire,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655652581/Soundy/bonfire_qgzfbf.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'forest',
    logo: BsTree,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655653070/Soundy/forest_pxjina.wav'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'coffee',
    logo: CgCoffee,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1655653226/Soundy/coffee_gdtase.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
];

export default audios;
