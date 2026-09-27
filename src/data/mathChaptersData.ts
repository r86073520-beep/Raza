import { Chapter } from '../types/book';

export const MATH_CHAPTERS_DATA: Chapter[] = [
  {
    id: 'math-u1',
    number: 1,
    title: 'Quadratic Equations',
    urduTitle: 'دو درجی مساواتیں',
    description: 'Standard form ax² + bx + c = 0, solution by factorization, completing the square, quadratic formula, reciprocal, exponential and radical equations.',
    summary: 'A quadratic equation in one variable x is an equation of the second degree: ax² + bx + c = 0, where a ≠ 0. If b = 0, it becomes a pure quadratic equation ax² + c = 0. Quadratic equations can be solved by factorization, completing the square, or by applying the quadratic formula: x = (-b ± √(b² - 4ac)) / (2a). Equations reducible to quadratic form include reciprocal equations, exponential equations, and radical equations.',
    shortQuestions: [
      {
        id: 'm1-sq1',
        questionNumber: 'Q.1',
        question: 'Write the standard form of a quadratic equation and give an example.',
        answer: 'An equation containing the square of the unknown quantity, but no higher power, is called a quadratic equation. The standard form is: ax² + bx + c = 0, where a, b, c are real numbers and a ≠ 0. Here, a is the coefficient of x², b is the coefficient of x, and c is the constant term. Example: 3x² - 5x + 2 = 0.'
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
        answer: 'Given equation: x² - x - 20 = 0. Find two numbers whose product is -20 and sum is -1: these are -5 and +4. Splitting the middle term: x² - 5x + 4x - 20 = 0 ⇒ x(x - 5) + 4(x - 5) = 0 ⇒ (x - 5)(x + 4) = 0. Either x - 5 = 0 ⇒ x = 5, or x + 4 = 0 ⇒ x = -4. Hence, Solution Set = {-4, 5}.',
        mathSolution: {
          given: 'x² - x - 20 = 0',
          toFind: 'Solve for x by Factorization method',
          formula: 'Splitting middle term: product = -20, sum = -1 (-5 and +4)',
          steps: [
            'Given quadratic equation: x² - x - 20 = 0',
            'Split the linear middle term: x² - 5x + 4x - 20 = 0',
            'Take common factors from pairs: x(x - 5) + 4(x - 5) = 0',
            'Factor out common binomial: (x - 5)(x + 4) = 0',
            'Set each linear factor to zero: Either (x - 5) = 0 ⟹ x = 5',
            'Or (x + 4) = 0 ⟹ x = -4'
          ],
          solutionSet: '{ -4, 5 }'
        }
      },
      {
        id: 'm1-sq4',
        questionNumber: 'Q.4',
        question: 'State the Quadratic Formula used to solve ax² + bx + c = 0.',
        answer: 'The quadratic formula is derived from the standard quadratic equation ax² + bx + c = 0 by completing the square method. It is expressed as: x = (-b ± √(b² - 4ac)) / (2a), where a ≠ 0. The expression (b² - 4ac) under the radical sign is called the discriminant.'
      },
      {
        id: 'm1-sq5',
        questionNumber: 'Q.5',
        question: 'Solve using quadratic formula: 2x² + 5x - 3 = 0.',
        answer: 'Comparing with ax² + bx + c = 0, we have a = 2, b = 5, c = -3. Applying quadratic formula: x = (-b ± √(b² - 4ac)) / (2a) = (-(5) ± √((5)² - 4(2)(-3))) / (2 × 2) = (-5 ± √(25 + 24)) / 4 = (-5 ± √49) / 4 = (-5 ± 7) / 4. Thus, x = (-5 + 7)/4 = 2/4 = 1/2 or x = (-5 - 7)/4 = -12/4 = -3. Solution Set = {-3, 1/2}.',
        mathSolution: {
          given: '2x² + 5x - 3 = 0',
          toFind: 'Find roots using Quadratic Formula',
          formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
          steps: [
            'Compare with standard form ax² + bx + c = 0: a = 2, b = 5, c = -3',
            'Substitute into formula: x = (-(5) ± √((5)² - 4(2)(-3))) / (2 × 2)',
            'Simplify under radical: x = (-5 ± √(25 + 24)) / 4 = (-5 ± √49) / 4',
            'Take square root: x = (-5 ± 7) / 4',
            'First root: x = (-5 + 7) / 4 = 2/4 = 1/2',
            'Second root: x = (-5 - 7) / 4 = -12/4 = -3'
          ],
          solutionSet: '{ -3, 1/2 }'
        }
      },
      {
        id: 'm1-sq6',
        questionNumber: 'Q.6',
        question: 'Define a reciprocal equation and write an example.',
        answer: 'An equation is said to be a reciprocal equation if it remains unchanged when x is replaced by 1/x. In a reciprocal equation, the coefficients equidistant from the beginning and end are equal in magnitude. Example: 2x⁴ - 5x³ + 6x² - 5x + 2 = 0. Dividing both sides by x² reduces it to quadratic form.'
      },
      {
        id: 'm1-sq7',
        questionNumber: 'Q.7',
        question: 'What is an exponential equation? Give an example.',
        answer: 'In an exponential equation, the unknown variable occurs in the exponent (power) rather than the base. Example: 2^(2x) - 3 · 2^(x+2) + 32 = 0 or 5^(1+x) + 5^(1-x) = 26. Such equations are solved by letting 2^x = y, transforming them into standard quadratic equations.'
      },
      {
        id: 'm1-sq8',
        questionNumber: 'Q.8',
        question: 'Define a radical equation and an extraneous root.',
        answer: 'An equation involving one or more expressions of the variable under a radical sign (square root) is called a radical equation, e.g., √(x + 3) = x - 1. When squaring both sides to eliminate radicals, additional roots may be introduced that do not satisfy the original equation; such invalid solutions are called extraneous roots.'
      },
      {
        id: 'm1-sq9',
        questionNumber: 'Q.9',
        question: 'Solve by completing square: x² - 2x - 195 = 0.',
        answer: 'Step 1: Shift constant term: x² - 2x = 195. Step 2: Add [1/2 × (-2)]² = (-1)² = 1 to both sides: x² - 2x + 1 = 195 + 1 ⇒ (x - 1)² = 196. Step 3: Taking square root: x - 1 = ±√196 = ±14. Either x = 1 + 14 = 15 or x = 1 - 14 = -13. Solution Set = {-13, 15}.',
        mathSolution: {
          given: 'x² - 2x - 195 = 0',
          toFind: 'Solve by Completing the Square method',
          formula: 'Add [1/2 × coefficient of x]² = (-1)² = 1 to both sides',
          steps: [
            'Step 1: Shift constant term to RHS: x² - 2x = 195',
            'Step 2: Add 1 to both sides: x² - 2x + 1 = 195 + 1 ⟹ (x - 1)² = 196',
            'Step 3: Take square root on both sides: √(x - 1)² = ±√196 ⟹ x - 1 = ±14',
            'Step 4: First case (+): x = 1 + 14 = 15',
            'Step 5: Second case (-): x = 1 - 14 = -13'
          ],
          solutionSet: '{ -13, 15 }'
        }
      }
    ],
    extensiveQuestions: [
      {
        id: 'm1-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Derive the Quadratic Formula x = (-b ± √(b² - 4ac)) / (2a) from the standard equation ax² + bx + c = 0 using the method of completing the square.',
        answerReference: 'Standard equation: ax² + bx + c = 0 (a ≠ 0). 1. Divide by a: x² + (b/a)x + c/a = 0. 2. Shift constant: x² + (b/a)x = -c/a. 3. Add (b/2a)² to both sides: x² + 2(x)(b/2a) + (b/2a)² = (b/2a)² - c/a. 4. Simplify: (x + b/2a)² = (b² - 4ac)/(4a²). 5. Take square root on both sides: x + b/2a = ±√(b² - 4ac) / 2a. 6. Subtract b/2a: x = -b/2a ± √(b² - 4ac)/2a = (-b ± √(b² - 4ac)) / (2a). Hence derived.',
        guidance: 'Ensure all 6 algebraic steps are clearly written, especially completing the square by adding (b/2a)² to both sides.',
        mathSolution: {
          given: 'Standard Quadratic Equation: ax² + bx + c = 0 (where a ≠ 0)',
          toFind: 'Derive closed-form Quadratic Formula for x',
          formula: 'Completing Square Method: Add (b / 2a)² to both sides',
          steps: [
            'Step 1: Divide both sides by a: x² + (b/a)x + c/a = 0',
            'Step 2: Shift constant c/a to RHS: x² + (b/a)x = -c/a',
            'Step 3: Add (b / 2a)² on both sides: x² + 2(x)(b/2a) + (b/2a)² = (b/2a)² - c/a',
            'Step 4: Express LHS as perfect square: (x + b/2a)² = (b² / 4a²) - c/a',
            'Step 5: Take common denominator 4a² on RHS: (x + b/2a)² = (b² - 4ac) / (4a²)',
            'Step 6: Take square root on both sides: x + b/2a = ±√(b² - 4ac) / (2a)',
            'Step 7: Subtract (b / 2a) from both sides: x = -b/2a ± √(b² - 4ac) / (2a)'
          ],
          solutionSet: 'x = (-b ± √(b² - 4ac)) / (2a)'
        }
      },
      {
        id: 'm1-eq2',
        questionNumber: 'Extensive Q.2',
        question: 'Solve the radical equation √(3x + 7) = 2x + 3 and check for extraneous roots.',
        answerReference: 'Given √(3x + 7) = 2x + 3. Squaring both sides: 3x + 7 = (2x + 3)² ⇒ 3x + 7 = 4x² + 12x + 9. Rearranging: 4x² + 9x + 2 = 0. Factoring: 4x² + 8x + x + 2 = 0 ⇒ 4x(x + 2) + 1(x + 2) = 0 ⇒ (4x + 1)(x + 2) = 0. Roots: x = -1/4 or x = -2. Check x = -1/4: √[3(-1/4) + 7] = √[25/4] = 5/2; RHS: 2(-1/4) + 3 = -1/2 + 3 = 5/2 (True). Check x = -2: √[3(-2) + 7] = √1 = 1; RHS: 2(-2) + 3 = -1 (1 ≠ -1, False). Therefore, x = -2 is an extraneous root. Solution Set = {-1/4}.',
        guidance: 'Always check each prospective root in the original un-squared radical equation to identify extraneous roots.',
        mathSolution: {
          given: 'Radical equation: √(3x + 7) = 2x + 3',
          toFind: 'Solve for x and identify any extraneous roots',
          formula: 'Eliminate radical by squaring both sides: [√(3x + 7)]² = (2x + 3)²',
          steps: [
            'Step 1: Square both sides: 3x + 7 = 4x² + 12x + 9',
            'Step 2: Collect all terms onto RHS: 4x² + 12x - 3x + 9 - 7 = 0 ⟹ 4x² + 9x + 2 = 0',
            'Step 3: Factorize: 4x² + 8x + x + 2 = 0 ⟹ 4x(x + 2) + 1(x + 2) = 0',
            'Step 4: Factored form: (4x + 1)(x + 2) = 0 ⟹ x = -1/4 or x = -2',
            'Step 5: Check x = -1/4: LHS = √(3(-1/4) + 7) = 5/2; RHS = 2(-1/4) + 3 = 5/2 (True)',
            'Step 6: Check x = -2: LHS = √(3(-2) + 7) = 1; RHS = 2(-2) + 3 = -1 (1 ≠ -1, Extraneous Root!)'
          ],
          solutionSet: '{ -1/4 }  [Note: x = -2 is extraneous]'
        }
      }
    ],
    numericals: [
      {
        id: 'm1-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'Solve the equation 4x² - 14 = 3x by using the quadratic formula.',
        givenData: [
          'Equation: 4x² - 14 = 3x',
          'Standard form: 4x² - 3x - 14 = 0',
          'Coefficients: a = 4, b = -3, c = -14'
        ],
        solutionSteps: [
          'Calculate discriminant: b² - 4ac = (-3)² - 4(4)(-14) = 9 + 224 = 233.',
          'Apply quadratic formula: x = (-(-3) ± √233) / (2 × 4).',
          'Simplify: x = (3 ± √233) / 8.',
          'Since 233 is a prime number and not a perfect square, roots are real and irrational.'
        ],
        result: 'Solution Set = {(3 ± √233) / 8}'
      },
      {
        id: 'm1-num2',
        questionNumber: 'Solved Problem 2',
        problem: 'Solve the reciprocal equation: 2x⁴ - 5x³ + 2x² - 5x + 2 = 0.',
        givenData: [
          'Equation: 2x⁴ - 5x³ + 2x² - 5x + 2 = 0',
          'Type: Degree 4 reciprocal equation'
        ],
        solutionSteps: [
          'Divide throughout by x²: 2x² - 5x + 2 - 5/x + 2/x² = 0.',
          'Group reciprocal terms: 2(x² + 1/x²) - 5(x + 1/x) + 2 = 0.',
          'Let y = x + 1/x. Then x² + 1/x² = y² - 2.',
          'Substitute into equation: 2(y² - 2) - 5y + 2 = 0 ⇒ 2y² - 5y - 2 = 0.',
          'Solve for y: (2y + 1)(y - 2) = 0 or using formula yields y = 2 and y = -1/2.',
          'Case 1: x + 1/x = 2 ⇒ x² - 2x + 1 = 0 ⇒ (x - 1)² = 0 ⇒ x = 1, 1.',
          'Case 2: x + 1/x = -1/2 ⇒ 2x² + x + 2 = 0 ⇒ x = (-1 ± √(-15)) / 4 = (-1 ± i√15)/4.'
        ],
        result: 'Solution Set = {1, (-1 ± i√15) / 4}'
      }
    ],
    quizzes: [
      {
        id: 'm1-q1',
        questionNumber: 1,
        question: 'Standard form of a quadratic equation is:',
        options: [
          { key: 'a', text: 'bx + c = 0, b ≠ 0' },
          { key: 'b', text: 'ax² + bx + c = 0, a ≠ 0' },
          { key: 'c', text: 'ax³ + bx² + c = 0' },
          { key: 'd', text: 'ax² = 0' }
        ],
        correctAnswer: 'b',
        explanation: 'A quadratic equation in standard form is written as ax² + bx + c = 0, where a ≠ 0 and a, b, c are real numbers.'
      },
      {
        id: 'm1-q2',
        questionNumber: 2,
        question: 'The number of terms in standard quadratic equation ax² + bx + c = 0 is:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'c',
        explanation: 'Standard form has three terms: the quadratic term (ax²), linear term (bx), and constant term (c).'
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
        explanation: 'There are 3 standard algebraic methods: (1) Factorization, (2) Completing the square, and (3) Quadratic formula.'
      },
      {
        id: 'm1-q4',
        questionNumber: 4,
        question: 'The quadratic formula is:',
        options: [
          { key: 'a', text: 'x = (-b ± √(b² - 4ac)) / (2a)' },
          { key: 'b', text: 'x = (b ± √(b² - 4ac)) / (2a)' },
          { key: 'c', text: 'x = (-b ± √(b² + 4ac)) / (2a)' },
          { key: 'd', text: 'x = (-b ± √(b² - 4ac)) / (a)' }
        ],
        correctAnswer: 'a',
        explanation: 'Derived from completing square: x = (-b ± √(b² - 4ac)) / (2a).'
      },
      {
        id: 'm1-q5',
        questionNumber: 5,
        question: 'If b = 0 in ax² + bx + c = 0, then it becomes a:',
        options: [
          { key: 'a', text: 'Linear equation' },
          { key: 'b', text: 'Pure quadratic equation' },
          { key: 'c', text: 'Radical equation' },
          { key: 'd', text: 'Reciprocal equation' }
        ],
        correctAnswer: 'b',
        explanation: 'When the middle linear coefficient b = 0, ax² + c = 0 is known as a pure quadratic equation.'
      },
      {
        id: 'm1-q6',
        questionNumber: 6,
        question: 'An equation of the type 5^(1+x) + 5^(1-x) = 26 is called:',
        options: [
          { key: 'a', text: 'Reciprocal equation' },
          { key: 'b', text: 'Radical equation' },
          { key: 'c', text: 'Exponential equation' },
          { key: 'd', text: 'Quadratic equation' }
        ],
        correctAnswer: 'c',
        explanation: 'Because the unknown variable x occurs in the exponents/powers, it is an exponential equation.'
      },
      {
        id: 'm1-q7',
        questionNumber: 7,
        question: 'Solution set of equation 5x² = 30x is:',
        options: [
          { key: 'a', text: '{6}' },
          { key: 'b', text: '{0, 6}' },
          { key: 'c', text: '{-6, 6}' },
          { key: 'd', text: '{0, -6}' }
        ],
        correctAnswer: 'b',
        explanation: '5x² - 30x = 0 ⇒ 5x(x - 6) = 0. Therefore x = 0 or x = 6. Dividing by x is wrong because x can be 0.'
      },
      {
        id: 'm1-q8',
        questionNumber: 8,
        question: 'An equation which remains unchanged when x is replaced by 1/x is called:',
        options: [
          { key: 'a', text: 'Exponential equation' },
          { key: 'b', text: 'Reciprocal equation' },
          { key: 'c', text: 'Radical equation' },
          { key: 'd', text: 'Simultaneous equation' }
        ],
        correctAnswer: 'b',
        explanation: 'By definition, replacing x with 1/x leaves reciprocal equations invariant.'
      },
      {
        id: 'm1-q9',
        questionNumber: 9,
        question: 'An extraneous root of an equation is one that:',
        options: [
          { key: 'a', text: 'Satisfies the given equation' },
          { key: 'b', text: 'Does not satisfy the original equation' },
          { key: 'c', text: 'Is imaginary' },
          { key: 'd', text: 'Is zero' }
        ],
        correctAnswer: 'b',
        explanation: 'Extraneous roots arise when squaring radical equations and do not satisfy the original equation.'
      },
      {
        id: 'm1-q10',
        questionNumber: 10,
        question: 'The solution set of 4x² - 16 = 0 is:',
        options: [
          { key: 'a', text: '{±4}' },
          { key: 'b', text: '{4}' },
          { key: 'c', text: '{±2}' },
          { key: 'd', text: '{±√2}' }
        ],
        correctAnswer: 'c',
        explanation: '4x² = 16 ⇒ x² = 4 ⇒ x = ±2. Solution set = {±2}.'
      }
    ]
  },
  {
    id: 'math-u2',
    number: 2,
    title: 'Theory of Quadratic Equations',
    urduTitle: 'دو درجی مساواتوں کا نظریہ',
    description: 'Discriminant, nature of roots, cube roots of unity (1, ω, ω²), relation between roots and coefficients, formation of quadratic equations, and synthetic division.',
    summary: 'The nature of roots of ax² + bx + c = 0 depends entirely on the discriminant Disc = b² - 4ac. If Disc > 0 and a perfect square, roots are rational and unequal; if Disc > 0 not a perfect square, irrational and unequal; if Disc = 0, roots are real and equal; if Disc < 0, imaginary/complex conjugates. The three cube roots of unity are 1, ω, and ω², with properties 1 + ω + ω² = 0 and ω³ = 1. If α and β are roots, then Sum S = α + β = -b/a, Product P = αβ = c/a, and equation is x² - Sx + P = 0.',
    shortQuestions: [
      {
        id: 'm2-sq1',
        questionNumber: 'Q.1',
        question: 'Define the Discriminant of a quadratic equation ax² + bx + c = 0.',
        answer: 'The algebraic expression (b² - 4ac) is called the discriminant of the quadratic equation ax² + bx + c = 0. It is denoted by "Disc" or "Δ". The value and sign of the discriminant determine whether roots are real, equal, rational, irrational, or imaginary without actually solving the equation.'
      },
      {
        id: 'm2-sq2',
        questionNumber: 'Q.2',
        question: 'Find the discriminant of 2x² - 7x + 3 = 0 and state the nature of its roots.',
        answer: 'Here a = 2, b = -7, c = 3. Disc = b² - 4ac = (-7)² - 4(2)(3) = 49 - 24 = 25. Since Disc = 25 > 0 and 25 is a perfect square (5²), the roots are real, rational, and unequal.',
        mathSolution: {
          given: '2x² - 7x + 3 = 0',
          toFind: 'Calculate Discriminant (Δ) and determine nature of roots',
          formula: 'Δ = b² - 4ac',
          steps: [
            'Identify coefficients: a = 2, b = -7, c = 3',
            'Substitute into formula: Δ = (-7)² - 4(2)(3)',
            'Calculate powers and product: Δ = 49 - 24 = 25',
            'Analysis: Δ = 25 > 0 and 25 is a perfect square (5²)',
            'Conclusion: The roots are real, rational, and unequal'
          ],
          solutionSet: 'Discriminant = 25 (Roots are Real, Rational & Unequal)'
        }
      },
      {
        id: 'm2-sq3',
        questionNumber: 'Q.3',
        question: 'For what value of k are the roots of kx² + 4x + 3 = 0 equal?',
        answer: 'For roots to be equal, the discriminant must be zero: b² - 4ac = 0. Here a = k, b = 4, c = 3. So (4)² - 4(k)(3) = 0 ⇒ 16 - 12k = 0 ⇒ 12k = 16 ⇒ k = 16/12 = 4/3.',
        mathSolution: {
          given: 'kx² + 4x + 3 = 0 with equal roots',
          toFind: 'Value of constant k',
          formula: 'Condition for equal roots: Discriminant Δ = b² - 4ac = 0',
          steps: [
            'Coefficients: a = k, b = 4, c = 3',
            'Apply condition Δ = 0: (4)² - 4(k)(3) = 0',
            'Simplify algebraic equation: 16 - 12k = 0',
            'Shift constant: 12k = 16',
            'Divide by 12: k = 16 / 12 = 4 / 3'
          ],
          solutionSet: 'k = 4/3'
        }
      },
      {
        id: 'm2-sq4',
        questionNumber: 'Q.4',
        question: 'Find the three cube roots of unity.',
        answer: 'Let x = (1)^(1/3) ⇒ x³ = 1 ⇒ x³ - 1 = 0 ⇒ (x - 1)(x² + x + 1) = 0. Either x - 1 = 0 ⇒ x = 1, or x² + x + 1 = 0 ⇒ x = (-1 ± √(1 - 4)) / 2 = (-1 ± i√3) / 2. Letting ω = (-1 + i√3)/2, then ω² = (-1 - i√3)/2. Thus, the three cube roots of unity are 1, ω, and ω².'
      },
      {
        id: 'm2-sq5',
        questionNumber: 'Q.5',
        question: 'Prove that the sum of all cube roots of unity is zero (1 + ω + ω² = 0).',
        answer: '1 + ω + ω² = 1 + [(-1 + i√3)/2] + [(-1 - i√3)/2] = [2 + (-1 + i√3) + (-1 - i√3)] / 2 = [2 - 2 + (i√3 - i√3)] / 2 = 0/2 = 0. Hence, 1 + ω + ω² = 0.'
      },
      {
        id: 'm2-sq6',
        questionNumber: 'Q.6',
        question: 'Evaluate: (1 - ω - ω²)⁷.',
        answer: 'We know 1 + ω + ω² = 0 ⇒ -(ω + ω²) = 1. Therefore, (1 - ω - ω²)⁷ = [1 - (ω + ω²)]⁷ = [1 - (-1)]⁷ = (1 + 1)⁷ = 2⁷ = 128.',
        mathSolution: {
          given: 'Expression: (1 - ω - ω²)⁷',
          toFind: 'Numerical value using cube root of unity properties',
          formula: 'Sum of cube roots: 1 + ω + ω² = 0 ⟹ -(ω + ω²) = 1',
          steps: [
            'Group the omega terms: (1 - ω - ω²)⁷ = [1 - (ω + ω²)]⁷',
            'Substitute identity (ω + ω² = -1): [1 - (-1)]⁷',
            'Simplify brackets: (1 + 1)⁷ = 2⁷',
            'Compute power: 2⁷ = 128'
          ],
          solutionSet: '128'
        }
      },
      {
        id: 'm2-sq7',
        questionNumber: 'Q.7',
        question: 'Without solving, find the sum and product of the roots of 3x² + 7x - 11 = 0.',
        answer: 'Here a = 3, b = 7, c = -11. If α, β are roots: Sum of roots S = α + β = -b/a = -7/3. Product of roots P = αβ = c/a = -11/3.'
      },
      {
        id: 'm2-sq8',
        questionNumber: 'Q.8',
        question: 'Form a quadratic equation whose roots are 3 and -4.',
        answer: 'Given roots are α = 3 and β = -4. Sum S = α + β = 3 + (-4) = -1. Product P = αβ = 3 × (-4) = -12. The equation is given by: x² - Sx + P = 0 ⇒ x² - (-1)x + (-12) = 0 ⇒ x² + x - 12 = 0.'
      },
      {
        id: 'm2-sq9',
        questionNumber: 'Q.9',
        question: 'What is synthetic division? Use it to find quotient and remainder when x² + 7x - 1 is divided by x + 1.',
        answer: 'Synthetic division is a shorthand method of polynomial division, especially when dividing by a linear factor (x - a). For divisor x + 1 = x - (-1), a = -1. Writing coefficients: 1, 7, -1. Bring down 1; multiply by -1 to get -1; add to 7 to get 6; multiply 6 by -1 to get -6; add to -1 to get remainder -7. Quotient Q(x) = x + 6 and Remainder R = -7.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm2-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Prove that each of the two complex cube roots of unity is the square of the other.',
        answerReference: 'Let ω = (-1 + i√3)/2. Squaring ω: ω² = [(-1 + i√3)/2]² = [(-1)² + (i√3)² + 2(-1)(i√3)] / 4 = [1 + 3i² - 2i√3] / 4. Since i² = -1, this becomes [1 - 3 - 2i√3] / 4 = [-2 - 2i√3] / 4 = 2[-1 - i√3] / 4 = (-1 - i√3)/2, which is the other complex root! Now squaring this root: [(-1 - i√3)/2]² = [1 + 3i² + 2i√3] / 4 = [1 - 3 + 2i√3] / 4 = [-2 + 2i√3] / 4 = (-1 + i√3)/2 = ω. Thus, each complex cube root is the square of the other.',
        guidance: 'Use standard binomial expansion (a + b)² = a² + 2ab + b² and replace i² = -1 carefully.'
      },
      {
        id: 'm2-eq2',
        questionNumber: 'Extensive Q.2',
        question: 'If α, β are the roots of the equation 2x² + 3x + 1 = 0, find a quadratic equation whose roots are 2α + 1 and 2β + 1.',
        answerReference: 'From 2x² + 3x + 1 = 0, a = 2, b = 3, c = 1. Therefore: α + β = -3/2 and αβ = 1/2. Let new roots be α\' = 2α + 1 and β\' = 2β + 1. New Sum S\' = α\' + β\' = (2α + 1) + (2β + 1) = 2(α + β) + 2 = 2(-3/2) + 2 = -3 + 2 = -1. New Product P\' = α\'β\' = (2α + 1)(2β + 1) = 4αβ + 2(α + β) + 1 = 4(1/2) + 2(-3/2) + 1 = 2 - 3 + 1 = 0. Required equation: x² - S\'x + P\' = 0 ⇒ x² - (-1)x + 0 = 0 ⇒ x² + x = 0.',
        guidance: 'Substitute known values of sum and product into the expanded form of the new sum and product.'
      }
    ],
    numericals: [
      {
        id: 'm2-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'Evaluate the expression: ω²⁸ + ω²⁹ + 1.',
        givenData: [
          'Expression: ω²⁸ + ω²⁹ + 1',
          'Key identities: ω³ = 1 and 1 + ω + ω² = 0'
        ],
        solutionSteps: [
          'Rewrite powers of ω as multiples of 3: 28 = 3(9) + 1 and 29 = 3(9) + 2.',
          'ω²⁸ = (ω³)⁹ · ω = (1)⁹ · ω = ω.',
          'ω²⁹ = (ω³)⁹ · ω² = (1)⁹ · ω² = ω².',
          'Substitute back: ω²⁸ + ω²⁹ + 1 = ω + ω² + 1 = 1 + ω + ω² = 0.'
        ],
        result: 'Evaluated Result = 0'
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
          { key: 'c', text: '-b² - 4ac' },
          { key: 'd', text: '√(b² - 4ac)' }
        ],
        correctAnswer: 'a',
        explanation: 'The discriminant formula is Δ = b² - 4ac.'
      },
      {
        id: 'm2-q2',
        questionNumber: 2,
        question: 'If b² - 4ac < 0, then the roots of ax² + bx + c = 0 are:',
        options: [
          { key: 'a', text: 'Rational and equal' },
          { key: 'b', text: 'Real and unequal' },
          { key: 'c', text: 'Imaginary (complex)' },
          { key: 'd', text: 'Irrational' }
        ],
        correctAnswer: 'c',
        explanation: 'A negative number under the radical sign yields imaginary complex conjugate roots.'
      },
      {
        id: 'm2-q3',
        questionNumber: 3,
        question: 'If b² - 4ac = 0, then the roots are:',
        options: [
          { key: 'a', text: 'Real and equal' },
          { key: 'b', text: 'Real and unequal' },
          { key: 'c', text: 'Imaginary' },
          { key: 'd', text: 'Undefined' }
        ],
        correctAnswer: 'a',
        explanation: 'When discriminant is zero, x = -b/(2a), giving two identical real roots.'
      },
      {
        id: 'm2-q4',
        questionNumber: 4,
        question: 'The product of complex cube roots of unity is:',
        options: [
          { key: 'a', text: '0' },
          { key: 'b', text: '1' },
          { key: 'c', text: '-1' },
          { key: 'd', text: 'ω' }
        ],
        correctAnswer: 'b',
        explanation: '1 · ω · ω² = ω³ = 1.'
      },
      {
        id: 'm2-q5',
        questionNumber: 5,
        question: '1 + ω + ω² is equal to:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '-1' },
          { key: 'c', text: '0' },
          { key: 'd', text: '3' }
        ],
        correctAnswer: 'c',
        explanation: 'The sum of the three cube roots of unity is always 0.'
      },
      {
        id: 'm2-q6',
        questionNumber: 6,
        question: 'If α, β are roots of 7x² - 5x + 3 = 0, then sum of roots (α + β) is:',
        options: [
          { key: 'a', text: '5/7' },
          { key: 'b', text: '-5/7' },
          { key: 'c', text: '3/7' },
          { key: 'd', text: '-3/7' }
        ],
        correctAnswer: 'a',
        explanation: 'Sum = -b/a = -(-5)/7 = 5/7.'
      },
      {
        id: 'm2-q7',
        questionNumber: 7,
        question: 'Product of roots of ax² + bx + c = 0 is:',
        options: [
          { key: 'a', text: '-c/a' },
          { key: 'b', text: 'c/a' },
          { key: 'd', text: 'a/c' },
          { key: 'c', text: '-b/a' }
        ],
        correctAnswer: 'b',
        explanation: 'Product of roots αβ = c/a.'
      },
      {
        id: 'm2-q8',
        questionNumber: 8,
        question: 'If roots of a quadratic equation are 2 and 3, the equation is:',
        options: [
          { key: 'a', text: 'x² - 5x + 6 = 0' },
          { key: 'b', text: 'x² + 5x + 6 = 0' },
          { key: 'c', text: 'x² - 5x - 6 = 0' },
          { key: 'd', text: 'x² + 5x - 6 = 0' }
        ],
        correctAnswer: 'a',
        explanation: 'S = 2 + 3 = 5, P = 2 × 3 = 6. Equation: x² - Sx + P = 0 ⇒ x² - 5x + 6 = 0.'
      },
      {
        id: 'm2-q9',
        questionNumber: 9,
        question: 'ω⁴ is equal to:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: 'ω' },
          { key: 'c', text: 'ω²' },
          { key: 'd', text: '0' }
        ],
        correctAnswer: 'b',
        explanation: 'ω⁴ = ω³ · ω = 1 · ω = ω.'
      },
      {
        id: 'm2-q10',
        questionNumber: 10,
        question: 'Two square roots of unity are:',
        options: [
          { key: 'a', text: '1, -1' },
          { key: 'b', text: '1, ω' },
          { key: 'c', text: '1, -i' },
          { key: 'd', text: 'ω, ω²' }
        ],
        correctAnswer: 'a',
        explanation: 'x² = 1 ⇒ x = ±1.'
      }
    ]
  },
  {
    id: 'math-u3',
    number: 3,
    title: 'Variations',
    urduTitle: 'تغیرات (ویری ایشنز)',
    description: 'Ratio, proportion, direct variation, inverse variation, joint variation, theorems of proportion (Invertendo, Alternando, Componendo, Dividendo), and K-Method.',
    summary: 'A ratio is a comparison between two quantities of the same kind. A proportion is an equality of two ratios: a:b = c:d, where ad = bc (Product of extremes = Product of means). In direct variation, y ∝ x implies y = kx; in inverse variation, y ∝ 1/x implies y = k/x. Important theorems on proportions include Invertendo (b/a = d/c), Alternando (a/c = b/d), Componendo ((a+b)/b = (c+d)/d), Dividendo ((a-b)/b = (c-d)/d), and Componendo-Dividendo ((a+b)/(a-b) = (c+d)/(c-d)).',
    shortQuestions: [
      {
        id: 'm3-sq1',
        questionNumber: 'Q.1',
        question: 'Define Ratio and Proportion with notation.',
        answer: 'A ratio is a relation between two quantities of the same kind measured in the same units, written as a:b or a/b (where b ≠ 0). An equality of two ratios is called a proportion, written as a:b :: c:d or a/b = c/d. The terms a and d are called extremes, while b and c are called means. Property: Product of extremes = Product of means (ad = bc).'
      },
      {
        id: 'm3-sq2',
        questionNumber: 'Q.2',
        question: 'Find the fourth proportional to 5, 8, 15.',
        answer: 'Let x be the fourth proportional. Then 5:8 :: 15:x. Using product of extremes = product of means: 5 × x = 8 × 15 ⇒ 5x = 120 ⇒ x = 120/5 = 24.',
        mathSolution: {
          given: 'Three quantities: 5, 8, 15',
          toFind: 'Fourth proportional (x)',
          formula: 'Product of Extremes = Product of Means (ad = bc)',
          steps: [
            'Set up proportion: 5 : 8 :: 15 : x',
            'Apply property: 5 × x = 8 × 15',
            'Multiply right side: 5x = 120',
            'Solve for x: x = 120 / 5 = 24'
          ],
          solutionSet: 'x = 24'
        }
      },
      {
        id: 'm3-sq3',
        questionNumber: 'Q.3',
        question: 'Find the mean proportional between 9 and 25.',
        answer: 'Let m be the mean proportional. Then 9:m :: m:25. By proportion property: m × m = 9 × 25 ⇒ m² = 225 ⇒ m = ±√225 = ±15.',
        mathSolution: {
          given: 'Two quantities: 9 and 25',
          toFind: 'Mean proportional (m)',
          formula: 'Continued proportion: 9 : m :: m : 25 ⟹ m² = ac',
          steps: [
            'Set up continued proportion: 9 : m :: m : 25',
            'Product of extremes = product of means: m × m = 9 × 25',
            'Multiply terms: m² = 225',
            'Take square root on both sides: m = ±√225 = ±15'
          ],
          solutionSet: 'm = ±15'
        }
      },
      {
        id: 'm3-sq4',
        questionNumber: 'Q.4',
        question: 'Define direct variation with a daily life example.',
        answer: 'If two quantities are related such that an increase (or decrease) in one quantity produces a proportionate increase (or decrease) in the other, they are in direct variation. Written as y ∝ x ⇒ y = kx, where k is a constant of variation. Example: Total cost varies directly with the number of books purchased.'
      },
      {
        id: 'm3-sq5',
        questionNumber: 'Q.5',
        question: 'If y varies directly as x, and y = 8 when x = 2, find y when x = 5.',
        answer: 'Given y ∝ x ⇒ y = kx. Substituting values: 8 = k(2) ⇒ k = 8/2 = 4. Now for x = 5: y = 4(5) = 20.',
        mathSolution: {
          given: 'y varies directly as x (y ∝ x); y = 8 when x = 2',
          toFind: 'Value of y when x = 5',
          formula: 'Direct variation equation: y = kx',
          steps: [
            'Write variation equation: y = kx',
            'Substitute known values: 8 = k(2) ⟹ k = 8 / 2 = 4',
            'Equation connecting variables: y = 4x',
            'Substitute x = 5: y = 4(5) = 20'
          ],
          solutionSet: 'y = 20'
        }
      },
      {
        id: 'm3-sq6',
        questionNumber: 'Q.6',
        question: 'Define inverse variation and give its mathematical equation.',
        answer: 'If two quantities are related such that an increase in one produces a proportionate decrease in the other, it is called inverse variation. Written as y ∝ 1/x ⇒ y = k/x or xy = k, where k ≠ 0 is constant. Example: Speed and time taken to cover a fixed distance.'
      },
      {
        id: 'm3-sq7',
        questionNumber: 'Q.7',
        question: 'State the Componendo-Dividendo Theorem.',
        answer: 'If a:b = c:d (a/b = c/d), then (a + b) : (a - b) = (c + d) : (c - d), or (a + b)/(a - b) = (c + d)/(c - d), where a - b ≠ 0 and c - d ≠ 0. This theorem is extensively used to simplify complex rational and radical fractional equations.'
      },
      {
        id: 'm3-sq8',
        questionNumber: 'Q.8',
        question: 'State Alternando and Invertendo theorems of proportion.',
        answer: '1. Invertendo Theorem: If a/b = c/d, then b/a = d/c. 2. Alternando Theorem: If a/b = c/d, then a/c = b/d.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm3-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Solve using Componendo-Dividendo theorem: (√(x + 3) + √(x - 3)) / (√(x + 3) - √(x - 3)) = 4/3.',
        answerReference: 'Applying Componendo-Dividendo: [(√(x+3) + √(x-3)) + (√(x+3) - √(x-3))] / [(√(x+3) + √(x-3)) - (√(x+3) - √(x-3))] = (4 + 3) / (4 - 3). Simplifying numerator and denominator: 2√(x + 3) / 2√(x - 3) = 7/1 ⇒ √(x + 3) / √(x - 3) = 7. Squaring both sides: (x + 3) / (x - 3) = 49/1. Cross-multiplying: x + 3 = 49(x - 3) ⇒ x + 3 = 49x - 147 ⇒ 48x = 150 ⇒ x = 150/48 = 25/8. Solution Set = {25/8}.',
        guidance: 'Carefully group identical radical terms so that one radical cancels in numerator and the other in denominator.'
      },
      {
        id: 'm3-eq2',
        questionNumber: 'Extensive Q.2',
        question: 'If a:b = c:d (a, b, c, d ≠ 0), then prove using k-method that (4a + 5b) / (4a - 5b) = (4c + 5d) / (4c - 5d).',
        answerReference: 'Let a/b = c/d = k. Then a = bk and c = dk. LHS = (4a + 5b) / (4a - 5b) = (4bk + 5b) / (4bk - 5b) = b(4k + 5) / [b(4k - 5)] = (4k + 5) / (4k - 5). RHS = (4c + 5d) / (4c - 5d) = (4dk + 5d) / (4dk - 5d) = d(4k + 5) / [d(4k - 5)] = (4k + 5) / (4k - 5). Since LHS = RHS = (4k + 5)/(4k - 5), the theorem is proved.',
        guidance: 'Set common ratio equal to k and substitute a = bk and c = dk into LHS and RHS independently.'
      }
    ],
    numericals: [
      {
        id: 'm3-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'If y varies inversely as x², and y = 16 when x = 5, find x when y = 100.',
        givenData: [
          'Relation: y ∝ 1/x² ⇒ y = k / x²',
          'Initial values: y = 16, x = 5',
          'Target: find x when y = 100'
        ],
        solutionSteps: [
          'Find constant k: 16 = k / (5)² ⇒ 16 = k / 25 ⇒ k = 16 × 25 = 400.',
          'Equation connecting variables: y = 400 / x².',
          'Substitute y = 100: 100 = 400 / x² ⇒ 100x² = 400 ⇒ x² = 400 / 100 = 4.',
          'Take square root: x = ±√4 = ±2.'
        ],
        result: 'Value of x = ±2'
      }
    ],
    quizzes: [
      {
        id: 'm3-q1',
        questionNumber: 1,
        question: 'In a ratio a:b, the first term "a" is called:',
        options: [
          { key: 'a', text: 'Antecedent' },
          { key: 'b', text: 'Consequent' },
          { key: 'c', text: 'Mean' },
          { key: 'd', text: 'Extreme' }
        ],
        correctAnswer: 'a',
        explanation: 'In the ratio a:b, a is called the antecedent and b is called the consequent.'
      },
      {
        id: 'm3-q2',
        questionNumber: 2,
        question: 'In proportion a:b :: c:d, b and c are called:',
        options: [
          { key: 'a', text: 'Extremes' },
          { key: 'b', text: 'Means' },
          { key: 'c', text: 'Antecedents' },
          { key: 'd', text: 'Consequents' }
        ],
        correctAnswer: 'b',
        explanation: 'The inner terms b and c are means; the outer terms a and d are extremes.'
      },
      {
        id: 'm3-q3',
        questionNumber: 3,
        question: 'If a/b = c/d, then a/c = b/d is known as:',
        options: [
          { key: 'a', text: 'Invertendo theorem' },
          { key: 'b', text: 'Alternando theorem' },
          { key: 'c', text: 'Componendo theorem' },
          { key: 'd', text: 'Dividendo theorem' }
        ],
        correctAnswer: 'b',
        explanation: 'Interchanging the means produces the Alternando property.'
      },
      {
        id: 'm3-q4',
        questionNumber: 4,
        question: 'If a/b = c/d, then (a+b)/b = (c+d)/d is called:',
        options: [
          { key: 'a', text: 'Invertendo' },
          { key: 'b', text: 'Alternando' },
          { key: 'c', text: 'Componendo theorem' },
          { key: 'd', text: 'Dividendo' }
        ],
        correctAnswer: 'c',
        explanation: 'Adding denominator to numerator is the Componendo property.'
      },
      {
        id: 'm3-q5',
        questionNumber: 5,
        question: 'If y ∝ 1/x, then:',
        options: [
          { key: 'a', text: 'y = kx' },
          { key: 'b', text: 'xy = k' },
          { key: 'c', text: 'x/y = k' },
          { key: 'd', text: 'y + x = k' }
        ],
        correctAnswer: 'b',
        explanation: 'y = k/x ⇒ xy = k.'
      },
      {
        id: 'm3-q6',
        questionNumber: 6,
        question: 'The third proportional of x and y is:',
        options: [
          { key: 'a', text: 'xy' },
          { key: 'b', text: 'y²/x' },
          { key: 'c', text: 'x²/y' },
          { key: 'd', text: 'y/x' }
        ],
        correctAnswer: 'b',
        explanation: 'x:y :: y:c ⇒ xc = y² ⇒ c = y²/x.'
      },
      {
        id: 'm3-q7',
        questionNumber: 7,
        question: 'The mean proportional of 4 and 16 is:',
        options: [
          { key: 'a', text: '±8' },
          { key: 'b', text: '±64' },
          { key: 'c', text: '±4' },
          { key: 'd', text: '20' }
        ],
        correctAnswer: 'a',
        explanation: 'm² = 4 × 16 = 64 ⇒ m = ±8.'
      },
      {
        id: 'm3-q8',
        questionNumber: 8,
        question: 'If u ∝ v², then:',
        options: [
          { key: 'a', text: 'u = kv²' },
          { key: 'b', text: 'u = k/v²' },
          { key: 'c', text: 'uv² = k' },
          { key: 'd', text: 'u² = kv' }
        ],
        correctAnswer: 'a',
        explanation: 'Direct variation proportional equation is u = kv².'
      },
      {
        id: 'm3-q9',
        questionNumber: 9,
        question: 'A fraction in which the degree of numerator is less than the degree of denominator is called:',
        options: [
          { key: 'a', text: 'Proper fraction' },
          { key: 'b', text: 'Improper fraction' },
          { key: 'c', text: 'Equation' },
          { key: 'd', text: 'Identity' }
        ],
        correctAnswer: 'a',
        explanation: 'By definition, a rational fraction N(x)/D(x) is proper if degree of N(x) < degree of D(x).'
      },
      {
        id: 'm3-q10',
        questionNumber: 10,
        question: 'If a:b = 7:6, then the value of 3a + 5b : 7b - 5a is:',
        options: [
          { key: 'a', text: '51:7' },
          { key: 'b', text: '7:51' },
          { key: 'c', text: '51:17' },
          { key: 'd', text: '17:51' }
        ],
        correctAnswer: 'a',
        explanation: 'Put a = 7k, b = 6k: 3(7k) + 5(6k) = 21k + 30k = 51k; 7(6k) - 5(7k) = 42k - 35k = 7k. Ratio = 51:7.'
      }
    ]
  },
  {
    id: 'math-u5',
    number: 5,
    title: 'Sets and Functions',
    urduTitle: 'سیٹس اور تفاعلات',
    description: 'Set operations, Venn diagrams, De Morgan’s laws, Cartesian product, binary relations, domain and range, into, onto, and bijective functions.',
    summary: 'A set is a well-defined collection of distinct objects. Key set operations include Union (A ∪ B), Intersection (A ∩ B), Difference (A - B), and Complement (A\' = U - A). De Morgan’s Laws state that (A ∪ B)\' = A\' ∩ B\' and (A ∩ B)\' = A\' ∪ B\'. A Cartesian product A × B is the set of all ordered pairs (a, b). A binary relation R ⊆ A × B is a function if Dom(R) = A and no two ordered pairs have the same first element. Functions are classified into Injective (into / one-one), Surjective (onto), and Bijective (both one-one and onto).',
    shortQuestions: [
      {
        id: 'm5-sq1',
        questionNumber: 'Q.1',
        question: 'State De Morgan’s Laws for two sets A and B.',
        answer: 'De Morgan’s Laws state that: 1. (A ∪ B)\' = A\' ∩ B\' (The complement of union is the intersection of complements). 2. (A ∩ B)\' = A\' ∪ B\' (The complement of intersection is the union of complements).'
      },
      {
        id: 'm5-sq2',
        questionNumber: 'Q.2',
        question: 'If U = {1, 2, 3, ..., 10}, A = {1, 3, 5, 7, 9}, find A\'.',
        answer: 'The complement A\' = U - A. Removing all elements of A from universal set U: A\' = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} - {1, 3, 5, 7, 9} = {2, 4, 6, 8, 10}.'
      },
      {
        id: 'm5-sq3',
        questionNumber: 'Q.3',
        question: 'Define the Cartesian Product of two non-empty sets A and B.',
        answer: 'The Cartesian product A × B is the set consisting of all ordered pairs (a, b) such that the first element a belongs to A and the second element b belongs to B: A × B = {(a, b) | a ∈ A ∧ b ∈ B}. If n(A) = p and n(B) = q, then n(A × B) = pq.'
      },
      {
        id: 'm5-sq4',
        questionNumber: 'Q.4',
        question: 'Define a binary relation from set A to set B.',
        answer: 'Any subset R of the Cartesian product A × B is called a binary relation from set A to set B, i.e., R ⊆ A × B. If n(A) = p and n(B) = q, the total number of possible binary relations is 2^(pq).'
      },
      {
        id: 'm5-sq5',
        questionNumber: 'Q.5',
        question: 'What are the two fundamental conditions for a relation f: A → B to be a Function?',
        answer: 'A relation f ⊆ A × B is a function (mapping) from A to B if: 1. Domain of f is equal to set A (Dom(f) = A). 2. There is no repetition in the first element of any two distinct ordered pairs in f (every element of A has a unique image in B).'
      },
      {
        id: 'm5-sq6',
        questionNumber: 'Q.6',
        question: 'Differentiate between an Into function and an Onto (Surjective) function.',
        answer: 'In an Into function f: A → B, the Range of f is a proper subset of B (Range(f) ⊂ B, meaning at least one element in B has no pre-image). In an Onto (Surjective) function, the Range of f is exactly equal to the co-domain B (Range(f) = B, every element in B has at least one pre-image).'
      },
      {
        id: 'm5-sq7',
        questionNumber: 'Q.7',
        question: 'What is a Bijective Function?',
        answer: 'A function f: A → B is called a Bijective function (or one-to-one correspondence) if it is both: 1. One-to-one (Injective: distinct elements of A have distinct images in B). 2. Onto (Surjective: Range(f) = B). Bijective functions are invertible.'
      },
      {
        id: 'm5-sq8',
        questionNumber: 'Q.8',
        question: 'Find domain and range of relation R = {(1, 2), (2, 5), (3, 10), (4, 17)}.',
        answer: 'Domain is the set of all first coordinates: Dom(R) = {1, 2, 3, 4}. Range is the set of all second coordinates: Range(R) = {2, 5, 10, 17}.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm5-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Verify De Morgan’s Law (A ∪ B)\' = A\' ∩ B\' if U = {1, 2, 3, ..., 10}, A = {2, 4, 6}, B = {1, 2, 3, 4, 5}.',
        answerReference: 'LHS: A ∪ B = {2, 4, 6} ∪ {1, 2, 3, 4, 5} = {1, 2, 3, 4, 5, 6}. Then (A ∪ B)\' = U - (A ∪ B) = {1, 2, ..., 10} - {1, 2, 3, 4, 5, 6} = {7, 8, 9, 10}. RHS: A\' = U - A = {1, 2, ..., 10} - {2, 4, 6} = {1, 3, 5, 7, 8, 9, 10}. B\' = U - B = {1, 2, ..., 10} - {1, 2, 3, 4, 5} = {6, 7, 8, 9, 10}. A\' ∩ B\' = {1, 3, 5, 7, 8, 9, 10} ∩ {6, 7, 8, 9, 10} = {7, 8, 9, 10}. Since LHS = RHS = {7, 8, 9, 10}, verified.',
        guidance: 'Calculate LHS and RHS step-by-step to show exact equality of sets.'
      }
    ],
    numericals: [
      {
        id: 'm5-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'If set A = {a, b} and set B = {1, 2, 3}, find A × B and the total number of binary relations.',
        givenData: [
          'Set A = {a, b}, n(A) = 2',
          'Set B = {1, 2, 3}, n(B) = 3'
        ],
        solutionSteps: [
          'Form all ordered pairs (x, y) where x ∈ A and y ∈ B.',
          'A × B = {(a, 1), (a, 2), (a, 3), (b, 1), (b, 2), (b, 3)}.',
          'Number of elements in A × B = n(A) × n(B) = 2 × 3 = 6.',
          'Total number of binary relations = 2^(n(A×B)) = 2⁶ = 64.'
        ],
        result: 'A × B has 6 elements; Total binary relations = 64'
      }
    ],
    quizzes: [
      {
        id: 'm5-q1',
        questionNumber: 1,
        question: 'If A ⊆ B, then A ∪ B is equal to:',
        options: [
          { key: 'a', text: 'A' },
          { key: 'b', text: 'B' },
          { key: 'c', text: '∅' },
          { key: 'd', text: 'A ∩ B' }
        ],
        correctAnswer: 'b',
        explanation: 'When A is a subset of B, all elements of A are inside B, so their union is simply B.'
      },
      {
        id: 'm5-q2',
        questionNumber: 2,
        question: 'If A ⊆ B, then A ∩ B is equal to:',
        options: [
          { key: 'a', text: 'A' },
          { key: 'b', text: 'B' },
          { key: 'c', text: 'U' },
          { key: 'd', text: '∅' }
        ],
        correctAnswer: 'a',
        explanation: 'The common elements of A and B will be exactly the elements of subset A.'
      },
      {
        id: 'm5-q3',
        questionNumber: 3,
        question: 'The number of subsets of a set having 3 elements is:',
        options: [
          { key: 'a', text: '3' },
          { key: 'b', text: '6' },
          { key: 'c', text: '8' },
          { key: 'd', text: '9' }
        ],
        correctAnswer: 'c',
        explanation: 'Total number of subsets = 2ⁿ = 2³ = 8.'
      },
      {
        id: 'm5-q4',
        questionNumber: 4,
        question: '(A ∪ B)\' is equal to:',
        options: [
          { key: 'a', text: 'A\' ∪ B\'' },
          { key: 'b', text: 'A\' ∩ B\'' },
          { key: 'c', text: 'A ∩ B' },
          { key: 'd', text: 'U' }
        ],
        correctAnswer: 'b',
        explanation: 'By De Morgan’s first law: (A ∪ B)\' = A\' ∩ B\'.'
      },
      {
        id: 'm5-q5',
        questionNumber: 5,
        question: 'A function in which Range(f) = Co-domain B is called:',
        options: [
          { key: 'a', text: 'Into function' },
          { key: 'b', text: 'Onto (Surjective) function' },
          { key: 'c', text: 'Constant function' },
          { key: 'd', text: 'Identity function' }
        ],
        correctAnswer: 'b',
        explanation: 'When the range spans the entire co-domain, it is called an onto (surjective) function.'
      },
      {
        id: 'm5-q6',
        questionNumber: 6,
        question: 'A function that is both One-to-One and Onto is called:',
        options: [
          { key: 'a', text: 'Bijective function' },
          { key: 'b', text: 'Injective function' },
          { key: 'c', text: 'Surjective function' },
          { key: 'd', text: 'Into function' }
        ],
        correctAnswer: 'a',
        explanation: 'Bijective functions have a unique one-to-one correspondence between every element of domain and co-domain.'
      },
      {
        id: 'm5-q7',
        questionNumber: 7,
        question: 'If n(A) = 2 and n(B) = 3, then total number of elements in A × B is:',
        options: [
          { key: 'a', text: '5' },
          { key: 'b', text: '6' },
          { key: 'c', text: '8' },
          { key: 'd', text: '9' }
        ],
        correctAnswer: 'b',
        explanation: 'n(A × B) = n(A) × n(B) = 2 × 3 = 6.'
      },
      {
        id: 'm5-q8',
        questionNumber: 8,
        question: 'The set {x | x ∈ W ∧ x ≤ 5} written in tabular form is:',
        options: [
          { key: 'a', text: '{1, 2, 3, 4, 5}' },
          { key: 'b', text: '{0, 1, 2, 3, 4, 5}' },
          { key: 'c', text: '{0, 1, 2, 3, 4}' },
          { key: 'd', text: '{1, 2, 3, 4}' }
        ],
        correctAnswer: 'b',
        explanation: 'Whole numbers W begin from 0: {0, 1, 2, 3, 4, 5}.'
      },
      {
        id: 'm5-q9',
        questionNumber: 9,
        question: 'A – B is equal to:',
        options: [
          { key: 'a', text: 'A ∩ B\'' },
          { key: 'b', text: 'A ∪ B\'' },
          { key: 'c', text: 'A\' ∩ B' },
          { key: 'd', text: 'B – A' }
        ],
        correctAnswer: 'a',
        explanation: 'A – B consists of elements in A that are not in B, which is exactly A ∩ B\'.'
      },
      {
        id: 'm5-q10',
        questionNumber: 10,
        question: 'If relation R = {(a, b), (b, c), (c, d)}, then domain of R is:',
        options: [
          { key: 'a', text: '{a, b, c}' },
          { key: 'b', text: '{b, c, d}' },
          { key: 'c', text: '{a, c, d}' },
          { key: 'd', text: '{a, b, c, d}' }
        ],
        correctAnswer: 'a',
        explanation: 'Domain contains the first elements: {a, b, c}.'
      }
    ]
  },
  {
    id: 'math-u7',
    number: 7,
    title: 'Introduction to Trigonometry',
    urduTitle: 'مثلثیات کا تعارف',
    description: 'Degree and radian angle measures, l = rθ, trigonometric ratios (sin, cos, tan), fundamental identities, signs in quadrants, and angle of elevation & depression.',
    summary: 'Trigonometry deals with the measurement of triangles, sides, and angles. Angles are measured in sexagesimal units (degrees, minutes, seconds) or circular units (radians), with 180° = π radians. Arc length l on a circle of radius r subtending angle θ (in radians) is given by l = rθ. In a right triangle, sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj. Fundamental identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = csc²θ. Signs in quadrants are governed by "ASTC" (All, Sin, Tan, Cos).',
    shortQuestions: [
      {
        id: 'm7-sq1',
        questionNumber: 'Q.1',
        question: 'Define Radian measure of an angle.',
        answer: 'A radian is the measure of the central angle subtended by an arc whose length is equal to the radius of the circle. Relation with degree measure: 180° = π radians ⇒ 1 radian = 180°/π ≈ 57.296°.'
      },
      {
        id: 'm7-sq2',
        questionNumber: 'Q.2',
        question: 'Convert 45° 30\' into radian measure.',
        answer: 'First convert minutes to degrees: 30\' = (30/60)° = 0.5°. So angle = 45.5° = 91/2 degrees. To convert to radians, multiply by π/180: (91/2) × (π/180) = 91π / 360 radians ≈ 0.794 radians.',
        mathSolution: {
          given: 'Angle in sexagesimal measure: 45° 30\'',
          toFind: 'Convert to circular radian measure',
          formula: '1° = π / 180 radians',
          steps: [
            'Convert minutes to decimal degrees: 30\' = (30 / 60)° = 0.5°',
            'Total angle in degrees: 45° + 0.5° = 45.5° = 91 / 2 degrees',
            'Multiply by conversion factor: (91 / 2) × (π / 180)',
            'Simplify fraction: 91π / 360 radians'
          ],
          solutionSet: '91π / 360 rad ≈ 0.794 rad'
        }
      },
      {
        id: 'm7-sq3',
        questionNumber: 'Q.3',
        question: 'If r = 6 cm and θ = 0.5 radian, find the arc length l.',
        answer: 'Formula: l = rθ (where θ must be in radians). Substituting given values: l = 6 cm × 0.5 = 3 cm. Hence, arc length is 3 cm.',
        mathSolution: {
          given: 'Radius r = 6 cm, Central angle θ = 0.5 radian',
          toFind: 'Arc length l',
          formula: 'l = r θ (with θ in radians)',
          steps: [
            'State circular arc length formula: l = r θ',
            'Substitute known values: l = 6 cm × 0.5',
            'Compute product: l = 3 cm'
          ],
          solutionSet: 'l = 3 cm'
        }
      },
      {
        id: 'm7-sq4',
        questionNumber: 'Q.4',
        question: 'Differentiate between Angle of Elevation and Angle of Depression.',
        answer: 'When an observer looks upward at an object above horizontal line of sight, the angle formed between the line of sight and the horizontal line is called the Angle of Elevation. When looking downward at an object below horizontal line of sight, the angle formed is called the Angle of Depression.'
      },
      {
        id: 'm7-sq5',
        questionNumber: 'Q.5',
        question: 'In which quadrant does the terminal arm of angle θ lie if sin θ < 0 and cos θ > 0?',
        answer: 'sin θ is negative in Quadrants III and IV. cos θ is positive in Quadrants I and IV. The common quadrant where sin θ < 0 and cos θ > 0 is Quadrant IV.'
      },
      {
        id: 'm7-sq6',
        questionNumber: 'Q.6',
        question: 'State the three fundamental trigonometric identities.',
        answer: '1. sin²θ + cos²θ = 1. 2. 1 + tan²θ = sec²θ (or sec²θ - tan²θ = 1). 3. 1 + cot²θ = csc²θ (or csc²θ - cot²θ = 1).'
      },
      {
        id: 'm7-sq7',
        questionNumber: 'Q.7',
        question: 'Prove that: tan θ + cot θ = sec θ csc θ.',
        answer: 'LHS = tan θ + cot θ = (sin θ / cos θ) + (cos θ / sin θ) = (sin²θ + cos²θ) / (cos θ sin θ). Using sin²θ + cos²θ = 1: LHS = 1 / (cos θ sin θ) = (1 / cos θ) · (1 / sin θ) = sec θ csc θ = RHS. Proved!',
        mathSolution: {
          given: 'Left-Hand Side: LHS = tan θ + cot θ',
          toFind: 'Prove LHS = sec θ csc θ (RHS)',
          formula: 'tan θ = sin θ / cos θ, cot θ = cos θ / sin θ, sin²θ + cos²θ = 1',
          steps: [
            'Express tangent and cotangent as quotients: LHS = (sin θ / cos θ) + (cos θ / sin θ)',
            'Take common denominator (cos θ sin θ): LHS = (sin²θ + cos²θ) / (cos θ sin θ)',
            'Substitute fundamental identity sin²θ + cos²θ = 1: LHS = 1 / (cos θ sin θ)',
            'Separate into reciprocal factors: LHS = (1 / cos θ) · (1 / sin θ)',
            'Replace with reciprocal ratios: LHS = sec θ · csc θ = RHS'
          ],
          solutionSet: 'L.H.S = R.H.S (Identity Proved)'
        }
      },
      {
        id: 'm7-sq8',
        questionNumber: 'Q.8',
        question: 'Find the exact values of sin 30°, cos 45°, and tan 60°.',
        answer: '1. sin 30° = 1/2. 2. cos 45° = 1/√2 = √2/2. 3. tan 60° = √3.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm7-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Prove the trigonometric identity: (1 + sin θ) / cos θ + cos θ / (1 + sin θ) = 2 sec θ.',
        answerReference: 'LHS = [(1 + sin θ)² + cos²θ] / [cos θ (1 + sin θ)] = [1 + 2 sin θ + sin²θ + cos²θ] / [cos θ (1 + sin θ)]. Since sin²θ + cos²θ = 1: = [1 + 2 sin θ + 1] / [cos θ (1 + sin θ)] = [2 + 2 sin θ] / [cos θ (1 + sin θ)] = 2(1 + sin θ) / [cos θ (1 + sin θ)]. Canceling common factor (1 + sin θ): = 2 / cos θ = 2 sec θ = RHS. Proved!',
        guidance: 'Take common denominator, expand the binomial (1 + sin θ)², and substitute sin²θ + cos²θ = 1.'
      },
      {
        id: 'm7-eq2',
        questionNumber: 'Extensive Q.2',
        question: 'A 20-meter long ladder leans against a vertical wall, making an angle of 60° with the ground. Find the height up the wall reached by the ladder and the distance of its foot from the wall.',
        answerReference: 'Let ladder length be hypotenuse c = 20 m. Let height reached be opposite side h, and foot distance be adjacent side d. 1. For height h: sin 60° = h / 20 ⇒ (√3 / 2) = h / 20 ⇒ h = 20 × (√3 / 2) = 10√3 m ≈ 17.32 m. 2. For distance d: cos 60° = d / 20 ⇒ (1/2) = d / 20 ⇒ d = 20 × (1/2) = 10 m. Thus, height = 10√3 m and foot distance = 10 m.',
        guidance: 'Draw a right triangle showing hypotenuse = 20m, base angle = 60°, and apply sine and cosine ratios.'
      }
    ],
    numericals: [
      {
        id: 'm7-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'Find the radius r of a circular arc when arc length l = 52 cm and central angle θ = 45°.',
        givenData: [
          'Arc length l = 52 cm',
          'Angle θ = 45° (needs conversion to radians)'
        ],
        solutionSteps: [
          'Convert angle to radians: θ = 45° × (π / 180) = π / 4 radians.',
          'Using relation: l = rθ ⇒ r = l / θ.',
          'Substitute values: r = 52 / (π / 4) = (52 × 4) / π = 208 / 3.1416.',
          'Calculate: r ≈ 66.21 cm.'
        ],
        result: 'Radius r ≈ 66.21 cm'
      }
    ],
    quizzes: [
      {
        id: 'm7-q1',
        questionNumber: 1,
        question: '180° is equal to how many radians?',
        options: [
          { key: 'a', text: 'π/2 radians' },
          { key: 'b', text: 'π radians' },
          { key: 'c', text: '2π radians' },
          { key: 'd', text: '3π/2 radians' }
        ],
        correctAnswer: 'b',
        explanation: 'A semi-circle of 180° equals π radians.'
      },
      {
        id: 'm7-q2',
        questionNumber: 2,
        question: 'The formula connecting arc length l, radius r, and angle θ is:',
        options: [
          { key: 'a', text: 'l = r / θ' },
          { key: 'b', text: 'l = rθ' },
          { key: 'c', text: 'θ = lr' },
          { key: 'd', text: 'r = lθ' }
        ],
        correctAnswer: 'b',
        explanation: 'l = rθ, where θ must be measured in radians.'
      },
      {
        id: 'm7-q3',
        questionNumber: 3,
        question: 'sin²θ + cos²θ is always equal to:',
        options: [
          { key: 'a', text: '0' },
          { key: 'b', text: '1' },
          { key: 'c', text: '-1' },
          { key: 'd', text: 'tan²θ' }
        ],
        correctAnswer: 'b',
        explanation: 'Fundamental Pythagorean trigonometric identity: sin²θ + cos²θ = 1.'
      },
      {
        id: 'm7-q4',
        questionNumber: 4,
        question: '1 + tan²θ is equal to:',
        options: [
          { key: 'a', text: 'cot²θ' },
          { key: 'b', text: 'sec²θ' },
          { key: 'c', text: 'csc²θ' },
          { key: 'd', text: 'cos²θ' }
        ],
        correctAnswer: 'b',
        explanation: '1 + tan²θ = sec²θ.'
      },
      {
        id: 'm7-q5',
        questionNumber: 5,
        question: 'In Quadrant II, which trigonometric function is positive?',
        options: [
          { key: 'a', text: 'cos θ' },
          { key: 'b', text: 'sin θ' },
          { key: 'c', text: 'tan θ' },
          { key: 'd', text: 'sec θ' }
        ],
        correctAnswer: 'b',
        explanation: 'In Quadrant II, sine (and its reciprocal cosecant) is positive; cosine and tangent are negative.'
      },
      {
        id: 'm7-q6',
        questionNumber: 6,
        question: 'tan 45° is equal to:',
        options: [
          { key: 'a', text: '0' },
          { key: 'b', text: '1' },
          { key: 'c', text: '1/√3' },
          { key: 'd', text: '√3' }
        ],
        correctAnswer: 'b',
        explanation: 'tan 45° = sin 45° / cos 45° = (1/√2) / (1/√2) = 1.'
      },
      {
        id: 'm7-q7',
        questionNumber: 7,
        question: '1 radian is approximately equal to:',
        options: [
          { key: 'a', text: '45.3°' },
          { key: 'b', text: '57.3°' },
          { key: 'c', text: '60°' },
          { key: 'd', text: '90°' }
        ],
        correctAnswer: 'b',
        explanation: '180° / π ≈ 180 / 3.14159 ≈ 57.296°.'
      },
      {
        id: 'm7-q8',
        questionNumber: 8,
        question: 'The reciprocal of sec θ is:',
        options: [
          { key: 'a', text: 'cos θ' },
          { key: 'b', text: 'sin θ' },
          { key: 'c', text: 'tan θ' },
          { key: 'd', text: 'csc θ' }
        ],
        correctAnswer: 'a',
        explanation: 'sec θ = 1 / cos θ ⇒ cos θ = 1 / sec θ.'
      },
      {
        id: 'm7-q9',
        questionNumber: 9,
        question: 'If cot θ > 0 and cosec θ < 0, then terminal arm of angle θ lies in quadrant:',
        options: [
          { key: 'a', text: 'I' },
          { key: 'b', text: 'II' },
          { key: 'c', text: 'III' },
          { key: 'd', text: 'IV' }
        ],
        correctAnswer: 'c',
        explanation: 'cot θ > 0 in I and III; csc θ < 0 (sin < 0) in III and IV. Common quadrant is III.'
      },
      {
        id: 'm7-q10',
        questionNumber: 10,
        question: 'The angle made by line of sight with horizontal looking above horizontal is called:',
        options: [
          { key: 'a', text: 'Angle of depression' },
          { key: 'b', text: 'Angle of elevation' },
          { key: 'c', text: 'Central angle' },
          { key: 'd', text: 'Reflex angle' }
        ],
        correctAnswer: 'b',
        explanation: 'Looking upward above the horizontal defines the angle of elevation.'
      }
    ]
  }
];
