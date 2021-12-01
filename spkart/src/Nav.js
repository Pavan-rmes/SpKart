import * as React from 'react';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Catgory } from './Catgory';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export function Nav({cart,setcart,clickCart,setClickCart}) {
  return (
    <div className="navBar">
      <div>
        <p className="siteName">SpKart</p>
      </div>
      <div>
        <p className="home">Home</p>
      </div>
      <div  className="catagory">
        <p className="shop">shop</p>
        <Catgory ></Catgory>
      </div>
      <div style={{marginLeft:"auto"}}>
      <Button variant="contained">Login</Button>
      </div>
      <div onClick={()=>setClickCart(true)} >
      <IconButton aria-label="delete">
        <Badge badgeContent={cart} color="primary">
          <LocalMallOutlinedIcon />
        </Badge>
      </IconButton>
      </div>
    </div>
  );
}

