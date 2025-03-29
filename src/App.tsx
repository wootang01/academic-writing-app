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

// Create a theme instance with colors suitable for students
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // A friendly blue color
    },
    secondary: {
      main: '#f50057', // A vibrant pink for accents
    },
    background: {
      default: '#f5f5f5', // Light gray background
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
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
            minHeight: '100vh'
          }}
        >
          <Header />
          <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
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
