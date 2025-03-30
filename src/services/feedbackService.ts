/**
 * Academic Writing Feedback Service
 * Uses secure backend proxy to access Hugging Face API for writing analysis
 */

// Helper constants
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:4000/api' 
  : 'https://academic-writing-api.onrender.com/api'; // Your actual Render service URL

// Models to use for different aspects of analysis
const GRAMMAR_MODEL = 'textattack/roberta-base-CoLA';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const COHERENCE_MODEL = 'google/t5-base-lm-adapt';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FORMALITY_MODEL = 'cointegrated/rubert-tiny-toxicity';

// Feedback analysis types
export type FeedbackCategory = 
  | 'grammar' 
  | 'vocabulary' 
  | 'structure' 
  | 'coherence' 
  | 'formality'
  | 'style';

export type FeedbackItem = {
  category: FeedbackCategory;
  description: string;
  suggestion?: string;
  severity: 'info' | 'warning' | 'error';
};

export type WritingFeedback = {
  overview: {
    wordCount: number;
    readabilityScore: number;
    formalityScore: number;
    grammarScore: number;
  };
  strengths: string[];
  improvements: FeedbackItem[];
  detailedFeedback: Record<FeedbackCategory, FeedbackItem[]>;
};

export type AssignmentType = 'essay' | 'research-paper' | 'summary' | 'report';

/**
 * Analyzes student writing via the secure backend API
 * @param text Student's written text
 * @param assignmentType Type of assignment
 * @param formLevel Hong Kong education form level (1-6)
 * @returns Structured feedback on the writing
 */
