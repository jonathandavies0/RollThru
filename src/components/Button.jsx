import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./ButtonStyle.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

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

  const time = [
    {
      value: 'am',
      label: 'AM',
    },
    {
      value: 'pm',
      label: 'PM',
    },
  ];

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
                <h3>Time: 
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="outlined-basic" label="Hour" variant="outlined" />
                        <TextField
                        select
                        label="AM/PM"
                        defaultValue="pm"
                        >
                        {time.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Box>
                </h3>
                <h3>Location: tbd </h3>
                <p>Hey guys! Would you guys want to be in a skate sesh with me? Please come down to the Skate Park at the location and time I requested!!</p>
            </div>
        </Typography>
      </Popover>
      
    </div>
  );
}
