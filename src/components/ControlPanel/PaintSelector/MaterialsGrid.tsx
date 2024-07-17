import { Box } from '@mui/material';
import { ModelMaterials } from '../../../types/ModelMaterials';
import { CustomBox } from '../../CustomBox/CustomBox';
import { CustomGrid } from '../../CustomGrid';
import { useState } from 'react';
import { ChildrenSlicer } from '../../../utils/ChildrenSlicer';
import { ShowMoreButton } from './ShowMoreButton';
import { useChangeColor } from '../../../context/ColorContext';

type PaintCardProps = {
  material: ModelMaterials;
  selectedCard: ModelMaterials | null;
  setSelectedCard: (selectedCard: ModelMaterials | null) => void;
  onClick: (material: ModelMaterials | null) => void;
};

const PaintCard: React.FC<PaintCardProps> = ({
  material,
  selectedCard,
  setSelectedCard,
  onClick,
}) => {
  const handleClick = () => {
    setSelectedCard(material);
    onClick(material);
  };

  return (
    <CustomBox
      styles={{
        backgroundColor: selectedCard === material ? '#0000004D' : 'white',
        padding: '4px',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        borderRadius: '8px',
        border: '1px solid lightgray',
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: '#0000004D',
        },
        '&:active': {
          bgcolor: '#777777',
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          backgroundColor: material,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid #0000004D',
        }}
      />
      {material}
    </CustomBox>
  );
};

type MaterialsGridProps = {
  initialLimit?: number;
};

export const MaterialsGrid: React.FC<MaterialsGridProps> = ({
  initialLimit = 6,
}) => {
  const [selectedCard, setSelectedCard] = useState<ModelMaterials | null>(null);
  const [limit, setLimit] = useState<number>(initialLimit);
  const showMore = () => {
    limit === Infinity ? setLimit(initialLimit) : setLimit(Infinity);
  };
  const { handleClick } = useChangeColor();

  const children = (
    <>
      {Object.values(ModelMaterials).map(material => (
        <PaintCard
          material={material}
          key={material}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          onClick={handleClick}
        />
      ))}
    </>
  );

  return (
    <>
      <CustomGrid styles={{ margin: '10px 0 0' }}>
        <ChildrenSlicer children={children} limit={limit} />
      </CustomGrid>
      <ShowMoreButton onClick={showMore}>
        {limit === Infinity ? '- Show less' : '+ Show more'}
      </ShowMoreButton>
    </>
  );
};
