import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[100],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' Academic Writing Coach for Hong Kong Students | '}
          <Link color="inherit" href="#">
            Contact Us
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 1 }}>
          Designed to help Hong Kong secondary students improve their academic writing skills
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 