import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  TextField,
  IconButton,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Alert,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

interface ExerciseModalProps {
  open: boolean;
  onClose: () => void;
  exercise: {
    title: string;
    difficulty: string;
    steps: {
      instruction: string;
      guidance?: string;
      prompt?: string;
      expectedKeywords?: string[];
      minWords?: number;
    }[];
  };
}

const ExerciseModal: React.FC<ExerciseModalProps> = ({ open, onClose, exercise }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [responses, setResponses] = useState<string[]>(Array(exercise.steps.length).fill(''));
  const [feedback, setFeedback] = useState<string | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (activeStep === exercise.steps.length - 1) {
      // Last step - show completion
      setCompleted(true);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
      setFeedback(null);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setFeedback(null);
  };

  const handleResponseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newResponses = [...responses];
    newResponses[activeStep] = e.target.value;
    setResponses(newResponses);
  };

  const checkResponse = () => {
    const currentStep = exercise.steps[activeStep];
    const response = responses[activeStep].trim();

    // Check if response meets minimum word count
    if (currentStep.minWords && countWords(response) < currentStep.minWords) {
      setFeedback(`Your response is too short. Please write at least ${currentStep.minWords} words.`);
      return;
    }

    // Check if response includes expected keywords (if specified)
    if (currentStep.expectedKeywords && currentStep.expectedKeywords.length > 0) {
      const missingKeywords = currentStep.expectedKeywords.filter(
        keyword => !response.toLowerCase().includes(keyword.toLowerCase())
      );

      if (missingKeywords.length > 0) {
        setFeedback(`Good attempt! Consider including these elements: ${missingKeywords.join(', ')}`);
        return;
      }
    }

    // If passed all checks
    setFeedback('Good job! Your response includes the key elements. Feel free to proceed.');
  };

  const countWords = (text: string): number => {
    return text.split(/\s+/).filter(Boolean).length;
  };

  const handleReset = () => {
    setActiveStep(0);
    setResponses(Array(exercise.steps.length).fill(''));
    setFeedback(null);
    setCompleted(false);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { minHeight: '70vh' }
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{exercise.title}</Typography>
          <Box display="flex" alignItems="center">
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
                fontWeight: 'bold',
                mr: 2
              }}
            >
              {exercise.difficulty}
            </Box>
            <IconButton edge="end" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 3 }}>
          {exercise.steps.map((step, index) => (
            <Step key={index} completed={completed || index < activeStep}>
              <StepLabel>Step {index + 1}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {completed ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              Exercise Completed!
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Well done! You've completed the exercise on {exercise.title}.
            </Typography>
            <Typography variant="body1" paragraph>
              Remember to apply these skills in your actual academic writing.
            </Typography>
            <Button variant="outlined" onClick={handleReset} sx={{ mt: 2 }}>
              Do It Again
            </Button>
          </Box>
        ) : (
          <>
            <Typography variant="subtitle1" gutterBottom>
              Step {activeStep + 1}: {exercise.steps[activeStep].instruction}
            </Typography>

            {exercise.steps[activeStep].guidance && (
              <Paper elevation={0} sx={{ p: 2, mb: 3, bgcolor: '#f5f5f5' }}>
                <Typography variant="body2">
                  <strong>Guidance:</strong> {exercise.steps[activeStep].guidance}
                </Typography>
              </Paper>
            )}

            {exercise.steps[activeStep].prompt && (
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" fontWeight="medium" gutterBottom>
                  Prompt:
                </Typography>
                <Paper elevation={0} sx={{ p: 2, bgcolor: '#e3f2fd', borderLeft: '4px solid #1976d2' }}>
                  <Typography variant="body2">
                    {exercise.steps[activeStep].prompt}
                  </Typography>
                </Paper>
              </Box>
            )}

            <Box sx={{ mt: 3 }}>
              <Typography variant="body2" gutterBottom>
                Your Response:
              </Typography>
              <TextField
                multiline
                rows={6}
                fullWidth
                variant="outlined"
                value={responses[activeStep]}
                onChange={handleResponseChange}
                placeholder="Type your response here..."
              />
              {exercise.steps[activeStep].minWords && (
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                  Word count: {countWords(responses[activeStep])} 
                  (minimum: {exercise.steps[activeStep].minWords})
                </Typography>
              )}
            </Box>

            {feedback && (
              <Alert 
                severity={feedback.startsWith('Good job') ? "success" : "info"} 
                sx={{ mt: 2 }}
                icon={feedback.startsWith('Good job') ? <CheckCircleOutlineIcon /> : <ErrorOutlineIcon />}
              >
                {feedback}
              </Alert>
            )}
          </>
        )}
      </DialogContent>

      {!completed && (
        <DialogActions sx={{ px: 3, py: 2, justifyContent: 'space-between' }}>
          <Button 
            onClick={handleBack} 
            disabled={activeStep === 0}
          >
            Back
          </Button>
          
          <Box>
            <Button 
              onClick={checkResponse} 
              variant="outlined" 
              sx={{ mr: 1 }}
              disabled={!responses[activeStep].trim()}
            >
              Check
            </Button>
            <Button 
              onClick={handleNext} 
              variant="contained"
            >
              {activeStep === exercise.steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ExerciseModal; 