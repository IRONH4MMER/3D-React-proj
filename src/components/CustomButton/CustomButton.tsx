import { Button } from '@mui/material';

type Props = {
  children: React.ReactNode;
  styles?: React.CSSProperties;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const CustomButton: React.FC<Props> = ({
  children,
  styles,
  endIcon,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => (
  <Button
    sx={{
      color: '#333333',
      minWidth: 0,
      minHeight: 0,
      height: '60px',
      width: '60px',
      borderRadius: '8px',
      backgroundColor: 'white',
      padding: '18px',
      fontWeight: 600,
      fontSize: '12px',
      lineHeight: '12px',
      '&:hover': {
        backgroundColor: '#49494C',
        color: '#FFFFFF',
      },
      ...styles,
    }}
    variant="text"
    endIcon={endIcon}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </Button>
);
