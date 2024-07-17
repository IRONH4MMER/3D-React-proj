import { Typography } from '@mui/material';
import { CustomBox } from '../../CustomBox/CustomBox';
import { CustomButton } from '../../CustomButton/CustomButton';

const goods = ['Tiles', 'Paint', 'Wallpaper'];

export const FilterByGoodSelector = () => {
  return (
    <CustomBox
      styles={{
        gap: '20px',
        backgroundColor: 'white',
        width: 'fit-content',
        borderRadius: '8px',
        maxHeight: '60px',
      }}
    >
      {goods.map((good, index) => (
        <CustomButton
          key={index}
          styles={{
            width: 'fit-content',
            height: '30px',
            flexDirection: 'column',
            padding: '5px 10px',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 500,
              fontFamily: '"Roboto", sans-serif',
            }}
          >
            {good}
          </Typography>
        </CustomButton>
      ))}
    </CustomBox>
  );
};
