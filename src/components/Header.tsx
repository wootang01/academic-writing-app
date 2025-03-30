import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Menu, 
  MenuItem, 
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import ListAltIcon from '@mui/icons-material/ListAlt';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path: string) => {
    navigate(path);
    handleClose();
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          component={Link}
          to="/"
        >
          <SchoolIcon />
        </IconButton>
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
        >
          Academic Writing Tutor
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleMenuItemClick('/concepts')}>
                Writing Concepts
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/process')}>
                Writing Process
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/practice')}>
                Practice Exercises
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/feedback')}>
                Writing Feedback
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick('/subject-writing')}>
                Subject Writing
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box>
            <Button 
              color="inherit" 
              component={Link} 
              to="/concepts"
            >
              Writing Concepts
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/process"
              startIcon={<ListAltIcon />}
            >
              Writing Process
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/practice"
            >
              Practice Exercises
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/feedback"
            >
              Writing Feedback
            </Button>
            <Button 
              color="inherit" 
              component={Link} 
              to="/subject-writing"
            >
              Subject Writing
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header; 