import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GlobalAudio from '../Data/GlobalAudio';
import { useHistory } from 'react-router-dom';

const steps = [
  {
    label:
      'https://img.wattpad.com/d4302bd6000cd3bf54ad12fb4bf26b263e35b02e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f544568664c584c565553734369413d3d2d3637333439343134382e3135373466373561343438303963336232343233343433323134352e676966',
    description: `The sound of nature can improve people's mood, reduce pain and stress, and increase awareness and concentration. Even if you can't go for a walk outdoors, feel free to listen to nature
      recordings to help your mind relax and calm down.`,
  },
  {
    label:
      'https://mir-s3-cdn-cf.behance.net/project_modules/fs/9afe0493484903.5e66500f8dea4.gif',
    description: `Dr. Rachel Buxton, a biologist at Colorado State University, a member of the research team, said that humans are still animals, peaceful sounds from nature, such as birdsong or water flowing, is a sign of safety, makes people feel relaxed and secure. \nNature can be said to be a timeless piece of music.`,
  },
  {
    label:
      'https://64.media.tumblr.com/bce5ed23b65e88fa7cb5853a21bf699d/7ed1eb1d1dd9dc97-32/s1280x1920/8d364329fac1f6382c5f3d4baaff317a8e2a416c.gifv',
    description: `Furthermore, we enhance the monotonous image viewing experience by creating sounds based on what we perceive in the image. It's the background music for your great photo.`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const history = useHistory();
  useEffect(() => {
    GlobalAudio.forEach((e) => e.audio.load());
    const backgroundSound = new Audio(
      'https://res.cloudinary.com/dcdd7mhoh/video/upload/v1656648670/Soundy/9convert_mp3cut.net_yp9bt3.mp3'
    );
    backgroundSound.play();
    return history.listen((location) => {
      backgroundSound.pause();
    });
  }, [history]);
  const handleNext = () => {
    if (activeStep < 2) {
      document
        .querySelector(`.pos${activeStep + 1}`)
        .scrollIntoView({ behavior: 'smooth', block: 'end' });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      document
        .querySelector(`.pos0`)
        .scrollIntoView({ behavior: 'smooth', block: 'end' });
      setActiveStep(0);
    }
  };

  const handleBack = () => {
    document
      .querySelector(`.pos${activeStep}`)
      .scrollIntoView({ behavior: 'smooth', block: 'end' });
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        sx={{ fontFamily: 'Changa One', color: '#303571' }}
      >
        ABOUT OUR PRODUCT
      </Typography>
      <br />
      <br />
      <br />
      <Box
        sx={{
          maxWidth: 700,
          float: 'right',
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <img
                  src={`${step.label}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </StepLabel>
              <StepContent>
                <Typography
                  variant="h6"
                  sx={{ color: '#7a5eac', fontFamily: 'Changa One' }}
                >
                  {step.description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
              <div className={`pos${index}`}></div>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
