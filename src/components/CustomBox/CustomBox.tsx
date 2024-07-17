import { Box } from '@mui/material';

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  onClick?: () => void;
};

export const CustomBox: React.FC<Props> = ({ children, styles, onClick }) => (
  <Box
    sx={{
      display: 'flex',
      height: 'fit-content',
      zIndex: 20,
      position: 'relative',
      ...styles,
    }}
    onClick={onClick}
  >
    {children}
  </Box>
);
