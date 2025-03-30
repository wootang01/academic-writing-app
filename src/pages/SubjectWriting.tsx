import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Button
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ScienceIcon from '@mui/icons-material/Science';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useNavigate } from 'react-router-dom';

const SubjectWriting: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Sample sentences for each subject
  const historyTransitions = [
    "Historical evidence suggests that...",
    "During this period, significant changes occurred...",
    "Several factors contributed to this historical event...",
    "The consequences of this decision can be seen in...",
    "Historians have debated the significance of...",
    "This marked a turning point in the history of..."
  ];

  const scienceTransitions = [
    "The results indicate that...",
    "This experiment demonstrates...",
    "The data suggests a correlation between...",
    "Several studies have confirmed that...",
    "The methodology used in this research...",
    "This phenomenon can be explained by..."
  ];

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
        id={`subject-tabpanel-${index}`}
        aria-labelledby={`subject-tab-${index}`}
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

  return (
    <Container>
      <Box sx={{ mb: 4 }}>
        <Typography component="h1" variant="h4" gutterBottom>
          Subject-Specific Academic Writing
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Learn how to adapt your academic writing for different school subjects
        </Typography>
      </Box>

      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="subject writing tabs"
        >
          <Tab icon={<HistoryEduIcon />} label="Writing for History" iconPosition="start" />
          <Tab icon={<ScienceIcon />} label="Writing for Science" iconPosition="start" />
        </Tabs>

        {/* History Writing Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Academic Writing for History
          </Typography>

          <Typography paragraph>
            History writing requires critical analysis of past events, presenting arguments supported by evidence from historical sources, and understanding the context of different time periods.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Key Features of History Writing
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Card sx={{ height: '100%' }}>
                  <CardHeader 
                    title="Chronological Understanding" 
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    sx={{ bgcolor: 'primary.light', color: 'white' }}
                  />
                  <CardContent>
                    <Typography paragraph>
                      History writing often requires organizing events chronologically to show how events developed over time.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Example:
                    </Typography>
                    <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                      <Typography variant="body2">
                        "The handover of Hong Kong in 1997 was preceded by several years of negotiation. In 1984, the Sino-British Joint Declaration established the framework for the eventual transfer. By the early 1990s, preparations for the transition were well underway."
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Card sx={{ height: '100%' }}>
                  <CardHeader 
                    title="Source Analysis and Citation" 
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    sx={{ bgcolor: 'primary.light', color: 'white' }}
                  />
                  <CardContent>
                    <Typography paragraph>
                      History writing requires careful analysis of primary and secondary sources, with proper citations.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Example:
                    </Typography>
                    <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                      <Typography variant="body2">
                        "According to eyewitness accounts published in the South China Morning Post (July 1997), the handover ceremony was viewed with mixed emotions by Hong Kong residents."
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Card>
                <CardHeader 
                  title="Historical Context and Perspective" 
                  titleTypographyProps={{ variant: 'subtitle1' }}
                  sx={{ bgcolor: 'primary.light', color: 'white' }}
                />
                <CardContent>
                  <Typography paragraph>
                    History writing must consider the broader context of events and different perspectives.
                  </Typography>
                  <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                    <Typography variant="body2">
                      "While British colonial administrators viewed the New Territories lease expiration as a legal matter, many Chinese citizens saw the handover as a correction of historical injustice dating back to the Opium Wars."
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" gutterBottom>
            Essay Structure for History Papers
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Introduction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Start with historical context of your topic"
                    secondary="Example: 'The 1960s in Hong Kong represented a period of rapid industrialization and social change...'"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Present your thesis about the historical event or period"
                    secondary="Example: 'The 1967 riots in Hong Kong were primarily driven by three interconnected factors...'"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Outline the scope of your essay and key points"
                    secondary="Example: 'This essay will examine the causes, major events, and lasting impacts of the riots...'"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Body Paragraphs</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Each paragraph should focus on one aspect of your argument"
                    secondary="Example: One paragraph on economic factors, another on political influences"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Present historical evidence from reliable sources"
                    secondary="Include dates, quotes from primary sources, statistics, etc."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Analyze the significance of the evidence"
                    secondary="Explain why certain events or decisions were important"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Consider cause and effect relationships"
                    secondary="Show how events influenced subsequent developments"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Conclusion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Summarize your key arguments and evidence"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Restate your thesis in light of the evidence presented"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Discuss the broader historical significance"
                    secondary="How does this topic connect to larger historical trends or future developments?"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Useful Transitional Phrases for History Writing
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {historyTransitions.map((phrase, index) => (
                <Chip 
                  key={index} 
                  label={phrase} 
                  color="primary" 
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 4, p: 2, bgcolor: '#e8f5e9', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sample Topics for History Essays (Hong Kong Focus)
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="The Impact of British Colonialism on Hong Kong's Development" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Analyzing the Economic Transformation of Hong Kong (1960s-1990s)" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="The Historical Significance of the 1997 Handover" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Comparing Hong Kong's Educational System Before and After 1997" />
              </ListItem>
            </List>
          </Box>
        </TabPanel>

        {/* Science Writing Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
            Academic Writing for Science
          </Typography>

          <Typography paragraph>
            Scientific writing emphasizes clarity, precision, and objectivity. It focuses on presenting research methods, data, and analysis in a structured format.
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Key Features of Scientific Writing
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3, mb: 3 }}>
              <Box sx={{ flex: 1 }}>
                <Card sx={{ height: '100%' }}>
                  <CardHeader 
                    title="Precision and Objectivity" 
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    sx={{ bgcolor: 'primary.light', color: 'white' }}
                  />
                  <CardContent>
                    <Typography paragraph>
                      Scientific writing requires precise language and objective reporting of observations.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Example:
                    </Typography>
                    <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1, mb: 1 }}>
                      <Typography variant="body2" color="error">
                        Imprecise: "The water got really hot quickly."
                      </Typography>
                    </Box>
                    <Box sx={{ p: 1, bgcolor: '#e8f5e9', borderRadius: 1 }}>
                      <Typography variant="body2" color="success.main">
                        Precise: "The water temperature increased from 25°C to 90°C within 3 minutes."
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Card sx={{ height: '100%' }}>
                  <CardHeader 
                    title="Data Presentation" 
                    titleTypographyProps={{ variant: 'subtitle1' }}
                    sx={{ bgcolor: 'primary.light', color: 'white' }}
                  />
                  <CardContent>
                    <Typography paragraph>
                      Scientific writing often includes data in the form of tables, graphs, or statistics.
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Example:
                    </Typography>
                    <Box sx={{ p: 1, bgcolor: '#e8f5e9', borderRadius: 1, mb: 1 }}>
                      <Typography variant="body2">
                        "Table 1 shows the average pollution levels in Victoria Harbour from 2010-2020, demonstrating a 15% decrease in pollutants following the implementation of new environmental regulations."
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Card>
                <CardHeader 
                  title="Methodology and Reproducibility" 
                  titleTypographyProps={{ variant: 'subtitle1' }}
                  sx={{ bgcolor: 'primary.light', color: 'white' }}
                />
                <CardContent>
                  <Typography paragraph>
                    Scientific writing must clearly explain methods so others can reproduce the experiment.
                  </Typography>
                  <Box sx={{ p: 1, bgcolor: '#e8f5e9', borderRadius: 1, mb: 1 }}>
                    <Typography variant="body2">
                      "Water samples were collected from three locations in Tolo Harbour at 10 cm depth. Each sample was analyzed in triplicate using spectrophotometry at 450 nm to measure chlorophyll-a concentration."
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" gutterBottom>
            Structure of Scientific Reports
          </Typography>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Title and Abstract</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Title should be concise but descriptive"
                    secondary="Example: 'Effects of Air Pollution on Respiratory Health in Hong Kong School Children'"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Abstract summarizes the entire report in 150-250 words"
                    secondary="Include purpose, methods, key results, and conclusions"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Introduction</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="State the research question or problem"
                    secondary="Example: 'This experiment investigates how different pH levels affect plant growth.'"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Provide background information"
                    secondary="Briefly summarize relevant previous research"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Explain why the research is important"
                    secondary="Why should readers care about this topic?"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="State your hypothesis"
                    secondary="Example: 'We hypothesized that plants grown in slightly acidic soil (pH 6.0-6.5) would show optimal growth.'"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Materials and Methods</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="List all materials used"
                    secondary="Include equipment, chemicals, biological samples, etc."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Describe procedures in chronological order"
                    secondary="Be detailed enough that someone else could repeat your experiment"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Explain how data was collected and analyzed"
                    secondary="Include statistical methods if used"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Use passive voice for procedures"
                    secondary="Example: 'The solutions were heated to 100°C' rather than 'We heated the solutions'"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Results</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Present data clearly using tables, graphs, or charts"
                    secondary="Each figure should have a descriptive caption"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Describe patterns and trends in the data"
                    secondary="Example: 'As shown in Figure 1, plant height increased with pH until 6.5, after which growth declined'"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Report statistical results if applicable"
                    secondary="Include p-values, confidence intervals, etc."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Avoid interpreting results in this section"
                    secondary="Just report what you found, save interpretation for the discussion"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography fontWeight="medium">Discussion and Conclusion</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Interpret your results in relation to your hypothesis"
                    secondary="Was your hypothesis supported or rejected?"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Explain possible reasons for your findings"
                    secondary="Connect to scientific principles and theories"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Compare your results with other research"
                    secondary="How do your findings relate to published studies?"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Discuss limitations of your study"
                    secondary="What factors might have affected your results?"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ArrowRightIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Suggest applications and future research"
                    secondary="How can your findings be applied? What questions remain?"
                  />
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Useful Transitional Phrases for Scientific Writing
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {scienceTransitions.map((phrase, index) => (
                <Chip 
                  key={index} 
                  label={phrase} 
                  color="primary" 
                  variant="outlined"
                  sx={{ mb: 1 }}
                />
              ))}
            </Box>
          </Box>

          <Box sx={{ mt: 4, p: 2, bgcolor: '#e8f5e9', borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Sample Topics for Science Reports (Hong Kong Focus)
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Measuring Air Quality in Different Districts of Hong Kong" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="The Effect of Urban Heat Islands on Local Temperature in Kowloon" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Biodiversity in Hong Kong's Country Parks" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutlineIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Water Quality Analysis of Hong Kong Beaches" />
              </ListItem>
            </List>
          </Box>
        </TabPanel>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button 
          variant="outlined" 
          startIcon={<MenuBookIcon />}
          onClick={() => navigate('/concepts')}
        >
          Back to Writing Concepts
        </Button>
        <Button 
          variant="contained" 
          endIcon={<FormatQuoteIcon />}
          onClick={() => navigate('/practice')}
        >
          Try Practice Exercises
        </Button>
      </Box>
    </Container>
  );
};

export default SubjectWriting; 