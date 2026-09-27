export type VisualType =
  | 'atom'
  | 'molecule'
  | 'mixture'
  | 'electronegativity'
  | 'photosynthesis'
  | 'hydrogen_bonding'
  | 'capillary_action'
  | 'acid_rain'
  | 'ozone_depletion'
  | 'global_warming'
  | 'atmosphere_layers'
  | 'biodegradable'
  | 'water_hardness'
  | 'solvay_process'
  | 'dynamic_equilibrium'
  | 'ph_scale'
  | 'lewis_adduct'
  | 'quadratic_curve'
  | 'discriminant'
  | 'venn_diagram'
  | 'trigonometry_triangle'
  | 'variation_graph'
  | 'simple_harmonic_motion'
  | 'total_internal_reflection'
  | 'none';

export interface VocabularyTerm {
  id: string;
  word: string;
  matches: string[]; // Variations/stems to match in text
  pronunciation: string;
  englishMeaning: string;
  urduMeaning: string;
  synonyms?: string[];
  antonyms?: string[];
  example: string;
  visualType: VisualType;
  category?: 'chemistry' | 'physics' | 'biology' | 'environmental' | 'mathematics' | 'general';
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: {
    key: 'a' | 'b' | 'c' | 'd';
    text: string;
  }[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation?: string;
  category?: string;
}

export interface MathSolutionData {
  given?: string;
  toFind?: string;
  formula?: string;
  steps: string[];
  solutionSet?: string;
}

export interface ShortQuestionItem {
  id: string;
  questionNumber: string;
  question: string;
  answer: string;
  mathSolution?: MathSolutionData;
  exampleList?: string[];
  chemicalReactions?: string[];
  tableData?: {
    headers: [string, string];
    rows: [string, string][];
  };
  notes?: string;
  diagramInfo?: {
    title: string;
    description: string;
    visualType?: VisualType;
  };
}

export interface ExtensiveQuestionItem {
  id: string;
  questionNumber: string;
  question: string;
  answerReference: string;
  guidance?: string;
  mathSolution?: MathSolutionData;
}

export interface NumericalItem {
  id: string;
  questionNumber: string;
  problem: string;
  givenData: string[];
  balancedEquation?: string;
  requiredData?: string;
  solutionSteps: string[];
  result: string;
  tableData?: {
    headers: string[];
    rows: string[][];
  };
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  urduTitle: string;
  description: string;
  summary: string;
  shortQuestions: ShortQuestionItem[];
  extensiveQuestions: ExtensiveQuestionItem[];
  numericals?: NumericalItem[];
  quizzes: QuizQuestion[];
}

export interface Book {
  id: string;
  title: string;
  urduTitle: string;
  subject: 'Chemistry' | 'Mathematics' | 'Physics';
  grade: string;
  icon: string;
  badge: string;
  tagline: string;
  description: string;
  urduDescription: string;
  gradient: string;
  accentColor: string;
  chapters: Chapter[];
}
