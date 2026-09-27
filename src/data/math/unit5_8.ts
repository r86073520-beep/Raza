import { Chapter } from '../../types/book';

export const UNIT_5_8: Chapter[] = [
  {
    id: 'math-u5',
    number: 5,
    title: 'Sets and Functions',
    urduTitle: 'سیٹس اور تفاعلات',
    description: 'Set operations (Union, Intersection, Difference, Complement), De Morgan’s Laws, Venn diagrams, Cartesian product, binary relations, function domains & ranges, bijective mapping.',
    summary: 'A set is a well-defined collection of distinct objects. Operations on sets include Union (A ∪ B), Intersection (A ∩ B), Difference (A - B), and Complement (A\' = U - A). De Morgan\'s Laws state: (A ∪ B)\' = A\' ∩ B\' and (A ∩ B)\' = A\' ∪ B\'. A Cartesian product A × B consists of all ordered pairs (a, b) where a ∈ A and b ∈ B. Any subset of A × B is called a binary relation. A relation f from A to B is a function if Dom(f) = A and no two ordered pairs have the same first element. Functions are classified into Into, Onto (Surjective), One-One (Injective), and Bijective (both one-one and onto).',
    shortQuestions: [
      {
        id: 'm5-sq1',
        questionNumber: 'Q.1',
        question: 'Define a Set and a Subset.',
        answer: 'A set is a well-defined collection of distinct objects. If every element of set A is also an element of set B, then A is called a subset of B, denoted as A ⊆ B.'
      },
      {
        id: 'm5-sq2',
        questionNumber: 'Q.2',
        question: 'State De Morgan’s Laws.',
        answer: 'For any two sets A and B in a universal set U:\n1) (A ∪ B)\' = A\' ∩ B\' (Complement of union is intersection of complements)\n2) (A ∩ B)\' = A\' ∪ B\' (Complement of intersection is union of complements).'
      },
      {
        id: 'm5-sq3',
        questionNumber: 'Q.3',
        question: 'Define the Cartesian Product of two sets.',
        answer: 'The Cartesian product of two non-empty sets A and B, denoted by A × B, is the set of all ordered pairs (x, y) such that x ∈ A and y ∈ B: A × B = {(x, y) | x ∈ A ∧ y ∈ B}. If n(A) = p and n(B) = q, then n(A × B) = pq.'
      },
      {
        id: 'm5-sq4',
        questionNumber: 'Q.4',
        question: 'What is a Binary Relation? Give an example.',
        answer: 'Any subset of the Cartesian product A × B is called a binary relation from set A to set B. If A = {1, 2} and B = {3, 4}, then R = {(1, 3), (2, 4)} ⊆ A × B is a binary relation.'
      },
      {
        id: 'm5-sq5',
        questionNumber: 'Q.5',
        question: 'Define a Function and its Domain and Range.',
        answer: 'A binary relation f: A → B is a function if:\n1) Dom(f) = A (Domain equals set A)\n2) Every element of A is paired with a unique element of B.\nThe set of all second coordinates of ordered pairs in f is called the Range of f.'
      },
      {
        id: 'm5-sq6',
        questionNumber: 'Q.6',
        question: 'Differentiate between Injective (One-One) and Surjective (Onto) function.',
        answer: 'In an Injective (1-1) function, distinct elements of domain have distinct images in co-domain. In a Surjective (onto) function, the Range equals the entire co-domain B (Range(f) = B). A function that is both injective and surjective is called Bijective.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm5-eq1',
        questionNumber: 'Extensive Q.1 (Ex 5.2)',
        question: 'If U = {1, 2, 3, 4, ..., 10}, A = {1, 3, 5, 7, 9}, B = {2, 3, 5, 7}, verify De Morgan’s Laws.',
        answerReference: 'Part 1: Verify (A ∪ B)\' = A\' ∩ B\'.\nA ∪ B = {1, 2, 3, 5, 7, 9}.\nLHS = (A ∪ B)\' = U - (A ∪ B) = {4, 6, 8, 10}.\nA\' = U - A = {2, 4, 6, 8, 10}.\nB\' = U - B = {1, 4, 6, 8, 9, 10}.\nRHS = A\' ∩ B\' = {4, 6, 8, 10}.\nSince LHS = RHS = {4, 6, 8, 10}, law 1 is verified.\nPart 2: Verify (A ∩ B)\' = A\' ∪ B\'.\nA ∩ B = {3, 5, 7}.\nLHS = (A ∩ B)\' = U - {3, 5, 7} = {1, 2, 4, 6, 8, 9, 10}.\nRHS = A\' ∪ B\' = {2, 4, 6, 8, 10} ∪ {1, 4, 6, 8, 9, 10} = {1, 2, 4, 6, 8, 9, 10}.\nSince LHS = RHS, both De Morgan\'s laws are verified.',
        guidance: 'Draw step-by-step set differences clearly.'
      }
    ],
    numericals: [
      {
        id: 'm5-num1',
        questionNumber: 'Solved Problem 1 (Ex 5.5)',
        problem: 'If set A = {a, b} and set B = {1, 2, 3}, find the number of elements in A × B and the total number of binary relations.',
        givenData: ['n(A) = 2', 'n(B) = 3'],
        solutionSteps: [
          'n(A × B) = n(A) × n(B) = 2 × 3 = 6 elements.',
          'The total number of binary relations is the total number of subsets of A × B.',
          'Total binary relations = 2^(n(A × B)) = 2⁶ = 64.'
        ],
        result: 'Elements in A × B = 6, Total relations = 64'
      }
    ],
    quizzes: [
      {
        id: 'm5-q1',
        questionNumber: 1,
        question: 'The number of subsets of a set with n elements is:',
        options: [
          { key: 'a', text: '2^n' },
          { key: 'b', text: '2^(n-1)' },
          { key: 'c', text: 'n²' },
          { key: 'd', text: '2n' }
        ],
        correctAnswer: 'a',
        explanation: 'The power set of a set with n elements contains 2^n subsets.'
      },
      {
        id: 'm5-q2',
        questionNumber: 2,
        question: 'If A ⊆ B, then A ∪ B is equal to:',
        options: [
          { key: 'a', text: 'A' },
          { key: 'b', text: 'B' },
          { key: 'c', text: '∅' },
          { key: 'd', text: 'U' }
        ],
        correctAnswer: 'b',
        explanation: 'Since A is inside B, the union of A and B is B.'
      },
      {
        id: 'm5-q3',
        questionNumber: 3,
        question: '(A ∩ B)\' is equal to:',
        options: [
          { key: 'a', text: 'A\' ∩ B\'' },
          { key: 'b', text: 'A\' ∪ B\'' },
          { key: 'c', text: 'A ∪ B' },
          { key: 'd', text: 'A\' - B\'' }
        ],
        correctAnswer: 'b',
        explanation: 'De Morgan\'s second law: complement of intersection is union of complements.'
      },
      {
        id: 'm5-q4',
        questionNumber: 4,
        question: 'If R = {(1, 2), (2, 3), (3, 4)}, then Range of R is:',
        options: [
          { key: 'a', text: '{1, 2, 3}' },
          { key: 'b', text: '{2, 3, 4}' },
          { key: 'c', text: '{1, 2, 3, 4}' },
          { key: 'd', text: '{2, 4}' }
        ],
        correctAnswer: 'b',
        explanation: 'Range is the set of all second elements: {2, 3, 4}.'
      }
    ]
  },
  {
    id: 'math-u6',
    number: 6,
    title: 'Basic Statistics',
    urduTitle: 'بنیادی شماریات',
    description: 'Frequency distribution, cumulative frequency, histograms, measures of central tendency (Mean, Median, Mode, Geometric Mean, Harmonic Mean), measures of dispersion (Range, Variance, Standard Deviation).',
    summary: 'Statistics is the science of collecting, organizing, analyzing, and interpreting numerical data. A frequency distribution groups raw data into classes with class boundaries and class marks (midpoints). Measures of central tendency summarize data into a single central value: Arithmetic Mean (X̄ = Σx/n or Σfx/Σf), Median (middle value), Mode (most frequent value), Geometric Mean, and Harmonic Mean. Measures of dispersion describe the spread of data: Range = X_max - X_min, Variance (S² = Σ(X - X̄)²/n), and Standard Deviation (S = √Variance).',
    shortQuestions: [
      {
        id: 'm6-sq1',
        questionNumber: 'Q.1',
        question: 'Define Frequency Distribution and Class Mark (Midpoint).',
        answer: 'A frequency distribution is a tabular arrangement of data into non-overlapping classes together with their corresponding frequencies. The Class Mark (Midpoint) x is the average of lower and upper class limits: x = (Lower Limit + Upper Limit) / 2.'
      },
      {
        id: 'm6-sq2',
        questionNumber: 'Q.2',
        question: 'Define Arithmetic Mean and write its formula for ungrouped and grouped data.',
        answer: 'Arithmetic Mean is the sum of all observations divided by the total number of observations. For ungrouped data: X̄ = (Σx) / n. For grouped data: X̄ = (Σfx) / (Σf), where f is frequency and x is class midpoint.'
      },
      {
        id: 'm6-sq3',
        questionNumber: 'Q.3',
        question: 'Define Median and Mode with an example.',
        answer: 'The Median is the middle observation of an ordered dataset (or average of two middle values if n is even). The Mode is the value that occurs with the highest frequency in a dataset. Example: for {2, 3, 3, 5, 7}, Median = 3 and Mode = 3.'
      },
      {
        id: 'm6-sq4',
        questionNumber: 'Q.4',
        question: 'Define Harmonic Mean and Geometric Mean.',
        answer: 'Geometric Mean (G.M.) is the nth root of the product of n positive observations: G.M. = (x₁ · x₂ · ... · x_n)^(1/n). Harmonic Mean (H.M.) is the reciprocal of the arithmetic mean of the reciprocals of observations: H.M. = n / Σ(1/x).'
      },
      {
        id: 'm6-sq5',
        questionNumber: 'Q.5',
        question: 'Define Range and Standard Deviation.',
        answer: 'Range is the difference between the maximum and minimum values: Range = X_max - X_min. Standard Deviation (S) is the positive square root of the arithmetic mean of the squares of deviations from the arithmetic mean: S = √[Σ(x - X̄)² / n].'
      },
      {
        id: 'm6-sq6',
        questionNumber: 'Q.6',
        question: 'What is Variance? How is it related to Standard Deviation?',
        answer: 'Variance is defined as the mean of the squared deviations of values from their arithmetic mean: Variance = S² = Σ(x - X̄)² / n. Standard deviation is simply the square root of variance: S = √(Variance).'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm6-eq1',
        questionNumber: 'Extensive Q.1 (Ex 6.2)',
        question: 'Calculate the Arithmetic Mean, Median, and Mode for the observations: 12, 14, 17, 20, 24, 28, 30.',
        answerReference: '1) Arithmetic Mean: X̄ = Σx / n = (12 + 14 + 17 + 20 + 24 + 28 + 30) / 7 = 145 / 7 ≈ 20.71.\n2) Median: Since n = 7 (odd), Median is the ((7 + 1)/2)th = 4th value in arranged order. 4th value = 20. Hence Median = 20.\n3) Mode: All values appear once with equal frequency, so there is no mode (or multimodal with frequency 1).',
        guidance: 'Show step-by-step addition and state formulas explicitly.'
      },
      {
        id: 'm6-eq2',
        questionNumber: 'Extensive Q.2 (Ex 6.3)',
        question: 'Find the Standard Deviation and Variance of the data: 9, 3, 8, 8, 9, 8, 9, 18.',
        answerReference: 'Number of observations n = 8.\nΣx = 9 + 3 + 8 + 8 + 9 + 8 + 9 + 18 = 72.\nMean X̄ = Σx / n = 72 / 8 = 9.\nCompute (x - X̄)²:\n(9-9)²=0, (3-9)²=36, (8-9)²=1, (8-9)²=1, (9-9)²=0, (8-9)²=1, (9-9)²=0, (18-9)²=81.\nΣ(x - X̄)² = 0 + 36 + 1 + 1 + 0 + 1 + 0 + 81 = 120.\nVariance S² = Σ(x - X̄)² / n = 120 / 8 = 15.\nStandard Deviation S = √15 ≈ 3.87.',
        guidance: 'Create a clear calculation column table for (x - X̄) and (x - X̄)².'
      }
    ],
    numericals: [
      {
        id: 'm6-num1',
        questionNumber: 'Solved Problem 1 (Ex 6.3 Q.1)',
        problem: 'Find the Range of weights: 110, 109, 84, 89, 77, 104, 74, 97, 49, 59, 103, 62.',
        givenData: ['Maximum value X_max = 110', 'Minimum value X_min = 49'],
        solutionSteps: [
          'Range formula: Range = X_max - X_min',
          'Range = 110 - 49 = 61'
        ],
        result: 'Range = 61'
      }
    ],
    quizzes: [
      {
        id: 'm6-q1',
        questionNumber: 1,
        question: 'A data presented in the form of frequency distribution is called:',
        options: [
          { key: 'a', text: 'Grouped data' },
          { key: 'b', text: 'Ungrouped data' },
          { key: 'c', text: 'Secondary data' },
          { key: 'd', text: 'Discrete data' }
        ],
        correctAnswer: 'a',
        explanation: 'Data organized into classes with frequencies is termed grouped data.'
      },
      {
        id: 'm6-q2',
        questionNumber: 2,
        question: 'The most frequent observation in a data is called its:',
        options: [
          { key: 'a', text: 'Mean' },
          { key: 'b', text: 'Median' },
          { key: 'c', text: 'Mode' },
          { key: 'd', text: 'Harmonic Mean' }
        ],
        correctAnswer: 'c',
        explanation: 'Mode is by definition the value with the greatest frequency.'
      },
      {
        id: 'm6-q3',
        questionNumber: 3,
        question: 'The positive square root of the mean of squared deviations from arithmetic mean is called:',
        options: [
          { key: 'a', text: 'Variance' },
          { key: 'b', text: 'Standard Deviation' },
          { key: 'c', text: 'Range' },
          { key: 'd', text: 'Geometric Mean' }
        ],
        correctAnswer: 'b',
        explanation: 'Standard Deviation is S = √[Σ(x - X̄)² / n].'
      },
      {
        id: 'm6-q4',
        questionNumber: 4,
        question: 'The measure of central tendency that divides an arranged dataset into two equal halves is:',
        options: [
          { key: 'a', text: 'Arithmetic Mean' },
          { key: 'b', text: 'Median' },
          { key: 'c', text: 'Mode' },
          { key: 'd', text: 'Variance' }
        ],
        correctAnswer: 'b',
        explanation: 'The median lies at the 50th percentile, dividing data into two equal halves.'
      }
    ]
  },
  {
    id: 'math-u7',
    number: 7,
    title: 'Introduction to Trigonometry',
    urduTitle: 'مثلثیات کا تعارف',
    description: 'Degree and radian measure (1 rad = 180°/π ≈ 57.3°), arc length l = rθ, trigonometric ratios, fundamental identities, quadrants, angles of elevation and depression.',
    summary: 'Trigonometry is the study of relationships between angles and sides of triangles. In the Sexagesimal system, 1 degree = 60 minutes and 1 minute = 60 seconds. In the Circular system, an angle subtended at the center of a circle by an arc equal in length to radius is 1 radian: 180° = π radians ⇒ 1 rad ≈ 57.296°. Arc length formula: l = rθ (where θ is in radians). Fundamental trigonometric identities: sin²θ + cos²θ = 1, 1 + tan²θ = sec²θ, and 1 + cot²θ = csc²θ. Signs in quadrants: CAST rule (I: All positive, II: Sin positive, III: Tan positive, IV: Cos positive). Angle of elevation is measured looking upward; angle of depression looking downward.',
    shortQuestions: [
      {
        id: 'm7-sq1',
        questionNumber: 'Q.1',
        question: 'Define Radian measure and convert 1 radian into degrees.',
        answer: 'A radian is the angle subtended at the center of a circle by an arc whose length is equal to the radius of the circle. Since π radians = 180°, 1 radian = 180° / π ≈ 180° / 3.14159 ≈ 57.296° (or 57° 17\' 45").'
      },
      {
        id: 'm7-sq2',
        questionNumber: 'Q.2',
        question: 'State the relation between arc length, radius, and central angle (l = rθ).',
        answer: 'If an arc of length l of a circle of radius r subtends a central angle of θ radians, then: l = rθ, where θ MUST be measured in radians.'
      },
      {
        id: 'm7-sq3',
        questionNumber: 'Q.3',
        question: 'Find the radius r of a circle when l = 4 cm and θ = 1/4 radian.',
        answer: 'From l = rθ ⇒ r = l / θ = 4 / (1/4) = 4 × 4 = 16 cm.'
      },
      {
        id: 'm7-sq4',
        questionNumber: 'Q.4',
        question: 'State the three fundamental identities of trigonometry.',
        answer: '1) sin²θ + cos²θ = 1\n2) 1 + tan²θ = sec²θ (or sec²θ - tan²θ = 1)\n3) 1 + cot²θ = csc²θ (or csc²θ - cot²θ = 1).'
      },
      {
        id: 'm7-sq5',
        questionNumber: 'Q.5',
        question: 'Define Angle of Elevation and Angle of Depression.',
        answer: 'Angle of elevation is the angle between the horizontal line of sight and the line of sight to an object situated above the observer. Angle of depression is the angle between the horizontal and the line of sight to an object below the observer.'
      },
      {
        id: 'm7-sq6',
        questionNumber: 'Q.6',
        question: 'Determine the sign of sin 160° and cos 210° without tables.',
        answer: '1) 160° lies in Quadrant II, where sine is positive: sin 160° > 0.\n2) 210° lies in Quadrant III, where cosine is negative: cos 210° < 0.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm7-eq1',
        questionNumber: 'Extensive Q.1 (Ex 7.4)',
        question: 'Prove the trigonometric identity: (1 - sin θ) / (cos θ) = (cos θ) / (1 + sin θ).',
        answerReference: 'LHS = (1 - sin θ) / cos θ.\nMultiply numerator and denominator by (1 + sin θ):\nLHS = [(1 - sin θ)(1 + sin θ)] / [cos θ (1 + sin θ)] = (1 - sin²θ) / [cos θ (1 + sin θ)].\nUsing fundamental identity 1 - sin²θ = cos²θ:\nLHS = cos²θ / [cos θ (1 + sin θ)] = cos θ / (1 + sin θ) = RHS. (Proved)',
        guidance: 'Multiplying by conjugate is the standard board exam strategy.'
      },
      {
        id: 'm7-eq2',
        questionNumber: 'Extensive Q.2 (Ex 7.5)',
        question: 'From the top of a cliff 80 m high, the angle of depression of a boat is 30°. How far is the boat from the base of the cliff?',
        answerReference: 'Let the distance from the base of cliff to boat be x meters.\nHeight of cliff h = 80 m. Angle of depression = 30° ⇒ angle of elevation from boat to top = 30°.\nIn right triangle: tan 30° = Opposite / Adjacent = 80 / x.\nSince tan 30° = 1 / √3:\n1 / √3 = 80 / x ⇒ x = 80√3 m ≈ 80 × 1.732 = 138.56 m.\nHence, the boat is 138.56 meters away from the base of the cliff.',
        guidance: 'Always sketch the right-angled triangle with labels.'
      }
    ],
    numericals: [
      {
        id: 'm7-num1',
        questionNumber: 'Solved Problem 1 (Ex 7.2 Q.1)',
        problem: 'Find l, when r = 3.5 cm and θ = 70°.',
        givenData: ['Radius r = 3.5 cm', 'Angle θ = 70°'],
        solutionSteps: [
          'Convert angle to radians: θ = 70° × (π / 180°) = (70 × 3.14159) / 180 ≈ 1.2217 rad',
          'Apply arc length formula: l = rθ',
          'l = 3.5 × 1.2217 ≈ 4.28 cm'
        ],
        result: 'Arc length l = 4.28 cm'
      }
    ],
    quizzes: [
      {
        id: 'm7-q1',
        questionNumber: 1,
        question: '180° is equal to:',
        options: [
          { key: 'a', text: 'π/2 radians' },
          { key: 'b', text: 'π radians' },
          { key: 'c', text: '2π radians' },
          { key: 'd', text: '3π/2 radians' }
        ],
        correctAnswer: 'b',
        explanation: 'A semi-circle angle is 180° = π radians.'
      },
      {
        id: 'm7-q2',
        questionNumber: 2,
        question: '1 radian is approximately equal to:',
        options: [
          { key: 'a', text: '45.3°' },
          { key: 'b', text: '57.3°' },
          { key: 'c', text: '60°' },
          { key: 'd', text: '90°' }
        ],
        correctAnswer: 'b',
        explanation: '180 / π ≈ 57.296° ≈ 57.3°.'
      },
      {
        id: 'm7-q3',
        questionNumber: 3,
        question: 'sec²θ - tan²θ = ?',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '-1' },
          { key: 'c', text: '0' },
          { key: 'd', text: '2' }
        ],
        correctAnswer: 'a',
        explanation: '1 + tan²θ = sec²θ ⇒ sec²θ - tan²θ = 1.'
      },
      {
        id: 'm7-q4',
        questionNumber: 4,
        question: 'If cot θ > 0 and csc θ < 0, then terminal arm of angle θ lies in quadrant:',
        options: [
          { key: 'a', text: 'I' },
          { key: 'b', text: 'II' },
          { key: 'c', text: 'III' },
          { key: 'd', text: 'IV' }
        ],
        correctAnswer: 'c',
        explanation: 'cot > 0 in I and III; csc < 0 (sin < 0) in III and IV. Intersection is III.'
      }
    ]
  },
  {
    id: 'math-u8',
    number: 8,
    title: 'Projection of a Side of a Triangle',
    urduTitle: 'مثلث کے ایک ضلع کا سایہ (مسقط)',
    description: 'Projection of a point and line segment, theorems on obtuse-angled triangles (c² = a² + b² + 2ax), theorems on acute-angled triangles (c² = a² + b² - 2ax), relation to law of cosines.',
    summary: 'The projection of a point on a given line is the foot of the perpendicular drawn from the point to the line. The projection of a line segment AB upon a line CD is the segment between the feet of the perpendiculars drawn from A and B to CD. Theorem 1 (Obtuse Triangle): In an obtuse-angled triangle, the square on the side opposite to the obtuse angle is equal to the sum of the squares on the sides containing the obtuse angle together with twice the rectangle contained by one of those sides and the projection on it of the other (c² = a² + b² + 2ax). Theorem 2 (Acute Triangle): In any triangle, the square on the side opposite to an acute angle is equal to the sum of the squares on the sides containing that acute angle diminished by twice the rectangle contained by one of those sides and the projection on it of the other (c² = a² + b² - 2ax).',
    shortQuestions: [
      {
        id: 'm8-sq1',
        questionNumber: 'Q.1',
        question: 'Define the Projection of a point on a line.',
        answer: 'The projection of a point P upon a straight line L is the foot of the perpendicular drawn from point P to line L.'
      },
      {
        id: 'm8-sq2',
        questionNumber: 'Q.2',
        question: 'Define the Projection of a line segment on a line.',
        answer: 'The projection of a line segment AB upon a straight line CD is the portion of CD intercepted between the feet of the perpendiculars drawn from the endpoints A and B onto CD.'
      },
      {
        id: 'm8-sq3',
        questionNumber: 'Q.3',
        question: 'What is the projection of a line segment perpendicular to a given line?',
        answer: 'The projection of a line segment that is perpendicular to a line is a single point, so its length of projection is zero.'
      },
      {
        id: 'm8-sq4',
        questionNumber: 'Q.4',
        question: 'State the theorem on an obtuse-angled triangle.',
        answer: 'In an obtuse-angled triangle, the square on the side opposite to the obtuse angle is equal to the sum of the squares on the sides containing the obtuse angle together with twice the rectangle contained by one of those sides and the projection on it of the other: c² = a² + b² + 2ax.'
      },
      {
        id: 'm8-sq5',
        questionNumber: 'Q.5',
        question: 'State the theorem on an acute-angled triangle.',
        answer: 'In any triangle, the square on the side opposite to an acute angle is equal to the sum of the squares on the sides containing that acute angle diminished by twice the rectangle contained by one of those sides and the projection on it of the other: c² = a² + b² - 2ax.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm8-eq1',
        questionNumber: 'Extensive Q.1 (Theorem 8.1)',
        question: 'Prove that in an obtuse-angled triangle, the square on the side opposite to the obtuse angle is equal to the sum of the squares on the sides containing the obtuse angle together with twice the rectangle contained by one of those sides and the projection on it of the other.',
        answerReference: 'Given: In ΔABC, angle C is obtuse. CD is projection of BC upon AC produced. Let BC = a, AC = b, AB = c, CD = x, AD = b + x, and altitude BD = h.\nIn right ΔBDC: a² = h² + x² ⇒ h² = a² - x²  --- (1)\nIn right ΔBDA: c² = h² + AD² = h² + (b + x)² = h² + b² + 2bx + x²  --- (2)\nSubstitute h² = a² - x² from (1) into (2):\nc² = (a² - x²) + b² + 2bx + x²\nc² = a² + b² + 2bx.\nHence, AB² = BC² + AC² + 2(AC)(CD). (Proved)',
        guidance: 'Draw clear triangle with extended base and right-angle altitude.'
      }
    ],
    quizzes: [
      {
        id: 'm8-q1',
        questionNumber: 1,
        question: 'In an obtuse angled triangle, side opposite to obtuse angle c satisfies:',
        options: [
          { key: 'a', text: 'c² = a² + b²' },
          { key: 'b', text: 'c² = a² + b² + 2ax' },
          { key: 'c', text: 'c² = a² + b² - 2ax' },
          { key: 'd', text: 'c² = a² - b²' }
        ],
        correctAnswer: 'b',
        explanation: 'By Theorem 8.1 for obtuse triangles, c² = a² + b² + 2ax.'
      },
      {
        id: 'm8-q2',
        questionNumber: 2,
        question: 'In an acute angled triangle, side opposite to acute angle c satisfies:',
        options: [
          { key: 'a', text: 'c² = a² + b²' },
          { key: 'b', text: 'c² = a² + b² + 2ax' },
          { key: 'c', text: 'c² = a² + b² - 2ax' },
          { key: 'd', text: 'c² = 2ab' }
        ],
        correctAnswer: 'c',
        explanation: 'By Theorem 8.2 for acute triangles, c² is diminished by 2ax.'
      },
      {
        id: 'm8-q3',
        questionNumber: 3,
        question: 'The projection of a vertical line segment on a horizontal line is a:',
        options: [
          { key: 'a', text: 'Line of same length' },
          { key: 'b', text: 'Single point (length = 0)' },
          { key: 'c', text: 'Ray' },
          { key: 'd', text: 'Circle' }
        ],
        correctAnswer: 'b',
        explanation: 'Both endpoints project to the exact same foot point, so length of projection is zero.'
      }
    ]
  }
];
