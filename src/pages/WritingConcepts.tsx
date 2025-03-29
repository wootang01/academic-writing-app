import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SchoolIcon from '@mui/icons-material/School';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const WritingConcepts: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Academic Writing Concepts
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Learn the essential concepts that will help you excel in academic writing
        </Typography>
      </Box>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? "auto" : undefined}
          aria-label="academic writing concept tabs"
        >
          <Tab label="Introduction" icon={<MenuBookIcon />} iconPosition="start" />
          <Tab label="Purpose & Structure" icon={<FormatListBulletedIcon />} iconPosition="start" />
          <Tab label="Language & Style" icon={<FormatQuoteIcon />} iconPosition="start" />
          <Tab label="Examples" icon={<SchoolIcon />} iconPosition="start" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>
            What is Academic Writing?
          </Typography>
          <Typography paragraph>
            Academic writing is a formal style of writing used in universities and scholarly publications. It's different from the writing you might do on social media or in creative stories.
          </Typography>
          
          <Box sx={{ my: 3, p: 3, bgcolor: 'primary.light', color: 'white', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Why is Academic Writing Important?
            </Typography>
            <Typography paragraph>
              Academic writing helps you:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Communicate your ideas clearly and precisely" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Demonstrate your understanding of a subject" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Develop critical thinking skills" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary="Succeed in school and university" />
              </ListItem>
            </List>
          </Box>

          <Typography variant="h6" gutterBottom>
            Key Differences from Everyday Writing
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Formal vs. Informal Language</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing uses formal language, avoiding slang, contractions, and casual expressions.
              </Typography>
              <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" color="error">
                  Informal: Kids don't like doing lots of homework.
                </Typography>
              </Box>
              <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" color="success.main">
                  Formal: Students often find excessive homework assignments challenging.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Evidence-Based vs. Opinion-Based</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing requires evidence and references to support claims, rather than just stating opinions.
              </Typography>
              <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" color="error">
                  Opinion-based: I think pollution is the biggest problem in the world.
                </Typography>
              </Box>
              <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" color="success.main">
                  Evidence-based: According to the World Health Organization (2022), pollution contributes to approximately 9 million premature deaths annually.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Structured vs. Free-flowing</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing follows specific structures with clear sections like introduction, body paragraphs, and conclusion.
              </Typography>
              <Typography paragraph>
                Each paragraph typically has a topic sentence, supporting evidence, and a concluding sentence.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              onClick={() => setTabValue(1)}
              endIcon={<FormatListBulletedIcon />}
            >
              Next: Purpose & Structure
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>
            Common Types of Academic Writing
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Essays</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Essays are the most common form of academic writing for students. They present an argument or discussion on a specific topic.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Basic Essay Structure:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Introduction" 
                    secondary="Presents the topic and your thesis statement (main argument)" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Body Paragraphs" 
                    secondary="Each paragraph focuses on one main idea that supports your thesis" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Conclusion" 
                    secondary="Summarizes your main points and restates your thesis in a new way" 
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Research Papers</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Research papers present original research or analyze existing research on a specific topic.
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Research Paper Structure:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Abstract" 
                    secondary="A brief summary of your paper (100-250 words)" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Introduction" 
                    secondary="Background information and research question" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Methodology" 
                    secondary="How the research was conducted" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Results" 
                    secondary="What you found" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Discussion" 
                    secondary="What the results mean" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="Conclusion" 
                    secondary="Summary of findings and implications" 
                  />
                </ListItem>
                <ListItem>
                  <ListItemText 
                    primary="References" 
                    secondary="List of sources cited" 
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              onClick={() => setTabValue(2)}
              endIcon={<FormatQuoteIcon />}
            >
              Next: Language & Style
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>
            Academic Language Features
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Formal Vocabulary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing uses precise, sophisticated vocabulary and avoids casual expressions.
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Examples of Informal vs. Formal Word Choices:
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    get → obtain
                  </Typography>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    a lot of → numerous/substantial
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    show → demonstrate/illustrate
                  </Typography>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    bad → negative/detrimental
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    good → beneficial/advantageous
                  </Typography>
                  <Typography variant="body2" color="error" sx={{ width: '45%' }}>
                    big → significant/substantial
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Avoiding Personal Language</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing often avoids using the first person ("I", "we") and focuses on the topic rather than the writer.
              </Typography>
              <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" color="error">
                  Personal: I think that the experiment shows important results.
                </Typography>
              </Box>
              <Box sx={{ bgcolor: '#e8f5e9', p: 2, borderRadius: 1 }}>
                <Typography variant="subtitle2" color="success.main">
                  Impersonal: The experiment demonstrates significant results.
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Note: Some academic disciplines now accept the use of "I" in specific contexts, but it's generally good to check with your teacher.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Cohesion and Coherence</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography paragraph>
                Academic writing uses linking words and phrases to connect ideas and help the reader follow your argument.
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Examples of Linking Words:
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" gutterBottom>
                  <strong>To add information:</strong> furthermore, in addition, moreover
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>To contrast:</strong> however, nevertheless, on the other hand
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>To give examples:</strong> for instance, for example, such as
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>To show cause/effect:</strong> therefore, consequently, as a result
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <strong>To conclude:</strong> in conclusion, to summarize, overall
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              variant="contained" 
              onClick={() => setTabValue(3)}
              endIcon={<SchoolIcon />}
            >
              Next: Examples
            </Button>
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography variant="h6" gutterBottom>
            Academic Writing Examples
          </Typography>

          <Typography paragraph>
            Below are examples of different types of academic writing. Study them to understand how to apply the concepts you've learned.
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Sample Essay Introduction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ bgcolor: '#e3f2fd', p: 3, borderRadius: 2 }}>
                <Typography paragraph sx={{ fontStyle: 'italic' }}>
                  The increasing use of social media among teenagers has sparked debates about its effects on mental health. While some research suggests negative impacts such as increased anxiety and depression, other studies highlight potential benefits including enhanced social connections and support networks. This essay examines the relationship between social media usage and adolescent mental health, arguing that both positive and negative effects exist depending on how these platforms are used. By analyzing recent research and considering different usage patterns, this discussion will demonstrate that the impact of social media on teenage mental health is complex and multifaceted rather than simply beneficial or harmful.
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  What Makes This a Good Introduction:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It clearly introduces the topic (social media and teenage mental health)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It presents the thesis statement (that the effects are complex and multifaceted)" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It outlines what the essay will discuss" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It uses formal language and academic vocabulary" />
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Sample Body Paragraph</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ bgcolor: '#e3f2fd', p: 3, borderRadius: 2 }}>
                <Typography paragraph sx={{ fontStyle: 'italic' }}>
                  One significant negative effect of excessive social media use is the potential for increased anxiety among teenagers. According to a study by Wong and Smith (2021), adolescents who spend more than three hours daily on social media platforms report 40% higher anxiety levels compared to those with limited usage. This correlation may be attributed to several factors. Firstly, social comparison plays a crucial role, as teenagers constantly view carefully curated images of peers appearing to lead perfect lives, creating unrealistic standards. Secondly, the fear of missing out (FOMO) can generate significant stress when users see friends participating in activities without them. Moreover, Chen et al. (2022) demonstrated that nighttime social media use disrupts sleep patterns, further exacerbating anxiety symptoms. These findings suggest that limiting screen time and encouraging more mindful social media consumption could benefit adolescent mental health.
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" gutterBottom>
                  What Makes This a Good Body Paragraph:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It begins with a clear topic sentence that states the main idea" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It includes specific evidence with proper citations" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It explains the evidence and its relevance to the argument" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="It ends with a concluding sentence that connects back to the overall thesis" />
                  </ListItem>
                </List>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="outlined" 
              onClick={() => setTabValue(0)}
            >
              Back to Introduction
            </Button>
            <Button 
              variant="contained" 
              onClick={() => {
                navigate('/practice');
              }}
            >
              Try Practice Exercises
            </Button>
          </Box>
        </TabPanel>
      </Paper>

      <Paper sx={{ p: 3, bgcolor: '#f5f5f5', mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Quick Reference Guide
        </Typography>
        <Typography paragraph>
          Remember these key points about academic writing:
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Use formal language and avoid slang or contractions" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Provide evidence for your claims with proper citations" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Structure your writing with clear introduction, body paragraphs, and conclusion" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Use linking words to connect ideas and create flow" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Revise and edit your work to eliminate errors" />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Ready to learn about subject-specific academic writing?
        </Typography>
        <Typography variant="body1" paragraph>
          Discover how academic writing varies for different subjects like History and Science
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<SchoolIcon />}
          onClick={() => navigate('/subject-writing')}
          sx={{ mt: 1 }}
        >
          Explore Subject-Specific Writing
        </Button>
      </Box>
    </Container>
  );
};

export default WritingConcepts; 