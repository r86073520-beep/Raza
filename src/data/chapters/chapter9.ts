import { Chapter } from '../../types/book';

export const CHAPTER_9: Chapter = {
  id: 'ch-9',
  number: 9,
  title: 'Chemical Equilibrium',
  urduTitle: 'کیمیائی توازن (کیمیکل ایکوی لبریم)',
  description: 'Reversible and irreversible reactions, dynamic equilibrium state, law of mass action, equilibrium constant (Kc), predicting reaction direction, and equilibrium numericals.',
  summary: 'In reversible reactions, forward and reverse reactions occur simultaneously. At dynamic equilibrium, the forward rate equals the reverse rate and composition remains constant.',
  shortQuestions: [
    {
      id: 'ch9-sq1',
      questionNumber: 'Q.1',
      question: 'What are irreversible reactions? Give a few characteristics of them.',
      answer: 'The reaction in which the products do not recombine to form reactants are called irreversible reactions.',
      exampleList: [
        'They are represented by a single arrow (→) between reactant and product.',
        'These reactions proceed to completion.',
        'These reactions may be conducted in open and closed vessels.',
        'There is no sign of equilibrium state in these reactions.'
      ]
    },
    {
      id: 'ch9-sq2',
      questionNumber: 'Q.2',
      question: 'Define chemical equilibrium state.',
      answer: 'When the rate of the forward reaction takes place at the rate of reverse reaction, the composition of the reaction mixture remains constant. It is called a chemical equilibrium state.',
      chemicalReactions: [
        'N2 + 3H2 ⇌ 2NH3     (Kc = 2.86 mol⁻² dm⁶)'
      ]
    },
    {
      id: 'ch9-sq3',
      questionNumber: 'Q.3',
      question: 'Give the characteristics of reversible reaction.',
      answer: 'Characteristics of reversible reactions include:',
      exampleList: [
        'They are represented by double arrow (⇌) between reactant and product.',
        'It can be attainable from either way (starting with reactants or products).',
        'A reversible reaction can never go to completion.',
        'Usually, it can be carried out in a closed vessel.',
        'In reversible reaction, dynamic equilibrium state is the ultimate goal.'
      ]
    },
    {
      id: 'ch9-sq4',
      questionNumber: 'Q.4',
      question: 'How dynamic equilibrium is established?',
      answer: 'When reaction does not stop, only the rates of forward and reverse reactions become equal to each other but take place in opposite directions. This is called dynamic equilibrium state.',
      chemicalReactions: [
        'N2 + 3H2 ⇌ 2NH3     (Kc = 2.86 mol⁻² dm⁶)'
      ],
      diagramInfo: {
        title: 'Dynamic Equilibrium',
        description: 'Equal forward and reverse reaction rates Rf = Rr',
        visualType: 'dynamic_equilibrium'
      }
    },
    {
      id: 'ch9-sq5',
      questionNumber: 'Q.5',
      question: 'Why at equilibrium state reaction does not stop?',
      answer: 'At equilibrium state, a reaction does not stop because forward and reverse reactions keep on taking place at the same rate but in opposite directions. Products recombine to reform reactants while reactants react to form products at an equal pace.',
      chemicalReactions: [
        'I2 + H2 ⇌ 2HI     (Kc = 57.0 at 700 K)'
      ]
    },
    {
      id: 'ch9-sq6',
      questionNumber: 'Q.6',
      question: 'Why equilibrium state is attainable from either way?',
      answer: 'An equilibrium state is attainable from either way because it may start from reactants to give products while products recombine to give reactants again. Forward: A + B → C + D; Reverse: C + D → A + B.',
      chemicalReactions: [
        'A + B ⇌ C + D'
      ]
    },
    {
      id: 'ch9-sq7',
      questionNumber: 'Q.7',
      question: 'What is relationship between active mass and rate of reaction?',
      answer: 'Law of mass action describes the relationship between active masses of the reactants and the rate of a reaction. According to this law: The rate at which a substance reacts is directly proportional to its active mass, and the rate of a reaction is directly proportional to the product of active masses of the reacting substances.',
      chemicalReactions: [
        'A + B --(kf) / (kr)--> C + D',
        'Rate of forward reaction = kf [A][B]',
        'Rate of reverse reaction = kr [C][D]',
        'At equilibrium: kf [A][B] = kr [C][D]',
        'Kc = kf / kr = [C][D] / [A][B]'
      ],
      notes: 'Active mass represents molar concentration expressed in units of mol dm⁻³ denoted by square brackets [ ].'
    },
    {
      id: 'ch9-sq8',
      questionNumber: 'Q.8',
      question: 'Derive equilibrium constant expression for the synthesis of ammonia from nitrogen and hydrogen.',
      answer: 'For the reversible synthesis of ammonia: N2(g) + 3H2(g) ⇌ 2NH3(g). The forward rate is Rf = kf [N2][H2]³, and reverse rate is Rr = kr [NH3]². At dynamic equilibrium Rf = Rr, yielding Kc = [NH3]² / ([N2][H2]³).',
      chemicalReactions: [
        'N2(g) + 3H2(g) ⇌ 2NH3(g)',
        'Rf = kf [N2][H2]³',
        'Rr = kr [NH3]²',
        'Kc = [NH3]² / ([N2][H2]³)'
      ]
    },
    {
      id: 'ch9-sq9',
      questionNumber: 'Q.9',
      question: 'Write the equilibrium constant expression for: (i) H2(g) + I2(g) ⇌ 2HI(g) (ii) CO(g) + 3H2(g) ⇌ CH4(g) + H2O(g)',
      answer: 'Equilibrium constant expressions:',
      chemicalReactions: [
        '(i) H2(g) + I2(g) ⇌ 2HI(g) => Kc = [HI]² / ([H2][I2])',
        '(ii) CO(g) + 3H2(g) ⇌ CH4(g) + H2O(g) => Kc = ([CH4][H2O]) / ([CO][H2]³)'
      ]
    },
    {
      id: 'ch9-sq10',
      questionNumber: 'Q.10',
      question: 'How direction of a reaction can be predicted?',
      answer: 'Direction of a reaction at any particular moment is predicted by calculating the reaction quotient (Qc) by inserting momentary concentrations into the equilibrium expression and comparing with Kc:',
      exampleList: [
        'If Qc < Kc: Reaction proceeds in the forward direction (left to right) to attain equilibrium.',
        'If Qc > Kc: Reaction proceeds in the reverse direction (right to left) to attain equilibrium.',
        'If Qc = Kc: Forward and reverse rates are equal, dynamic equilibrium has been attained.'
      ]
    },
    {
      id: 'ch9-sq11',
      questionNumber: 'Q.11',
      question: 'How can you know that a reaction has achieved an equilibrium state?',
      answer: 'A reaction achieves an equilibrium state when the rate of the forward reaction equals the rate of the reverse reaction, and the physical and chemical properties (such as color intensity, pressure, density, and concentration) cease changing.'
    },
    {
      id: 'ch9-sq12',
      questionNumber: 'Q.12',
      question: 'What are the characteristics of a reaction that establishes equilibrium state at once?',
      answer: 'Characteristics include: high rates of both forward and reverse reactions, low activation energy barriers, carried out in a closed vessel, and reversible molecular interactions.'
    },
    {
      id: 'ch9-sq13',
      questionNumber: 'Q.13',
      question: 'If reaction quotient Qc of a reaction is more than Kc, what will be the direction of the reaction?',
      answer: 'If the value of Qc is more than Kc (Qc > Kc), the net reaction goes from right to left (it will move in reverse direction) to attain equilibrium by consuming products.'
    },
    {
      id: 'ch9-sq14',
      questionNumber: 'Q.14',
      question: 'An industry was established based upon a reversible reaction. It failed to achieve products on commercial level. Can you point out the basic reasons of its failure?',
      answer: 'In a reversible reaction, as soon as products form, they recombine back into reactants. Without continuous removal of products or shifting equilibrium (Le Chatelier principle by altering temperature/pressure), maximum commercial yield cannot be attained.'
    }
  ],
  extensiveQuestions: [
    {
      id: 'ch9-eq1',
      questionNumber: 'Q.1',
      question: 'Describe a reversible reaction with the help of an example and graph.',
      answerReference: 'Explain reversible reaction (e.g. H2 + I2 <=> 2HI), graph of reaction rates versus time showing forward rate decreasing and reverse rate increasing until both equalize at equilibrium.'
    },
    {
      id: 'ch9-eq2',
      questionNumber: 'Q.2',
      question: 'Write down the macroscopic characteristics of dynamic equilibrium.',
      answerReference: 'Macroscopic characteristics: achievable only in a closed system, forward rate equals reverse rate, reaction does not stop, amounts of reactants and products remain constant, attainable from either side.'
    },
    {
      id: 'ch9-eq3',
      questionNumber: 'Q.3',
      question: 'State the Law of Mass Action and derive the expression for equilibrium constant for a general reaction.',
      answerReference: 'Guldberg and Waage law: Rate is proportional to active mass. For aA + bB <=> cC + dD, Rf = kf[A]^a[B]^b, Rr = kr[C]^c[D]^d. At equilibrium Rf = Rr, yielding Kc = ([C]^c[D]^d) / ([A]^a[B]^b).'
    },
    {
      id: 'ch9-eq4',
      questionNumber: 'Q.4',
      question: 'What is the importance of equilibrium constant? How can it predict the direction and extent of reaction?',
      answerReference: 'Predicts direction of reaction by comparing Qc with Kc. Predicts extent of reaction: very large Kc means reaction goes almost to completion; very small Kc means negligible products form; moderate Kc means comparable amounts exist.'
    }
  ],
  numericals: [
    {
      id: 'ch9-num1',
      questionNumber: 'Problem 1',
      problem: 'For the decomposition of dinitrogen oxide (N2O) into nitrogen and oxygen, reversible reaction takes place as follows: 2N2O ⇌ 2N2 + O2. The concentration of N2O, N2 and O2 are 1.1 mol dm⁻³, 3.90 mol dm⁻³, and 1.95 mol dm⁻³ respectively at equilibrium. Find out Kc for this reaction.',
      givenData: [
        '[N2O] = 1.1 mol dm⁻³',
        '[N2] = 3.90 mol dm⁻³',
        '[O2] = 1.95 mol dm⁻³'
      ],
      balancedEquation: '2N2O(g) ⇌ 2N2(g) + O2(g)',
      requiredData: 'Equilibrium constant (Kc) = ?',
      solutionSteps: [
        'Kc = ([N2]² [O2]) / [N2O]²',
        'Putting equilibrium values: Kc = ([3.90]² × [1.95]) / [1.1]²',
        'Kc = (15.21 × 1.95) / 1.21',
        'Kc = 29.6595 / 1.21 = 24.51 mol dm⁻³'
      ],
      result: 'Kc = 24.51 mol dm⁻³'
    },
    {
      id: 'ch9-num2',
      questionNumber: 'Problem 2',
      problem: 'Hydrogen iodide decomposes to form hydrogen and iodine: 2HI ⇌ H2 + I2. If the equilibrium concentration of HI is 0.078 mol dm⁻³, and H2 and I2 are both 0.011 mol dm⁻³, calculate the equilibrium constant value for this reversible reaction.',
      givenData: [
        '[HI] = 0.078 mol dm⁻³',
        '[H2] = 0.011 mol dm⁻³',
        '[I2] = 0.011 mol dm⁻³'
      ],
      balancedEquation: '2HI(g) ⇌ H2(g) + I2(g)',
      requiredData: 'Equilibrium constant (Kc) = ?',
      solutionSteps: [
        'Kc = ([H2] [I2]) / [HI]²',
        'Kc = (0.011 × 0.011) / (0.078)²',
        'Kc = 0.000121 / 0.006084 = 0.01989'
      ],
      result: 'Kc = 0.01989 (No units)'
    },
    {
      id: 'ch9-num3',
      questionNumber: 'Problem 3',
      problem: 'For the fixation of nitrogen following reaction takes place: N2 + O2 ⇌ 2NO. At 1500 K, Kc = 1.1 × 10⁻⁵. If equilibrium concentrations of N2 and O2 are 1.7 × 10⁻³ mol dm⁻³ and 6.4 × 10⁻³ mol dm⁻³ respectively, how much NO is formed?',
      givenData: [
        '[N2] = 1.7 × 10⁻³ mol dm⁻³',
        '[O2] = 6.4 × 10⁻³ mol dm⁻³',
        'Kc = 1.1 × 10⁻⁵'
      ],
      balancedEquation: 'N2(g) + O2(g) ⇌ 2NO(g)',
      requiredData: 'Concentration of [NO] = ?',
      solutionSteps: [
        'Kc = [NO]² / ([N2] [O2])',
        '1.1 × 10⁻⁵ = [NO]² / [(1.7 × 10⁻³) × (6.4 × 10⁻³)]',
        '[NO]² = 1.1 × 10⁻⁵ × 1.088 × 10⁻⁵ = 1.1968 × 10⁻¹⁰',
        '[NO] = √(1.1968 × 10⁻¹⁰) = 1.09 × 10⁻⁵ mol dm⁻³'
      ],
      result: '[NO] = 1.09 × 10⁻⁵ mol dm⁻³'
    },
    {
      id: 'ch9-num4',
      questionNumber: 'Problem 4',
      problem: 'When nitrogen reacts with hydrogen to form ammonia: N2 + 3H2 ⇌ 2NH3. The equilibrium mixture contains 0.31 mol dm⁻³ N2 and 0.50 mol dm⁻³ H2. If Kc is 0.50 mol⁻² dm⁶, what is the equilibrium concentration of ammonia?',
      givenData: [
        '[N2] = 0.31 mol dm⁻³',
        '[H2] = 0.50 mol dm⁻³',
        'Kc = 0.50 mol⁻² dm⁶'
      ],
      balancedEquation: 'N2(g) + 3H2(g) ⇌ 2NH3(g)',
      requiredData: 'Concentration of [NH3] = ?',
      solutionSteps: [
        'Kc = [NH3]² / ([N2] [H2]³)',
        '0.50 = [NH3]² / [0.31 × (0.50)³]',
        '[NH3]² = 0.50 × 0.31 × 0.125 = 0.019375',
        '[NH3] = √(0.019375) = 0.1392 mol dm⁻³ ≈ 0.14 mol dm⁻³'
      ],
      result: '[NH3] = 0.14 mol dm⁻³'
    }
  ],
  quizzes: [
    {
      id: 'ch9-q1',
      questionNumber: 1,
      question: 'The characteristics of reversible reactions are the following except:',
      options: [
        { key: 'a', text: 'products never recombine to form reactants' },
        { key: 'b', text: 'they never complete' },
        { key: 'c', text: 'they proceed in both ways' },
        { key: 'd', text: 'they have a double arrow between reactants and products' }
      ],
      correctAnswer: 'a',
      explanation: 'In reversible reactions, products DO recombine to form reactants.'
    },
    {
      id: 'ch9-q2',
      questionNumber: 2,
      question: 'In the lime kiln, the reaction CaCO3(s) -> CaO(s) + CO2(g) goes to completion because:',
      options: [
        { key: 'a', text: 'of high temperature' },
        { key: 'b', text: 'CaO is more stable than CaCO3' },
        { key: 'c', text: 'CO2 escapes continuously' },
        { key: 'd', text: 'CaO is not dissociated' }
      ],
      correctAnswer: 'c',
      explanation: 'In an open kiln, gaseous CO2 escapes, preventing the reverse recombination.'
    },
    {
      id: 'ch9-q3',
      questionNumber: 3,
      question: 'For the reaction, 2A(g) + B(g) ⇌ 3C(g) the expression for the equilibrium constant is:',
      options: [
        { key: 'a', text: '[2A][B] / [3C]' },
        { key: 'b', text: '[A]²[B] / [C]³' },
        { key: 'c', text: '[3C] / [2A][B]' },
        { key: 'd', text: '[C]³ / ([A]²[B])' }
      ],
      correctAnswer: 'd',
      explanation: 'Kc is the ratio of product active masses raised to their stoichiometric coefficients over reactants.'
    },
    {
      id: 'ch9-q4',
      questionNumber: 4,
      question: 'When a system is at equilibrium state:',
      options: [
        { key: 'a', text: 'the concentration of reactants and products becomes equal' },
        { key: 'b', text: 'the opposing reactions (forward and reverse) stop' },
        { key: 'c', text: 'the rate of the reverse reaction becomes very low' },
        { key: 'd', text: 'the rates of the forward and reverse reactions become equal' }
      ],
      correctAnswer: 'd',
      explanation: 'At dynamic equilibrium, rate of forward reaction equals rate of reverse reaction.'
    },
    {
      id: 'ch9-q5',
      questionNumber: 5,
      question: 'Which one of the following statement is not correct about active mass?',
      options: [
        { key: 'a', text: 'rate of reaction is directly proportional to active mass' },
        { key: 'b', text: 'active mass is taken in molar concentration' },
        { key: 'c', text: 'active mass is represented by square brackets' },
        { key: 'd', text: 'active mass means total mass of substances' }
      ],
      correctAnswer: 'd',
      explanation: 'Active mass represents molar concentration (mol dm⁻³), not total uncalibrated mass.'
    },
    {
      id: 'ch9-q6',
      questionNumber: 6,
      question: 'When the magnitude of Kc is very large it indicates:',
      options: [
        { key: 'a', text: 'reaction mixture consists of almost all products' },
        { key: 'b', text: 'reaction mixture has almost all reactants' },
        { key: 'c', text: 'reaction has not gone to completion' },
        { key: 'd', text: 'reaction mixture has negligible products' }
      ],
      correctAnswer: 'a',
      explanation: 'A very large Kc indicates that reactants have been almost completely converted into products.'
    },
    {
      id: 'ch9-q7',
      questionNumber: 7,
      question: 'When the magnitude of Kc is very small it indicates:',
      options: [
        { key: 'a', text: 'equilibrium will never establish' },
        { key: 'b', text: 'all reactants will be converted to products' },
        { key: 'c', text: 'reaction will go to completion' },
        { key: 'd', text: 'the amount of products is negligible' }
      ],
      correctAnswer: 'd',
      explanation: 'A very small Kc signifies that only a trace amount of products forms before equilibrium is reached.'
    },
    {
      id: 'ch9-q8',
      questionNumber: 8,
      question: 'Reactions which have comparable amounts of reactants and products at equilibrium state have:',
      options: [
        { key: 'a', text: 'very small Kc value' },
        { key: 'b', text: 'very large Kc value' },
        { key: 'c', text: 'moderate Kc value' },
        { key: 'd', text: 'none of these' }
      ],
      correctAnswer: 'c',
      explanation: 'A moderate Kc value indicates roughly equal equilibrium quantities of both reactants and products.'
    },
    {
      id: 'ch9-q9',
      questionNumber: 9,
      question: 'At dynamic equilibrium:',
      options: [
        { key: 'a', text: 'the reaction stops to proceed' },
        { key: 'b', text: 'the amounts of reactants and products are equal' },
        { key: 'c', text: 'the speeds of the forward and reverse reactions are equal' },
        { key: 'd', text: 'the reaction can no longer be reversed' }
      ],
      correctAnswer: 'c',
      explanation: 'Dynamic equilibrium implies equal forward and reverse rates, not cessation of reaction.'
    },
    {
      id: 'ch9-q10',
      questionNumber: 10,
      question: 'In an irreversible reaction dynamic equilibrium:',
      options: [
        { key: 'a', text: 'never establishes' },
        { key: 'b', text: 'establishes before the completion of reaction' },
        { key: 'c', text: 'establishes after the completion of reaction' },
        { key: 'd', text: 'establishes readily' }
      ],
      correctAnswer: 'a',
      explanation: 'Irreversible reactions proceed to completion in one direction; dynamic equilibrium never establishes.'
    },
    {
      id: 'ch9-q11',
      questionNumber: 11,
      question: 'A reverse reaction is one that:',
      options: [
        { key: 'a', text: 'which proceeds from left to right' },
        { key: 'b', text: 'in which reactants react to form products' },
        { key: 'c', text: 'which slows down gradually' },
        { key: 'd', text: 'which speeds up gradually' }
      ],
      correctAnswer: 'd',
      explanation: 'At initial time reverse rate is zero, but as products accumulate, reverse reaction speeds up gradually.'
    },
    {
      id: 'ch9-q12',
      questionNumber: 12,
      question: 'Nitrogen and hydrogen were reacted together to make ammonia: N2 + 3H2 ⇌ 2NH3, Kc = 2.86 mol⁻² dm⁶. What will be present in the equilibrium mixture?',
      options: [
        { key: 'a', text: 'NH3 only' },
        { key: 'b', text: 'N2, H2 & NH3' },
        { key: 'c', text: 'N2 & H2' },
        { key: 'd', text: 'H2 only' }
      ],
      correctAnswer: 'b',
      explanation: 'At chemical equilibrium, all reacting species (N2, H2 and NH3) coexist in the reaction vessel.'
    },
    {
      id: 'ch9-q13',
      questionNumber: 13,
      question: 'For a reaction between PCl3 and Cl2 to form PCl5, the units of Kc are:',
      options: [
        { key: 'a', text: 'mol dm⁻³' },
        { key: 'b', text: 'mol⁻¹ dm⁻³' },
        { key: 'c', text: 'mol⁻¹ dm³' },
        { key: 'd', text: 'mol dm³' }
      ],
      correctAnswer: 'c',
      explanation: 'Kc = [PCl5] / ([PCl3][Cl2]) = (mol dm⁻³) / (mol dm⁻³)² = mol⁻¹ dm³.'
    }
  ]
};
