// Geographically Accurate World Map GeoJSON Polygons & Real Country Coordinates
export const realCountryCoords = {
  UAE: { lat: 23.4, lon: 53.8, name: "United Arab Emirates" },
  SAU: { lat: 23.8, lon: 45.0, name: "Saudi Arabia" },
  QAT: { lat: 25.3, lon: 51.2, name: "Qatar" },
  OMN: { lat: 21.5, lon: 55.9, name: "Oman" },
  KWT: { lat: 29.3, lon: 47.4, name: "Kuwait" },
  USA: { lat: 37.1, lon: -95.7, name: "United States" },
  GBR: { lat: 55.3, lon: -3.4, name: "United Kingdom" },
  DEU: { lat: 51.1, lon: 10.4, name: "Germany" },
  NLD: { lat: 52.1, lon: 5.2, name: "Netherlands" },
  ITA: { lat: 41.8, lon: 12.5, name: "Italy" },
  SGP: { lat: 1.35, lon: 103.8, name: "Singapore" },
  KOR: { lat: 35.9, lon: 127.7, name: "South Korea" },
  JPN: { lat: 36.2, lon: 138.2, name: "Japan" },
  AUS: { lat: -25.2, lon: 133.7, name: "Australia" },
  ZAF: { lat: -30.5, lon: 22.9, name: "South Africa" }
};

