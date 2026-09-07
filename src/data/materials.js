// Comprehensive Metallurgical Material Database
// Easy to add, edit, or remove materials for the website catalogue

export const materialsData = [
  {
    name: "Stainless Steel",
    grades: ["304 / 304L", "316 / 316L", "321 / 321H", "310S", "904L", "347 / 347H", "316Ti"],
  },
  {
    name: "Duplex & Super Duplex",
    grades: ["UNS S31803 (2205)", "UNS S32750 (2507)", "UNS S32760 (Zeron 100)", "UNS S32101"],
  },
  {
    name: "Nickel & High Alloys",
    grades: ["Inconel 600 / 625", "Incoloy 800 / 825", "Hastelloy C276 / C22", "Monel 400 / K500", "Nickel 200 / 201", "Alloy 20"],
  },
  {
    name: "Titanium & Exotic Metals",
    grades: ["Grade 2", "Grade 5 (Ti 6Al-4V)", "Grade 7", "Zirconium 702", "Tantalum R05200", "Cupro Nickel 70/30"],
  },
];

// Flat material array categorized for multi-row kinetic scrolling animation
export const scrollingMaterialRows = {
  // Row 1: High Performance Superalloys & Nickel Alloys
  row1: [
    { name: "SUPER DUPLEX", grade: "2507", uns: "UNS S32750", category: "OFFSHORE & MARINE", accent: true },
    { name: "INCONEL", grade: "625", uns: "UNS N06625", category: "EXTREME HEAT", accent: false },
    { name: "HASTELLOY", grade: "C276", uns: "UNS N10276", category: "CHEMICAL PROCESS", accent: true },
    { name: "MONEL", grade: "400", uns: "UNS N04400", category: "SEA WATER CORROSION", accent: false },
    { name: "INCONEL", grade: "600", uns: "UNS N06600", category: "HIGH TEMPERATURE", accent: false },
    { name: "TITANIUM", grade: "GRADE 5", uns: "Ti 6Al-4V", category: "AEROSPACE & DEFENSE", accent: true },
    { name: "ZIRCONIUM", grade: "702", uns: "UNS R60702", category: "SPECIALTY REACTOR", accent: false },
    { name: "INCOLOY", grade: "825", uns: "UNS N08825", category: "ACID RESISTANT", accent: true },
  ],

  // Row 2: Stainless Steels & Super Austenitics
  row2: [
    { name: "STAINLESS STEEL", grade: "316 / 316L", uns: "UNS S31600/03", category: "INDUSTRIAL PIPING", accent: false },
    { name: "SUPER AUSTENITIC", grade: "SS 904L", uns: "UNS N08904", category: "SULFURIC ACID", accent: true },
    { name: "DUPLEX STEEL", grade: "2205", uns: "UNS S31803", category: "HIGH STRENGTH", accent: false },
    { name: "STAINLESS STEEL", grade: "304 / 304L", uns: "UNS S30400/03", category: "FOOD & PHARMA", accent: false },
    { name: "STAINLESS STEEL", grade: "321 / 321H", uns: "UNS S32100", category: "EXHAUST PIPING", accent: true },
    { name: "STAINLESS STEEL", grade: "SS 347", uns: "UNS S34700", category: "HIGH HEAT STABILIZED", accent: false },
    { name: "STAINLESS STEEL", grade: "310S", uns: "UNS S31008", category: "FURNACE EQUIPMENT", accent: false },
    { name: "SUPER DUPLEX", grade: "UNS S32760", uns: "ZERON 100", category: "PREN > 40 HIGH YIELD", accent: true },
  ],

  // Row 3: Exotic Metals & Specialty Alloys
  row3: [
    { name: "HASTELLOY", grade: "C22", uns: "UNS N06022", category: "PITTING RESISTANT", accent: true },
    { name: "TANTALUM", grade: "UNS R05200", uns: "R05200", category: "CORROSION IMMUNE", accent: false },
    { name: "NICKEL", grade: "200 / 201", uns: "UNS N02200/01", category: "CAUSTIC SODA HANDLING", accent: true },
    { name: "ALLOY 20", grade: "CARPENTER 20", uns: "UNS N08020", category: "VALVE & PUMP PARTS", accent: false },
    { name: "MONEL", grade: "K500", uns: "UNS N05500", category: "AGE HARDENED SHAFT", accent: false },
    { name: "CUPRO NICKEL", grade: "70/30", uns: "UNS C71500", category: "DESALINATION & CONDENSER", accent: true },
    { name: "TITANIUM", grade: "GRADE 2", uns: "UNS R50400", category: "COMMERCIALLY PURE", accent: false },
    { name: "INCONEL", grade: "718", uns: "UNS N07718", category: "TURBINE & CRYOGENIC", accent: true },
  ],

  // Row 4: Heavy Alloy Steel & Boiler / Pipeline Grades
  row4: [
    { name: "ALLOY STEEL", grade: "P91 / T91", uns: "9Cr-1Mo-V", category: "POWER GENERATION", accent: false },
    { name: "ALLOY STEEL", grade: "P11 / P22", uns: "ASTM A335", category: "BOILER PRESSURE PIPING", accent: true },
    { name: "CARBON STEEL", grade: "A106 GR. B", uns: "ASTM A106", category: "HIGH TEMP SEAMLESS", accent: false },
    { name: "LOW TEMP STEEL", grade: "A333 GR. 6", uns: "CRYOGENIC", category: "SUB-ZERO IMPACT TESTED", accent: false },
    { name: "HIGH YIELD STEEL", grade: "API 5L X65 / X70", uns: "PSL2 PIPELINE", category: "CROSS COUNTRY OIL PIPELINE", accent: true },
    { name: "TITANIUM", grade: "GRADE 7", uns: "UNS R52400", category: "PALLADIUM ENHANCED", accent: false },
    { name: "SMOOTH STAINLESS", grade: "316Ti", uns: "DIN 1.4571", category: "TITANIUM STABILIZED SS", accent: true },
  ]
};

export default materialsData;
