import React, { useState } from 'react';
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';
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
  useTheme,
  Container,
  Divider,
  Avatar,
  ListItemIcon,
  Tooltip
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ScienceIcon from '@mui/icons-material/Science';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [imageLoaded, setImageLoaded] = useState(true);
  
  // Determine the correct image path based on the environment
  const logoPath = process.env.NODE_ENV === 'development' 
    ? '/images/logo.png'  // Local development path
    : '/academic-writing-app/images/logo.png'; // Production path
  
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Writing Concepts', path: '/concepts', icon: <MenuBookIcon /> },
    { name: 'Writing Process', path: '/process', icon: <ListAltIcon /> },
    { name: 'Practice Exercises', path: '/practice', icon: <CreateIcon /> },
    { name: 'Writing Feedback', path: '/feedback', icon: <FeedbackIcon /> },
    { name: 'Subject Writing', path: '/subject-writing', icon: <ScienceIcon /> }
  ];

  return (
    <AppBar 
      position="sticky" 
      color="primary" 
      elevation={0}
      sx={{ 
        bgcolor: 'white', 
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          {/* Logo and Brand */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              mr: 3
            }}
            component={RouterLink}
            to="/"
          >
            <Avatar 
              sx={{ 
                bgcolor: 'primary.main', 
                width: isMobile ? 36 : 40, 
                height: isMobile ? 36 : 40,
                mr: 1.5,
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              {imageLoaded ? (
                <img 
                  src={logoPath}
                  alt="Everwrite Logo"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(false)}
                />
              ) : (
                'E'
              )}
            </Avatar>
            
            <Typography 
              variant={isMobile ? "h6" : "h5"} 
              component="div" 
              sx={{ 
                fontWeight: 600,
                color: 'primary.main',
                letterSpacing: '-0.01rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Everwrite Tutor
            </Typography>
          </Box>

          {/* Mobile Menu */}
          {isMobile ? (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  elevation: 3,
                  sx: { 
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 200
                  }
                }}
              >
                {navItems.map((item) => (
                  <MenuItem 
                    key={item.path} 
                    onClick={() => handleMenuItemClick(item.path)}
                    sx={{ 
                      py: 1.5,
                      color: isActive(item.path) ? 'primary.main' : 'inherit',
                      bgcolor: isActive(item.path) ? 'rgba(46, 80, 119, 0.08)' : 'transparent'
                    }}
                  >
                    <ListItemIcon sx={{ color: isActive(item.path) ? 'primary.main' : 'text.secondary' }}>
                      {item.icon}
                    </ListItemIcon>
                    <Typography variant="body1">
                      {item.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <>
              <Box sx={{ display: 'flex', flexGrow: 1, ml: 2 }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      mx: isTablet ? 0.5 : 1,
                      px: isTablet ? 1.5 : 2,
                      py: 1.5,
                      color: isActive(item.path) ? 'primary.main' : 'text.secondary',
                      borderBottom: '2px solid',
                      borderColor: isActive(item.path) ? 'primary.main' : 'transparent',
                      borderRadius: 0,
                      '&:hover': {
                        bgcolor: 'rgba(46, 80, 119, 0.04)',
                        borderColor: isActive(item.path) ? 'primary.main' : 'primary.light',
                      }
                    }}
                    startIcon={isTablet ? null : item.icon}
                  >
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        fontWeight: isActive(item.path) ? 600 : 500,
                        whiteSpace: 'nowrap' 
                      }}
                    >
                      {isTablet ? (
                        <Tooltip title={item.name}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {item.icon}
                          </Box>
                        </Tooltip>
                      ) : (
                        item.name
                      )}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 