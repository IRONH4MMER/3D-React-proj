import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';
import { CustomBox } from '../CustomBox/CustomBox';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { PaintSelector } from './PaintSelector/PaintSelector';
import { ShopSelector } from './ShopSelector/ShopSelector';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const CustomBreadcrumbs = () => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export const ControlPanel = () => {
  return (
    <CustomBox
      styles={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '15px',
        backgroundColor: 'white',
        maxHeight: '600px',
        justifyContent: 'center',
        width: '615px',
        borderRadius: '8px',
        marginTop: '20px',
      }}
    >
      <CustomBreadcrumbs />
      <Stack direction="row" spacing={'40px'} marginTop={'20px'}>
        <ShopSelector />
        <PaintSelector />
      </Stack>
    </CustomBox>
  );
};
