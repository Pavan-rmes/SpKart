import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Catgory } from './Catgory';
import IconButton from '@mui/material/IconButton';

export function Nav() {
  return (
    <div className="navBar">
      <div>
        <p className="siteName">SpKart</p>
      </div>
      <div>
        <p className="home">Home</p>
      </div>
      <div className="catagory">
        <p className="shop">shop</p>
        <Catgory></Catgory>
      </div>
      <div>
      <IconButton aria-label="delete">
        <Badge badgeContent={4} color="primary">
          <LocalMallOutlinedIcon />
        </Badge>
      </IconButton>

      </div>
    </div>
  );
}