// Geographically Accurate Boundary Polygons for World Continents & Countries
export const worldGeoJsonFeatures = [
  // --- NORTH AMERICA ---
  {
    name: "United States & Alaska",
    polygons: [
      [[49, -124.7], [49, -95], [48.7, -89], [45, -74], [47, -67], [25, -80], [29, -89], [26, -97], [32, -117], [42, -124], [49, -124.7]],
      [[71, -156], [70, -141], [60, -140], [58, -153], [64, -166], [71, -156]]
    ]
  },
  {
    name: "Canada",
    polygons: [
      [[49, -124.7], [55, -130], [69, -141], [70, -130], [68, -100], [60, -80], [62, -64], [47, -53], [45, -67], [49, -95], [49, -124.7]]
    ]
  },
  {
    name: "Mexico & Central America",
    polygons: [
      [[32, -117], [31, -111], [26, -97], [18, -91], [15, -88], [8, -77], [7, -78], [14, -92], [21, -105], [32, -117]]
    ]
  },
  {
    name: "Greenland",
    polygons: [
      [[82, -40], [81, -12], [76, -18], [65, -38], [60, -44], [67, -53], [78, -73], [82, -40]]
    ]
  },

  // --- SOUTH AMERICA ---
  {
    name: "South America (Brazil, Argentina, Colombia, Peru, Chile)",
    polygons: [
      [[12, -73], [10, -62], [5, -51], [-5, -35], [-23, -42], [-35, -57], [-54, -68], [-55, -72], [-40, -73], [-18, -71], [-5, -81], [8, -77], [12, -73]]
    ]
  },

  // --- EUROPE ---
  {
    name: "United Kingdom & Ireland",
    polygons: [
      [[58.6, -3.1], [57.5, -1.8], [51.4, 1.4], [50, -5.7], [54, -3], [58.6, -3.1]],
      [[55.3, -7.5], [54.5, -5.5], [51.5, -9.5], [54, -10], [55.3, -7.5]]
    ]
  },
  {
    name: "Western Europe (France, Spain, Germany, Italy, Alpine)",
    polygons: [
      [[53.5, 7.2], [54.8, 8.5], [54, 14], [49, 15], [46.5, 13.7], [45.7, 13.5], [41.9, 12.5], [38, 15.6], [37.5, 15], [40, 18], [45.7, 13.5], [43.7, 7.5], [43.3, 3], [36, -5.3], [43, -9.3], [48.4, -4.7], [51, 1.5], [53.5, 7.2]]
    ]
  },
  {
    name: "Scandinavia (Norway, Sweden, Finland)",
    polygons: [
      [[71, 26], [70, 31], [65, 25], [60, 28], [60, 18], [56, 12], [59, 10], [62, 5], [70, 18], [71, 26]]
    ]
  },
  {
    name: "Eastern Europe & Russia (European)",
    polygons: [
      [[70, 31], [68, 60], [55, 60], [45, 38], [42, 45], [40, 40], [41, 28], [45, 29], [54, 14], [60, 28], [70, 31]]
    ]
  },

  // --- AFRICA ---
  {
    name: "North Africa (Egypt, Libya, Algeria, Morocco)",
    polygons: [
      [[35, -6], [37, 10], [33, 11], [32, 34], [22, 36], [12, 51], [11, 43], [15, 33], [12, 14], [15, -17], [28, -13], [35, -6]]
    ]
  },
  {
    name: "Sub-Saharan & Southern Africa (Nigeria, Kenya, South Africa)",
    polygons: [
      [[15, -17], [12, 14], [15, 33], [11, 43], [12, 51], [-4, 40], [-11, 40], [-26, 33], [-34, 26], [-34, 18], [-22, 14], [-5, 12], [5, 2], [15, -17]]
    ]
  },

  // --- MIDDLE EAST & SOUTH ASIA ---
  {
    name: "Arabian Peninsula (Saudi Arabia, UAE, Qatar, Oman, Kuwait)",
    polygons: [
      [[30, 34], [30, 48], [30, 56], [26, 56], [24, 54], [22, 59], [17, 54], [12, 44], [12, 43], [30, 34]]
    ]
  },
  {
    name: "Turkey & Middle East Levant",
    polygons: [
      [[42, 28], [41, 41], [37, 44], [33, 35], [30, 34], [36, -5], [41, 28]]
    ]
  },
  {
    name: "India & South Asia (Pakistan, Sri Lanka)",
    polygons: [
      [[35, 75], [31, 70], [24, 68], [20, 73], [15, 73], [8, 77], [10, 80], [13, 80], [21, 89], [22, 92], [26, 89], [28, 80], [35, 75]]
    ]
  },

  // --- EAST & SOUTHEAST ASIA ---
  {
    name: "China & East Asia (Mongolia, Korea)",
    polygons: [
      [[53, 120], [53, 135], [43, 131], [38, 128], [35, 119], [22, 114], [21, 108], [28, 98], [28, 89], [35, 75], [45, 80], [50, 88], [53, 120]]
    ]
  },
  {
    name: "Japan",
    polygons: [
      [[45, 142], [43, 145], [35, 140], [31, 131], [34, 132], [41, 140], [45, 142]]
    ]
  },
  {
    name: "Southeast Asia & Maritime (Singapore, Malaysia, Indonesia, Philippines)",
    polygons: [
      [[22, 108], [15, 108], [10, 104], [1, 104], [2, 102], [6, 100], [14, 98], [22, 108]],
      [[6, 117], [-6, 106], [-8, 115], [-8, 125], [-2, 138], [5, 120], [6, 117]],
      [[18, 120], [14, 124], [7, 125], [10, 122], [18, 120]]
    ]
  },
  {
    name: "Siberia & North Asia",
    polygons: [
      [[75, 60], [77, 100], [75, 170], [66, 170], [60, 165], [53, 140], [53, 120], [50, 88], [45, 80], [55, 60], [68, 60], [75, 60]]
    ]
  },

  // --- AUSTRALIA & OCEANIA ---
  {
    name: "Australia",
    polygons: [
      [[-11.5, 131], [-12, 142], [-24, 153], [-37, 150], [-38, 140], [-35, 115], [-21, 114], [-15, 124], [-11.5, 131]]
    ]
  },
  {
    name: "New Zealand",
    polygons: [
      [[-34, 173], [-41, 175], [-46, 168], [-41, 172], [-34, 173]]
    ]
  }
];
