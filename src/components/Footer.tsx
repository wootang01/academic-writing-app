import React from 'react';
import { Box, Typography, Container, Link, Grid, Divider, useTheme, IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';

const Footer: React.FC = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: 'Writing Concepts', path: '/concepts' },
    { title: 'Writing Process', path: '/process' },
    { title: 'Practice Exercises', path: '/practice' },
    { title: 'Writing Feedback', path: '/feedback' },
    { title: 'Subject Writing', path: '/subject-writing' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'white',
        color: 'text.secondary',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon 
                sx={{ 
                  fontSize: 28, 
                  color: theme.palette.primary.main, 
                  mr: 1.5 
                }} 
              />
              <Typography 
                variant="h6" 
                color="text.primary" 
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: '-0.01rem' 
                }}
              >
                Academic Writing Tutor
              </Typography>
            </Box>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                mb: 2,
                lineHeight: 1.6
              }}
            >
              Designed specifically to help Hong Kong secondary school students improve their academic writing skills with culturally relevant examples and targeted practice.
            </Typography>
            <Box sx={{ display: 'flex', mt: 3 }}>
              <IconButton 
                href="mailto:info@everwrite.com.hk" 
                aria-label="Email"
                sx={{ 
                  mr: 1, 
                  color: theme.palette.primary.main,
                  '&:hover': { bgcolor: `${theme.palette.primary.main}10` }
                }}
              >
                <EmailIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="#" 
                aria-label="Facebook"
                sx={{ 
                  mr: 1, 
                  color: theme.palette.primary.main,
                  '&:hover': { bgcolor: `${theme.palette.primary.main}10` }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="#" 
                aria-label="Twitter"
                sx={{ 
                  mr: 1, 
                  color: theme.palette.primary.main,
                  '&:hover': { bgcolor: `${theme.palette.primary.main}10` }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="#" 
                aria-label="LinkedIn"
                sx={{ 
                  color: theme.palette.primary.main,
                  '&:hover': { bgcolor: `${theme.palette.primary.main}10` }
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Navigation
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  underline="hover"
                  sx={{ 
                    mb: 1.5, 
                    display: 'inline-block',
                    color: 'text.secondary',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                    transition: 'color 0.2s'
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              color="text.primary" 
              gutterBottom
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph sx={{ lineHeight: 1.6 }}>
              For inquiries about our academic writing tools and services, please email us:
            </Typography>
            <Link 
              href="mailto:info@everwrite.com.hk" 
              color="primary" 
              sx={{ 
                fontWeight: 500, 
                display: 'inline-flex',
                alignItems: 'center',
                mb: 1
              }}
            >
              <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
              info@everwrite.com.hk
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ opacity: 0.8 }}
          >
            © {currentYear} Academic Writing Tutor for Hong Kong Students
          </Typography>
          <Typography 
            variant="caption" 
            color="text.secondary" 
            sx={{ 
              display: 'block', 
              mt: 1,
              opacity: 0.7
            }}
          >
            All rights reserved. Designed to help students excel in academic writing.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 