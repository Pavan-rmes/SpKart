import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export function Catgory() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="filter">
      <ArrowDropDownIcon onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 1 }}>All Products</Typography><hr />
        <Typography className="filterDown" sx={{ p: 1 }}>Latest</Typography>
        <Typography className="filterDown" sx={{ p: 1 }}>Men</Typography>
        <Typography className="filterDown" sx={{ p: 1 }}>Women</Typography>
      </Popover>
    </div>
  );
}
