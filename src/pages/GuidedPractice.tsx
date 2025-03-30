import React, { useState } from 'react';
import { Container, Typography, Box, Paper, Button, Card, CardContent, CardActions, Divider, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import ExerciseModal from '../components/ExerciseModal';

const GuidedPractice: React.FC = () => {
  const navigate = useNavigate();
  const [openExample, setOpenExample] = useState<number | null>(null);
  const [openExercise, setOpenExercise] = useState<number | null>(null);

  const handleOpenExample = (index: number) => {
    setOpenExample(index);
  };

  const handleCloseExample = () => {
    setOpenExample(null);
  };

  const handleOpenExercise = (index: number) => {
    setOpenExercise(index);
  };

  const handleCloseExercise = () => {
    setOpenExercise(null);
  };

  const practiceExercises = [
    {
      title: 'Writing an Introduction',
      difficulty: 'Beginner',
      description: 'Practice crafting effective introductions for academic essays.',
      instructions: 'Choose one of the provided topics and write an introduction that includes context, a thesis statement, and an outline of your main points.',
      example: `
# Example Introduction for an Essay on Urban Development in Hong Kong

Urban development has transformed Hong Kong from a small fishing village into one of the world's most vibrant financial centers. The rapid pace of this development, particularly in the post-war period, has created a unique cityscape characterized by dense high-rise buildings and efficient public transport. However, this development has also led to challenges such as lack of affordable housing, limited public space, and environmental concerns. This essay will examine three critical aspects of Hong Kong's urban development: the historical evolution of its urban landscape, the current challenges faced by residents, and potential sustainable solutions for future growth. By analyzing these aspects, this paper aims to demonstrate how Hong Kong can balance economic prosperity with quality of life for its residents.
      `,
      exercise: {
        steps: [
          {
            instruction: "Identify the components of a good introduction",
            guidance: "Before writing your own introduction, you need to understand what makes a good one.",
            prompt: "Read the example introduction about Hong Kong's Urban Development. List at least three components you should include in your own introduction.",
            expectedKeywords: ["context", "background", "thesis", "main points", "outline"],
            minWords: 20
          },
          {
            instruction: "Create a thesis statement",
            guidance: "A thesis statement presents the main argument of your essay in one clear sentence.",
            prompt: "Write a thesis statement for an essay about 'The Impact of Social Media on Hong Kong Students'.",
            minWords: 15
          },
          {
            instruction: "Draft your introduction",
            guidance: "Now put everything together to create a complete introduction paragraph.",
            prompt: "Write a complete introduction paragraph (80-100 words) for an essay about 'The Impact of Social Media on Hong Kong Students'. Include context, a thesis statement, and an outline of your main points.",
            minWords: 80
          }
        ]
      }
    },
    {
      title: 'Developing Arguments with Evidence',
      difficulty: 'Intermediate',
      description: 'Learn to support your arguments with appropriate evidence and citations.',
      instructions: 'Read the provided passage and identify claims that need evidence. Then, add appropriate evidence from the sources provided.',
      example: `
# Example of Supporting Arguments with Evidence

## Claim: 
Hong Kong's MTR system is one of the most efficient public transportation systems in the world.

## Evidence:
According to a 2019 study published in the Journal of Public Transportation, Hong Kong's MTR has an on-time rate of 99.9%, the highest among major metro systems globally (Chen & Wong, 2019).

Additionally, a survey conducted by the Hong Kong Transport Department (2020) found that the average waiting time during peak hours is just 2.1 minutes, compared to London's 3.5 minutes and New York's 5.7 minutes.

The MTR Corporation's annual report (2021) shows that the system carries over 5 million passengers daily while maintaining this efficiency, demonstrating its operational excellence at scale.

## References:
Chen, L., & Wong, S. (2019). Comparative Analysis of Public Transit Efficiency in Global Cities. Journal of Public Transportation, 22(3), 45-62.

Hong Kong Transport Department. (2020). Annual Transit Performance Report. Hong Kong Government Publications.

MTR Corporation. (2021). Annual Report and Sustainability Update. Retrieved from https://www.mtr.com.hk/annual-report-2021
      `,
      exercise: {
        steps: [
          {
            instruction: "Identify claims that need evidence",
            guidance: "Academic writing requires you to support claims with evidence.",
            prompt: "Read the following paragraph and identify at least two claims that need supporting evidence:\n\nSchool uniforms in Hong Kong schools have both advantages and disadvantages. They create a sense of belonging and reduce social pressure related to clothing. However, they limit students' self-expression and can be uncomfortable in hot weather. The traditional design of many uniforms is outdated and needs to be reconsidered.",
            minWords: 20
          },
          {
            instruction: "Match claims with appropriate evidence",
            guidance: "For each claim, you need evidence from credible sources.",
            prompt: "For the following claim, select which piece of evidence would be most appropriate:\n\nClaim: 'School uniforms reduce social pressure related to clothing.'\n\nChoose the best evidence by writing the letter and explaining why it's appropriate:\n\nA) According to a parent survey at ABC School, 65% of parents like the school uniform policy.\n\nB) A 2021 study by Wong et al. in the Journal of Educational Psychology found that students in schools with uniforms reported 40% less anxiety about clothing-related peer pressure compared to students in schools without uniforms.\n\nC) School uniforms have been a tradition in Hong Kong for over 50 years.",
            minWords: 30
          },
          {
            instruction: "Add evidence to support a claim",
            guidance: "Now practice adding your own evidence to support a claim.",
            prompt: "For the following claim, write a paragraph that provides supporting evidence. You can create realistic but fictional studies or statistics:\n\nClaim: 'The traditional design of many Hong Kong school uniforms is outdated and needs to be reconsidered.'",
            minWords: 60
          }
        ]
      }
    },
    {
      title: 'Writing Effective Conclusion Paragraphs',
      difficulty: 'Beginner',
      description: 'Practice creating conclusion paragraphs that effectively summarize and extend your arguments.',
      instructions: 'Review the sample essay and write a conclusion that summarizes the main points and provides a final insight.',
      example: `
# Example Conclusion Paragraph

In conclusion, Hong Kong's education system has undergone significant transformations over the past two decades, shifting from a British-based curriculum to one that increasingly incorporates Chinese elements while maintaining international standards. As this analysis has demonstrated, these changes have produced both positive outcomes, such as greater cultural awareness and language proficiency, and challenges, including increased academic pressure and adaptation difficulties for students and teachers. The balance between traditional educational values and modern pedagogical approaches remains delicate, requiring ongoing dialogue between policymakers, educators, and families. Moving forward, Hong Kong's unique position at the intersection of Eastern and Western educational philosophies offers an opportunity to develop an innovative system that draws from the strengths of both traditions. By addressing the challenges identified in this essay, Hong Kong can continue to evolve its education system to effectively prepare students for success in an increasingly globalized world while honoring its distinctive cultural heritage.
      `,
      exercise: {
        steps: [
          {
            instruction: "Identify the elements of an effective conclusion",
            guidance: "A good conclusion has specific components that make it effective.",
            prompt: "Read the example conclusion about Hong Kong's education system. List at least three elements that make this conclusion effective.",
            expectedKeywords: ["summary", "main points", "insight", "future", "recommendation", "balance"],
            minWords: 25
          },
          {
            instruction: "Create a summary of main points",
            guidance: "The first part of a conclusion typically summarizes the main arguments made in the essay.",
            prompt: "Imagine you wrote an essay about 'The Benefits of Learning Cantonese for Non-Chinese Hong Kong Residents' with these main points:\n1. Improves daily communication with locals\n2. Creates better job opportunities\n3. Helps understand local culture and traditions\n\nWrite 2-3 sentences that summarize these main points for your conclusion.",
            minWords: 30
          },
          {
            instruction: "Write a complete conclusion paragraph",
            guidance: "Now create a full conclusion that summarizes main points and provides insight.",
            prompt: "Write a complete conclusion paragraph (60-80 words) for an essay about 'The Benefits of Learning Cantonese for Non-Chinese Hong Kong Residents'. Include a summary of the main points and a final insight or recommendation.",
            minWords: 60
          }
        ]
      }
    },
    {
      title: 'Science Report Structure',
      difficulty: 'Intermediate',
      description: 'Practice writing sections of a scientific report following proper conventions.',
      instructions: 'Using the provided experiment data, write the Methods and Results sections of a scientific report.',
      example: `
# Example Science Report Methods and Results Sections

## Methods
Water samples were collected from three locations in Victoria Harbour (North Point, Wan Chai, and Tsim Sha Tsui) between June 10-15, 2022. At each location, samples were taken at three different depths: surface (0.5m), mid-depth (5m), and near-bottom (10m). All samples were collected using sterilized Niskin bottles and stored in acid-washed polyethylene containers. Temperature, pH, and dissolved oxygen were measured in situ using a YSI ProDSS multiparameter water quality meter calibrated according to manufacturer specifications.

Water samples were transported to the laboratory in coolers maintained at 4°C and processed within 6 hours of collection. Total suspended solids (TSS) were determined following Standard Method 2540D (APHA, 2017). Chlorophyll-a was extracted in 90% acetone and measured spectrophotometrically according to the method described by Lorenzen (1967). E. coli enumeration was performed using the membrane filtration technique on mTEC agar with incubation at 35±0.5°C for 2 hours, followed by 44.5±0.2°C for 22 hours as per Standard Method 9222B (APHA, 2017).

All analyses were performed in triplicate, and results are reported as mean values ± standard deviation.

## Results
The physical and chemical parameters of water samples varied significantly among the three sampling locations (Table 1). Surface water temperature ranged from 25.3±0.2°C at North Point to 27.1±0.3°C at Tsim Sha Tsui, with higher temperatures consistently recorded in the afternoon samples. Dissolved oxygen levels were highest at the surface (6.8±0.4 mg/L) and decreased with depth at all locations, reaching minimum values (4.2±0.3 mg/L) near the bottom at Wan Chai.

E. coli concentrations were significantly higher at Wan Chai (geometric mean: 235 CFU/100mL) compared to North Point (87 CFU/100mL) and Tsim Sha Tsui (103 CFU/100mL) (p<0.01, ANOVA). This finding correlates with the proximity of sampling locations to combined sewer overflow points (Figure 1). A strong negative correlation was observed between E. coli concentrations and distance from the nearest sewage outfall (r = -0.78, p<0.01).

Chlorophyll-a concentrations exhibited diurnal variations, with peak values (8.7±1.2 μg/L) occurring in the afternoon samples and minimum values (2.3±0.5 μg/L) in early morning samples. This pattern suggests active photosynthesis by phytoplankton during daylight hours, which is consistent with previous studies in similar subtropical harbors (Wang et al., 2018).

Total suspended solids were significantly higher after rainfall events (p<0.05, paired t-test), with maximum values (45.6±3.8 mg/L) recorded at North Point following the June 12 storm event. This observation indicates considerable urban runoff contribution to harbor pollution, particularly near densely populated residential areas.
      `,
      exercise: {
        steps: [
          {
            instruction: "Identify the components of a Methods section",
            guidance: "Before writing your own Methods section, understand what information should be included.",
            prompt: "Read the example Methods section from the water quality study. List at least three types of information that should be included in a Methods section of a scientific report.",
            expectedKeywords: ["materials", "procedure", "equipment", "samples", "measurements", "analysis", "conditions"],
            minWords: 30
          },
          {
            instruction: "Write a Methods section",
            guidance: "Now practice writing a simple Methods section.",
            prompt: "Write a Methods section (60-80 words) for a small experiment testing the effect of different light conditions on plant growth. Include information about materials, procedure, and measurements.",
            minWords: 60
          },
          {
            instruction: "Write a Results section with data interpretation",
            guidance: "Results sections should present data and provide initial interpretation.",
            prompt: "Using the following data, write a short Results section (60-80 words) that presents and interprets the findings:\n\nPlant Growth Experiment Data:\n- Plants in full sunlight: Average height 24.5 cm after 14 days\n- Plants in partial shade: Average height 18.2 cm after 14 days\n- Plants in full shade: Average height 10.8 cm after 14 days\n- All plants started at 5 cm height\n- 5 plants in each group",
            minWords: 60
          }
        ]
      }
    },
    {
      title: 'Analyzing Historical Documents',
      difficulty: 'Advanced',
      description: 'Develop skills in analyzing and writing about historical primary sources.',
      instructions: 'Read the provided historical documents about Hong Kong history and write an analysis that contextualizes and interprets their significance.',
      example: `
# Example Analysis of Historical Documents

## Document Analysis: "The Handover of Hong Kong" (1997)

The official document titled "The Handover of Hong Kong: Joint Declaration on the Question of Hong Kong" presents a formal account of the transfer of sovereignty from British to Chinese rule. This primary source, signed by representatives of both governments on June 30, 1997, reveals several significant aspects of this historical transition when closely analyzed.

The document employs carefully calibrated diplomatic language that masks underlying tensions. For instance, the repeated use of phrases such as "smooth transition" and "maintaining prosperity and stability" suggests concerns about potential disruption. These linguistic choices reflect the anxieties of both governments about Hong Kong's future under the "One Country, Two Systems" framework, a political innovation without historical precedent.

Contextually, this document must be understood against the backdrop of several intersecting historical currents. First, it represents the formal conclusion of British colonial expansion in Asia, which had begun with the Treaty of Nanking in 1842 following the First Opium War. Second, it symbolizes China's emergence as a global power capable of reclaiming territories lost during what Chinese historians term the "century of humiliation." Third, it demonstrates the pragmatic approach of Deng Xiaoping's leadership in formulating the "One Country, Two Systems" policy, which aimed to reconcile socialist and capitalist economic models.

The document's significance extends beyond its immediate historical moment. It established governance parameters that continue to shape Hong Kong's political development and international relations. The repeated emphasis on preserving Hong Kong's "way of life" for 50 years reveals an implicit acknowledgment of fundamental differences between mainland Chinese and Hong Kong systems, differences that would later contribute to political tensions visible in the 2014 Umbrella Movement and 2019-2020 protests.

What is notably absent from the document is any substantive mention of democratic processes or political representation for Hong Kong residents. This omission reflects both the colonial nature of the British administration, which never fully implemented democracy during 156 years of rule, and the Chinese government's prioritization of stability and economic continuity over political liberalization.

In conclusion, this document serves as both a diplomatic instrument and historical artifact that encapsulates complex power dynamics, competing national narratives, and pragmatic compromises that characterized this unprecedented transfer of sovereignty in modern international relations.
      `,
      exercise: {
        steps: [
          {
            instruction: "Identify different ways to analyze a historical document",
            guidance: "Historical documents can be analyzed through several different lenses.",
            prompt: "Read the example analysis of 'The Handover of Hong Kong' document. List at least three different approaches or lenses used to analyze this historical document.",
            expectedKeywords: ["language", "context", "significance", "omissions", "background", "historical currents", "power dynamics"],
            minWords: 40
          },
          {
            instruction: "Analyze language and tone in a historical document",
            guidance: "The language and tone of historical documents reveal much about their purpose and context.",
            prompt: "Read the following excerpt from a letter written by a British colonial administrator in Hong Kong, 1925:\n\n'The Chinese residents of the colony seem generally content with the administration's governance, though certain agitators continue to cause occasional disturbances. These troublemakers appear to have been influenced by foreign revolutionary ideas unsuitable for implementation in Hong Kong.'\n\nWrite 3-4 sentences analyzing what the language and tone of this excerpt reveal about the writer's perspective and assumptions.",
            minWords: 50
          },
          {
            instruction: "Place a document in historical context",
            guidance: "Understanding the broader historical context helps interpret a document's significance.",
            prompt: "Write a short analysis (80-100 words) explaining how the following newspaper headline from July 1, 1997 relates to the broader historical context of Hong Kong:\n\n'HONG KONG RETURNS TO CHINESE SOVEREIGNTY AFTER 156 YEARS OF BRITISH RULE'\n\nInclude at least two relevant historical events or trends that help contextualize this headline.",
            minWords: 80
          }
        ]
      }
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
                <Button 
                  size="small" 
                  variant="outlined" 
                  onClick={() => handleOpenExercise(index)}
                >
                  Start Exercise
                </Button>
                <Button 
                  size="small" 
                  onClick={() => handleOpenExample(index)}
                >
                  View Example
                </Button>
              </CardActions>
            </Card>
          </React.Fragment>
        ))}
      </Box>

      {/* Example Dialog */}
      <Dialog
        open={openExample !== null}
        onClose={handleCloseExample}
        maxWidth="md"
        fullWidth
      >
        {openExample !== null && (
          <>
            <DialogTitle>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                Example: {practiceExercises[openExample].title}
                <IconButton edge="end" color="inherit" onClick={handleCloseExample} aria-label="close">
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ whiteSpace: 'pre-wrap', fontFamily: "'Roboto', sans-serif" }}>
                {practiceExercises[openExample].example.split('# ').map((section, i) => {
                  if (!section) return null;
                  
                  const lines = section.split('\n');
                  const title = lines[0];
                  const content = lines.slice(1).join('\n');
                  
                  return (
                    <Box key={i} sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom>{title}</Typography>
                      <Box sx={{ mb: 2 }}>
                        {content.split('## ').map((subsection, j) => {
                          if (j === 0) return <Typography key={j} paragraph>{subsection}</Typography>;
                          
                          const subLines = subsection.split('\n');
                          const subTitle = subLines[0];
                          const subContent = subLines.slice(1).join('\n');
                          
                          return (
                            <Box key={j} sx={{ mb: 2 }}>
                              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>{subTitle}</Typography>
                              <Typography paragraph>{subContent}</Typography>
                            </Box>
                          );
                        })}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseExample}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Exercise Modal */}
      {openExercise !== null && (
        <ExerciseModal
          open={openExercise !== null}
          onClose={handleCloseExercise}
          exercise={{
            title: practiceExercises[openExercise].title,
            difficulty: practiceExercises[openExercise].difficulty,
            steps: practiceExercises[openExercise].exercise.steps
          }}
        />
      )}

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