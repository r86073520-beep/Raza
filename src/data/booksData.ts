import { Book } from '../types/book';
import { CHAPTERS_DATA } from './chaptersData';
import { MATH_CHAPTERS_DATA } from './mathChaptersData';
import { PHYSICS_CHAPTERS_DATA } from './physicsChaptersData';

export const BOOKS_DATA: Book[] = [
  {
    id: 'physics-10',
    title: 'Physics 10th',
    urduTitle: 'طبیعیات دہم (فزکس)',
    subject: 'Physics',
    grade: '10th Class · Matric',
    icon: '⚡',
    badge: '9 Units · 260+ MCQs',
    tagline: 'SHM, Sound, Geometrical Optics, Electrostatics, Electromagnetism & Nuclear Physics',
    description: 'Complete 10th grade Physics course with 9 units, 260+ objective board MCQs, authentic answer keys, step-by-step numericals, and comprehensive concept guides.',
    urduDescription: 'دسویں جماعت فزکس کے تمام 9 یونٹس مع 260+ کثیر الانتخابی سوالات (مع مصدقہ جوابی کلید)، مختصر و تفصیلی سوالات، اور آڈیو ریڈر',
    gradient: 'from-amber-600 via-rose-600 to-indigo-700',
    accentColor: 'rose',
    chapters: PHYSICS_CHAPTERS_DATA
  },
  {
    id: 'chemistry-10',
    title: 'Chemistry 10th',
    urduTitle: 'کیمسٹری دہم (لازمی)',
    subject: 'Chemistry',
    grade: '10th Class · Matric',
    icon: '🧪',
    badge: '5 Chapters',
    tagline: 'Equilibrium, Acids, Atmosphere, Water & Chemical Industries',
    description: 'Comprehensive 10th grade Chemistry covering chemical equilibrium, acids and bases, atmospheric chemistry, water properties and purification, and metallurgical chemical processes.',
    urduDescription: 'دسویں جماعت کیمسٹری کے تمام اہم ابواب، تفصیلی و مختصر نوٹس، کیمیائی مساواتیں اور کثیر الانتخابی سوالات',
    gradient: 'from-sky-600 via-indigo-600 to-purple-700',
    accentColor: 'indigo',
    chapters: CHAPTERS_DATA
  },
  {
    id: 'maths-10',
    title: 'Mathematics 10th',
    urduTitle: 'ریاضی دہم (سائنس گروپ)',
    subject: 'Mathematics',
    grade: '10th Class · Matric',
    icon: '📐',
    badge: '13 Units · Complete Syllabus',
    tagline: 'Quadratic Equations, Variations, Partial Fractions, Sets, Statistics, Trigonometry & Geometry Theorems',
    description: 'Complete 10th grade Mathematics featuring all 13 Units: step-by-step algebraic derivations, quadratic formulas, variations, partial fractions, statistics, trigonometry identities, practical geometry, and compulsory board theorems (Ch 9 & 12).',
    urduDescription: 'دسویں جماعت ریاضی کے تمام 13 یونٹس مع اہم کثیر الانتخابی، مختصر و تفصیلی سوالات، اور دائرے کے لازمی امتحانی مسئلے',
    gradient: 'from-blue-600 via-teal-600 to-emerald-700',
    accentColor: 'teal',
    chapters: MATH_CHAPTERS_DATA
  }
];
