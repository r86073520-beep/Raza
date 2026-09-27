import { Chapter } from '../../types/book';

export const UNIT_13_15: Chapter[] = [
  {
    id: 'phy-u13',
    number: 13,
    title: 'Electrostatics',
    urduTitle: 'ساکن برقیات (الیکٹرو سٹیٹکس)',
    description: 'Electric charge, Coulomb’s law F = k(q₁q₂)/r², electric field and field lines, electric potential V = W/q, capacitors C = Q/V, combinations in series and parallel.',
    summary: 'Electrostatics studies static electric charges. Like charges repel; unlike charges attract. Coulomb\'s law states F = k(q₁q₂)/r², where k = 9 × 10⁹ N m² C⁻² in air/vacuum. Electric field strength E = F/q₀ (unit N C⁻¹ or V m⁻¹). Electric potential V = W/q (unit Volt = J C⁻¹). A capacitor stores charge and electrical energy; capacitance C = Q/V (unit Farad = C V⁻¹). In parallel: C_eq = C₁ + C₂ + C₃. In series: 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃.',
    shortQuestions: [
      {
        id: 'p13-sq1',
        questionNumber: 'Q.1',
        question: 'State Coulomb’s Law and write its mathematical equation.',
        answer: 'Coulomb’s law states that the force of attraction or repulsion between two point charges is directly proportional to product of their magnitudes and inversely proportional to square of distance between them: F = k(q₁q₂)/r².'
      },
      {
        id: 'p13-sq2',
        questionNumber: 'Q.2',
        question: 'Define electric field intensity (E) and give its SI unit.',
        answer: 'Electric field intensity is the electric force experienced per unit positive test charge placed at that point: E = F/q₀. Its SI unit is Newton per coulomb (N C⁻¹).'
      },
      {
        id: 'p13-sq3',
        questionNumber: 'Q.3',
        question: 'Define capacitance of a capacitor and the unit Farad.',
        answer: 'Capacitance is the ability of a capacitor to store charge: C = Q/V. One Farad is the capacitance of a capacitor when one coulomb of charge produces a potential difference of one volt between its plates.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p13-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Derive the equivalent capacitance for parallel combination of capacitors.',
        answerReference: 'In parallel combination, plates of each capacitor are connected across common voltage V: V₁ = V₂ = V₃ = V. Total charge Q = Q₁ + Q₂ + Q₃. Since Q = CV: C_eq V = C₁V + C₂V + C₃V ⇒ C_eq = C₁ + C₂ + C₃. Thus, equivalent capacitance is sum of individual capacitances and is greater than any individual capacitor.',
        guidance: 'Draw circuit diagram with three parallel capacitors connected to DC battery.'
      }
    ],
    quizzes: [
      {
        id: 'p13-q1',
        questionNumber: 1,
        question: 'A positive electric charge:',
        options: [
          { key: 'a', text: 'repels other positive charge' },
          { key: 'b', text: 'attracts other positive charge' },
          { key: 'c', text: 'attracts a neutral charge' },
          { key: 'd', text: 'repels a neutral charge' }
        ],
        correctAnswer: 'a',
        explanation: 'Like charges always repel each other.'
      },
      {
        id: 'p13-q2',
        questionNumber: 2,
        question: 'An object gains excess negative charge after being rubbed against another object, which is:',
        options: [
          { key: 'a', text: 'neutral' },
          { key: 'b', text: 'negatively charged' },
          { key: 'c', text: 'positively charged' },
          { key: 'd', text: 'either a, b or c' }
        ],
        correctAnswer: 'b',
        explanation: 'Gaining excess electrons makes the object negatively charged.'
      },
      {
        id: 'p13-q3',
        questionNumber: 3,
        question: 'Uncharged objects A and B are rubbed together. When B is brought near negative object C, they repel. What is true about A?',
        options: [
          { key: 'a', text: 'remains uncharged' },
          { key: 'b', text: 'becomes positively charged' },
          { key: 'c', text: 'becomes negatively charged' },
          { key: 'd', text: 'unpredictable' }
        ],
        correctAnswer: 'b',
        explanation: 'Object B repels negative C, so B is negative. By conservation of charge, object A must be positively charged.'
      },
      {
        id: 'p13-q4',
        questionNumber: 4,
        question: 'When you rub a plastic rod with hair and it attracts paper bits, it indicates:',
        options: [
          { key: 'a', text: 'the rod and the paper are oppositely charged' },
          { key: 'b', text: 'the rod acquires a positive charge' },
          { key: 'c', text: 'the rod and the paper have the same charges' },
          { key: 'd', text: 'the rod acquires a negative charge' }
        ],
        correctAnswer: 'a',
        explanation: 'Electrostatic induction produces opposite induced charges on paper bits, creating attractive forces.'
      },
      {
        id: 'p13-q5',
        questionNumber: 5,
        question: 'According to Coulomb\'s law, as the separation between two opposite charges increases, their attraction:',
        options: [
          { key: 'a', text: 'increases' },
          { key: 'b', text: 'decreases' },
          { key: 'c', text: 'remains unchanged' },
          { key: 'd', text: 'cannot be determined' }
        ],
        correctAnswer: 'b',
        explanation: 'F ∝ 1/r²; increasing distance r decreases electrostatic force.'
      },
      {
        id: 'p13-q6',
        questionNumber: 6,
        question: 'Coulomb\'s law is strictly valid for charges which are:',
        options: [
          { key: 'a', text: 'moving and point charges' },
          { key: 'b', text: 'moving and non-point charges' },
          { key: 'c', text: 'stationary and point charges' },
          { key: 'd', text: 'stationary and large size charges' }
        ],
        correctAnswer: 'c',
        explanation: 'Coulomb\'s law applies to stationary electrostatic point charges.'
      },
      {
        id: 'p13-q7',
        questionNumber: 7,
        question: 'Two charges 4 cm apart are moved closer to 1 cm apart. The electrostatic force between them is:',
        options: [
          { key: 'a', text: '4 times smaller than before' },
          { key: 'b', text: '4 times larger than before' },
          { key: 'c', text: '8 times larger than before' },
          { key: 'd', text: '16 times larger than before' }
        ],
        correctAnswer: 'd',
        explanation: 'Distance reduced by 4 (from 4 cm to 1 cm) increases force by (4)² = 16 times.'
      },
      {
        id: 'p13-q8',
        questionNumber: 8,
        question: 'Five joules of work is needed to shift 10 C of charge between two points. The potential difference is:',
        options: [
          { key: 'a', text: '0.5 V' },
          { key: 'b', text: '2 V' },
          { key: 'c', text: '5 V' },
          { key: 'd', text: '10 V' }
        ],
        correctAnswer: 'a',
        explanation: 'V = W / q = 5 J / 10 C = 0.5 V.'
      },
      {
        id: 'p13-q9',
        questionNumber: 9,
        question: 'Two charged spheres are separated by 2 mm. Which pair produces the greatest attractive force?',
        options: [
          { key: 'a', text: '+1q and +4q' },
          { key: 'b', text: '-1q and -4q' },
          { key: 'c', text: '+2q and +2q' },
          { key: 'd', text: '+2q and -2q' }
        ],
        correctAnswer: 'd',
        explanation: 'Opposite charges (+2q and -2q) attract, with magnitude F ∝ (2)(2) = 4.'
      },
      {
        id: 'p13-q10',
        questionNumber: 10,
        question: 'Electric field lines:',
        options: [
          { key: 'a', text: 'always cross each other' },
          { key: 'b', text: 'never cross each other' },
          { key: 'c', text: 'cross each other in strong field' },
          { key: 'd', text: 'cross each other in weak field' }
        ],
        correctAnswer: 'b',
        explanation: 'Electric field lines never cross because E can have only one unique direction at any point.'
      },
      {
        id: 'p13-q11',
        questionNumber: 11,
        question: 'Capacitance of any capacitor is defined as:',
        options: [
          { key: 'a', text: 'V C' },
          { key: 'b', text: 'Q / V' },
          { key: 'c', text: 'Q V' },
          { key: 'd', text: 'V / Q' }
        ],
        correctAnswer: 'b',
        explanation: 'From Q = CV, capacitance C = Q/V.'
      },
      {
        id: 'p13-q12',
        questionNumber: 12,
        question: 'Capacitors are devices used to store:',
        options: [
          { key: 'a', text: 'current' },
          { key: 'b', text: 'voltage' },
          { key: 'c', text: 'charge (and electrostatic energy)' },
          { key: 'd', text: 'resistance' }
        ],
        correctAnswer: 'c',
        explanation: 'Capacitors store electric charge and potential energy.'
      },
      {
        id: 'p13-q13',
        questionNumber: 13,
        question: 'The S.I. unit of electric potential is:',
        options: [
          { key: 'a', text: 'watt' },
          { key: 'b', text: 'joule' },
          { key: 'c', text: 'coulomb' },
          { key: 'd', text: 'volt' }
        ],
        correctAnswer: 'd',
        explanation: 'Electric potential is measured in volts (V = J/C).'
      },
      {
        id: 'p13-q14',
        questionNumber: 14,
        question: 'The S.I. unit of capacitance is:',
        options: [
          { key: 'a', text: 'coulomb' },
          { key: 'b', text: 'farad' },
          { key: 'c', text: 'joule' },
          { key: 'd', text: 'watt' }
        ],
        correctAnswer: 'b',
        explanation: 'Capacitance is measured in farads (F).'
      },
      {
        id: 'p13-q15',
        questionNumber: 15,
        question: 'Number of factors which affect the ability of a capacitor to store charge is:',
        options: [
          { key: 'a', text: '2' },
          { key: 'b', text: '3' },
          { key: 'c', text: '4' },
          { key: 'd', text: '5' }
        ],
        correctAnswer: 'a',
        explanation: 'Area of plates, distance between plates, and medium (dielectric) between them.'
      },
      {
        id: 'p13-q16',
        questionNumber: 16,
        question: 'Three capacitors of 3 pF, 4 pF and 5 pF are connected in parallel with a 6 V battery. Total capacitance is:',
        options: [
          { key: 'a', text: '06 pF' },
          { key: 'b', text: '12 pF' },
          { key: 'c', text: '14 pF' },
          { key: 'd', text: '17 pF' }
        ],
        correctAnswer: 'b',
        explanation: 'In parallel: C_eq = 3 + 4 + 5 = 12 pF.'
      },
      {
        id: 'p13-q17',
        questionNumber: 17,
        question: 'The value of Coulomb constant k in S.I. units is:',
        options: [
          { key: 'a', text: '9 × 10⁹ Nm² C⁻²' },
          { key: 'b', text: '9 × 10⁹ Nm⁻² C⁻²' },
          { key: 'c', text: '9 × 10⁻⁹ m⁻² C⁻²' },
          { key: 'd', text: '9 × 10⁻⁹ Nm² C²' }
        ],
        correctAnswer: 'a',
        explanation: 'k = 1/(4πε₀) = 9 × 10⁹ N m² C⁻².'
      },
      {
        id: 'p13-q18',
        questionNumber: 18,
        question: 'The S.I. unit of Coulomb constant (k) is:',
        options: [
          { key: 'a', text: 'Nm² C⁻²' },
          { key: 'b', text: 'Nm² C²' },
          { key: 'c', text: 'Nm⁻² C⁻²' },
          { key: 'd', text: 'Nm⁻² C²' }
        ],
        correctAnswer: 'a',
        explanation: 'From F = kq₁q₂/r², k = Fr²/(q₁q₂) has units N m² C⁻².'
      },
      {
        id: 'p13-q19',
        questionNumber: 19,
        question: 'An electroscope is an instrument used to detect:',
        options: [
          { key: 'a', text: 'current' },
          { key: 'b', text: 'voltage' },
          { key: 'c', text: 'charge' },
          { key: 'd', text: 'electrons' }
        ],
        correctAnswer: 'c',
        explanation: 'The gold-leaf electroscope detects the presence and nature of electrostatic charge.'
      },
      {
        id: 'p13-q20',
        questionNumber: 20,
        question: 'If 4 coulombs of charge is stored on capacitor plates at 2 volts potential, its capacitance is:',
        options: [
          { key: 'a', text: '2 F' },
          { key: 'b', text: '4 F' },
          { key: 'c', text: '6 F' },
          { key: 'd', text: '8 F' }
        ],
        correctAnswer: 'a',
        explanation: 'C = Q / V = 4 C / 2 V = 2 Farad.'
      },
      {
        id: 'p13-q21',
        questionNumber: 21,
        question: 'To protect gold leaves in an electroscope from external disturbances, a grounded foil is made of:',
        options: [
          { key: 'a', text: 'aluminium' },
          { key: 'b', text: 'silver' },
          { key: 'c', text: 'copper' },
          { key: 'd', text: 'brass' }
        ],
        correctAnswer: 'a',
        explanation: 'Grounded aluminium foil lines the inside of the jar as an electrostatic shield.'
      },
      {
        id: 'p13-q22',
        questionNumber: 22,
        question: 'If 4 joules of work is done on a 2 coulomb charge against electric field, the electric potential is:',
        options: [
          { key: 'a', text: '1 volt' },
          { key: 'b', text: '2 volts' },
          { key: 'c', text: '4 volts' },
          { key: 'd', text: '8 volts' }
        ],
        correctAnswer: 'b',
        explanation: 'V = W / q = 4 J / 2 C = 2 V.'
      },
      {
        id: 'p13-q23',
        questionNumber: 23,
        question: 'Electric lines of force were first introduced by:',
        options: [
          { key: 'a', text: 'Newton' },
          { key: 'b', text: 'Einstein' },
          { key: 'c', text: 'Coulomb' },
          { key: 'd', text: 'Michael Faraday' }
        ],
        correctAnswer: 'd',
        explanation: 'Michael Faraday introduced electric and magnetic field lines as visual representations.'
      },
      {
        id: 'p13-q24',
        questionNumber: 24,
        question: 'How are electric lines of force arranged where the electric field is strong?',
        options: [
          { key: 'a', text: 'apart' },
          { key: 'b', text: 'from positive to negative' },
          { key: 'c', text: 'from negative to positive' },
          { key: 'd', text: 'closer' }
        ],
        correctAnswer: 'd',
        explanation: 'Density of field lines indicates field strength; lines are closer together in strong field regions.'
      },
      {
        id: 'p13-q25',
        questionNumber: 25,
        question: 'The formula of electric field intensity E is:',
        options: [
          { key: 'a', text: 'E = F q₀' },
          { key: 'b', text: 'F = E q₀' },
          { key: 'c', text: 'E = q₀ / F' },
          { key: 'd', text: 'E = F / q₀' }
        ],
        correctAnswer: 'd',
        explanation: 'Electric field intensity is force per unit charge: E = F/q₀.'
      },
      {
        id: 'p13-q26',
        questionNumber: 26,
        question: 'In a mica capacitor, the dielectric material is:',
        options: [
          { key: 'a', text: 'mica' },
          { key: 'b', text: 'plastic' },
          { key: 'c', text: 'paper' },
          { key: 'd', text: 'aluminium' }
        ],
        correctAnswer: 'a',
        explanation: 'Thin sheets of mineral mica serve as the dielectric.'
      },
      {
        id: 'p13-q27',
        questionNumber: 27,
        question: 'Which device is used to store charge?',
        options: [
          { key: 'a', text: 'resistor' },
          { key: 'b', text: 'capacitor' },
          { key: 'c', text: 'dielectric' },
          { key: 'd', text: 'fuse' }
        ],
        correctAnswer: 'b',
        explanation: 'A capacitor stores electrostatic charge on its conductive plates.'
      },
      {
        id: 'p13-q28',
        questionNumber: 28,
        question: 'The formula of electric potential is:',
        options: [
          { key: 'a', text: 'V = W / q' },
          { key: 'b', text: 'V = q W' },
          { key: 'c', text: 'V = q / W' },
          { key: 'd', text: 'V = 2qW' }
        ],
        correctAnswer: 'a',
        explanation: 'Potential V is work done per unit charge: V = W/q.'
      },
      {
        id: 'p13-q29',
        questionNumber: 29,
        question: 'The S.I. unit of electric field intensity is:',
        options: [
          { key: 'a', text: 'N C' },
          { key: 'b', text: 'N C⁻²' },
          { key: 'c', text: 'N C⁻¹' },
          { key: 'd', text: 'N² C⁻¹' }
        ],
        correctAnswer: 'c',
        explanation: 'Unit of E = F/q is Newton per Coulomb (N C⁻¹).'
      },
      {
        id: 'p13-q30',
        questionNumber: 30,
        question: 'The S.I. unit of electric charge is:',
        options: [
          { key: 'a', text: 'volt' },
          { key: 'b', text: 'coulomb' },
          { key: 'c', text: 'ampere' },
          { key: 'd', text: 'ohm' }
        ],
        correctAnswer: 'b',
        explanation: 'The SI unit of charge is the Coulomb (C).'
      },
      {
        id: 'p13-q31',
        questionNumber: 31,
        question: 'If the medium between two charges is air, the value of k in Coulomb\'s law is:',
        options: [
          { key: 'a', text: '9 × 10⁹ Nm² C⁻²' },
          { key: 'b', text: '9 × 10⁻⁸ Nm² C⁻²' },
          { key: 'c', text: '9 × 10⁹ Nm² C⁻²' },
          { key: 'd', text: '9 × 10⁻⁹ Nm² C⁻²' }
        ],
        correctAnswer: 'a',
        explanation: 'k = 9 × 10⁹ N m² C⁻².'
      },
      {
        id: 'p13-q32',
        questionNumber: 32,
        question: 'Coulomb\'s law is written as:',
        options: [
          { key: 'a', text: 'F = G (m₁m₂)/r²' },
          { key: 'b', text: 'F = qE' },
          { key: 'c', text: 'F = k (q₁q₂)/r²' },
          { key: 'd', text: 'F = k (q₁q₂)/r' }
        ],
        correctAnswer: 'c',
        explanation: 'Coulomb\'s law equation is F = k(q₁q₂)/r².'
      },
      {
        id: 'p13-q33',
        questionNumber: 33,
        question: 'Each bolt of lightning contains energy of approximately:',
        options: [
          { key: 'a', text: '200 million joule energy' },
          { key: 'b', text: '3000 million joule energy' },
          { key: 'c', text: '1000 million joule energy' },
          { key: 'd', text: '400 million joule energy' }
        ],
        correctAnswer: 'c',
        explanation: 'A typical lightning stroke discharges around 1,000 million joules (10⁹ J) of energy.'
      },
      {
        id: 'p13-q34',
        questionNumber: 34,
        question: 'In series combination of capacitors, each capacitor will carry the same:',
        options: [
          { key: 'a', text: 'voltage' },
          { key: 'b', text: 'charge' },
          { key: 'c', text: 'capacitance' },
          { key: 'd', text: 'charge and capacitance' }
        ],
        correctAnswer: 'b',
        explanation: 'In a series circuit, identical charge Q flows onto each consecutive plate.'
      },
      {
        id: 'p13-q35',
        questionNumber: 35,
        question: 'One micro ampere (1 μA) is equal to:',
        options: [
          { key: 'a', text: '10⁻³ A' },
          { key: 'b', text: '10⁻⁶ A' },
          { key: 'c', text: '10⁻⁹ A' },
          { key: 'd', text: '10⁻¹² A' }
        ],
        correctAnswer: 'b',
        explanation: 'Micro prefix represents 10⁻⁶.'
      },
      {
        id: 'p13-q36',
        questionNumber: 36,
        question: 'One nanofarad (1 nF) is equal to:',
        options: [
          { key: 'a', text: '1 × 10⁶ F' },
          { key: 'b', text: '1 × 10⁻⁹ F' },
          { key: 'c', text: '1 × 10⁻¹² F' },
          { key: 'd', text: '1 × 10⁻⁶ F' }
        ],
        correctAnswer: 'b',
        explanation: 'Nano prefix corresponds to 10⁻⁹.'
      },
      {
        id: 'p13-q37',
        questionNumber: 37,
        question: 'Basic combinations of capacitors are:',
        options: [
          { key: 'a', text: '2 (series and parallel)' },
          { key: 'b', text: '3' },
          { key: 'c', text: '4' },
          { key: 'd', text: '5' }
        ],
        correctAnswer: 'a',
        explanation: 'The two fundamental combinations are series and parallel.'
      },
      {
        id: 'p13-q38',
        questionNumber: 38,
        question: 'Number of electrons that together constitute 1 coulomb of charge is:',
        options: [
          { key: 'a', text: '9.9 × 10⁹' },
          { key: 'b', text: '6.25 × 10¹⁸' },
          { key: 'c', text: '1.6 × 10¹⁹' },
          { key: 'd', text: '3 × 10⁸' }
        ],
        correctAnswer: 'b',
        explanation: 'n = Q / e = 1 / (1.6 × 10⁻¹⁹) = 6.25 × 10¹⁸ electrons.'
      },
      {
        id: 'p13-q39',
        questionNumber: 39,
        question: 'In parallel combination of capacitors, each capacitor will have the same:',
        options: [
          { key: 'a', text: 'voltage' },
          { key: 'b', text: 'charge' },
          { key: 'c', text: 'capacitance' },
          { key: 'd', text: 'charge and capacitance' }
        ],
        correctAnswer: 'a',
        explanation: 'In parallel, all capacitor terminals are connected across the same potential difference.'
      },
      {
        id: 'p13-q40',
        questionNumber: 40,
        question: 'Capacitors can be used to differentiate between high frequency and low frequency signals in a:',
        options: [
          { key: 'a', text: 'series circuit' },
          { key: 'b', text: 'parallel circuit' },
          { key: 'c', text: 'filter circuit' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'c',
        explanation: 'Filter circuits exploit capacitive reactance to block or pass specific frequency bands.'
      },
      {
        id: 'p13-q41',
        questionNumber: 41,
        question: 'If three capacitors having capacitance 3 pF, 4 pF and 5 pF are connected in series, equivalent capacitance is:',
        options: [
          { key: 'a', text: '1.3 pF' },
          { key: 'b', text: '2.6 pF' },
          { key: 'c', text: '12 pF' },
          { key: 'd', text: '6 pF' }
        ],
        correctAnswer: 'a',
        explanation: '1/C_eq = 1/3 + 1/4 + 1/5 = (20 + 15 + 12)/60 = 47/60 ⇒ C_eq = 60/47 ≈ 1.3 pF.'
      }
    ]
  },
  {
    id: 'phy-u14',
    number: 14,
    title: 'Current Electricity',
    urduTitle: 'برقی رو (کرنٹ الیکٹریسٹی)',
    description: 'Electric current I = Q/t, potential difference, electromotive force (e.m.f), Ohm’s law V = IR, series and parallel circuits, electrical power P = VI, and kWh energy billing.',
    summary: 'Current is the rate of flow of electric charge: I = Q/t (unit Ampere A = C s⁻¹). Ohm’s Law: current through conductor is directly proportional to potential difference across its ends (V = IR), provided temperature is constant. Resistance R depends on length, cross-sectional area, and material (R = ρL/A). Electric power P = VI = I²R = V²/R (unit Watt). Electrical energy is billed in kilowatt-hours (kWh): 1 kWh = 3.6 × 10⁶ J = 3.6 MJ.',
    shortQuestions: [
      {
        id: 'p14-sq1',
        questionNumber: 'Q.1',
        question: 'State Ohm’s law and write its mathematical equation.',
        answer: 'Ohm’s law states that current passing through a conductor is directly proportional to potential difference across its ends, provided temperature and physical state remain constant: V = IR.'
      },
      {
        id: 'p14-sq2',
        questionNumber: 'Q.2',
        question: 'Differentiate between electromotive force (e.m.f) and potential difference.',
        answer: 'e.m.f is energy supplied by battery per unit charge moving through whole circuit. Potential difference is energy converted into other forms as unit charge passes through a circuit component.'
      },
      {
        id: 'p14-sq3',
        questionNumber: 'Q.3',
        question: 'Prove that 1 kilowatt-hour (1 kWh) = 3.6 Mega Joules.',
        answer: '1 kWh = 1000 W × 3600 s = 3,600,000 Watt-seconds = 3.6 × 10⁶ J = 3.6 MJ.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p14-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Explain why household electrical appliances are always connected in parallel rather than in series.',
        answerReference: 'Household appliances are wired in parallel because: (1) Each appliance receives full mains voltage (220 V); (2) Each appliance operates independently with its own on/off switch; (3) If one appliance fails or is turned off, other appliances continue working; (4) Total circuit resistance is minimized, preventing voltage drops.',
        guidance: 'Compare series vs parallel circuits for home wiring safety and efficiency.'
      }
    ],
    quizzes: [
      {
        id: 'p14-q1',
        questionNumber: 1,
        question: 'An electric current in metallic conductors is due to the flow of:',
        options: [
          { key: 'a', text: 'positive ions' },
          { key: 'b', text: 'negative ions' },
          { key: 'c', text: 'positive charges' },
          { key: 'd', text: 'free electrons' }
        ],
        correctAnswer: 'd',
        explanation: 'In solid metals, free conduction electrons flow under an applied electric field.'
      },
      {
        id: 'p14-q2',
        questionNumber: 2,
        question: 'What is the voltage across a 6 Ω resistor when 3 A of current passes through it?',
        options: [
          { key: 'a', text: '2 V' },
          { key: 'b', text: '9 V' },
          { key: 'c', text: '18 V' },
          { key: 'd', text: '36 V' }
        ],
        correctAnswer: 'c',
        explanation: 'V = I × R = 3 A × 6 Ω = 18 V.'
      },
      {
        id: 'p14-q3',
        questionNumber: 3,
        question: 'What happens to the brightness of lamps connected in series as more lamps are added?',
        options: [
          { key: 'a', text: 'increases' },
          { key: 'b', text: 'decreases' },
          { key: 'c', text: 'remains the same' },
          { key: 'd', text: 'cannot be predicted' }
        ],
        correctAnswer: 'b',
        explanation: 'Total resistance increases, reducing circuit current and voltage across each lamp, so they dim.'
      },
      {
        id: 'p14-q4',
        questionNumber: 4,
        question: 'Why should household appliances be connected in parallel with the voltage source?',
        options: [
          { key: 'a', text: 'to increase the resistance of the circuit' },
          { key: 'b', text: 'to decrease the resistance of the circuit' },
          { key: 'c', text: 'to provide each appliance the same voltage as the power source' },
          { key: 'd', text: 'to provide each appliance the same current as power source' }
        ],
        correctAnswer: 'c',
        explanation: 'Parallel wiring delivers full supply voltage across each individual household appliance.'
      },
      {
        id: 'p14-q5',
        questionNumber: 5,
        question: 'Electric potential difference and e.m.f:',
        options: [
          { key: 'a', text: 'are the same terms' },
          { key: 'b', text: 'are different terms' },
          { key: 'c', text: 'have different units' },
          { key: 'd', text: 'both b and c' }
        ],
        correctAnswer: 'a',
        explanation: 'Both represent energy per unit charge and share the same unit Volt (though their origins differ).'
      },
      {
        id: 'p14-q6',
        questionNumber: 6,
        question: 'When we double the voltage in a simple electric circuit of fixed resistance, we double the:',
        options: [
          { key: 'a', text: 'current' },
          { key: 'b', text: 'power' },
          { key: 'c', text: 'resistance' },
          { key: 'd', text: 'both a and b' }
        ],
        correctAnswer: 'a',
        explanation: 'From Ohm\'s law I = V/R, doubling voltage doubles the current.'
      },
      {
        id: 'p14-q7',
        questionNumber: 7,
        question: 'If we double both the current and the voltage in a circuit, the electric power becomes:',
        options: [
          { key: 'a', text: 'remains unchanged' },
          { key: 'b', text: 'halves' },
          { key: 'c', text: 'doubles' },
          { key: 'd', text: 'four times' }
        ],
        correctAnswer: 'd',
        explanation: 'P = V × I; doubling both multiplies power by 2 × 2 = 4 times.'
      },
      {
        id: 'p14-q8',
        questionNumber: 8,
        question: 'What is the power rating of a lamp connected to a 12 V source when it carries 2.5 A?',
        options: [
          { key: 'a', text: '4.8 W' },
          { key: 'b', text: '14.5 W' },
          { key: 'c', text: '30 W' },
          { key: 'd', text: '60 W' }
        ],
        correctAnswer: 'c',
        explanation: 'P = V × I = 12 V × 2.5 A = 30 W.'
      },
      {
        id: 'p14-q9',
        questionNumber: 9,
        question: 'The combined resistance of two identical resistors in series is 8 Ω. Their combined resistance in parallel is:',
        options: [
          { key: 'a', text: '2 Ω' },
          { key: 'b', text: '4 Ω' },
          { key: 'c', text: '8 Ω' },
          { key: 'd', text: '12 Ω' }
        ],
        correctAnswer: 'a',
        explanation: 'R + R = 8 Ω ⇒ R = 4 Ω each. In parallel: R_eq = 4/2 = 2 Ω.'
      },
      {
        id: 'p14-q10',
        questionNumber: 10,
        question: 'The typical electric power of a washing machine in watts is:',
        options: [
          { key: 'a', text: '50' },
          { key: 'b', text: '750' },
          { key: 'c', text: '100' },
          { key: 'd', text: '800' }
        ],
        correctAnswer: 'b',
        explanation: 'Standard domestic washing machines operate at approximately 750 W (around 1 horsepower).'
      },
      {
        id: 'p14-q11',
        questionNumber: 11,
        question: '1 kWh is equal to:',
        options: [
          { key: 'a', text: '3.6 MJ' },
          { key: 'b', text: '3.6 KJ' },
          { key: 'c', text: '3.6 J⁻¹' },
          { key: 'd', text: '3.6 J' }
        ],
        correctAnswer: 'a',
        explanation: '1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J = 3.6 Mega Joules (MJ).'
      },
      {
        id: 'p14-q12',
        questionNumber: 12,
        question: 'The value of one kilowatt-hour in scientific joules is:',
        options: [
          { key: 'a', text: '3.6 × 10³' },
          { key: 'b', text: '3.6 × 10⁴' },
          { key: 'c', text: '3.6 × 10⁵' },
          { key: 'd', text: '3.6 × 10⁶' }
        ],
        correctAnswer: 'd',
        explanation: '1 kWh = 3.6 × 10⁶ J.'
      },
      {
        id: 'p14-q13',
        questionNumber: 13,
        question: 'The unit of electric power is:',
        options: [
          { key: 'a', text: 'watt' },
          { key: 'b', text: 'ampere' },
          { key: 'c', text: 'joule' },
          { key: 'd', text: 'volt' }
        ],
        correctAnswer: 'a',
        explanation: 'Power is energy per unit time, measured in Watts (W = J/s).'
      },
      {
        id: 'p14-q14',
        questionNumber: 14,
        question: 'In an electric circuit, when electrons move from low to high potential they:',
        options: [
          { key: 'a', text: 'lose energy' },
          { key: 'b', text: 'gain energy' },
          { key: 'c', text: 'gain power' },
          { key: 'd', text: 'lose their identity' }
        ],
        correctAnswer: 'a',
        explanation: 'Electrons naturally move towards higher positive potential; through external resistive loads they dissipate/lose energy.'
      },
      {
        id: 'p14-q15',
        questionNumber: 15,
        question: 'Formula of electromotive force e.m.f is equal to:',
        options: [
          { key: 'a', text: 'E = W / Q' },
          { key: 'b', text: 'F = W / I' },
          { key: 'c', text: 'E = W / Q' },
          { key: 'd', text: 'E = Q / I' }
        ],
        correctAnswer: 'c',
        explanation: 'e.m.f E = W / Q (work done per unit charge).'
      },
      {
        id: 'p14-q16',
        questionNumber: 16,
        question: 'Electrical energy W is given by:',
        options: [
          { key: 'a', text: 'Q R' },
          { key: 'b', text: 'Q V' },
          { key: 'c', text: 'Q C' },
          { key: 'd', text: 'Q t' }
        ],
        correctAnswer: 'b',
        explanation: 'Energy W = Q × V.'
      },
      {
        id: 'p14-q17',
        questionNumber: 17,
        question: 'One watt is equal to:',
        options: [
          { key: 'a', text: 'J s' },
          { key: 'b', text: 'J s⁻¹' },
          { key: 'c', text: 'J² s' },
          { key: 'd', text: 's J⁻¹' }
        ],
        correctAnswer: 'b',
        explanation: '1 Watt = 1 Joule per second (J s⁻¹).'
      },
      {
        id: 'p14-q18',
        questionNumber: 18,
        question: 'An ideal voltmeter has internal resistance which is:',
        options: [
          { key: 'a', text: 'very low' },
          { key: 'b', text: 'very high (ideally infinite)' },
          { key: 'c', text: 'nothing' },
          { key: 'd', text: 'low' }
        ],
        correctAnswer: 'b',
        explanation: 'A voltmeter is connected in parallel and must draw zero current, so its resistance must be extremely high.'
      },
      {
        id: 'p14-q19',
        questionNumber: 19,
        question: 'The S.I. unit of resistance is:',
        options: [
          { key: 'a', text: 'volt' },
          { key: 'b', text: 'ampere' },
          { key: 'c', text: 'ohm (Ω)' },
          { key: 'd', text: 'joule' }
        ],
        correctAnswer: 'c',
        explanation: 'Resistance is measured in Ohms (Ω).'
      },
      {
        id: 'p14-q20',
        questionNumber: 20,
        question: 'If emf of a battery is 2 V, energy supplied when one coulomb charge flows through circuit is:',
        options: [
          { key: 'a', text: '5 joules' },
          { key: 'b', text: '4 joules' },
          { key: 'c', text: '2.8 joules' },
          { key: 'd', text: '2 joules' }
        ],
        correctAnswer: 'd',
        explanation: 'W = E × Q = 2 V × 1 C = 2 Joules.'
      },
      {
        id: 'p14-q21',
        questionNumber: 21,
        question: 'The rate of flow of electric charges is called:',
        options: [
          { key: 'a', text: 'current' },
          { key: 'b', text: 'volt' },
          { key: 'c', text: 'ohm' },
          { key: 'd', text: 'coulomb' }
        ],
        correctAnswer: 'a',
        explanation: 'Electric current I = Q/t.'
      },
      {
        id: 'p14-q22',
        questionNumber: 22,
        question: 'The S.I unit of electric current is:',
        options: [
          { key: 'a', text: 'coulomb' },
          { key: 'b', text: 'joule' },
          { key: 'c', text: 'ampere' },
          { key: 'd', text: 'watt' }
        ],
        correctAnswer: 'c',
        explanation: 'Current is measured in Amperes (A).'
      },
      {
        id: 'p14-q23',
        questionNumber: 23,
        question: 'The formula to find the magnitude of electric current is:',
        options: [
          { key: 'a', text: 'I = Q / t' },
          { key: 'b', text: 'I = Q V' },
          { key: 'c', text: 'I = C V' },
          { key: 'd', text: 'I = C / Q' }
        ],
        correctAnswer: 'a',
        explanation: 'Current I = Q / t.'
      },
      {
        id: 'p14-q24',
        questionNumber: 24,
        question: 'The mathematical form of Ohm\'s law is:',
        options: [
          { key: 'a', text: 'V = I / R' },
          { key: 'b', text: 'V = R / I' },
          { key: 'c', text: 'V = I R' },
          { key: 'd', text: 'V = m / v' }
        ],
        correctAnswer: 'c',
        explanation: 'V = IR.'
      },
      {
        id: 'p14-q25',
        questionNumber: 25,
        question: 'One milli-ampere (1 mA) is equal to:',
        options: [
          { key: 'a', text: '10⁻³ A' },
          { key: 'b', text: '10⁻⁶ A' },
          { key: 'c', text: '10⁻⁹ A' },
          { key: 'd', text: '10⁻¹² A' }
        ],
        correctAnswer: 'a',
        explanation: 'Milli prefix denotes 10⁻³.'
      },
      {
        id: 'p14-q26',
        questionNumber: 26,
        question: 'The S.I unit of electromotive force (e.m.f) is volt, which equals:',
        options: [
          { key: 'a', text: 'N C⁻¹' },
          { key: 'b', text: 'N C' },
          { key: 'c', text: 'C J' },
          { key: 'd', text: 'J C⁻¹' }
        ],
        correctAnswer: 'd',
        explanation: '1 Volt = 1 Joule per Coulomb (J C⁻¹).'
      }
    ]
  },
  {
    id: 'phy-u15',
    number: 15,
    title: 'Electromagnetism',
    urduTitle: 'برقی مقناطیسیت (الیکٹرو میگنیٹزم)',
    description: 'Magnetic effects of current, Fleming’s Left-Hand Rule, DC Motor, electromagnetic induction, Faraday’s law, Lenz’s law, Mutual induction and Transformers (N_s/N_p = V_s/V_p).',
    summary: 'Current-carrying conductors produce magnetic fields. A wire in an external magnetic field experiences force F = ILB sin θ. DC motors convert electrical energy into mechanical rotational energy using a split-ring commutator. Faraday discovered electromagnetic induction: induced emf is proportional to rate of change of magnetic flux. Transformers transfer AC power between circuits via mutual induction: V_s / V_p = N_s / N_p. Step-up transformers increase voltage; step-down transformers decrease voltage.',
    shortQuestions: [
      {
        id: 'p15-sq1',
        questionNumber: 'Q.1',
        question: 'What is the function of the split-ring commutator in a DC motor?',
        answer: 'The split-ring commutator reverses the direction of current in the armature coil every half-cycle (180°), ensuring that torque continues in the same rotational direction.'
      },
      {
        id: 'p15-sq2',
        questionNumber: 'Q.2',
        question: 'State Faraday’s Law of Electromagnetic Induction.',
        answer: 'The value of induced electromotive force in a circuit is directly proportional to the rate of change of magnetic lines of force (magnetic flux) through the circuit.'
      },
      {
        id: 'p15-sq3',
        questionNumber: 'Q.3',
        question: 'Differentiate between a step-up and a step-down transformer.',
        answer: 'A step-up transformer has more secondary turns (N_s > N_p) and increases AC voltage. A step-down transformer has fewer secondary turns (N_s < N_p) and decreases AC voltage.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p15-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Explain the working principle and construction of an AC/DC transformer with transformer ratio formula.',
        answerReference: 'A transformer operates on the principle of mutual induction. It consists of two coils (primary and secondary) wound on a laminated soft iron core. AC in primary produces changing magnetic flux linked to secondary, inducing AC voltage. Formula: V_s / V_p = N_s / N_p. In an ideal transformer, input power equals output power: V_p I_p = V_s I_s.',
        guidance: 'Draw core with primary and secondary coils showing magnetic flux lines.'
      }
    ],
    quizzes: [
      {
        id: 'p15-q1',
        questionNumber: 1,
        question: 'Which statement is true about magnetic poles?',
        options: [
          { key: 'a', text: 'unlike poles repel' },
          { key: 'b', text: 'like poles attract' },
          { key: 'c', text: 'magnetic poles do not effect each other' },
          { key: 'd', text: 'a single magnetic pole (monopole) does not exist' }
        ],
        correctAnswer: 'd',
        explanation: 'Magnetic poles always exist in pairs (North and South); isolated monopoles do not exist.'
      },
      {
        id: 'p15-q2',
        questionNumber: 2,
        question: 'What is the direction of magnetic field lines inside a bar magnet?',
        options: [
          { key: 'a', text: 'from north pole to south pole' },
          { key: 'b', text: 'from south pole to north pole' },
          { key: 'c', text: 'from side to side' },
          { key: 'd', text: 'there are no magnetic field lines' }
        ],
        correctAnswer: 'b',
        explanation: 'Magnetic lines form closed continuous loops: outside from North to South, inside from South to North.'
      },
      {
        id: 'p15-q3',
        questionNumber: 3,
        question: 'The presence of a magnetic field can be conveniently detected by a:',
        options: [
          { key: 'a', text: 'small mass' },
          { key: 'b', text: 'stationary positive charge' },
          { key: 'c', text: 'stationary negative charge' },
          { key: 'd', text: 'magnetic compass' }
        ],
        correctAnswer: 'd',
        explanation: 'A pivoted magnetic compass needle aligns with local magnetic field lines.'
      },
      {
        id: 'p15-q4',
        questionNumber: 4,
        question: 'If current in a wire placed perpendicular to magnetic field increases, magnetic force on wire:',
        options: [
          { key: 'a', text: 'increases' },
          { key: 'b', text: 'decreases' },
          { key: 'c', text: 'remains the same' },
          { key: 'd', text: 'will be zero' }
        ],
        correctAnswer: 'a',
        explanation: 'F = ILB sin θ; force is directly proportional to current I.'
      },
      {
        id: 'p15-q5',
        questionNumber: 5,
        question: 'A D.C. electric motor converts:',
        options: [
          { key: 'a', text: 'mechanical energy into electrical energy' },
          { key: 'b', text: 'mechanical energy into chemical energy' },
          { key: 'c', text: 'electrical energy into mechanical energy' },
          { key: 'd', text: 'electrical energy into chemical energy' }
        ],
        correctAnswer: 'c',
        explanation: 'Electric motors convert input electrical energy into mechanical rotational kinetic energy.'
      },
      {
        id: 'p15-q6',
        questionNumber: 6,
        question: 'Which part of a D.C. motor reverses the direction of current in the coil every half-cycle?',
        options: [
          { key: 'a', text: 'the armature' },
          { key: 'b', text: 'the commutator (split rings)' },
          { key: 'c', text: 'the brushes' },
          { key: 'd', text: 'the slip rings' }
        ],
        correctAnswer: 'b',
        explanation: 'The split-ring commutator alternates coil current connections every 180° rotation.'
      },
      {
        id: 'p15-q7',
        questionNumber: 7,
        question: 'The direction of induced e.m.f. in a circuit (Lenz’s law) is in accordance with conservation of:',
        options: [
          { key: 'a', text: 'mass' },
          { key: 'b', text: 'charge' },
          { key: 'c', text: 'momentum' },
          { key: 'd', text: 'energy' }
        ],
        correctAnswer: 'd',
        explanation: 'Lenz’s law is a direct consequence of the law of conservation of energy.'
      },
      {
        id: 'p15-q8',
        questionNumber: 8,
        question: 'A step-up transformer:',
        options: [
          { key: 'a', text: 'increases the input current' },
          { key: 'b', text: 'increases the output voltage' },
          { key: 'c', text: 'has more turns in the primary' },
          { key: 'd', text: 'has less turns in the secondary' }
        ],
        correctAnswer: 'b',
        explanation: 'A step-up transformer has N_s > N_p and raises output AC voltage.'
      },
      {
        id: 'p15-q9',
        questionNumber: 9,
        question: 'The turn ratio of a transformer is 10. This means:',
        options: [
          { key: 'a', text: 'I_s = 10 I_p' },
          { key: 'b', text: 'N_s = N_p / 10' },
          { key: 'c', text: 'N_s = 10 N_p' },
          { key: 'd', text: 'V_s = V_p / 10' }
        ],
        correctAnswer: 'c',
        explanation: 'Turn ratio is N_s / N_p = 10 ⇒ N_s = 10 N_p.'
      },
      {
        id: 'p15-q10',
        questionNumber: 10,
        question: 'Which device works on the principle of electromagnetic induction in a hydroelectric power plant?',
        options: [
          { key: 'a', text: 'motor' },
          { key: 'b', text: 'electric generator' },
          { key: 'c', text: 'galvanic cell' },
          { key: 'd', text: 'voltaic cell' }
        ],
        correctAnswer: 'b',
        explanation: 'Generators rotate coils in magnetic fields to produce electricity via electromagnetic induction.'
      },
      {
        id: 'p15-q11',
        questionNumber: 11,
        question: 'A transformer is used to change the value of:',
        options: [
          { key: 'a', text: 'charge' },
          { key: 'b', text: 'energy' },
          { key: 'c', text: 'power' },
          { key: 'd', text: 'voltage' }
        ],
        correctAnswer: 'd',
        explanation: 'Transformers step AC voltage up or down.'
      },
      {
        id: 'p15-q12',
        questionNumber: 12,
        question: 'A static device used to increase or decrease AC voltage is:',
        options: [
          { key: 'a', text: 'transformer' },
          { key: 'b', text: 'motor' },
          { key: 'c', text: 'generator' },
          { key: 'd', text: 'voltmeter' }
        ],
        correctAnswer: 'a',
        explanation: 'A transformer alters alternating voltage without moving parts.'
      },
      {
        id: 'p15-q13',
        questionNumber: 13,
        question: 'In a D.C. motor, torque on coil is maximum when coil is at an angle of:',
        options: [
          { key: 'a', text: '30°' },
          { key: 'b', text: '60°' },
          { key: 'c', text: '45°' },
          { key: 'd', text: '90° (parallel to magnetic field)' }
        ],
        correctAnswer: 'd',
        explanation: 'Torque τ = NIAB cos α is maximum when coil plane is parallel to field lines (α = 0° or normal at 90°).'
      },
      {
        id: 'p15-q14',
        questionNumber: 14,
        question: 'Induced e.m.f in the secondary coil of a transformer is produced by:',
        options: [
          { key: 'a', text: 'mutual induction' },
          { key: 'b', text: 'self induction' },
          { key: 'c', text: 'electric induction' },
          { key: 'd', text: 'induced current' }
        ],
        correctAnswer: 'a',
        explanation: 'Coupled flux between primary and secondary coils induces voltage by mutual induction.'
      },
      {
        id: 'p15-q15',
        questionNumber: 15,
        question: 'If turn ratio of a transformer is 1 : 100, it means that:',
        options: [
          { key: 'a', text: 'N_s = N_p / 10' },
          { key: 'b', text: 'N_s = 10 N_p' },
          { key: 'c', text: 'V_s = V_p / 100' },
          { key: 'd', text: 'N_s = 100 N_p' }
        ],
        correctAnswer: 'c',
        explanation: 'For ratio 1 : 100 step-down, V_s = V_p / 100.'
      },
      {
        id: 'p15-q16',
        questionNumber: 16,
        question: 'In a vacuum, all electromagnetic waves have the same:',
        options: [
          { key: 'a', text: 'frequency' },
          { key: 'b', text: 'speed' },
          { key: 'c', text: 'amplitude' },
          { key: 'd', text: 'wavelength' }
        ],
        correctAnswer: 'b',
        explanation: 'All EM waves travel at c = 3 × 10⁸ m/s in vacuum.'
      },
      {
        id: 'p15-q17',
        questionNumber: 17,
        question: 'Michael Faraday belonged to:',
        options: [
          { key: 'a', text: 'Britain' },
          { key: 'b', text: 'U.S.A' },
          { key: 'c', text: 'Saudia' },
          { key: 'd', text: 'Russia' }
        ],
        correctAnswer: 'a',
        explanation: 'Michael Faraday was a celebrated English (British) scientist.'
      },
      {
        id: 'p15-q18',
        questionNumber: 18,
        question: 'Laws of electromagnetic induction and electrolysis were presented by:',
        options: [
          { key: 'a', text: 'Georg Simon Ohm' },
          { key: 'b', text: 'Charles Coulomb' },
          { key: 'c', text: 'Isaac Newton' },
          { key: 'd', text: 'Michael Faraday' }
        ],
        correctAnswer: 'd',
        explanation: 'Faraday discovered electromagnetic induction (1831) and formulated electrolysis laws.'
      },
      {
        id: 'p15-q19',
        questionNumber: 19,
        question: 'The electrical transformer works on the:',
        options: [
          { key: 'a', text: 'principle of mutual induction' },
          { key: 'b', text: 'principle of D.C motor' },
          { key: 'c', text: 'principle of A.C generator' },
          { key: 'd', text: 'principle of self induction' }
        ],
        correctAnswer: 'a',
        explanation: 'Transformers operate on mutual electromagnetic induction between primary and secondary coils.'
      },
      {
        id: 'p15-q20',
        questionNumber: 20,
        question: 'The branch of physics studying magnetic effects of electric current is:',
        options: [
          { key: 'a', text: 'magnetism' },
          { key: 'b', text: 'electromagnetism' },
          { key: 'c', text: 'electric capacity' },
          { key: 'd', text: 'electricity' }
        ],
        correctAnswer: 'b',
        explanation: 'Electromagnetism studies interactions between electric currents and magnetic fields.'
      },
      {
        id: 'p15-q21',
        questionNumber: 21,
        question: 'Which of the following devices is based on the principle of electromagnetism?',
        options: [
          { key: 'a', text: 'electric motor' },
          { key: 'b', text: 'T.V' },
          { key: 'c', text: 'CD' },
          { key: 'd', text: 'mobile phone' }
        ],
        correctAnswer: 'a',
        explanation: 'An electric motor functions directly on magnetic forces exerted on current-carrying coils.'
      },
      {
        id: 'p15-q22',
        questionNumber: 22,
        question: 'Which device blocks DC current but allows AC current to pass through freely?',
        options: [
          { key: 'a', text: 'capacitor' },
          { key: 'b', text: 'resistor' },
          { key: 'c', text: 'thermometer' },
          { key: 'd', text: 'specific resistance' }
        ],
        correctAnswer: 'a',
        explanation: 'Capacitor reactance is infinite for DC (f = 0), completely blocking DC while passing AC.'
      },
      {
        id: 'p15-q23',
        questionNumber: 23,
        question: 'The practical application of mutual induction is:',
        options: [
          { key: 'a', text: 'A.C. generator' },
          { key: 'b', text: 'D.C. motor' },
          { key: 'c', text: 'Transformer' },
          { key: 'd', text: 'Relay' }
        ],
        correctAnswer: 'c',
        explanation: 'Transformers are the direct application of mutual induction.'
      },
      {
        id: 'p15-q24',
        questionNumber: 24,
        question: 'Michael Faraday discovered:',
        options: [
          { key: 'a', text: 'Principle of electromagnetic induction' },
          { key: 'b', text: 'Laws of electrolysis' },
          { key: 'c', text: 'Both A & B' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'c',
        explanation: 'Faraday discovered both electromagnetic induction and the laws of electrolysis.'
      }
    ]
  }
];
