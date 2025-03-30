import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent,
  Container,
  Paper
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CreateIcon from '@mui/icons-material/Create';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ListAltIcon from '@mui/icons-material/ListAlt';
import SchoolIcon from '@mui/icons-material/School';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Learn Academic Writing Concepts',
      description: 'Understand the purposes, structures, and conventions of academic writing.',
      icon: <MenuBookIcon sx={{ fontSize: 40 }} color="primary" />,
      path: '/concepts'
    },
    {
      title: 'Step-by-Step Writing Process',
      description: 'Follow a clear, structured process with Hong Kong-focused examples and guidance.',
      icon: <ListAltIcon sx={{ fontSize: 40 }} color="primary" />,
      path: '/process'
    },
    {
      title: 'Subject-Specific Writing',
      description: 'Learn how to adapt your academic writing for different subjects like History and Science.',
      icon: <SchoolIcon sx={{ fontSize: 40 }} color="primary" />,
      path: '/subject-writing'
    },
    {
      title: 'Practice Your Skills',
      description: "Apply what you've learned with guided exercises and templates.",
      icon: <CreateIcon sx={{ fontSize: 40 }} color="primary" />,
      path: '/practice'
    },
    {
      title: 'Get Feedback on Your Writing',
      description: 'Submit your writing and receive helpful feedback to improve.',
      icon: <FeedbackIcon sx={{ fontSize: 40 }} color="primary" />,
      path: '/feedback'
    }
  ];

  return (
    <Container>
      {/* Hero Section */}
      <Paper 
        elevation={0}
        sx={{ 
          p: { xs: 3, md: 6 }, 
          backgroundImage: 'linear-gradient(to right, #bbdefb, #e3f2fd)',
          borderRadius: 2,
          mb: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{ mb: 2, fontWeight: 'bold' }}
          >
            Welcome to Academic Writing Tutor
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Your personal guide to mastering academic writing skills
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/concepts')}
            sx={{ mb: 2 }}
          >
            Start Learning
          </Button>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Designed for Hong Kong secondary school students
          </Typography>
        </Box>
      </Paper>

      {/* Feature Cards */}
      <Typography
        component="h2"
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: 'medium' }}
      >
        How We Can Help You
      </Typography>

      <Box sx={{ flexGrow: 1, mb: 6 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          {features.map((feature, index) => (
            <Box 
              key={index} 
              sx={{ 
                flex: { xs: '0 0 100%', md: '0 0 calc(33.333% - 16px)' },
                minWidth: { xs: '100%', md: 'calc(33.333% - 16px)' }
              }}
            >
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    {feature.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    onClick={() => navigate(feature.path)}
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Testimonial/Encouragement */}
      <Paper 
        sx={{ 
          p: 3, 
          bgcolor: 'primary.light', 
          color: 'white',
          borderRadius: 2,
          mb: 4
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          "Academic writing doesn't have to be difficult!"
        </Typography>
        <Typography variant="body1" align="center">
          Our simple, step-by-step approach helps you develop the skills and confidence to write excellent academic papers.
        </Typography>
      </Paper>
    </Container>
  );
};

export default LandingPage; 