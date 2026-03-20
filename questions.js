// 45 placement test questions: 15 Math, 15 English, 15 Biology
// Each question has a grade level (4-10), and they progress in difficulty
// Questions are multiple choice with 4 options

const placementQuestions = [
  // ═══════════════════════════════════════
  // MATH (15 questions, ~2 per grade level)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 1, subject: 'Math', grade: 4,
    question: 'What is 4,208 + 3,975?',
    options: ['7,183', '8,183', '8,173', '7,283'],
    answer: 1 },

  { id: 2, subject: 'Math', grade: 4,
    question: 'What is the area of a rectangle that is 9 inches long and 4 inches wide?',
    diagram: '<svg width="200" height="120" viewBox="0 0 200 120"><rect x="20" y="20" width="160" height="80" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="100" y="115" text-anchor="middle" fill="#94a3b8" font-size="14">9 in</text><text x="190" y="65" text-anchor="start" fill="#94a3b8" font-size="14">4 in</text></svg>',
    options: ['26 square inches', '36 square inches', '13 square inches', '32 square inches'],
    answer: 1 },

  // Grade 5
  { id: 3, subject: 'Math', grade: 5,
    question: 'What is 2/5 + 1/3?',
    options: ['3/8', '3/15', '11/15', '7/15'],
    answer: 2 },

  { id: 4, subject: 'Math', grade: 5,
    question: 'What is the value of 4 + 3 × 2² − 1?',
    options: ['15', '27', '19', '23'],
    answer: 0 },

  // Grade 6
  { id: 5, subject: 'Math', grade: 6,
    question: 'What is 40% of 250?',
    options: ['80', '90', '100', '120'],
    answer: 2 },

  { id: 6, subject: 'Math', grade: 6,
    question: 'Simplify: −8 + 3 − (−5)',
    options: ['−10', '0', '−6', '6'],
    answer: 1 },

  // Grade 7
  { id: 7, subject: 'Math', grade: 7,
    question: 'Solve for x: 3x + 5 = 20',
    options: ['x = 3', 'x = 5', 'x = 7', 'x = 8'],
    answer: 1 },

  { id: 8, subject: 'Math', grade: 7,
    question: 'What is the area of a triangle with base 10 and height 6?',
    diagram: '<svg width="200" height="140" viewBox="0 0 200 140"><polygon points="20,120 180,120 100,20" fill="none" stroke="#3b82f6" stroke-width="2"/><line x1="100" y1="20" x2="100" y2="120" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,4"/><text x="100" y="135" text-anchor="middle" fill="#94a3b8" font-size="14">10</text><text x="108" y="75" fill="#94a3b8" font-size="14">6</text></svg>',
    options: ['60', '30', '16', '36'],
    answer: 1 },

  // Grade 8
  { id: 9, subject: 'Math', grade: 8,
    question: 'What is the slope of the line passing through (2, 5) and (6, 13)?',
    diagram: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="30" y1="180" x2="30" y2="10" stroke="#475569" stroke-width="1"/><line x1="20" y1="170" x2="190" y2="170" stroke="#475569" stroke-width="1"/><circle cx="60" cy="130" r="4" fill="#3b82f6"/><circle cx="140" cy="50" r="4" fill="#3b82f6"/><line x1="60" y1="130" x2="140" y2="50" stroke="#3b82f6" stroke-width="2"/><text x="50" y="148" fill="#94a3b8" font-size="12">(2,5)</text><text x="130" y="44" fill="#94a3b8" font-size="12">(6,13)</text></svg>',
    options: ['1', '2', '3', '4'],
    answer: 1 },

  { id: 10, subject: 'Math', grade: 8,
    question: 'A right triangle has legs of 6 and 8. What is the hypotenuse?',
    diagram: '<svg width="200" height="160" viewBox="0 0 200 160"><polygon points="30,140 170,140 30,30" fill="none" stroke="#3b82f6" stroke-width="2"/><rect x="30" y="124" width="16" height="16" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="100" y="155" text-anchor="middle" fill="#94a3b8" font-size="14">8</text><text x="18" y="90" fill="#94a3b8" font-size="14">6</text><text x="110" y="80" fill="#f59e0b" font-size="14">?</text></svg>',
    options: ['12', '14', '10', '9'],
    answer: 2 },

  // Grade 9
  { id: 11, subject: 'Math', grade: 9,
    question: 'Factor: x² + 5x + 6',
    options: ['(x + 1)(x + 6)', '(x + 2)(x + 3)', '(x + 3)(x + 3)', '(x − 2)(x − 3)'],
    answer: 1 },

  { id: 12, subject: 'Math', grade: 9,
    question: 'Solve: x² − 9 = 0',
    options: ['x = 3 only', 'x = −3 only', 'x = 3 or x = −3', 'x = 9'],
    answer: 2 },

  // Grade 10
  { id: 13, subject: 'Math', grade: 10,
    question: 'Two angles of a triangle are 45° and 70°. What is the third angle?',
    diagram: '<svg width="200" height="140" viewBox="0 0 200 140"><polygon points="20,120 180,120 120,20" fill="none" stroke="#3b82f6" stroke-width="2"/><text x="40" y="115" fill="#94a3b8" font-size="13">45°</text><text x="148" y="115" fill="#94a3b8" font-size="13">70°</text><text x="115" y="38" fill="#f59e0b" font-size="14">?°</text></svg>',
    options: ['55°', '65°', '75°', '85°'],
    answer: 1 },

  { id: 14, subject: 'Math', grade: 10,
    question: 'What is the area of a circle with radius 6? (in terms of π)',
    diagram: '<svg width="160" height="160" viewBox="0 0 160 160"><circle cx="80" cy="80" r="60" fill="none" stroke="#3b82f6" stroke-width="2"/><line x1="80" y1="80" x2="140" y2="80" stroke="#94a3b8" stroke-width="1.5"/><circle cx="80" cy="80" r="3" fill="#3b82f6"/><text x="108" y="74" fill="#94a3b8" font-size="14">r = 6</text></svg>',
    options: ['12π', '24π', '36π', '48π'],
    answer: 2 },

  { id: 15, subject: 'Math', grade: 10,
    question: 'Find the distance between points (1, 2) and (7, 10).',
    diagram: '<svg width="200" height="200" viewBox="0 0 200 200"><line x1="30" y1="180" x2="30" y2="10" stroke="#475569" stroke-width="1"/><line x1="20" y1="170" x2="190" y2="170" stroke="#475569" stroke-width="1"/><circle cx="50" cy="150" r="4" fill="#3b82f6"/><circle cx="150" cy="50" r="4" fill="#10b981"/><line x1="50" y1="150" x2="150" y2="50" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6,4"/><text x="35" y="165" fill="#3b82f6" font-size="12">(1,2)</text><text x="135" y="44" fill="#10b981" font-size="12">(7,10)</text><text x="105" y="112" fill="#f59e0b" font-size="13">d = ?</text></svg>',
    options: ['8', '10', '12', '14'],
    answer: 1 },

  // ═══════════════════════════════════════
  // ENGLISH (15 questions)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 16, subject: 'English', grade: 4,
    question: 'In the sentence "The small dog chased the red ball," which word is an adjective?',
    options: ['dog', 'chased', 'small', 'ball'],
    answer: 2 },

  { id: 17, subject: 'English', grade: 4,
    question: 'Which of these is a complete sentence?',
    options: ['Running quickly through the park.', 'The cat sat on the mat.', 'Because it was raining.', 'Very tall and green.'],
    answer: 1 },

  // Grade 5
  { id: 18, subject: 'English', grade: 5,
    question: 'What is the past tense of "swim"?',
    options: ['swimmed', 'swum', 'swam', 'swimming'],
    answer: 2 },

  { id: 19, subject: 'English', grade: 5,
    question: 'What does a prefix do to a word?',
    options: ['Changes its spelling', 'Adds to the end', 'Changes or adds meaning at the beginning', 'Makes it plural'],
    answer: 2 },

  // Grade 6
  { id: 20, subject: 'English', grade: 6,
    question: '"The wind whispered through the trees" is an example of:',
    options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
    answer: 2 },

  { id: 21, subject: 'English', grade: 6,
    question: 'What is a thesis statement?',
    options: ['The first sentence of any essay', 'A question you ask the reader', 'The main argument or point of an essay', 'A summary of the conclusion'],
    answer: 2 },

  // Grade 7
  { id: 22, subject: 'English', grade: 7,
    question: 'Which sentence uses the correct form?',
    options: ['Me and my friend went to the store.', 'My friend and I went to the store.', 'My friend and me went to the store.', 'I and my friend went to the store.'],
    answer: 1 },

  { id: 23, subject: 'English', grade: 7,
    question: '"Life is a highway" is an example of:',
    options: ['Simile', 'Metaphor', 'Hyperbole', 'Onomatopoeia'],
    answer: 1 },

  // Grade 8
  { id: 24, subject: 'English', grade: 8,
    question: 'What is parallel structure?',
    options: ['Using the same font throughout', 'Using the same grammatical form for similar ideas', 'Writing two paragraphs that are the same length', 'Using parallel lines in diagrams'],
    answer: 1 },

  { id: 25, subject: 'English', grade: 8,
    question: '"The homework was completed by the students." This sentence is written in:',
    options: ['Active voice', 'Passive voice', 'Future tense', 'Imperative mood'],
    answer: 1 },

  // Grade 9
  { id: 26, subject: 'English', grade: 9,
    question: '"Everyone in my class has a phone, so phones must be essential for learning." This is an example of what logical fallacy?',
    options: ['Ad hominem', 'Straw man', 'Bandwagon / appeal to popularity', 'Red herring'],
    answer: 2 },

  { id: 27, subject: 'English', grade: 9,
    question: 'Ethos, pathos, and logos are:',
    options: ['Types of poetry', 'Greek gods', 'Modes of persuasion (credibility, emotion, logic)', 'Parts of a sentence'],
    answer: 2 },

  // Grade 10
  { id: 28, subject: 'English', grade: 10,
    question: 'In "Pride and Prejudice," Austen writes: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." This is an example of:',
    options: ['Foreshadowing', 'Irony / satire', 'Flashback', 'Allegory'],
    answer: 1 },

  { id: 29, subject: 'English', grade: 10,
    question: 'What does it mean to analyze a text through a "critical lens"?',
    options: ['To criticize the author', 'To read it with a magnifying glass', 'To examine it from a specific theoretical perspective', 'To find all the grammar errors'],
    answer: 2 },

  { id: 30, subject: 'English', grade: 10,
    question: 'In Robert Frost\'s "The Road Not Taken," the two roads most likely symbolize:',
    options: ['Actual hiking trails', 'Choices in life', 'The difference between city and country', 'Two different poems'],
    answer: 1 },

  // ═══════════════════════════════════════
  // BIOLOGY (15 questions)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 31, subject: 'Biology', grade: 4,
    question: 'Which of these is NOT something all living things need to survive?',
    options: ['Water', 'Food/energy', 'Electricity', 'Air'],
    answer: 2 },

  { id: 32, subject: 'Biology', grade: 4,
    question: 'What is the job of a plant\'s roots?',
    options: ['Make food from sunlight', 'Absorb water and nutrients from soil', 'Attract pollinators', 'Produce seeds'],
    answer: 1 },

  // Grade 5
  { id: 33, subject: 'Biology', grade: 5,
    question: 'What is photosynthesis?',
    options: ['How animals breathe', 'How plants make food using sunlight', 'How rocks are formed', 'How water evaporates'],
    answer: 1 },

  { id: 34, subject: 'Biology', grade: 5,
    question: 'In a food chain, what is a producer?',
    options: ['An animal that hunts other animals', 'An organism that makes its own food (like plants)', 'An animal that eats only plants', 'A decomposer like a mushroom'],
    answer: 1 },

  // Grade 6
  { id: 35, subject: 'Biology', grade: 6,
    question: 'What is the main difference between a plant cell and an animal cell?',
    options: ['Plant cells have a nucleus, animal cells don\'t', 'Plant cells have a cell wall and chloroplasts, animal cells don\'t', 'Animal cells are bigger', 'Animal cells have DNA, plant cells don\'t'],
    answer: 1 },

  { id: 36, subject: 'Biology', grade: 6,
    question: 'The six kingdoms of life are used to:',
    options: ['Describe the six continents', 'Classify all living organisms', 'Name the six oceans', 'Describe six types of rocks'],
    answer: 1 },

  // Grade 7
  { id: 37, subject: 'Biology', grade: 7,
    question: 'If both parents carry a recessive gene (Bb × Bb), what percentage of offspring will show the recessive trait?',
    options: ['0%', '25%', '50%', '75%'],
    answer: 1 },

  { id: 38, subject: 'Biology', grade: 7,
    question: 'What is natural selection?',
    options: ['Animals choosing their mates', 'Organisms with traits better suited to their environment survive and reproduce more', 'Scientists selecting which animals to study', 'Plants growing toward sunlight'],
    answer: 1 },

  // Grade 8
  { id: 39, subject: 'Biology', grade: 8,
    question: 'What is the main purpose of mitosis?',
    options: ['To create sex cells', 'To produce energy', 'To grow and repair body cells', 'To digest food'],
    answer: 2 },

  { id: 40, subject: 'Biology', grade: 8,
    question: 'The equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ represents:',
    options: ['Cellular respiration', 'Photosynthesis', 'Fermentation', 'Decomposition'],
    answer: 1 },

  // Grade 9
  { id: 41, subject: 'Biology', grade: 9,
    question: 'Which macromolecule is made of amino acids?',
    options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'],
    answer: 2 },

  { id: 42, subject: 'Biology', grade: 9,
    question: 'During transcription, DNA is used as a template to make:',
    options: ['More DNA', 'mRNA', 'Protein', 'Lipids'],
    answer: 1 },

  // Grade 10
  { id: 43, subject: 'Biology', grade: 10,
    question: 'What is the difference between mitosis and meiosis?',
    options: ['Mitosis makes 4 cells, meiosis makes 2', 'Mitosis is for growth (2 identical cells), meiosis is for sex cells (4 unique cells)', 'They are the same thing', 'Meiosis only happens in plants'],
    answer: 1 },

  { id: 44, subject: 'Biology', grade: 10,
    question: 'In the lock-and-key model, what happens when an enzyme is denatured?',
    options: ['It works faster', 'Its shape changes and it can no longer bind to its substrate', 'It duplicates itself', 'It becomes a different enzyme'],
    answer: 1 },

  { id: 45, subject: 'Biology', grade: 10,
    question: 'A mutation in a gamete (sex cell) vs. a somatic (body) cell — which can be inherited?',
    options: ['Somatic cell mutation', 'Gamete mutation', 'Both equally', 'Neither'],
    answer: 1 },

  // ═══════════════════════════════════════
  // SCIENCE (15 questions)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 46, subject: 'Science', grade: 4,
    question: 'What are the three states of matter?',
    diagram: '<svg width="280" height="100" viewBox="0 0 280 100"><rect x="10" y="20" width="70" height="60" rx="2" fill="#3b82f6" opacity="0.3" stroke="#3b82f6" stroke-width="1.5"/><text x="45" y="90" text-anchor="middle" fill="#94a3b8" font-size="11">Solid</text><ellipse cx="140" cy="50" rx="40" ry="30" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" stroke-width="1.5"/><path d="M110,60 Q120,40 130,55 Q140,35 150,50 Q160,40 170,60" fill="none" stroke="#8b5cf6" stroke-width="1.5"/><text x="140" y="90" text-anchor="middle" fill="#94a3b8" font-size="11">Liquid</text><circle cx="230" cy="35" r="5" fill="#10b981" opacity="0.4"/><circle cx="245" cy="50" r="5" fill="#10b981" opacity="0.4"/><circle cx="220" cy="55" r="5" fill="#10b981" opacity="0.4"/><circle cx="240" cy="30" r="5" fill="#10b981" opacity="0.4"/><circle cx="225" cy="42" r="5" fill="#10b981" opacity="0.4"/><text x="235" y="90" text-anchor="middle" fill="#94a3b8" font-size="11">Gas</text><text x="140" y="14" text-anchor="middle" fill="#64748b" font-size="11">?</text></svg>',
    options: ['Hot, cold, warm', 'Solid, liquid, gas', 'Heavy, light, medium', 'Big, small, tiny'],
    answer: 1 },

  { id: 47, subject: 'Science', grade: 4,
    question: 'What type of simple machine is a ramp?',
    options: ['Lever', 'Pulley', 'Inclined plane', 'Wheel and axle'],
    answer: 2 },

  // Grade 5
  { id: 48, subject: 'Science', grade: 5,
    question: 'What causes day and night on Earth?',
    options: ['The moon blocking the sun', 'Earth rotating on its axis', 'Earth orbiting the sun', 'The sun moving around Earth'],
    answer: 1 },

  { id: 49, subject: 'Science', grade: 5,
    question: 'What is friction?',
    options: ['A force that speeds things up', 'A force that resists motion between surfaces', 'A type of energy', 'The pull of gravity'],
    answer: 1 },

  // Grade 6
  { id: 50, subject: 'Science', grade: 6,
    question: 'Energy that is stored due to an object\'s position or shape is called:',
    options: ['Kinetic energy', 'Thermal energy', 'Potential energy', 'Chemical energy'],
    answer: 2 },

  { id: 51, subject: 'Science', grade: 6,
    question: 'What are the three main layers of the Earth?',
    diagram: '<svg width="180" height="180" viewBox="0 0 180 180"><circle cx="90" cy="90" r="80" fill="#8b6914" stroke="#5c3d1e" stroke-width="2"/><circle cx="90" cy="90" r="55" fill="#ef4444" opacity="0.4" stroke="#ef4444" stroke-width="1.5"/><circle cx="90" cy="90" r="25" fill="#f59e0b" stroke="#f59e0b" stroke-width="1.5"/><text x="90" y="94" text-anchor="middle" fill="#fff" font-size="10">?</text><text x="90" y="65" text-anchor="middle" fill="#fca5a5" font-size="10">?</text><text x="90" y="40" text-anchor="middle" fill="#d4a76a" font-size="10">?</text></svg>',
    options: ['Atmosphere, hydrosphere, lithosphere', 'Crust, mantle, core', 'Sand, rock, magma', 'Surface, middle, bottom'],
    answer: 1 },

  // Grade 7
  { id: 52, subject: 'Science', grade: 7,
    question: 'Newton\'s Third Law states that for every action there is:',
    options: ['A bigger reaction', 'An equal and opposite reaction', 'No reaction', 'A delayed reaction'],
    answer: 1 },

  { id: 53, subject: 'Science', grade: 7,
    question: 'On the periodic table, elements in the same column (group) have similar:',
    options: ['Colors', 'Sizes', 'Chemical properties', 'Weights'],
    answer: 2 },

  // Grade 8
  { id: 54, subject: 'Science', grade: 8,
    question: 'What type of wave is sound?',
    options: ['Transverse wave', 'Longitudinal wave', 'Electromagnetic wave', 'Surface wave'],
    answer: 1 },

  { id: 55, subject: 'Science', grade: 8,
    question: 'In an ionic bond, atoms:',
    options: ['Share electrons equally', 'Share electrons unequally', 'Transfer electrons from one to another', 'Repel each other'],
    answer: 2 },

  // Grade 9
  { id: 56, subject: 'Science', grade: 9,
    question: 'An object accelerates at 3 m/s². If its mass is 10 kg, what is the net force? (F = ma)',
    options: ['3 N', '10 N', '13 N', '30 N'],
    answer: 3 },

  { id: 57, subject: 'Science', grade: 9,
    question: 'What is the atomic number of an element?',
    options: ['Number of neutrons', 'Number of protons', 'Total mass of the atom', 'Number of electrons in the outer shell'],
    answer: 1 },

  // Grade 10
  { id: 58, subject: 'Science', grade: 10,
    question: 'In the ideal gas law PV = nRT, what does "n" represent?',
    options: ['Pressure', 'Number of moles', 'Temperature', 'Volume'],
    answer: 1 },

  { id: 59, subject: 'Science', grade: 10,
    question: 'What is the pH of a neutral solution?',
    options: ['0', '5', '7', '14'],
    answer: 2 },

  { id: 60, subject: 'Science', grade: 10,
    question: 'In a Lewis structure, a covalent bond is represented by:',
    options: ['A transferred electron', 'A shared pair of electrons', 'A positive charge', 'An empty orbital'],
    answer: 1 },

  // ═══════════════════════════════════════
  // HISTORY (15 questions)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 61, subject: 'History', grade: 4,
    question: 'Who were the first people to live in North America?',
    options: ['The Pilgrims', 'The British', 'Native Americans', 'The Spanish'],
    answer: 2 },

  { id: 62, subject: 'History', grade: 4,
    question: 'What is a colony?',
    options: ['A type of animal', 'A settlement ruled by another country', 'A large city', 'A type of government'],
    answer: 1 },

  // Grade 5
  { id: 63, subject: 'History', grade: 5,
    question: 'The Declaration of Independence was signed in what year?',
    options: ['1492', '1620', '1776', '1812'],
    answer: 2 },

  { id: 64, subject: 'History', grade: 5,
    question: 'What did the Bill of Rights add to the Constitution?',
    options: ['The power to tax', 'Protection of individual freedoms', 'The right to own land', 'Rules for elections'],
    answer: 1 },

  // Grade 6
  { id: 65, subject: 'History', grade: 6,
    question: 'Which ancient civilization built the pyramids?',
    options: ['Greeks', 'Romans', 'Egyptians', 'Chinese'],
    answer: 2 },

  { id: 66, subject: 'History', grade: 6,
    question: 'The Silk Road was primarily used for:',
    options: ['Military conquest', 'Religious pilgrimages', 'Trade between Asia and Europe', 'Transporting slaves'],
    answer: 2 },

  // Grade 7
  { id: 67, subject: 'History', grade: 7,
    question: 'What was the feudal system?',
    options: ['A banking system', 'A social hierarchy based on land ownership and loyalty', 'A type of democracy', 'A religious order'],
    answer: 1 },

  { id: 68, subject: 'History', grade: 7,
    question: 'The Renaissance began in which country?',
    options: ['England', 'France', 'Germany', 'Italy'],
    answer: 3 },

  // Grade 8
  { id: 69, subject: 'History', grade: 8,
    question: 'What was the main cause of the American Civil War?',
    options: ['Taxation', 'Slavery and states\' rights', 'Foreign invasion', 'Religious differences'],
    answer: 1 },

  { id: 70, subject: 'History', grade: 8,
    question: 'The Industrial Revolution began in which country?',
    options: ['United States', 'France', 'Great Britain', 'Germany'],
    answer: 2 },

  // Grade 9
  { id: 71, subject: 'History', grade: 9,
    question: 'What event sparked the beginning of World War I?',
    options: ['The invasion of Poland', 'The assassination of Archduke Franz Ferdinand', 'The bombing of Pearl Harbor', 'The Russian Revolution'],
    answer: 1 },

  { id: 72, subject: 'History', grade: 9,
    question: 'The Cold War was primarily between:',
    options: ['Britain and France', 'The US and Soviet Union', 'China and Japan', 'Germany and Russia'],
    answer: 1 },

  // Grade 10
  { id: 73, subject: 'History', grade: 10,
    question: 'Decolonization in Africa and Asia primarily occurred during which decades?',
    options: ['1920s–1930s', '1940s–1960s', '1970s–1980s', '1990s–2000s'],
    answer: 1 },

  { id: 74, subject: 'History', grade: 10,
    question: 'The concept of "nationalism" most directly refers to:',
    options: ['Loyalty to a political party', 'Strong identification with one\'s own nation and its interests', 'Opposition to all forms of government', 'Support for international cooperation'],
    answer: 1 },

  { id: 75, subject: 'History', grade: 10,
    question: 'Historiography is the study of:',
    options: ['Ancient artifacts', 'How history is written and interpreted', 'Geography and maps', 'Future predictions'],
    answer: 1 },

  // ═══════════════════════════════════════
  // GEOGRAPHY (15 questions)
  // ═══════════════════════════════════════

  // Grade 4
  { id: 76, subject: 'Geography', grade: 4,
    question: 'How many continents are there?',
    options: ['5', '6', '7', '8'],
    answer: 2 },

  { id: 77, subject: 'Geography', grade: 4,
    question: 'What does a compass rose show on a map?',
    options: ['The weather', 'Distance between cities', 'Directions (N, S, E, W)', 'Population size'],
    answer: 2 },

  // Grade 5
  { id: 78, subject: 'Geography', grade: 5,
    question: 'Lines of latitude measure distance from the:',
    options: ['Prime Meridian', 'Equator', 'North Pole', 'International Date Line'],
    answer: 1 },

  { id: 79, subject: 'Geography', grade: 5,
    question: 'Which of these is a renewable natural resource?',
    options: ['Coal', 'Oil', 'Solar energy', 'Natural gas'],
    answer: 2 },

  // Grade 6
  { id: 80, subject: 'Geography', grade: 6,
    question: 'What is the difference between a physical map and a political map?',
    options: ['Physical maps show countries, political maps show landforms', 'Physical maps show landforms, political maps show borders and countries', 'They are the same thing', 'Physical maps show weather, political maps show population'],
    answer: 1 },

  { id: 81, subject: 'Geography', grade: 6,
    question: 'Most of the world\'s population lives in:',
    options: ['The Southern Hemisphere', 'The Northern Hemisphere', 'Near the South Pole', 'On islands'],
    answer: 1 },

  // Grade 7
  { id: 82, subject: 'Geography', grade: 7,
    question: 'The Sahara Desert is located on which continent?',
    options: ['Asia', 'South America', 'Africa', 'Australia'],
    answer: 2 },

  { id: 83, subject: 'Geography', grade: 7,
    question: 'Urbanization refers to:',
    options: ['People moving from cities to farms', 'The growth of cities as people move from rural to urban areas', 'Building more parks', 'Reducing pollution'],
    answer: 1 },

  // Grade 8
  { id: 84, subject: 'Geography', grade: 8,
    question: 'Which of these is an effect of globalization?',
    options: ['Countries becoming more isolated', 'Increased international trade and cultural exchange', 'Decreased use of technology', 'Fewer languages spoken worldwide'],
    answer: 1 },

  { id: 85, subject: 'Geography', grade: 8,
    question: 'The legacy of European imperialism in Africa includes:',
    options: ['Borders drawn without regard to ethnic groups', 'Complete economic independence', 'Unified languages across the continent', 'Equal distribution of resources'],
    answer: 0 },

  // Grade 9
  { id: 86, subject: 'Geography', grade: 9,
    question: 'The demographic transition model shows that as countries develop:',
    options: ['Birth and death rates both increase', 'Birth and death rates both decrease', 'Birth rates increase and death rates decrease', 'Population always decreases'],
    answer: 1 },

  { id: 87, subject: 'Geography', grade: 9,
    question: 'Cultural diffusion is best described as:',
    options: ['The extinction of a culture', 'The spread of cultural traits from one society to another', 'A culture remaining completely isolated', 'Government-mandated cultural changes'],
    answer: 1 },

  // Grade 10
  { id: 88, subject: 'Geography', grade: 10,
    question: 'The Brandt Line divides the world into:',
    options: ['East and West', 'Developed (Global North) and developing (Global South)', 'Democracies and dictatorships', 'Landlocked and coastal nations'],
    answer: 1 },

  { id: 89, subject: 'Geography', grade: 10,
    question: 'GIS (Geographic Information Systems) is primarily used to:',
    options: ['Predict earthquakes', 'Analyze and visualize spatial data', 'Control weather patterns', 'Translate languages'],
    answer: 1 },

  { id: 90, subject: 'Geography', grade: 10,
    question: 'Von Thünen\'s model describes:',
    options: ['Urban growth patterns', 'Agricultural land use around a central market', 'Population migration', 'Industrial development stages'],
    answer: 1 }
];

module.exports = { placementQuestions };
