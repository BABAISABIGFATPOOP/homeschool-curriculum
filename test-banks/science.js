const scienceTestBanks = [
  // Test 1
  [
    { id: 1, subject: 'Science', grade: 4, question: 'An electromagnet requires what to work?', options: ['Sunlight', 'Electricity', 'Wind', 'Heat'], answer: 1 },
    { id: 2, subject: 'Science', grade: 4, question: 'Opposite poles of a magnet do what?', options: ['Repel', 'Have no effect', 'Attract', 'Cancel out'], answer: 2 },
    { id: 3, subject: 'Science', grade: 5, question: 'A playground slide is an example of which simple machine?', options: ['Lever', 'Inclined plane', 'Wedge', 'Pulley'], answer: 1 },
    { id: 4, subject: 'Science', grade: 5, question: 'Compound machines are made of two or more what?', options: ['Motors', 'Gears', 'Simple machines', 'Batteries'], answer: 2 },
    { id: 5, subject: 'Science', grade: 6, question: 'What type of rock forms from cooled magma or lava?', options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Mineral'], answer: 2 },
    { id: 6, subject: 'Science', grade: 6, question: 'Glaciers erode the landscape by doing what?', options: ['Heating it', 'Scraping and carving it', 'Dissolving it', 'Blowing it away'], answer: 1 },
    { id: 7, subject: 'Science', grade: 7, question: 'Adding a neutron to an atom does what to its mass?', options: ['Decreases it', 'No change', 'Increases it', 'Doubles it'], answer: 2 },
    { id: 8, subject: 'Science', grade: 7, question: 'Photosynthesis converts light energy into what?', options: ['Kinetic', 'Chemical', 'Electrical', 'Thermal'], answer: 1 },
    { id: 9, subject: 'Science', grade: 8, question: 'A shield volcano has gentle slopes built from what?', options: ['Ash', 'Fluid lava', 'Pyroclastic flow', 'Cinders'], answer: 1 },
    { id: 10, subject: 'Science', grade: 8, question: 'The underground origin point of an earthquake is the what?', options: ['Epicenter', 'Focus', 'Fault', 'Rift'], answer: 1 },
    { id: 11, subject: 'Science', grade: 9, question: 'An acid reacting with a base produces salt and what?', options: ['Gas', 'More acid', 'Water', 'Oil'], answer: 2 },
    { id: 12, subject: 'Science', grade: 9, question: 'Acid plus base produces what?', options: ['More acid', 'Salt and water', 'A gas only', 'A new base'], answer: 1 },
    { id: 13, subject: 'Science', grade: 10, question: 'The unit of wavelength is what?', options: ['Hertz', 'Meters', 'Seconds', 'Newtons'], answer: 1 },
    { id: 14, subject: 'Science', grade: 10, question: 'A covalent bond involves sharing of what?', options: ['Protons', 'Neutrons', 'Electrons', 'Photons'], answer: 2 },
    { id: 15, subject: 'Science', grade: 4, question: 'What invisible area around a magnet exerts force?', options: ['Electric field', 'Gravitational field', 'Magnetic field', 'Force field'], answer: 2 }
  ],
  // Test 2
  [
    { id: 16, subject: 'Science', grade: 4, question: 'Ice water and steam are all forms of what substance?', options: ['Oxygen', 'Hydrogen', 'Water', 'Carbon dioxide'], answer: 2 },
    { id: 17, subject: 'Science', grade: 4, question: 'What happens to water when it boils?', options: ['It becomes ice', 'It becomes steam', 'It disappears', 'It becomes plasma'], answer: 1 },
    { id: 18, subject: 'Science', grade: 5, question: 'What is the force that opposes motion between two surfaces?', options: ['Gravity', 'Friction', 'Magnetism', 'Inertia'], answer: 1 },
    { id: 19, subject: 'Science', grade: 5, question: 'Scissors combine which two simple machines?', options: ['Lever and wedge', 'Screw and pulley', 'Inclined plane and wheel', 'Pulley and lever'], answer: 0 },
    { id: 20, subject: 'Science', grade: 6, question: 'Which color of visible light has the longest wavelength?', options: ['Violet', 'Blue', 'Green', 'Red'], answer: 3 },
    { id: 21, subject: 'Science', grade: 6, question: 'Freeze-thaw in rock cracks is what type of weathering?', options: ['Chemical', 'Biological', 'Mechanical', 'Thermal'], answer: 2 },
    { id: 22, subject: 'Science', grade: 7, question: 'What is the chemical symbol for gold?', options: ['Go', 'Gd', 'Au', 'Ag'], answer: 2 },
    { id: 23, subject: 'Science', grade: 7, question: 'What is the chemical formula for table salt?', options: ['NaCl', 'KCl', 'NaOH', 'CaCl2'], answer: 0 },
    { id: 24, subject: 'Science', grade: 8, question: 'A swimmer pushes water back and water pushes swimmer forward. Which law?', options: ['First', 'Second', 'Third', 'Universal gravitation'], answer: 2 },
    { id: 25, subject: 'Science', grade: 8, question: 'Doubling mass at constant force does what to acceleration?', options: ['Doubles it', 'Halves it', 'No change', 'Quadruples it'], answer: 1 },
    { id: 26, subject: 'Science', grade: 9, question: 'Rows across the periodic table are called what?', options: ['Groups', 'Families', 'Periods', 'Blocks'], answer: 2 },
    { id: 27, subject: 'Science', grade: 9, question: 'Atomic number equals the number of what?', options: ['Neutrons', 'Protons', 'Electrons', 'Nucleons'], answer: 1 },
    { id: 28, subject: 'Science', grade: 10, question: 'What determines the color of visible light?', options: ['Amplitude', 'Speed', 'Wavelength', 'Direction'], answer: 2 },
    { id: 29, subject: 'Science', grade: 10, question: 'Displacement differs from distance because it includes what?', options: ['Speed', 'Time', 'Direction', 'Mass'], answer: 2 },
    { id: 30, subject: 'Science', grade: 5, question: 'An object in motion tends to stay in motion. This describes what?', options: ['Gravity', 'Friction', 'Inertia', 'Acceleration'], answer: 2 }
  ],
  // Test 3
  [
    { id: 31, subject: 'Science', grade: 4, question: 'What kind of energy does the Sun give off?', options: ['Only heat', 'Only light', 'Heat and light', 'Sound'], answer: 2 },
    { id: 32, subject: 'Science', grade: 4, question: 'What source of light is natural?', options: ['Light bulb', 'Flashlight', 'The Sun', 'Lamp'], answer: 2 },
    { id: 33, subject: 'Science', grade: 5, question: 'A magnet can exert force without what?', options: ['Energy', 'Touching the object', 'Being metal', 'Electricity'], answer: 1 },
    { id: 34, subject: 'Science', grade: 5, question: 'A seesaw is an example of which simple machine?', options: ['Pulley', 'Wheel and axle', 'Lever', 'Inclined plane'], answer: 2 },
    { id: 35, subject: 'Science', grade: 6, question: 'Plant roots in rock cracks cause what type of weathering?', options: ['Chemical', 'Biological', 'Thermal', 'Abrasion'], answer: 1 },
    { id: 36, subject: 'Science', grade: 6, question: 'What is the main agent of erosion on Earth?', options: ['Wind', 'Ice', 'Water', 'Gravity'], answer: 2 },
    { id: 37, subject: 'Science', grade: 7, question: 'What is the chemical symbol for potassium?', options: ['Po', 'Pt', 'Ka', 'K'], answer: 3 },
    { id: 38, subject: 'Science', grade: 7, question: 'What energy travels in waves without needing a medium?', options: ['Sound', 'Mechanical', 'Electromagnetic', 'Kinetic'], answer: 2 },
    { id: 39, subject: 'Science', grade: 8, question: 'In Newton\'s second law the SI unit for mass is what?', options: ['Newton', 'Kilogram', 'Meter', 'Pound'], answer: 1 },
    { id: 40, subject: 'Science', grade: 8, question: 'What layer of Earth is liquid iron and nickel?', options: ['Inner core', 'Outer core', 'Mantle', 'Crust'], answer: 1 },
    { id: 41, subject: 'Science', grade: 9, question: 'Acids taste what?', options: ['Bitter', 'Sweet', 'Sour', 'Salty'], answer: 2 },
    { id: 42, subject: 'Science', grade: 9, question: 'Minimum energy to start a reaction is called what?', options: ['Kinetic', 'Potential', 'Activation energy', 'Thermal'], answer: 2 },
    { id: 43, subject: 'Science', grade: 10, question: 'The electron configuration of carbon is what?', options: ['1s2 2s2 2p2', '1s2 2s4', '1s2 2p4', '2s2 2p4'], answer: 0 },
    { id: 44, subject: 'Science', grade: 10, question: 'An object in free fall accelerates at approximately what?', options: ['5 m/s squared', '9.8 m/s squared', '15 m/s squared', '20 m/s squared'], answer: 1 },
    { id: 45, subject: 'Science', grade: 6, question: 'What determines the pitch of a sound?', options: ['Amplitude', 'Frequency', 'Wavelength', 'Speed'], answer: 1 }
  ],
  // Test 4
  [
    { id: 46, subject: 'Science', grade: 4, question: 'At what temperature in Celsius does water freeze?', options: ['100', '0', '32', '-10'], answer: 1 },
    { id: 47, subject: 'Science', grade: 4, question: 'Sound is made by objects that do what?', options: ['Glow', 'Vibrate', 'Freeze', 'Melt'], answer: 1 },
    { id: 48, subject: 'Science', grade: 5, question: 'A ramp is an example of which simple machine?', options: ['Lever', 'Inclined plane', 'Wedge', 'Pulley'], answer: 1 },
    { id: 49, subject: 'Science', grade: 5, question: 'If you push a shopping cart you are applying what to it?', options: ['Energy', 'Force', 'Gravity', 'Momentum'], answer: 1 },
    { id: 50, subject: 'Science', grade: 6, question: 'What layer of the atmosphere do we live in?', options: ['Stratosphere', 'Mesosphere', 'Troposphere', 'Thermosphere'], answer: 2 },
    { id: 51, subject: 'Science', grade: 6, question: 'Metamorphic rock is formed by heat and what?', options: ['Water', 'Wind', 'Pressure', 'Erosion'], answer: 2 },
    { id: 52, subject: 'Science', grade: 7, question: 'A battery converts chemical energy into what?', options: ['Sound', 'Light only', 'Electrical', 'Nuclear'], answer: 2 },
    { id: 53, subject: 'Science', grade: 7, question: 'An element is made of only one type of what?', options: ['Molecule', 'Compound', 'Atom', 'Mixture'], answer: 2 },
    { id: 54, subject: 'Science', grade: 8, question: 'The asthenosphere is partially molten rock in what layer?', options: ['Crust', 'Upper mantle', 'Outer core', 'Inner core'], answer: 1 },
    { id: 55, subject: 'Science', grade: 8, question: 'Subduction occurs at which boundary type?', options: ['Divergent', 'Transform', 'Convergent', 'All types'], answer: 2 },
    { id: 56, subject: 'Science', grade: 9, question: 'Group 1 elements are called what?', options: ['Noble gases', 'Halogens', 'Alkali metals', 'Alkaline earth metals'], answer: 2 },
    { id: 57, subject: 'Science', grade: 9, question: 'Increasing reactant surface area does what to rate?', options: ['Decreases', 'No effect', 'Increases', 'Stops reaction'], answer: 2 },
    { id: 58, subject: 'Science', grade: 10, question: 'Power is work done per unit what?', options: ['Distance', 'Mass', 'Time', 'Force'], answer: 2 },
    { id: 59, subject: 'Science', grade: 10, question: 'The formula for gravitational potential energy is what?', options: ['PE = mv', 'PE = half mv squared', 'PE = mgh', 'PE = Fd'], answer: 2 },
    { id: 60, subject: 'Science', grade: 7, question: 'What energy type is associated with temperature?', options: ['Chemical', 'Nuclear', 'Electromagnetic', 'Thermal'], answer: 3 }
  ],
  // Test 5
  [
    { id: 61, subject: 'Science', grade: 4, question: 'What do we call the ends of a magnet?', options: ['Terminals', 'Poles', 'Tips', 'Edges'], answer: 1 },
    { id: 62, subject: 'Science', grade: 4, question: 'A material that lets all light pass through is called what?', options: ['Opaque', 'Translucent', 'Transparent', 'Reflective'], answer: 2 },
    { id: 63, subject: 'Science', grade: 5, question: 'A screw is a modified version of which simple machine?', options: ['Lever', 'Pulley', 'Inclined plane', 'Wedge'], answer: 2 },
    { id: 64, subject: 'Science', grade: 5, question: 'Which force keeps you on the ground?', options: ['Magnetism', 'Friction', 'Gravity', 'Air pressure'], answer: 2 },
    { id: 65, subject: 'Science', grade: 6, question: 'Sound travels fastest through which medium?', options: ['Air', 'Water', 'Steel', 'Vacuum'], answer: 2 },
    { id: 66, subject: 'Science', grade: 6, question: 'The continuous process of rock formation is called what?', options: ['Water cycle', 'Rock cycle', 'Carbon cycle', 'Erosion cycle'], answer: 1 },
    { id: 67, subject: 'Science', grade: 7, question: 'Solar panels convert sunlight into what energy?', options: ['Thermal', 'Chemical', 'Electrical', 'Nuclear'], answer: 2 },
    { id: 68, subject: 'Science', grade: 7, question: 'The mass number equals protons plus what?', options: ['Electrons', 'Neutrons', 'Photons', 'Quarks'], answer: 1 },
    { id: 69, subject: 'Science', grade: 8, question: 'The theory that continents were once joined is called what?', options: ['Plate tectonics', 'Continental drift', 'Seafloor spreading', 'Pangaea theory'], answer: 1 },
    { id: 70, subject: 'Science', grade: 8, question: 'The surface point directly above an earthquake origin is the what?', options: ['Focus', 'Epicenter', 'Fault line', 'Mantle'], answer: 1 },
    { id: 71, subject: 'Science', grade: 9, question: 'A cation has what charge?', options: ['Negative', 'Positive', 'Neutral', 'Variable only'], answer: 1 },
    { id: 72, subject: 'Science', grade: 9, question: 'Vinegar is a weak what?', options: ['Base', 'Salt', 'Acid', 'Indicator'], answer: 2 },
    { id: 73, subject: 'Science', grade: 10, question: 'The study of motion without considering forces is called what?', options: ['Dynamics', 'Kinematics', 'Statics', 'Thermodynamics'], answer: 1 },
    { id: 74, subject: 'Science', grade: 10, question: 'Thomson discovered what subatomic particle?', options: ['Proton', 'Neutron', 'Electron', 'Nucleus'], answer: 2 },
    { id: 75, subject: 'Science', grade: 8, question: 'What instrument measures earthquake magnitude?', options: ['Barometer', 'Thermometer', 'Seismograph', 'Anemometer'], answer: 2 }
  ],
  // Test 6
  [
    { id: 76, subject: 'Science', grade: 4, question: 'What happens when you break a magnet in half?', options: ['One half loses poles', 'Each half becomes a complete magnet', 'It loses magnetism', 'Only one half works'], answer: 1 },
    { id: 77, subject: 'Science', grade: 4, question: 'When you heat a solid what can happen to it?', options: ['It gets heavier', 'It can melt', 'It shrinks', 'Nothing happens'], answer: 1 },
    { id: 78, subject: 'Science', grade: 5, question: 'A zipper uses which type of simple machine?', options: ['Pulley', 'Wedge', 'Lever', 'Wheel and axle'], answer: 1 },
    { id: 79, subject: 'Science', grade: 5, question: 'What slows down a skydiver falling through air?', options: ['Gravity', 'Magnetism', 'Air resistance', 'Weight'], answer: 2 },
    { id: 80, subject: 'Science', grade: 6, question: 'A delta at a river mouth forms due to what?', options: ['Erosion', 'Weathering', 'Deposition', 'Subduction'], answer: 2 },
    { id: 81, subject: 'Science', grade: 6, question: 'Humus in soil comes from what?', options: ['Rocks', 'Decomposed organic matter', 'Water', 'Minerals only'], answer: 1 },
    { id: 82, subject: 'Science', grade: 7, question: 'What is the chemical symbol for sodium?', options: ['So', 'Sd', 'Na', 'S'], answer: 2 },
    { id: 83, subject: 'Science', grade: 7, question: 'Heat energy is also known as what?', options: ['Chemical', 'Thermal', 'Radiant', 'Kinetic'], answer: 1 },
    { id: 84, subject: 'Science', grade: 8, question: 'P-waves and S-waves are types of what?', options: ['Light waves', 'Sound waves', 'Seismic waves', 'Ocean waves'], answer: 2 },
    { id: 85, subject: 'Science', grade: 8, question: 'The law of action-reaction means forces come in what?', options: ['Singles', 'Pairs', 'Triples', 'Groups of four'], answer: 1 },
    { id: 86, subject: 'Science', grade: 9, question: 'The periodic table has how many confirmed elements?', options: ['108', '112', '118', '120'], answer: 2 },
    { id: 87, subject: 'Science', grade: 9, question: 'A neutral pH value is what?', options: ['0', '3', '7', '14'], answer: 2 },
    { id: 88, subject: 'Science', grade: 10, question: 'Snell\'s law describes the relationship between what during refraction?', options: ['Speed and frequency', 'Angles of incidence and refraction', 'Amplitude and wavelength', 'Color and speed'], answer: 1 },
    { id: 89, subject: 'Science', grade: 10, question: 'Who proposed the nuclear model of the atom?', options: ['Dalton', 'Thomson', 'Rutherford', 'Bohr'], answer: 2 },
    { id: 90, subject: 'Science', grade: 9, question: 'Phenolphthalein turns pink in what solution?', options: ['Acidic', 'Neutral', 'Basic', 'Salty'], answer: 2 }
  ],
  // Test 7
  [
    { id: 91, subject: 'Science', grade: 4, question: 'Which state of matter takes the shape of its container but has a definite volume?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], answer: 1 },
    { id: 92, subject: 'Science', grade: 4, question: 'In what state of matter are particles packed most tightly?', options: ['Liquid', 'Gas', 'Solid', 'Plasma'], answer: 2 },
    { id: 93, subject: 'Science', grade: 5, question: 'What is the change in speed over time called?', options: ['Velocity', 'Acceleration', 'Momentum', 'Inertia'], answer: 1 },
    { id: 94, subject: 'Science', grade: 5, question: 'What unit is used to measure force?', options: ['Joule', 'Watt', 'Newton', 'Pascal'], answer: 2 },
    { id: 95, subject: 'Science', grade: 6, question: 'What is the softest mineral on the Mohs scale?', options: ['Gypsum', 'Talc', 'Calcite', 'Quartz'], answer: 1 },
    { id: 96, subject: 'Science', grade: 6, question: 'U-shaped valleys are carved mainly by what?', options: ['Rivers', 'Wind', 'Glaciers', 'Rain'], answer: 2 },
    { id: 97, subject: 'Science', grade: 7, question: 'Gravitational potential energy depends on mass and what?', options: ['Speed', 'Height', 'Color', 'Temperature'], answer: 1 },
    { id: 98, subject: 'Science', grade: 7, question: 'A hydroelectric dam primarily produces what energy?', options: ['Chemical', 'Nuclear', 'Electrical', 'Thermal'], answer: 2 },
    { id: 99, subject: 'Science', grade: 8, question: 'Newton\'s first law is also called the law of what?', options: ['Acceleration', 'Action-reaction', 'Inertia', 'Momentum'], answer: 2 },
    { id: 100, subject: 'Science', grade: 8, question: 'What scale measures earthquake magnitude?', options: ['Fahrenheit', 'Beaufort', 'Richter', 'Kelvin'], answer: 2 },
    { id: 101, subject: 'Science', grade: 9, question: 'Metalloids have properties of both what?', options: ['Solids and liquids', 'Metals and nonmetals', 'Gases and solids', 'Acids and bases'], answer: 1 },
    { id: 102, subject: 'Science', grade: 9, question: 'NaOH is a common what?', options: ['Acid', 'Salt', 'Base', 'Indicator'], answer: 2 },
    { id: 103, subject: 'Science', grade: 10, question: 'The speed of light in a vacuum is approximately what?', options: ['300,000 m/s', '3,000,000 m/s', '300,000,000 m/s', '3,000,000,000 m/s'], answer: 2 },
    { id: 104, subject: 'Science', grade: 10, question: 'The SI unit for energy is what?', options: ['Newton', 'Watt', 'Joule', 'Pascal'], answer: 2 },
    { id: 105, subject: 'Science', grade: 10, question: 'Average speed equals distance divided by what?', options: ['Mass', 'Force', 'Time', 'Acceleration'], answer: 2 }
  ],
  // Test 8
  [
    { id: 106, subject: 'Science', grade: 4, question: 'Adding heat to matter causes particles to do what?', options: ['Slow down', 'Move faster', 'Stop', 'Shrink'], answer: 1 },
    { id: 107, subject: 'Science', grade: 4, question: 'What is the process of a solid changing to a liquid called?', options: ['Freezing', 'Melting', 'Evaporation', 'Condensation'], answer: 1 },
    { id: 108, subject: 'Science', grade: 5, question: 'What is the turning point of a wheel and axle?', options: ['Fulcrum', 'Axle', 'Spoke', 'Hub'], answer: 1 },
    { id: 109, subject: 'Science', grade: 5, question: 'Increasing the length of a ramp does what to effort needed?', options: ['Increases it', 'Decreases it', 'No change', 'Doubles it'], answer: 1 },
    { id: 110, subject: 'Science', grade: 6, question: 'Soil is made of weathered rock minerals and what?', options: ['Only sand', 'Organic matter', 'Only clay', 'Lava'], answer: 1 },
    { id: 111, subject: 'Science', grade: 6, question: 'What process breaks down rocks without moving them?', options: ['Erosion', 'Weathering', 'Deposition', 'Sedimentation'], answer: 1 },
    { id: 112, subject: 'Science', grade: 7, question: 'What subatomic particle has a positive charge?', options: ['Electron', 'Neutron', 'Proton', 'Photon'], answer: 2 },
    { id: 113, subject: 'Science', grade: 7, question: 'A molecule is two or more what bonded together?', options: ['Cells', 'Atoms', 'Elements', 'Neutrons'], answer: 1 },
    { id: 114, subject: 'Science', grade: 8, question: 'A rocket moves forward because exhaust pushes backward. Which law?', options: ['First', 'Second', 'Third', 'Gravity'], answer: 2 },
    { id: 115, subject: 'Science', grade: 8, question: 'Sedimentary rock forms by compaction and cementation of what?', options: ['Magma', 'Lava', 'Sediment', 'Minerals'], answer: 2 },
    { id: 116, subject: 'Science', grade: 9, question: 'AB plus CD gives AD plus CB. What type of reaction is this?', options: ['Synthesis', 'Decomposition', 'Single replacement', 'Double replacement'], answer: 3 },
    { id: 117, subject: 'Science', grade: 9, question: 'Bases feel what on the skin?', options: ['Rough', 'Slippery', 'Dry', 'Gritty'], answer: 1 },
    { id: 118, subject: 'Science', grade: 10, question: 'The Bohr model shows electrons in what?', options: ['Random paths', 'Defined orbits', 'The nucleus', 'Straight lines'], answer: 1 },
    { id: 119, subject: 'Science', grade: 10, question: 'Work is defined as force times what?', options: ['Mass', 'Time', 'Distance', 'Acceleration'], answer: 2 },
    { id: 120, subject: 'Science', grade: 4, question: 'Which material can be magnetized?', options: ['Plastic', 'Glass', 'Iron', 'Rubber'], answer: 2 }
  ],
  // Test 9
  [
    { id: 121, subject: 'Science', grade: 4, question: 'What tool is used to measure temperature?', options: ['Ruler', 'Thermometer', 'Scale', 'Barometer'], answer: 1 },
    { id: 122, subject: 'Science', grade: 4, question: 'What are the three common states of matter?', options: ['Solid, liquid, gas', 'Solid, liquid, plasma', 'Gas, plasma, liquid', 'Solid, gas, plasma'], answer: 0 },
    { id: 123, subject: 'Science', grade: 5, question: 'A ball rolling on grass slows down because of what?', options: ['Gravity', 'Magnetism', 'Air resistance', 'Friction'], answer: 3 },
    { id: 124, subject: 'Science', grade: 5, question: 'A push or a pull on an object is called a what?', options: ['Motion', 'Force', 'Speed', 'Mass'], answer: 1 },
    { id: 125, subject: 'Science', grade: 6, question: 'A concave lens causes light rays to do what?', options: ['Converge', 'Diverge', 'Stop', 'Absorb'], answer: 1 },
    { id: 126, subject: 'Science', grade: 6, question: 'What turns sedimentary rock into metamorphic rock?', options: ['Melting', 'Heat and pressure', 'Erosion', 'Cooling'], answer: 1 },
    { id: 127, subject: 'Science', grade: 7, question: 'What is the chemical formula for carbon dioxide?', options: ['CO', 'C2O', 'CO2', 'CO3'], answer: 2 },
    { id: 128, subject: 'Science', grade: 7, question: 'A geothermal power plant uses what energy source?', options: ['Wind', 'Sunlight', 'Earth\\\'s internal heat', 'Ocean tides'], answer: 2 },
    { id: 129, subject: 'Science', grade: 8, question: 'Momentum equals mass times what?', options: ['Acceleration', 'Distance', 'Velocity', 'Force'], answer: 2 },
    { id: 130, subject: 'Science', grade: 8, question: 'Which seismic waves travel fastest?', options: ['S-waves', 'P-waves', 'Surface waves', 'Love waves'], answer: 1 },
    { id: 131, subject: 'Science', grade: 9, question: 'Group 17 elements are called what?', options: ['Alkali metals', 'Noble gases', 'Transition metals', 'Halogens'], answer: 3 },
    { id: 132, subject: 'Science', grade: 9, question: 'Transition metals are in which section of the table?', options: ['Far left', 'Far right', 'Middle', 'Bottom rows'], answer: 2 },
    { id: 133, subject: 'Science', grade: 10, question: 'A polar covalent bond has what kind of electron sharing?', options: ['Equal', 'Unequal', 'No sharing', 'Random'], answer: 1 },
    { id: 134, subject: 'Science', grade: 10, question: 'The value of gas constant R is approximately what?', options: ['8.314 J per mol K', '1.38 x 10^-23 J/K', '6.02 x 10^23', '9.8 m/s squared'], answer: 0 },
    { id: 135, subject: 'Science', grade: 5, question: 'A crowbar is an example of which simple machine?', options: ['Wedge', 'Pulley', 'Lever', 'Screw'], answer: 2 }
  ],
  // Test 10
  [
    { id: 136, subject: 'Science', grade: 4, question: 'What device uses a magnet to show direction?', options: ['Telescope', 'Compass', 'Thermometer', 'Clock'], answer: 1 },
    { id: 137, subject: 'Science', grade: 4, question: 'What material is NOT attracted to a magnet?', options: ['Iron', 'Steel', 'Wood', 'Nickel'], answer: 2 },
    { id: 138, subject: 'Science', grade: 5, question: 'Mass is measured using what unit?', options: ['Meters', 'Liters', 'Kilograms', 'Newtons'], answer: 2 },
    { id: 139, subject: 'Science', grade: 5, question: 'A force that pulls objects together based on mass is what?', options: ['Friction', 'Gravity', 'Magnetism', 'Tension'], answer: 1 },
    { id: 140, subject: 'Science', grade: 6, question: 'Sound cannot travel through what?', options: ['Water', 'Air', 'A vacuum', 'Metal'], answer: 2 },
    { id: 141, subject: 'Science', grade: 6, question: 'Conglomerate is cemented rounded fragments. What type is it?', options: ['Igneous', 'Metamorphic', 'Sedimentary', 'Volcanic'], answer: 2 },
    { id: 142, subject: 'Science', grade: 7, question: 'What subatomic particle has a negative charge?', options: ['Proton', 'Neutron', 'Electron', 'Positron'], answer: 2 },
    { id: 143, subject: 'Science', grade: 7, question: 'What type of energy does a moving car have?', options: ['Potential', 'Kinetic', 'Chemical', 'Thermal'], answer: 1 },
    { id: 144, subject: 'Science', grade: 8, question: 'What property resists changes in motion?', options: ['Weight', 'Inertia', 'Momentum', 'Density'], answer: 1 },
    { id: 145, subject: 'Science', grade: 8, question: 'What was the ancient supercontinent called?', options: ['Gondwana', 'Laurasia', 'Pangaea', 'Rodinia'], answer: 2 },
    { id: 146, subject: 'Science', grade: 9, question: 'Conservation of mass states mass is neither created nor what?', options: ['Transferred', 'Moved', 'Destroyed', 'Changed'], answer: 2 },
    { id: 147, subject: 'Science', grade: 9, question: 'The periodic table was organized by Dmitri who?', options: ['Newton', 'Mendeleev', 'Bohr', 'Dalton'], answer: 1 },
    { id: 148, subject: 'Science', grade: 10, question: 'Wavelength and frequency are related how?', options: ['Directly proportional', 'Inversely proportional', 'No relationship', 'Exponentially'], answer: 1 },
    { id: 149, subject: 'Science', grade: 10, question: 'Electronegativity measures ability to attract what?', options: ['Protons', 'Neutrons', 'Bonding electrons', 'Photons'], answer: 2 },
    { id: 150, subject: 'Science', grade: 6, question: 'Obsidian forms when lava cools quickly. What type is it?', options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Fossil'], answer: 1 }
  ],
  // Test 11
  [
    { id: 151, subject: 'Science', grade: 4, question: 'Which of these is a source of sound?', options: ['A still rock', 'A vibrating guitar string', 'A glass of water', 'A pencil on a desk'], answer: 1 },
    { id: 152, subject: 'Science', grade: 4, question: 'What is the fourth state of matter found in stars?', options: ['Crystal', 'Superfluid', 'Plasma', 'Dark matter'], answer: 2 },
    { id: 153, subject: 'Science', grade: 5, question: 'A nail is an example of which simple machine?', options: ['Lever', 'Pulley', 'Wedge', 'Screw'], answer: 2 },
    { id: 154, subject: 'Science', grade: 5, question: 'Gravity on the Moon is about what fraction of Earth\'s?', options: ['1/2', '1/4', '1/6', '1/8'], answer: 2 },
    { id: 155, subject: 'Science', grade: 6, question: 'What is the bouncing of light off a surface called?', options: ['Refraction', 'Reflection', 'Absorption', 'Transmission'], answer: 1 },
    { id: 156, subject: 'Science', grade: 6, question: 'Light travels in what kind of lines?', options: ['Curved', 'Zigzag', 'Straight', 'Spiral'], answer: 2 },
    { id: 157, subject: 'Science', grade: 7, question: 'What energy form is produced by vibrating objects?', options: ['Light', 'Heat', 'Sound', 'Chemical'], answer: 2 },
    { id: 158, subject: 'Science', grade: 7, question: 'What is the center of an atom called?', options: ['Electron cloud', 'Shell', 'Nucleus', 'Orbital'], answer: 2 },
    { id: 159, subject: 'Science', grade: 8, question: 'Earth\'s magnetic field is generated mainly by what?', options: ['The crust', 'The mantle', 'The outer core', 'The atmosphere'], answer: 2 },
    { id: 160, subject: 'Science', grade: 8, question: 'More mass means what about inertia?', options: ['Less inertia', 'More inertia', 'No relation', 'Only speed matters'], answer: 1 },
    { id: 161, subject: 'Science', grade: 9, question: 'The formula for hydrochloric acid is what?', options: ['H2SO4', 'HCl', 'HNO3', 'H3PO4'], answer: 1 },
    { id: 162, subject: 'Science', grade: 9, question: 'The lightest element is what?', options: ['Helium', 'Lithium', 'Hydrogen', 'Carbon'], answer: 2 },
    { id: 163, subject: 'Science', grade: 10, question: 'The second electron shell holds a maximum of how many electrons?', options: ['2', '6', '8', '18'], answer: 2 },
    { id: 164, subject: 'Science', grade: 10, question: 'On a velocity-time graph the slope represents what?', options: ['Distance', 'Speed', 'Acceleration', 'Displacement'], answer: 2 },
    { id: 165, subject: 'Science', grade: 7, question: 'Where are electrons found in an atom?', options: ['In the nucleus', 'Orbiting the nucleus', 'Attached to protons', 'Between atoms'], answer: 1 }
  ],
  // Test 12
  [
    { id: 166, subject: 'Science', grade: 4, question: 'Which type of magnet is strongest?', options: ['Rubber magnet', 'Ceramic magnet', 'Neodymium magnet', 'Plastic magnet'], answer: 2 },
    { id: 167, subject: 'Science', grade: 4, question: 'Which travels faster light or sound?', options: ['Sound', 'Light', 'Same speed', 'Depends on weather'], answer: 1 },
    { id: 168, subject: 'Science', grade: 5, question: 'What type of energy does a battery store?', options: ['Kinetic', 'Chemical', 'Light', 'Sound'], answer: 1 },
    { id: 169, subject: 'Science', grade: 5, question: 'What is net force?', options: ['The largest force', 'The smallest force', 'The combination of all forces', 'The first force applied'], answer: 2 },
    { id: 170, subject: 'Science', grade: 6, question: 'Limestone is what type of rock?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'], answer: 1 },
    { id: 171, subject: 'Science', grade: 6, question: 'What is the bending of light between mediums called?', options: ['Reflection', 'Refraction', 'Diffraction', 'Absorption'], answer: 1 },
    { id: 172, subject: 'Science', grade: 7, question: 'What is the chemical symbol for silver?', options: ['Si', 'Sr', 'Ag', 'Sv'], answer: 2 },
    { id: 173, subject: 'Science', grade: 7, question: 'Nuclear energy comes from changes in what part of atoms?', options: ['Electrons', 'Electron shells', 'Nucleus', 'Chemical bonds'], answer: 2 },
    { id: 174, subject: 'Science', grade: 8, question: 'What forms at an oceanic divergent boundary?', options: ['Trench', 'Mid-ocean ridge', 'Island arc', 'Plateau'], answer: 1 },
    { id: 175, subject: 'Science', grade: 8, question: 'Alfred Wegener proposed which theory?', options: ['Plate tectonics', 'Continental drift', 'Seafloor spreading', 'Mantle convection'], answer: 1 },
    { id: 176, subject: 'Science', grade: 9, question: 'Sulfuric acid has the formula what?', options: ['HCl', 'H2SO4', 'HNO3', 'H3PO4'], answer: 1 },
    { id: 177, subject: 'Science', grade: 9, question: 'Increasing temperature does what to reaction rate?', options: ['Decreases it', 'Increases it', 'No effect', 'Stops it'], answer: 1 },
    { id: 178, subject: 'Science', grade: 10, question: 'A mechanical wave requires what to travel?', options: ['Vacuum', 'A medium', 'Electricity', 'Magnetism'], answer: 1 },
    { id: 179, subject: 'Science', grade: 10, question: 'The unit of electric current is what?', options: ['Volt', 'Ohm', 'Ampere', 'Watt'], answer: 2 },
    { id: 180, subject: 'Science', grade: 8, question: 'Newton\'s second law: force equals mass times what?', options: ['Velocity', 'Speed', 'Acceleration', 'Distance'], answer: 2 }
  ],
  // Test 13
  [
    { id: 181, subject: 'Science', grade: 4, question: 'Shadows form when light is what?', options: ['Reflected', 'Refracted', 'Blocked', 'Absorbed'], answer: 2 },
    { id: 182, subject: 'Science', grade: 4, question: 'A compass needle is a small what?', options: ['Gyroscope', 'Magnet', 'Battery', 'Lens'], answer: 1 },
    { id: 183, subject: 'Science', grade: 5, question: 'What is the fixed point of a lever called?', options: ['Load', 'Effort', 'Fulcrum', 'Pivot arm'], answer: 2 },
    { id: 184, subject: 'Science', grade: 5, question: 'What is the energy of motion called?', options: ['Potential energy', 'Chemical energy', 'Kinetic energy', 'Thermal energy'], answer: 2 },
    { id: 185, subject: 'Science', grade: 6, question: 'The wearing away of soil by water or wind is called what?', options: ['Weathering', 'Deposition', 'Erosion', 'Compaction'], answer: 2 },
    { id: 186, subject: 'Science', grade: 6, question: 'Stalactites in caves form through which processes?', options: ['Erosion only', 'Chemical weathering and deposition', 'Mechanical weathering', 'Volcanic activity'], answer: 1 },
    { id: 187, subject: 'Science', grade: 7, question: 'A wind turbine converts kinetic energy to what?', options: ['Chemical', 'Thermal', 'Electrical', 'Sound'], answer: 2 },
    { id: 188, subject: 'Science', grade: 7, question: 'Thermal energy always flows from what to what?', options: ['Cold to hot', 'Hot to cold', 'Left to right', 'Right to left'], answer: 1 },
    { id: 189, subject: 'Science', grade: 8, question: 'When two tectonic plates collide what can form?', options: ['Valleys', 'Mountains', 'Rivers', 'Deserts'], answer: 1 },
    { id: 190, subject: 'Science', grade: 8, question: 'Earthquakes are caused by sudden release of what in the crust?', options: ['Heat', 'Energy', 'Lava', 'Water'], answer: 1 },
    { id: 191, subject: 'Science', grade: 9, question: 'A reaction that absorbs energy is called what?', options: ['Exothermic', 'Endothermic', 'Combustion', 'Neutralization'], answer: 1 },
    { id: 192, subject: 'Science', grade: 9, question: 'In combustion a substance reacts with what?', options: ['Water', 'Nitrogen', 'Oxygen', 'Carbon'], answer: 2 },
    { id: 193, subject: 'Science', grade: 10, question: 'Acceleration due to gravity near Earth is about what?', options: ['8.9 m/s squared', '9.8 m/s squared', '10.8 m/s squared', '11.2 m/s squared'], answer: 1 },
    { id: 194, subject: 'Science', grade: 10, question: 'Which electromagnetic wave has the highest frequency?', options: ['Radio waves', 'Microwaves', 'X-rays', 'Gamma rays'], answer: 3 },
    { id: 195, subject: 'Science', grade: 9, question: 'Group 2 elements are called what?', options: ['Alkali metals', 'Alkaline earth metals', 'Halogens', 'Noble gases'], answer: 1 }
  ],
  // Test 14
  [
    { id: 196, subject: 'Science', grade: 4, question: 'Which of these is a natural magnet?', options: ['Steel bar', 'Lodestone', 'Copper wire', 'Aluminum foil'], answer: 1 },
    { id: 197, subject: 'Science', grade: 4, question: 'Magnets are strongest at which part?', options: ['Middle', 'Poles', 'Edges', 'Center'], answer: 1 },
    { id: 198, subject: 'Science', grade: 5, question: 'What happens to your body when a car suddenly stops?', options: ['You move backward', 'You move forward', 'You move sideways', 'Nothing happens'], answer: 1 },
    { id: 199, subject: 'Science', grade: 5, question: 'A spiral staircase is an example of which simple machine?', options: ['Lever', 'Inclined plane', 'Screw', 'Wedge'], answer: 2 },
    { id: 200, subject: 'Science', grade: 6, question: 'What type of wave is a sound wave?', options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Surface'], answer: 1 },
    { id: 201, subject: 'Science', grade: 6, question: 'What determines the loudness of a sound?', options: ['Frequency', 'Wavelength', 'Speed', 'Amplitude'], answer: 3 },
    { id: 202, subject: 'Science', grade: 7, question: 'What is the symbol for oxygen?', options: ['Ox', 'O', 'Om', 'On'], answer: 1 },
    { id: 203, subject: 'Science', grade: 7, question: 'How many protons does hydrogen have?', options: ['0', '1', '2', '3'], answer: 1 },
    { id: 204, subject: 'Science', grade: 8, question: 'Fossils are most commonly found in what rock type?', options: ['Igneous', 'Metamorphic', 'Sedimentary', 'Volcanic'], answer: 2 },
    { id: 205, subject: 'Science', grade: 8, question: 'An object with zero net force has what motion?', options: ['Accelerating', 'Decelerating', 'Constant velocity', 'Random'], answer: 2 },
    { id: 206, subject: 'Science', grade: 9, question: 'Which element has atomic number 6?', options: ['Nitrogen', 'Carbon', 'Oxygen', 'Boron'], answer: 1 },
    { id: 207, subject: 'Science', grade: 9, question: 'In single replacement one element replaces another in a what?', options: ['Mixture', 'Element', 'Compound', 'Solution'], answer: 2 },
    { id: 208, subject: 'Science', grade: 10, question: 'In metallic bonds electrons are said to be what?', options: ['Transferred', 'Shared equally', 'Delocalized', 'Destroyed'], answer: 2 },
    { id: 209, subject: 'Science', grade: 10, question: 'Two waves combining to make a larger wave is what type of interference?', options: ['Destructive', 'Constructive', 'Diffraction', 'Resonance'], answer: 1 },
    { id: 210, subject: 'Science', grade: 10, question: 'Valence electrons are in what shell?', options: ['The nucleus', 'Innermost shell', 'Outermost shell', 'Between shells'], answer: 2 }
  ],
  // Test 15
  [
    { id: 211, subject: 'Science', grade: 4, question: 'Which color of the rainbow comes first from the top?', options: ['Blue', 'Green', 'Red', 'Violet'], answer: 2 },
    { id: 212, subject: 'Science', grade: 4, question: 'What happens to the volume of water when it freezes?', options: ['Decreases', 'Stays the same', 'Expands', 'Disappears'], answer: 2 },
    { id: 213, subject: 'Science', grade: 5, question: 'A bottle cap is an example of which simple machine?', options: ['Lever', 'Wedge', 'Screw', 'Pulley'], answer: 2 },
    { id: 214, subject: 'Science', grade: 5, question: 'A hammer pulling out a nail acts as which simple machine?', options: ['Wedge', 'Lever', 'Pulley', 'Screw'], answer: 1 },
    { id: 215, subject: 'Science', grade: 6, question: 'An echo is caused by sound waves doing what?', options: ['Refracting', 'Reflecting', 'Diffracting', 'Absorbing'], answer: 1 },
    { id: 216, subject: 'Science', grade: 6, question: 'A convex lens causes light rays to do what?', options: ['Diverge', 'Converge', 'Stop', 'Reflect'], answer: 1 },
    { id: 217, subject: 'Science', grade: 7, question: 'What is the chemical symbol for carbon?', options: ['Ca', 'Co', 'C', 'Cr'], answer: 2 },
    { id: 218, subject: 'Science', grade: 7, question: 'What energy is in a stretched rubber band?', options: ['Kinetic', 'Chemical', 'Elastic potential', 'Thermal'], answer: 2 },
    { id: 219, subject: 'Science', grade: 8, question: 'The Mid-Atlantic Ridge is what type of boundary?', options: ['Convergent', 'Transform', 'Divergent', 'Subduction'], answer: 2 },
    { id: 220, subject: 'Science', grade: 8, question: 'What evidence supports continental drift?', options: ['Same weather', 'Matching fossils across continents', 'Identical currents', 'Same languages'], answer: 1 },
    { id: 221, subject: 'Science', grade: 9, question: 'Balancing a chemical equation conserves what?', options: ['Energy', 'Mass', 'Volume', 'Temperature'], answer: 1 },
    { id: 222, subject: 'Science', grade: 9, question: 'In a chemical reaction substances formed are called what?', options: ['Reactants', 'Catalysts', 'Products', 'Enzymes'], answer: 2 },
    { id: 223, subject: 'Science', grade: 10, question: 'A nonpolar covalent bond has what electronegativity difference?', options: ['Large', 'Zero or very small', 'Medium', 'Infinite'], answer: 1 },
    { id: 224, subject: 'Science', grade: 10, question: 'Waves spreading through a small opening is called what?', options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'], answer: 2 },
    { id: 225, subject: 'Science', grade: 4, question: 'What do we call a material that blocks all light?', options: ['Transparent', 'Translucent', 'Opaque', 'Clear'], answer: 2 }
  ],
  // Test 16
  [
    { id: 226, subject: 'Science', grade: 4, question: 'A rainbow is caused by light being separated by what?', options: ['Wind', 'Sound', 'Water droplets', 'Clouds'], answer: 2 },
    { id: 227, subject: 'Science', grade: 4, question: 'Particles in a gas move how compared to particles in a solid?', options: ['Slower', 'At the same speed', 'Faster', 'They do not move'], answer: 2 },
    { id: 228, subject: 'Science', grade: 5, question: 'How many types of simple machines are there?', options: ['4', '5', '6', '8'], answer: 2 },
    { id: 229, subject: 'Science', grade: 5, question: 'An unbalanced force causes an object to do what?', options: ['Stay still', 'Change its motion', 'Lose mass', 'Gain energy'], answer: 1 },
    { id: 230, subject: 'Science', grade: 6, question: 'Granite is what type of rock?', options: ['Sedimentary', 'Metamorphic', 'Igneous', 'Organic'], answer: 2 },
    { id: 231, subject: 'Science', grade: 6, question: 'V-shaped valleys are carved mainly by what?', options: ['Wind', 'Rivers', 'Glaciers', 'Earthquakes'], answer: 1 },
    { id: 232, subject: 'Science', grade: 7, question: 'Burning wood converts chemical energy mainly into what?', options: ['Light and sound', 'Heat and light', 'Kinetic and sound', 'Electrical and heat'], answer: 1 },
    { id: 233, subject: 'Science', grade: 7, question: 'What is the most abundant gas in Earth\'s atmosphere?', options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'], answer: 2 },
    { id: 234, subject: 'Science', grade: 8, question: 'A composite volcano is tall with steep sides and what eruptions?', options: ['Gentle', 'Explosive', 'No eruptions', 'Constant'], answer: 1 },
    { id: 235, subject: 'Science', grade: 8, question: 'What plate boundary occurs when plates move apart?', options: ['Convergent', 'Divergent', 'Transform', 'Subduction'], answer: 1 },
    { id: 236, subject: 'Science', grade: 9, question: 'A reaction that releases heat is called what?', options: ['Endothermic', 'Exothermic', 'Synthesis', 'Decomposition'], answer: 1 },
    { id: 237, subject: 'Science', grade: 9, question: 'Baking soda NaHCO3 is a weak what?', options: ['Acid', 'Base', 'Salt', 'Indicator'], answer: 1 },
    { id: 238, subject: 'Science', grade: 10, question: 'Absolute zero in Celsius is what?', options: ['-100', '0', '-273', '-373'], answer: 2 },
    { id: 239, subject: 'Science', grade: 10, question: 'Decreasing gas volume at constant T does what to pressure?', options: ['Decreases', 'No change', 'Increases', 'Becomes zero'], answer: 2 },
    { id: 240, subject: 'Science', grade: 5, question: 'Which has more friction rolling or sliding?', options: ['Rolling', 'Sliding', 'They are equal', 'Neither has friction'], answer: 1 }
  ],
  // Test 17
  [
    { id: 241, subject: 'Science', grade: 4, question: 'Fog is an example of water in what form?', options: ['Solid', 'Gas', 'Liquid droplets suspended in air', 'Plasma'], answer: 2 },
    { id: 242, subject: 'Science', grade: 4, question: 'Thunder is the sound caused by what?', options: ['Wind', 'Rain', 'Lightning', 'Clouds colliding'], answer: 2 },
    { id: 243, subject: 'Science', grade: 5, question: 'A bicycle uses which simple machines?', options: ['Lever wheel and axle and pulley', 'Only wheels', 'Only levers', 'Only gears'], answer: 0 },
    { id: 244, subject: 'Science', grade: 5, question: 'What keeps the Moon in orbit around Earth?', options: ['Friction', 'Magnetism', 'Gravity', 'Inertia alone'], answer: 2 },
    { id: 245, subject: 'Science', grade: 6, question: 'Which visible light color has the shortest wavelength?', options: ['Red', 'Yellow', 'Green', 'Violet'], answer: 3 },
    { id: 246, subject: 'Science', grade: 6, question: 'What type of rock is sandstone?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'], answer: 1 },
    { id: 247, subject: 'Science', grade: 7, question: 'What particle is shared or transferred in chemical bonding?', options: ['Proton', 'Neutron', 'Electron', 'Nucleus'], answer: 2 },
    { id: 248, subject: 'Science', grade: 7, question: 'Conservation of energy says energy cannot be created or what?', options: ['Transferred', 'Transformed', 'Destroyed', 'Measured'], answer: 2 },
    { id: 249, subject: 'Science', grade: 8, question: 'Volcanic islands like Hawaii form over what?', options: ['Transform boundaries', 'Convergent boundaries', 'Hotspots', 'Divergent boundaries'], answer: 2 },
    { id: 250, subject: 'Science', grade: 8, question: 'What is the outer layer of the Earth called?', options: ['Mantle', 'Core', 'Crust', 'Asthenosphere'], answer: 2 },
    { id: 251, subject: 'Science', grade: 9, question: 'An anion has what charge?', options: ['Positive', 'Negative', 'Neutral', 'Variable only'], answer: 1 },
    { id: 252, subject: 'Science', grade: 9, question: 'A synthesis reaction combines substances into what?', options: ['Many products', 'One product', 'Only gases', 'Only liquids'], answer: 1 },
    { id: 253, subject: 'Science', grade: 10, question: 'The period of a wave is the inverse of what?', options: ['Amplitude', 'Wavelength', 'Frequency', 'Speed'], answer: 2 },
    { id: 254, subject: 'Science', grade: 10, question: 'Ohm\'s law: voltage equals current times what?', options: ['Power', 'Resistance', 'Energy', 'Capacitance'], answer: 1 },
    { id: 255, subject: 'Science', grade: 6, question: 'Sediment dropped in a new location is called what?', options: ['Erosion', 'Weathering', 'Deposition', 'Compaction'], answer: 2 }
  ],
  // Test 18
  [
    { id: 256, subject: 'Science', grade: 4, question: 'Which state of matter has a definite shape and volume?', options: ['Liquid', 'Gas', 'Solid', 'Plasma'], answer: 2 },
    { id: 257, subject: 'Science', grade: 4, question: 'What color is formed when all colors of light combine?', options: ['Black', 'White', 'Red', 'Blue'], answer: 1 },
    { id: 258, subject: 'Science', grade: 5, question: 'Which simple machine is a doorknob an example of?', options: ['Lever', 'Wheel and axle', 'Pulley', 'Screw'], answer: 1 },
    { id: 259, subject: 'Science', grade: 5, question: 'An axe blade is an example of which simple machine?', options: ['Lever', 'Wedge', 'Inclined plane', 'Screw'], answer: 1 },
    { id: 260, subject: 'Science', grade: 6, question: 'A prism separates white light into what?', options: ['Two colors', 'A spectrum of colors', 'Ultraviolet light', 'Infrared light'], answer: 1 },
    { id: 261, subject: 'Science', grade: 6, question: 'Acid rain causes what type of weathering?', options: ['Mechanical', 'Physical', 'Chemical', 'Biological'], answer: 2 },
    { id: 262, subject: 'Science', grade: 7, question: 'An atom with more protons than electrons has what charge?', options: ['Negative', 'Positive', 'Neutral', 'No charge'], answer: 1 },
    { id: 263, subject: 'Science', grade: 7, question: 'What is the chemical formula for water?', options: ['H2O', 'HO2', 'H2O2', 'OH'], answer: 0 },
    { id: 264, subject: 'Science', grade: 8, question: 'What is the innermost layer of the Earth?', options: ['Mantle', 'Outer core', 'Inner core', 'Crust'], answer: 2 },
    { id: 265, subject: 'Science', grade: 8, question: 'When a ball bounces off a wall which law explains it?', options: ['First', 'Second', 'Third', 'None'], answer: 2 },
    { id: 266, subject: 'Science', grade: 9, question: 'What gas is produced when acid reacts with a metal?', options: ['Oxygen', 'Carbon dioxide', 'Hydrogen', 'Nitrogen'], answer: 2 },
    { id: 267, subject: 'Science', grade: 9, question: 'Litmus paper turns red in what type of solution?', options: ['Basic', 'Neutral', 'Acidic', 'Salty'], answer: 2 },
    { id: 268, subject: 'Science', grade: 10, question: 'An ionic bond forms by transfer of what?', options: ['Protons', 'Neutrons', 'Electrons', 'Photons'], answer: 2 },
    { id: 269, subject: 'Science', grade: 10, question: 'The first electron shell holds a maximum of how many electrons?', options: ['1', '2', '8', '18'], answer: 1 },
    { id: 270, subject: 'Science', grade: 7, question: 'A compound is two or more what chemically combined?', options: ['Atoms of the same element', 'Mixtures', 'Elements', 'Neutrons'], answer: 2 }
  ],
  // Test 19
  [
    { id: 271, subject: 'Science', grade: 4, question: 'Steam rising from boiling water is an example of what?', options: ['Melting', 'Freezing', 'Evaporation', 'Sublimation'], answer: 2 },
    { id: 272, subject: 'Science', grade: 4, question: 'What is the process called when a solid turns directly into a gas?', options: ['Evaporation', 'Condensation', 'Sublimation', 'Melting'], answer: 2 },
    { id: 273, subject: 'Science', grade: 5, question: 'What force pulls objects toward the center of the Earth?', options: ['Magnetism', 'Friction', 'Gravity', 'Tension'], answer: 2 },
    { id: 274, subject: 'Science', grade: 5, question: 'What happens to friction on a smoother surface?', options: ['Increases', 'Decreases', 'Stays the same', 'Doubles'], answer: 1 },
    { id: 275, subject: 'Science', grade: 6, question: 'The Doppler effect describes a change in what as a source moves?', options: ['Color', 'Brightness', 'Frequency', 'Volume only'], answer: 2 },
    { id: 276, subject: 'Science', grade: 6, question: 'Which rock type can contain fossils?', options: ['Igneous', 'Metamorphic', 'Sedimentary', 'Volcanic'], answer: 2 },
    { id: 277, subject: 'Science', grade: 7, question: 'Energy stored due to position or height is called what?', options: ['Kinetic', 'Thermal', 'Potential', 'Elastic'], answer: 2 },
    { id: 278, subject: 'Science', grade: 7, question: 'What is the chemical formula for methane?', options: ['CH4', 'C2H6', 'CH3', 'CO2'], answer: 0 },
    { id: 279, subject: 'Science', grade: 8, question: 'A normal or reverse fault involves what movement?', options: ['Horizontal sliding', 'Vertical movement of rock blocks', 'Rotation', 'No movement'], answer: 1 },
    { id: 280, subject: 'Science', grade: 8, question: 'The Himalayas formed from collision of which plates?', options: ['Pacific and North American', 'Indian and Eurasian', 'African and South American', 'Antarctic and Australian'], answer: 1 },
    { id: 281, subject: 'Science', grade: 9, question: 'Noble gases are in which group?', options: ['Group 1', 'Group 7', 'Group 17', 'Group 18'], answer: 3 },
    { id: 282, subject: 'Science', grade: 9, question: 'Rust forming is what type of reaction?', options: ['Synthesis', 'Decomposition', 'Oxidation', 'Neutralization'], answer: 2 },
    { id: 283, subject: 'Science', grade: 10, question: 'Lewis dot structures show what type of electrons?', options: ['Core electrons', 'All electrons', 'Valence electrons', 'Nuclear particles'], answer: 2 },
    { id: 284, subject: 'Science', grade: 10, question: 'In the electron cloud model electrons exist in regions of what?', options: ['Certainty', 'Fixed orbits', 'Probability', 'Straight paths'], answer: 2 },
    { id: 285, subject: 'Science', grade: 8, question: 'Convection currents in the mantle are driven by what?', options: ['Solar energy', 'Earth\\\'s internal heat', 'Ocean tides', 'Wind'], answer: 1 }
  ],
  // Test 20
  [
    { id: 286, subject: 'Science', grade: 4, question: 'Matter is anything that has mass and takes up what?', options: ['Time', 'Energy', 'Space', 'Light'], answer: 2 },
    { id: 287, subject: 'Science', grade: 4, question: 'What is it called when a gas changes into a liquid?', options: ['Evaporation', 'Condensation', 'Melting', 'Sublimation'], answer: 1 },
    { id: 288, subject: 'Science', grade: 5, question: 'Which surface would produce the most friction?', options: ['Ice', 'Glass', 'Sandpaper', 'Wet tile'], answer: 2 },
    { id: 289, subject: 'Science', grade: 5, question: 'What is the name for a force that acts at a distance?', options: ['Contact force', 'Non-contact force', 'Push force', 'Pull force'], answer: 1 },
    { id: 290, subject: 'Science', grade: 6, question: 'What causes a mirage on a hot road?', options: ['Dust', 'Water on the road', 'Refraction of light', 'Reflection from clouds'], answer: 2 },
    { id: 291, subject: 'Science', grade: 6, question: 'Marble is metamorphic rock formed from what?', options: ['Granite', 'Sandstone', 'Limestone', 'Basalt'], answer: 2 },
    { id: 292, subject: 'Science', grade: 7, question: 'What subatomic particle has no charge?', options: ['Proton', 'Electron', 'Neutron', 'Ion'], answer: 2 },
    { id: 293, subject: 'Science', grade: 7, question: 'What is the chemical symbol for helium?', options: ['H', 'Hl', 'He', 'Hi'], answer: 2 },
    { id: 294, subject: 'Science', grade: 8, question: 'What causes tectonic plates to move?', options: ['Gravity', 'Wind', 'Convection currents in the mantle', 'Ocean tides'], answer: 2 },
    { id: 295, subject: 'Science', grade: 8, question: 'If force increases at constant mass what happens to acceleration?', options: ['Decreases', 'Stays the same', 'Increases', 'Becomes zero'], answer: 2 },
    { id: 296, subject: 'Science', grade: 9, question: 'A solution with pH 3 is what?', options: ['Neutral', 'Basic', 'Acidic', 'Alkaline'], answer: 2 },
    { id: 297, subject: 'Science', grade: 9, question: 'A catalyst speeds up a reaction without being what?', options: ['Heated', 'Consumed', 'Mixed', 'Measured'], answer: 1 },
    { id: 298, subject: 'Science', grade: 10, question: 'The formula for kinetic energy is what?', options: ['KE = mv', 'KE = half mv squared', 'KE = mgh', 'KE = Fd'], answer: 1 },
    { id: 299, subject: 'Science', grade: 10, question: 'Two waves canceling each other out is what type of interference?', options: ['Constructive', 'Destructive', 'Diffraction', 'Resonance'], answer: 1 },
    { id: 300, subject: 'Science', grade: 9, question: 'A solution with pH 11 is what?', options: ['Acidic', 'Neutral', 'Basic', 'Strongly acidic'], answer: 2 }
  ],
  // Test 21
  [
    { id: 301, subject: 'Science', grade: 4, question: 'What is the process of a liquid changing to a gas called?', options: ['Freezing', 'Melting', 'Condensation', 'Evaporation'], answer: 3 },
    { id: 302, subject: 'Science', grade: 4, question: 'Which type of magnet is made from iron or steel?', options: ['Natural magnet', 'Temporary magnet', 'Artificial magnet', 'Electromagnetic'], answer: 2 },
    { id: 303, subject: 'Science', grade: 5, question: 'A gear is a type of which simple machine?', options: ['Lever', 'Wheel and axle', 'Pulley', 'Wedge'], answer: 1 },
    { id: 304, subject: 'Science', grade: 5, question: 'What is speed measured in?', options: ['Kilograms', 'Meters per second', 'Newtons', 'Joules'], answer: 1 },
    { id: 305, subject: 'Science', grade: 6, question: 'Sand dunes are formed by which agent of erosion?', options: ['Water', 'Ice', 'Wind', 'Gravity'], answer: 2 },
    { id: 306, subject: 'Science', grade: 6, question: 'Sonar uses what type of waves to map the ocean floor?', options: ['Light', 'Sound', 'Radio', 'Infrared'], answer: 1 },
    { id: 307, subject: 'Science', grade: 7, question: 'Atoms of the same element with different neutron counts are what?', options: ['Ions', 'Isotopes', 'Isomers', 'Allotropes'], answer: 1 },
    { id: 308, subject: 'Science', grade: 7, question: 'All organic compounds contain what element?', options: ['Oxygen', 'Nitrogen', 'Carbon', 'Hydrogen'], answer: 2 },
    { id: 309, subject: 'Science', grade: 8, question: 'The San Andreas Fault is what type of boundary?', options: ['Convergent', 'Divergent', 'Transform', 'Hotspot'], answer: 2 },
    { id: 310, subject: 'Science', grade: 8, question: 'Newton\'s third law states every action has what?', options: ['An equal force', 'An opposite direction', 'An equal and opposite reaction', 'No effect'], answer: 2 },
    { id: 311, subject: 'Science', grade: 9, question: 'What is the pH of pure water?', options: ['0', '5', '7', '14'], answer: 2 },
    { id: 312, subject: 'Science', grade: 9, question: 'Elements are arranged by increasing what?', options: ['Atomic mass', 'Atomic number', 'Electron count', 'Neutron count'], answer: 1 },
    { id: 313, subject: 'Science', grade: 10, question: 'Gay-Lussac\'s law relates pressure to what at constant volume?', options: ['Mass', 'Amount of gas', 'Temperature', 'Density'], answer: 2 },
    { id: 314, subject: 'Science', grade: 10, question: 'On a distance-time graph a straight diagonal line means what?', options: ['Acceleration', 'Constant speed', 'Deceleration', 'No movement'], answer: 1 },
    { id: 315, subject: 'Science', grade: 10, question: 'An object decelerating has what kind of acceleration?', options: ['Zero', 'Positive', 'Negative', 'Infinite'], answer: 2 }
  ],
  // Test 22
  [
    { id: 316, subject: 'Science', grade: 4, question: 'Which pole of a magnet points toward geographic north?', options: ['South pole', 'North pole', 'East pole', 'West pole'], answer: 1 },
    { id: 317, subject: 'Science', grade: 4, question: 'Do like poles of a magnet attract or repel each other?', options: ['Attract', 'Repel', 'Neither', 'It depends on the magnet'], answer: 1 },
    { id: 318, subject: 'Science', grade: 5, question: 'Weight is a measure of the force of what on an object?', options: ['Friction', 'Magnetism', 'Gravity', 'Inertia'], answer: 2 },
    { id: 319, subject: 'Science', grade: 5, question: 'A flagpole uses which simple machine to raise a flag?', options: ['Lever', 'Wheel and axle', 'Pulley', 'Inclined plane'], answer: 2 },
    { id: 320, subject: 'Science', grade: 6, question: 'Ultrasonic sounds are above what frequency?', options: ['2000 Hz', '10000 Hz', '20000 Hz', '50000 Hz'], answer: 2 },
    { id: 321, subject: 'Science', grade: 6, question: 'Rust forming on iron exposed to weather is what?', options: ['Mechanical weathering', 'Chemical weathering', 'Erosion', 'Physical weathering'], answer: 1 },
    { id: 322, subject: 'Science', grade: 7, question: 'What type of energy is stored in food?', options: ['Kinetic', 'Thermal', 'Chemical', 'Nuclear'], answer: 2 },
    { id: 323, subject: 'Science', grade: 7, question: 'A substance that cannot be broken down chemically is a what?', options: ['Compound', 'Mixture', 'Element', 'Solution'], answer: 2 },
    { id: 324, subject: 'Science', grade: 8, question: 'Newton\'s first law: an object at rest stays at rest unless acted on by what?', options: ['Gravity only', 'An unbalanced force', 'Friction', 'Momentum'], answer: 1 },
    { id: 325, subject: 'Science', grade: 8, question: 'The Ring of Fire surrounds which ocean?', options: ['Atlantic', 'Indian', 'Pacific', 'Arctic'], answer: 2 },
    { id: 326, subject: 'Science', grade: 9, question: 'Starting materials in a reaction are called what?', options: ['Products', 'Reactants', 'Catalysts', 'Solvents'], answer: 1 },
    { id: 327, subject: 'Science', grade: 9, question: 'Elements in the same column are called what?', options: ['Periods', 'Groups', 'Isotopes', 'Ions'], answer: 1 },
    { id: 328, subject: 'Science', grade: 10, question: 'The ideal gas law is written as what?', options: ['PV = nRT', 'PV = mRT', 'PT = nRV', 'P = nRTV'], answer: 0 },
    { id: 329, subject: 'Science', grade: 10, question: 'Wave frequency is measured in what unit?', options: ['Meters', 'Hertz', 'Decibels', 'Newtons'], answer: 1 },
    { id: 330, subject: 'Science', grade: 4, question: 'When water freezes it changes from a liquid to a what?', options: ['Gas', 'Solid', 'Plasma', 'Vapor'], answer: 1 }
  ],
  // Test 23
  [
    { id: 331, subject: 'Science', grade: 4, question: 'Which state of matter has no definite shape or volume?', options: ['Solid', 'Liquid', 'Gas', 'Crystal'], answer: 2 },
    { id: 332, subject: 'Science', grade: 4, question: 'Dew forming on grass in the morning is an example of what?', options: ['Evaporation', 'Condensation', 'Freezing', 'Melting'], answer: 1 },
    { id: 333, subject: 'Science', grade: 5, question: 'Position speed and direction describe an object\'s what?', options: ['Force', 'Energy', 'Motion', 'Mass'], answer: 2 },
    { id: 334, subject: 'Science', grade: 5, question: 'A wheelbarrow combines which two simple machines?', options: ['Lever and wheel and axle', 'Pulley and wedge', 'Screw and inclined plane', 'Lever and pulley'], answer: 0 },
    { id: 335, subject: 'Science', grade: 6, question: 'Slate is what type of rock?', options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Organic'], answer: 2 },
    { id: 336, subject: 'Science', grade: 6, question: 'What is the hardest mineral on the Mohs scale?', options: ['Quartz', 'Topaz', 'Corundum', 'Diamond'], answer: 3 },
    { id: 337, subject: 'Science', grade: 7, question: 'What is the smallest particle of an element retaining its properties?', options: ['Molecule', 'Atom', 'Cell', 'Electron'], answer: 1 },
    { id: 338, subject: 'Science', grade: 7, question: 'Rubbing hands together converts kinetic energy to what?', options: ['Chemical', 'Thermal', 'Sound', 'Light'], answer: 1 },
    { id: 339, subject: 'Science', grade: 8, question: 'S-waves cannot travel through what?', options: ['Solids', 'Liquids', 'Both solids and liquids', 'Gases only'], answer: 1 },
    { id: 340, subject: 'Science', grade: 8, question: 'A deep ocean trench forms at what boundary type?', options: ['Divergent', 'Transform', 'Convergent with subduction', 'Hotspot'], answer: 2 },
    { id: 341, subject: 'Science', grade: 9, question: 'Decomposition breaks a compound into what?', options: ['One substance', 'Simpler substances', 'More complex substances', 'Only elements'], answer: 1 },
    { id: 342, subject: 'Science', grade: 9, question: 'Most elements on the periodic table are what?', options: ['Nonmetals', 'Metals', 'Metalloids', 'Noble gases'], answer: 1 },
    { id: 343, subject: 'Science', grade: 10, question: 'Dalton proposed that all matter is made of what?', options: ['Waves', 'Energy', 'Indivisible atoms', 'Molecules'], answer: 2 },
    { id: 344, subject: 'Science', grade: 10, question: 'Charles\'s law relates volume to what at constant pressure?', options: ['Mass', 'Temperature', 'Amount of gas', 'Density'], answer: 1 },
    { id: 345, subject: 'Science', grade: 5, question: 'Balanced forces result in what kind of motion?', options: ['Acceleration', 'Deceleration', 'No change in motion', 'Spinning'], answer: 2 }
  ],
  // Test 24
  [
    { id: 346, subject: 'Science', grade: 6, question: 'The Grand Canyon was primarily formed by what?', options: ['Volcanoes', 'Earthquakes', 'Erosion', 'Glaciation'], answer: 2 },
    { id: 347, subject: 'Science', grade: 7, question: 'What is the chemical symbol for iron?', options: ['Ir', 'I', 'Fe', 'In'], answer: 2 },
    { id: 348, subject: 'Science', grade: 8, question: 'The rigid outer part of Earth is called the what?', options: ['Asthenosphere', 'Lithosphere', 'Hydrosphere', 'Mesosphere'], answer: 1 },
    { id: 349, subject: 'Science', grade: 9, question: 'An indicator changes what property in acids or bases?', options: ['Temperature', 'Color', 'Mass', 'Volume'], answer: 1 },
    { id: 350, subject: 'Science', grade: 10, question: 'Avogadro\'s number is approximately what?', options: ['6.02 x 10^20', '6.02 x 10^23', '6.02 x 10^26', '3.01 x 10^23'], answer: 1 },
    { id: 351, subject: 'Science', grade: 10, question: 'Boyle\'s law says pressure and volume are what at constant T?', options: ['Directly proportional', 'Inversely proportional', 'Equal', 'Unrelated'], answer: 1 },
    { id: 352, subject: 'Science', grade: 10, question: 'Hydrogen bonding is a strong type of what force?', options: ['Covalent bond', 'Ionic bond', 'Intermolecular force', 'Nuclear force'], answer: 2 }
  ],
  // Test 25
  [
    { id: 353, subject: 'Science', grade: 10, question: 'Velocity is speed plus what information?', options: ['Mass', 'Direction', 'Acceleration', 'Force'], answer: 1 },
    { id: 354, subject: 'Science', grade: 10, question: 'A bond between a metal and nonmetal is typically what?', options: ['Covalent', 'Metallic', 'Ionic', 'Van der Waals'], answer: 2 },
    { id: 355, subject: 'Science', grade: 10, question: 'Gas law calculations require what temperature scale?', options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'], answer: 2 }
  ],
  // Test 26
  [
    { id: 356, subject: 'Science', grade: 10, question: 'A standing wave forms from interference of waves traveling how?', options: ['Same direction', 'Opposite directions', 'Random directions', 'Perpendicular'], answer: 1 },
    { id: 357, subject: 'Science', grade: 10, question: 'Standard temperature in Kelvin is what?', options: ['0 K', '100 K', '273 K', '373 K'], answer: 2 },
    { id: 358, subject: 'Science', grade: 10, question: 'Wave amplitude is the maximum displacement from what?', options: ['The crest', 'Rest position', 'The trough', 'Another wave'], answer: 1 }
  ],
  // Test 27
  [
    { id: 359, subject: 'Science', grade: 10, question: 'Which electromagnetic wave has the longest wavelength?', options: ['Gamma rays', 'X-rays', 'Visible light', 'Radio waves'], answer: 3 },
    { id: 360, subject: 'Science', grade: 10, question: 'R in the ideal gas law represents what?', options: ['Rate constant', 'Universal gas constant', 'Resistance', 'Radius'], answer: 1 },
    { id: 361, subject: 'Science', grade: 10, question: 'In a transverse wave particles move perpendicular to wave what?', options: ['Amplitude', 'Frequency', 'Propagation', 'Wavelength'], answer: 2 }
  ],
  // Test 28
  [
    { id: 362, subject: 'Science', grade: 10, question: 'The gold foil experiment led to discovering what?', options: ['Electrons', 'Neutrons', 'The nucleus', 'Protons'], answer: 2 },
    { id: 363, subject: 'Science', grade: 10, question: 'Isotopes of an element differ in number of what?', options: ['Protons', 'Electrons', 'Neutrons', 'Valence electrons'], answer: 2 },
    { id: 364, subject: 'Science', grade: 10, question: 'What is the unit of resistance?', options: ['Ampere', 'Volt', 'Ohm', 'Watt'], answer: 2 }
  ],
  // Test 29
  [
    { id: 365, subject: 'Science', grade: 10, question: 'Bond type depends on the difference in what?', options: ['Atomic size', 'Electronegativity', 'Neutron count', 'Mass'], answer: 1 },
    { id: 366, subject: 'Science', grade: 10, question: 'VSEPR theory predicts what about molecules?', options: ['Color', 'Shape', 'Mass', 'Temperature'], answer: 1 },
    { id: 367, subject: 'Science', grade: 10, question: 'Projectile motion combines horizontal motion with what?', options: ['Horizontal acceleration', 'Vertical free fall', 'Circular motion', 'Random motion'], answer: 1 }
  ],
  // Test 30
  [
    { id: 368, subject: 'Science', grade: 10, question: 'The distance between two consecutive crests is the what?', options: ['Amplitude', 'Frequency', 'Wavelength', 'Period'], answer: 2 },
    { id: 369, subject: 'Science', grade: 10, question: 'Wave speed equals frequency times what?', options: ['Amplitude', 'Period', 'Wavelength', 'Energy'], answer: 2 },
    { id: 370, subject: 'Science', grade: 10, question: 'At absolute zero particle motion theoretically does what?', options: ['Increases', 'Stays same', 'Stops', 'Reverses'], answer: 2 }
  ],
  // Test 31
  [
  ],
  // Test 32
  [
  ],
  // Test 33
  [
  ],
  // Test 34
  [
  ],
  // Test 35
  [
  ],
  // Test 36
  [
  ],
  // Test 37
  [
  ],
  // Test 38
  [
  ],
  // Test 39
  [
  ],
  // Test 40
  [
  ],
  // Test 41
  [
  ],
  // Test 42
  [
  ],
  // Test 43
  [
  ],
  // Test 44
  [
  ],
  // Test 45
  [
  ],
  // Test 46
  [
  ],
  // Test 47
  [
  ],
  // Test 48
  [
  ],
  // Test 49
  [
  ],
  // Test 50
  [
  ],
  // Test 51
  [
    { id: 371, subject: 'Science', grade: 4, question: 'What are the three states of matter?', options: ['Hot, cold, warm', 'Solid, liquid, gas', 'Light, dark, medium', 'Fast, slow, still'], answer: 1 },
    { id: 372, subject: 'Science', grade: 4, question: 'What does a thermometer measure?', options: ['Weight', 'Temperature', 'Length', 'Speed'], answer: 1 },
    { id: 373, subject: 'Science', grade: 5, question: 'What is gravity?', options: ['A type of magnet', 'A force that pulls objects toward each other, keeping us on the ground', 'A type of energy', 'A weather pattern'], answer: 1 },
    { id: 374, subject: 'Science', grade: 5, question: 'What is a lever?', options: ['A type of screw', 'A simple machine that is a rigid bar resting on a pivot point', 'A wheel', 'A ramp'], answer: 1 },
    { id: 375, subject: 'Science', grade: 6, question: 'What are the three types of rocks?', options: ['Big, medium, small', 'Igneous, sedimentary, metamorphic', 'Hard, soft, crumbly', 'Red, gray, white'], answer: 1 },
    { id: 376, subject: 'Science', grade: 6, question: 'What is the rock cycle?', options: ['Rocks rolling downhill', 'The continuous process by which rocks are created, changed, and recycled', 'A type of erosion', 'A mineral formation'], answer: 1 },
    { id: 377, subject: 'Science', grade: 7, question: 'What is the periodic table?', options: ['A timetable', 'A chart organizing all known chemical elements by atomic number and properties', 'A calendar', 'A math table'], answer: 1 },
    { id: 378, subject: 'Science', grade: 7, question: 'What are the parts of an atom?', options: ['Cells and molecules', 'Protons, neutrons, and electrons', 'Rocks and minerals', 'Acids and bases'], answer: 1 },
    { id: 379, subject: 'Science', grade: 8, question: 'What is plate tectonics?', options: ['A type of building', 'The theory that Earth\'s outer shell is divided into plates that move on the mantle', 'A cooking method', 'A type of rock'], answer: 1 },
    { id: 380, subject: 'Science', grade: 8, question: 'What causes seasons on Earth?', options: ['The distance from the Sun', 'The tilt of Earth\'s axis as it orbits the Sun', 'The Moon\'s gravity', 'The speed of Earth\'s rotation'], answer: 1 },
    { id: 381, subject: 'Science', grade: 9, question: 'What is a chemical bond?', options: ['A type of glue', 'An attraction between atoms that allows the formation of chemical substances', 'A physical connection', 'A magnetic force'], answer: 1 },
    { id: 382, subject: 'Science', grade: 9, question: 'What is the difference between an ionic and covalent bond?', options: ['They are the same', 'Ionic bonds transfer electrons; covalent bonds share electrons', 'Covalent bonds transfer electrons', 'Ionic bonds share electrons'], answer: 1 },
    { id: 383, subject: 'Science', grade: 10, question: 'What is Newton\'s first law of motion?', options: ['F = ma', 'An object at rest stays at rest and an object in motion stays in motion unless acted upon by an external force', 'For every action there is an equal and opposite reaction', 'Energy cannot be created or destroyed'], answer: 1 },
    { id: 384, subject: 'Science', grade: 10, question: 'What is the speed of light in a vacuum?', options: ['300 km/s', '300,000 km/s', '3,000 km/s', '30,000 km/s'], answer: 1 },
    { id: 385, subject: 'Science', grade: 5, question: 'What is a pulley?', options: ['A type of lever', 'A simple machine using a wheel and rope to lift loads', 'A type of screw', 'A ramp'], answer: 1 }
  ],
  // Test 52
  [
    { id: 386, subject: 'Science', grade: 4, question: 'What is evaporation?', options: ['Water freezing', 'Water changing from liquid to gas', 'Water falling as rain', 'Water becoming ice'], answer: 1 },
    { id: 387, subject: 'Science', grade: 4, question: 'What is condensation?', options: ['Water turning to ice', 'Water vapor turning into liquid water', 'Water boiling', 'Water flowing downhill'], answer: 1 },
    { id: 388, subject: 'Science', grade: 5, question: 'What is an electric circuit?', options: ['A racetrack', 'A closed path through which electricity flows', 'A type of battery', 'A light bulb'], answer: 1 },
    { id: 389, subject: 'Science', grade: 5, question: 'What is a conductor?', options: ['A train driver', 'A material that allows electricity to flow through it easily', 'An insulator', 'A battery'], answer: 1 },
    { id: 390, subject: 'Science', grade: 6, question: 'What is a mineral?', options: ['A type of rock', 'A naturally occurring, inorganic solid with a definite chemical composition and crystal structure', 'A fossil', 'A type of soil'], answer: 1 },
    { id: 391, subject: 'Science', grade: 6, question: 'What is the Mohs hardness scale?', options: ['A weight scale', 'A scale ranking minerals by their resistance to scratching, from 1 (softest) to 10 (hardest)', 'A temperature scale', 'A length measurement'], answer: 1 },
    { id: 392, subject: 'Science', grade: 7, question: 'What is an element?', options: ['A compound', 'A pure substance made of only one type of atom', 'A mixture', 'A solution'], answer: 1 },
    { id: 393, subject: 'Science', grade: 7, question: 'What is a compound?', options: ['An element', 'A substance made of two or more different elements chemically bonded together', 'A mixture', 'A pure metal'], answer: 1 },
    { id: 394, subject: 'Science', grade: 8, question: 'What is the difference between weather and climate?', options: ['They are the same', 'Weather is short-term atmospheric conditions; climate is the average weather over a long period', 'Climate is daily weather', 'Weather lasts for years'], answer: 1 },
    { id: 395, subject: 'Science', grade: 8, question: 'What are the layers of the Earth?', options: ['Top and bottom', 'Crust, mantle, outer core, inner core', 'Soil, rock, water', 'Surface and center'], answer: 1 },
    { id: 396, subject: 'Science', grade: 9, question: 'What is a mole in chemistry?', options: ['An animal', '6.022 x 10^23 particles of a substance, a unit of measurement', 'A type of acid', 'A chemical bond'], answer: 1 },
    { id: 397, subject: 'Science', grade: 9, question: 'What is an exothermic reaction?', options: ['A reaction that absorbs heat', 'A reaction that releases heat to its surroundings', 'A slow reaction', 'A reaction with no energy change'], answer: 1 },
    { id: 398, subject: 'Science', grade: 10, question: 'What is Newton\'s second law of motion?', options: ['Objects at rest stay at rest', 'Force equals mass times acceleration (F = ma)', 'Every action has an equal reaction', 'Energy is conserved'], answer: 1 },
    { id: 399, subject: 'Science', grade: 10, question: 'What is electromagnetic radiation?', options: ['A type of sound', 'Energy that travels through space as waves, including visible light, radio waves, and X-rays', 'A chemical reaction', 'A nuclear reaction'], answer: 1 },
    { id: 400, subject: 'Science', grade: 4, question: 'What is precipitation?', options: ['Evaporation', 'Water falling from clouds as rain, snow, sleet, or hail', 'Condensation', 'Melting'], answer: 1 }
  ],
  // Test 53
  [
    { id: 401, subject: 'Science', grade: 4, question: 'What is the Sun?', options: ['A planet', 'A star at the center of our solar system', 'A moon', 'A comet'], answer: 1 },
    { id: 402, subject: 'Science', grade: 4, question: 'How many planets are in our solar system?', options: ['7', '8', '9', '10'], answer: 1 },
    { id: 403, subject: 'Science', grade: 5, question: 'What is an insulator?', options: ['A conductor', 'A material that does not easily allow electricity or heat to pass through it', 'A battery', 'A wire'], answer: 1 },
    { id: 404, subject: 'Science', grade: 5, question: 'What is a wedge?', options: ['A type of lever', 'A simple machine shaped like a triangle, used to split or lift objects', 'A pulley', 'A wheel'], answer: 1 },
    { id: 405, subject: 'Science', grade: 6, question: 'What is soil made of?', options: ['Only rocks', 'A mixture of minerals, organic matter, water, and air', 'Only sand', 'Only clay'], answer: 1 },
    { id: 406, subject: 'Science', grade: 6, question: 'What is a fossil?', options: ['A living organism', 'The preserved remains or traces of ancient life found in rock', 'A type of mineral', 'A crystal'], answer: 1 },
    { id: 407, subject: 'Science', grade: 7, question: 'What is a mixture?', options: ['A compound', 'A combination of two or more substances that are not chemically bonded', 'A pure element', 'An atom'], answer: 1 },
    { id: 408, subject: 'Science', grade: 7, question: 'What is the difference between physical and chemical changes?', options: ['They are the same', 'Physical changes alter form but not composition; chemical changes create new substances', 'Chemical changes are reversible', 'Physical changes create new substances'], answer: 1 },
    { id: 409, subject: 'Science', grade: 8, question: 'What is a seismograph?', options: ['A type of telescope', 'An instrument that detects and records earthquake waves', 'A weather instrument', 'A compass'], answer: 1 },
    { id: 410, subject: 'Science', grade: 8, question: 'What is the water table?', options: ['A piece of furniture', 'The upper surface of underground water-saturated soil or rock', 'A rain gauge', 'A type of well'], answer: 1 },
    { id: 411, subject: 'Science', grade: 9, question: 'What is an endothermic reaction?', options: ['A reaction that releases heat', 'A reaction that absorbs heat from its surroundings', 'A reaction with no energy change', 'A fast reaction'], answer: 1 },
    { id: 412, subject: 'Science', grade: 9, question: 'What is pH?', options: ['A type of element', 'A scale measuring how acidic or basic a solution is, from 0 to 14', 'A unit of force', 'A type of chemical bond'], answer: 1 },
    { id: 413, subject: 'Science', grade: 10, question: 'What is Newton\'s third law of motion?', options: ['F = ma', 'An object at rest stays at rest', 'For every action, there is an equal and opposite reaction', 'Energy is conserved'], answer: 2 },
    { id: 414, subject: 'Science', grade: 10, question: 'What is kinetic energy?', options: ['Stored energy', 'Energy of motion', 'Heat energy', 'Chemical energy'], answer: 1 },
    { id: 415, subject: 'Science', grade: 5, question: 'What is a screw?', options: ['A type of lever', 'A simple machine that is an inclined plane wrapped around a cylinder', 'A pulley', 'A wedge'], answer: 1 }
  ],
  // Test 54
  [
    { id: 416, subject: 'Science', grade: 4, question: 'What planet is closest to the Sun?', options: ['Venus', 'Mercury', 'Earth', 'Mars'], answer: 1 },
    { id: 417, subject: 'Science', grade: 4, question: 'What causes day and night?', options: ['The Moon moving', 'Earth rotating on its axis', 'The Sun moving around Earth', 'Clouds blocking the Sun'], answer: 1 },
    { id: 418, subject: 'Science', grade: 5, question: 'What is potential energy?', options: ['Energy of motion', 'Stored energy due to position or condition', 'Heat energy', 'Sound energy'], answer: 1 },
    { id: 419, subject: 'Science', grade: 5, question: 'What is a wheel and axle?', options: ['A lever', 'A simple machine made of a wheel attached to a smaller cylinder (axle)', 'A pulley', 'An inclined plane'], answer: 1 },
    { id: 420, subject: 'Science', grade: 6, question: 'What is the difference between renewable and non-renewable resources?', options: ['They are the same', 'Renewable resources can be replenished naturally; non-renewable cannot', 'Non-renewable can be replenished', 'All resources are renewable'], answer: 1 },
    { id: 421, subject: 'Science', grade: 6, question: 'What is solar energy?', options: ['Energy from wind', 'Energy from the Sun', 'Energy from water', 'Energy from coal'], answer: 1 },
    { id: 422, subject: 'Science', grade: 7, question: 'What is a solution in chemistry?', options: ['An answer to a problem', 'A homogeneous mixture where one substance is dissolved in another', 'A pure element', 'A type of rock'], answer: 1 },
    { id: 423, subject: 'Science', grade: 7, question: 'What is density?', options: ['Weight', 'Mass per unit volume of a substance', 'Size', 'Temperature'], answer: 1 },
    { id: 424, subject: 'Science', grade: 8, question: 'What is the hydrological cycle?', options: ['A bicycle', 'The continuous circulation of water through evaporation, condensation, precipitation, and collection', 'A chemical reaction', 'A rock formation process'], answer: 1 },
    { id: 425, subject: 'Science', grade: 8, question: 'What are tectonic plate boundaries?', options: ['Country borders', 'The edges where tectonic plates meet, causing earthquakes and volcanoes', 'River banks', 'Mountain tops'], answer: 1 },
    { id: 426, subject: 'Science', grade: 9, question: 'What is Avogadro\'s number?', options: ['3.14', '6.022 x 10^23', '9.8', '1.6 x 10^-19'], answer: 1 },
    { id: 427, subject: 'Science', grade: 9, question: 'What is a catalyst?', options: ['A product of a reaction', 'A substance that speeds up a chemical reaction without being consumed', 'A reactant', 'An inhibitor'], answer: 1 },
    { id: 428, subject: 'Science', grade: 10, question: 'What is potential energy?', options: ['Energy of motion', 'Energy stored in an object due to its position, condition, or composition', 'Thermal energy', 'Sound energy'], answer: 1 },
    { id: 429, subject: 'Science', grade: 10, question: 'What is Ohm\'s law?', options: ['F = ma', 'V = IR (voltage equals current times resistance)', 'E = mc^2', 'PV = nRT'], answer: 1 },
    { id: 430, subject: 'Science', grade: 4, question: 'Which planet is known as the Red Planet?', options: ['Jupiter', 'Saturn', 'Mars', 'Venus'], answer: 2 }
  ],
  // Test 55
  [
    { id: 431, subject: 'Science', grade: 4, question: 'What is the Moon?', options: ['A star', 'Earth\'s natural satellite that orbits our planet', 'A planet', 'A comet'], answer: 1 },
    { id: 432, subject: 'Science', grade: 4, question: 'What causes the phases of the Moon?', options: ['Earth\'s shadow', 'The changing angles of sunlight hitting the Moon as it orbits Earth', 'The Moon changing size', 'Clouds'], answer: 1 },
    { id: 433, subject: 'Science', grade: 5, question: 'What is kinetic energy?', options: ['Stored energy', 'The energy an object has because of its motion', 'Chemical energy', 'Electrical energy'], answer: 1 },
    { id: 434, subject: 'Science', grade: 5, question: 'What is the law of conservation of energy?', options: ['Energy increases over time', 'Energy cannot be created or destroyed, only transformed from one form to another', 'Energy disappears', 'Energy only comes from the Sun'], answer: 1 },
    { id: 435, subject: 'Science', grade: 6, question: 'What is wind energy?', options: ['Energy from water', 'Energy harnessed from the movement of air', 'Energy from the Sun', 'Energy from coal'], answer: 1 },
    { id: 436, subject: 'Science', grade: 6, question: 'What is a food chain?', options: ['A restaurant chain', 'A sequence showing how energy and nutrients pass from one organism to another', 'A type of recipe', 'A grocery list'], answer: 1 },
    { id: 437, subject: 'Science', grade: 7, question: 'What is the atomic number?', options: ['The mass of an atom', 'The number of protons in the nucleus of an atom', 'The number of neutrons', 'The number of electrons'], answer: 1 },
    { id: 438, subject: 'Science', grade: 7, question: 'What is an isotope?', options: ['A different element', 'Atoms of the same element with different numbers of neutrons', 'A compound', 'A molecule'], answer: 1 },
    { id: 439, subject: 'Science', grade: 8, question: 'What are the three types of tectonic plate boundaries?', options: ['Top, middle, bottom', 'Convergent, divergent, transform', 'Hot, cold, warm', 'Fast, slow, still'], answer: 1 },
    { id: 440, subject: 'Science', grade: 8, question: 'What is a tsunami caused by?', options: ['Wind', 'An underwater earthquake or volcanic eruption displacing large amounts of water', 'Rain', 'Tides'], answer: 1 },
    { id: 441, subject: 'Science', grade: 9, question: 'What is oxidation?', options: ['Gaining electrons', 'The loss of electrons by a substance in a chemical reaction', 'Dissolving', 'Melting'], answer: 1 },
    { id: 442, subject: 'Science', grade: 9, question: 'What is reduction in chemistry?', options: ['Making something smaller', 'The gain of electrons by a substance in a chemical reaction', 'Removing a substance', 'Heating a substance'], answer: 1 },
    { id: 443, subject: 'Science', grade: 10, question: 'What is the equation for work?', options: ['W = fd (force times distance)', 'W = mv', 'W = mgh', 'W = 1/2mv^2'], answer: 0 },
    { id: 444, subject: 'Science', grade: 10, question: 'What is the difference between series and parallel circuits?', options: ['They are the same', 'In series, components are in a single path; in parallel, components are in separate branches', 'Series has multiple paths', 'Parallel has one path'], answer: 1 },
    { id: 445, subject: 'Science', grade: 5, question: 'What is sound?', options: ['A type of light', 'A vibration that travels through a medium as a wave', 'A type of heat', 'A chemical reaction'], answer: 1 }
  ],
  // Test 56
  [
    { id: 446, subject: 'Science', grade: 4, question: 'What is the largest planet in our solar system?', options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'], answer: 1 },
    { id: 447, subject: 'Science', grade: 4, question: 'What is a constellation?', options: ['A single star', 'A pattern of stars that forms a recognizable shape in the night sky', 'A planet', 'A galaxy'], answer: 1 },
    { id: 448, subject: 'Science', grade: 5, question: 'What is light?', options: ['A type of sound', 'A form of electromagnetic radiation that is visible to the human eye', 'A chemical', 'A type of heat only'], answer: 1 },
    { id: 449, subject: 'Science', grade: 5, question: 'What is reflection of light?', options: ['Light bending', 'Light bouncing off a surface', 'Light being absorbed', 'Light disappearing'], answer: 1 },
    { id: 450, subject: 'Science', grade: 6, question: 'What is hydroelectric energy?', options: ['Energy from the Sun', 'Energy generated by flowing or falling water', 'Energy from wind', 'Energy from coal'], answer: 1 },
    { id: 451, subject: 'Science', grade: 6, question: 'What is the greenhouse effect?', options: ['Growing plants in greenhouses', 'The trapping of heat in Earth\'s atmosphere by gases like CO2 and methane', 'A type of pollution', 'Cooling of the atmosphere'], answer: 1 },
    { id: 452, subject: 'Science', grade: 7, question: 'What is the mass number of an atom?', options: ['The number of protons', 'The total number of protons and neutrons in the nucleus', 'The number of electrons', 'The atomic number'], answer: 1 },
    { id: 453, subject: 'Science', grade: 7, question: 'What is a chemical reaction?', options: ['A physical change', 'A process where substances are transformed into new substances with different properties', 'Dissolving sugar in water', 'Melting ice'], answer: 1 },
    { id: 454, subject: 'Science', grade: 8, question: 'What is the Richter scale?', options: ['A weight scale', 'A scale used to measure the magnitude of earthquakes', 'A temperature scale', 'A hardness scale'], answer: 1 },
    { id: 455, subject: 'Science', grade: 8, question: 'What is the troposphere?', options: ['The highest layer of the atmosphere', 'The lowest layer of Earth\'s atmosphere where weather occurs', 'The ozone layer', 'Space'], answer: 1 },
    { id: 456, subject: 'Science', grade: 9, question: 'What is a balanced chemical equation?', options: ['An equation with equal signs', 'An equation with the same number of each type of atom on both sides', 'Any chemical formula', 'A math equation'], answer: 1 },
    { id: 457, subject: 'Science', grade: 9, question: 'What is electrolysis?', options: ['A medical procedure', 'Using electricity to drive a non-spontaneous chemical reaction', 'A type of battery', 'Dissolving a substance'], answer: 1 },
    { id: 458, subject: 'Science', grade: 10, question: 'What is power in physics?', options: ['Strength', 'The rate at which work is done or energy is transferred', 'A type of force', 'Mass times velocity'], answer: 1 },
    { id: 459, subject: 'Science', grade: 10, question: 'What is the equation for power?', options: ['P = Fd', 'P = W/t (work divided by time)', 'P = mv', 'P = ma'], answer: 1 },
    { id: 460, subject: 'Science', grade: 4, question: 'What is a solar eclipse?', options: ['The Moon blocking the stars', 'When the Moon passes between the Sun and Earth, blocking sunlight', 'The Sun disappearing', 'Earth blocking the Moon'], answer: 1 }
  ],
  // Test 57
  [
    { id: 461, subject: 'Science', grade: 4, question: 'What is a habitat?', options: ['A type of animal', 'The natural environment where an organism lives', 'A type of food', 'A body part'], answer: 1 },
    { id: 462, subject: 'Science', grade: 4, question: 'What is erosion?', options: ['Building up land', 'The wearing away of land by wind, water, or ice', 'An earthquake', 'A volcanic eruption'], answer: 1 },
    { id: 463, subject: 'Science', grade: 5, question: 'What is refraction of light?', options: ['Light bouncing off a surface', 'The bending of light as it passes from one medium to another', 'Light being absorbed', 'Light disappearing'], answer: 1 },
    { id: 464, subject: 'Science', grade: 5, question: 'What is an ecosystem?', options: ['A single animal', 'A community of living things and their physical environment interacting as a system', 'A type of weather', 'A rock formation'], answer: 1 },
    { id: 465, subject: 'Science', grade: 6, question: 'What is climate change?', options: ['Daily weather changes', 'Long-term shifts in global temperatures and weather patterns', 'A seasonal change', 'A single storm'], answer: 1 },
    { id: 466, subject: 'Science', grade: 6, question: 'What is the carbon cycle?', options: ['Riding a bicycle', 'The process by which carbon moves through the atmosphere, organisms, oceans, and Earth', 'A type of recycling', 'A chemical formula'], answer: 1 },
    { id: 467, subject: 'Science', grade: 7, question: 'What is the law of conservation of mass?', options: ['Mass increases in reactions', 'Mass is neither created nor destroyed in a chemical reaction', 'Mass decreases in reactions', 'Mass is only conserved in physics'], answer: 1 },
    { id: 468, subject: 'Science', grade: 7, question: 'What is an acid?', options: ['A substance with pH above 7', 'A substance that donates hydrogen ions and has a pH below 7', 'A neutral substance', 'A type of metal'], answer: 1 },
    { id: 469, subject: 'Science', grade: 8, question: 'What is the stratosphere?', options: ['The lowest layer of the atmosphere', 'The second layer of the atmosphere containing the ozone layer', 'Outer space', 'The layer closest to Earth\'s core'], answer: 1 },
    { id: 470, subject: 'Science', grade: 8, question: 'What type of volcano has steep sides and explosive eruptions?', options: ['Shield volcano', 'Composite (stratovolcano)', 'Cinder cone', 'Lava dome'], answer: 1 },
    { id: 471, subject: 'Science', grade: 9, question: 'What is stoichiometry?', options: ['A type of thermometer', 'The calculation of quantities of reactants and products in chemical reactions', 'A laboratory tool', 'A type of element'], answer: 1 },
    { id: 472, subject: 'Science', grade: 9, question: 'What is a base in chemistry?', options: ['The bottom of something', 'A substance that accepts hydrogen ions and has a pH above 7', 'An acid', 'A salt'], answer: 1 },
    { id: 473, subject: 'Science', grade: 10, question: 'What is momentum?', options: ['Speed', 'The product of an object\'s mass and velocity', 'Force', 'Acceleration'], answer: 1 },
    { id: 474, subject: 'Science', grade: 10, question: 'What is the law of conservation of momentum?', options: ['Momentum always increases', 'In a closed system, the total momentum before and after a collision remains the same', 'Momentum is always lost', 'Only applies to large objects'], answer: 1 },
    { id: 475, subject: 'Science', grade: 5, question: 'What is heat?', options: ['A type of light', 'The transfer of thermal energy from a warmer object to a cooler one', 'A type of sound', 'A chemical reaction'], answer: 1 }
  ],
  // Test 58
  [
    { id: 476, subject: 'Science', grade: 4, question: 'What is a food chain?', options: ['A restaurant chain', 'A sequence showing how energy passes from one organism to another', 'A cooking recipe', 'A grocery list'], answer: 1 },
    { id: 477, subject: 'Science', grade: 4, question: 'What is the difference between a solid and a liquid?', options: ['They are the same', 'A solid has a fixed shape and volume; a liquid has a fixed volume but takes the shape of its container', 'Liquids have a fixed shape', 'Solids flow freely'], answer: 1 },
    { id: 478, subject: 'Science', grade: 5, question: 'What are the three ways heat is transferred?', options: ['Slowly, quickly, medium', 'Conduction, convection, radiation', 'Hot, warm, cold', 'Up, down, sideways'], answer: 1 },
    { id: 479, subject: 'Science', grade: 5, question: 'What is conduction?', options: ['Heat transfer through fluids', 'Heat transfer through direct contact between particles', 'Heat transfer through waves', 'Heat transfer through air only'], answer: 1 },
    { id: 480, subject: 'Science', grade: 6, question: 'What is a non-renewable energy source?', options: ['Solar power', 'An energy source like coal, oil, or natural gas that cannot be replenished in a human lifetime', 'Wind power', 'Hydroelectric power'], answer: 1 },
    { id: 481, subject: 'Science', grade: 6, question: 'What is biodiversity?', options: ['A single species', 'The variety of plant and animal life in a particular area or on Earth', 'A type of energy', 'A chemical compound'], answer: 1 },
    { id: 482, subject: 'Science', grade: 7, question: 'What is a base in terms of pH?', options: ['A substance with pH below 7', 'A substance with pH above 7 that feels slippery and tastes bitter', 'A neutral substance', 'An acid'], answer: 1 },
    { id: 483, subject: 'Science', grade: 7, question: 'What does pH 7 indicate?', options: ['Very acidic', 'Neutral', 'Very basic', 'No measurement'], answer: 1 },
    { id: 484, subject: 'Science', grade: 8, question: 'What is a mid-ocean ridge?', options: ['A deep trench', 'An underwater mountain chain formed by rising magma at divergent plate boundaries', 'A coral reef', 'A continental shelf'], answer: 1 },
    { id: 485, subject: 'Science', grade: 8, question: 'What is the Coriolis effect?', options: ['A type of erosion', 'The deflection of moving objects caused by Earth\'s rotation', 'A tidal pattern', 'A volcanic effect'], answer: 1 },
    { id: 486, subject: 'Science', grade: 9, question: 'What is an ion?', options: ['A neutral atom', 'An atom or molecule with a net electric charge due to gaining or losing electrons', 'A neutron', 'A proton'], answer: 1 },
    { id: 487, subject: 'Science', grade: 9, question: 'What is a precipitate?', options: ['Rain', 'A solid that forms when two solutions are mixed in a chemical reaction', 'A gas', 'A liquid'], answer: 1 },
    { id: 488, subject: 'Science', grade: 10, question: 'What is the equation for kinetic energy?', options: ['KE = mgh', 'KE = 1/2mv^2', 'KE = Fd', 'KE = ma'], answer: 1 },
    { id: 489, subject: 'Science', grade: 10, question: 'What is Hooke\'s law?', options: ['A law about fishing', 'The force needed to extend a spring is proportional to the distance it is stretched (F = kx)', 'A law about heat', 'A law about light'], answer: 1 },
    { id: 490, subject: 'Science', grade: 4, question: 'What is a gas?', options: ['A solid with a fixed shape', 'A state of matter with no fixed shape or volume that expands to fill its container', 'A liquid', 'A type of rock'], answer: 1 }
  ],
  // Test 59
  [
    { id: 491, subject: 'Science', grade: 4, question: 'What is the water cycle?', options: ['A bicycle made of water', 'The continuous movement of water through evaporation, condensation, and precipitation', 'A type of swimming', 'A river only'], answer: 1 },
    { id: 492, subject: 'Science', grade: 4, question: 'What makes a rainbow?', options: ['Paint', 'Sunlight being split into its colors by water droplets in the air', 'Colored clouds', 'The Moon'], answer: 1 },
    { id: 493, subject: 'Science', grade: 5, question: 'What is convection?', options: ['Heat transfer by direct contact', 'Heat transfer through the movement of fluids (liquids or gases)', 'Heat transfer through waves', 'Heat transfer through solids'], answer: 1 },
    { id: 494, subject: 'Science', grade: 5, question: 'What is radiation as a form of heat transfer?', options: ['Heat through contact', 'Heat transferred through electromagnetic waves, without needing a medium', 'Heat through fluids', 'Heat through solids only'], answer: 1 },
    { id: 495, subject: 'Science', grade: 6, question: 'What is the ozone layer?', options: ['A layer of soil', 'A region of the stratosphere that absorbs most of the Sun\'s harmful ultraviolet radiation', 'The lowest atmospheric layer', 'A type of cloud'], answer: 1 },
    { id: 496, subject: 'Science', grade: 6, question: 'What is pollution?', options: ['Clean air', 'The introduction of harmful substances into the environment', 'A type of energy', 'A natural process'], answer: 1 },
    { id: 497, subject: 'Science', grade: 7, question: 'What is a chemical formula?', options: ['A math equation', 'A notation using symbols and numbers to represent the elements and their ratios in a compound', 'A recipe', 'A lab report'], answer: 1 },
    { id: 498, subject: 'Science', grade: 7, question: 'What is an alloy?', options: ['A pure metal', 'A mixture of two or more metals, or a metal and another element', 'A chemical compound', 'A type of rock'], answer: 1 },
    { id: 499, subject: 'Science', grade: 8, question: 'What is a subduction zone?', options: ['A diving area', 'A region where one tectonic plate slides under another', 'A volcanic crater', 'A mountain top'], answer: 1 },
    { id: 500, subject: 'Science', grade: 8, question: 'What are ocean currents driven by?', options: ['Fish', 'Wind, temperature differences, salinity, and Earth\'s rotation', 'Boats', 'The Moon only'], answer: 1 },
    { id: 501, subject: 'Science', grade: 9, question: 'What is a solvent?', options: ['A substance being dissolved', 'The substance in which a solute is dissolved to form a solution', 'A precipitate', 'A gas'], answer: 1 },
    { id: 502, subject: 'Science', grade: 9, question: 'What is electronegativity?', options: ['A negative charge', 'A measure of an atom\'s ability to attract electrons in a chemical bond', 'A type of ion', 'A unit of energy'], answer: 1 },
    { id: 503, subject: 'Science', grade: 10, question: 'What is the equation for gravitational potential energy?', options: ['PE = 1/2mv^2', 'PE = mgh (mass times gravity times height)', 'PE = Fd', 'PE = kx'], answer: 1 },
    { id: 504, subject: 'Science', grade: 10, question: 'What is a semiconductor?', options: ['A full conductor', 'A material with electrical conductivity between a conductor and an insulator', 'An insulator', 'A superconductor'], answer: 1 },
    { id: 505, subject: 'Science', grade: 5, question: 'What is a fossil fuel?', options: ['A type of dinosaur', 'A fuel formed from the remains of ancient organisms, such as coal, oil, or natural gas', 'A renewable energy source', 'A type of rock'], answer: 1 }
  ],
  // Test 60
  [
    { id: 506, subject: 'Science', grade: 4, question: 'What is a cloud made of?', options: ['Cotton', 'Tiny water droplets or ice crystals suspended in the atmosphere', 'Smoke', 'Dust only'], answer: 1 },
    { id: 507, subject: 'Science', grade: 4, question: 'What is the Earth\'s atmosphere?', options: ['The ocean', 'The layer of gases surrounding Earth', 'The soil', 'The core of Earth'], answer: 1 },
    { id: 508, subject: 'Science', grade: 5, question: 'What is static electricity?', options: ['Moving electricity', 'A buildup of electric charge on the surface of an object', 'A type of magnet', 'A battery'], answer: 1 },
    { id: 509, subject: 'Science', grade: 5, question: 'What is the difference between speed and velocity?', options: ['They are the same', 'Speed is how fast something moves; velocity includes both speed and direction', 'Velocity has no direction', 'Speed includes direction'], answer: 1 },
    { id: 510, subject: 'Science', grade: 6, question: 'What is nuclear energy?', options: ['Solar energy', 'Energy released from the nucleus of atoms through fission or fusion', 'Wind energy', 'Chemical energy'], answer: 1 },
    { id: 511, subject: 'Science', grade: 6, question: 'What is an endangered species?', options: ['A common animal', 'A species at serious risk of extinction', 'An extinct species', 'A new species'], answer: 1 },
    { id: 512, subject: 'Science', grade: 7, question: 'What is the difference between an atom and a molecule?', options: ['They are the same', 'An atom is a single unit of an element; a molecule is two or more atoms bonded together', 'A molecule is smaller', 'An atom is always larger'], answer: 1 },
    { id: 513, subject: 'Science', grade: 7, question: 'What is a solute?', options: ['The substance that dissolves another', 'The substance that is dissolved in a solvent', 'A type of gas', 'A precipitate'], answer: 1 },
    { id: 514, subject: 'Science', grade: 8, question: 'What is a convection current?', options: ['An electrical current', 'A circular movement in fluids caused by temperature differences', 'A river current', 'A wind pattern only'], answer: 1 },
    { id: 515, subject: 'Science', grade: 8, question: 'What is the Ring of Fire?', options: ['A circus act', 'A zone of frequent earthquakes and volcanic eruptions encircling the Pacific Ocean', 'A desert', 'A weather system'], answer: 1 },
    { id: 516, subject: 'Science', grade: 9, question: 'What is a Lewis dot structure?', options: ['A map', 'A diagram showing the bonding between atoms and lone pairs of electrons', 'A type of graph', 'A periodic table entry'], answer: 1 },
    { id: 517, subject: 'Science', grade: 9, question: 'What is an indicator in chemistry?', options: ['A pointer', 'A substance that changes color to show whether a solution is acidic or basic', 'A type of element', 'A measuring tool'], answer: 1 },
    { id: 518, subject: 'Science', grade: 10, question: 'What is the law of universal gravitation?', options: ['Objects float in space', 'Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them', 'Gravity only affects heavy objects', 'Gravity is constant everywhere'], answer: 1 },
    { id: 519, subject: 'Science', grade: 10, question: 'What is the difference between fission and fusion?', options: ['They are the same', 'Fission splits heavy nuclei; fusion combines light nuclei; both release energy', 'Fusion splits nuclei', 'Fission combines nuclei'], answer: 1 },
    { id: 520, subject: 'Science', grade: 4, question: 'What is a tornado?', options: ['A type of hurricane', 'A violently rotating column of air extending from a thunderstorm to the ground', 'A flood', 'An earthquake'], answer: 1 }
  ]
];

module.exports = { scienceTestBanks };
