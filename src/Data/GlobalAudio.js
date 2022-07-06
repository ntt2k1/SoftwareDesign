import { BsCloudRain, BsCloudLightning, BsWind, BsTree } from 'react-icons/bs';
import { HiOutlineMoon } from 'react-icons/hi';
import { IoWaterOutline, IoLeafOutline } from 'react-icons/io5';
import { AiOutlineFire, AiOutlineRocket } from 'react-icons/ai';
import { CgCoffee } from 'react-icons/cg';
import { MdOutlineTrain } from 'react-icons/md';
import { RiBubbleChartLine } from 'react-icons/ri';
import { FaFan } from 'react-icons/fa';

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
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656651300/Soundy/thunder_etgbmw.mp3'
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
    name: 'leaf',
    logo: IoLeafOutline,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656650533/Soundy/leave_nddysr.mp3'
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
  {
    name: 'train',
    logo: MdOutlineTrain,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656650982/Soundy/train_iml9rq.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'space',
    logo: AiOutlineRocket,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656651509/Soundy/space_eil3nf.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'bubble',
    logo: RiBubbleChartLine,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656651699/Soundy/bubble_thtjrn.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
  {
    name: 'fan',
    logo: FaFan,
    audio: new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656651936/Soundy/fan_px2ufc.mp3'
    ),
    isPlaying: false,
    isHover: false,
  },
];

export default audios;
