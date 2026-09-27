import { Chapter } from '../../types/book';

export const CHAPTER_10: Chapter = {
  id: 'ch-10',
  number: 10,
  title: 'Acid, Base and Salts',
  urduTitle: 'ایسڈ، بیس اور نمکیات (ایسڈ بیس اینڈ سالٹس)',
  description: 'Concepts of acids and bases (Arrhenius, Bronsted-Lowry, Lewis), pH and pOH scale, preparation and types of salts, indicators, and acid-base numericals.',
  summary: 'Acids donate protons or accept electron pairs; bases accept protons or donate electron pairs. The pH scale measures acidity from 0 to 14, and salts are crystalline ionic neutralization products.',
  shortQuestions: [
    {
      id: 'ch10-sq1',
      questionNumber: 'Q.1',
      question: 'Name three common household substances having: (a) pH value greater than 7 (b) pH value less than 7 (c) pH value equal to 7',
      answer: 'Classification of household substances according to pH value:',
      exampleList: [
        '(a) pH value greater than 7 (Bases): Calcium hydroxide Ca(OH)2, Potassium hydroxide KOH, Sodium hydroxide NaOH (drain cleaners, baking soda, soap).',
        '(b) pH value less than 7 (Acids): Hydrochloric acid HCl, Nitric acid HNO3, Sulphuric acid H2SO4 (vinegar, lemon juice, sour milk).',
        '(c) pH value equal to 7 (Neutral): Pure water H2O, Sodium chloride NaCl, Potassium nitrate KNO3, Calcium chloride CaCl2.'
      ]
    },
    {
      id: 'ch10-sq2',
      questionNumber: 'Q.2',
      question: 'Define a base and explain all alkalies are bases, but all bases are not alkalies.',
      answer: 'Base: A substance that can release OH⁻ ions in aqueous solution (Arrhenius), or can accept a proton H⁺ (Bronsted-Lowry), or can donate a pair of electrons (Lewis).',
      notes: '"All alkalies are bases, but all bases are not alkalies" because water-soluble bases are specifically called alkalies. Insoluble metal oxides and hydroxides (like Cu(OH)2 or Fe(OH)3) are bases, but since they do not dissolve in water, they are not alkalies.'
    },
    {
      id: 'ch10-sq3',
      questionNumber: 'Q.3',
      question: 'Define Bronsted-Lowry base and explain with an example that water is a Bronsted-Lowry base.',
      answer: 'Definition: A base is a substance (molecule or ion) that can accept a proton (H⁺) from another substance. Water is an amphoteric substance that acts as a base when reacting with acids like HCl by accepting a proton to form hydronium ion (H3O⁺).',
      chemicalReactions: [
        'HCl + H2O ⇌ H3O⁺ + Cl⁻',
        'In this reaction, water (H2O) accepts a proton, acting as a Bronsted-Lowry base.'
      ]
    },
    {
      id: 'ch10-sq4',
      questionNumber: 'Q.4',
      question: 'How can you justify that Bronsted-Lowry concept of acid and base is applicable to non-aqueous solutions?',
      answer: 'According to Bronsted-Lowry concept, acid-base behavior does not depend on water or hydroxide ions. An acid is simply any proton donor (H⁺) and a base is any proton acceptor (e.g. NH3 gas accepting H⁺ from HCl gas to form solid NH4Cl without needing water).',
      chemicalReactions: [
        'HCl(g) + NH3(g) ⇌ NH4Cl(s)'
      ]
    },
    {
      id: 'ch10-sq5',
      questionNumber: 'Q.5',
      question: 'Which kind of a bond forms between a Lewis acid and a base?',
      answer: 'A coordinate covalent bond (dative bond) is formed between a Lewis acid (electron pair acceptor) and a Lewis base (electron pair donor), resulting in a single adduct species.',
      chemicalReactions: [
        'H⁺ + :NH3 → [H ← NH3]⁺    (Adduct)',
        'BF3 + :NH3 → [F3B ← NH3]    (Adduct)'
      ],
      diagramInfo: {
        title: 'Lewis Acid-Base Adduct',
        description: 'Coordinate covalent bond formed by donation of lone pair from nitrogen to H⁺',
        visualType: 'lewis_adduct'
      }
    },
    {
      id: 'ch10-sq6',
      questionNumber: 'Q.6',
      question: 'Why H⁺ ion acts as a Lewis acid?',
      answer: 'According to Lewis concept, an acid is a substance that can accept a pair of electrons. A hydrogen cation (H⁺) has an empty 1s orbital and zero electrons; it readily accepts a lone electron pair from a base (like NH3 or H2O) to achieve stable helium configuration.'
    },
    {
      id: 'ch10-sq7',
      questionNumber: 'Q.7',
      question: 'Name two acids used in the manufacture of fertilizers.',
      answer: 'Acids used in the commercial manufacturing of chemical fertilizers:',
      exampleList: [
        '1. Nitric acid (HNO3) — used to manufacture ammonium nitrate (NH4NO3) fertilizer.',
        '2. Sulphuric acid (H2SO4) — used to manufacture ammonium sulphate and superphosphate fertilizers.'
      ]
    },
    {
      id: 'ch10-sq8',
      questionNumber: 'Q.8',
      question: 'Define pH. What is the pH of pure water?',
      answer: 'pH is defined as the negative logarithm of the molar concentration of hydrogen ions: pH = -log[H⁺]. In pure water at 25°C, auto-ionization yields [H⁺] = 1.0 × 10⁻⁷ M, so pH = -log(1.0 × 10⁻⁷) = 7 (Neutral).',
      diagramInfo: {
        title: 'pH Scale',
        description: 'Universal scale from 0 to 14 measuring acidity and alkalinity',
        visualType: 'ph_scale'
      }
    },
    {
      id: 'ch10-sq9',
      questionNumber: 'Q.9',
      question: 'How many times a solution of pH = 1 will be stronger than that of a solution having pH = 2?',
      answer: 'Because the pH scale is logarithmic (base 10), each unit change corresponds to a tenfold change in hydrogen ion concentration [H⁺]. Therefore, a solution of pH = 1 has 10 times higher concentration of H⁺ ions than a solution of pH = 2.'
    },
    {
      id: 'ch10-sq10',
      questionNumber: 'Q.10',
      question: 'Define the followings: (i) Normal salt (ii) Basic salt',
      answer: 'Definitions:',
      exampleList: [
        '(i) Normal (Neutral) salt: A salt formed by the total replacement of ionizable H⁺ ions of an acid by a positive metal ion or NH4⁺ ion. Example: HCl + KOH → KCl + H2O.',
        '(ii) Basic salt: A salt formed by the incomplete neutralization of a polyhydroxy base by an acid, containing replaceable OH⁻ groups. Example: Al(OH)3 + HCl → Al(OH)2Cl + H2O.'
      ]
    },
    {
      id: 'ch10-sq11',
      questionNumber: 'Q.11',
      question: 'Na2SO4 is a neutral salt while NaHSO4 is an acid salt. Justify.',
      answer: 'Na2SO4 is a neutral salt because it is formed by complete replacement of all ionizable H⁺ ions from H2SO4. In contrast, NaHSO4 still contains one replaceable hydrogen ion (H⁺), which can ionize in water to release H⁺ ions and turn blue litmus red; therefore, it is an acidic salt.'
    },
    {
      id: 'ch10-sq12',
      questionNumber: 'Q.12',
      question: 'Give a few characteristic properties of salts.',
      answer: 'Characteristic properties of salts:',
      exampleList: [
        'Salts are ionic crystalline solids with high melting and boiling points.',
        'Many salts contain a specific number of molecules of water of crystallization (e.g. CuSO4·5H2O, CaSO4·2H2O).',
        'Salts are electrically neutral compounds having equal positive and negative charges, though number of cations and anions may differ.'
      ]
    },
    {
      id: 'ch10-sq13',
      questionNumber: 'Q.13',
      question: 'How the soluble salts are recovered from water?',
      answer: 'Soluble salts are recovered from their aqueous solutions through evaporation and crystallization processes.'
    },
    {
      id: 'ch10-sq14',
      questionNumber: 'Q.14',
      question: 'How the insoluble salts are prepared?',
      answer: 'Insoluble salts are prepared by mixing two soluble salt solutions. Double displacement precipitates the insoluble salt:',
      chemicalReactions: [
        'AgNO3(aq) + NaCl(aq) → AgCl(s)↓ + NaNO3(aq)'
      ]
    },
    {
      id: 'ch10-sq15',
      questionNumber: 'Q.15',
      question: 'Why a salt is neutral, explain with an example?',
      answer: 'Salts are formed when an acid reacts with a base in equal proportions. The H⁺ of the acid combines with OH⁻ of the base to form neutral H2O, while metallic cations and non-metallic anions form an electrically balanced neutral crystal lattice (e.g., HCl + NaOH → NaCl + H2O).'
    },
    {
      id: 'ch10-sq16',
      questionNumber: 'Q.16',
      question: 'Name an acid used in the preservation of food.',
      answer: 'Acids commonly used for food preservation include Benzoic acid (C6H5COOH) and Acetic acid (CH3COOH, vinegar).'
    },
    {
      id: 'ch10-sq17',
      questionNumber: 'Q.17',
      question: 'Name the acids present in: (i) Vinegar (ii) Ant sting (iii) Citrus fruit (iv) Sour milk',
      answer: 'Naturally occurring organic acids:',
      tableData: {
        headers: ['Natural Source', 'Acid Present'],
        rows: [
          ['(i) Vinegar', 'Acetic acid (CH3COOH)'],
          ['(ii) Ant sting / Bee sting', 'Formic acid (HCOOH)'],
          ['(iii) Citrus fruits (lemons, oranges)', 'Citric acid'],
          ['(iv) Sour milk / yogurt', 'Lactic acid']
        ]
      }
    },
    {
      id: 'ch10-sq18',
      questionNumber: 'Q.18',
      question: 'How can you justify that Pb(OH)NO3 is a basic salt?',
      answer: 'Pb(OH)NO3 is formed by the incomplete neutralization of lead hydroxide Pb(OH)2 with nitric acid. Because it still retains an ionizable hydroxide (OH⁻) group, it turns red litmus to blue, behaving as a basic salt.'
    },
    {
      id: 'ch10-sq19',
      questionNumber: 'Q.19',
      question: 'You are in a need of an acidic salt. How can you prepare it?',
      answer: 'Acidic salts are prepared by partial replacement of replaceable H⁺ ions of a polybasic acid by a base:',
      chemicalReactions: [
        'H2SO4 + KOH → KHSO4 (Acidic salt) + H2O',
        'H3PO4 + NaOH → NaH2PO4 (Acidic salt) + H2O'
      ]
    },
    {
      id: 'ch10-sq20',
      questionNumber: 'Q.20',
      question: 'Which salt is used to prepare plaster of Paris?',
      answer: 'Gypsum (calcium sulphate dihydrate, CaSO4·2H2O) on heating to 100°C loses three-quarters of its water of crystallization to form Plaster of Paris [(CaSO4)2·H2O].'
    }
  ],
  extensiveQuestions: [
    {
      id: 'ch10-eq1',
      questionNumber: 'Q.1',
      question: 'Define an acid and a base according to Bronsted-Lowry concept and justify with examples that water is an amphoteric compound.',
      answerReference: 'Bronsted-Lowry theory defines acids as proton donors and bases as proton acceptors. Water acts as a base with HCl (HCl + H2O ⇌ H3O⁺ + Cl⁻) and as an acid with NH3 (H2O + NH3 ⇌ NH4⁺ + OH⁻), proving its amphoteric nature.'
    },
    {
      id: 'ch10-eq2',
      questionNumber: 'Q.2',
      question: 'Explain the Lewis concept of acids and bases.',
      answerReference: 'Lewis acid is an electron pair acceptor (BF3, AlCl3, H⁺); Lewis base is an electron pair donor (:NH3, H2O:, OH⁻). Reaction forms a coordinate covalent bond and an adduct.'
    },
    {
      id: 'ch10-eq3',
      questionNumber: 'Q.3',
      question: 'What is auto-ionization of water? How is it used to establish the pH of water?',
      answerReference: 'Auto-ionization: 2H2O ⇌ H3O⁺ + OH⁻. Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C. For pure neutral water, [H⁺] = 1.0 × 10⁻⁷ M, giving pH = 7 and pOH = 7 (pH + pOH = 14).'
    },
    {
      id: 'ch10-eq4',
      questionNumber: 'Q.4',
      question: 'Define a salt and give the characteristic properties of salts.',
      answerReference: 'Salts are ionic compounds formed by neutralization. Characteristics: crystalline solids, high melting points, electrical conductivity in solution/molten state, neutral overall charge, water of crystallization.'
    },
    {
      id: 'ch10-eq5',
      questionNumber: 'Q.5',
      question: 'Explain with examples that how soluble salts are prepared?',
      answerReference: 'Direct reaction of metal with acid (Zn + H2SO4 → ZnSO4 + H2), reaction of metal oxide with acid (CuO + H2SO4 → CuSO4 + H2O), reaction of metal carbonate with acid, and acid-base titration.'
    }
  ],
  numericals: [
    {
      id: 'ch10-num1',
      questionNumber: 'Problem 1',
      problem: 'Sulphuric acid shows complete ionization because it is a strong acid and produces two hydrogen ions (2H⁺): H2SO4 → 2H⁺ + SO4²⁻. Given concentration of H2SO4 = 0.2 M. Calculate the pH and pOH.',
      givenData: [
        'Concentration of H2SO4 = 0.2 M',
        'Concentration of [H⁺] = 2 × 0.2 M = 0.4 M'
      ],
      balancedEquation: 'H2SO4 → 2H⁺ + SO4²⁻',
      requiredData: 'pH = ? and pOH = ?',
      solutionSteps: [
        'pH = -log[H⁺] = -log(0.4) = -(-0.398) = 0.398',
        'pH + pOH = 14',
        'pOH = 14 - pH = 14 - 0.398 = 13.602'
      ],
      result: 'pH = 0.398, pOH = 13.602'
    },
    {
      id: 'ch10-num2',
      questionNumber: 'Problem 2',
      problem: 'KOH shows complete ionization because it is a strong base and produces one hydroxide ion (OH⁻): KOH → K⁺ + OH⁻. Given concentration of KOH = 0.1 M. Calculate the pOH and pH.',
      givenData: [
        'Concentration of KOH = 0.1 M',
        'Concentration of [OH⁻] = 0.1 M'
      ],
      balancedEquation: 'KOH → K⁺ + OH⁻',
      requiredData: 'pOH = ? and pH = ?',
      solutionSteps: [
        'pOH = -log[OH⁻] = -log(0.1) = -log(10⁻¹) = 1',
        'pH + pOH = 14',
        'pH = 14 - pOH = 14 - 1 = 13'
      ],
      result: 'pOH = 1, pH = 13'
    },
    {
      id: 'ch10-num3',
      questionNumber: 'Problem 3',
      problem: 'HNO3 shows complete ionization because it is a strong acid: HNO3 → H⁺ + NO3⁻. Concentration of HNO3 = 0.004 M = 4 × 10⁻³ M. Calculate pH and pOH.',
      givenData: [
        'Concentration of [H⁺] = 4 × 10⁻³ M'
      ],
      balancedEquation: 'HNO3 → H⁺ + NO3⁻',
      requiredData: 'pH = ? and pOH = ?',
      solutionSteps: [
        'pH = -log[H⁺] = -log(4 × 10⁻³) = -(log 4 + log 10⁻³) = -(log 4 - 3) = 3 - log 4',
        'pH = 3 - 0.602 = 2.398',
        'pOH = 14 - pH = 14 - 2.398 = 11.602'
      ],
      result: 'pH = 2.398, pOH = 11.602'
    },
    {
      id: 'ch10-num4',
      questionNumber: 'Problem 4',
      problem: 'Complete the concentration, [H⁺], [OH⁻], pH and pOH table for various acidic and basic solutions.',
      givenData: [
        'Solutions: HI, KOH, Ba(OH)2, HClO4, NaOH, HCl, Ca(OH)2'
      ],
      solutionSteps: [
        '(i) 0.15 M HI: [H⁺]=0.15 M => pH = 0.82, pOH = 13.12',
        '(ii) 0.040 M KOH: [OH⁻]=0.040 M => pOH = 1.40, pH = 12.60',
        '(iii) 0.020 M Ba(OH)2: [OH⁻]= 2×0.020 = 0.040 M => pOH = 1.40, pH = 12.60',
        '(iv) 0.00030 M HClO4: [H⁺]= 3×10⁻⁴ M => pH = 3.52, pOH = 10.48',
        '(v) 0.55 M NaOH: [OH⁻]= 0.55 M => pOH = 0.26, pH = 13.74',
        '(vi) 0.055 M HCl: [H⁺]= 0.055 M => pH = 1.26, pOH = 12.74',
        '(vii) 0.055 M Ca(OH)2: [OH⁻]= 2×0.055 = 0.11 M => pOH = 0.96, pH = 13.04'
      ],
      result: 'All table values calculated using pH = -log[H⁺], pOH = -log[OH⁻], and pH + pOH = 14.'
    }
  ],
  quizzes: [
    {
      id: 'ch10-q1',
      questionNumber: 1,
      question: 'A base is a substance which neutralizes an acid. Which of these substances is not a base?',
      options: [
        { key: 'a', text: 'aqueous ammonia' },
        { key: 'b', text: 'sodium chloride' },
        { key: 'c', text: 'sodium carbonate' },
        { key: 'd', text: 'calcium oxide' }
      ],
      correctAnswer: 'b',
      explanation: 'Sodium chloride (NaCl) is a neutral salt, not a base.'
    },
    {
      id: 'ch10-q2',
      questionNumber: 2,
      question: 'Lewis acid-base concept have the following characteristics except:',
      options: [
        { key: 'a', text: 'formation of an adduct' },
        { key: 'b', text: 'formation of a co-ordinate covalent bond' },
        { key: 'c', text: 'donation and acceptance of an electron pair' },
        { key: 'd', text: 'donation and acceptance of a proton' }
      ],
      correctAnswer: 'd',
      explanation: 'Proton donation/acceptance is the Bronsted-Lowry concept, not the Lewis electron-pair concept.'
    },
    {
      id: 'ch10-q3',
      questionNumber: 3,
      question: 'Acetic acid is used for:',
      options: [
        { key: 'a', text: 'flavouring food' },
        { key: 'b', text: 'making explosive' },
        { key: 'c', text: 'etching designs' },
        { key: 'd', text: 'cleaning metals' }
      ],
      correctAnswer: 'a',
      explanation: 'Acetic acid (vinegar) is universally used for flavouring and preserving food.'
    },
    {
      id: 'ch10-q4',
      questionNumber: 4,
      question: 'A salt is not composed of:',
      options: [
        { key: 'a', text: 'a metallic cation' },
        { key: 'b', text: 'non-metallic anion' },
        { key: 'c', text: 'an anion of a base' },
        { key: 'd', text: 'an anion of an acid' }
      ],
      correctAnswer: 'c',
      explanation: 'A salt consists of the cation of a base and the anion of an acid.'
    },
    {
      id: 'ch10-q5',
      questionNumber: 5,
      question: 'If a liquid has a pH of 7 then it must:',
      options: [
        { key: 'a', text: 'be a colourless and odourless liquid' },
        { key: 'b', text: 'freeze at 0°C and boil at 100°C' },
        { key: 'c', text: 'be neutral' },
        { key: 'd', text: 'be a solution containing water' }
      ],
      correctAnswer: 'c',
      explanation: 'A pH of 7 at 25°C defines an exact neutral solution where [H⁺] equals [OH⁻].'
    },
    {
      id: 'ch10-q6',
      questionNumber: 6,
      question: 'A salt always:',
      options: [
        { key: 'a', text: 'contains ions' },
        { key: 'b', text: 'contains water of crystallization' },
        { key: 'c', text: 'dissolves in water' },
        { key: 'd', text: 'forms crystals which conduct electricity' }
      ],
      correctAnswer: 'a',
      explanation: 'Salts are ionic compounds formed of cations and anions.'
    },
    {
      id: 'ch10-q7',
      questionNumber: 7,
      question: 'Dilute acids react with carbonates to produce the given products except:',
      options: [
        { key: 'a', text: 'salt' },
        { key: 'b', text: 'water' },
        { key: 'c', text: 'carbon dioxide' },
        { key: 'd', text: 'hydrogen' }
      ],
      correctAnswer: 'd',
      explanation: 'Carbonates react with acid to produce salt, water, and CO2, NOT hydrogen gas.'
    },
    {
      id: 'ch10-q8',
      questionNumber: 8,
      question: 'In the preparation of insoluble salts, which one of the facts is incorrect?',
      options: [
        { key: 'a', text: 'two soluble salts are mixed' },
        { key: 'b', text: 'two soluble salts are produced' },
        { key: 'c', text: 'one of the salts produced is insoluble' },
        { key: 'd', text: 'both of the salts produced are insoluble' }
      ],
      correctAnswer: 'c',
      explanation: 'Fact check: in precipitation, two soluble salts react to give ONE insoluble and ONE soluble salt.'
    },
    {
      id: 'ch10-q9',
      questionNumber: 9,
      question: 'A reaction between an acid and a base produces:',
      options: [
        { key: 'a', text: 'salt and water' },
        { key: 'b', text: 'salt and gas' },
        { key: 'c', text: 'salt and an acid' },
        { key: 'd', text: 'salt and a base' }
      ],
      correctAnswer: 'a',
      explanation: 'Acid-base neutralization produces a salt and water: Acid + Base → Salt + H2O.'
    },
    {
      id: 'ch10-q10',
      questionNumber: 10,
      question: 'The conjugate acid of HPO4²⁻ is:',
      options: [
        { key: 'a', text: 'PO4³⁻' },
        { key: 'b', text: 'H2PO4⁻' },
        { key: 'c', text: 'H2PO4' },
        { key: 'd', text: 'H3PO4' }
      ],
      correctAnswer: 'b',
      explanation: 'Adding a proton (H⁺) to HPO4²⁻ yields its conjugate acid H2PO4⁻.'
    },
    {
      id: 'ch10-q11',
      questionNumber: 11,
      question: 'What is the pOH of a 0.02 M Ca(OH)2?',
      options: [
        { key: 'a', text: '1.698' },
        { key: 'b', text: '1.397' },
        { key: 'c', text: '12.31' },
        { key: 'd', text: '12.61' }
      ],
      correctAnswer: 'b',
      explanation: '[OH⁻] = 2 × 0.02 = 0.04 M. pOH = -log(0.04) = 1.397.'
    },
    {
      id: 'ch10-q12',
      questionNumber: 12,
      question: 'Which one of the following species is not amphoteric?',
      options: [
        { key: 'a', text: 'H2O' },
        { key: 'b', text: 'NH3' },
        { key: 'c', text: 'HCO3⁻' },
        { key: 'd', text: 'NH4⁺' }
      ],
      correctAnswer: 'd',
      explanation: 'NH4⁺ can only donate a proton (act as acid); it cannot accept another proton, so it is not amphoteric.'
    },
    {
      id: 'ch10-q13',
      questionNumber: 13,
      question: 'The product of Lewis acid-base reaction is called adduct. The bond between the adduct specie is:',
      options: [
        { key: 'a', text: 'ionic' },
        { key: 'b', text: 'covalent' },
        { key: 'c', text: 'metallic' },
        { key: 'd', text: 'coordinate covalent' }
      ],
      correctAnswer: 'd',
      explanation: 'Lewis acid-base interaction forms a coordinate covalent (dative) bond.'
    },
    {
      id: 'ch10-q14',
      questionNumber: 14,
      question: 'The water of crystallization is responsible for the:',
      options: [
        { key: 'a', text: 'melting points of crystals' },
        { key: 'b', text: 'boiling points of crystals' },
        { key: 'c', text: 'shapes of crystals' },
        { key: 'd', text: 'transition point of crystals' }
      ],
      correctAnswer: 'c',
      explanation: 'Water of crystallization gives salts their characteristic crystal geometry and shape.'
    },
    {
      id: 'ch10-q15',
      questionNumber: 15,
      question: 'You want to dry a gas which one of the following salt you will use:',
      options: [
        { key: 'a', text: 'CaCl2' },
        { key: 'b', text: 'NaCl' },
        { key: 'c', text: 'CaO' },
        { key: 'd', text: 'Na2SiO3' }
      ],
      correctAnswer: 'c',
      explanation: 'Quicklime (CaO) is commonly used as a drying/desiccating agent for gases.'
    },
    {
      id: 'ch10-q16',
      questionNumber: 16,
      question: 'Ferric hydroxide Fe(OH)3 is precipitated out of solution when aqueous sodium hydroxide solution is added to ferric chloride (FeCl3):',
      options: [
        { key: 'a', text: 'green' },
        { key: 'b', text: 'blue' },
        { key: 'c', text: 'dirty green' },
        { key: 'd', text: 'brown' }
      ],
      correctAnswer: 'd',
      explanation: 'Fe(OH)3 forms a distinctive reddish-brown precipitate.'
    },
    {
      id: 'ch10-q17',
      questionNumber: 17,
      question: 'Which ion is the conjugate base of sulphuric acid?',
      options: [
        { key: 'a', text: 'SO3²⁻' },
        { key: 'b', text: 'S²⁻' },
        { key: 'c', text: 'HSO3⁻' },
        { key: 'd', text: 'HSO4⁻' }
      ],
      correctAnswer: 'd',
      explanation: 'Loss of one proton from H2SO4 yields its conjugate base HSO4⁻ (hydrogen sulphate).'
    },
    {
      id: 'ch10-q18',
      questionNumber: 18,
      question: 'Which one of the following is a Lewis base?',
      options: [
        { key: 'a', text: 'NH3' },
        { key: 'b', text: 'BF3' },
        { key: 'c', text: 'H⁺' },
        { key: 'd', text: 'AlCl3' }
      ],
      correctAnswer: 'a',
      explanation: 'NH3 has a lone pair of electrons available for donation, making it a Lewis base.'
    },
    {
      id: 'ch10-q19',
      questionNumber: 19,
      question: 'According to the Lewis concept, acid is a substance which can:',
      options: [
        { key: 'a', text: 'donate a proton' },
        { key: 'b', text: 'donate a pair of electron' },
        { key: 'c', text: 'accept a proton' },
        { key: 'd', text: 'accept a pair of electron' }
      ],
      correctAnswer: 'd',
      explanation: 'A Lewis acid is defined specifically as an electron pair acceptor.'
    },
    {
      id: 'ch10-q20',
      questionNumber: 20,
      question: 'Given Kc = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C. What is the concentration of H⁺ in pure water at 25°C?',
      options: [
        { key: 'a', text: '1 × 10⁻⁷ mol dm⁻³' },
        { key: 'b', text: '1 × 10⁷ mol dm⁻³' },
        { key: 'c', text: '1 × 10⁻¹⁴ mol dm⁻³' },
        { key: 'd', text: '1 × 10¹⁴ mol dm⁻³' }
      ],
      correctAnswer: 'a',
      explanation: 'In pure neutral water [H⁺] = [OH⁻] = √(1.0 × 10⁻¹⁴) = 1.0 × 10⁻⁷ mol dm⁻³.'
    }
  ]
};
