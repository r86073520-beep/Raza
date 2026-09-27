import { Chapter } from '../types/book';
import { CHAPTER_9 } from './chapters/chapter9';
import { CHAPTER_10 } from './chapters/chapter10';

export const CHAPTERS_DATA: Chapter[] = [
  CHAPTER_9,
  CHAPTER_10,
  {
    id: 'ch-14',
    number: 14,
    title: 'The Atmosphere',
    urduTitle: 'کرۂ ہوائی (دی ایٹموسفیئر)',
    description: 'Structure of atmosphere, troposphere, stratosphere, greenhouse effect, global warming, air pollutants, and ozone depletion.',
    summary: 'The atmosphere is the envelope of gases surrounding Earth, divided into troposphere, stratosphere, mesosphere, and thermosphere based on temperature variation.',
    shortQuestions: [
      {
        id: 'ch14-sq1',
        questionNumber: 'Q.1',
        question: 'Explain the phenomenon of decreasing temperature in troposphere.',
        answer: 'In troposphere carbon dioxide and water vapours are present. Although concentration of CO2 and water vapours is negligible in atmosphere, they play a vital role in maintaining temperature of the atmosphere. Both of these gases allow visible light to pass through but absorb infrared radiations and warm the atmosphere. As the concentration of gases decreases gradually with the increase of altitude, correspondingly temperature also decreases at a rate 6k per kilometer. This is the region where all weather occurs and air crafts fly in this region.'
      },
      {
        id: 'ch14-sq2',
        questionNumber: 'Q.2',
        question: 'Differentiate between primary and secondary air pollutants.',
        answer: 'Primary pollutants are waste and exhaust products driven out directly because of combustion of fossil fuels and organic matter. Secondary pollutants are produced by various chemical reactions of primary pollutants in the atmosphere.',
        tableData: {
          headers: ['Primary Pollutants', 'Secondary Pollutants'],
          rows: [
            ['Definition: Waste and exhaust products driven out directly because of combustion of fossil fuels and organic matter.', 'Definition: Secondary pollutants are produced by various chemical reactions of primary pollutants.'],
            ['Oxides of sulphur (SO2 & SO3)', 'Sulphuric acid (H2SO4)'],
            ['Oxides of carbon (CO, CO2)', 'Carbonic acid (H2CO3)'],
            ['Oxides of nitrogen (NOx)', 'Nitric acid (HNO3)'],
            ['Hydrocarbon (CH4)', 'Hydrofluoric acid (HF)'],
            ['Ammonia (NH3)', 'Ozone (O3)'],
            ['Compounds of fluorine', 'Peroxy acetyl nitrate (PAN)']
          ]
        }
      },
      {
        id: 'ch14-sq3',
        questionNumber: 'Q.3',
        question: 'State the major sources of CO and CO2 emission.',
        answer: 'Oxides of Carbon (CO and CO2): Major sources of emission are as follows:',
        exampleList: [
          'These gases are emitted due to volcanic eruption and decomposition of organic matter naturally.',
          'The major source for the emission of these gases is combustion of fossil fuels (coal, petroleum and natural gas). Fossil fuels burnt in combustion engine of any type of automobile, kiln of any industry, or open air fires emit CO2 and CO.',
          'Forest fires and burning of wood also emit CO2 and CO, especially when supply of oxygen is limited, emission of CO dominates.'
        ]
      },
      {
        id: 'ch14-sq4',
        questionNumber: 'Q.4',
        question: 'CO2 is responsible for heating up atmosphere, how?',
        answer: 'The CO2 forms a layer around the Earth like an envelope. It allows the heat rays of the sun to pass through it and reaches up to the Earth. These rays are reflected from the Earth surface and go back to upper atmosphere. Now CO2 concentration due to burning of fossil fuels in different human activities is alarming. Because CO2 in the atmosphere acts like a glass wall of a greenhouse, it allows UV radiations to pass through it but does not allow the IR radiations to pass through it. It traps some of the infrared radiations emitted by the Earth. Hence, increased concentration of CO2 layer absorbs the infrared radiation emitted by the Earth\'s surface and prevents heat energy escaping from the atmosphere. So, CO2 is responsible for heating up atmosphere.'
      },
      {
        id: 'ch14-sq5',
        questionNumber: 'Q.5',
        question: 'CO is an hidden enemy, explain its action.',
        answer: 'CO is an air pollutant. It is a health hazard being a highly poisonous gas. Being a colourless and odourless gas, its presence can not be noticed easily and readily. When inhaled, it binds with hemoglobin most strongly than oxygen, thus hindering the supply of oxygen in body. Exposure to the higher concentration of CO causes headache and fatigue. If inhaled for the longer time it results in breathing difficulties and ultimately death.'
      },
      {
        id: 'ch14-sq6',
        questionNumber: 'Q.6',
        question: 'What threats are to human health due to SO2 gas as air pollutant?',
        answer: 'SO2 is an odourless gas having irritating smell. Threats include:',
        exampleList: [
          'It causes irritation and suffocation.',
          'It causes severe respiratory problems to asthmatic patients.'
        ]
      },
      {
        id: 'ch14-sq7',
        questionNumber: 'Q.7',
        question: 'Which air pollutant is produced on anaerobic decomposition of organic matter?',
        answer: 'Oxides of sulphur are produced on anaerobic decomposition of organic matter.',
        exampleList: ['SO2 (Sulphur dioxide)', 'SO3 (Sulphur trioxide)']
      },
      {
        id: 'ch14-sq8',
        questionNumber: 'Q.8',
        question: 'How acid rain increases the acidity of soil?',
        answer: 'Increase Acidity of Soil: Acid rain increases the acidity of the soil. Many crops and plants cannot grow properly in such soil. It also increases the toxic metals in the soil that poisons the vegetation. Even old trees are being affected due to acidity of soil. Their growth is retarded, they get dry and die.'
      },
      {
        id: 'ch14-sq9',
        questionNumber: 'Q.9',
        question: 'Point out two serious effects of ozone depletion.',
        answer: 'Two serious effects of ozone depletion are as follows:',
        exampleList: [
          '(i) Decreased ozone layer will increase infectious diseases like malaria and skin cancer.',
          '(ii) It can change the life cycle of plants disrupting the food chain and crop productivity.'
        ]
      },
      {
        id: 'ch14-sq10',
        questionNumber: 'Q.10',
        question: 'How ozone layer forms in stratosphere?',
        answer: 'Ozone layer forms in atmosphere by the association of an oxygen atom with an oxygen molecule in the mid of stratosphere.',
        chemicalReactions: [
          'O(g) + O2(g) -> O3(g)  (exothermic reaction)'
        ]
      },
      {
        id: 'ch14-sq11',
        questionNumber: 'Q.11',
        question: 'Why 75% of the atmospheric mass lies with in the troposphere?',
        answer: 'About 75% of the atmospheric mass lies within the troposphere because it covers the height from 0-12 km. This is the region where all weathers occur and almost all aircrafts fly in this dense region due to gravitational attraction pulling gases closest to Earth\'s surface.'
      },
      {
        id: 'ch14-sq12',
        questionNumber: 'Q.12',
        question: 'How ozone layer is being depleted by chlorofluorocarbons?',
        answer: 'Chlorofluorocarbons (CFCs) (used as refrigerants in air conditioners and refrigerators) are major cause of depletion of ozone layer. These compounds leak in one way or other, escape and diffuse to stratosphere. These ultraviolet radiations break the C-Cl bond in CFCl3 and generates chlorine free radicals as:',
        chemicalReactions: [
          'CFCl3 --(UV)--> •CFCl2 + •Cl',
          'O3(g) + •Cl -> O2(g) + •OCl',
          '•OCl -> •O + •Cl',
          '•O + •O -> O2(g)'
        ],
        notes: 'A single chlorine free radical released by the decomposition of CFCs is capable of destroying upto many lacs of ozone molecules. The region in which ozone layer depletes is called ozone hole.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'ch14-eq1',
        questionNumber: 'Q.1',
        question: 'Write down the significance of atmospheric gases.',
        answerReference: 'Atmospheric gases provide oxygen for respiration, CO2 for photosynthesis, and nitrogen to moderate combustion and support plant nitrogen fixation.'
      },
      {
        id: 'ch14-eq2',
        questionNumber: 'Q.2',
        question: 'Give the characteristics of troposphere. Why temperature increases upwards in stratosphere?',
        answerReference: 'Troposphere extends 0-12 km containing 75% mass and all weather. In stratosphere, temperature rises because ozone absorbs high-energy UV radiations.'
      },
      {
        id: 'ch14-eq3',
        questionNumber: 'Q.3',
        question: 'What are the characteristics of stratosphere? Why temperature increases upwards in this sphere?',
        answerReference: 'Stratosphere extends from 12 to 50 km. Ozone absorption of ultraviolet radiation causes temperature to rise up to 2°C at the top.'
      },
      {
        id: 'ch14-eq4',
        questionNumber: 'Q.4',
        question: 'CO2 is necessary for plants but why its increasing concentration is alarming for us?',
        answerReference: 'CO2 is essential for plant photosynthesis, but elevated CO2 forms a thermal blanket trapping infrared radiation, leading to runaway global warming.'
      },
      {
        id: 'ch14-eq5',
        questionNumber: 'Q.5',
        question: 'Why CO is considered a health hazard?',
        answerReference: 'CO binds tightly with hemoglobin forming carboxyhemoglobin, stopping oxygen transport to the brain and vital organs, causing death.'
      },
      {
        id: 'ch14-eq6',
        questionNumber: 'Q.6',
        question: 'Define acid rain. How it forms and what are its effects?',
        answerReference: 'Rain having pH less than 5.6 due to dissolved SO2 and NOx forming H2SO4 and HNO3. It leaches heavy metals, kills aquatic life, and erodes monuments.'
      },
      {
        id: 'ch14-eq7',
        questionNumber: 'Q.7',
        question: 'Compounds of sulphur are air pollutants. Describe the sources of these compounds along with their effects.',
        answerReference: 'Sources include volcanic emissions and combustion of sulfur-containing coal and petroleum. Effects include respiratory ailments and acid rain.'
      },
      {
        id: 'ch14-eq8',
        questionNumber: 'Q.8',
        question: 'Where does ozone layer lie in atmosphere? How it is depleting and how we can prevent its depletion?',
        answerReference: 'Ozone lies in the stratosphere (25-30 km). Depletion is caused by CFCs releasing Cl radicals. Prevention involves phasing out CFCs with eco-friendly alternatives.'
      },
      {
        id: 'ch14-eq9',
        questionNumber: 'Q.9',
        question: 'Oxides of nitrogen cause air pollution. Describe the sources of these compounds.',
        answerReference: 'Formed at high temperatures in vehicle combustion engines and power plants when atmospheric N2 and O2 combine, forming NO and NO2.'
      }
    ],
    quizzes: [
      {
        id: 'ch14-q1',
        questionNumber: 1,
        question: 'About 99% atmosphere\'s mass lies within:',
        options: [
          { key: 'a', text: '30 kilometre' },
          { key: 'b', text: '35 kilometre' },
          { key: 'c', text: '15 kilometre' },
          { key: 'd', text: '11 kilometre' }
        ],
        correctAnswer: 'a',
        explanation: 'About 99% of the atmosphere mass is concentrated within the lowest 30 km.'
      },
      {
        id: 'ch14-q2',
        questionNumber: 2,
        question: 'Depending upon temperature variation, atmosphere is divided into how many regions?',
        options: [
          { key: 'a', text: 'one' },
          { key: 'b', text: 'two' },
          { key: 'c', text: 'four' },
          { key: 'd', text: 'three' }
        ],
        correctAnswer: 'c',
        explanation: 'Atmosphere is divided into 4 regions: Troposphere, Stratosphere, Mesosphere, and Thermosphere.'
      },
      {
        id: 'ch14-q3',
        questionNumber: 3,
        question: 'Just above the Earth\'s surface is:',
        options: [
          { key: 'a', text: 'mesosphere' },
          { key: 'b', text: 'stratosphere' },
          { key: 'c', text: 'thermosphere' },
          { key: 'd', text: 'troposphere' }
        ],
        correctAnswer: 'd',
        explanation: 'The troposphere is the innermost layer extending from 0 to 12 km directly above Earth.'
      },
      {
        id: 'ch14-q4',
        questionNumber: 4,
        question: 'A group of gases that maintains temperature of atmosphere is:',
        options: [
          { key: 'a', text: 'carbon dioxide and water vapours' },
          { key: 'b', text: 'nitrogen and carbon dioxide' },
          { key: 'c', text: 'oxygen and water vapours' },
          { key: 'd', text: 'nitrogen and oxygen' }
        ],
        correctAnswer: 'a',
        explanation: 'CO2 and water vapour act as greenhouse gases, absorbing thermal IR to maintain Earth temperature.'
      },
      {
        id: 'ch14-q5',
        questionNumber: 5,
        question: 'The Earth\'s atmosphere is getting hotter because of:',
        options: [
          { key: 'a', text: 'increasing concentration of CO' },
          { key: 'b', text: 'increasing concentration of CO2' },
          { key: 'c', text: 'increasing concentration of O3' },
          { key: 'd', text: 'increasing concentration of SO2' }
        ],
        correctAnswer: 'b',
        explanation: 'CO2 concentration rise traps outgoing infrared radiation, causing global heating.'
      },
      {
        id: 'ch14-q6',
        questionNumber: 6,
        question: 'Which one of the followings is not a Greenhouse Effect?',
        options: [
          { key: 'a', text: 'increasing atmospheric temperature' },
          { key: 'b', text: 'increasing food chains' },
          { key: 'c', text: 'increasing flood risks' },
          { key: 'd', text: 'increasing sea-level' }
        ],
        correctAnswer: 'b',
        explanation: 'Greenhouse warming disrupts food chains and causes climate distress rather than increasing food chains.'
      },
      {
        id: 'ch14-q7',
        questionNumber: 7,
        question: 'Normally rain water is weakly acidic because of:',
        options: [
          { key: 'a', text: 'SO3 gas' },
          { key: 'b', text: 'CO2 gas' },
          { key: 'c', text: 'SO2 gas' },
          { key: 'd', text: 'NO2 gas' }
        ],
        correctAnswer: 'b',
        explanation: 'Dissolved atmospheric CO2 produces carbonic acid (H2CO3), giving normal rain a pH of around 5.6 to 6.'
      },
      {
        id: 'ch14-q8',
        questionNumber: 8,
        question: 'Buildings are being damaged by acid rain because it attacks:',
        options: [
          { key: 'a', text: 'calcium sulphate' },
          { key: 'b', text: 'calcium nitrate' },
          { key: 'c', text: 'calcium carbonate' },
          { key: 'd', text: 'calcium oxalate' }
        ],
        correctAnswer: 'c',
        explanation: 'Acid rain reacts with calcium carbonate (CaCO3) in limestone and marble, producing soluble salts that wash away.'
      },
      {
        id: 'ch14-q9',
        questionNumber: 9,
        question: 'Acid rain affects the aquatic life by cloging fish gills because of:',
        options: [
          { key: 'a', text: 'lead metal' },
          { key: 'b', text: 'chromium metal' },
          { key: 'c', text: 'mercury metal' },
          { key: 'd', text: 'aluminium metal' }
        ],
        correctAnswer: 'd',
        explanation: 'Acid rain leaches aluminium from soil into water, which accumulates in fish gills and causes suffocation.'
      },
      {
        id: 'ch14-q10',
        questionNumber: 10,
        question: 'Which one of these pollutants are not found in car exhaust fumes?',
        options: [
          { key: 'a', text: 'CO' },
          { key: 'b', text: 'O3' },
          { key: 'c', text: 'NO2' },
          { key: 'd', text: 'SO2' }
        ],
        correctAnswer: 'b',
        explanation: 'Ozone is a secondary pollutant synthesized photochemically in air, not directly expelled from car tailpipes.'
      },
      {
        id: 'ch14-q11',
        questionNumber: 11,
        question: 'The process by which atmospheric nitrogen is turned into nitrates in the soil is called:',
        options: [
          { key: 'a', text: 'nitration' },
          { key: 'b', text: 'oxidation' },
          { key: 'c', text: 'fixing' },
          { key: 'd', text: 'reduction' }
        ],
        correctAnswer: 'c',
        explanation: 'Biological and chemical nitrogen fixing converts inert N2 gas into bioavailable nitrates.'
      },
      {
        id: 'ch14-q12',
        questionNumber: 12,
        question: 'Ozone is beneficial for us as it:',
        options: [
          { key: 'a', text: 'absorbs infrared radiations' },
          { key: 'b', text: 'absorbs ultraviolet radiations' },
          { key: 'c', text: 'absorbs chlorofluorocarbons' },
          { key: 'd', text: 'absorbs air pollutants' }
        ],
        correctAnswer: 'b',
        explanation: 'The stratospheric ozone shield absorbs destructive UV-B and UV-C solar rays.'
      },
      {
        id: 'ch14-q13',
        questionNumber: 13,
        question: 'Which one of the following is not an air pollutant?',
        options: [
          { key: 'a', text: 'nitrogen' },
          { key: 'b', text: 'carbon monoxide' },
          { key: 'c', text: 'nitrogen dioxide' },
          { key: 'd', text: 'ozone' }
        ],
        correctAnswer: 'a',
        explanation: 'Nitrogen gas (N2) comprises ~78% of clean dry air and is a non-toxic natural component.'
      },
      {
        id: 'ch14-q14',
        questionNumber: 14,
        question: 'Iron and steel structures are damaged by:',
        options: [
          { key: 'a', text: 'carbon monoxide' },
          { key: 'b', text: 'sulphur dioxide' },
          { key: 'c', text: 'methane' },
          { key: 'd', text: 'carbon dioxide' }
        ],
        correctAnswer: 'b',
        explanation: 'Sulphur dioxide produces acid rain and accelerates severe corrosion of iron and steel.'
      },
      {
        id: 'ch14-q15',
        questionNumber: 15,
        question: 'Infrared radiations emitted by the earth are absorbed by:',
        options: [
          { key: 'a', text: 'CO2 and H2O' },
          { key: 'b', text: 'N2 and O2' },
          { key: 'c', text: 'CO2 and N2' },
          { key: 'd', text: 'O2 and CO2' }
        ],
        correctAnswer: 'a',
        explanation: 'CO2 and H2O molecules have dipole moments that resonate with and absorb infrared wavelengths.'
      },
      {
        id: 'ch14-q16',
        questionNumber: 16,
        question: 'Global warming causes rising of the sea level. The cause of global warming is:',
        options: [
          { key: 'a', text: 'CO2 gas' },
          { key: 'b', text: 'SO2 gas' },
          { key: 'c', text: 'NOx gases' },
          { key: 'd', text: 'O3 gas' }
        ],
        correctAnswer: 'a',
        explanation: 'High concentration of CO2 is the primary driver of anthropogenic global warming and thermal expansion of oceans.'
      },
      {
        id: 'ch14-q17',
        questionNumber: 17,
        question: 'Which gas protects the Earth\'s surface from ultraviolet radiations?',
        options: [
          { key: 'a', text: 'CO2' },
          { key: 'b', text: 'CO' },
          { key: 'c', text: 'N2' },
          { key: 'd', text: 'O3' }
        ],
        correctAnswer: 'd',
        explanation: 'O3 (ozone) absorbs high-energy UV photons.'
      },
      {
        id: 'ch14-q18',
        questionNumber: 18,
        question: 'Effects of ozone depletion are following except the one:',
        options: [
          { key: 'a', text: 'increases infectious diseases' },
          { key: 'b', text: 'increases crops production' },
          { key: 'c', text: 'can cause skin cancer' },
          { key: 'd', text: 'can cause climatic changes' }
        ],
        correctAnswer: 'b',
        explanation: 'Ozone depletion harms and stunts crop productivity; it definitely does not increase crop yields.'
      },
      {
        id: 'ch14-q19',
        questionNumber: 19,
        question: 'Global warming is because of:',
        options: [
          { key: 'a', text: 'absorption of infrared radiations emitted by the Earth\'s surface' },
          { key: 'b', text: 'absorption of infrared radiations coming from the Sun' },
          { key: 'c', text: 'absorption of ultraviolet radiation coming from the Sun' },
          { key: 'd', text: 'emission of ultraviolet radiation from the Earth\'s surface' }
        ],
        correctAnswer: 'a',
        explanation: 'Atmospheric greenhouse gases absorb outgoing infrared heat emitted upward from Earth.'
      }
    ]
  },
  {
    id: 'ch-15',
    number: 15,
    title: 'Water',
    urduTitle: 'پانی (واٹر)',
    description: 'Properties of water, universal solvent, hydrogen bonding, soft vs hard water, temporary and permanent hardness, water pollution, and waterborne diseases.',
    summary: 'Water is a universal solvent with high specific heat capacity and polarity. Hard water contains dissolved calcium and magnesium ions that hinder soap lather.',
    shortQuestions: [
      {
        id: 'ch15-sq1',
        questionNumber: 'Q.1',
        question: 'How water rises in plants?',
        answer: 'Capillary action is the process by which water rises up from the roots of plants to leaves. This property is vital for the land plants.'
      },
      {
        id: 'ch15-sq2',
        questionNumber: 'Q.2',
        question: 'Which forces are responsible for dissolving polar substances in water?',
        answer: 'Hydrogen bonding and ion-dipole electrostatic attractions are responsible for dissolving polar substances in water.'
      },
      {
        id: 'ch15-sq3',
        questionNumber: 'Q.3',
        question: 'Why non-polar compounds are insoluble in water?',
        answer: 'The non-polar compounds do not have polar ends or dipole bonds and are not attracted by polar water molecules. Therefore, non-polar compounds do not dissolve in water.',
        exampleList: ['Benzene', 'Ether', 'Octane']
      },
      {
        id: 'ch15-sq4',
        questionNumber: 'Q.4',
        question: 'How water dissolves sugar and alcohols?',
        answer: 'Because of two O-H bonds and two lone pairs, one H2O molecule can form hydrogen bonding with four other H2O molecules, which are arranged tetrahedral around the H2O molecules. This unique behaviour of water enables it to dissolve many polar non-ionic compounds having hydroxyl group (-OH) like alcohol and sugar by forming hydrogen bonds with them.',
        diagramInfo: {
          title: 'Tetrahedral Hydrogen Bonding in Water',
          description: 'Central oxygen with two covalent bonds to hydrogen and two lone pairs forming four hydrogen bonds.',
          visualType: 'hydrogen_bonding'
        }
      },
      {
        id: 'ch15-sq5',
        questionNumber: 'Q.5',
        question: 'How limestone dissolves in water?',
        answer: 'The water which have carbon dioxide dissolved in it, converts the insoluble lime stone (calcium carbonate) into soluble calcium bicarbonate. In this way, lime stone dissolves in water.',
        chemicalReactions: [
          'CaCO3(s) + CO2(g) + H2O(l) -> Ca(HCO3)2(aq)'
        ]
      },
      {
        id: 'ch15-sq6',
        questionNumber: 'Q.6',
        question: 'Differentiate between soft and hard water.',
        answer: 'Soft water is that which produces good lather with soap. Hard water is that which does not produce lather with soap easily.',
        tableData: {
          headers: ['Soft Water', 'Hard Water'],
          rows: [
            ['Soft water is that which produced good lather with soap.', 'Hard water is that which does not produce lather with soap.'],
            ['Free from dissolved Ca²⁺ and Mg²⁺ salts.', 'Contains dissolved calcium and magnesium bicarbonates, chlorides or sulphates.']
          ]
        }
      },
      {
        id: 'ch15-sq7',
        questionNumber: 'Q.7',
        question: 'What are the causes of hardness in water?',
        answer: 'The rain water while coming down absorbs carbon dioxide from the atmosphere. The water mixed with carbon dioxide, when passes through the beds of the soil, converts insoluble carbonates of calcium and magnesium into soluble bicarbonates. It may also dissolve chlorides and sulphates of calcium and magnesium.',
        chemicalReactions: [
          'CaCO3 + CO2 + H2O -> Ca(HCO3)2',
          'MgCO3 + CO2 + H2O -> Mg(HCO3)2'
        ]
      },
      {
        id: 'ch15-sq8',
        questionNumber: 'Q.8',
        question: 'What are the effects of temporary hardness in water?',
        answer: 'Effects of temporary hardness in water include:',
        exampleList: [
          'Temporary hard water consumes a large amount of soap in washing purposes.',
          'It also causes stomach disorder and digestive issues when used for drinking.'
        ]
      },
      {
        id: 'ch15-sq9',
        questionNumber: 'Q.9',
        question: 'Mention the disadvantages of detergents.',
        answer: 'Detergents have a major disadvantage over the soap as some of the detergents are non-biodegradable (cannot be decomposed by micro-organisms like bacteria). When house hold water containing these detergents discharged in streams, ponds, lakes and rivers, it causes severe water pollution and scum.'
      },
      {
        id: 'ch15-sq10',
        questionNumber: 'Q.10',
        question: 'What is difference between biodegradable and non-biodegradable substances?',
        answer: 'Biodegradable substances can be decomposed by micro-organisms like bacteria, whereas non-biodegradable substances cannot be broken down naturally.',
        tableData: {
          headers: ['Biodegradable Substances', 'Non-biodegradable Substances'],
          rows: [
            ['Definition: The substance which can be decomposed by micro-organisms like bacteria are called biodegradable substances.', 'Definition: The substances which cannot be decomposed by microorganism like bacteria are called as non-biodegradable substances.'],
            ['Example: Dead bodies of living organisms like plants and animals, wood, paper.', 'Example: Plastics, Rubber, Synthetic detergents.']
          ]
        }
      },
      {
        id: 'ch15-sq11',
        questionNumber: 'Q.11',
        question: 'How detergents make the water unfit for aquatic life?',
        answer: 'Because the detergents are non-biodegradable, so they remains in the water for a long time and makes the water unfit for aquatic life. The phosphate salts present in detergents cause rapid growth of algae in water bodies, which floats over the surface of water. These plants ultimately die and decay. Decaying plants being biodegradable consumes O2 present in water. Thus, depletion of O2 results in death of aquatic life.'
      },
      {
        id: 'ch15-sq12',
        questionNumber: 'Q.12',
        question: 'Why pesticides are used?',
        answer: 'Pesticides are used either directly to kill or control the growth of pests. Pests may be weeds, herbs, insects, fungi, viruses etc. they all damage crops and transmit diseases both to human beings and animals.'
      },
      {
        id: 'ch15-sq13',
        questionNumber: 'Q.13',
        question: 'What is the reason of waterborne diseases?',
        answer: 'Water borne diseases may be due to "Toxins" or "Microorganisms" and lack of proper "Sanitation facilities" in drinking water distribution systems.'
      },
      {
        id: 'ch15-sq14',
        questionNumber: 'Q.14',
        question: 'How waterborne diseases can be prevented?',
        answer: 'The water borne diseases can be prevented by the following three methods:',
        exampleList: [
          '(i) Provision of safe water (chlorination/filtration)',
          '(ii) Disposal of sewage in treatment plants',
          '(iii) Control of toxic chemicals runoff'
        ]
      }
    ],
    extensiveQuestions: [
      {
        id: 'ch15-eq1',
        questionNumber: 'Q.1',
        question: 'How polarity of water molecule plays its role to dissolve the substances?',
        answerReference: 'The bent geometry and oxygen electronegativity create dipole ends that electrostatically pull ionic crystal lattices apart into hydrated ions.'
      },
      {
        id: 'ch15-eq2',
        questionNumber: 'Q.2',
        question: 'Explain the methods of removing permanent hardness.',
        answerReference: 'Permanent hardness is removed using washing soda (Na2CO3) to precipitate CaCO3/MgCO3, or by ion-exchange resin (sodium zeolite).'
      },
      {
        id: 'ch15-eq3',
        questionNumber: 'Q.3',
        question: 'Explain the water pollution because of industrial waste.',
        answerReference: 'Industrial effluents release heavy toxic metals (cadmium, lead, mercury) and synthetic acids directly into freshwater systems.'
      },
      {
        id: 'ch15-eq4',
        questionNumber: 'Q.4',
        question: 'Justify the statement: household water is the reason of water pollution. Explain agricultural effluents are fatal for aquatic life.',
        answerReference: 'Domestic wastewater discharges non-biodegradable synthetic detergents. Agricultural fertilizer runoff causes algal blooms and oxygen depletion.'
      },
      {
        id: 'ch15-eq5',
        questionNumber: 'Q.5',
        question: 'Explain five important waterborne diseases. How can these be prevented?',
        answerReference: 'Cholera, Dysentery, Typhoid, Hepatitis, and Fluorosis. Prevented by water chlorination, sewage disinfection, and safe sanitation.'
      },
      {
        id: 'ch15-eq6',
        questionNumber: 'Q.6',
        question: 'Give some disadvantages of hard water.',
        answerReference: 'Wastes excess soap by forming scum, creates scale in industrial boilers causing explosions, and causes stomach disorders.'
      },
      {
        id: 'ch15-eq7',
        questionNumber: 'Q.7',
        question: 'What is water pollution? Describe the effects of using polluted water.',
        answerReference: 'Contamination of water bodies altering chemical, physical, or biological quality, causing epidemic waterborne outbreaks and poisoning.'
      },
      {
        id: 'ch15-eq8',
        questionNumber: 'Q.8',
        question: 'Explain the reasons, water is considered a universal solvent.',
        answerReference: 'Due to its high dielectric constant, distinct dipole polarity, and capacity to form extensive hydrogen bonds.'
      }
    ],
    quizzes: [
      {
        id: 'ch15-q1',
        questionNumber: 1,
        question: 'Which one of the following properties of water is responsible for rising of water in plants?',
        options: [
          { key: 'a', text: 'specific heat capacity' },
          { key: 'b', text: 'surface tension' },
          { key: 'c', text: 'excellent solvent action' },
          { key: 'd', text: 'capillary action' }
        ],
        correctAnswer: 'd',
        explanation: 'Capillary action allows water to climb through narrow xylem vessels from roots up to leaves.'
      },
      {
        id: 'ch15-q2',
        questionNumber: 2,
        question: 'Specific heat capacity of water is:',
        options: [
          { key: 'a', text: '4.2 kJ g⁻¹ K⁻¹' },
          { key: 'b', text: '4.2 kJ kg⁻¹ K⁻¹' },
          { key: 'c', text: '2.4 kJ g⁻¹ K⁻¹' },
          { key: 'd', text: '2.4 J g⁻¹ K⁻¹' }
        ],
        correctAnswer: 'b',
        explanation: 'Water has a high specific heat capacity of 4.2 kJ kg⁻¹ K⁻¹ (or 4.2 J g⁻¹ K⁻¹).'
      },
      {
        id: 'ch15-q3',
        questionNumber: 3,
        question: 'Water dissolves non-ionic compound by:',
        options: [
          { key: 'a', text: 'ion-ion forces' },
          { key: 'b', text: 'ion-dipole forces' },
          { key: 'c', text: 'dipole-dipole forces' },
          { key: 'd', text: 'hydrogen bonding' }
        ],
        correctAnswer: 'd',
        explanation: 'Water dissolves non-ionic polar substances like glucose and alcohol through hydrogen bonding with -OH groups.'
      },
      {
        id: 'ch15-q4',
        questionNumber: 4,
        question: 'Temporary hardness is because of:',
        options: [
          { key: 'a', text: 'Ca(HCO3)2' },
          { key: 'b', text: 'CaCO3' },
          { key: 'c', text: 'MgCO3' },
          { key: 'd', text: 'MgSO4' }
        ],
        correctAnswer: 'a',
        explanation: 'Temporary hardness is caused by dissolved bicarbonates of calcium and magnesium: Ca(HCO3)2 and Mg(HCO3)2.'
      },
      {
        id: 'ch15-q5',
        questionNumber: 5,
        question: 'Temporary hardness is removed by adding:',
        options: [
          { key: 'a', text: 'quick lime' },
          { key: 'b', text: 'slaked lime' },
          { key: 'c', text: 'limestone' },
          { key: 'd', text: 'lime water' }
        ],
        correctAnswer: 'b',
        explanation: 'Clark\'s method removes temporary hardness by adding calculated amounts of slaked lime Ca(OH)2.'
      },
      {
        id: 'ch15-q6',
        questionNumber: 6,
        question: 'Permanent hardness is removed by adding:',
        options: [
          { key: 'a', text: 'Na2 zeolite' },
          { key: 'b', text: 'soda lime' },
          { key: 'c', text: 'lime water' },
          { key: 'd', text: 'quick lime' }
        ],
        correctAnswer: 'a',
        explanation: 'Permanent hardness is removed using sodium zeolite (Na2-zeolite) ion exchangers or washing soda.'
      },
      {
        id: 'ch15-q7',
        questionNumber: 7,
        question: 'Which one of the following salts makes the water permanently hard?',
        options: [
          { key: 'a', text: 'Na2CO3' },
          { key: 'b', text: 'NaHCO3' },
          { key: 'c', text: 'Ca(HCO3)2' },
          { key: 'd', text: 'CaSO4' }
        ],
        correctAnswer: 'd',
        explanation: 'Calcium sulphate (CaSO4) causes permanent hardness, which cannot be removed simply by boiling.'
      },
      {
        id: 'ch15-q8',
        questionNumber: 8,
        question: 'Rapid growth of algae in water bodies is because of detergent having:',
        options: [
          { key: 'a', text: 'carbonate salts' },
          { key: 'b', text: 'sulphonic acid salts' },
          { key: 'c', text: 'sulphate salts' },
          { key: 'd', text: 'phosphate salts' }
        ],
        correctAnswer: 'd',
        explanation: 'Phosphate builders in detergents act as algal nutrients, accelerating eutrophication.'
      },
      {
        id: 'ch15-q9',
        questionNumber: 9,
        question: 'Depletion of O2 from water is not because of:',
        options: [
          { key: 'a', text: 'decaying of aquatic plants' },
          { key: 'b', text: 'biodegradation of aquatic plants' },
          { key: 'c', text: 'rapid growth of aquatic plants' },
          { key: 'd', text: 'decomposition of aquatic plants' }
        ],
        correctAnswer: 'c',
        explanation: 'Living growing plants produce oxygen via photosynthesis; oxygen depletion occurs when dead plants decompose.'
      },
      {
        id: 'ch15-q10',
        questionNumber: 10,
        question: 'Which one of the following diseases causes liver inflammation?',
        options: [
          { key: 'a', text: 'typhoid' },
          { key: 'b', text: 'jaundice' },
          { key: 'c', text: 'cholera' },
          { key: 'd', text: 'hepatitis' }
        ],
        correctAnswer: 'd',
        explanation: 'Hepatitis is a viral liver inflammation transmitted via contaminated water.'
      },
      {
        id: 'ch15-q11',
        questionNumber: 11,
        question: 'Which one of the following diseases causes severe diarrhea and can be fatal?',
        options: [
          { key: 'a', text: 'jaundice' },
          { key: 'b', text: 'dysentery' },
          { key: 'c', text: 'cholera' },
          { key: 'd', text: 'typhoid' }
        ],
        correctAnswer: 'c',
        explanation: 'Vibrio cholerae causes severe, acute watery diarrhea leading to fatal dehydration.'
      },
      {
        id: 'ch15-q12',
        questionNumber: 12,
        question: 'Which one of the following gases is used to destroy harmful bacteria in water?',
        options: [
          { key: 'a', text: 'iodine' },
          { key: 'b', text: 'chlorine' },
          { key: 'c', text: 'fluorine' },
          { key: 'd', text: 'bromine' }
        ],
        correctAnswer: 'b',
        explanation: 'Chlorine gas (chlorination) is universally used to disinfect drinking water.'
      },
      {
        id: 'ch15-q13',
        questionNumber: 13,
        question: 'Which one of the following ions does not cause hardness in water?',
        options: [
          { key: 'a', text: 'Ca²⁺' },
          { key: 'b', text: 'Mg²⁺' },
          { key: 'c', text: 'SO₄²⁻' },
          { key: 'd', text: 'Na⁺' }
        ],
        correctAnswer: 'd',
        explanation: 'Sodium ions (Na⁺) form soluble salts with fatty acids and do not cause hardness.'
      },
      {
        id: 'ch15-q14',
        questionNumber: 14,
        question: 'A disease that causes bone and tooth damage is:',
        options: [
          { key: 'a', text: 'fluorosis' },
          { key: 'b', text: 'hepatitis' },
          { key: 'c', text: 'cholera' },
          { key: 'd', text: 'jaundice' }
        ],
        correctAnswer: 'a',
        explanation: 'Excessive fluoride ingestion causes skeletal and dental fluorosis.'
      },
      {
        id: 'ch15-q15',
        questionNumber: 15,
        question: 'Ionic compounds are soluble in water due to:',
        options: [
          { key: 'a', text: 'hydrogen bonding' },
          { key: 'b', text: 'ion-dipole forces' },
          { key: 'c', text: 'dipole-dipole forces' },
          { key: 'd', text: 'dipole-induced dipole forces' }
        ],
        correctAnswer: 'b',
        explanation: 'Water dipoles surround and stabilize positive and negative ions through strong ion-dipole attractions.'
      },
      {
        id: 'ch15-q16',
        questionNumber: 16,
        question: 'The chemicals used to kill or control pests are called pesticides. They are:',
        options: [
          { key: 'a', text: 'dangerous inorganic chemicals' },
          { key: 'b', text: 'dangerous organic chemicals' },
          { key: 'c', text: 'beneficial inorganic chemicals' },
          { key: 'd', text: 'beneficial organic chemicals' }
        ],
        correctAnswer: 'b',
        explanation: 'Most modern pesticides are dangerous synthetic organic compounds.'
      }
    ]
  },
  {
    id: 'ch-16',
    number: 16,
    title: 'Chemical Industries',
    urduTitle: 'کیمیائی صنعتیں (کیمیکل انڈسٹریز)',
    description: 'Metallurgy of copper, Solvay\'s process for sodium carbonate, Haber\'s process for ammonia, urea manufacturing, and fractional distillation of petroleum.',
    summary: 'Key chemical industries include metallurgical extraction of copper from sulfide ores, the Solvay process for soda ash, and petroleum refining into fractions.',
    shortQuestions: [
      {
        id: 'ch16-sq1',
        questionNumber: 'Q.1',
        question: 'What role is played by pine oil in the froth flotation process?',
        answer: 'Pine oil acts as a collector and foaming agent. The copper ore particles are preferentially wetted by the oil, while gangue particles are wetted by water. Air blown through creates a mineral-laden froth that rises to the surface.'
      },
      {
        id: 'ch16-sq2',
        questionNumber: 'Q.2',
        question: 'Name the various metallurgical operations.',
        answer: 'The major metallurgical operations are as follows:',
        exampleList: [
          '1. Concentration of the ore (Crushing, Gravity separation, Froth flotation, Electromagnetic separation)',
          '2. Extraction of the metal (Roasting, Smelting, Bessemerization)',
          '3. Refining of the metal (Electro-refining)'
        ]
      },
      {
        id: 'ch16-sq3',
        questionNumber: 'Q.3',
        question: 'Explain process of electro-refining.',
        answer: 'Electrolytic refining of copper is carried out in an electrolytic tank having copper sulphate solution. Two electrodes: impure copper metal acts as anode and pure copper metal acts as cathode suspended in the electrolytic solution. On passing electric current, impure copper from anode dissolves into solution. Side by side, pure copper ions from solution deposit on cathode (cathode becomes pure copper). Impurities like gold and silver settle down as anode mud.'
      },
      {
        id: 'ch16-sq4',
        questionNumber: 'Q.4',
        question: 'What are advantages of Solvay\'s process?',
        answer: 'Advantages of Solvay\'s process include:',
        exampleList: [
          '(i) It is a cheap process as raw materials are available at very low prices.',
          '(ii) Carbon dioxide and ammonia are recovered and reused efficiently.',
          '(iii) Sodium carbonate of very high purity is obtained.'
        ]
      },
      {
        id: 'ch16-sq5',
        questionNumber: 'Q.5',
        question: 'What is the principle of Solvay\'s process?',
        answer: 'Principle of Solvay\'s process lies in the low solubility of sodium bicarbonate at low temperature i.e., at 15°C. When CO2 is passed through an ammonical solution of NaCl called ammonical brine, only NaHCO3 precipitates.',
        chemicalReactions: [
          'Na+(aq) + HCO3-(aq) -> NaHCO3(s)'
        ]
      },
      {
        id: 'ch16-sq6',
        questionNumber: 'Q.6',
        question: 'What happens when ammonical brine is carbonated?',
        answer: 'When CO2 is passed through ammonical solution of NaCl (ammonical brine), only NaHCO3 precipitates out due to its lower solubility at 15°C.',
        chemicalReactions: [
          'Na+(aq) + HCO3-(aq) -> NaHCO3(s)'
        ]
      },
      {
        id: 'ch16-sq7',
        questionNumber: 'Q.7',
        question: 'How NaHCO3 is converted to Na2CO3?',
        answer: 'By heating sodium bicarbonate (NaHCO3), it decomposes into sodium carbonate (Na2CO3). This thermal process is called calcination.',
        chemicalReactions: [
          '2NaHCO3(s) --(Heat)--> Na2CO3 + CO2(g) + H2O(l)'
        ]
      },
      {
        id: 'ch16-sq8',
        questionNumber: 'Q.8',
        question: 'How ammonia is recovered in the Solvay\'s process?',
        answer: 'Ammonia is recovered in the recovery tower from ammonium chloride solution produced in the carbonating tower and calcium hydroxide formed in lime kiln.',
        chemicalReactions: [
          '2NH4Cl(s) + Ca(OH)2 -> 2NH3 + CaCl2 + 2H2O'
        ],
        notes: 'In fact, all ammonia is recovered in this tower and reused in the process. Any minor losses are compensated by adding fresh ammonia.'
      },
      {
        id: 'ch16-sq9',
        questionNumber: 'Q.9',
        question: 'How ammonia is prepared for the synthesis of urea?',
        answer: 'Ammonia is prepared by the "Haber\'s process". One volume of nitrogen (from air) and three volumes of hydrogen are passed over iron catalyst at 450°C and 200 atm pressure.',
        chemicalReactions: [
          'N2(g) + 3H2(g) --(Fe, 450°C, 200 atm)--> 2NH3(g)'
        ]
      },
      {
        id: 'ch16-sq10',
        questionNumber: 'Q.10',
        question: 'Describe the formation of petroleum.',
        answer: 'Organic Theory: According to the organic theory, millions of years ago living plants and animals in the seas died. Their bodies sank and buried under mud and sand. Then decomposition process took place in the absence of air because of high pressure, temperature and bacterial effects. This process took millions of years for completion. Thus, remains of dead plants and animals were converted into a dark brownish viscous crude oil.'
      },
      {
        id: 'ch16-sq11',
        questionNumber: 'Q.11',
        question: 'What is refining of petroleum and how it is carried out?',
        answer: 'Refining process is the separation of crude oil mixture into various useful products (fractions). It is carried out by a process called "fractional distillation".'
      },
      {
        id: 'ch16-sq12',
        questionNumber: 'Q.12',
        question: 'Give a use of kerosene oil.',
        answer: 'Kerosene oil is used as domestic fuel, lighting, and specialized grades are purified for jet aircraft fuel.'
      },
      {
        id: 'ch16-sq13',
        questionNumber: 'Q.13',
        question: 'Describe the difference between diesel oil and fuel oil.',
        answer: 'Diesel oil and fuel oil differ in boiling point range, carbon chain lengths, and applications.',
        tableData: {
          headers: ['Diesel Oil', 'Fuel Oil'],
          rows: [
            ['(i) Number of carbon atoms in diesel oil ranges from C13 to C15.', '(i) Number of carbon atoms in fuel oil ranges from C15 to C18.'],
            ['(ii) Boiling range is 250°C to 350°C.', '(ii) Boiling range is 350°C to 400°C.'],
            ['(iii) Used as fuel for buses, trucks, railway engines, ships.', '(iii) Used in industries to heat boilers and furnaces.']
          ]
        }
      },
      {
        id: 'ch16-sq14',
        questionNumber: 'Q.14',
        question: 'Write down the names of four fractions obtained by the fractional distillation of residual oil.',
        answer: 'The fractions obtained by the vacuum fractional distillation of residual oil are:',
        exampleList: [
          '• Lubricating oils',
          '• Paraffin wax',
          '• Asphalt (Bitumen)',
          '• Petroleum coke'
        ]
      },
      {
        id: 'ch16-sq15',
        questionNumber: 'Q.15',
        question: 'What is the difference between crude oil and residual oil?',
        answer: 'Crude oil is the natural unrefined mineral mixture extracted from the earth, while residual oil is the dense fraction remaining after heating above 400°C.',
        tableData: {
          headers: ['Crude Oil', 'Residual Oil'],
          rows: [
            ['Remains of dead plants and animals converted into dark brownish viscous crude oil.', 'By the refining of crude oil, residual oil is obtained which does not vaporize under normal conditions and is collected for vacuum distillation.']
          ]
        }
      },
      {
        id: 'ch16-sq16',
        questionNumber: 'Q.16',
        question: 'Which petroleum fraction is used in dry cleaning?',
        answer: 'Gasoline (petrol) or specialized petroleum ether fractions are used in commercial dry cleaning.'
      }
    ],
    extensiveQuestions: [
      {
        id: 'ch16-eq1',
        questionNumber: 'Q.1',
        question: 'Describe in detail the various processes involved in the concentration of ore. Explain your answer with the help of diagrams.',
        answerReference: 'Includes crushing, gravity separation based on density, froth flotation for copper sulfide ores using pine oil, and electromagnetic separation.'
      },
      {
        id: 'ch16-eq2',
        questionNumber: 'Q.2',
        question: 'Explain the process of roasting with reference to copper.',
        answerReference: 'Heating the concentrated ore in a reverberatory furnace with excess air to burn off volatile impurities (SO2) and form cuprous and ferrous sulfides.'
      },
      {
        id: 'ch16-eq3',
        questionNumber: 'Q.3',
        question: 'Write a detailed note on Ammonia Solvay\'s process.',
        answerReference: 'Details ammoniation of brine, carbonating tower precipitation of NaHCO3, calcination to Na2CO3, and ammonia recovery using slaked lime.'
      },
      {
        id: 'ch16-eq4',
        questionNumber: 'Q.4',
        question: 'Write a note on fractional distillation of petroleum.',
        answerReference: 'Separation of crude oil into fractions based on differing boiling points in a tall fractionating column (petroleum gas, petrol, kerosene, diesel, fuel oil, residue).'
      },
      {
        id: 'ch16-eq5',
        questionNumber: 'Q.5',
        question: 'How urea is manufactured? Explain showing the flow sheet diagram.',
        answerReference: 'Reaction of liquid NH3 with CO2 under 200 atm to form ammonium carbamate, followed by evaporation and prilling into solid fertilizer granules.'
      },
      {
        id: 'ch16-eq6',
        questionNumber: 'Q.6',
        question: 'How crude oil is refined? Explain two important fractions of petroleum along with their usage.',
        answerReference: 'Refining via fractional distillation. Gasoline (fuel for light motor vehicles) and Kerosene oil (aviation jet fuel and domestic heating).'
      },
      {
        id: 'ch16-eq7',
        questionNumber: 'Q.7',
        question: 'Write a note in detail on smelting and bessemerization, giving a specific example.',
        answerReference: 'Smelting roasts ore with sand to separate molten matte (Cu2S + FeS). Bessemerization blows hot air through molten matte to form 98% pure blister copper.'
      }
    ],
    quizzes: [
      {
        id: 'ch16-q1',
        questionNumber: 1,
        question: 'Concentration is a:',
        options: [
          { key: 'a', text: 'mixing technique' },
          { key: 'b', text: 'separating technique' },
          { key: 'c', text: 'boiling technique' },
          { key: 'd', text: 'cooling technique' }
        ],
        correctAnswer: 'b',
        explanation: 'Concentration is a physical separating technique used to remove unwanted gangue impurities from crushed ore.'
      },
      {
        id: 'ch16-q2',
        questionNumber: 2,
        question: 'Froth flotation process is used to concentrate the ore on:',
        options: [
          { key: 'a', text: 'density basis' },
          { key: 'b', text: 'concentration basis' },
          { key: 'c', text: 'wetting basis' },
          { key: 'd', text: 'magnetic basis' }
        ],
        correctAnswer: 'c',
        explanation: 'Froth flotation is based on the differential wetting properties of ore particles by oil and gangue by water.'
      },
      {
        id: 'ch16-q3',
        questionNumber: 3,
        question: 'Matte is a mixture of:',
        options: [
          { key: 'a', text: 'FeS and CuS' },
          { key: 'b', text: 'Cu2S and FeS' },
          { key: 'c', text: 'molten matte is removed' },
          { key: 'd', text: 'molten matte is added' }
        ],
        correctAnswer: 'b',
        explanation: 'Matte obtained during smelting of copper ore is a molten mixture of Cu2S and FeS.'
      },
      {
        id: 'ch16-q4',
        questionNumber: 4,
        question: 'In the bessemerization process:',
        options: [
          { key: 'a', text: 'roasted ore is heated' },
          { key: 'b', text: 'Cu2O and FeO' },
          { key: 'c', text: 'molten matte is heated' },
          { key: 'd', text: 'CuS and FeO' }
        ],
        correctAnswer: 'c',
        explanation: 'Molten matte is heated in a pear-shaped Bessemer converter with a blast of hot air and sand.'
      },
      {
        id: 'ch16-q5',
        questionNumber: 5,
        question: 'Concentration of the copper ore is carried out by:',
        options: [
          { key: 'a', text: 'calcinations' },
          { key: 'b', text: 'roasting' },
          { key: 'c', text: 'froth flotation' },
          { key: 'd', text: 'distillation' }
        ],
        correctAnswer: 'c',
        explanation: 'Copper pyrite ore is concentrated primarily by the froth flotation process.'
      },
      {
        id: 'ch16-q6',
        questionNumber: 6,
        question: 'When CO2 is passed through the ammonical brine the only salt that precipitates is:',
        options: [
          { key: 'a', text: 'NaHCO3' },
          { key: 'b', text: 'Na2CO3' },
          { key: 'c', text: 'NH4Cl' },
          { key: 'd', text: 'NaCl' }
        ],
        correctAnswer: 'a',
        explanation: 'NaHCO3 has the lowest solubility at 15°C among the ions present, so it precipitates out.'
      },
      {
        id: 'ch16-q7',
        questionNumber: 7,
        question: 'In Solvay\'s process slaked lime is used to:',
        options: [
          { key: 'a', text: 'prepare CO2' },
          { key: 'b', text: 'prepare quick lime' },
          { key: 'c', text: 'recover ammonia' },
          { key: 'd', text: 'form Na2CO3' }
        ],
        correctAnswer: 'c',
        explanation: 'Slaked lime Ca(OH)2 reacts with ammonium chloride in the ammonia recovery tower to regenerate NH3 gas.'
      },
      {
        id: 'ch16-q8',
        questionNumber: 8,
        question: 'When NaHCO3 is heated it forms:',
        options: [
          { key: 'a', text: 'CO2' },
          { key: 'b', text: 'CaCO3' },
          { key: 'c', text: 'NH2COONH2' },
          { key: 'd', text: 'CaO' }
        ],
        correctAnswer: 'a',
        explanation: 'Thermal calcination of NaHCO3 produces Na2CO3, CO2, and H2O.'
      },
      {
        id: 'ch16-q9',
        questionNumber: 9,
        question: 'Formula of urea is:',
        options: [
          { key: 'a', text: 'NH2COONH4' },
          { key: 'b', text: 'NH2CONH3' },
          { key: 'c', text: 'Ca(OH)2' },
          { key: 'd', text: 'NH2CONH2' }
        ],
        correctAnswer: 'd',
        explanation: 'The chemical formula of urea (carbamide) is NH2CONH2.'
      },
      {
        id: 'ch16-q10',
        questionNumber: 10,
        question: 'Crude oil is heated in the fractionating furnace upto:',
        options: [
          { key: 'a', text: '300°C' },
          { key: 'b', text: '350°C' },
          { key: 'c', text: '400°C' },
          { key: 'd', text: '450°C' }
        ],
        correctAnswer: 'c',
        explanation: 'Crude petroleum is pre-heated in a pipe furnace up to 400°C before entering the fractionating tower.'
      },
      {
        id: 'ch16-q11',
        questionNumber: 11,
        question: 'When crude oil is heated in the fractionating tower:',
        options: [
          { key: 'a', text: 'vapours of higher boiling point fraction condense first in the lower part of the tower' },
          { key: 'b', text: 'vapours of lower boiling point fraction condense first in the lower part of tower' },
          { key: 'c', text: 'vapours of higher boiling point condense later in the upper part of tower' },
          { key: 'd', text: 'vapours of higher boiling point never condense' }
        ],
        correctAnswer: 'a',
        explanation: 'Fractions with high boiling points condense first at the hotter bottom trays of the fractionating column.'
      },
      {
        id: 'ch16-q12',
        questionNumber: 12,
        question: 'Which one of the following is used as jet fuel?',
        options: [
          { key: 'a', text: 'kerosene oil' },
          { key: 'b', text: 'lubricating oil' },
          { key: 'c', text: 'fuel oil' },
          { key: 'd', text: 'diesel oil' }
        ],
        correctAnswer: 'a',
        explanation: 'Purified kerosene oil (aviation turbine fuel) powers turbojet and turboprop aircraft.'
      },
      {
        id: 'ch16-q13',
        questionNumber: 13,
        question: 'Which one of the following is not fraction of crude oil?',
        options: [
          { key: 'a', text: 'paraffin wax' },
          { key: 'b', text: 'asphalt' },
          { key: 'c', text: 'fuel oil' },
          { key: 'd', text: 'petroleum coke' }
        ],
        correctAnswer: 'c',
        explanation: 'Fuel oil is a direct fraction from atmospheric distillation, whereas asphalt, paraffin wax, and petroleum coke are derived from residual oil.'
      },
      {
        id: 'ch16-q14',
        questionNumber: 14,
        question: 'Which one of the followings is not a fraction of petroleum?',
        options: [
          { key: 'a', text: 'kerosene oil' },
          { key: 'b', text: 'diesel oil' },
          { key: 'c', text: 'alcohol' },
          { key: 'd', text: 'petrol' }
        ],
        correctAnswer: 'c',
        explanation: 'Alcohol is produced biologically via fermentation or chemical synthesis, not as a direct petroleum fraction.'
      },
      {
        id: 'ch16-q15',
        questionNumber: 15,
        question: 'The nitrogen present in urea is used by plants to synthesize:',
        options: [
          { key: 'a', text: 'sugar' },
          { key: 'b', text: 'proteins' },
          { key: 'c', text: 'fats' },
          { key: 'd', text: 'DNA' }
        ],
        correctAnswer: 'b',
        explanation: 'Plants absorb nitrogen from urea to assemble essential amino acids and proteins.'
      },
      {
        id: 'ch16-q16',
        questionNumber: 16,
        question: 'Which one of the following organic compound is found in gasoline?',
        options: [
          { key: 'a', text: 'C2H4' },
          { key: 'b', text: 'C3H8' },
          { key: 'c', text: 'C8H18' },
          { key: 'd', text: 'C12H26' }
        ],
        correctAnswer: 'c',
        explanation: 'Octane (C8H18) is a primary hydrocarbon benchmark component of gasoline (petrol).'
      }
    ]
  }
];
