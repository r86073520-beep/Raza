import { Chapter } from '../../types/book';

export const UNIT_1_4: Chapter[] = [
  {
    id: 'math-u1',
    number: 1,
    title: 'Quadratic Equations',
    urduTitle: 'دو درجی مساواتیں',
    description: 'Standard form ax² + bx + c = 0, solution by factorization, completing square, quadratic formula, reciprocal, exponential and radical equations.',
    summary: 'A quadratic equation in one variable x is an equation of the second degree: ax² + bx + c = 0, where a ≠ 0. If b = 0, it becomes a pure quadratic equation ax² + c = 0. Quadratic equations can be solved by factorization, completing the square, or by applying the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a). Equations reducible to quadratic form include reciprocal equations, exponential equations, and radical equations.',
    shortQuestions: [
      {
        id: 'm1-sq1',
        questionNumber: 'Q.1',
        question: 'Write the standard form of a quadratic equation and give an example.',
        answer: 'An equation containing the square of the unknown quantity, but no higher power, is called a quadratic equation. The standard form is: ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0. Example: 3x² - 5x + 2 = 0.'
      },
      {
        id: 'm1-sq2',
        questionNumber: 'Q.2',
        question: 'What is a pure quadratic equation? Give an example.',
        answer: 'If b = 0 in the quadratic equation ax² + bx + c = 0, then the equation becomes ax² + c = 0, which is called a pure quadratic equation because it contains only the square of the variable and no linear term. Example: x² - 16 = 0 or 4x² - 25 = 0.'
      },
      {
        id: 'm1-sq3',
        questionNumber: 'Q.3',
        question: 'Solve by factorization: x² - x - 20 = 0.',
        answer: 'Given equation: x² - x - 20 = 0. Splitting the middle term: x² - 5x + 4x - 20 = 0 ⇒ x(x - 5) + 4(x - 5) = 0 ⇒ (x - 5)(x + 4) = 0. Either x - 5 = 0 ⇒ x = 5, or x + 4 = 0 ⇒ x = -4. Solution Set = {-4, 5}.'
      },
      {
        id: 'm1-sq4',
        questionNumber: 'Q.4',
        question: 'State the Quadratic Formula used to solve ax² + bx + c = 0.',
        answer: 'The quadratic formula is derived from ax² + bx + c = 0 by completing the square: x = (-b ± √(b² - 4ac)) / (2a), where a ≠ 0. The expression (b² - 4ac) under the radical sign is called the discriminant.'
      },
      {
        id: 'm1-sq5',
        questionNumber: 'Q.5',
        question: 'Solve using quadratic formula: 2x² + 5x - 3 = 0.',
        answer: 'Here a = 2, b = 5, c = -3. x = (-5 ± √((5)² - 4(2)(-3))) / (2 × 2) = (-5 ± √(25 + 24)) / 4 = (-5 ± √49) / 4 = (-5 ± 7) / 4. Thus x = (-5 + 7)/4 = 2/4 = 1/2 or x = (-5 - 7)/4 = -12/4 = -3. Solution Set = {-3, 1/2}.'
      },
      {
        id: 'm1-sq6',
        questionNumber: 'Q.6',
        question: 'Define a reciprocal equation and write an example.',
        answer: 'An equation is said to be a reciprocal equation if it remains unchanged when x is replaced by 1/x. Example: 2x⁴ - 5x³ + 6x² - 5x + 2 = 0. Dividing both sides by x² reduces it to quadratic form in (x + 1/x).'
      },
      {
        id: 'm1-sq7',
        questionNumber: 'Q.7',
        question: 'What is an exponential equation? Give an example.',
        answer: 'In an exponential equation, the unknown variable occurs in the exponent (power) rather than the base. Example: 5^(1+x) + 5^(1-x) = 26 or 2^(2x) - 3 · 2^(x+2) + 32 = 0.'
      },
      {
        id: 'm1-sq8',
        questionNumber: 'Q.8',
        question: 'Define a radical equation and an extraneous root.',
        answer: 'An equation involving one or more expressions of the variable under a radical sign (square root) is called a radical equation, e.g., √(x + 3) = x - 1. Solutions obtained after squaring that do not satisfy the original equation are called extraneous roots.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm1-eq1',
        questionNumber: 'Extensive Q.1 (Ex 1.1)',
        question: 'Derive the quadratic formula x = (-b ± √(b² - 4ac)) / (2a) by completing the square on ax² + bx + c = 0.',
        answerReference: 'Step 1: Divide by a (a ≠ 0): x² + (b/a)x + c/a = 0.\nStep 2: Shift constant to RHS: x² + (b/a)x = -c/a.\nStep 3: Add (b/2a)² to both sides: x² + 2(b/2a)x + (b/2a)² = (b²/4a²) - (c/a).\nStep 4: LHS is a complete square: (x + b/2a)² = (b² - 4ac) / (4a²).\nStep 5: Take square root on both sides: x + b/2a = ±√(b² - 4ac) / 2a.\nStep 6: x = (-b ± √(b² - 4ac)) / (2a). (Proved)',
        guidance: 'Crucial board derivation. Emphasize that a ≠ 0 and show the addition of (b/2a)² to both sides.'
      },
      {
        id: 'm1-eq2',
        questionNumber: 'Extensive Q.2 (Ex 1.3)',
        question: 'Solve the reciprocal equation: 2x⁴ - 5x³ + 6x² - 5x + 2 = 0.',
        answerReference: 'Dividing by x²: 2x² - 5x + 6 - 5/x + 2/x² = 0 ⇒ 2(x² + 1/x²) - 5(x + 1/x) + 6 = 0. Let y = x + 1/x, then x² + 1/x² = y² - 2. Substituting: 2(y² - 2) - 5y + 6 = 0 ⇒ 2y² - 5y + 2 = 0. Factoring: (2y - 1)(y - 2) = 0 ⇒ y = 2 or y = 1/2. Case 1: x + 1/x = 2 ⇒ x² - 2x + 1 = 0 ⇒ (x - 1)² = 0 ⇒ x = 1. Case 2: x + 1/x = 1/2 ⇒ 2x² - x + 2 = 0 ⇒ x = (1 ± √(-15))/4 (complex). Real Solution = {1}.',
        guidance: 'Substitute y = x + 1/x carefully and test both roots in original equation.'
      }
    ],
    numericals: [
      {
        id: 'm1-num1',
        questionNumber: 'Solved Problem 1 (Ex 1.1 Q.3)',
        problem: 'Solve by completing the square: 7x² + 2x - 1 = 0.',
        givenData: ['7x² + 2x - 1 = 0'],
        solutionSteps: [
          'Divide by 7: x² + (2/7)x - 1/7 = 0',
          'Shift constant: x² + (2/7)x = 1/7',
          'Add (1/7)² to both sides: x² + 2(1/7)x + (1/7)² = 1/7 + 1/49',
          '(x + 1/7)² = (7 + 1)/49 = 8/49',
          'Take square root: x + 1/7 = ±(2√2)/7',
          'x = (-1 ± 2√2) / 7'
        ],
        result: 'Solution Set = {(-1 ± 2√2) / 7}'
      },
      {
        id: 'm1-num2',
        questionNumber: 'Solved Problem 2 (Ex 1.4 Q.1)',
        problem: 'Solve the radical equation: √(2x + 5) = 2.',
        givenData: ['√(2x + 5) = 2'],
        solutionSteps: [
          'Square both sides: (√(2x + 5))² = (2)²',
          '2x + 5 = 4',
          '2x = 4 - 5 = -1',
          'x = -1/2',
          'Check: √(2(-1/2) + 5) = √(-1 + 5) = √4 = 2 (True)'
        ],
        result: 'Solution Set = {-1/2}'
      }
    ],
    quizzes: [
      {
        id: 'm1-q1',
        questionNumber: 1,
        question: 'Standard form of quadratic equation is:',
        options: [
          { key: 'a', text: 'bx + c = 0, b ≠ 0' },
          { key: 'b', text: 'ax² + bx + c = 0, a ≠ 0' },
          { key: 'c', text: 'ax³ + bx² + c = 0' },
          { key: 'd', text: 'ax² = 0, a = 0' }
        ],
        correctAnswer: 'b',
        explanation: 'ax² + bx + c = 0 with a ≠ 0 defines the standard quadratic equation of second degree.'
      },
      {
        id: 'm1-q2',
        questionNumber: 2,
        question: 'The number of terms in a standard quadratic equation ax² + bx + c = 0 is:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'c',
        explanation: 'It has 3 terms: ax² (quadratic term), bx (linear term), and c (constant term).'
      },
      {
        id: 'm1-q3',
        questionNumber: 3,
        question: 'The number of methods to solve a quadratic equation is:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'c',
        explanation: 'Three methods: 1) Factorization, 2) Completing the square, 3) Quadratic formula.'
      },
      {
        id: 'm1-q4',
        questionNumber: 4,
        question: 'An equation of the form 2^(2x) - 3 · 2^x + 32 = 0 is called a/an:',
        options: [
          { key: 'a', text: 'Reciprocal equation' },
          { key: 'b', text: 'Radical equation' },
          { key: 'c', text: 'Exponential equation' },
          { key: 'd', text: 'Linear equation' }
        ],
        correctAnswer: 'c',
        explanation: 'In exponential equations, the variable appears as a power/exponent.'
      },
      {
        id: 'm1-q5',
        questionNumber: 5,
        question: 'The solution set of equation 4x² - 16 = 0 is:',
        options: [
          { key: 'a', text: '{±4}' },
          { key: 'b', text: '{4}' },
          { key: 'c', text: '{±2}' },
          { key: 'd', text: '{±16}' }
        ],
        correctAnswer: 'c',
        explanation: '4x² = 16 ⇒ x² = 4 ⇒ x = ±2.'
      }
    ]
  },
  {
    id: 'math-u2',
    number: 2,
    title: 'Theory of Quadratic Equations',
    urduTitle: 'دو درجی مساواتوں کا نظریہ',
    description: 'Discriminant b² - 4ac, nature of roots, cube roots of unity (1, ω, ω²), sum and product of roots, symmetric functions, synthetic division, simultaneous equations.',
    summary: 'The nature of roots of ax² + bx + c = 0 depends on the Discriminant = b² - 4ac. If Disc > 0 and a perfect square, roots are rational and unequal; if Disc > 0 and not a perfect square, roots are irrational and unequal; if Disc = 0, roots are real and equal; if Disc < 0, roots are imaginary (complex conjugates). Cube roots of unity are 1, ω, and ω², satisfying 1 + ω + ω² = 0 and ω³ = 1. If α, β are roots, sum S = α + β = -b/a and product P = αβ = c/a, and the quadratic equation is x² - Sx + P = 0.',
    shortQuestions: [
      {
        id: 'm2-sq1',
        questionNumber: 'Q.1',
        question: 'Define the Discriminant of a quadratic equation.',
        answer: 'The expression (b² - 4ac) under the radical sign in the quadratic formula is called the Discriminant of the quadratic equation ax² + bx + c = 0. It determines the nature of the roots.'
      },
      {
        id: 'm2-sq2',
        questionNumber: 'Q.2',
        question: 'Find the discriminant of 2x² - 7x + 3 = 0.',
        answer: 'Here a = 2, b = -7, c = 3. Discriminant = b² - 4ac = (-7)² - 4(2)(3) = 49 - 24 = 25. Since 25 is positive and a perfect square (5²), the roots are real, rational, and unequal.'
      },
      {
        id: 'm2-sq3',
        questionNumber: 'Q.3',
        question: 'For what value of k does kx² + 4x + 3 = 0 have equal roots?',
        answer: 'For equal roots, Discriminant = 0 ⇒ b² - 4ac = 0. Here a = k, b = 4, c = 3. (4)² - 4(k)(3) = 0 ⇒ 16 - 12k = 0 ⇒ 12k = 16 ⇒ k = 16/12 = 4/3.'
      },
      {
        id: 'm2-sq4',
        questionNumber: 'Q.4',
        question: 'State the properties of the cube roots of unity (1, ω, ω²).',
        answer: '1) The sum of all three cube roots of unity is zero: 1 + ω + ω² = 0.\n2) The product of all three cube roots of unity is one: 1 · ω · ω² = ω³ = 1.\n3) Each complex cube root of unity is the square of the other: ω² = (-1 - i√3)/2 when ω = (-1 + i√3)/2.'
      },
      {
        id: 'm2-sq5',
        questionNumber: 'Q.5',
        question: 'Evaluate: (1 - ω - ω²)⁷.',
        answer: 'Since 1 + ω + ω² = 0 ⇒ -ω - ω² = 1. Therefore, (1 - ω - ω²)⁷ = (1 + (-ω - ω²))⁷ = (1 + 1)⁷ = (2)⁷ = 128.'
      },
      {
        id: 'm2-sq6',
        questionNumber: 'Q.6',
        question: 'Find the sum and product of the roots of 3x² + 7x - 11 = 0 without solving.',
        answer: 'Comparing with ax² + bx + c = 0: a = 3, b = 7, c = -11. Sum of roots S = α + β = -b/a = -7/3. Product of roots P = αβ = c/a = -11/3.'
      },
      {
        id: 'm2-sq7',
        questionNumber: 'Q.7',
        question: 'Form a quadratic equation whose roots are 3 and -4.',
        answer: 'Let roots be α = 3, β = -4. Sum S = α + β = 3 + (-4) = -1. Product P = αβ = 3(-4) = -12. Equation: x² - Sx + P = 0 ⇒ x² - (-1)x + (-12) = 0 ⇒ x² + x - 12 = 0.'
      },
      {
        id: 'm2-sq8',
        questionNumber: 'Q.8',
        question: 'What is synthetic division? Use it to divide (x² + 7x - 1) by (x + 1).',
        answer: 'Synthetic division is a shorthand method of polynomial division by a linear divisor of the form (x - a). For divisor (x + 1), a = -1. Coefficients: [1, 7, -1]. Multiplying and adding with -1 gives quotient Q(x) = x + 6 and Remainder R = -7.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm2-eq1',
        questionNumber: 'Extensive Q.1 (Ex 2.1 / 2.3)',
        question: 'Prove that the roots of the equation (a² - bc)x² + 2(b² - ca)x + (c² - ab) = 0 are equal if either b = 0 or a³ + b³ + c³ = 3abc.',
        answerReference: 'Discriminant = B² - 4AC = [2(b² - ca)]² - 4(a² - bc)(c² - ab) = 4[(b² - ca)² - (a² - bc)(c² - ab)].\nExpanding: 4[b⁴ - 2ab²c + a²c² - (a²c² - a³b - bc³ + ab²c)] = 4[b⁴ - 3ab²c + a³b + bc³] = 4b(a³ + b³ + c³ - 3abc).\nFor roots to be equal, Discriminant = 0 ⇒ 4b(a³ + b³ + c³ - 3abc) = 0. Hence, either b = 0 or a³ + b³ + c³ - 3abc = 0 ⇒ a³ + b³ + c³ = 3abc. (Proved)',
        guidance: 'High-frequency board long question. Factor out 4b cleanly.'
      },
      {
        id: 'm2-eq2',
        questionNumber: 'Extensive Q.2 (Ex 2.7)',
        question: 'Solve the simultaneous equations: x + y = 5 and x² - 2y - 14 = 0.',
        answerReference: 'From equation (1): y = 5 - x. Substitute into equation (2): x² - 2(5 - x) - 14 = 0 ⇒ x² - 10 + 2x - 14 = 0 ⇒ x² + 2x - 24 = 0. Factorize: (x + 6)(x - 4) = 0 ⇒ x = -6 or x = 4. When x = -6: y = 5 - (-6) = 11. When x = 4: y = 5 - 4 = 1. Solution Set = {(-6, 11), (4, 1)}.',
        guidance: 'Check solutions in both original equations.'
      }
    ],
    numericals: [
      {
        id: 'm2-num1',
        questionNumber: 'Solved Problem 1 (Ex 2.2 Q.2)',
        problem: 'Evaluate: (1 - 3ω - 3ω²)⁵.',
        givenData: ['(1 - 3ω - 3ω²)⁵'],
        solutionSteps: [
          'Factor out -3 from ω and ω²: 1 - 3(ω + ω²)',
          'Since 1 + ω + ω² = 0 ⇒ ω + ω² = -1',
          'Substitute: 1 - 3(-1) = 1 + 3 = 4',
          'Now calculate (4)⁵ = 1024'
        ],
        result: 'Answer = 1024'
      }
    ],
    quizzes: [
      {
        id: 'm2-q1',
        questionNumber: 1,
        question: 'Discriminant of ax² + bx + c = 0 is:',
        options: [
          { key: 'a', text: 'b² - 4ac' },
          { key: 'b', text: 'b² + 4ac' },
          { key: 'c', text: '-b ± √(b² - 4ac)' },
          { key: 'd', text: '4ac - b²' }
        ],
        correctAnswer: 'a',
        explanation: 'Discriminant Δ = b² - 4ac.'
      },
      {
        id: 'm2-q2',
        questionNumber: 2,
        question: 'If b² - 4ac = 0, then the roots of ax² + bx + c = 0 are:',
        options: [
          { key: 'a', text: 'Real and equal' },
          { key: 'b', text: 'Rational and unequal' },
          { key: 'c', text: 'Imaginary' },
          { key: 'd', text: 'Irrational' }
        ],
        correctAnswer: 'a',
        explanation: 'When Δ = 0, both roots equal -b/2a (real and coincident/equal).'
      },
      {
        id: 'm2-q3',
        questionNumber: 3,
        question: 'The sum of all three cube roots of unity (1 + ω + ω²) is equal to:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '0' },
          { key: 'c', text: '-1' },
          { key: 'd', text: '3' }
        ],
        correctAnswer: 'b',
        explanation: '1 + ω + ω² = 1 + (-1+i√3)/2 + (-1-i√3)/2 = 1 - 1 = 0.'
      },
      {
        id: 'm2-q4',
        questionNumber: 4,
        question: 'ω²⁸ + ω²⁹ + 1 = ?',
        options: [
          { key: 'a', text: '0' },
          { key: 'b', text: '1' },
          { key: 'c', text: '-1' },
          { key: 'd', text: 'ω' }
        ],
        correctAnswer: 'a',
        explanation: 'ω²⁸ = (ω³)⁹ · ω = ω; ω²⁹ = (ω³)⁹ · ω² = ω². So ω + ω² + 1 = 0.'
      },
      {
        id: 'm2-q5',
        questionNumber: 5,
        question: 'If α and β are roots of 7x² - 5x + 3 = 0, then the sum of roots α + β is:',
        options: [
          { key: 'a', text: '5/7' },
          { key: 'b', text: '-5/7' },
          { key: 'c', text: '3/7' },
          { key: 'd', text: '-3/7' }
        ],
        correctAnswer: 'a',
        explanation: 'Sum = -b/a = -(-5)/7 = 5/7.'
      }
    ]
  },
  {
    id: 'math-u3',
    number: 3,
    title: 'Variations',
    urduTitle: 'تغیرات (نسبت اور تناسب)',
    description: 'Ratio, proportion, direct variation (y ∝ x), inverse variation (y ∝ 1/x), joint variation, theorems on proportions (Componendo-Dividendo), and k-method.',
    summary: 'A ratio is a comparison of two quantities of the same kind (a : b = a/b). Proportion is the equality of two ratios (a : b :: c : d ⇒ ad = bc, product of extremes = product of means). In direct variation, y ∝ x ⇒ y = kx. In inverse variation, y ∝ 1/x ⇒ y = k/x. Important proportion theorems include Invertendo, Alternando, Componendo, Dividendo, and Componendo-Dividendo theorem: if a/b = c/d, then (a + b)/(a - b) = (c + d)/(c - d). In the k-method, ratios are set equal to a constant k to solve algebraic identities.',
    shortQuestions: [
      {
        id: 'm3-sq1',
        questionNumber: 'Q.1',
        question: 'Define Ratio and Proportion.',
        answer: 'A ratio is a relation between two quantities of the same kind, denoted by a : b or a/b (where b ≠ 0). A proportion is a statement that expresses the equality of two ratios, written as a : b = c : d or a : b :: c : d.'
      },
      {
        id: 'm3-sq2',
        questionNumber: 'Q.2',
        question: 'Find the fourth proportional to 5, 8, 15.',
        answer: 'Let x be the fourth proportional: 5 : 8 :: 15 : x. Product of extremes = Product of means: 5 × x = 8 × 15 ⇒ 5x = 120 ⇒ x = 120/5 = 24.'
      },
      {
        id: 'm3-sq3',
        questionNumber: 'Q.3',
        question: 'Find the mean proportional between 4 and 16.',
        answer: 'Let m be the mean proportional: 4 : m :: m : 16 ⇒ m × m = 4 × 16 ⇒ m² = 64 ⇒ m = ±√64 = ±8.'
      },
      {
        id: 'm3-sq4',
        questionNumber: 'Q.4',
        question: 'Differentiate between direct variation and inverse variation.',
        answer: 'In direct variation, an increase (or decrease) in one quantity produces a proportionate increase (or decrease) in another: y ∝ x ⇒ y = kx. In inverse variation, an increase in one produces a proportionate decrease in another: y ∝ 1/x ⇒ y = k/x.'
      },
      {
        id: 'm3-sq5',
        questionNumber: 'Q.5',
        question: 'State the Componendo-Dividendo Theorem.',
        answer: 'If a : b = c : d (i.e. a/b = c/d), then according to the Componendo-Dividendo theorem: (a + b) / (a - b) = (c + d) / (c - d), where a ≠ b and c ≠ d.'
      },
      {
        id: 'm3-sq6',
        questionNumber: 'Q.6',
        question: 'If y varies directly as x, and y = 8 when x = 2, find y when x = 5.',
        answer: 'Since y ∝ x ⇒ y = kx. Given y = 8 when x = 2: 8 = k(2) ⇒ k = 4. Equation is y = 4x. For x = 5: y = 4(5) = 20.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm3-eq1',
        questionNumber: 'Extensive Q.1 (Ex 3.4)',
        question: 'Use Componendo-Dividendo theorem to solve: √((x + 3) + √(x - 3)) / (√((x + 3) - √(x - 3))) = 4/3.',
        answerReference: 'Applying Componendo-Dividendo theorem:\n[(√(x + 3) + √(x - 3)) + (√(x + 3) - √(x - 3))] / [(√(x + 3) + √(x - 3)) - (√(x + 3) - √(x - 3))] = (4 + 3) / (4 - 3)\n⇒ [2√(x + 3)] / [2√(x - 3)] = 7/1 ⇒ √(x + 3) / √(x - 3) = 7.\nSquaring both sides: (x + 3) / (x - 3) = 49/1.\nCross-multiplying: x + 3 = 49(x - 3) ⇒ x + 3 = 49x - 147 ⇒ 48x = 150 ⇒ x = 150/48 = 25/8. Solution Set = {25/8}.',
        guidance: 'Standard board favorite. Keep radicals neatly separated.'
      },
      {
        id: 'm3-eq2',
        questionNumber: 'Extensive Q.2 (Ex 3.6)',
        question: 'If a/b = c/d = e/f, prove using k-method that: (a² + c² + e²) / (b² + d² + f²) = (ac + ce + ea) / (bd + df + fb).',
        answerReference: 'Let a/b = c/d = e/f = k ⇒ a = bk, c = dk, e = fk.\nLHS = (b²k² + d²k² + f²k²) / (b² + d² + f²) = k²(b² + d² + f²) / (b² + d² + f²) = k².\nRHS = (bk·dk + dk·fk + fk·bk) / (bd + df + fb) = k²(bd + df + fb) / (bd + df + fb) = k².\nSince LHS = RHS = k², identity is proved.',
        guidance: 'State clearly: let each ratio = k.'
      }
    ],
    numericals: [
      {
        id: 'm3-num1',
        questionNumber: 'Solved Problem 1 (Ex 3.1 Q.4)',
        problem: 'Find the value of p if the ratios 2p + 5 : 3p + 4 and 3 : 4 are equal.',
        givenData: ['(2p + 5) / (3p + 4) = 3 / 4'],
        solutionSteps: [
          'Cross-multiply: 4(2p + 5) = 3(3p + 4)',
          '8p + 20 = 9p + 12',
          '20 - 12 = 9p - 8p',
          '8 = p ⇒ p = 8'
        ],
        result: 'p = 8'
      }
    ],
    quizzes: [
      {
        id: 'm3-q1',
        questionNumber: 1,
        question: 'In a ratio a : b, the first term a is called:',
        options: [
          { key: 'a', text: 'Antecedent' },
          { key: 'b', text: 'Consequent' },
          { key: 'c', text: 'Extremes' },
          { key: 'd', text: 'Means' }
        ],
        correctAnswer: 'a',
        explanation: 'In a : b, a is antecedent and b is consequent.'
      },
      {
        id: 'm3-q2',
        questionNumber: 2,
        question: 'In a proportion a : b :: c : d, a and d are called:',
        options: [
          { key: 'a', text: 'Means' },
          { key: 'b', text: 'Extremes' },
          { key: 'c', text: 'Third proportional' },
          { key: 'd', text: 'Fourth proportional' }
        ],
        correctAnswer: 'b',
        explanation: 'The outer terms a and d are called extremes; b and c are means.'
      },
      {
        id: 'm3-q3',
        questionNumber: 3,
        question: 'If u ∝ v, then u = :',
        options: [
          { key: 'a', text: 'v / k' },
          { key: 'b', text: 'k / v' },
          { key: 'c', text: 'kv' },
          { key: 'd', text: 'k + v' }
        ],
        correctAnswer: 'c',
        explanation: 'Direct variation constant k gives u = kv.'
      },
      {
        id: 'm3-q4',
        questionNumber: 4,
        question: 'The mean proportional of 4 and 9 is:',
        options: [
          { key: 'a', text: '±6' },
          { key: 'b', text: '±36' },
          { key: 'c', text: '13' },
          { key: 'd', text: '±5' }
        ],
        correctAnswer: 'a',
        explanation: 'x² = 4 × 9 = 36 ⇒ x = ±6.'
      },
      {
        id: 'm3-q5',
        questionNumber: 5,
        question: 'If a/b = c/d, then (a + b)/b = (c + d)/d is called theorem of:',
        options: [
          { key: 'a', text: 'Invertendo' },
          { key: 'b', text: 'Alternando' },
          { key: 'c', text: 'Componendo' },
          { key: 'd', text: 'Dividendo' }
        ],
        correctAnswer: 'c',
        explanation: 'Adding the denominator to numerator is Componendo theorem.'
      }
    ]
  },
  {
    id: 'math-u4',
    number: 4,
    title: 'Partial Fractions',
    urduTitle: 'جزوی کسریں',
    description: 'Proper and improper rational fractions, resolution into partial fractions with non-repeated linear factors, repeated linear factors, and irreducible quadratic factors.',
    summary: 'A fraction P(x)/Q(x) where Q(x) ≠ 0 is called a rational fraction. It is a proper fraction if degree of P(x) < degree of Q(x); it is an improper fraction if degree of P(x) ≥ degree of Q(x). Improper fractions must first be converted into polynomial + proper fraction by long division before decomposing into partial fractions. Case 1: non-repeated linear factors Q(x) = (x - a)(x - b). Case 2: repeated linear factors (x - a)². Case 3: non-repeated irreducible quadratic factor (ax² + bx + c).',
    shortQuestions: [
      {
        id: 'm4-sq1',
        questionNumber: 'Q.1',
        question: 'Define a proper rational fraction and give an example.',
        answer: 'A rational fraction N(x) / D(x), with D(x) ≠ 0, is called a proper fraction if the degree of the numerator polynomial N(x) is strictly less than the degree of the denominator polynomial D(x). Example: 2 / (x² + 1) or (3x - 1) / (x² - 4).'
      },
      {
        id: 'm4-sq2',
        questionNumber: 'Q.2',
        question: 'Define an improper fraction and explain how it is decomposed.',
        answer: 'A rational fraction N(x) / D(x) is improper if the degree of N(x) is greater than or equal to the degree of D(x). Example: (x² + 1) / (x + 2). It must first be divided using polynomial long division into a quotient polynomial plus a proper fraction.'
      },
      {
        id: 'm4-sq3',
        questionNumber: 'Q.3',
        question: 'Write the identity form for decomposing 1 / [(x - 1)(x + 2)] into partial fractions.',
        answer: 'Since the denominator consists of non-repeated linear factors, the form of partial fractions is: 1 / [(x - 1)(x + 2)] = A / (x - 1) + B / (x + 2), where A and B are constants to be determined.'
      },
      {
        id: 'm4-sq4',
        questionNumber: 'Q.4',
        question: 'Write the partial fraction form for (x + 1) / [(x - 1)²(x + 2)].',
        answer: 'Here (x - 1) is a repeated linear factor. The resolution is: (x + 1) / [(x - 1)²(x + 2)] = A / (x - 1) + B / (x - 1)² + C / (x + 2).'
      },
      {
        id: 'm4-sq5',
        questionNumber: 'Q.5',
        question: 'Write the partial fraction form for 1 / [(x - 1)(x² + 1)].',
        answer: 'Here (x² + 1) is an irreducible quadratic factor. The form is: 1 / [(x - 1)(x² + 1)] = A / (x - 1) + (Bx + C) / (x² + 1).'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm4-eq1',
        questionNumber: 'Extensive Q.1 (Ex 4.1)',
        question: 'Resolve into partial fractions: (7x - 9) / [(x + 1)(x - 3)].',
        answerReference: 'Let (7x - 9) / [(x + 1)(x - 3)] = A / (x + 1) + B / (x - 3)  --- (1)\nMultiplying both sides by (x + 1)(x - 3):\n7x - 9 = A(x - 3) + B(x + 1)  --- (2)\nPut x + 1 = 0 ⇒ x = -1 in (2):\n7(-1) - 9 = A(-1 - 3) + B(0) ⇒ -16 = -4A ⇒ A = 4.\nPut x - 3 = 0 ⇒ x = 3 in (2):\n7(3) - 9 = A(0) + B(3 + 1) ⇒ 21 - 9 = 4B ⇒ 12 = 4B ⇒ B = 3.\nSubstituting A and B back into (1):\n(7x - 9) / [(x + 1)(x - 3)] = 4 / (x + 1) + 3 / (x - 3).',
        guidance: 'A foundational board exam question. Ensure neat substitution steps.'
      },
      {
        id: 'm4-eq2',
        questionNumber: 'Extensive Q.2 (Ex 4.2)',
        question: 'Resolve into partial fractions: 1 / [(x - 1)²(x - 2)].',
        answerReference: 'Let 1 / [(x - 1)²(x - 2)] = A / (x - 1) + B / (x - 1)² + C / (x - 2)  --- (1)\nMultiply by (x - 1)²(x - 2):\n1 = A(x - 1)(x - 2) + B(x - 2) + C(x - 1)²  --- (2)\nPut x = 1: 1 = B(1 - 2) ⇒ 1 = -B ⇒ B = -1.\nPut x = 2: 1 = C(2 - 1)² ⇒ C = 1.\nCompare coefficients of x² in (2): 0 = A + C ⇒ A = -C = -1.\nResult: -1 / (x - 1) - 1 / (x - 1)² + 1 / (x - 2).',
        guidance: 'Compare coefficients of highest powers to find the remaining constant.'
      }
    ],
    quizzes: [
      {
        id: 'm4-q1',
        questionNumber: 1,
        question: 'A fraction in which degree of numerator is less than degree of denominator is called:',
        options: [
          { key: 'a', text: 'Proper fraction' },
          { key: 'b', text: 'Improper fraction' },
          { key: 'c', text: 'Identity' },
          { key: 'd', text: 'Equation' }
        ],
        correctAnswer: 'a',
        explanation: 'When degree(N) < degree(D), the fraction is proper.'
      },
      {
        id: 'm4-q2',
        questionNumber: 2,
        question: 'The fraction (x² + 1) / (x + 1) is a/an:',
        options: [
          { key: 'a', text: 'Proper fraction' },
          { key: 'b', text: 'Improper fraction' },
          { key: 'c', text: 'Constant fraction' },
          { key: 'd', text: 'Irrational fraction' }
        ],
        correctAnswer: 'b',
        explanation: 'Degree of numerator (2) > degree of denominator (1), so it is improper.'
      },
      {
        id: 'm4-q3',
        questionNumber: 3,
        question: 'Partial fractions of x / [(x - a)(x - b)] are of the form:',
        options: [
          { key: 'a', text: 'A/(x - a) + B/(x - b)' },
          { key: 'b', text: 'Ax/(x - a) + B/(x - b)' },
          { key: 'c', text: 'A/(x - a)² + B/(x - b)' },
          { key: 'd', text: '(Ax + B)/[(x - a)(x - b)]' }
        ],
        correctAnswer: 'a',
        explanation: 'Non-repeated linear factors have single constants in numerators.'
      },
      {
        id: 'm4-q4',
        questionNumber: 4,
        question: '(x + 3)² = x² + 6x + 9 is an example of an:',
        options: [
          { key: 'a', text: 'Conditional equation' },
          { key: 'b', text: 'Identity' },
          { key: 'c', text: 'Inconsistent equation' },
          { key: 'd', text: 'Improper fraction' }
        ],
        correctAnswer: 'b',
        explanation: 'An equality satisfied for all values of x is called an identity.'
      }
    ]
  }
];
