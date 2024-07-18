import React from 'react';
import { generateLoremIpsumPairs } from '../../../utils/loremGenerator';
import { useState } from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ModelMaterials } from '../../../types/ModelMaterials';
import { CustomBox } from '../../CustomBox/CustomBox';
import { CustomButton } from '../../CustomButton/CustomButton';
import { MaterialsGrid } from './MaterialsGrid';
import { ChildrenSlicer } from '../../../utils/ChildrenSlicer';
import { ShowMoreButton } from './ShowMoreButton';

type CustomAccordionProps = {
  title: string;
  children: React.ReactNode;
  initialLimit?: number;
  styles?: React.CSSProperties;
  quantity?: number;
};

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  children,
  initialLimit = 3,
  styles,
  quantity,
}) => {
  const [limit, setLimit] = useState<number>(initialLimit);
  const showMore = () => {
    limit === Infinity ? setLimit(initialLimit) : setLimit(Infinity);
  };

  return (
    <Accordion
      elevation={0}
      disableGutters
      sx={{
        width: '260px',
        border: 'none',
        boxShadow: 'none',
        '&:before': {
          backgroundColor: 'transparent !important',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography>{title}</Typography>
        <Typography sx={{ color: '#00000066', ml: 1 }}>{quantity}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={styles}>
        <ChildrenSlicer children={children} limit={limit} />
      </AccordionDetails>
      <ShowMoreButton onClick={showMore}>
        {limit === Infinity ? '- Show less' : '+ Show more'}
      </ShowMoreButton>
    </Accordion>
  );
};
const pairs = generateLoremIpsumPairs(10);

export const PaintSelector = () => {
  return (
    <CustomBox
      styles={{
        width: 'object-fit',
        maxHeight: '550px',
        gap: '10px',
        flexDirection: 'column',
        overflowY: 'auto',
        paddingRight: '15px',
        margin: '15px 0 10px',
      }}
    >
      <CustomBox
        styles={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 600,
            textAlign: 'left',
            color: '#0000004D',
          }}
        >
          {Object.values(ModelMaterials).length} items
        </Typography>
        <CustomButton
          styles={{
            height: '30px',
            padding: '6px',
            borderRadius: 0,
            width: 'object-fit',
            color: '#777777',
          }}
          endIcon={<FilterListIcon />}
        >
          Filter
        </CustomButton>
      </CustomBox>
      <MaterialsGrid />
      <CustomAccordion title="Brand" quantity={pairs.length}>
        <FormGroup>
          {pairs.map((pair, index) => (
            <FormControlLabel
              sx={{ width: '100%' }}
              key={index}
              control={<Checkbox name={pair} />}
              label={pair + ' ' + `(${pair.length})`}
            />
          ))}
        </FormGroup>
      </CustomAccordion>
      <CustomAccordion
        title="Colors"
        styles={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '10px',
        }}
        initialLimit={9}
        quantity={Object.values(ModelMaterials).length}
      >
        <FormGroup>
          {Object.values(ModelMaterials).map(material => (
            <Box
              key={material}
              sx={{
                backgroundColor: material,
                width: '16px',
                height: '16px',
                borderRadius: '4px',
                border: '1px solid lightgray',
              }}
            />
          ))}
        </FormGroup>
      </CustomAccordion>
    </CustomBox>
  );
};
