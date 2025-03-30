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
  SelectChangeEvent,
  Chip,
  Grid,
  LinearProgress,
  Tooltip,
  useTheme
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import InfoIcon from '@mui/icons-material/Info';
import ErrorIcon from '@mui/icons-material/Error';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import DescriptionIcon from '@mui/icons-material/Description';

// Import our feedback service
import feedbackService, { 
  AssignmentType, 
  WritingFeedback, 
  // Remove or comment out the unused import
  // FeedbackItem,
  FeedbackCategory
} from '../services/feedbackService';

const FeedbackTool: React.FC = () => {
  const theme = useTheme();
  const [text, setText] = useState('');
  const [assignmentType, setAssignmentType] = useState<AssignmentType | ''>('');
  const [formLevel, setFormLevel] = useState<number>(3); // Default to Form 3
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<WritingFeedback | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<FeedbackCategory | 'overview'>('overview');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    // Clear any previous feedback when the text changes
    if (feedback) {
      setFeedback(null);
    }
  };

  const handleAssignmentTypeChange = (event: SelectChangeEvent) => {
    setAssignmentType(event.target.value as AssignmentType);
  };

  const handleFormLevelChange = (event: SelectChangeEvent) => {
    setFormLevel(Number(event.target.value));
  };

  const handleSubmit = async () => {
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
    
    try {
      // Use our feedback service to analyze the writing
      const result = await feedbackService.analyzeWriting(
        text, 
        assignmentType as AssignmentType,
        formLevel
      );
      
      setFeedback(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred. Please try again.');
      }
    }
  };

  const getSeverityIcon = (severity: 'info' | 'warning' | 'error') => {
    switch (severity) {
      case 'error':
        return <ErrorIcon color="error" />;
      case 'warning':
        return <WarningIcon color="warning" />;
      case 'info':
      default:
        return <InfoIcon color="info" />;
    }
  };

  const getCategoryName = (category: FeedbackCategory): string => {
    switch (category) {
      case 'grammar':
        return 'Grammar & Mechanics';
      case 'vocabulary':
        return 'Vocabulary Usage';
      case 'structure':
        return 'Structure & Organization';
      case 'coherence':
        return 'Coherence & Flow';
      case 'formality':
        return 'Formality & Tone';
      case 'style':
        return 'Writing Style';
      default:
        // Type assertion to string to handle the never type issue
        return (category as string).charAt(0).toUpperCase() + (category as string).slice(1);
    }
  };

  const renderCategoryTabs = () => {
    const categories: Array<FeedbackCategory | 'overview'> = [
      'overview', 'grammar', 'vocabulary', 'structure', 'coherence', 'formality', 'style'
    ];
    
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {categories.map((category) => (
          <Chip
            key={category}
            label={category === 'overview' ? 'Overview' : getCategoryName(category as FeedbackCategory)}
            onClick={() => setActiveTab(category)}
            color={activeTab === category ? 'primary' : 'default'}
            variant={activeTab === category ? 'filled' : 'outlined'}
            sx={{ fontSize: '0.85rem' }}
          />
        ))}
      </Box>
    );
  };

  const renderOverviewSection = () => {
    if (!feedback) return null;
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Writing Analysis Overview
        </Typography>
        
        {/* @ts-ignore */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Word Count
                </Typography>
                <Typography variant="h5">
                  {feedback.overview.wordCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Grammar Score
                </Typography>
                <Typography variant="h5">
                  {feedback.overview.grammarScore.toFixed(0)}/100
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={feedback.overview.grammarScore} 
                  color={
                    feedback.overview.grammarScore > 70 ? "success" : 
                    feedback.overview.grammarScore > 50 ? "warning" : "error"
                  }
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Formality Score
                </Typography>
                <Typography variant="h5">
                  {feedback.overview.formalityScore.toFixed(0)}/100
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={feedback.overview.formalityScore} 
                  color={
                    feedback.overview.formalityScore > 70 ? "success" : 
                    feedback.overview.formalityScore > 50 ? "warning" : "error"
                  }
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
          
          {/* @ts-ignore */}
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  Readability Score
                </Typography>
                <Typography variant="h5">
                  {feedback.overview.readabilityScore.toFixed(0)}/100
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={feedback.overview.readabilityScore} 
                  color={
                    feedback.overview.readabilityScore > 40 && feedback.overview.readabilityScore < 80 ? "success" : 
                    "warning"
                  }
                  sx={{ mt: 1 }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            <CheckCircleIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'success.main' }} />
            Strengths
          </Typography>
          
          {feedback.strengths.map((strength, index) => (
            <Alert key={index} severity="success" sx={{ mb: 1 }} icon={<CheckCircleIcon />}>
              {strength}
            </Alert>
          ))}
        </Box>
        
        <Box>
          <Typography variant="h6" gutterBottom>
            <TipsAndUpdatesIcon sx={{ verticalAlign: 'middle', mr: 1, color: 'warning.main' }} />
            Areas for Improvement
          </Typography>
          
          {feedback.improvements.map((item, index) => (
            <Alert 
              key={index} 
              severity={item.severity} 
              sx={{ mb: 1 }}
              icon={getSeverityIcon(item.severity)}
            >
              <AlertTitle>{getCategoryName(item.category)}</AlertTitle>
              {item.description}
              {item.suggestion && (
                <Typography variant="body2" sx={{ mt: 1, fontStyle: 'italic' }}>
                  Suggestion: {item.suggestion}
                </Typography>
              )}
            </Alert>
          ))}
        </Box>
      </Box>
    );
  };

  const renderCategorySection = (category: FeedbackCategory) => {
    if (!feedback) return null;
    
    const feedbackItems = feedback.detailedFeedback[category];
    
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          {getCategoryName(category)} Feedback
        </Typography>
        
        {feedbackItems.length === 0 ? (
          <Alert severity="success">
            No issues detected in this category. Good job!
          </Alert>
        ) : (
          feedbackItems.map((item, index) => (
            <Alert 
              key={index} 
              severity={item.severity} 
              sx={{ mb: 2 }}
              icon={getSeverityIcon(item.severity)}
            >
              <AlertTitle>{item.description}</AlertTitle>
              {item.suggestion && (
                <Typography variant="body2">
                  <strong>Suggestion:</strong> {item.suggestion}
                </Typography>
              )}
            </Alert>
          ))
        )}
      </Box>
    );
  };

  const renderFeedbackContent = () => {
    if (!feedback) return null;
    
    if (activeTab === 'overview') {
      return renderOverviewSection();
    } else {
      return renderCategorySection(activeTab as FeedbackCategory);
    }
  };

  return (
    <Container maxWidth="lg">
      {/* Professional Header Section */}
      <Box sx={{ mb: 5, textAlign: 'center' }}>
        <Typography 
          component="h1" 
          variant="h3" 
          gutterBottom
          sx={{ 
            fontWeight: 700, 
            color: theme.palette.primary.dark,
            mb: 2
          }}
        >
          Writing Feedback Tool
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ 
            maxWidth: 800, 
            mx: 'auto',
            mb: 4,
            fontWeight: 400
          }}
        >
          Submit your academic writing to receive detailed feedback tailored to your education level
        </Typography>
        
        <Divider sx={{ mb: 5 }} />
      </Box>

      {/* Professional Submission Form */}
      <Paper 
        elevation={2} 
        sx={{ 
          p: 4, 
          mb: 5, 
          borderRadius: 2,
          boxShadow: '0 8px 40px -12px rgba(0,0,0,0.1)',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <DescriptionIcon sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Submit Your Writing
            </Typography>
          </Box>
          
          {/* @ts-ignore */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {/* @ts-ignore */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="assignment-type-label">Assignment Type</InputLabel>
                <Select
                  labelId="assignment-type-label"
                  id="assignment-type"
                  value={assignmentType}
                  label="Assignment Type"
                  onChange={handleAssignmentTypeChange}
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.15)' } }}
                >
                  <MenuItem value="essay">Essay</MenuItem>
                  <MenuItem value="research-paper">Research Paper</MenuItem>
                  <MenuItem value="summary">Summary</MenuItem>
                  <MenuItem value="report">Report</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            {/* @ts-ignore */}
            <Grid item xs={12} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="form-level-label">Form Level</InputLabel>
                <Select
                  labelId="form-level-label"
                  id="form-level"
                  value={formLevel.toString()}
                  label="Form Level"
                  onChange={handleFormLevelChange}
                  sx={{ '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 0, 0, 0.15)' } }}
                >
                  <MenuItem value="1">Form 1 (Beginner)</MenuItem>
                  <MenuItem value="2">Form 2 (Beginner)</MenuItem>
                  <MenuItem value="3">Form 3 (Intermediate)</MenuItem>
                  <MenuItem value="4">Form 4 (Intermediate)</MenuItem>
                  <MenuItem value="5">Form 5 (Advanced)</MenuItem>
                  <MenuItem value="6">Form 6 (Advanced)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          
          <TextField
            label="Enter your academic writing"
            multiline
            rows={10}
            value={text}
            onChange={handleTextChange}
            variant="outlined"
            fullWidth
            placeholder="Paste your text here for analysis..."
            sx={{ 
              mb: 3,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgba(0, 0, 0, 0.15)',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.light',
                },
              },
            }}
          />
          
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 1 }}>
              <AlertTitle>Error</AlertTitle>
              {error}
            </Alert>
          )}
          
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              onClick={handleSubmit}
              endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              sx={{ 
                px: 4, 
                py: 1.2,
                borderRadius: '30px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              {loading ? 'Analyzing...' : 'Get Feedback'}
            </Button>
          </Box>
        </Box>
      </Paper>

      {feedback && (
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Your Feedback
          </Typography>
          
          <Divider sx={{ mb: 2 }} />
          
          {renderCategoryTabs()}
          {renderFeedbackContent()}
          
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" color="primary" onClick={() => setFeedback(null)}>
              Clear Feedback
            </Button>
            
            <Tooltip title="This feature will be available in a future update">
              <span>
                <Button variant="contained" color="primary" disabled>
                  Save Feedback
                </Button>
              </span>
            </Tooltip>
          </Box>
        </Paper>
      )}

      {/* Tips Card with updated styling */}
      <Card sx={{ mb: 5, borderRadius: 2, boxShadow: '0 8px 40px -12px rgba(0,0,0,0.1)' }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center', fontWeight: 600, mb: 3 }}>
            <HelpOutlineIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
            Tips for Getting Better Feedback
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ pl: 2 }}>
            <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              1. Submit a complete piece of writing rather than just a fragment to get more comprehensive feedback.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              2. Select the correct assignment type and your current form level for the most relevant feedback.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              3. Use the category tabs to explore different aspects of your writing after receiving feedback.
            </Typography>
            <Typography paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
              4. Review and apply the suggestions before submitting a revised version for additional feedback.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeedbackTool; 