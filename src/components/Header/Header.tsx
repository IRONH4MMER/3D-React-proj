import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ShareIcon from '@mui/icons-material/Share';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import DrawIcon from '@mui/icons-material/Draw';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { CustomBox } from '../CustomBox/CustomBox';
import { CustomButton } from '../CustomButton/CustomButton';

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0 0',
};

export function Header() {
  return (
    <Box sx={headerStyles}>
      <CustomBox styles={{ width: '60px', gap: '20px' }}>
        <CustomBox
          styles={{
            minHeight: '60px',
            minWidth: '60px',
            borderRadius: '8px',
            backgroundColor: 'white',
            padding: '18px',
          }}
        >
          <ViewInArIcon />
        </CustomBox>
        <CustomButton
          styles={{
            minWidth: '145px',
            paddingInline: '12px',
          }}
          endIcon={<InfoOutlinedIcon />}
        >
          About project
        </CustomButton>
      </CustomBox>
      <CustomBox styles={{ gap: '20px' }}>
        <CustomButton>
          <DrawIcon />
        </CustomButton>

        <CustomButton
          styles={{
            display: 'flex',
            flexDirection: 'column',
            fontWeight: 500,
            fontSize: '10px',
            padding: '12px 0',
          }}
        >
          <WbIridescentIcon />
          Lighting
        </CustomButton>

        <CustomBox
          styles={{
            backgroundColor: 'white',
            borderRadius: '8px',
          }}
        >
          <CustomButton>
            <UndoIcon />
          </CustomButton>

          <CustomButton>
            <RedoIcon />
          </CustomButton>

          <CustomButton>
            <ShareIcon />
          </CustomButton>

          <CustomButton>
            <AddAPhotoIcon />
          </CustomButton>

          <CustomButton>
            <HelpOutlineIcon />
          </CustomButton>
        </CustomBox>

        <CustomButton>
          <CloseIcon />
        </CustomButton>
      </CustomBox>
    </Box>
  );
}