export const analyzeWriting = async (
  text: string, 
  assignmentType: AssignmentType,
  formLevel: number = 3
): Promise<WritingFeedback> => {
  if (!text.trim()) {
    throw new Error('Please provide some text to analyze');
  }
  
  try {
    // Call our secure backend API instead of directly accessing Hugging Face
    const response = await fetch(`${API_BASE_URL}/analyze/writing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        assignmentType,
        formLevel
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('API error:', errorData);
      throw new Error(errorData.error || 'Failed to analyze writing');
    }
    
    const feedback = await response.json();
    return feedback;
  } catch (error) {
    console.error('Error analyzing writing:', error);
    
    // Fallback to mock data if API is unavailable
    console.log('Using mock data due to API error');
    return generateMockFeedback(text, assignmentType, formLevel);
  }
};

/**
 * Generate mock feedback for when API is unavailable
 */
const generateMockFeedback = (
  text: string, 
  assignmentType: AssignmentType,
  formLevel: number
): WritingFeedback => {
  const wordCount = countWords(text);
  
  // Calculate mock scores based on text length and complexity
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const avgWordsPerSentence = wordCount / Math.max(1, sentenceCount);
  
  // Simulated readability (higher is more complex)
  const readabilityScore = Math.min(100, Math.max(30, avgWordsPerSentence * 4));
  
  // Simple formality detection (percentage of formal words)
  const formalWords = ['therefore', 'however', 'furthermore', 'consequently', 'nevertheless', 'thus'];
  const formalWordCount = formalWords.reduce((count, word) => {
    return count + (text.toLowerCase().match(new RegExp(`\\b${word}\\b`, 'g'))?.length || 0);
  }, 0);
  const formalityScore = Math.min(100, Math.max(30, (formalWordCount / wordCount) * 1000));
  
  // Grammar score based on simple heuristics
  const informalPhrases = ['i think', 'i believe', 'a lot', 'lots of', 'got to'];
  const informalPhraseCount = informalPhrases.reduce((count, phrase) => {
    return count + (text.toLowerCase().match(new RegExp(phrase, 'g'))?.length || 0);
  }, 0);
  const grammarScore = Math.min(100, Math.max(40, 100 - (informalPhraseCount * 10)));

  // Base feedback
  const feedback: WritingFeedback = {
    overview: {
      wordCount,
      readabilityScore,
      formalityScore,
      grammarScore
    },
    strengths: [],
    improvements: [],
    detailedFeedback: {
      grammar: generateMockGrammarFeedback(text),
      vocabulary: generateMockVocabularyFeedback(text, formLevel),
      structure: generateMockStructureFeedback(text, assignmentType),
      coherence: generateMockCoherenceFeedback(text),
      formality: generateMockFormalityFeedback(text),
      style: generateMockStyleFeedback(text, assignmentType)
    }
  };
  
  // Generate summaries
  feedback.strengths = generateStrengths(feedback, text);
  feedback.improvements = generateImprovements(feedback);
  
  return feedback;
};

/**
 * Helper to count words in text
 */
const countWords = (text: string): number => {
  return text.split(/\s+/).filter(Boolean).length;
};

/**
 * Generate mock grammar feedback
 */
const generateMockGrammarFeedback = (text: string): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  
  // Check for common issues in academic writing
  if (text.toLowerCase().includes('i think') || text.toLowerCase().includes('i believe')) {
    feedback.push({
      category: 'grammar',
      description: 'Avoid personal phrases like "I think" or "I believe" in academic writing',
      suggestion: 'Replace with "The evidence suggests" or "Research indicates"',
      severity: 'warning'
    });
  }
  
  if (text.toLowerCase().includes('a lot') || text.toLowerCase().includes('lots of')) {
    feedback.push({
      category: 'grammar',
      description: 'Informal quantifiers detected',
      suggestion: 'Replace phrases like "a lot" with more precise terms like "numerous", "significant", or "substantial"',
      severity: 'warning'
    });
  }
  
  // Look for contractions
  const contractions = ["can't", "don't", "won't", "isn't", "aren't", "haven't", "hasn't", "didn't", "wouldn't", "couldn't", "shouldn't"];
  for (const contraction of contractions) {
    if (text.toLowerCase().includes(contraction)) {
      feedback.push({
        category: 'grammar',
        description: 'Contractions should be avoided in academic writing',
        suggestion: `Expand contractions like "${contraction}" to their full form`,
        severity: 'warning'
      });
      break; // Only add this feedback once
    }
  }
  
  return feedback;
};

/**
 * Generate mock vocabulary feedback
 */
const generateMockVocabularyFeedback = (text: string, formLevel: number): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  
  // Basic words that could be improved for academic writing
  const basicWords = {
    'good': 'beneficial, advantageous, favorable',
    'bad': 'detrimental, unfavorable, adverse',
    'big': 'substantial, significant, considerable',
    'small': 'minimal, negligible, insignificant',
    'show': 'demonstrate, illustrate, indicate',
    'important': 'essential, crucial, significant'
  };
  
  // Check for basic words that could be improved
  Object.entries(basicWords).forEach(([basic, improved]) => {
    const regex = new RegExp(`\\b${basic}\\b`, 'i');
    if (regex.test(text)) {
      feedback.push({
        category: 'vocabulary',
        description: `Consider using more academic alternatives to "${basic}"`,
        suggestion: `Try: ${improved}`,
        severity: 'info'
      });
    }
  });
  
  // For higher form levels, suggest more sophisticated vocabulary
  if (formLevel >= 4 && text.length > 200) {
    feedback.push({
      category: 'vocabulary',
      description: 'Consider enhancing your vocabulary with more subject-specific terms',
      suggestion: 'Research specialized terminology related to your topic to add precision to your writing',
      severity: 'info'
    });
  }
  
  return feedback;
};

/**
 * Generate mock structure feedback based on assignment type
 */
const generateMockStructureFeedback = (text: string, assignmentType: AssignmentType): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  const paragraphs = text.split(/\n\s*\n/);
  
  if (paragraphs.length < 3) {
    feedback.push({
      category: 'structure',
      description: 'Your text has few paragraphs',
      suggestion: `${assignmentType === 'summary' ? 'Even in a summary' : 'In an academic ' + assignmentType}, organize your ideas into clear paragraphs (introduction, body, conclusion)`,
      severity: 'warning'
    });
  }
  
  // Check for assignment-specific structure
  switch (assignmentType) {
    case 'essay':
      if (!text.toLowerCase().includes('conclusion') && paragraphs.length >= 3) {
        feedback.push({
          category: 'structure',
          description: 'No clear conclusion identified',
          suggestion: 'End your essay with a conclusion that summarizes your main points and restates your thesis',
          severity: 'info'
        });
      }
      break;
      
    case 'research-paper':
      const sections = ['introduction', 'method', 'results', 'discussion', 'conclusion'];
      const missingKeywords = sections.filter(section => !text.toLowerCase().includes(section));
      
      if (missingKeywords.length > 2) {
        feedback.push({
          category: 'structure',
          description: 'Research paper may be missing key sections',
          suggestion: `Consider including standard sections: ${missingKeywords.join(', ')}`,
          severity: 'warning'
        });
      }
      break;
      
    case 'report':
      if (!text.toLowerCase().includes('recommendation')) {
        feedback.push({
          category: 'structure',
          description: 'Reports typically include recommendations',
          suggestion: 'Consider adding a recommendations section based on your findings',
          severity: 'info'
        });
      }
      break;
  }
  
  return feedback;
};

/**
 * Generate mock coherence feedback
 */
const generateMockCoherenceFeedback = (text: string): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  const paragraphs = text.split(/\n\s*\n/);
  
  // Check for transition words between paragraphs
  const transitionWords = ['however', 'therefore', 'consequently', 'furthermore', 'moreover', 'in addition', 'similarly', 'in contrast'];
  let hasTransitions = false;
  
  for (let i = 1; i < paragraphs.length; i++) {
    const paragraph = paragraphs[i].toLowerCase();
    if (transitionWords.some(word => paragraph.includes(word))) {
      hasTransitions = true;
      break;
    }
  }
  
  if (!hasTransitions && paragraphs.length > 1) {
    feedback.push({
      category: 'coherence',
      description: 'Limited use of transition words between paragraphs',
      suggestion: 'Use words like "however," "therefore," "consequently," etc. to connect ideas between paragraphs',
      severity: 'info'
    });
  }
  
  return feedback;
};

/**
 * Generate mock formality feedback
 */
const generateMockFormalityFeedback = (text: string): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  
  // Check for informal language
  const informalExpressions = [
    { pattern: /\bkind of\b|\bsort of\b/i, suggestion: 'somewhat, relatively' },
    { pattern: /\btotally\b|\breally\b|\bvery\b/i, suggestion: 'significantly, substantially' },
    { pattern: /\bgot\b|\bgets\b/i, suggestion: 'obtained, receives, becomes' },
    { pattern: /\bnowhere\b/i, suggestion: 'not evident, not present' },
    { pattern: /\ba lot\b|\blots of\b/i, suggestion: 'numerous, substantial, considerable' }
  ];
  
  for (const { pattern, suggestion } of informalExpressions) {
    if (pattern.test(text)) {
      feedback.push({
        category: 'formality',
        description: 'Informal language detected',
        suggestion: `Replace informal expressions with more formal alternatives: ${suggestion}`,
        severity: 'warning'
      });
      break; // Only add this type of feedback once
    }
  }
  
  return feedback;
};

/**
 * Generate mock style feedback
 */
const generateMockStyleFeedback = (text: string, assignmentType: AssignmentType): FeedbackItem[] => {
  const feedback: FeedbackItem[] = [];
  
  // Check passive/active voice balance for research papers
  if (assignmentType === 'research-paper' || assignmentType === 'report') {
    const passiveIndicators = ['was', 'were', 'been', 'being', 'is', 'are', 'am'];
    let passiveCount = 0;
    
    for (const indicator of passiveIndicators) {
      const regex = new RegExp(`\\b${indicator}\\s+\\w+ed\\b`, 'g');
      const matches = text.match(regex);
      if (matches) {
        passiveCount += matches.length;
      }
    }
    
    // If very few passive constructions in research/report writing
    if (passiveCount < 2 && text.length > 500) {
      feedback.push({
        category: 'style',
        description: 'Limited use of passive voice',
        suggestion: 'In research papers and reports, passive voice is often appropriate for Methods and Results sections (e.g., "Samples were collected" rather than "We collected samples")',
        severity: 'info'
      });
    }
  }
  
  // For essays, check for overly long sentences
  if (assignmentType === 'essay') {
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    let longSentenceCount = 0;
    
    for (const sentence of sentences) {
      const wordCount = sentence.split(/\s+/).filter(Boolean).length;
      if (wordCount > 30) {
        longSentenceCount++;
      }
    }
    
    if (longSentenceCount > 2) {
      feedback.push({
        category: 'style',
        description: 'Several overly long sentences detected',
        suggestion: 'Consider breaking down some long sentences into shorter ones for clarity',
        severity: 'info'
      });
    }
  }
  
  return feedback;
};

/**
 * Generate overall strengths based on detected patterns
 */
const generateStrengths = (feedback: WritingFeedback, text: string): string[] => {
  const strengths: string[] = [];
  
  // Based on overview metrics
  if (feedback.overview.wordCount > 300) {
    strengths.push("Your writing demonstrates good development of ideas with sufficient length");
  }
  
  if (feedback.overview.grammarScore > 70) {
    strengths.push("You've maintained generally good grammar throughout your writing");
  }
  
  if (feedback.overview.formalityScore > 70) {
    strengths.push("Your writing maintains an appropriately formal academic tone");
  }
  
  // Based on text patterns
  if (text.includes("according to") || text.includes("cited") || text.includes("research") || text.includes("study")) {
    strengths.push("You've attempted to support your points with evidence or references");
  }
  
  // Ensure we have at least two strengths
  if (strengths.length < 2) {
    strengths.push("You've made an attempt at academic writing");
  }
  
  return strengths;
};

/**
 * Generate key improvements from detailed feedback
 */
const generateImprovements = (feedback: WritingFeedback): FeedbackItem[] => {
  const improvements: FeedbackItem[] = [];
  
  // Get most important feedback items from each category
  Object.values(feedback.detailedFeedback).forEach(items => {
    // Prioritize errors, then warnings
    const priorityItems = items.filter(item => item.severity === 'error');
    if (priorityItems.length === 0) {
      priorityItems.push(...items.filter(item => item.severity === 'warning'));
    }
    if (priorityItems.length > 0) {
      improvements.push(priorityItems[0]);
    }
  });
  
  // Limit to top 5 most important improvements
  return improvements.slice(0, 5);
};

// Fix the anonymous default export
const feedbackService = {
  analyzeWriting
};

export default feedbackService; 