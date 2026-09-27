import { Chapter } from '../types/book';
import { UNIT_10_12 } from './physics/unit10_12';
import { UNIT_13_15 } from './physics/unit13_15';
import { UNIT_16_18 } from './physics/unit16_18';

export const PHYSICS_CHAPTERS_DATA: Chapter[] = [
  ...UNIT_10_12,
  ...UNIT_13_15,
  ...UNIT_16_18
];
