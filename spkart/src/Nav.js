import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Catgory } from './Catgory';

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
        <Badge badgeContent={4} color="primary">
          <LocalMallOutlinedIcon />
        </Badge>

      </div>
    </div>
  );
}
