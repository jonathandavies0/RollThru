import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./ButtonStyle.css"

export default function BasicPopover() {
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
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Skate Sesh Party Request
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>
            <div id="PopOver">
                <h1>Skate Sesh Details!</h1>
                <h3>Time: tbd </h3>
                <h3>Location: tbd </h3>
                <p>Hey guys! Would you guys want to be in a skate sesh with me? Please come down to the Skate Park at the location and time I requested!!</p>
            </div>
        </Typography>
      </Popover>
    </div>
  );
}
