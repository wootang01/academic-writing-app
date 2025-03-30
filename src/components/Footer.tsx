import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'white',
        color: 'text.secondary',
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Contact Information */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            mb: 3
          }}
        >
          <Typography 
            variant="h6" 
            color="text.primary" 
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Contact Us
          </Typography>
          <Typography variant="body2" paragraph sx={{ lineHeight: 1.6, textAlign: 'center' }}>
            For inquiries about our academic writing tools and services, please email us:
          </Typography>
          <Link 
            href="mailto:info@everwrite.com.hk" 
            color="primary" 
            sx={{ 
              fontWeight: 500, 
              display: 'inline-flex',
              alignItems: 'center',
              mb: 2
            }}
          >
            <EmailIcon sx={{ mr: 1, fontSize: 18 }} />
            info@everwrite.com.hk
          </Link>
        </Box>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ opacity: 0.8 }}
          >
            © {currentYear} David James Woo
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