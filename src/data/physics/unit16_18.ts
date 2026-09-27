import { Chapter } from '../../types/book';

export const UNIT_16_18: Chapter[] = [
  {
    id: 'phy-u16',
    number: 16,
    title: 'Basic Electronics',
    urduTitle: 'بنیادی الیکٹرانکس',
    description: 'Thermionic emission, cathode rays, Cathode-Ray Oscilloscope (C.R.O), analog vs digital electronics, and logic gates (AND, OR, NOT, NAND, NOR).',
    summary: 'Thermionic emission is the emission of electrons from heated metal filament (tungsten). Cathode rays are beams of high-speed electrons. A Cathode-Ray Oscilloscope (C.R.O) consists of electron gun, deflecting plates, and a fluorescent screen. Digital electronics processes discrete binary signals (0 and 1) using Boolean algebra. Fundamental logic gates: AND (X = A · B), OR (X = A + B), NOT (X = Ā). Universal logic gates: NAND (X = AB̄) and NOR (X = A+B̄).',
    shortQuestions: [
      {
        id: 'p16-sq1',
        questionNumber: 'Q.1',
        question: 'Define thermionic emission.',
        answer: 'The process of emission of electrons from the surface of a metal when heated to a high temperature is called thermionic emission.'
      },
      {
        id: 'p16-sq2',
        questionNumber: 'Q.2',
        question: 'What are the main components of a Cathode-Ray Oscilloscope (C.R.O)?',
        answer: 'The C.R.O has three main parts: 1. Electron gun (produces focused electron beam); 2. Deflecting plates (X and Y plates); 3. Fluorescent phosphor screen.'
      },
      {
        id: 'p16-sq3',
        questionNumber: 'Q.3',
        question: 'What is a truth table? Write truth table of an AND gate.',
        answer: 'A truth table is a table showing all possible combinations of input binary values and their corresponding output value. For AND gate: (0,0)→0, (0,1)→0, (1,0)→0, (1,1)→1.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p16-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Explain the working, circuit symbol, and truth table of a NAND gate and a NOR gate.',
        answerReference: 'NAND gate is combination of AND gate followed by a NOT gate: X = NOT(A AND B) = AB̄. Output is 0 only when both inputs are 1; otherwise output is 1. NOR gate is combination of OR gate followed by NOT gate: X = NOT(A OR B) = A+B̄. Output is 1 only when both inputs are 0. Both are called universal gates because all other gates can be constructed using only NAND or only NOR gates.',
        guidance: 'Draw circuit symbols with small bubble at output and construct 4-row truth tables for each.'
      }
    ],
    quizzes: [
      {
        id: 'p16-q1',
        questionNumber: 1,
        question: 'The process by which electrons are emitted by a hot metal surface is known as:',
        options: [
          { key: 'a', text: 'boiling' },
          { key: 'b', text: 'evaporation' },
          { key: 'c', text: 'conduction' },
          { key: 'd', text: 'thermionic emission' }
        ],
        correctAnswer: 'd',
        explanation: 'Heating metal delivers thermal energy to free electrons, causing thermionic emission.'
      },
      {
        id: 'p16-q2',
        questionNumber: 2,
        question: 'When metals are heated to high temperatures, they emit:',
        options: [
          { key: 'a', text: 'holes' },
          { key: 'b', text: 'protons' },
          { key: 'c', text: 'neutrons' },
          { key: 'd', text: 'electrons' }
        ],
        correctAnswer: 'd',
        explanation: 'Thermal energy frees conduction electrons from the metal lattice.'
      },
      {
        id: 'p16-q3',
        questionNumber: 3,
        question: 'The particles emitted from a hot cathode surface in a vacuum tube are:',
        options: [
          { key: 'a', text: 'positive ions' },
          { key: 'b', text: 'negative ions' },
          { key: 'c', text: 'protons' },
          { key: 'd', text: 'electrons' }
        ],
        correctAnswer: 'd',
        explanation: 'Hot cathodes emit negatively charged electrons (cathode rays).'
      },
      {
        id: 'p16-q4',
        questionNumber: 4,
        question: 'A D-shaped gate symbol with a circle inversion bubble at the output represents a:',
        options: [
          { key: 'a', text: 'AND gate' },
          { key: 'b', text: 'NOR gate' },
          { key: 'c', text: 'NAND gate' },
          { key: 'd', text: 'OR gate' }
        ],
        correctAnswer: 'c',
        explanation: 'AND symbol followed by inversion bubble denotes a NAND gate.'
      },
      {
        id: 'p16-q5',
        questionNumber: 5,
        question: 'An AND gate can be formed by using two:',
        options: [
          { key: 'a', text: 'NOT gates' },
          { key: 'b', text: 'OR gates' },
          { key: 'c', text: 'NOR gates' },
          { key: 'd', text: 'NAND gates' }
        ],
        correctAnswer: 'c',
        explanation: 'NOR is a universal logic gate capable of constructing an AND gate.'
      },
      {
        id: 'p16-q6',
        questionNumber: 6,
        question: 'The output of a two-input NOR gate is 1 when:',
        options: [
          { key: 'a', text: 'A is 1 and B is 0' },
          { key: 'b', text: 'A is 0 and B is 1' },
          { key: 'c', text: 'both A and B are 0' },
          { key: 'd', text: 'both A and B are 1' }
        ],
        correctAnswer: 'c',
        explanation: 'NOR output X = (0 + 0)̄ = 0̄ = 1.'
      },
      {
        id: 'p16-q7',
        questionNumber: 7,
        question: 'If X = A · B, then X is 1 when:',
        options: [
          { key: 'a', text: 'A and B are both 1' },
          { key: 'b', text: 'A or B = 0' },
          { key: 'c', text: 'A is 0 and B is 1' },
          { key: 'd', text: 'A is 1 and B is 0' }
        ],
        correctAnswer: 'a',
        explanation: 'In AND operation, output is 1 only when all inputs are 1 (1 · 1 = 1).'
      },
      {
        id: 'p16-q8',
        questionNumber: 8,
        question: 'If X = A · B, then X = 0 when:',
        options: [
          { key: 'a', text: 'A = 0, B = 0' },
          { key: 'b', text: 'A = 0, B = 1' },
          { key: 'c', text: 'A = 1, B = 0' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'd',
        explanation: 'AND output is 0 whenever at least one input is 0.'
      },
      {
        id: 'p16-q9',
        questionNumber: 9,
        question: 'The output of a NAND gate is 0 when:',
        options: [
          { key: 'a', text: 'both of its inputs are 0' },
          { key: 'b', text: 'both of its inputs are 1' },
          { key: 'c', text: 'any of its inputs is 0' },
          { key: 'd', text: 'any of its inputs is 1' }
        ],
        correctAnswer: 'b',
        explanation: 'NAND output X = (1 · 1)̄ = 1̄ = 0.'
      },
      {
        id: 'p16-q10',
        questionNumber: 10,
        question: 'Number of input terminals in a standard NOT gate is:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'a',
        explanation: 'A NOT inverter has exactly one input and one inverted output.'
      },
      {
        id: 'p16-q11',
        questionNumber: 11,
        question: 'In tungsten filament, potential applied to produce electron beam by thermionic emission is:',
        options: [
          { key: 'a', text: '6 V' },
          { key: 'b', text: '7 V' },
          { key: 'c', text: '8 V' },
          { key: 'd', text: '9 V' }
        ],
        correctAnswer: 'a',
        explanation: 'Standard filament heating operates at 6 V potential.'
      },
      {
        id: 'p16-q12',
        questionNumber: 12,
        question: 'The cathode ray oscilloscope (C.R.O) consists of how many main parts?',
        options: [
          { key: 'a', text: 'two' },
          { key: 'b', text: 'three' },
          { key: 'c', text: 'four' },
          { key: 'd', text: 'five' }
        ],
        correctAnswer: 'b',
        explanation: 'Three main components: electron gun, deflecting plates, and fluorescent screen.'
      },
      {
        id: 'p16-q13',
        questionNumber: 13,
        question: 'The output of an OR gate will be 0 when:',
        options: [
          { key: 'a', text: 'A = 0 and B = 0' },
          { key: 'b', text: 'A = 1 and B = 1' },
          { key: 'c', text: 'A = 0 and B = 1' },
          { key: 'd', text: 'A = 1 and B = 0' }
        ],
        correctAnswer: 'a',
        explanation: 'OR gate output is 0 only when all inputs are 0 (0 + 0 = 0).'
      },
      {
        id: 'p16-q14',
        questionNumber: 14,
        question: 'The basic logic operation of a NOT gate is called:',
        options: [
          { key: 'a', text: 'inversion' },
          { key: 'b', text: 'non-inversion' },
          { key: 'c', text: 'inversion and non-inversion both' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'a',
        explanation: 'A NOT gate inverts 1 to 0, and 0 to 1.'
      },
      {
        id: 'p16-q15',
        questionNumber: 15,
        question: 'George Boole invented:',
        options: [
          { key: 'a', text: 'arithmetic algebra' },
          { key: 'b', text: 'Boolean algebra' },
          { key: 'c', text: 'mean algebra' },
          { key: 'd', text: 'geometry' }
        ],
        correctAnswer: 'b',
        explanation: 'English mathematician George Boole formulated Boolean algebra based on binary logic.'
      },
      {
        id: 'p16-q16',
        questionNumber: 16,
        question: 'The screen of a cathode-ray tube consists of a material coating called:',
        options: [
          { key: 'a', text: 'zinc' },
          { key: 'b', text: 'iron' },
          { key: 'c', text: 'phosphorus' },
          { key: 'd', text: 'glass' }
        ],
        correctAnswer: 'c',
        explanation: 'Phosphor screen glows with visible luminescence when struck by energetic electrons.'
      },
      {
        id: 'p16-q17',
        questionNumber: 17,
        question: 'In a C.R.O, the potential of the grid relative to cathode is:',
        options: [
          { key: 'a', text: 'positive' },
          { key: 'b', text: 'negative' },
          { key: 'c', text: 'neutral' },
          { key: 'd', text: 'zero' }
        ],
        correctAnswer: 'b',
        explanation: 'Control grid has a negative potential to regulate the rate of electrons passing through.'
      },
      {
        id: 'p16-q18',
        questionNumber: 18,
        question: 'Cathode rays have a charge:',
        options: [
          { key: 'a', text: 'positive' },
          { key: 'b', text: 'negative' },
          { key: 'c', text: 'neutral' },
          { key: 'd', text: 'both a, b' }
        ],
        correctAnswer: 'b',
        explanation: 'Cathode rays are streams of negatively charged electrons.'
      },
      {
        id: 'p16-q19',
        questionNumber: 19,
        question: 'The algebraic equation of NOT operation on variable A is:',
        options: [
          { key: 'a', text: 'X = A · B' },
          { key: 'b', text: 'X = A + B' },
          { key: 'c', text: 'X = A - B' },
          { key: 'd', text: 'X = Ā' }
        ],
        correctAnswer: 'd',
        explanation: 'NOT operation is written as X = Ā (A bar).'
      },
      {
        id: 'p16-q20',
        questionNumber: 20,
        question: 'The equation of AND operation is:',
        options: [
          { key: 'a', text: 'X = A + B' },
          { key: 'b', text: 'X = A · B' },
          { key: 'c', text: 'X = Ā' },
          { key: 'd', text: 'X = A · B' }
        ],
        correctAnswer: 'd',
        explanation: 'X = A · B represents the logical AND operation.'
      },
      {
        id: 'p16-q21',
        questionNumber: 21,
        question: 'If X = A + B, then X = 0 when:',
        options: [
          { key: 'a', text: 'A = 0, B = 0' },
          { key: 'b', text: 'A = 1, B = 1' },
          { key: 'c', text: 'A = 0, B = 1' },
          { key: 'd', text: 'A = 1, B = 0' }
        ],
        correctAnswer: 'a',
        explanation: 'In OR gate, output is 0 only if both inputs are 0.'
      },
      {
        id: 'p16-q22',
        questionNumber: 22,
        question: 'Deflecting plates (X and Y) are a vital component of:',
        options: [
          { key: 'a', text: 'Radio' },
          { key: 'b', text: 'C.R.O (Cathode-Ray Oscilloscope)' },
          { key: 'c', text: 'Fluorescent Tube' },
          { key: 'd', text: 'Computer' }
        ],
        correctAnswer: 'b',
        explanation: 'Deflecting plates steer the electron beam across the C.R.O screen.'
      }
    ]
  },
  {
    id: 'phy-u17',
    number: 17,
    title: 'Information and Communication Technology',
    urduTitle: 'معلوماتی و مواصلاتی ٹیکنالوجی (آئی سی ٹی)',
    description: 'Components of CBIS, transmission of electrical signals, optical fibres, radio waves, satellite communication, computer networks, and internet.',
    summary: 'Information and Communication Technology (ICT) deals with processing, storing, and transmitting data electronically. A Computer-Based Information System (CBIS) comprises 5 components: hardware, software, data, procedures, and people. Data storage: 1 Byte = 8 bits, 1 KB = 1024 Bytes, 1 MB = 1024 KB, 1 GB = 1024 MB. Modern telecommunications rely on high-speed microwaves, optical fibres, and geostationary satellites.',
    shortQuestions: [
      {
        id: 'p17-sq1',
        questionNumber: 'Q.1',
        question: 'What is meant by Information and Communication Technology (ICT)?',
        answer: 'ICT is the scientific method and technique used to process, store, retrieve, and transmit information across communication channels electronically.'
      },
      {
        id: 'p17-sq2',
        questionNumber: 'Q.2',
        question: 'Name the five essential components of a CBIS.',
        answer: '1. Hardware; 2. Software; 3. Data; 4. Procedures; 5. People.'
      },
      {
        id: 'p17-sq3',
        questionNumber: 'Q.3',
        question: 'Differentiate between primary and secondary storage memory.',
        answer: 'Primary memory (e.g. RAM) is high-speed temporary storage directly accessible by CPU. Secondary memory (e.g. hard disk, flash drive) is permanent non-volatile storage.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p17-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Explain the transmission of light signals through optical fibres and state its advantages over copper cables.',
        answerReference: 'Optical fibres transmit digital data as modulated pulses of light using continuous total internal reflection inside high-purity glass core surrounded by lower-refractive-index cladding. Advantages: extremely wide bandwidth, immune to electromagnetic interference, lightweight, secure, and minimal signal loss over long distances.',
        guidance: 'Draw cross-section of optical fiber showing core, cladding, and zigzag path of light rays.'
      }
    ],
    quizzes: [
      {
        id: 'p17-q1',
        questionNumber: 1,
        question: 'In computer terminology, information means:',
        options: [
          { key: 'a', text: 'any data' },
          { key: 'b', text: 'raw data' },
          { key: 'c', text: 'processed data' },
          { key: 'd', text: 'large data' }
        ],
        correctAnswer: 'c',
        explanation: 'Data processed into meaningful form is termed information.'
      },
      {
        id: 'p17-q2',
        questionNumber: 2,
        question: 'Which is the most suitable means of reliable continuous communication between an orbiting satellite and Earth?',
        options: [
          { key: 'a', text: 'microwaves' },
          { key: 'b', text: 'radio waves' },
          { key: 'c', text: 'sound waves' },
          { key: 'd', text: 'any light wave' }
        ],
        correctAnswer: 'a',
        explanation: 'Microwaves penetrate the Earth\'s ionosphere without reflection or severe atmospheric absorption.'
      },
      {
        id: 'p17-q3',
        questionNumber: 3,
        question: 'The basic operations performed by a computer are:',
        options: [
          { key: 'a', text: 'arithmetic operations' },
          { key: 'b', text: 'non-arithmetic operations' },
          { key: 'c', text: 'logical operations' },
          { key: 'd', text: 'both (a) and (c)' }
        ],
        correctAnswer: 'd',
        explanation: 'The ALU performs both arithmetic (addition, subtraction) and logical (comparison) operations.'
      },
      {
        id: 'p17-q4',
        questionNumber: 4,
        question: 'The brain of any computer system is the:',
        options: [
          { key: 'a', text: 'monitor' },
          { key: 'b', text: 'memory' },
          { key: 'c', text: 'CPU (Central Processing Unit)' },
          { key: 'd', text: 'control unit' }
        ],
        correctAnswer: 'c',
        explanation: 'The Central Processing Unit (CPU) executes instructions and directs system operations.'
      },
      {
        id: 'p17-q5',
        questionNumber: 5,
        question: 'Which of the following is not a data processing operation?',
        options: [
          { key: 'a', text: 'arranging' },
          { key: 'b', text: 'manipulating' },
          { key: 'c', text: 'calculating' },
          { key: 'd', text: 'gathering' }
        ],
        correctAnswer: 'b',
        explanation: 'Arranging, calculating, and gathering are valid data processing phases.'
      },
      {
        id: 'p17-q6',
        questionNumber: 6,
        question: 'From which of the following can you get global information about almost everything?',
        options: [
          { key: 'a', text: 'book' },
          { key: 'b', text: 'teacher' },
          { key: 'c', text: 'computer' },
          { key: 'd', text: 'internet' }
        ],
        correctAnswer: 'd',
        explanation: 'The internet is a global decentralized reservoir of knowledge.'
      },
      {
        id: 'p17-q7',
        questionNumber: 7,
        question: 'What does the term e-mail stand for?',
        options: [
          { key: 'a', text: 'emergency mail' },
          { key: 'b', text: 'electronic mail' },
          { key: 'c', text: 'extra mail' },
          { key: 'd', text: 'external mail' }
        ],
        correctAnswer: 'b',
        explanation: 'e-mail stands for electronic mail.'
      },
      {
        id: 'p17-q8',
        questionNumber: 8,
        question: 'One megabyte (1 MB) has how many kilobytes?',
        options: [
          { key: 'a', text: '1004' },
          { key: 'b', text: '1014' },
          { key: 'c', text: '1024' },
          { key: 'd', text: '1034' }
        ],
        correctAnswer: 'c',
        explanation: 'In binary counting, 1 MB = 2¹⁰ KB = 1024 KB.'
      },
      {
        id: 'p17-q9',
        questionNumber: 9,
        question: '1 KB is equal to:',
        options: [
          { key: 'a', text: '1024 Bytes' },
          { key: 'b', text: '1024 KB' },
          { key: 'c', text: '1024 MB' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'a',
        explanation: '1 KB = 1024 Bytes.'
      },
      {
        id: 'p17-q10',
        questionNumber: 10,
        question: 'One Byte is equal to:',
        options: [
          { key: 'a', text: '4 bits' },
          { key: 'b', text: '6 bits' },
          { key: 'c', text: '8 bits' },
          { key: 'd', text: '10 bits' }
        ],
        correctAnswer: 'c',
        explanation: 'A byte is an 8-bit digital word.'
      },
      {
        id: 'p17-q11',
        questionNumber: 11,
        question: 'In computer terminology, the term machinery refers to:',
        options: [
          { key: 'a', text: 'software' },
          { key: 'b', text: 'hardware' },
          { key: 'c', text: 'data' },
          { key: 'd', text: 'procedure' }
        ],
        correctAnswer: 'b',
        explanation: 'Hardware consists of all physical electronic and mechanical equipment.'
      },
      {
        id: 'p17-q12',
        questionNumber: 12,
        question: 'Radio waves are used in:',
        options: [
          { key: 'a', text: 'radio' },
          { key: 'b', text: 'T.V broadcast' },
          { key: 'c', text: 'mobile phones' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'd',
        explanation: 'Radio waves carry signals for radios, televisions, and cellular networks.'
      },
      {
        id: 'p17-q13',
        questionNumber: 13,
        question: '1024 kilobytes are equal to:',
        options: [
          { key: 'a', text: '1 PB' },
          { key: 'b', text: '1 TB' },
          { key: 'c', text: '1 GB' },
          { key: 'd', text: '1 MB' }
        ],
        correctAnswer: 'd',
        explanation: '1024 KB = 1 MB.'
      },
      {
        id: 'p17-q14',
        questionNumber: 14,
        question: 'The computer-based information system (CBIS) is formed by how many parts?',
        options: [
          { key: 'a', text: '4' },
          { key: 'b', text: '3' },
          { key: 'c', text: '5' },
          { key: 'd', text: '6' }
        ],
        correctAnswer: 'c',
        explanation: 'CBIS consists of 5 parts: Hardware, Software, Data, Procedures, and People.'
      },
      {
        id: 'p17-q15',
        questionNumber: 15,
        question: 'Which of the following is not a hardware device?',
        options: [
          { key: 'a', text: 'CPU' },
          { key: 'b', text: 'Windows OS' },
          { key: 'c', text: 'keyboard' },
          { key: 'd', text: 'mouse' }
        ],
        correctAnswer: 'b',
        explanation: 'Windows is an operating system software program, not physical hardware.'
      },
      {
        id: 'p17-q16',
        questionNumber: 16,
        question: 'A magnetic storage disk made of soft elastic mylar material is called a:',
        options: [
          { key: 'a', text: 'hard disc' },
          { key: 'b', text: 'floppy disc' },
          { key: 'c', text: 'compact disc' },
          { key: 'd', text: 'metallic disc' }
        ],
        correctAnswer: 'b',
        explanation: 'A floppy disk uses a flexible (floppy) plastic magnetic sheet.'
      },
      {
        id: 'p17-q17',
        questionNumber: 17,
        question: 'With high-speed broadband, large data can be loaded:',
        options: [
          { key: 'a', text: 'in 1 min' },
          { key: 'b', text: 'in 1 s' },
          { key: 'c', text: 'in 1 day' },
          { key: 'd', text: 'in 2 days' }
        ],
        correctAnswer: 'b',
        explanation: 'High broadband speeds transfer megabits of information in fractions of a second.'
      },
      {
        id: 'p17-q18',
        questionNumber: 18,
        question: 'The communication technology used in cell phones or mobile phones is:',
        options: [
          { key: 'a', text: 'computer' },
          { key: 'b', text: 'radar' },
          { key: 'c', text: 'radio waves' },
          { key: 'd', text: 'satellite' }
        ],
        correctAnswer: 'c',
        explanation: 'Cellular phones transmit voice and data using radio frequency waves.'
      },
      {
        id: 'p17-q19',
        questionNumber: 19,
        question: 'The electric telephone was first invented in the year:',
        options: [
          { key: 'a', text: '1676' },
          { key: 'b', text: '1776' },
          { key: 'c', text: '1876' },
          { key: 'd', text: '1976' }
        ],
        correctAnswer: 'c',
        explanation: 'Alexander Graham Bell patented the telephone in 1876.'
      },
      {
        id: 'p17-q20',
        questionNumber: 20,
        question: 'A portable plug-and-play device used to transport files between computers is:',
        options: [
          { key: 'a', text: 'compact disc' },
          { key: 'b', text: 'laser' },
          { key: 'c', text: 'flash drive (USB)' },
          { key: 'd', text: 'printer' }
        ],
        correctAnswer: 'c',
        explanation: 'USB flash memory drives provide convenient portable file transportation.'
      },
      {
        id: 'p17-q21',
        questionNumber: 21,
        question: 'Radio waves are:',
        options: [
          { key: 'a', text: 'mechanical waves' },
          { key: 'b', text: 'electromagnetic waves' },
          { key: 'c', text: 'compressional waves' },
          { key: 'd', text: 'longitudinal waves' }
        ],
        correctAnswer: 'b',
        explanation: 'Radio waves are electromagnetic waves.'
      },
      {
        id: 'p17-q22',
        questionNumber: 22,
        question: 'Radio technology is employed in:',
        options: [
          { key: 'a', text: 'fax machine' },
          { key: 'b', text: 'telephone' },
          { key: 'c', text: 'cell phone' },
          { key: 'd', text: 'microphone' }
        ],
        correctAnswer: 'c',
        explanation: 'Cell phones communicate with base towers using radio links.'
      },
      {
        id: 'p17-q23',
        questionNumber: 23,
        question: 'A typical 3.5-inch floppy disk has a storage capacity of:',
        options: [
          { key: 'a', text: '1-3 MB (specifically 1.44 MB)' },
          { key: 'b', text: '2-3 MB' },
          { key: 'c', text: '3-5 MB' },
          { key: 'd', text: '6-10 MB' }
        ],
        correctAnswer: 'a',
        explanation: 'Standard 3.5-inch high-density floppy disks stored 1.44 MB.'
      },
      {
        id: 'p17-q24',
        questionNumber: 24,
        question: 'An example of primary computer memory is:',
        options: [
          { key: 'a', text: 'random access memory (RAM)' },
          { key: 'b', text: 'hard disk' },
          { key: 'c', text: 'floppy disc' },
          { key: 'd', text: 'audio cassette' }
        ],
        correctAnswer: 'a',
        explanation: 'RAM is the primary volatile memory of a computer.'
      },
      {
        id: 'p17-q25',
        questionNumber: 25,
        question: 'A basic telephone handset system has how many primary working parts (mouthpiece and earpiece)?',
        options: [
          { key: 'a', text: '2' },
          { key: 'b', text: '4' },
          { key: 'c', text: '5' },
          { key: 'd', text: '6' }
        ],
        correctAnswer: 'a',
        explanation: 'Two main parts: transmitter (mouthpiece) and receiver (earpiece).'
      },
      {
        id: 'p17-q26',
        questionNumber: 26,
        question: 'Information storage devices working on different scientific principles utilize:',
        options: [
          { key: 'a', text: 'electronics' },
          { key: 'b', text: 'magnetism' },
          { key: 'c', text: 'laser technology' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'd',
        explanation: 'Storage media include electronic (flash), magnetic (hard drives), and optical laser (CD/DVD).'
      },
      {
        id: 'p17-q27',
        questionNumber: 27,
        question: 'CD stands for:',
        options: [
          { key: 'a', text: 'computer disk' },
          { key: 'b', text: 'chemical disc' },
          { key: 'c', text: 'compact disc' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'c',
        explanation: 'CD stands for Compact Disc.'
      },
      {
        id: 'p17-q28',
        questionNumber: 28,
        question: 'Alexander Graham Bell in 1876 invented the:',
        options: [
          { key: 'a', text: 'machine' },
          { key: 'b', text: 'computer' },
          { key: 'c', text: 'telephone' },
          { key: 'd', text: 'cellular phone' }
        ],
        correctAnswer: 'c',
        explanation: 'Bell invented the electric telephone in 1876.'
      },
      {
        id: 'p17-q29',
        questionNumber: 29,
        question: 'The first radio signal transmitted through the air was achieved by:',
        options: [
          { key: 'a', text: 'Guglielmo Marconi' },
          { key: 'b', text: 'Isaac Newton' },
          { key: 'c', text: 'Charles Coulomb' },
          { key: 'd', text: 'John Ambrose Fleming' }
        ],
        correctAnswer: 'a',
        explanation: 'Marconi sent the first wireless radio signals through air in 1895.'
      },
      {
        id: 'p17-q30',
        questionNumber: 30,
        question: 'One gigabyte (1 GB) of data equals:',
        options: [
          { key: 'a', text: '1024 KB' },
          { key: 'b', text: '1024 MB' },
          { key: 'c', text: '1000 KB' },
          { key: 'd', text: '1024 Bytes' }
        ],
        correctAnswer: 'b',
        explanation: '1 GB = 1024 MB.'
      },
      {
        id: 'p17-q31',
        questionNumber: 31,
        question: 'Which of these is not a web browser?',
        options: [
          { key: 'a', text: 'Chrome' },
          { key: 'b', text: 'YouTube' },
          { key: 'c', text: 'Mozilla Firefox' },
          { key: 'd', text: 'Safari' }
        ],
        correctAnswer: 'b',
        explanation: 'YouTube is a video streaming website/app, not an internet web browser.'
      },
      {
        id: 'p17-q32',
        questionNumber: 32,
        question: 'The early electrical precursor whose working principle is similar to telephone transmission is:',
        options: [
          { key: 'a', text: 'typewriter' },
          { key: 'b', text: 'e-mail' },
          { key: 'c', text: 'computer' },
          { key: 'd', text: 'telegraph' }
        ],
        correctAnswer: 'd',
        explanation: 'The electric telegraph preceded the telephone in transmitting signals along wires.'
      },
      {
        id: 'p17-q33',
        questionNumber: 33,
        question: 'A fax machine is formally called a:',
        options: [
          { key: 'a', text: 'Radio' },
          { key: 'b', text: 'Computer' },
          { key: 'c', text: 'Telefacsimile machine' },
          { key: 'd', text: 'Telephone' }
        ],
        correctAnswer: 'c',
        explanation: 'Fax is short for facsimile or telefacsimile.'
      }
    ]
  },
  {
    id: 'phy-u18',
    number: 18,
    title: 'Atomic and Nuclear Physics',
    urduTitle: 'ایٹمی اور نیوکلیائی طبیعیات',
    description: 'Structure of atom, isotopes, natural radioactivity (alpha, beta, gamma rays), half-life (T_1/2), nuclear transmutations, nuclear fission and fusion.',
    summary: 'An atom has a dense nucleus consisting of protons and neutrons (nucleons) surrounded by orbiting electrons. Isotopes have the same atomic number Z but different mass numbers A. Unstable nuclei undergo radioactive decay by emitting alpha particles (He²⁺), beta particles (electrons/positrons), or gamma rays (photons). Half-life T_1/2 is the time required for half of the radioactive nuclei to decay. Nuclear fission splits a heavy nucleus (U-235) into lighter nuclei, releasing immense energy. Nuclear fusion joins light nuclei (hydrogen) at extreme temperatures, powering the Sun.',
    shortQuestions: [
      {
        id: 'p18-sq1',
        questionNumber: 'Q.1',
        question: 'What are isotopes? Give an example.',
        answer: 'Isotopes are atoms of the same element having the same atomic number Z (same number of protons) but different atomic mass numbers A (different number of neutrons). Example: Hydrogen has 3 isotopes: Protium (¹H), Deuterium (²H), and Tritium (³H).'
      },
      {
        id: 'p18-sq2',
        questionNumber: 'Q.2',
        question: 'Define half-life of a radioactive element.',
        answer: 'The time during which half of the unstable radioactive nuclei in a given sample decay into daughter nuclei is called its half-life (T_1/2).'
      },
      {
        id: 'p18-sq3',
        questionNumber: 'Q.3',
        question: 'Differentiate between nuclear fission and nuclear fusion.',
        answer: 'In nuclear fission, a heavy unstable nucleus (e.g. U-235) splits into two lighter nuclei upon absorbing a neutron. In nuclear fusion, two light nuclei combine to form a heavier nucleus at very high temperature.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p18-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Compare the properties of Alpha (α), Beta (β), and Gamma (γ) radiations regarding charge, ionizing power, and penetrating power.',
        answerReference: '1. Alpha (α): Helium nuclei (He²⁺), +2e charge, highest ionizing power, lowest penetrating power (stopped by sheet of paper). 2. Beta (β): High-speed electrons (e⁻), -1e charge, moderate ionizing power, moderate penetrating power (stopped by few mm aluminium). 3. Gamma (γ): High-energy electromagnetic photons, zero charge, least ionizing power, highest penetrating power (requires thick lead or concrete to shield).',
        guidance: 'Draw comparison table highlighting nature, charge, ionization, and penetration.'
      }
    ],
    quizzes: [
      {
        id: 'p18-q1',
        questionNumber: 1,
        question: 'Isotopes are atoms of the same element with different:',
        options: [
          { key: 'a', text: 'atomic mass (A)' },
          { key: 'b', text: 'atomic number (Z)' },
          { key: 'c', text: 'number of protons' },
          { key: 'd', text: 'number of electrons' }
        ],
        correctAnswer: 'a',
        explanation: 'Isotopes share identical proton number Z but have differing neutron counts, hence different mass number A.'
      },
      {
        id: 'p18-q2',
        questionNumber: 2,
        question: 'One of the isotopes of uranium is ²³⁸₉₂U. The number of neutrons in this isotope is:',
        options: [
          { key: 'a', text: '92' },
          { key: 'b', text: '146' },
          { key: 'c', text: '238' },
          { key: 'd', text: '330' }
        ],
        correctAnswer: 'b',
        explanation: 'N = A - Z = 238 - 92 = 146 neutrons.'
      },
      {
        id: 'p18-q3',
        questionNumber: 3,
        question: 'Which among the following radiations has the greatest penetrating power?',
        options: [
          { key: 'a', text: 'beta particles' },
          { key: 'b', text: 'gamma rays' },
          { key: 'c', text: 'alpha particles' },
          { key: 'd', text: 'all have the same penetrating ability' }
        ],
        correctAnswer: 'b',
        explanation: 'Gamma rays are high-energy uncharged photons that penetrate deep into matter.'
      },
      {
        id: 'p18-q4',
        questionNumber: 4,
        question: 'What happens to the atomic number Z of a nucleus when it emits a beta (β⁻) particle?',
        options: [
          { key: 'a', text: 'increases by 1' },
          { key: 'b', text: 'stays the same' },
          { key: 'c', text: 'decreases by 2' },
          { key: 'd', text: 'decreases by 1' }
        ],
        correctAnswer: 'a',
        explanation: 'In beta decay, a neutron converts into a proton, increasing atomic number Z by 1.'
      },
      {
        id: 'p18-q5',
        questionNumber: 5,
        question: 'The half-life of an isotope is 1 day. What fraction remains after 2 days?',
        options: [
          { key: 'a', text: 'one-half' },
          { key: 'b', text: 'one-quarter (1/4)' },
          { key: 'c', text: 'one-eighth' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'b',
        explanation: 'After 1 half-life: 1/2 remains. After 2 half-lives: (1/2)² = 1/4 remains.'
      },
      {
        id: 'p18-q6',
        questionNumber: 6,
        question: 'When Uranium (92 protons) ejects a beta particle, how many protons are left in the remaining nucleus?',
        options: [
          { key: 'a', text: '90 protons' },
          { key: 'b', text: '91 protons' },
          { key: 'c', text: '92 protons' },
          { key: 'd', text: '93 protons (Neptunium)' }
        ],
        correctAnswer: 'd',
        explanation: 'Beta emission increases proton count by 1: 92 + 1 = 93.'
      },
      {
        id: 'p18-q7',
        questionNumber: 7,
        question: 'In ²³⁵₉₂U, the number 92 represents the number of:',
        options: [
          { key: 'a', text: 'protons' },
          { key: 'b', text: 'neutrons' },
          { key: 'c', text: 'protons and neutrons' },
          { key: 'd', text: 'neutrons and electrons' }
        ],
        correctAnswer: 'b',
        explanation: 'The subscript 92 is the atomic number Z representing the number of protons.'
      },
      {
        id: 'p18-q8',
        questionNumber: 8,
        question: 'Continuous release of vast energy by the sun is due to:',
        options: [
          { key: 'a', text: 'nuclear fission' },
          { key: 'b', text: 'nuclear fusion' },
          { key: 'c', text: 'burning of gases' },
          { key: 'd', text: 'chemical reaction' }
        ],
        correctAnswer: 'b',
        explanation: 'Thermonuclear fusion of hydrogen nuclei into helium powers the Sun.'
      },
      {
        id: 'p18-q9',
        questionNumber: 9,
        question: 'When a heavy nucleus splits into two lighter nuclei, the process will:',
        options: [
          { key: 'a', text: 'release nuclear energy' },
          { key: 'b', text: 'absorb nuclear energy' },
          { key: 'c', text: 'release chemical energy' },
          { key: 'd', text: 'absorb chemical energy' }
        ],
        correctAnswer: 'a',
        explanation: 'Nuclear fission converts nuclear mass defect into enormous kinetic and radiant energy.'
      },
      {
        id: 'p18-q10',
        questionNumber: 10,
        question: 'Radiocarbon dating works on the principle that:',
        options: [
          { key: 'a', text: 'plants and animals are strong emitters of C-14' },
          { key: 'b', text: 'after a plant or animal dies, it stops taking in fresh carbon-14' },
          { key: 'c', text: 'there is abundant non-radioactive CO₂ in air' },
          { key: 'd', text: 'when organisms die, they absorb fresh C-14' }
        ],
        correctAnswer: 'b',
        explanation: 'Upon death, metabolic carbon intake ceases and existing C-14 steadily decays with 5730-year half-life.'
      },
      {
        id: 'p18-q11',
        questionNumber: 11,
        question: 'The half-life of plutonium-236 (²³⁶₉₄Pu) in years is approximately:',
        options: [
          { key: 'a', text: '0.85' },
          { key: 'b', text: '1.85' },
          { key: 'c', text: '2.85' },
          { key: 'd', text: '3.85' }
        ],
        correctAnswer: 'c',
        explanation: 'Half-life of Pu-236 is approximately 2.85 years.'
      },
      {
        id: 'p18-q12',
        questionNumber: 12,
        question: 'To diagnose and locate brain tumours, medical doctors use radioactive:',
        options: [
          { key: 'a', text: 'iodine-131' },
          { key: 'b', text: 'phosphorus-32' },
          { key: 'c', text: 'cobalt-60' },
          { key: 'd', text: 'carbon-14' }
        ],
        correctAnswer: 'b',
        explanation: 'Phosphorus-32 accumulates in cancerous malignant brain tissue, aiding identification.'
      },
      {
        id: 'p18-q13',
        questionNumber: 13,
        question: 'Atomic mass number A is determined by the relation:',
        options: [
          { key: 'a', text: 'Z - A' },
          { key: 'b', text: 'A + N' },
          { key: 'c', text: 'Z + N' },
          { key: 'd', text: 'Z + A' }
        ],
        correctAnswer: 'c',
        explanation: 'Total nucleons A = number of protons Z + number of neutrons N.'
      },
      {
        id: 'p18-q14',
        questionNumber: 14,
        question: 'A proton is approximately how many times heavier than an electron?',
        options: [
          { key: 'a', text: '1836' },
          { key: 'b', text: '1863' },
          { key: 'c', text: '1870' },
          { key: 'd', text: '1800' }
        ],
        correctAnswer: 'a',
        explanation: 'm_p / m_e = (1.673 × 10⁻²⁷) / (9.1 × 10⁻³¹) ≈ 1836.'
      },
      {
        id: 'p18-q15',
        questionNumber: 15,
        question: 'The safe international limit of background radiation exposure in one year for humans is:',
        options: [
          { key: 'a', text: '3 rem' },
          { key: 'b', text: '4 rem' },
          { key: 'c', text: '5 rem' },
          { key: 'd', text: '6 rem' }
        ],
        correctAnswer: 'c',
        explanation: 'Standard annual radiation worker safety limit is 5 rem (50 mSv).'
      },
      {
        id: 'p18-q16',
        questionNumber: 16,
        question: 'Standard notation representing a chemical element with mass number A and atomic number Z is:',
        options: [
          { key: 'a', text: 'X' },
          { key: 'b', text: 'ᴬ_Z X' },
          { key: 'c', text: 'ᶻ_A X' },
          { key: 'd', text: 'ᴬX' }
        ],
        correctAnswer: 'b',
        explanation: 'Elements are written as ᴬ_Z X, with superscript A (mass) and subscript Z (atomic number).'
      },
      {
        id: 'p18-q17',
        questionNumber: 17,
        question: 'The half-life of radioactive iodine-131 in days is:',
        options: [
          { key: 'a', text: '5.07' },
          { key: 'b', text: '6.07' },
          { key: 'c', text: '7.07' },
          { key: 'd', text: '8.07' }
        ],
        correctAnswer: 'd',
        explanation: 'Iodine-131 has a half-life of 8.07 days.'
      },
      {
        id: 'p18-q18',
        questionNumber: 18,
        question: 'The half-life of radioactive lead-212 is:',
        options: [
          { key: 'a', text: '10.6 hours' },
          { key: 'b', text: '10.4 hours' },
          { key: 'c', text: '10.2 hours' },
          { key: 'd', text: '10.00 hours' }
        ],
        correctAnswer: 'a',
        explanation: 'Lead-212 decays with half-life of 10.6 hours.'
      },
      {
        id: 'p18-q19',
        questionNumber: 19,
        question: 'Naturally occurring isotopes of hydrogen are in number:',
        options: [
          { key: 'a', text: '4' },
          { key: 'b', text: '3' },
          { key: 'c', text: '2' },
          { key: 'd', text: '1' }
        ],
        correctAnswer: 'b',
        explanation: 'Hydrogen has 3 isotopes: Protium, Deuterium, and Tritium.'
      },
      {
        id: 'p18-q20',
        questionNumber: 20,
        question: 'The half-life of radiocarbon (carbon-14) is:',
        options: [
          { key: 'a', text: '1646 years' },
          { key: 'b', text: '5730 years' },
          { key: 'c', text: '5000 years' },
          { key: 'd', text: '1900 years' }
        ],
        correctAnswer: 'b',
        explanation: 'Carbon-14 has a well-established half-life of 5730 years.'
      },
      {
        id: 'p18-q21',
        questionNumber: 21,
        question: 'The ionizing radiation typically used during deep cancer radiotherapy is:',
        options: [
          { key: 'a', text: 'alpha rays' },
          { key: 'b', text: 'beta rays' },
          { key: 'c', text: 'gamma rays (Cobalt-60)' },
          { key: 'd', text: 'x-rays' }
        ],
        correctAnswer: 'c',
        explanation: 'High-energy gamma rays from Cobalt-60 penetrate deep to destroy malignant cancer tumors.'
      },
      {
        id: 'p18-q22',
        questionNumber: 22,
        question: 'Nuclear fission was first experimentally observed by Otto Hahn and:',
        options: [
          { key: 'a', text: 'Fritz Strassmann' },
          { key: 'b', text: 'Albert Einstein' },
          { key: 'c', text: 'Willebrord Snell' },
          { key: 'd', text: 'Isaac Newton' }
        ],
        correctAnswer: 'a',
        explanation: 'Otto Hahn and Fritz Strassmann discovered nuclear fission in 1938.'
      },
      {
        id: 'p18-q23',
        questionNumber: 23,
        question: 'The subatomic particles located inside the atomic nucleus are:',
        options: [
          { key: 'a', text: 'protons and electrons' },
          { key: 'b', text: 'protons only' },
          { key: 'c', text: 'protons and neutrons' },
          { key: 'd', text: 'electrons and neutrons' }
        ],
        correctAnswer: 'c',
        explanation: 'The nucleus consists of protons and neutrons (jointly called nucleons).'
      },
      {
        id: 'p18-q24',
        questionNumber: 24,
        question: 'In Tritium (³₁H), the number of neutrons is:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'b',
        explanation: 'A = 3, Z = 1 ⇒ N = A - Z = 3 - 1 = 2 neutrons.'
      },
      {
        id: 'p18-q25',
        questionNumber: 25,
        question: 'Alpha (α) particles carry what type of charge?',
        options: [
          { key: 'a', text: 'negative' },
          { key: 'b', text: 'neutral' },
          { key: 'c', text: 'positive (+2e)' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'c',
        explanation: 'Alpha particles are doubly ionized helium nuclei (He²⁺) carrying a +2e positive charge.'
      },
      {
        id: 'p18-q26',
        questionNumber: 26,
        question: 'The half-life of radium-226 is:',
        options: [
          { key: 'a', text: '4000 years' },
          { key: 'b', text: '2800 years' },
          { key: 'c', text: '1620 years' },
          { key: 'd', text: '5730 years' }
        ],
        correctAnswer: 'c',
        explanation: 'Radium-226 has a half-life of 1620 years.'
      },
      {
        id: 'p18-q27',
        questionNumber: 27,
        question: 'Atomic number (number of protons) is denoted by the symbol:',
        options: [
          { key: 'a', text: 'Z' },
          { key: 'b', text: 'A' },
          { key: 'c', text: 'X' },
          { key: 'd', text: 'N' }
        ],
        correctAnswer: 'a',
        explanation: 'Z denotes atomic number, while A denotes mass number.'
      },
      {
        id: 'p18-q28',
        questionNumber: 28,
        question: 'The half-life of radioactive hydrogen-3 (Tritium) is:',
        options: [
          { key: 'a', text: '12.3 years' },
          { key: 'b', text: '5730 years' },
          { key: 'c', text: '30 years' },
          { key: 'd', text: '2.85 years' }
        ],
        correctAnswer: 'a',
        explanation: 'Tritium has a half-life of approximately 12.3 years.'
      }
    ]
  }
];
