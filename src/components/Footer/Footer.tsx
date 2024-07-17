import { useState } from 'react';
import { CustomBox } from '../CustomBox/CustomBox';
import { CustomButton } from '../CustomButton/CustomButton';
import { BricksIcon, ThreeDIcon, TwoDIcon, WalkingManIcon } from './Icons';
import { Typography } from '@mui/material';

export type IconNames = 'twoD' | 'threeD' | 'walkingMan';

const buttonStyles = {
  borderRadius: '50%',
  height: '32px',
  width: '32px',
  padding: 0,
};

export const Footer = () => {
  const [whatsHovered, setWhatsHovered] = useState<IconNames | null>(null);

  return (
    <CustomBox
      styles={{
        position: 'fixed',
        bottom: '30px',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <CustomBox
        styles={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          width: '220px',
          height: '60px',
          gap: '40px',
          borderRadius: '8px',
          backgroundColor: 'white',
          zIndex: 20,
        }}
      >
        <CustomButton
          styles={buttonStyles}
          onMouseEnter={() => setWhatsHovered('twoD')}
          onMouseLeave={() => setWhatsHovered(null)}
        >
          <TwoDIcon whatsHovered={whatsHovered} />
        </CustomButton>

        <CustomButton
          styles={buttonStyles}
          onMouseEnter={() => setWhatsHovered('threeD')}
          onMouseLeave={() => setWhatsHovered(null)}
        >
          <ThreeDIcon whatsHovered={whatsHovered} />
        </CustomButton>

        <CustomButton
          styles={buttonStyles}
          onMouseEnter={() => setWhatsHovered('walkingMan')}
          onMouseLeave={() => setWhatsHovered(null)}
        >
          <WalkingManIcon whatsHovered={whatsHovered} />
        </CustomButton>
      </CustomBox>
      <CustomBox
        styles={{
          position: 'absolute',
          right: '60px',
          width: '170px',
          height: '60px',
          backgroundColor: 'white',
          borderRadius: '8px',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <BricksIcon />
        <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>
          Floor 2 / Bedroom
        </Typography>
      </CustomBox>
    </CustomBox>
  );
};
