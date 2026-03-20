// Biology Test Banks - 50 tests x 15 questions = 750 questions
// Grades 4-10, ~2 questions per grade level per test
// Topics: living things, plants, animals, habitats, cells, food chains,
// photosynthesis, body systems, genetics, DNA, evolution, ecology,
// macromolecules, protein synthesis, mitosis/meiosis, enzymes

const biologyTestBanks = [
  [
    { id: 1, subject: 'Biology', grade: 4, question: 'What do plants need to make their own food?', options: ['Rocks and sand', 'Sunlight, water, and carbon dioxide', 'Meat and bones', 'Only soil'], answer: 1 },
    { id: 2, subject: 'Biology', grade: 4, question: 'Which of the following is a living thing?', options: ['A rock', 'A tree', 'A chair', 'A glass of water'], answer: 1 },
    { id: 3, subject: 'Biology', grade: 5, question: 'What is the basic unit of life?', options: ['Atom', 'Molecule', 'Cell', 'Organ'], answer: 2 },
    { id: 4, subject: 'Biology', grade: 5, question: 'Which part of the plant absorbs water from the soil?', options: ['Leaves', 'Stem', 'Roots', 'Flower'], answer: 2 },
    { id: 5, subject: 'Biology', grade: 6, question: 'What is a food chain?', options: ['A chain made of food', 'The path of energy from one organism to another', 'A type of recipe', 'A grocery store aisle'], answer: 1 },
    { id: 6, subject: 'Biology', grade: 6, question: 'Which organ pumps blood through your body?', options: ['Lungs', 'Brain', 'Heart', 'Stomach'], answer: 2 },
    { id: 7, subject: 'Biology', grade: 7, question: 'What is photosynthesis?', options: ['Animals eating plants', 'Plants converting sunlight into food', 'Fish breathing underwater', 'Rocks breaking down over time'], answer: 1 },
    { id: 8, subject: 'Biology', grade: 7, question: 'What organelle is known as the powerhouse of the cell?', options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell wall'], answer: 2 },
    { id: 9, subject: 'Biology', grade: 8, question: 'What does DNA stand for?', options: ['Deoxyribonucleic acid', 'Dinitrogen acid', 'Dynamic nuclear atom', 'Dual nitrogen arrangement'], answer: 0 },
    { id: 10, subject: 'Biology', grade: 8, question: 'What type of cell division produces two identical daughter cells?', options: ['Meiosis', 'Mitosis', 'Binary fission', 'Budding'], answer: 1 },
    { id: 11, subject: 'Biology', grade: 9, question: 'Which macromolecule stores genetic information?', options: ['Carbohydrates', 'Lipids', 'Proteins', 'Nucleic acids'], answer: 3 },
    { id: 12, subject: 'Biology', grade: 9, question: 'What is natural selection?', options: ['Humans choosing which animals to breed', 'Survival and reproduction of organisms best adapted to their environment', 'Random changes in a population', 'Animals migrating to new areas'], answer: 1 },
    { id: 13, subject: 'Biology', grade: 10, question: 'During which phase of mitosis do chromosomes line up at the cell equator?', options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'], answer: 1 },
    { id: 14, subject: 'Biology', grade: 10, question: 'What is the role of enzymes in biological reactions?', options: ['They provide energy', 'They act as catalysts to speed up reactions', 'They store genetic information', 'They transport oxygen'], answer: 1 },
    { id: 15, subject: 'Biology', grade: 5, question: 'What gas do animals breathe out that plants use?', options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'], answer: 2 }
  ],
  [
    { id: 16, subject: 'Biology', grade: 4, question: 'Which animal group has feathers?', options: ['Mammals', 'Reptiles', 'Birds', 'Fish'], answer: 2 },
    { id: 17, subject: 'Biology', grade: 4, question: 'What do herbivores eat?', options: ['Meat', 'Plants', 'Both meat and plants', 'Rocks'], answer: 1 },
    { id: 18, subject: 'Biology', grade: 5, question: 'What is a habitat?', options: ['A type of animal', 'The natural home of an organism', 'A kind of plant', 'A weather pattern'], answer: 1 },
    { id: 19, subject: 'Biology', grade: 5, question: 'Which body system is responsible for breaking down food?', options: ['Respiratory system', 'Circulatory system', 'Digestive system', 'Nervous system'], answer: 2 },
    { id: 20, subject: 'Biology', grade: 6, question: 'What is the green pigment in plants called?', options: ['Melanin', 'Chlorophyll', 'Hemoglobin', 'Carotene'], answer: 1 },
    { id: 21, subject: 'Biology', grade: 6, question: 'Which type of animal is cold-blooded and has scales?', options: ['Mammal', 'Bird', 'Reptile', 'Amphibian'], answer: 2 },
    { id: 22, subject: 'Biology', grade: 7, question: 'What structure controls what enters and leaves a cell?', options: ['Nucleus', 'Cell membrane', 'Ribosome', 'Cytoplasm'], answer: 1 },
    { id: 23, subject: 'Biology', grade: 7, question: 'In a food chain, what is a primary consumer?', options: ['A plant', 'An herbivore that eats plants', 'A top predator', 'A decomposer'], answer: 1 },
    { id: 24, subject: 'Biology', grade: 8, question: 'What are genes made of?', options: ['Proteins', 'Lipids', 'DNA', 'Carbohydrates'], answer: 2 },
    { id: 25, subject: 'Biology', grade: 8, question: 'Which organ system removes waste from the blood?', options: ['Digestive system', 'Urinary system', 'Respiratory system', 'Endocrine system'], answer: 1 },
    { id: 26, subject: 'Biology', grade: 9, question: 'What is the function of ribosomes?', options: ['Energy production', 'Protein synthesis', 'Cell division', 'Waste removal'], answer: 1 },
    { id: 27, subject: 'Biology', grade: 9, question: 'Which type of macromolecule includes sugars and starches?', options: ['Proteins', 'Lipids', 'Carbohydrates', 'Nucleic acids'], answer: 2 },
    { id: 28, subject: 'Biology', grade: 10, question: 'What is the difference between mitosis and meiosis?', options: ['Mitosis produces 4 cells, meiosis produces 2', 'Mitosis is for growth, meiosis produces gametes', 'They are the same process', 'Meiosis only occurs in plants'], answer: 1 },
    { id: 29, subject: 'Biology', grade: 10, question: 'What is the substrate of an enzyme?', options: ['The product of the reaction', 'The molecule the enzyme acts upon', 'The enzyme itself', 'The cofactor'], answer: 1 },
    { id: 30, subject: 'Biology', grade: 4, question: 'What do fish use to breathe underwater?', options: ['Lungs', 'Gills', 'Skin', 'Fins'], answer: 1 }
  ],
