import { Chapter } from '../../types/book';

export const UNIT_9_13: Chapter[] = [
  {
    id: 'math-u9',
    number: 9,
    title: 'Chords of a Circle',
    urduTitle: 'دائرے کے وتر اور قطعات (مع اہم مسئلے)',
    description: 'Circle geometry, chords, diameters, perpendicular from center to a chord, equidistant chords, non-collinear points, and compulsory Board Theorem 9.1 and 9.2.',
    summary: 'A circle is the locus of a moving point in a plane which remains at a constant distance (radius r) from a fixed point (center O). A chord is a line segment joining any two points on a circle; the chord passing through the center is the diameter (d = 2r) and is the longest chord. Theorem 9.1: One and only one circle can pass through three non-collinear points. Theorem 9.2: A straight line drawn from the center of a circle to bisect a chord (which is not a diameter) is at right angles to the chord. Theorem 9.4: Two congruent chords of a circle are equidistant from the center. Board Examination Question 9 is compulsory and includes a theorem from this chapter!',
    shortQuestions: [
      {
        id: 'm9-sq1',
        questionNumber: 'Q.1',
        question: 'Define a Circle, Chord, and Diameter.',
        answer: 'A Circle is the set of all points in a plane at a constant distance (radius) from a fixed point (center). A Chord is a line segment joining any two points on a circle. A Diameter is a chord that passes through the center of the circle, having length 2r.'
      },
      {
        id: 'm9-sq2',
        questionNumber: 'Q.2',
        question: 'Differentiate between an Arc, a Sector, and a Segment of a circle.',
        answer: 'An Arc is any portion of the circumference. A Sector is the region enclosed by two radii and the arc intercepted by them (like a slice of pizza). A Segment is the region bounded by a chord and the arc subtended by it.'
      },
      {
        id: 'm9-sq3',
        questionNumber: 'Q.3',
        question: 'How many circles can pass through three non-collinear points?',
        answer: 'By Theorem 9.1, one and only one circle can pass through three non-collinear points. Its center is the intersection of the perpendicular bisectors of the line segments joining the points.'
      },
      {
        id: 'm9-sq4',
        questionNumber: 'Q.4',
        question: 'State Theorem 9.2 regarding perpendicular from center to a chord.',
        answer: 'Theorem 9.2: A straight line, drawn from the center of a circle to bisect a chord (which is not a diameter) is perpendicular to the chord.'
      },
      {
        id: 'm9-sq5',
        questionNumber: 'Q.5',
        question: 'What is the relation between two chords that are equidistant from the center?',
        answer: 'Two chords of a circle that are equidistant from the center are equal in length (congruent): if distance d₁ = d₂, then chord length c₁ = c₂.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm9-eq1',
        questionNumber: 'Compulsory Theorem 9.2',
        question: 'Prove that a straight line drawn from the center of a circle to bisect a chord (which is not a diameter) is at right angles to the chord.',
        answerReference: 'Given: M is the midpoint of any chord AB of a circle with center O, where chord AB is not a diameter of the circle.\nTo Prove: OM ⊥ AB (i.e. ∠OMA = ∠OMB = 90°).\nConstruction: Join O to point A and O to point B.\nProof:\nIn ΔOAM and ΔOBM:\n1) m OA = m OB (radii of the same circle)\n2) m AM = m BM (given, M is midpoint of AB)\n3) m OM = m OM (common side)\nTherefore, ΔOAM ≅ ΔOBM (S.S.S postulate).\nHence, ∠OMA ≅ ∠OMB (corresponding angles of congruent triangles)  --- (1)\nSince A-M-B is a straight line, ∠OMA and ∠OMB form a linear pair:\nm∠OMA + m∠OMB = 180°  --- (2)\nFrom (1) and (2): m∠OMA = m∠OMB = 180° / 2 = 90°.\nThus, OM is perpendicular to AB (OM ⊥ AB). (Proved)',
        guidance: 'Draw circle, chord AB, midpoint M, and dashed radii OA, OB.'
      },
      {
        id: 'm9-eq2',
        questionNumber: 'Compulsory Theorem 9.4',
        question: 'Prove that equal chords of a circle are equidistant from the center.',
        answerReference: 'Given: AB and CD are two equal chords of a circle with center O. OH ⊥ AB and OK ⊥ CD.\nTo Prove: m OH = m OK (chords are equidistant from O).\nConstruction: Join O to A and O to C, forming right triangles OHA and OKC.\nProof:\nOH bisects AB ⇒ AH = 1/2 AB (perpendicular from center bisects chord).\nOK bisects CD ⇒ CK = 1/2 CD.\nSince AB = CD (given) ⇒ AH = CK  --- (1)\nIn right ΔOHA and right ΔOKC:\nm OA = m OC (radii of same circle, hypotenuse)\nm AH = m CK (from equation 1)\nTherefore, ΔOHA ≅ ΔOKC (H.S. Postulate).\nHence, m OH = m OK (corresponding sides). (Proved)',
        guidance: 'Use Hypotenuse-Side theorem for right triangles.'
      }
    ],
    quizzes: [
      {
        id: 'm9-q1',
        questionNumber: 1,
        question: 'A line segment joining any two points of a circle is called:',
        options: [
          { key: 'a', text: 'Radius' },
          { key: 'b', text: 'Chord' },
          { key: 'c', text: 'Diameter' },
          { key: 'd', text: 'Secant' }
        ],
        correctAnswer: 'b',
        explanation: 'Any line segment having both endpoints on the circle is a chord.'
      },
      {
        id: 'm9-q2',
        questionNumber: 2,
        question: 'The chord which passes through the center of a circle is called:',
        options: [
          { key: 'a', text: 'Radius' },
          { key: 'b', text: 'Diameter' },
          { key: 'c', text: 'Tangent' },
          { key: 'd', text: 'Arc' }
        ],
        correctAnswer: 'b',
        explanation: 'The diameter is the longest chord of a circle passing through its center.'
      },
      {
        id: 'm9-q3',
        questionNumber: 3,
        question: 'How many circles can pass through three non-collinear points?',
        options: [
          { key: 'a', text: 'One' },
          { key: 'b', text: 'Two' },
          { key: 'c', text: 'Three' },
          { key: 'd', text: 'Infinitely many' }
        ],
        correctAnswer: 'a',
        explanation: 'By Theorem 9.1, exactly one unique circle passes through three non-collinear points.'
      },
      {
        id: 'm9-q4',
        questionNumber: 4,
        question: 'A line drawn from center to bisect a chord is:',
        options: [
          { key: 'a', text: 'Parallel to chord' },
          { key: 'b', text: 'Perpendicular to chord' },
          { key: 'c', text: 'Equal to chord' },
          { key: 'd', text: 'Tangent to chord' }
        ],
        correctAnswer: 'b',
        explanation: 'Theorem 9.2: The line from center bisecting a chord is perpendicular to the chord.'
      }
    ]
  },
  {
    id: 'math-u10',
    number: 10,
    title: 'Tangent to a Circle',
    urduTitle: 'دائرے پر مماس',
    description: 'Secant line, tangent line, point of contact, radius-tangent perpendicularity, tangents drawn from an external point to a circle, length of tangents.',
    summary: 'A secant is a straight line that cuts a circle in two distinct points. A tangent is a straight line that touches the circle at exactly one point, known as the point of contact (point of tangency). Theorem 10.1: If a line is drawn perpendicular to a radial segment at its outer extremity, it is tangent to the circle at that point. Theorem 10.2: Two tangents drawn from an external point to a circle are equal in length and subtend equal angles at the center.',
    shortQuestions: [
      {
        id: 'm10-sq1',
        questionNumber: 'Q.1',
        question: 'Differentiate between a Secant line and a Tangent line to a circle.',
        answer: 'A Secant line intersects a circle at two distinct points, passing completely through it. A Tangent line touches the circle at exactly one single point and never enters the interior of the circle.'
      },
      {
        id: 'm10-sq2',
        questionNumber: 'Q.2',
        question: 'What is the Point of Tangency (Point of Contact)?',
        answer: 'The unique point where the tangent line touches the circumference of the circle is called the Point of Contact or Point of Tangency.'
      },
      {
        id: 'm10-sq3',
        questionNumber: 'Q.3',
        question: 'State the relation between a tangent and the radius at the point of contact.',
        answer: 'The tangent to a circle at any point is always perpendicular to the radius drawn through that point of contact (Radius ⊥ Tangent).'
      },
      {
        id: 'm10-sq4',
        questionNumber: 'Q.4',
        question: 'How many tangents can be drawn to a circle from an external point?',
        answer: 'Exactly two tangents can be drawn to a circle from an external point, and by Theorem 10.2, their lengths from the external point to points of contact are equal.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm10-eq1',
        questionNumber: 'Extensive Q.1 (Theorem 10.2)',
        question: 'Prove that the lengths of two tangents drawn from an external point to a circle are equal.',
        answerReference: 'Given: Two tangents PA and PB are drawn from an external point P to a circle with center O, touching the circle at A and B respectively.\nTo Prove: m PA = m PB.\nConstruction: Join O to P, O to A, and O to B, forming two right-angled triangles ΔOAP and ΔOBP.\nProof:\nSince radius is perpendicular to tangent at point of contact:\n∠OAP = 90° and ∠OBP = 90°.\nIn right ΔOAP and right ΔOBP:\n1) m OA = m OB (radii of the same circle)\n2) m OP = m OP (common hypotenuse)\nTherefore, ΔOAP ≅ ΔOBP (Hypotenuse-Side H.S. Congruence Theorem).\nHence, m PA = m PB (corresponding sides of congruent triangles). (Proved)',
        guidance: 'Standard 4-mark board theorem. Draw point P, circle O, and tangents PA and PB.'
      }
    ],
    quizzes: [
      {
        id: 'm10-q1',
        questionNumber: 1,
        question: 'A straight line which intersects a circle at two distinct points is called a:',
        options: [
          { key: 'a', text: 'Tangent' },
          { key: 'b', text: 'Secant' },
          { key: 'c', text: 'Radius' },
          { key: 'd', text: 'Normal' }
        ],
        correctAnswer: 'b',
        explanation: 'A secant line passes through two points on a circle.'
      },
      {
        id: 'm10-q2',
        questionNumber: 2,
        question: 'A tangent line touches the circle at:',
        options: [
          { key: 'a', text: 'One point only' },
          { key: 'b', text: 'Two points' },
          { key: 'c', text: 'Three points' },
          { key: 'd', text: 'Infinite points' }
        ],
        correctAnswer: 'a',
        explanation: 'A tangent touches at exactly one single point of tangency.'
      },
      {
        id: 'm10-q3',
        questionNumber: 3,
        question: 'The angle between tangent line and radial segment at point of contact is:',
        options: [
          { key: 'a', text: '45°' },
          { key: 'b', text: '60°' },
          { key: 'c', text: '90°' },
          { key: 'd', text: '180°' }
        ],
        correctAnswer: 'c',
        explanation: 'Radius and tangent are perpendicular (90°) at point of contact.'
      },
      {
        id: 'm10-q4',
        questionNumber: 4,
        question: 'Two tangents drawn from an external point to a circle are:',
        options: [
          { key: 'a', text: 'Equal in length' },
          { key: 'b', text: 'Parallel' },
          { key: 'c', text: 'Perpendicular' },
          { key: 'd', text: 'Unequal' }
        ],
        correctAnswer: 'a',
        explanation: 'By Theorem 10.2, both tangent segments are equal in length.'
      }
    ]
  },
  {
    id: 'math-u11',
    number: 11,
    title: 'Chords and Arcs',
    urduTitle: 'وتر اور قوسیں',
    description: 'Arcs and corresponding chords, congruence of circles, equal arcs subtending equal central angles, equal chords subtending equal arcs.',
    summary: 'Two circles are congruent if and only if they have equal radii. An arc of a circle is characterized by its degree measure and length. Theorem 11.1: If two arcs of a circle (or congruent circles) are congruent, then the corresponding chords are equal. Theorem 11.2: If two chords of a circle are equal, then their corresponding arcs (minor, major, or semi-circular) are congruent. Theorem 11.4: Equal chords of a circle subtend equal angles at the center.',
    shortQuestions: [
      {
        id: 'm11-sq1',
        questionNumber: 'Q.1',
        question: 'Define Congruent Circles.',
        answer: 'Two or more circles are said to be congruent circles if their radii are equal in length (r₁ = r₂).'
      },
      {
        id: 'm11-sq2',
        questionNumber: 'Q.2',
        question: 'State Theorem 11.1 connecting equal arcs and chords.',
        answer: 'If two arcs of a circle (or of congruent circles) are congruent, then the corresponding chords are equal in length.'
      },
      {
        id: 'm11-sq3',
        questionNumber: 'Q.3',
        question: 'What angle is subtended at the center by two equal chords?',
        answer: 'Equal chords of a circle subtend equal angles at the center of the circle (Theorem 11.4).'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm11-eq1',
        questionNumber: 'Extensive Q.1 (Theorem 11.4)',
        question: 'Prove that equal chords of a circle subtend equal angles at the center.',
        answerReference: 'Given: AB and CD are two equal chords of a circle with center O (m AB = m CD).\nTo Prove: m∠AOB = m∠COD (central angles subtended by chords are equal).\nConstruction: Join O to A, B, C, and D, forming ΔOAB and ΔOCD.\nProof:\nIn ΔOAB and ΔOCD:\n1) m OA = m OC (radii of the same circle)\n2) m OB = m OD (radii of the same circle)\n3) m AB = m CD (given, chords are equal)\nTherefore, ΔOAB ≅ ΔOCD (S.S.S Congruence Theorem).\nHence, m∠AOB = m∠COD (corresponding angles of congruent triangles). (Proved)',
        guidance: 'Clear S.S.S proof with central angle diagram.'
      }
    ],
    quizzes: [
      {
        id: 'm11-q1',
        questionNumber: 1,
        question: 'Two circles are congruent if their:',
        options: [
          { key: 'a', text: 'Centers coincide' },
          { key: 'b', text: 'Radii are equal' },
          { key: 'c', text: 'Chords are parallel' },
          { key: 'd', text: 'Diameters are unequal' }
        ],
        correctAnswer: 'b',
        explanation: 'Equal radii guarantee congruent circles.'
      },
      {
        id: 'm11-q2',
        questionNumber: 2,
        question: 'Equal chords of a circle subtend equal angles at the:',
        options: [
          { key: 'a', text: 'Center' },
          { key: 'b', text: 'Tangent' },
          { key: 'c', text: 'Secant' },
          { key: 'd', text: 'Outside' }
        ],
        correctAnswer: 'a',
        explanation: 'Theorem 11.4 confirms equal central angles.'
      }
    ]
  },
  {
    id: 'math-u12',
    number: 12,
    title: 'Angle in a Segment of a Circle',
    urduTitle: 'دائرے کے قطعہ میں بننے والا زاویہ (مع لازمی مسئلے)',
    description: 'Central and inscribed angles, measure of central angle vs inscribed angle (∠AOB = 2∠APB), angle in a semi-circle (90°), cyclic quadrilaterals (opposite angles supplementary), compulsory Board Theorem 12.1.',
    summary: 'A central angle has its vertex at the center of the circle, while an inscribed angle has its vertex on the circumference with chords as its sides. Compulsory Board Theorem 12.1: The measure of a central angle of a minor arc of a circle is double that of the angle subtended by the corresponding major arc: ∠AOB = 2∠APB. Theorem 12.2: Any two angles in the same segment of a circle are equal. Theorem 12.3: The angle in a semi-circle is a right angle (90°); the angle in a segment greater than semi-circle is acute (< 90°); the angle in a segment less than semi-circle is obtuse (> 90°). Theorem 12.4: The opposite angles of any cyclic quadrilateral are supplementary (sum = 180°).',
    shortQuestions: [
      {
        id: 'm12-sq1',
        questionNumber: 'Q.1',
        question: 'Define Central Angle and Inscribed Angle.',
        answer: 'A Central Angle is an angle whose vertex is at the center of the circle and its arms are radii. An Inscribed Angle is an angle whose vertex lies on the circumference of the circle and whose arms are chords of the circle.'
      },
      {
        id: 'm12-sq2',
        questionNumber: 'Q.2',
        question: 'State the relation between central angle and inscribed angle subtended by the same arc.',
        answer: 'The measure of a central angle of a minor arc is double the angle subtended by the same arc on the remaining part of the circle: m∠AOB = 2 × m∠APB.'
      },
      {
        id: 'm12-sq3',
        questionNumber: 'Q.3',
        question: 'What is the measure of an angle in a semi-circle?',
        answer: 'The angle inscribed in a semi-circle is always a right angle (90°).'
      },
      {
        id: 'm12-sq4',
        questionNumber: 'Q.4',
        question: 'What is a Cyclic Quadrilateral? State the theorem regarding its opposite angles.',
        answer: 'A quadrilateral is called cyclic if all four of its vertices lie on the circumference of a circle. Theorem 12.4: The opposite angles of any cyclic quadrilateral are supplementary (their sum is 180°: ∠A + ∠C = 180° and ∠B + ∠D = 180°).'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm12-eq1',
        questionNumber: 'Compulsory Theorem 12.1',
        question: 'Prove that the measure of a central angle of a minor arc of a circle is double that of the angle subtended by the corresponding major arc.',
        answerReference: 'Given: Arc AB is a minor arc of a circle with center O. ∠AOB is the central angle, and ∠APB is an inscribed angle subtended by arc AB at any point P on the major arc.\nTo Prove: m∠AOB = 2 m∠APB.\nConstruction: Join P to O and produce it to meet the circle at point D. Label angles ∠1, ∠2, ∠3, ∠4, ∠5, ∠6.\nProof:\nIn ΔOAP, OA = OP (radii of same circle) ⇒ ∠1 = ∠2.\nIn ΔOAP, exterior angle ∠3 = ∠1 + ∠2 = 2∠1  --- (1)\nSimilarly in ΔOBP, OB = OP (radii of same circle) ⇒ ∠4 = ∠5.\nExterior angle ∠6 = ∠4 + ∠5 = 2∠4  --- (2)\nAdding equations (1) and (2):\nm∠3 + m∠6 = 2∠1 + 2∠4 = 2(∠1 + ∠4)\nSince m∠3 + m∠6 = m∠AOB and ∠1 + ∠4 = m∠APB:\nm∠AOB = 2 m∠APB. (Proved)',
        guidance: 'This is the most famous compulsory theorem for Matric Board examinations. Draw clear labeled angles.'
      },
      {
        id: 'm12-eq2',
        questionNumber: 'Compulsory Theorem 12.4',
        question: 'Prove that the opposite angles of any quadrilateral inscribed in a circle (cyclic quadrilateral) are supplementary.',
        answerReference: 'Given: ABCD is a cyclic quadrilateral inscribed in a circle with center O.\nTo Prove: m∠A + m∠C = 180° and m∠B + m∠D = 180°.\nConstruction: Join O to B and O to D.\nProof:\nArc BCD subtends central angle ∠BOD and inscribed angle ∠A.\nBy Theorem 12.1: m∠BOD = 2 m∠A  --- (1)\nReflex angle ∠BOD is subtended by arc BAD, which subtends inscribed angle ∠C:\nReflex m∠BOD = 2 m∠C  --- (2)\nAdding (1) and (2):\nm∠BOD + Reflex m∠BOD = 2(m∠A + m∠C)\nSince complete angle around point O is 360°:\n360° = 2(m∠A + m∠C) ⇒ m∠A + m∠C = 360° / 2 = 180°.\nSince sum of all 4 interior angles of quadrilateral is 360°:\nm∠B + m∠D = 360° - (m∠A + m∠C) = 360° - 180° = 180°.\nHence, opposite angles are supplementary. (Proved)',
        guidance: 'Use central angle and reflex central angle sum = 360°.'
      }
    ],
    quizzes: [
      {
        id: 'm12-q1',
        questionNumber: 1,
        question: 'The angle inscribed in a semi-circle is:',
        options: [
          { key: 'a', text: 'π/2 (90°)' },
          { key: 'b', text: 'π (180°)' },
          { key: 'c', text: 'π/4 (45°)' },
          { key: 'd', text: 'π/3 (60°)' }
        ],
        correctAnswer: 'a',
        explanation: 'Theorem 12.3 proves that the angle in a semi-circle is a right angle (90°).'
      },
      {
        id: 'm12-q2',
        questionNumber: 2,
        question: 'If central angle ∠AOB is 80°, then the inscribed angle subtended by same arc is:',
        options: [
          { key: 'a', text: '160°' },
          { key: 'b', text: '40°' },
          { key: 'c', text: '80°' },
          { key: 'd', text: '20°' }
        ],
        correctAnswer: 'b',
        explanation: 'Central angle = 2 × inscribed angle ⇒ inscribed angle = 80° / 2 = 40°.'
      },
      {
        id: 'm12-q3',
        questionNumber: 3,
        question: 'The opposite angles of a cyclic quadrilateral are:',
        options: [
          { key: 'a', text: 'Complementary (90°)' },
          { key: 'b', text: 'Supplementary (180°)' },
          { key: 'c', text: 'Equal' },
          { key: 'd', text: 'Right angles' }
        ],
        correctAnswer: 'b',
        explanation: 'Theorem 12.4: sum of opposite angles of a cyclic quadrilateral is 180° (supplementary).'
      }
    ]
  },
  {
    id: 'math-u13',
    number: 13,
    title: 'Practical Geometry - Circles',
    urduTitle: 'عملی جیومیٹری - دائرے',
    description: 'Circumcircle and circumcenter, Incircle and incenter, Escribed circle (Excircle), direct common tangents, transverse common tangents, circle constructions.',
    summary: 'Practical geometry deals with geometric constructions using straightedge and compass. Circumscribed circle (Circumcircle): passes through all three vertices of a triangle; its center (Circumcenter) is the intersection of perpendicular bisectors of the sides. Inscribed circle (Incircle): touches all three sides of a triangle internally; its center (Incenter) is the intersection of internal angle bisectors. Escribed circle (Excircle): touches one side externally and the extensions of the other two sides; its center is the intersection of two external angle bisectors. Tangents: Direct common tangents do not cross the segment joining centers; Transverse common tangents cross the segment joining centers.',
    shortQuestions: [
      {
        id: 'm13-sq1',
        questionNumber: 'Q.1',
        question: 'Define Circumscribed Circle (Circumcircle) and Circumcenter.',
        answer: 'A circle passing through all three vertices of a triangle is called a Circumscribed circle (Circumcircle). Its center is called the Circumcenter, found by the point of concurrency of the perpendicular bisectors of the triangle\'s sides.'
      },
      {
        id: 'm13-sq2',
        questionNumber: 'Q.2',
        question: 'Define Inscribed Circle (Incircle) and Incenter.',
        answer: 'A circle drawn inside a triangle that touches all three sides internally is called an Inscribed circle (Incircle). Its center is called the Incenter, found by the point of concurrency of the internal bisectors of the triangle\'s angles.'
      },
      {
        id: 'm13-sq3',
        questionNumber: 'Q.3',
        question: 'Define Escribed Circle (Excircle) and Excenter.',
        answer: 'A circle that touches one side of a triangle externally and the other two sides produced is called an Escribed circle (Excircle). Its center is called the Excenter, obtained by intersecting bisectors of two exterior angles.'
      },
      {
        id: 'm13-sq4',
        questionNumber: 'Q.4',
        question: 'Differentiate between Direct and Transverse Common Tangents.',
        answer: 'Direct common tangents are tangents to two circles where the centers lie on the same side of the tangent line (they do not intersect the line segment joining centers). Transverse common tangents cross each other and intersect the line segment joining the centers between the two circles.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'm13-eq1',
        questionNumber: 'Extensive Q.1 (Ex 13.1 / 13.2)',
        question: 'Describe step-by-step how to construct an Incircle in a given triangle ABC.',
        answerReference: 'Steps of Construction:\n1) Draw triangle ABC with given measurements using ruler and compass.\n2) Draw internal angle bisectors of angle B and angle C using compass.\n3) Mark the point of intersection of these two angle bisectors as I (Incenter).\n4) From point I, draw a perpendicular ID onto side BC (using compass).\n5) With center I and radius equal to length m ID, draw a circle.\nConclusion: The drawn circle touches all three sides AB, BC, and CA internally and is the required Incircle.',
        guidance: 'Always mention steps of construction with numbered points.'
      },
      {
        id: 'm13-eq2',
        questionNumber: 'Extensive Q.2 (Ex 13.3)',
        question: 'Explain how to draw two transverse common tangents to two unequal circles.',
        answerReference: 'Steps of Construction:\n1) Let two circles have centers A and B with radii r₁ and r₂ (r₁ > r₂), and distance between centers = d.\n2) Draw a line segment AB of length d.\n3) With center A, draw an auxiliary circle of radius R = r₁ + r₂.\n4) Bisect line segment AB to find midpoint M. With center M and radius MA = MB, draw a semi-circle intersecting the auxiliary circle at point P.\n5) Join A to P, cutting the first circle at point T₁.\n6) Through B, draw a line parallel to AP in opposite direction, cutting the second circle at T₂.\n7) Join T₁ and T₂. The line T₁T₂ is the required transverse common tangent.',
        guidance: 'Highlight that auxiliary circle has radius (r₁ + r₂) for transverse tangents.'
      }
    ],
    quizzes: [
      {
        id: 'm13-q1',
        questionNumber: 1,
        question: 'The point of concurrency of internal angle bisectors of a triangle is the center of:',
        options: [
          { key: 'a', text: 'Circumcircle' },
          { key: 'b', text: 'Incircle' },
          { key: 'c', text: 'Excircle' },
          { key: 'd', text: 'Orthocenter' }
        ],
        correctAnswer: 'b',
        explanation: 'Internal angle bisectors intersect at the Incenter of the Incircle.'
      },
      {
        id: 'm13-q2',
        questionNumber: 2,
        question: 'The point of concurrency of the perpendicular bisectors of sides of a triangle is called:',
        options: [
          { key: 'a', text: 'Incenter' },
          { key: 'b', text: 'Circumcenter' },
          { key: 'c', text: 'Excenter' },
          { key: 'd', text: 'Centroid' }
        ],
        correctAnswer: 'b',
        explanation: 'Right bisectors of sides intersect at the Circumcenter of the Circumcircle.'
      },
      {
        id: 'm13-q3',
        questionNumber: 3,
        question: 'How many escribed circles can be drawn for a single triangle?',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'c',
        explanation: 'One excircle opposite to each of the three sides, making a total of 3 excircles.'
      },
      {
        id: 'm13-q4',
        questionNumber: 4,
        question: 'Common tangents of two circles which intersect the segment joining their centers are called:',
        options: [
          { key: 'a', text: 'Direct common tangents' },
          { key: 'b', text: 'Transverse common tangents' },
          { key: 'c', text: 'Secants' },
          { key: 'd', text: 'Chords' }
        ],
        correctAnswer: 'b',
        explanation: 'Transverse common tangents cross between the two circles.'
      }
    ]
  }
];
