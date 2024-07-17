import { CustomBox } from '../CustomBox/CustomBox';
import { CustomButton } from '../CustomButton/CustomButton';
import TextureIcon from '@mui/icons-material/Texture';
import LightIcon from '@mui/icons-material/Light';
import ChairIcon from '@mui/icons-material/Chair';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import React from 'react';
import { Typography } from '@mui/material';

const icons = [
  { icon: <TextureIcon />, text: 'textures' },
  { icon: <LightIcon />, text: 'lighting' },
  { icon: <ChairIcon />, text: 'furniture' },
  { icon: <MeetingRoomIcon />, text: 'building' },
];

export const NavBar: React.FC = () => {
  return (
    <CustomBox
      styles={{
        gap: '20px',
        backgroundColor: 'white',
        width: 'fit-content',
        borderRadius: '8px',
        marginTop: '20px',
        maxHeight: '60px',
      }}
    >
      {icons.map(({ icon, text }, index) => (
        <CustomButton
          key={index}
          styles={{
            flexDirection: 'column',
          }}
        >
          {icon}
          <Typography sx={{ fontSize: '10px', fontWeight: 500 }}>
            {text}
          </Typography>
        </CustomButton>
      ))}
    </CustomBox>
  );
};
