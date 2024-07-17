import { CustomButton } from '../../CustomButton/CustomButton';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const ShowMoreButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <CustomButton
      styles={{
        width: '100%',
        height: '10px',
        textDecoration: 'underline',
        '&:hover': {},
      }}
      onClick={onClick}
    >
      {children}
    </CustomButton>
  );
};
