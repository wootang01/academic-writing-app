import React from 'react';
import { Container, Typography, Box, Paper, Button, Card, CardContent, CardActions, Divider } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';

const GuidedPractice: React.FC = () => {
  const navigate = useNavigate();

  const practiceExercises = [
    {
      title: 'Writing an Introduction',
      difficulty: 'Beginner',
      description: 'Practice crafting effective introductions for academic essays.',
      instructions: 'Choose one of the provided topics and write an introduction that includes context, a thesis statement, and an outline of your main points.'
    },
    {
      title: 'Developing Arguments with Evidence',
      difficulty: 'Intermediate',
      description: 'Learn to support your arguments with appropriate evidence and citations.',
      instructions: 'Read the provided passage and identify claims that need evidence. Then, add appropriate evidence from the sources provided.'
    },
    {
      title: 'Writing Effective Conclusion Paragraphs',
      difficulty: 'Beginner',
      description: 'Practice creating conclusion paragraphs that effectively summarize and extend your arguments.',
      instructions: 'Review the sample essay and write a conclusion that summarizes the main points and provides a final insight.'
    },
    {
      title: 'Science Report Structure',
      difficulty: 'Intermediate',
      description: 'Practice writing sections of a scientific report following proper conventions.',
      instructions: 'Using the provided experiment data, write the Methods and Results sections of a scientific report.'
    },
    {
      title: 'Analyzing Historical Documents',
      difficulty: 'Advanced',
      description: 'Develop skills in analyzing and writing about historical primary sources.',
      instructions: 'Read the provided historical documents about Hong Kong history and write an analysis that contextualizes and interprets their significance.'
    }
  ];

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Guided Practice Exercises
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Apply what you've learned with these structured exercises tailored for Hong Kong students
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4, backgroundColor: '#e8f5e9' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AssignmentIcon sx={{ fontSize: 30, mr: 2, color: 'primary.main' }} />
          <Typography variant="h6">
            How to Use These Exercises
          </Typography>
        </Box>
        <Typography paragraph>
          Each exercise focuses on a specific aspect of academic writing. Complete them in order for a comprehensive learning experience, or choose ones that address your specific needs.
        </Typography>
        <Typography paragraph>
          After completing an exercise, you can use our Feedback Tool to receive suggestions for improvement.
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => navigate('/feedback')}
          size="small"
        >
          Go to Feedback Tool
        </Button>
      </Paper>

      <Box sx={{ mb: 4 }}>
        {practiceExercises.map((exercise, index) => (
          <React.Fragment key={index}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6" component="h2">
                    {exercise.title}
                  </Typography>
                  <Box 
                    sx={{ 
                      px: 1, 
                      py: 0.5, 
                      borderRadius: 1, 
                      bgcolor: 
                        exercise.difficulty === 'Beginner' ? '#e3f2fd' : 
                        exercise.difficulty === 'Intermediate' ? '#fff3e0' : '#fbe9e7',
                      color: 
                        exercise.difficulty === 'Beginner' ? '#0d47a1' : 
                        exercise.difficulty === 'Intermediate' ? '#e65100' : '#bf360c',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {exercise.difficulty}
                  </Box>
                </Box>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {exercise.description}
                </Typography>
                <Divider sx={{ my: 1.5 }} />
                <Typography variant="body2">
                  <strong>Instructions:</strong> {exercise.instructions}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">Start Exercise</Button>
                <Button size="small">View Example</Button>
              </CardActions>
            </Card>
          </React.Fragment>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" gutterBottom>
          Need more specific guidance for different subjects?
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => navigate('/subject-writing')}
          sx={{ mt: 1 }}
        >
          Explore Subject-Specific Writing
        </Button>
      </Box>
    </Container>
  );
};

export default GuidedPractice; 