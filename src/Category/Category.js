import React from 'react';
import Stack from "@mui/material/Stack";
import {catagories,colors} from "../constants";
import Button from "@mui/material/Button";

function Category({selectCategory,selectedcategory,}) {
    return (
        <Stack
            direction="row"
            className="p-2"
            style={{overflowX: 'scroll',
                whiteSpace: 'nowrap',
                gap: '12px',  }}>
            {catagories.map(item =>
      <Button
          onClick={() => selectedcategory(item.name)}

          type='button' className='category-btn btn ' key={item.name}
      style={{
          backgroundColor: selectCategory === item.name ? colors.fontColor : 'white',
          color:selectCategory === item.name ? 'white' : colors.fontColor,

      }}
      >
      <span>{item.icon}</span>
      <span style={{marginLeft:'10px'}}>{item.name}</span></Button>)}

  </Stack>
    );
}

export default Category;