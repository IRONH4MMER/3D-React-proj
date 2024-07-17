import { useState } from 'react';
import {
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { CustomBox } from '../../CustomBox/CustomBox';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { FilterByGoodSelector } from './FilterByGoodSelector';
import { CustomButton } from '../../CustomButton/CustomButton';
import { generateLoremIpsumPairs } from '../../../utils/loremGenerator';
import { ShowMoreButton } from '../PaintSelector/ShowMoreButton';
import { ChildrenSlicer } from '../../../utils/ChildrenSlicer';

const shops = generateLoremIpsumPairs(81);

export const ShopSelector = () => {
  const initialLimit = 5;
  const [sort, setSort] = useState(false);
  const [limit, setLimit] = useState<number>(initialLimit);

  const showMore = () => {
    limit === Infinity ? setLimit(initialLimit) : setLimit(Infinity);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <CustomBox styles={{ flexDirection: 'column' }}>
      <FilterByGoodSelector />
      <CustomBox
        styles={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '28px',
        }}
      >
        <TextField
          id="outlined-textarea"
          placeholder="Search"
          multiline
          sx={{
            width: '150px',
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                border: '1px solid gray',
              },
            },
          }}
          InputProps={{
            style: {
              paddingTop: 0,
              paddingBottom: 0,
              height: '28px',
            },
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <CustomButton
          styles={{
            width: '88px',
            height: '28px',
            padding: 0,
            border: '1px solid #00000099',
          }}
          endIcon={<FavoriteBorderOutlinedIcon />}
        >
          Saved
        </CustomButton>
      </CustomBox>
      <CustomBox
        styles={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '28px',
        }}
      >
        <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>
          {shops.length} shops
        </Typography>
        <CustomButton
          styles={{
            width: '130px',
            height: '28px',
            padding: '0 2px',
            borderRadius: '4px',
            fontWeight: 400,
            fontSize: '10px',
          }}
          endIcon={sort ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          onClick={handleSort}
        >
          sort by alphabet
        </CustomButton>
      </CustomBox>
      <CustomBox
        styles={{
          maxHeight: '250px',
          flexDirection: 'column',
          overflowY: 'auto',
          marginTop: '28px',
        }}
      >
        <List sx={{ padding: 0 }}>
          <ChildrenSlicer
            children={
              <>
                {shops.map((shop, index) => (
                  <ListItem sx={{ padding: 0 }} key={index}>
                    <ListItemText primary={shop} />
                  </ListItem>
                ))}
              </>
            }
            limit={limit}
          />
        </List>
        <ShowMoreButton onClick={showMore}>
          {limit === Infinity ? '- Show less' : '+ Show more'}
        </ShowMoreButton>
      </CustomBox>
      <CustomButton
        styles={{
          marginTop: '12px',
          padding: '0',
          width: '180px',
          height: '28px',
          fontWeight: 500,
          fontSize: '10px',
          backgroundColor: '#000000CC',
          color: '#FFFFFF',
          border: '1px solid #000000CC',
          '&:hover': {
            backgroundColor: '#FFFFFF',
            color: '#000000CC',
          },
        }}
      >
        Use your own texture
      </CustomButton>
    </CustomBox>
  );
};
