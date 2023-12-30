import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from 'next/image';
import useStyles from './styles';
import Logo from "../../images/logo.png";
import { useDispatch } from 'react-redux';
// import { logout } from 'redux/reducer/authSlice';
import { logout } from '../../redux/reducer/authSlice';
import { useRouter } from 'next/router';
import Routes from '../../utils/Route';

const HeaderPage: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setAnchorEl(null);
    dispatch(logout());
    router.push(Routes.Home);
  };


  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Image src={Logo} alt="" className={classes.logoChatRoom} />
        </Typography>

        <div>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="header-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
            <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;