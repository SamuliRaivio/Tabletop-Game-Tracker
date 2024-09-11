import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigateBar = ({ players, currentPlayer, setCurrentPlayer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePlayerClick = (p) => {
    setCurrentPlayer(p);
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" onClick={handleClick}>
              Change User
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {players.length > 0 ? (
                players.map((p) => (
                  <MenuItem key={p.id} onClick={() => handlePlayerClick(p)}>
                    {p.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem onClick={handleClose}>No players</MenuItem>
              )}
            </Menu>
            <Link to="/battle">
              <Button color="inherit">Battle</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavigateBar;
