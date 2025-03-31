import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

// Import our custom components (will create these next)
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import WritingConcepts from './pages/WritingConcepts';
import GuidedPractice from './pages/GuidedPractice';
import FeedbackTool from './pages/FeedbackTool';
import WritingProcess from './pages/WritingProcess';
import SubjectWriting from './pages/SubjectWriting';

// Create a professional theme with a sleek color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#2e5077', // Professional deep blue
      light: '#4b79ad',
      dark: '#1a365d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#c04c4e', // Accent color (Chinese-inspired red)
      light: '#d8777a',
      dark: '#993235',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f9fc', // Light gray-blue background
      paper: '#ffffff',
    },
    text: {
      primary: '#2c3e50', // Darker text for better readability
      secondary: '#5d6b7b',
    },
    success: {
      main: '#3d8168', // Professional green
    },
    warning: {
      main: '#e09e45', // Warm gold shade
    },
    error: {
      main: '#c04c4e', // Consistent with secondary
    },
    info: {
      main: '#3e7cb9', // Lighter blue
    },
  },
  typography: {
    fontFamily: [
      '"Work Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      letterSpacing: '0',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      letterSpacing: '0',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.125rem',
      letterSpacing: '0',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '0.875rem',
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(44, 62, 80, 0.05)',
    '0px 4px 6px rgba(44, 62, 80, 0.07)',
    '0px 6px 8px rgba(44, 62, 80, 0.09)',
    '0px 8px 12px rgba(44, 62, 80, 0.10)',
    '0px 10px 14px rgba(44, 62, 80, 0.11)',
    '0px 12px 16px rgba(44, 62, 80, 0.12)',
    '0px 14px 18px rgba(44, 62, 80, 0.13)',
    '0px 16px 20px rgba(44, 62, 80, 0.14)',
    '0px 18px 22px rgba(44, 62, 80, 0.15)',
    '0px 20px 24px rgba(44, 62, 80, 0.16)',
    '0px 22px 26px rgba(44, 62, 80, 0.17)',
    '0px 24px 28px rgba(44, 62, 80, 0.18)',
    '0px 26px 30px rgba(44, 62, 80, 0.19)',
    '0px 28px 32px rgba(44, 62, 80, 0.20)',
    '0px 30px 34px rgba(44, 62, 80, 0.21)',
    '0px 32px 36px rgba(44, 62, 80, 0.22)',
    '0px 34px 38px rgba(44, 62, 80, 0.23)',
    '0px 36px 40px rgba(44, 62, 80, 0.24)',
    '0px 38px 42px rgba(44, 62, 80, 0.25)',
    '0px 40px 44px rgba(44, 62, 80, 0.26)',
    '0px 42px 46px rgba(44, 62, 80, 0.27)',
    '0px 44px 48px rgba(44, 62, 80, 0.28)',
    '0px 46px 50px rgba(44, 62, 80, 0.29)',
    '0px 48px 52px rgba(44, 62, 80, 0.30)'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: '8px 16px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 10,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh',
            background: theme.palette.background.default,
          }}
        >
          <Header />
          <Container component="main" sx={{ flexGrow: 1, py: 4 }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/concepts" element={<WritingConcepts />} />
              <Route path="/practice" element={<GuidedPractice />} />
              <Route path="/feedback" element={<FeedbackTool />} />
              <Route path="/process" element={<WritingProcess />} />
              <Route path="/subject-writing" element={<SubjectWriting />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
