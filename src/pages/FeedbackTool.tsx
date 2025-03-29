import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Alert,
  AlertTitle,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Card,
  CardContent,
  SelectChangeEvent
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const FeedbackTool: React.FC = () => {
  const [text, setText] = useState('');
  const [assignmentType, setAssignmentType] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleAssignmentTypeChange = (event: SelectChangeEvent) => {
    setAssignmentType(event.target.value as string);
  };

  const handleSubmit = () => {
    if (!text.trim()) {
      setError('Please enter some text to receive feedback.');
      return;
    }
    
    if (!assignmentType) {
      setError('Please select an assignment type.');
      return;
    }

    setLoading(true);
    setError(null);
    
    // Simulate API call for feedback
    setTimeout(() => {
      setLoading(false);
      
      // In a real implementation, this would be an API call to a backend service
      // that would analyze the text and provide feedback
      setFeedback(generateSampleFeedback(text, assignmentType));
    }, 2000);
  };

  // This is a placeholder function that simulates AI feedback
  // In a real implementation, this would be handled by a backend service
  const generateSampleFeedback = (text: string, type: string): string => {
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    
    let feedback = `## Overall Feedback\n\n`;
    feedback += `Your text is ${wordCount} words long.\n\n`;
    
    if (wordCount < 50) {
      feedback += "Your response is quite short. Consider developing your ideas more fully with examples and evidence.\n\n";
    }
    
    feedback += `## Strengths\n\n`;
    feedback += `- You've made an attempt at academic writing\n`;
    feedback += `- Your text contains some academic vocabulary\n\n`;
    
    feedback += `## Areas for Improvement\n\n`;
    feedback += `- Consider adding more formal academic language\n`;
    feedback += `- Ensure you have a clear thesis statement\n`;
    feedback += `- Add more evidence to support your points\n`;
    feedback += `- Check for proper paragraph structure\n\n`;
    
    feedback += `## Language and Style\n\n`;
    
    if (text.includes('I think') || text.includes('I believe')) {
      feedback += `- Avoid using personal phrases like "I think" or "I believe" in academic writing\n`;
    }
    
    if (text.includes('a lot') || text.includes('lots of')) {
      feedback += `- Replace informal phrases like "a lot" with more precise academic terms like "numerous," "significant," or "substantial"\n`;
    }
    
    return feedback;
  };

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Writing Feedback Tool
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Submit your academic writing to receive helpful feedback
        </Typography>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Submit Your Writing
          </Typography>
          
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="assignment-type-label">Assignment Type</InputLabel>
            <Select
              labelId="assignment-type-label"
              id="assignment-type"
              value={assignmentType}
              label="Assignment Type"
              onChange={handleAssignmentTypeChange}
            >
              <MenuItem value="essay">Essay</MenuItem>
              <MenuItem value="research-paper">Research Paper</MenuItem>
              <MenuItem value="summary">Summary</MenuItem>
              <MenuItem value="report">Report</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            label="Paste your text here"
            multiline
            rows={10}
            value={text}
            onChange={handleTextChange}
            variant="outlined"
            fullWidth
            placeholder="Enter your academic writing here..."
            sx={{ mb: 2 }}
          />
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          
          <Button
            variant="contained"
            color="primary"
            endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Get Feedback'}
          </Button>
        </Box>
      </Paper>

      {feedback && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your Feedback
          </Typography>
          
          <Divider sx={{ mb: 2 }} />
          
          {feedback.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              // This is a section heading
              return (
                <Typography key={index} variant="h6" gutterBottom sx={{ mt: 2 }}>
                  {paragraph.replace('## ', '')}
                </Typography>
              );
            } else if (paragraph.includes('\n')) {
              // This is a list
              return (
                <Box key={index} sx={{ mb: 2 }}>
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <Typography key={lineIndex} paragraph>
                      {line}
                    </Typography>
                  ))}
                </Box>
              );
            } else {
              // Regular paragraph
              return (
                <Typography key={index} paragraph>
                  {paragraph}
                </Typography>
              );
            }
          })}
          
          <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
            Save Feedback
          </Button>
        </Paper>
      )}

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            <HelpOutlineIcon sx={{ mr: 1 }} />
            Tips for Getting Better Feedback
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography paragraph>
            1. Submit a complete piece of writing rather than just a fragment.
          </Typography>
          <Typography paragraph>
            2. Be specific about what type of assignment you're working on.
          </Typography>
          <Typography paragraph>
            3. If you have specific questions about your writing, include them at the end of your text.
          </Typography>
          <Typography paragraph>
            4. Review your feedback carefully and apply the suggestions to improve your writing.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeedbackTool; 