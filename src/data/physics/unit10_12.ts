import { Chapter } from '../../types/book';

export const UNIT_10_12: Chapter[] = [
  {
    id: 'phy-u10',
    number: 10,
    title: 'Simple Harmonic Motion and Waves',
    urduTitle: 'سادہ ہارمونک موشن اور ویوز',
    description: 'Simple harmonic motion of mass-spring system and simple pendulum, wave motion, longitudinal vs transverse waves, wave equation v = fλ, and ripple tank.',
    summary: 'Simple Harmonic Motion (SHM) occurs when net force is directly proportional to displacement from mean position and always directed toward the mean position (a ∝ -x). Formula for mass-spring system: T = 2π√(m/k). Formula for simple pendulum: T = 2π√(l/g). Waves transfer energy without transferring matter. Wave equation connects wave speed, frequency, and wavelength: v = fλ. In ripple tank, reflection, refraction, and diffraction of water waves are observed.',
    shortQuestions: [
      {
        id: 'p10-sq1',
        questionNumber: 'Q.1',
        question: 'Define Simple Harmonic Motion (SHM) and state its condition.',
        answer: 'Simple harmonic motion occurs when the net restoring force is directly proportional to displacement from the mean position and is always directed towards the mean position: a ∝ -x.'
      },
      {
        id: 'p10-sq2',
        questionNumber: 'Q.2',
        question: 'What is a restoring force? Give an example.',
        answer: 'A restoring force always pushes or pulls the object performing oscillatory motion towards the mean position. Example: In mass-spring system, spring force F = -kx acts as restoring force.'
      },
      {
        id: 'p10-sq3',
        questionNumber: 'Q.3',
        question: 'Differentiate between longitudinal and transverse waves.',
        answer: 'In longitudinal waves, particles of the medium vibrate parallel to the direction of wave propagation (e.g. sound waves). In transverse waves, particles vibrate perpendicular to the direction of propagation (e.g. water waves, light).'
      },
      {
        id: 'p10-sq4',
        questionNumber: 'Q.4',
        question: 'Derive the wave equation: v = fλ.',
        answer: 'Speed is distance divided by time: v = d/t. If wave travels a distance equal to one wavelength λ in time period T: v = λ/T. Since frequency f = 1/T, substituting gives v = fλ.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p10-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Prove that the motion of a simple pendulum is Simple Harmonic Motion (SHM). Write the formula for its time period.',
        answerReference: 'For small angular displacement θ, restoring force is provided by the component of gravitational weight mg sin θ acting towards the mean position: F = -mg sin θ ≈ -mg(x/l). Since F = ma, ma = -mg(x/l) ⇒ a = -(g/l)x. Since g and l are constant, a ∝ -x. This proves SHM. Time period formula: T = 2π√(l/g).',
        guidance: 'Draw pendulum diagram showing components mg cos θ and mg sin θ.'
      }
    ],
    numericals: [
      {
        id: 'p10-num1',
        questionNumber: 'Solved Problem 1',
        problem: 'A ripple tank vibrator working at 30 Hz produces 25 complete waves in a distance of 50 cm. Find the velocity of the wave.',
        givenData: ['Frequency f = 30 Hz', 'Total waves = 25', 'Total distance = 50 cm'],
        solutionSteps: [
          'Calculate wavelength λ = Total distance / Number of waves = 50 cm / 25 = 2 cm.',
          'Apply wave equation: v = fλ.',
          'v = 30 s⁻¹ × 2 cm = 60 cm s⁻¹ = 0.6 m s⁻¹.'
        ],
        result: 'Velocity v = 60 cm s⁻¹'
      }
    ],
    quizzes: [
      {
        id: 'p10-q1',
        questionNumber: 1,
        question: 'Which of the following is an example of simple harmonic motion?',
        options: [
          { key: 'a', text: 'Motion of a simple pendulum' },
          { key: 'b', text: 'The motion of ceiling fan' },
          { key: 'c', text: 'The spinning of the Earth on its axis' },
          { key: 'd', text: 'A bouncing ball on a floor' }
        ],
        correctAnswer: 'a',
        explanation: 'A simple pendulum executes oscillatory to-and-fro motion about its mean position with acceleration proportional to displacement.'
      },
      {
        id: 'p10-q2',
        questionNumber: 2,
        question: 'If the mass of the bob of a pendulum is increased by a factor of 3, the period of the pendulum\'s motion will:',
        options: [
          { key: 'a', text: 'be increased by a factor of 2' },
          { key: 'b', text: 'remain the same' },
          { key: 'c', text: 'be decreased by a factor of 2' },
          { key: 'd', text: 'be decreased by a factor of 4' }
        ],
        correctAnswer: 'b',
        explanation: 'Time period of simple pendulum T = 2π√(l/g) is independent of the mass of the bob.'
      },
      {
        id: 'p10-q3',
        questionNumber: 3,
        question: 'If the mass of the bob is decreased by the factor 2, then period of pendulum will be:',
        options: [
          { key: 'a', text: 'increased by the factor 2' },
          { key: 'b', text: 'remain the same' },
          { key: 'c', text: 'decreased by the factor 2' },
          { key: 'd', text: 'decreased by the factor 4' }
        ],
        correctAnswer: 'b',
        explanation: 'T = 2π√(l/g) depends only on length l and gravitational acceleration g, not mass.'
      },
      {
        id: 'p10-q4',
        questionNumber: 4,
        question: 'Which of the following devices can be used to produce both transverse and longitudinal waves?',
        options: [
          { key: 'a', text: 'a string' },
          { key: 'b', text: 'a ripple tank' },
          { key: 'c', text: 'a helical spring (slinky)' },
          { key: 'd', text: 'a tuning fork' }
        ],
        correctAnswer: 'c',
        explanation: 'A slinky helical spring can produce longitudinal waves by pushing/pulling, and transverse waves by moving sideways.'
      },
      {
        id: 'p10-q5',
        questionNumber: 5,
        question: 'Waves transfer from one place to other:',
        options: [
          { key: 'a', text: 'energy' },
          { key: 'b', text: 'frequency' },
          { key: 'c', text: 'wavelength' },
          { key: 'd', text: 'velocity' }
        ],
        correctAnswer: 'a',
        explanation: 'Waves are disturbances that propagate energy across space without net transport of matter.'
      },
      {
        id: 'p10-q6',
        questionNumber: 6,
        question: 'Which of the following is a method of energy transfer?',
        options: [
          { key: 'a', text: 'conduction' },
          { key: 'b', text: 'radiation' },
          { key: 'c', text: 'wave motion' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'd',
        explanation: 'Conduction, radiation, and wave motion are all mechanisms of transferring energy.'
      },
      {
        id: 'p10-q7',
        questionNumber: 7,
        question: 'In vacuum, all electromagnetic waves have the same:',
        options: [
          { key: 'a', text: 'speed' },
          { key: 'b', text: 'frequency' },
          { key: 'c', text: 'amplitude' },
          { key: 'd', text: 'wavelength' }
        ],
        correctAnswer: 'a',
        explanation: 'All electromagnetic waves travel at the speed of light c = 3 × 10⁸ m/s in a vacuum.'
      },
      {
        id: 'p10-q8',
        questionNumber: 8,
        question: 'A large ripple tank with a vibrator working at 30 Hz produces 25 complete waves in a distance of 50 cm. The velocity of the wave is:',
        options: [
          { key: 'a', text: '53 cms⁻¹' },
          { key: 'b', text: '60 cms⁻¹' },
          { key: 'c', text: '750 cms⁻¹' },
          { key: 'd', text: '1500 cms⁻¹' }
        ],
        correctAnswer: 'b',
        explanation: 'λ = 50 cm / 25 = 2 cm; v = fλ = 30 × 2 = 60 cm/s.'
      },
      {
        id: 'p10-q9',
        questionNumber: 9,
        question: 'Which of the following characteristics of a wave is independent of the others?',
        options: [
          { key: 'a', text: 'speed' },
          { key: 'b', text: 'frequency' },
          { key: 'c', text: 'amplitude' },
          { key: 'd', text: 'wavelength' }
        ],
        correctAnswer: 'c',
        explanation: 'Wave speed, frequency, and wavelength are interdependent (v = fλ), while amplitude is independent and determined by source energy.'
      },
      {
        id: 'p10-q10',
        questionNumber: 10,
        question: 'The relation between velocity (v), frequency (f) and wavelength (λ) of a wave (Wave equation) is:',
        options: [
          { key: 'a', text: 'vf = λ' },
          { key: 'b', text: 'fλ = v' },
          { key: 'c', text: 'vλ = f' },
          { key: 'd', text: 'v = λ/f' }
        ],
        correctAnswer: 'b',
        explanation: 'The fundamental wave equation is v = fλ (or fλ = v).'
      },
      {
        id: 'p10-q11',
        questionNumber: 11,
        question: 'The product of frequency (f) and wavelength (λ) is equal to:',
        options: [
          { key: 'a', text: 'time period' },
          { key: 'b', text: 'amplitude' },
          { key: 'c', text: 'wave speed' },
          { key: 'd', text: 'wave energy' }
        ],
        correctAnswer: 'c',
        explanation: 'f × λ = v (wave speed).'
      },
      {
        id: 'p10-q12',
        questionNumber: 12,
        question: 'In simple pendulum motion, restoring force is provided by:',
        options: [
          { key: 'a', text: 'air resistance' },
          { key: 'b', text: 'tension in the string' },
          { key: 'c', text: 'inertia' },
          { key: 'd', text: 'weight of body' }
        ],
        correctAnswer: 'd',
        explanation: 'The component of weight mg sin θ acts toward the mean equilibrium position as the restoring force.'
      },
      {
        id: 'p10-q13',
        questionNumber: 13,
        question: 'The shock absorbers of vehicles are an example of:',
        options: [
          { key: 'a', text: 'simple harmonic motion' },
          { key: 'b', text: 'vibratory motion' },
          { key: 'c', text: 'damped motion' },
          { key: 'd', text: 'linear motion' }
        ],
        correctAnswer: 'c',
        explanation: 'Shock absorbers introduce damping friction to suppress excessive vehicle oscillations.'
      },
      {
        id: 'p10-q14',
        questionNumber: 14,
        question: 'If the speed of a wave is 340 ms⁻¹ and wavelength is 0.5m, then frequency will be:',
        options: [
          { key: 'a', text: '170 Hz' },
          { key: 'b', text: '340 Hz' },
          { key: 'c', text: '680 Hz' },
          { key: 'd', text: '3400 Hz' }
        ],
        correctAnswer: 'c',
        explanation: 'f = v / λ = 340 / 0.5 = 680 Hz.'
      },
      {
        id: 'p10-q15',
        questionNumber: 15,
        question: 'Waves are of how many main types based on requirement of medium?',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'b',
        explanation: 'Two main types: Mechanical waves (require material medium) and Electromagnetic waves (do not require medium).'
      },
      {
        id: 'p10-q16',
        questionNumber: 16,
        question: 'Formula for the time period of a mass attached to a spring is:',
        options: [
          { key: 'a', text: 'T = 2π√(k/m)' },
          { key: 'b', text: 'T = 2π√(m/k)' },
          { key: 'c', text: 'T = 2π(m/k)' },
          { key: 'd', text: 'T = 4π√(m/k)' }
        ],
        correctAnswer: 'b',
        explanation: 'Time period of mass-spring system is T = 2π√(m/k).'
      },
      {
        id: 'p10-q17',
        questionNumber: 17,
        question: 'Ripple tank is a device which is used to study the characteristics of:',
        options: [
          { key: 'a', text: 'mechanical waves' },
          { key: 'b', text: 'light waves' },
          { key: 'c', text: 'radio waves' },
          { key: 'd', text: 'electromagnetic waves' }
        ],
        correctAnswer: 'a',
        explanation: 'Ripple tank generates water waves on shallow water surface to study mechanical wave properties.'
      },
      {
        id: 'p10-q18',
        questionNumber: 18,
        question: 'Formula to calculate time period of a simple pendulum is:',
        options: [
          { key: 'a', text: 'T = 2π√(m/k)' },
          { key: 'b', text: 'T = 2π√(k/m)' },
          { key: 'c', text: 'T = 2π√(l/g)' },
          { key: 'd', text: 'T = 2π√(g/l)' }
        ],
        correctAnswer: 'c',
        explanation: 'Time period of simple pendulum is T = 2π√(l/g).'
      },
      {
        id: 'p10-q19',
        questionNumber: 19,
        question: 'Wavelength λ of waves can also be defined as the ratio of:',
        options: [
          { key: 'a', text: 'speed and frequency' },
          { key: 'b', text: 'time period and frequency' },
          { key: 'c', text: 'distance and speed' },
          { key: 'd', text: 'frequency and speed' }
        ],
        correctAnswer: 'a',
        explanation: 'From v = fλ, wavelength λ = v / f (ratio of speed to frequency).'
      },
      {
        id: 'p10-q20',
        questionNumber: 20,
        question: 'The S.I. unit of amplitude is:',
        options: [
          { key: 'a', text: 'sec' },
          { key: 'b', text: 'Hz' },
          { key: 'c', text: 'm (meter)' },
          { key: 'd', text: 'cm' }
        ],
        correctAnswer: 'c',
        explanation: 'Amplitude is maximum displacement from mean position, so its SI unit is meter (m).'
      },
      {
        id: 'p10-q21',
        questionNumber: 21,
        question: 'If length of a pendulum is one meter on earth, its time period will be approximately:',
        options: [
          { key: 'a', text: '2 s' },
          { key: 'b', text: '10 s' },
          { key: 'c', text: '1 s' },
          { key: 'd', text: '6 s' }
        ],
        correctAnswer: 'a',
        explanation: 'T = 2π√(1 / 9.8) ≈ 2 × 3.1416 × 0.3194 ≈ 2.0 s (seconds pendulum).'
      },
      {
        id: 'p10-q22',
        questionNumber: 22,
        question: 'When l = 1.0 m, the exact calculated time period of simple pendulum is:',
        options: [
          { key: 'a', text: '1.99 sec' },
          { key: 'b', text: '2.11 sec' },
          { key: 'c', text: '1.89 sec' },
          { key: 'd', text: '1.88 sec' }
        ],
        correctAnswer: 'a',
        explanation: 'T = 2 × 3.1416 × √(1 / 9.8) = 6.283 × 0.3194 = 1.99 s.'
      },
      {
        id: 'p10-q23',
        questionNumber: 23,
        question: 'The relation between time, speed and distance is:',
        options: [
          { key: 'a', text: 'v = t / d' },
          { key: 'b', text: 'v = dt' },
          { key: 'c', text: 'v = d / t' },
          { key: 'd', text: 'v = t² / d' }
        ],
        correctAnswer: 'c',
        explanation: 'Speed v = distance (d) / time (t).'
      },
      {
        id: 'p10-q24',
        questionNumber: 24,
        question: 'In Simple Harmonic Motion, velocity at extreme position is:',
        options: [
          { key: 'a', text: 'maximum' },
          { key: 'b', text: 'minimum' },
          { key: 'c', text: 'zero' },
          { key: 'd', text: 'sometime maximum and sometime minimum' }
        ],
        correctAnswer: 'c',
        explanation: 'At the extreme position, the oscillating body comes momentarily to rest, so velocity is zero.'
      },
      {
        id: 'p10-q25',
        questionNumber: 25,
        question: 'Radio waves are:',
        options: [
          { key: 'a', text: 'longitudinal waves' },
          { key: 'b', text: 'transverse mechanical waves' },
          { key: 'c', text: 'electromagnetic waves' },
          { key: 'd', text: 'all of these' }
        ],
        correctAnswer: 'c',
        explanation: 'Radio waves are electromagnetic transverse waves traveling at the speed of light.'
      },
      {
        id: 'p10-q26',
        questionNumber: 26,
        question: 'When a body moves to and fro about a point, its motion is called:',
        options: [
          { key: 'a', text: 'random motion' },
          { key: 'b', text: 'vibratory motion' },
          { key: 'c', text: 'linear motion' },
          { key: 'd', text: 'rotatory motion' }
        ],
        correctAnswer: 'b',
        explanation: 'To-and-fro motion of a body about its mean position is termed vibratory or oscillatory motion.'
      },
      {
        id: 'p10-q27',
        questionNumber: 27,
        question: 'The number of waves passing through a point in one second is called:',
        options: [
          { key: 'a', text: 'displacement' },
          { key: 'b', text: 'frequency' },
          { key: 'c', text: 'wavelength' },
          { key: 'd', text: 'amplitude' }
        ],
        correctAnswer: 'b',
        explanation: 'Frequency f is the number of wave cycles passing a fixed point per unit time (second).'
      },
      {
        id: 'p10-q28',
        questionNumber: 28,
        question: 'When did Christian Huygens invent the pendulum clock?',
        options: [
          { key: 'a', text: '1656' },
          { key: 'b', text: '1756' },
          { key: 'c', text: '1856' },
          { key: 'd', text: '1956' }
        ],
        correctAnswer: 'a',
        explanation: 'Dutch scientist Christian Huygens invented the first pendulum clock in 1656.'
      },
      {
        id: 'p10-q29',
        questionNumber: 29,
        question: 'A high frequency wave carries __________ energy than a low frequency wave of the same amplitude:',
        options: [
          { key: 'a', text: 'less' },
          { key: 'b', text: 'same' },
          { key: 'c', text: 'more' },
          { key: 'd', text: 'double' }
        ],
        correctAnswer: 'c',
        explanation: 'Energy of wave vibration increases with frequency (E ∝ f).'
      },
      {
        id: 'p10-q30',
        questionNumber: 30,
        question: 'If the time period T is given, then frequency f is calculated as:',
        options: [
          { key: 'a', text: 'f = 1 / T' },
          { key: 'b', text: 'f = 2 / T' },
          { key: 'c', text: 'f = 3 / T' },
          { key: 'd', text: 'f = 4 / T' }
        ],
        correctAnswer: 'a',
        explanation: 'Frequency is the reciprocal of the time period: f = 1/T.'
      },
      {
        id: 'p10-q31',
        questionNumber: 31,
        question: 'Distance between two consecutive compressions or two consecutive rarefactions of waves is called:',
        options: [
          { key: 'a', text: 'time period' },
          { key: 'b', text: 'frequency' },
          { key: 'c', text: 'wavelength' },
          { key: 'd', text: 'focal length' }
        ],
        correctAnswer: 'c',
        explanation: 'The span between two successive identical points of phase (like consecutive compressions) is the wavelength λ.'
      },
      {
        id: 'p10-q32',
        questionNumber: 32,
        question: 'A wave moves on a slinky with frequency of 4 Hz and wavelength of 0.4 m. Its wave speed will be:',
        options: [
          { key: 'a', text: '0.6 ms⁻¹' },
          { key: 'b', text: '1.6 ms⁻¹' },
          { key: 'c', text: '2.6 ms⁻¹' },
          { key: 'd', text: '3.6 ms⁻¹' }
        ],
        correctAnswer: 'b',
        explanation: 'v = fλ = 4 Hz × 0.4 m = 1.6 m/s.'
      },
      {
        id: 'p10-q33',
        questionNumber: 33,
        question: 'The S.I unit of frequency is:',
        options: [
          { key: 'a', text: 'second' },
          { key: 'b', text: 'hertz' },
          { key: 'c', text: 'ampere' },
          { key: 'd', text: 'newton' }
        ],
        correctAnswer: 'b',
        explanation: 'The SI unit of frequency is hertz (Hz = s⁻¹).'
      },
      {
        id: 'p10-q34',
        questionNumber: 34,
        question: 'Kinetic energy of mass-spring system is maximum at:',
        options: [
          { key: 'a', text: 'extreme position' },
          { key: 'b', text: 'mean position' },
          { key: 'c', text: 'both a and b' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'b',
        explanation: 'Velocity is maximum at the mean position, hence KE = ½mv² is maximum there.'
      },
      {
        id: 'p10-q35',
        questionNumber: 35,
        question: 'Vibrating bodies in air produce:',
        options: [
          { key: 'a', text: 'transverse waves' },
          { key: 'b', text: 'electromagnetic waves' },
          { key: 'c', text: 'compressional (longitudinal) waves' },
          { key: 'd', text: 'radio waves' }
        ],
        correctAnswer: 'c',
        explanation: 'A vibrating prong creates series of compressions and rarefactions in surrounding air.'
      },
      {
        id: 'p10-q36',
        questionNumber: 36,
        question: 'The formula of Hooke\'s law for an elastic spring is:',
        options: [
          { key: 'a', text: 'F = -kx' },
          { key: 'b', text: 'k = -2F/x' },
          { key: 'c', text: 'F = -1/(kx)' },
          { key: 'd', text: 'F = -x/k' }
        ],
        correctAnswer: 'a',
        explanation: 'Hooke\'s law states restoring force F is proportional to displacement x: F = -kx.'
      },
      {
        id: 'p10-q37',
        questionNumber: 37,
        question: 'If the mass of a spring-mass system is doubled, its time period becomes:',
        options: [
          { key: 'a', text: '√2 T' },
          { key: 'b', text: 'T / 2' },
          { key: 'c', text: '√T / 2' },
          { key: 'd', text: 'T / √2' }
        ],
        correctAnswer: 'a',
        explanation: 'T ∝ √m; doubling mass (2m) multiplies time period by factor of √2.'
      },
      {
        id: 'p10-q38',
        questionNumber: 38,
        question: 'The spring constant k is given by:',
        options: [
          { key: 'a', text: 'k = -F / x' },
          { key: 'b', text: 'F = ma' },
          { key: 'c', text: 'W = mg' },
          { key: 'd', text: 'k = -x / m' }
        ],
        correctAnswer: 'a',
        explanation: 'From F = -kx, spring constant k = -F/x.'
      },
      {
        id: 'p10-q39',
        questionNumber: 39,
        question: 'An example of mechanical waves is:',
        options: [
          { key: 'a', text: 'x-rays' },
          { key: 'b', text: 'light waves' },
          { key: 'c', text: 'sound waves' },
          { key: 'd', text: 'radio waves' }
        ],
        correctAnswer: 'c',
        explanation: 'Sound waves are mechanical waves that require a material medium (solid, liquid, gas) to travel.'
      },
      {
        id: 'p10-q40',
        questionNumber: 40,
        question: 'When water waves enter from deep water into the region of shallow water, their wavelength:',
        options: [
          { key: 'a', text: 'decreases' },
          { key: 'b', text: 'increases' },
          { key: 'c', text: 'becomes zero' },
          { key: 'd', text: 'remains same' }
        ],
        correctAnswer: 'a',
        explanation: 'In shallow water wave speed v decreases while frequency f remains constant, so λ = v/f decreases.'
      }
    ]
  },
  {
    id: 'phy-u11',
    number: 11,
    title: 'Sound',
    urduTitle: 'آواز (ساؤنڈ)',
    description: 'Longitudinal nature of sound waves, characteristics of sound (loudness, pitch, quality), sound intensity level in decibels (dB), audible frequency range, ultrasound applications.',
    summary: 'Sound is a mechanical disturbance propagating as longitudinal waves consisting of alternating compressions and rarefactions. Loudness depends upon the amplitude of the vibrating body, surface area, and distance. Pitch depends on frequency. Quality distinguishes notes of same pitch and loudness. Sound intensity level is measured in decibels (dB): Sound level = 10 log(I / I₀) dB, where I₀ = 10⁻¹² W/m². Human audible range is 20 Hz to 20,000 Hz. Frequencies above 20 kHz are ultrasound, widely used in medical diagnosis and SONAR.',
    shortQuestions: [
      {
        id: 'p11-sq1',
        questionNumber: 'Q.1',
        question: 'Why does sound require a material medium to propagate?',
        answer: 'Sound travels via elastic collisions between neighboring molecules in compressions and rarefactions. Without particles in a vacuum, wave disturbances cannot propagate.'
      },
      {
        id: 'p11-sq2',
        questionNumber: 'Q.2',
        question: 'Define intensity of sound and write its SI unit.',
        answer: 'Sound energy passing per second through unit area held perpendicular to direction of propagation is called sound intensity: I = P/A. Its SI unit is watt per square meter (W m⁻²).'
      },
      {
        id: 'p11-sq3',
        questionNumber: 'Q.3',
        question: 'What is the human audible frequency range?',
        answer: 'A normal healthy human ear can detect sound frequencies ranging from 20 Hz to 20,000 Hz (20 kHz).'
      },
      {
        id: 'p11-sq4',
        questionNumber: 'Q.4',
        question: 'What is ultrasound? State two medical applications.',
        answer: 'Ultrasound consists of sound waves having frequencies higher than 20,000 Hz. In medicine, it is used for pre-natal imaging (scanning internal organs) and breaking kidney stones without surgery.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p11-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'Explain the factors on which loudness of sound depends.',
        answerReference: 'Loudness is the characteristic by which faint and loud sounds are distinguished. It depends on: (1) Amplitude of vibrating body — larger amplitude generates greater loudness; (2) Surface area of vibrating body — larger surface produces greater displacement of air molecules; (3) Distance from vibrating body — loudness decreases inversely with the square of distance.',
        guidance: 'Mention amplitude, surface area, and distance from listener with real-world examples (tuning fork, drum).'
      }
    ],
    quizzes: [
      {
        id: 'p11-q1',
        questionNumber: 1,
        question: 'Which of the following is an example of longitudinal waves?',
        options: [
          { key: 'a', text: 'sound wave' },
          { key: 'b', text: 'light wave' },
          { key: 'c', text: 'radio wave' },
          { key: 'd', text: 'water wave' }
        ],
        correctAnswer: 'a',
        explanation: 'Sound waves are longitudinal mechanical waves.'
      },
      {
        id: 'p11-q2',
        questionNumber: 2,
        question: 'How does sound travel from its source to your ear?',
        options: [
          { key: 'a', text: 'by changes in air pressure' },
          { key: 'b', text: 'by vibrations in wires or strings' },
          { key: 'c', text: 'by electromagnetic waves' },
          { key: 'd', text: 'by infrared waves' }
        ],
        correctAnswer: 'a',
        explanation: 'Vibrating sources generate alternating cycles of high pressure (compressions) and low pressure (rarefactions).'
      },
      {
        id: 'p11-q3',
        questionNumber: 3,
        question: 'Which form of energy is sound?',
        options: [
          { key: 'a', text: 'electrical' },
          { key: 'b', text: 'mechanical' },
          { key: 'c', text: 'thermal' },
          { key: 'd', text: 'chemical' }
        ],
        correctAnswer: 'b',
        explanation: 'Sound is mechanical energy originating from the physical vibration of particles.'
      },
      {
        id: 'p11-q4',
        questionNumber: 4,
        question: 'Astronauts in space need to communicate with each other by radio links because:',
        options: [
          { key: 'a', text: 'sound waves travel very slowly in space' },
          { key: 'b', text: 'sound waves travel very fast in space' },
          { key: 'c', text: 'sound waves cannot travel in space (vacuum)' },
          { key: 'd', text: 'sound waves have low frequency in space' }
        ],
        correctAnswer: 'c',
        explanation: 'Space is a vacuum lacking material molecules, so mechanical sound waves cannot propagate.'
      },
      {
        id: 'p11-q5',
        questionNumber: 5,
        question: 'The loudness of sound is most closely related to its:',
        options: [
          { key: 'a', text: 'frequency' },
          { key: 'b', text: 'period' },
          { key: 'c', text: 'wavelength' },
          { key: 'd', text: 'amplitude' }
        ],
        correctAnswer: 'd',
        explanation: 'Loudness is directly related to the amplitude of oscillation of the vibrating body.'
      },
      {
        id: 'p11-q6',
        questionNumber: 6,
        question: 'For a normal person, audible frequency range for sound wave lies between:',
        options: [
          { key: 'a', text: '10 Hz to 10 kHz' },
          { key: 'b', text: '20 Hz to 20 kHz' },
          { key: 'c', text: '25 Hz to 25 kHz' },
          { key: 'd', text: '30 Hz to 30 kHz' }
        ],
        correctAnswer: 'b',
        explanation: 'The audible frequency range for human hearing is 20 Hz to 20,000 Hz (20 kHz).'
      },
      {
        id: 'p11-q7',
        questionNumber: 7,
        question: 'When the frequency of a sound wave is increased, which of the following will decrease? (i) wavelength (ii) period (iii) amplitude',
        options: [
          { key: 'a', text: 'i only' },
          { key: 'b', text: 'iii only' },
          { key: 'c', text: 'i and ii only' },
          { key: 'd', text: 'i and iii only' }
        ],
        correctAnswer: 'c',
        explanation: 'Since v = fλ, λ = v/f decreases. Also period T = 1/f decreases. Amplitude is unaffected.'
      },
      {
        id: 'p11-q8',
        questionNumber: 8,
        question: 'The intensity level of train siren is approximately:',
        options: [
          { key: 'a', text: '150 dB' },
          { key: 'b', text: '130 dB' },
          { key: 'c', text: '100 dB' },
          { key: 'd', text: '120 dB' }
        ],
        correctAnswer: 'd',
        explanation: 'Train siren produces a sound intensity level around 120 dB.'
      },
      {
        id: 'p11-q9',
        questionNumber: 9,
        question: 'The intensity level of rustling of leaves is:',
        options: [
          { key: 'a', text: '10 dB' },
          { key: 'b', text: '20 dB' },
          { key: 'c', text: '30 dB' },
          { key: 'd', text: '40 dB' }
        ],
        correctAnswer: 'a',
        explanation: 'Rustling of dry leaves has a gentle sound level of about 10 dB.'
      },
      {
        id: 'p11-q10',
        questionNumber: 10,
        question: 'Sound level in dB is given by the formula:',
        options: [
          { key: 'a', text: '10 log(I / I₀) dB' },
          { key: 'b', text: 'log(I / I₀) dB' },
          { key: 'c', text: '10 log(I₀ / I) dB' },
          { key: 'd', text: 'log(I₀ / I) dB' }
        ],
        correctAnswer: 'a',
        explanation: 'Decibel sound level = 10 log(I / I₀) dB, where I₀ is the reference threshold of hearing.'
      },
      {
        id: 'p11-q11',
        questionNumber: 11,
        question: 'Intensity level of sound in bels is equal to:',
        options: [
          { key: 'a', text: 'k log(I / I₀)' },
          { key: 'b', text: 'k log(I₀ / I)' },
          { key: 'c', text: 'log(k I₀ / I)' },
          { key: 'd', text: '2k log(I₀ / I)' }
        ],
        correctAnswer: 'a',
        explanation: 'By Weber-Fechner law, loudness difference L - L₀ = k log(I / I₀).'
      },
      {
        id: 'p11-q12',
        questionNumber: 12,
        question: 'If speed of a sound is 320 ms⁻¹, the distance covered in 1.5 s will be:',
        options: [
          { key: 'a', text: '331.5 m' },
          { key: 'b', text: '333.5 m' },
          { key: 'c', text: '480 m' },
          { key: 'd', text: '490 m' }
        ],
        correctAnswer: 'c',
        explanation: 'Distance s = v × t = 320 m/s × 1.5 s = 480 m.'
      },
      {
        id: 'p11-q13',
        questionNumber: 13,
        question: 'Speed of sound in air at 25ºC is just:',
        options: [
          { key: 'a', text: '334 ms⁻¹' },
          { key: 'b', text: '346 ms⁻¹' },
          { key: 'c', text: '3 × 10⁸ ms⁻¹' },
          { key: 'd', text: '1246 kmh⁻¹' }
        ],
        correctAnswer: 'b',
        explanation: 'At 25°C, sound speed in air is approximately 346 m/s.'
      },
      {
        id: 'p11-q14',
        questionNumber: 14,
        question: 'The level of noise recommended in most countries over an eight-hour work day is usually:',
        options: [
          { key: 'a', text: '82-90 dB' },
          { key: 'b', text: '83-90 dB' },
          { key: 'c', text: '84-90 dB' },
          { key: 'd', text: '85-90 dB' }
        ],
        correctAnswer: 'd',
        explanation: 'Occupational health standards recommend noise levels not exceed 85-90 dB for 8-hour exposure.'
      },
      {
        id: 'p11-q15',
        questionNumber: 15,
        question: 'The speed of sound in air at 0ºC is:',
        options: [
          { key: 'a', text: '386 ms⁻¹' },
          { key: 'b', text: '376 ms⁻¹' },
          { key: 'c', text: '346 ms⁻¹' },
          { key: 'd', text: '331 ms⁻¹' }
        ],
        correctAnswer: 'd',
        explanation: 'Speed of sound in dry air at 0°C is 331 m/s.'
      },
      {
        id: 'p11-q16',
        questionNumber: 16,
        question: 'The sound level of a quiet whisper is:',
        options: [
          { key: 'a', text: '10 dB' },
          { key: 'b', text: '30 dB' },
          { key: 'c', text: '40 dB' },
          { key: 'd', text: '70 dB' }
        ],
        correctAnswer: 'b',
        explanation: 'Whispering typically produces a sound intensity level of 30 dB.'
      },
      {
        id: 'p11-q17',
        questionNumber: 17,
        question: 'The speed of sound in wood at 25°C in meters per second is:',
        options: [
          { key: 'a', text: '972' },
          { key: 'b', text: '1290' },
          { key: 'c', text: '2000' },
          { key: 'd', text: '3980' }
        ],
        correctAnswer: 'c',
        explanation: 'Sound travels at roughly 2000 m/s in wood.'
      },
      {
        id: 'p11-q18',
        questionNumber: 18,
        question: 'One bel is equal to:',
        options: [
          { key: 'a', text: '10 dB' },
          { key: 'b', text: '20 dB' },
          { key: 'c', text: '30 dB' },
          { key: 'd', text: '40 dB' }
        ],
        correctAnswer: 'a',
        explanation: 'By definition, 1 bel = 10 decibels (dB).'
      },
      {
        id: 'p11-q19',
        questionNumber: 19,
        question: 'The speed of sound in distilled water at 25°C is:',
        options: [
          { key: 'a', text: '7478 ms⁻¹' },
          { key: 'b', text: '7488 ms⁻¹' },
          { key: 'c', text: '1498 ms⁻¹' },
          { key: 'd', text: '1508 ms⁻¹' }
        ],
        correctAnswer: 'c',
        explanation: 'In distilled water at 25°C, sound velocity is 1498 m/s.'
      },
      {
        id: 'p11-q20',
        questionNumber: 20,
        question: 'The SI unit of intensity of sound is:',
        options: [
          { key: 'a', text: 'W m' },
          { key: 'b', text: 'W m⁻¹' },
          { key: 'c', text: 'W m²' },
          { key: 'd', text: 'W m⁻²' }
        ],
        correctAnswer: 'd',
        explanation: 'Intensity = Power / Area = W / m² = W m⁻².'
      },
      {
        id: 'p11-q21',
        questionNumber: 21,
        question: 'The speed of sound in air in km/h is approximately:',
        options: [
          { key: 'a', text: '1246 kmh⁻¹' },
          { key: 'b', text: '1264 kmh⁻¹' },
          { key: 'c', text: '1462 kmh⁻¹' },
          { key: 'd', text: '21462 kmh⁻¹' }
        ],
        correctAnswer: 'a',
        explanation: '346 m/s × 3.6 ≈ 1246 km/h.'
      },
      {
        id: 'p11-q22',
        questionNumber: 22,
        question: 'Formula for finding speed of sound wave is:',
        options: [
          { key: 'a', text: 'v = fλ' },
          { key: 'b', text: 'f = vλ' },
          { key: 'c', text: 'v = f/λ' },
          { key: 'd', text: 'f = λ/v' }
        ],
        correctAnswer: 'a',
        explanation: 'Wave speed relation is v = fλ.'
      },
      {
        id: 'p11-q23',
        questionNumber: 23,
        question: 'Longitudinal sound waves move fastest through:',
        options: [
          { key: 'a', text: 'gas' },
          { key: 'b', text: 'liquid' },
          { key: 'c', text: 'solid' },
          { key: 'd', text: 'vacuum' }
        ],
        correctAnswer: 'c',
        explanation: 'Solids have higher elasticity and tighter molecular packing, allowing sound to travel fastest.'
      },
      {
        id: 'p11-q24',
        questionNumber: 24,
        question: 'The intensity level of mosquito buzzing is approximately:',
        options: [
          { key: 'a', text: '0 dB' },
          { key: 'b', text: '10 dB' },
          { key: 'c', text: '40 dB' },
          { key: 'd', text: '70 dB' }
        ],
        correctAnswer: 'c',
        explanation: 'A buzzing mosquito registers around 40 dB.'
      },
      {
        id: 'p11-q25',
        questionNumber: 25,
        question: 'Which of these waves consist of compressions and rarefactions?',
        options: [
          { key: 'a', text: 'radio waves' },
          { key: 'b', text: 'sound waves' },
          { key: 'c', text: 'television waves' },
          { key: 'd', text: 'x-rays' }
        ],
        correctAnswer: 'b',
        explanation: 'Sound waves are longitudinal waves with alternating compressions and rarefactions.'
      },
      {
        id: 'p11-q26',
        questionNumber: 26,
        question: 'The intensity level of a vacuum cleaner is approximately:',
        options: [
          { key: 'a', text: '100 dB' },
          { key: 'b', text: '70 dB' },
          { key: 'c', text: '40 dB' },
          { key: 'd', text: '30 dB' }
        ],
        correctAnswer: 'b',
        explanation: 'Household vacuum cleaner typically produces noise around 70 dB.'
      },
      {
        id: 'p11-q27',
        questionNumber: 27,
        question: 'The characteristic of sound by which we can distinguish between two sounds of same loudness and pitch is called:',
        options: [
          { key: 'a', text: 'intensity' },
          { key: 'b', text: 'quality (timbre)' },
          { key: 'c', text: 'loudness' },
          { key: 'd', text: 'pitch' }
        ],
        correctAnswer: 'b',
        explanation: 'Quality (or timbre) depends on the waveform and overtones produced by the instrument.'
      },
      {
        id: 'p11-q28',
        questionNumber: 28,
        question: 'In general, the speed of sound is greater in:',
        options: [
          { key: 'a', text: 'Solids' },
          { key: 'b', text: 'Liquids' },
          { key: 'c', text: 'gases' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'a',
        explanation: 'Speed in solids > speed in liquids > speed in gases.'
      },
      {
        id: 'p11-q29',
        questionNumber: 29,
        question: 'The pitch of sound mostly depends on:',
        options: [
          { key: 'a', text: 'Frequency' },
          { key: 'b', text: 'Period' },
          { key: 'c', text: 'Wavelength' },
          { key: 'd', text: 'Amplitude' }
        ],
        correctAnswer: 'a',
        explanation: 'Pitch is the characteristic by which shrill and grave sounds are distinguished, governed by frequency.'
      },
      {
        id: 'p11-q30',
        questionNumber: 30,
        question: 'Which organism can hear sound of frequency up to 120,000 Hz?',
        options: [
          { key: 'a', text: 'Bats' },
          { key: 'b', text: 'Mice' },
          { key: 'c', text: 'Dogs' },
          { key: 'd', text: 'Cats' }
        ],
        correctAnswer: 'a',
        explanation: 'Bats use ultrasonic echolocation up to 120,000 Hz.'
      },
      {
        id: 'p11-q31',
        questionNumber: 31,
        question: 'Calculate the frequency of sound wave of speed 340 m/s and wavelength 0.5 m:',
        options: [
          { key: 'a', text: '340 Hz' },
          { key: 'b', text: '0.5 Hz' },
          { key: 'c', text: '170 Hz' },
          { key: 'd', text: '680 Hz' }
        ],
        correctAnswer: 'd',
        explanation: 'f = v / λ = 340 / 0.5 = 680 Hz.'
      }
    ]
  },
  {
    id: 'phy-u12',
    number: 12,
    title: 'Geometrical Optics',
    urduTitle: 'ہندسی بصریات (آپٹکس)',
    description: 'Reflection, spherical mirrors, refraction of light, Snell’s law, total internal reflection, lenses, lens formula, and optical instruments (compound microscope, telescope).',
    summary: 'Light travels in straight lines. Reflection follows laws: angle of incidence equals angle of reflection (∠i = ∠r). Spherical mirror formula: 1/f = 1/p + 1/q, where f = R/2. Refraction is the bending of light at boundary of two transparent media. Snell\'s law: n = sin i / sin r. When light travels from denser to rarer medium at an angle greater than critical angle (C), total internal reflection occurs (sin C = 1/n). Power of lens is reciprocal of focal length: P = 1/f (in dioptres D).',
    shortQuestions: [
      {
        id: 'p12-sq1',
        questionNumber: 'Q.1',
        question: 'State the laws of reflection of light.',
        answer: '1. The incident ray, normal, and reflected ray at the point of incidence all lie in the same plane. 2. The angle of incidence equals the angle of reflection (∠i = ∠r).'
      },
      {
        id: 'p12-sq2',
        questionNumber: 'Q.2',
        question: 'State Snell’s law of refraction.',
        answer: 'The ratio of the sine of angle of incidence to sine of angle of refraction is constant for a given pair of media: n = sin i / sin r.'
      },
      {
        id: 'p12-sq3',
        questionNumber: 'Q.3',
        question: 'Define critical angle and total internal reflection.',
        answer: 'Critical angle is the angle of incidence in denser medium for which angle of refraction in rarer medium is 90°. If angle of incidence exceeds critical angle, all light is reflected back into denser medium: total internal reflection.'
      },
      {
        id: 'p12-sq4',
        questionNumber: 'Q.4',
        question: 'Define power of a lens and state its unit.',
        answer: 'Power of a lens is the reciprocal of its focal length in meters: P = 1/f (in meters). Its SI unit is dioptre (D).'
      }
    ],
    extensiveQuestions: [
      {
        id: 'p12-eq1',
        questionNumber: 'Extensive Q.1',
        question: 'What is total internal reflection? State its two necessary conditions and explain its application in optical fibers.',
        answerReference: 'Total internal reflection is the complete reflection of a ray of light within a denser medium when the angle of incidence exceeds the critical angle. Two conditions: (1) Light must travel from optically denser to rarer medium; (2) Angle of incidence must be greater than critical angle (i > c). In optical fibers, light core has higher refractive index than outer cladding, so light signals travel thousands of kilometers with negligible signal loss through repeated total internal reflection.',
        guidance: 'Draw light rays showing normal refraction, critical angle condition, and total internal reflection.'
      }
    ],
    quizzes: [
      {
        id: 'p12-q1',
        questionNumber: 1,
        question: 'Which of the following quantities is not changed during refraction of light?',
        options: [
          { key: 'a', text: 'its direction' },
          { key: 'b', text: 'its speed' },
          { key: 'c', text: 'its frequency' },
          { key: 'd', text: 'its wavelength' }
        ],
        correctAnswer: 'c',
        explanation: 'Frequency is determined solely by the original light source and never changes across media.'
      },
      {
        id: 'p12-q2',
        questionNumber: 2,
        question: 'A converging mirror with a radius of 20 cm creates a real image 30 cm from the mirror. What is the object distance?',
        options: [
          { key: 'a', text: '-5.0 cm' },
          { key: 'b', text: '-7.5 cm' },
          { key: 'c', text: '15 cm' },
          { key: 'd', text: '-20 cm' }
        ],
        correctAnswer: 'c',
        explanation: 'f = R/2 = 10 cm. 1/p = 1/f - 1/q = 1/10 - 1/30 = 2/30 = 1/15 ⇒ p = 15 cm.'
      },
      {
        id: 'p12-q3',
        questionNumber: 3,
        question: 'An object is placed at the centre of curvature of a concave mirror. The image produced is located:',
        options: [
          { key: 'a', text: 'out beyond centre of curvature' },
          { key: 'b', text: 'at the centre of curvature' },
          { key: 'c', text: 'between centre of curvature and focal point' },
          { key: 'd', text: 'at the focal point' }
        ],
        correctAnswer: 'b',
        explanation: 'When placed at C (p = 2f), the real inverted image forms at C with magnification m = 1.'
      },
      {
        id: 'p12-q4',
        questionNumber: 4,
        question: 'An object is 14 cm in front of a convex mirror. The image is 5.8 cm behind the mirror. What is the focal length?',
        options: [
          { key: 'a', text: '-4.1 cm' },
          { key: 'b', text: '-8.2 cm' },
          { key: 'c', text: '-9.9 cm' },
          { key: 'd', text: '-20 cm' }
        ],
        correctAnswer: 'c',
        explanation: 'p = +14, q = -5.8. 1/f = 1/14 - 1/5.8 = (5.8 - 14)/(14 × 5.8) = -8.2 / 81.2 ⇒ f = -9.9 cm.'
      },
      {
        id: 'p12-q5',
        questionNumber: 5,
        question: 'The index of refraction depends on:',
        options: [
          { key: 'a', text: 'the focal length' },
          { key: 'b', text: 'the speed of light' },
          { key: 'c', text: 'the image distance' },
          { key: 'd', text: 'the object distance' }
        ],
        correctAnswer: 'b',
        explanation: 'Index of refraction n = c / v (ratio of speed of light in vacuum to that in the medium).'
      },
      {
        id: 'p12-q6',
        questionNumber: 6,
        question: 'Which type of image is formed by a concave lens on a screen?',
        options: [
          { key: 'a', text: 'inverted and real' },
          { key: 'b', text: 'inverted and virtual' },
          { key: 'c', text: 'upright and real' },
          { key: 'd', text: 'cannot be formed (upright and virtual)' }
        ],
        correctAnswer: 'd',
        explanation: 'A diverging (concave) lens only creates virtual upright images, which cannot be captured on a screen.'
      },
      {
        id: 'p12-q7',
        questionNumber: 7,
        question: 'What kind of image is formed by a convex lens on a screen?',
        options: [
          { key: 'a', text: 'inverted and real' },
          { key: 'b', text: 'inverted and virtual' },
          { key: 'c', text: 'upright and real' },
          { key: 'd', text: 'upright and virtual' }
        ],
        correctAnswer: 'a',
        explanation: 'Real images projected on a screen by converging lenses are inverted.'
      },
      {
        id: 'p12-q8',
        questionNumber: 8,
        question: 'Which type of image is produced by the converging lens of human eye if it views a distant object?',
        options: [
          { key: 'a', text: 'real, erect, same size' },
          { key: 'b', text: 'real, inverted, diminished' },
          { key: 'c', text: 'virtual, erect, diminished' },
          { key: 'd', text: 'virtual, inverted, magnified' }
        ],
        correctAnswer: 'b',
        explanation: 'The eye lens forms a real, inverted, and diminished image on the retina.'
      },
      {
        id: 'p12-q9',
        questionNumber: 9,
        question: 'Image formed on photographic film/sensor in a camera is:',
        options: [
          { key: 'a', text: 'real, inverted, and diminished' },
          { key: 'b', text: 'virtual, upright and diminished' },
          { key: 'c', text: 'virtual, upright and magnified' },
          { key: 'd', text: 'real, inverted and magnified' }
        ],
        correctAnswer: 'a',
        explanation: 'Camera lens creates a real, inverted, diminished image on the sensor.'
      },
      {
        id: 'p12-q10',
        questionNumber: 10,
        question: 'If a ray of light in glass is incident on an air surface at an angle greater than the critical angle, the ray will:',
        options: [
          { key: 'a', text: 'refract only' },
          { key: 'b', text: 'reflect only (totally reflected)' },
          { key: 'c', text: 'partially refract and partially reflect' },
          { key: 'd', text: 'diffract only' }
        ],
        correctAnswer: 'b',
        explanation: 'When angle of incidence exceeds critical angle, total internal reflection occurs.'
      },
      {
        id: 'p12-q11',
        questionNumber: 11,
        question: 'The critical angle of light passing from water into air is 48.8°. Light incident at greater than 48.8° will be:',
        options: [
          { key: 'a', text: 'absorbed' },
          { key: 'b', text: 'totally reflected' },
          { key: 'c', text: 'partially reflected and transmitted' },
          { key: 'd', text: 'totally transmitted' }
        ],
        correctAnswer: 'b',
        explanation: 'All rays exceeding critical angle undergo complete total internal reflection.'
      },
      {
        id: 'p12-q12',
        questionNumber: 12,
        question: 'The refractive index of diamond is:',
        options: [
          { key: 'a', text: '1.52' },
          { key: 'b', text: '1.66' },
          { key: 'c', text: '2.42' },
          { key: 'd', text: '2.21' }
        ],
        correctAnswer: 'c',
        explanation: 'Diamond has a very high refractive index of 2.42, giving it extraordinary brilliance.'
      },
      {
        id: 'p12-q13',
        questionNumber: 13,
        question: 'The refractive index of ice is:',
        options: [
          { key: 'a', text: '1.52' },
          { key: 'b', text: '1.31' },
          { key: 'c', text: '2.42' },
          { key: 'd', text: '1.33' }
        ],
        correctAnswer: 'b',
        explanation: 'Refractive index of solid ice is approximately 1.31.'
      },
      {
        id: 'p12-q14',
        questionNumber: 14,
        question: 'Critical angle of water with air boundary is:',
        options: [
          { key: 'a', text: '48.8°' },
          { key: 'b', text: '49.50°' },
          { key: 'c', text: '45°' },
          { key: 'd', text: '46°' }
        ],
        correctAnswer: 'a',
        explanation: 'sin C = 1/n = 1/1.33 = 0.7519 ⇒ C ≈ 48.8°.'
      },
      {
        id: 'p12-q15',
        questionNumber: 15,
        question: 'The human eye contains a natural:',
        options: [
          { key: 'a', text: 'convex mirror' },
          { key: 'b', text: 'concave mirror' },
          { key: 'c', text: 'convex lens' },
          { key: 'd', text: 'concave lens' }
        ],
        correctAnswer: 'c',
        explanation: 'The eye lens is a flexible double convex (converging) lens.'
      },
      {
        id: 'p12-q16',
        questionNumber: 16,
        question: 'The value of refractive index of air is approximately:',
        options: [
          { key: 'a', text: '1' },
          { key: 'b', text: '2' },
          { key: 'c', text: '3' },
          { key: 'd', text: '4' }
        ],
        correctAnswer: 'a',
        explanation: 'Refractive index of air is 1.0003 ≈ 1.'
      },
      {
        id: 'p12-q17',
        questionNumber: 17,
        question: 'The change in focal length of the eye lens to focus near and far objects is called:',
        options: [
          { key: 'a', text: 'modification' },
          { key: 'b', text: 'induction' },
          { key: 'c', text: 'distinct vision' },
          { key: 'd', text: 'accommodation' }
        ],
        correctAnswer: 'd',
        explanation: 'Ciliary muscles adjust lens curvature, a biological process called accommodation.'
      },
      {
        id: 'p12-q18',
        questionNumber: 18,
        question: 'The speed of light in water is approximately:',
        options: [
          { key: 'a', text: '3.3 × 10⁸ ms⁻¹' },
          { key: 'b', text: '2.5 × 10⁸ ms⁻¹' },
          { key: 'c', text: '2.3 × 10⁸ ms⁻¹' },
          { key: 'd', text: '2.6 × 10⁸ ms⁻¹' }
        ],
        correctAnswer: 'c',
        explanation: 'v = c / n = 3 × 10⁸ / 1.33 ≈ 2.26 × 10⁸ ms⁻¹ ≈ 2.3 × 10⁸ ms⁻¹.'
      },
      {
        id: 'p12-q19',
        questionNumber: 19,
        question: 'The speed of light in ordinary glass (n = 1.5) is:',
        options: [
          { key: 'a', text: '2 × 10⁸ ms⁻¹' },
          { key: 'b', text: '2.5 × 10⁻⁸ ms⁻¹' },
          { key: 'c', text: '2.5 × 10⁸ ms⁻¹' },
          { key: 'd', text: '3 × 10⁻⁸ ms⁻¹' }
        ],
        correctAnswer: 'a',
        explanation: 'v = c / n = (3 × 10⁸) / 1.5 = 2 × 10⁸ m/s.'
      },
      {
        id: 'p12-q20',
        questionNumber: 20,
        question: 'The power of a lens is the reciprocal of its:',
        options: [
          { key: 'a', text: 'dioptre' },
          { key: 'b', text: 'focal length' },
          { key: 'c', text: 'focal point' },
          { key: 'd', text: 'principal focus' }
        ],
        correctAnswer: 'b',
        explanation: 'P = 1/f (in meters).'
      },
      {
        id: 'p12-q21',
        questionNumber: 21,
        question: 'The power of lens P is mathematically equal to:',
        options: [
          { key: 'a', text: '1 / f' },
          { key: 'b', text: '2 / f' },
          { key: 'c', text: '3 / f' },
          { key: 'd', text: 'f / 1' }
        ],
        correctAnswer: 'a',
        explanation: 'Formula for lens power is P = 1/f.'
      },
      {
        id: 'p12-q22',
        questionNumber: 22,
        question: 'In a convex mirror, the focus is located:',
        options: [
          { key: 'a', text: 'under the mirror' },
          { key: 'b', text: 'in front of the mirror' },
          { key: 'c', text: 'on the mirror' },
          { key: 'd', text: 'behind the mirror' }
        ],
        correctAnswer: 'd',
        explanation: 'Convex mirrors diverge light, creating a virtual principal focus behind the mirror surface.'
      },
      {
        id: 'p12-q23',
        questionNumber: 23,
        question: 'If object distance p = 30 cm and virtual image distance q = -10 cm, magnification magnitude is:',
        options: [
          { key: 'a', text: '1/3' },
          { key: 'b', text: '3/1' },
          { key: 'c', text: '20' },
          { key: 'd', text: '40' }
        ],
        correctAnswer: 'a',
        explanation: 'm = |q| / p = 10 / 30 = 1/3.'
      },
      {
        id: 'p12-q24',
        questionNumber: 24,
        question: 'The number of conditions required for total internal reflection to occur is:',
        options: [
          { key: 'a', text: '2' },
          { key: 'b', text: '3' },
          { key: 'c', text: '4' },
          { key: 'd', text: '5' }
        ],
        correctAnswer: 'a',
        explanation: 'Two conditions: (1) Light must go from denser to rarer medium; (2) Angle of incidence must exceed critical angle.'
      },
      {
        id: 'p12-q25',
        questionNumber: 25,
        question: 'The relation between focal length f and radius of curvature R of spherical mirror is:',
        options: [
          { key: 'a', text: 'f = R / 2' },
          { key: 'b', text: 'f = R / 3' },
          { key: 'c', text: 'f = R / 4' },
          { key: 'd', text: 'f = R / 5' }
        ],
        correctAnswer: 'a',
        explanation: 'Focal length is exactly half of the radius of curvature: f = R/2.'
      },
      {
        id: 'p12-q26',
        questionNumber: 26,
        question: 'Optical fibres work on the fundamental principle of:',
        options: [
          { key: 'a', text: 'reflection' },
          { key: 'b', text: 'refraction' },
          { key: 'c', text: 'total internal reflection' },
          { key: 'd', text: 'diffraction' }
        ],
        correctAnswer: 'c',
        explanation: 'Optical fibers trap and guide light pulses using total internal reflection.'
      },
      {
        id: 'p12-q27',
        questionNumber: 27,
        question: 'The refractive index of crown glass is:',
        options: [
          { key: 'a', text: '2.42' },
          { key: 'b', text: '2.21' },
          { key: 'c', text: '1.66' },
          { key: 'd', text: '1.52' }
        ],
        correctAnswer: 'd',
        explanation: 'Crown glass has a refractive index of approximately 1.52.'
      },
      {
        id: 'p12-q28',
        questionNumber: 28,
        question: 'Snell\'s law is mathematically expressed as:',
        options: [
          { key: 'a', text: 'n = sin i / sin r' },
          { key: 'b', text: 'n = sin r / sin i' },
          { key: 'c', text: 'n = sin i' },
          { key: 'd', text: 'n = sin r' }
        ],
        correctAnswer: 'a',
        explanation: 'Snell\'s law: n = sin i / sin r.'
      },
      {
        id: 'p12-q29',
        questionNumber: 29,
        question: 'The refractive index n in terms of speeds of light is:',
        options: [
          { key: 'a', text: 'n = c / v' },
          { key: 'b', text: 'n = c v' },
          { key: 'c', text: 'n = v / c' },
          { key: 'd', text: 'n = 1 / (c v)' }
        ],
        correctAnswer: 'a',
        explanation: 'n = c / v (speed of light in vacuum c divided by speed in medium v).'
      },
      {
        id: 'p12-q30',
        questionNumber: 30,
        question: 'The magnification formula for a compound microscope is:',
        options: [
          { key: 'a', text: 'M = (L / f_o)(1 + d/f_e)' },
          { key: 'b', text: 'M = (f_o / L)(1 + d/f_e)' },
          { key: 'c', text: 'M = (f_e)(1 + L/f_o)' },
          { key: 'd', text: 'M = (L / f_o)(1 + d/f_e)' }
        ],
        correctAnswer: 'd',
        explanation: 'Magnification of compound microscope is M = (L / f_o)(1 + d/f_e).'
      },
      {
        id: 'p12-q31',
        questionNumber: 31,
        question: 'The principal focus of a concave mirror is:',
        options: [
          { key: 'a', text: 'virtual' },
          { key: 'b', text: 'real' },
          { key: 'c', text: 'both a and b' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'b',
        explanation: 'Rays parallel to principal axis converge at an actual physical focal point in front of the concave mirror.'
      },
      {
        id: 'p12-q32',
        questionNumber: 32,
        question: 'If focal length of a lens is 1 m, its optical power will be:',
        options: [
          { key: 'a', text: '1 D' },
          { key: 'b', text: '0.5 D' },
          { key: 'c', text: '1.5 D' },
          { key: 'd', text: '2 D' }
        ],
        correctAnswer: 'a',
        explanation: 'P = 1 / f = 1 / 1 m = 1 Dioptre (1 D).'
      },
      {
        id: 'p12-q33',
        questionNumber: 33,
        question: 'The endoscope used specifically to examine the throat and voice box is called:',
        options: [
          { key: 'a', text: 'gastroscope' },
          { key: 'b', text: 'cystoscope' },
          { key: 'c', text: 'bronchoscope' },
          { key: 'd', text: 'none of these' }
        ],
        correctAnswer: 'c',
        explanation: 'A bronchoscope inspects air passages and throat, while gastroscope inspects the stomach.'
      },
      {
        id: 'p12-q34',
        questionNumber: 34,
        question: 'The critical angle of glass with air boundary is approximately:',
        options: [
          { key: 'a', text: '42°' },
          { key: 'b', text: '45°' },
          { key: 'c', text: '90°' },
          { key: 'd', text: '0°' }
        ],
        correctAnswer: 'a',
        explanation: 'sin C = 1/1.5 = 0.6667 ⇒ C ≈ 42°.'
      },
      {
        id: 'p12-q35',
        questionNumber: 35,
        question: 'Light rays reflected in a flat plane mirror cause us to see a laterally inverted, ________ image:',
        options: [
          { key: 'a', text: 'faint' },
          { key: 'b', text: 'erect' },
          { key: 'c', text: 'slant' },
          { key: 'd', text: 'inverted' }
        ],
        correctAnswer: 'd',
        explanation: 'Plane mirror images are laterally inverted (left and right reversed).'
      }
    ]
  }
];
