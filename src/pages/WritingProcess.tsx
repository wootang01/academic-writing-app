import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  TextField,
  Tooltip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TranslateIcon from '@mui/icons-material/Translate';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Define the type for translations
type TranslationDictionary = {
  [key: string]: string;
};

const WritingProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Translations for key terms (English to Cantonese)
  const translations: TranslationDictionary = {
    "academic writing": "學術寫作",
    "thesis statement": "論點",
    "evidence": "證據",
    "paragraph": "段落",
    "introduction": "引言",
    "conclusion": "結論",
    "research": "研究",
    "analysis": "分析",
    "argument": "論據",
    "citation": "引用"
  };

  const TermWithTranslation = ({ term }: { term: string }) => {
    const translatedTerm = translations[term.toLowerCase()] || term;
    
    return (
      <Tooltip title={showTranslation ? translatedTerm : ""} arrow placement="top">
        <span style={{ borderBottom: "1px dotted", cursor: "help" }}>{term}</span>
      </Tooltip>
    );
  };

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Academic Writing Process
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          A step-by-step guide for Hong Kong secondary school students
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <IconButton 
            color={showTranslation ? "primary" : "default"} 
            onClick={() => setShowTranslation(!showTranslation)}
            sx={{ mr: 1 }}
          >
            <TranslateIcon />
          </IconButton>
          <Typography variant="body2" color="text.secondary">
            {showTranslation ? "Translation enabled" : "Click for Cantonese translation of key terms"}
          </Typography>
        </Box>
      </Box>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {/* Step 1: Understanding the Purpose and Audience */}
          <Step>
            <StepLabel>
              <Typography variant="h6">
                Understanding Purpose and Audience
              </Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <Typography paragraph>
                  Before you start writing, you need to understand why you're writing (<TermWithTranslation term="purpose" />) and who will read your work (<TermWithTranslation term="audience" />).
                </Typography>
                
                <Box sx={{ bgcolor: '#e3f2fd', p: 2, borderRadius: 2, mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Common Purposes of Academic Writing:</strong>
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="To inform or explain (informative/expository)" 
                        secondary="Example: Explaining how the MTR system in Hong Kong works"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="To persuade (argumentative/persuasive)" 
                        secondary="Example: Arguing why Hong Kong should implement more green spaces"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="To analyze (analytical)" 
                        secondary="Example: Analyzing the effects of tourism on Hong Kong's local culture"
                      />
                    </ListItem>
                  </List>
                </Box>
                
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Key Questions to Answer:</strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <HelpOutlineIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="What is the assignment asking you to do? (explain, analyze, argue, etc.)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HelpOutlineIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Who will read your writing? (teacher, classmates, general academic audience)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <HelpOutlineIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="What evidence or information will this audience expect?" />
                  </ListItem>
                </List>

                <Accordion sx={{ mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color="primary" sx={{ fontWeight: 'medium' }}>
                      Hong Kong Example: Comparing School Uniforms
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography paragraph>
                      <strong>Assignment:</strong> Write an academic essay comparing school uniforms in Hong Kong with those in another country.
                    </Typography>
                    <Typography paragraph>
                      <strong>Purpose:</strong> To compare and analyze differences and similarities (analytical)
                    </Typography>
                    <Typography paragraph>
                      <strong>Audience:</strong> Your English teacher and potentially other educators
                    </Typography>
                    <Typography paragraph>
                      <strong>Expected evidence:</strong> Specific examples of uniform styles, historical context, cultural significance, and potential benefits/drawbacks of different approaches
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Continue
                </Button>
              </Box>
            </StepContent>
          </Step>

          {/* Step 2: Research and Planning */}
          <Step>
            <StepLabel>
              <Typography variant="h6">
                Research and Planning
              </Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <Typography paragraph>
                  Good academic writing is based on solid <TermWithTranslation term="research" /> and careful planning. This step helps you gather information and organize your ideas before you start writing.
                </Typography>
                
                <Card sx={{ mb: 3, bgcolor: '#fafafa' }}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="primary">
                      Research Tips for Hong Kong Students
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <LightbulbIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Use Hong Kong Public Libraries' online databases" 
                          secondary="Your school may provide access to academic resources - ask your teacher"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <LightbulbIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Check reliable local sources" 
                          secondary="South China Morning Post, Hong Kong Free Press, university publications"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <LightbulbIcon color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Record all source information for citations" 
                          secondary="Author, title, publication date, URL, etc."
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
                
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Creating an <TermWithTranslation term="outline" />:</strong>
                </Typography>
                <Typography paragraph>
                  An outline is a plan for your writing. It helps you organize your ideas before you start writing.
                </Typography>
                
                <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 2, mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    <strong>Basic Outline Structure:</strong>
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText 
                        primary="I. Introduction" 
                        secondary="A. Background information  B. Thesis statement"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="II. First Main Point" 
                        secondary="A. Supporting evidence  B. Example  C. Analysis"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="III. Second Main Point" 
                        secondary="A. Supporting evidence  B. Example  C. Analysis"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="IV. Third Main Point" 
                        secondary="A. Supporting evidence  B. Example  C. Analysis"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText 
                        primary="V. Conclusion" 
                        secondary="A. Summary of main points  B. Restatement of thesis  C. Final thoughts"
                      />
                    </ListItem>
                  </List>
                </Box>
                
                <Accordion sx={{ mt: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color="primary" sx={{ fontWeight: 'medium' }}>
                      Sample Outline: Hong Kong Tourism Impact
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      <strong>Topic:</strong> The Impact of Tourism on Hong Kong's Local Culture
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      <strong>Thesis:</strong> While tourism has brought economic benefits to Hong Kong, it has both positive and negative effects on local culture that must be carefully managed.
                    </Typography>
                    <Typography component="div" variant="body2">
                      <Box component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
                        I. Introduction
                           A. Brief overview of Hong Kong's tourism industry
                           B. Thesis statement about tourism's cultural impact

                        II. Economic Benefits of Tourism
                           A. Job creation in hospitality and service sectors
                           B. Revenue from attractions like Disneyland and Ocean Park
                           C. Boost to local businesses and markets

                        III. Positive Cultural Impacts
                           A. Preservation of cultural sites (e.g., Tai O fishing village)
                           B. Renewed interest in local traditions
                           C. Cultural exchange between locals and visitors

                        IV. Negative Cultural Impacts
                           A. Overcrowding in neighborhoods like Mong Kok
                           B. Commercialization of traditions
                           C. Rising costs affecting local businesses

                        V. Sustainable Tourism Strategies
                           A. Community-based tourism initiatives
                           B. Policies to protect local neighborhoods
                           C. Educational programs for tourists

                        VI. Conclusion
                           A. Summary of tourism's dual impact
                           B. Importance of balanced approach
                           C. Future outlook for Hong Kong's cultural preservation
                      </Box>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Continue
                </Button>
              </Box>
            </StepContent>
          </Step>

          {/* Step 3: Drafting */}
          <Step>
            <StepLabel>
              <Typography variant="h6">
                Drafting Your Academic Writing
              </Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <Typography paragraph>
                  Now it's time to write your first <TermWithTranslation term="draft" />. Don't worry about making it perfect—just focus on getting your ideas on paper following your outline.
                </Typography>
                
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Structure of an Academic Paper:</strong>
                  </Typography>
                  
                  <Accordion defaultExpanded>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography color="primary">
                        <TermWithTranslation term="Introduction" />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        The introduction grabs the reader's attention, provides background information, and presents your <TermWithTranslation term="thesis statement" />.
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="Start with an interesting hook (fact, question, quote)" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="Provide necessary background information" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="End with a clear thesis statement that presents your main argument or point" />
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography color="primary">
                        Body Paragraphs
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        Each body paragraph should focus on one main idea that supports your thesis.
                      </Typography>
                      <Typography variant="subtitle2" gutterBottom>
                        <strong>PEEL Structure for Body Paragraphs:</strong>
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>P</Typography>
                          </ListItemIcon>
                          <ListItemText 
                            primary="Point" 
                            secondary="Start with a topic sentence that states the main idea of the paragraph"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>E</Typography>
                          </ListItemIcon>
                          <ListItemText 
                            primary="Evidence" 
                            secondary="Provide facts, statistics, examples, or quotes that support your point"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>E</Typography>
                          </ListItemIcon>
                          <ListItemText 
                            primary="Explanation" 
                            secondary="Explain how your evidence supports your point and connects to your thesis"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>L</Typography>
                          </ListItemIcon>
                          <ListItemText 
                            primary="Link" 
                            secondary="Connect back to your thesis or transition to the next paragraph"
                          />
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                  
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography color="primary">
                        <TermWithTranslation term="Conclusion" />
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography paragraph>
                        The conclusion summarizes your main points and leaves the reader with final thoughts.
                      </Typography>
                      <List dense>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="Restate your thesis (using different words)" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="Summarize your main points" />
                        </ListItem>
                        <ListItem>
                          <ListItemIcon>
                            <CheckCircleOutlineIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText primary="End with a thought-provoking statement, recommendation, or call to action" />
                        </ListItem>
                      </List>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Language Tips for Hong Kong Students:</strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Avoid direct translation from Cantonese to English" 
                      secondary="Some expressions don't translate directly - learn common academic phrases instead"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Be careful with articles (a, an, the)" 
                      secondary="These don't exist in Cantonese but are very important in English"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Use connecting words to improve flow" 
                      secondary="However, therefore, furthermore, in addition, etc."
                    />
                  </ListItem>
                </List>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Continue
                </Button>
              </Box>
            </StepContent>
          </Step>

          {/* Step 4: Revising */}
          <Step>
            <StepLabel>
              <Typography variant="h6">
                Revising and Editing
              </Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <Typography paragraph>
                  <TermWithTranslation term="Revision" /> is when you improve the content and organization of your writing. Editing focuses on fixing language errors.
                </Typography>
                
                <Box sx={{ bgcolor: '#fff3e0', p: 2, borderRadius: 2, mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Revision Checklist:</strong>
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Does my introduction clearly state my thesis?" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Does each paragraph have a clear main idea?" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Is my evidence relevant and well-explained?" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Does my conclusion effectively summarize my points?" 
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Is my writing organized in a logical way?" 
                      />
                    </ListItem>
                  </List>
                </Box>
                
                <Box sx={{ bgcolor: '#ffebee', p: 2, borderRadius: 2, mb: 3 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    <strong>Editing Checklist for Hong Kong Students:</strong>
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Check verb tenses" 
                        secondary="Make sure you're using the correct tense consistently"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Review article usage (a, an, the)" 
                        secondary="A common challenge for Cantonese speakers"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Check subject-verb agreement" 
                        secondary="The subject and verb must agree in number (singular/plural)"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Look for word order issues" 
                        secondary="English word order is different from Cantonese"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Check prepositions" 
                        secondary="Prepositions like 'in', 'on', 'at' are often challenging"
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleOutlineIcon color="secondary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary="Verify spelling and punctuation" 
                        secondary="Use tools like Grammarly or Microsoft Word's spelling checker"
                      />
                    </ListItem>
                  </List>
                </Box>
                
                <Typography variant="subtitle1" gutterBottom>
                  <strong>Revision Tips:</strong>
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Read your writing aloud" 
                      secondary="This helps you catch awkward phrasing and errors"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Get feedback from others" 
                      secondary="Ask a classmate, teacher, or use the feedback tool in this app"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LightbulbIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Take a break before editing" 
                      secondary="This gives you fresh eyes to spot problems"
                    />
                  </ListItem>
                </List>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  startIcon={<ArrowBackIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Finish
                </Button>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
        
        {activeStep === 4 && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Congratulations! You've completed the academic writing process guide.
            </Typography>
            <Typography paragraph>
              Remember that good academic writing takes practice. Use what you've learned here, and don't be afraid to ask for help from your teachers.
            </Typography>
            <Button onClick={handleReset} variant="outlined" sx={{ mt: 1, mr: 1 }}>
              Review the Process Again
            </Button>
            <Button 
              variant="contained"
              color="primary"
              component="a"
              href="/practice" 
              sx={{ mt: 1, mr: 1 }}
            >
              Try Practice Exercises
            </Button>
          </Paper>
        )}
      </Paper>

      <Paper sx={{ p: 3, bgcolor: '#e8eaf6', mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Need More Help?
        </Typography>
        <Typography paragraph>
          Visit the Feedback Tool to submit your academic writing for personalized suggestions, or explore the Practice Exercises to strengthen your skills.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chip label="Hong Kong Public Libraries Resources" color="primary" component="a" href="https://www.hkpl.gov.hk/en/e-resources/index.html" clickable />
          <Chip label="HKEAA Writing Resources" color="primary" component="a" href="https://www.hkeaa.edu.hk/en/" clickable />
          <Chip label="Practice Exercises" color="secondary" component="a" href="/practice" clickable />
        </Box>
      </Paper>
    </Container>
  );
};

export default WritingProcess; 