import { Box } from '@mui/material';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  styles?: React.CSSProperties;
};

export const CustomGrid: React.FC<Props> = ({ children, styles }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: '10px',
        gridTemplateColumns: `repeat(3, 80px)`,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};
