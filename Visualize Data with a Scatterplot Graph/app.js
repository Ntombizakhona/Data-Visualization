// app.js

// Data 
const data = [
  {
    "Time": "36:50",
    "Place": 1,
    "Seconds": 2210,
    "Name": "Marco Pantani",
    "Year": 1995,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1995 due to high hematocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "36:55",
    "Place": 2,
    "Seconds": 2215,
    "Name": "Marco Pantani",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1997 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:15",
    "Place": 3,
    "Seconds": 2235,
    "Name": "Marco Pantani",
    "Year": 1994,
    "Nationality": "ITA",
    "Doping": "Alleged drug use during 1994 due to high hermatocrit levels",
    "URL": "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use"
  },
  {
    "Time": "37:36",
    "Place": 4,
    "Seconds": 2256,
    "Name": "Lance Armstrong",
    "Year": 2004,
    "Nationality": "USA",
    "Doping": "2004 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "37:42",
    "Place": 5,
    "Seconds": 2262,
    "Name": "Jan Ullrich",
    "Year": 1997,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:05",
    "Place": 6,
    "Seconds": 2285,
    "Name": "Lance Armstrong",
    "Year": 2001,
    "Nationality": "USA",
    "Doping": "2001 Tour de France title stripped by UCI in 2012",
    "URL": "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations"
  },
  {
    "Time": "38:14",
    "Place": 7,
    "Seconds": 2294,
    "Name": "Miguel Indurain",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "38:14",
    "Place": 8,
    "Seconds": 2294,
    "Name": "Alex Zülle",
    "Year": 1995,
    "Nationality": "SUI",
    "Doping": "Confessed in 1998 to taking EPO",
    "URL": "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair"
  },
  {
    "Time": "38:16",
    "Place": 9,
    "Seconds": 2296,
    "Name": "Bjarne Riis",
    "Year": 1995,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "38:22",
    "Place": 10,
    "Seconds": 2302,
    "Name": "Richard Virenque",
    "Year": 1997,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "38:36",
    "Place": 11,
    "Seconds": 2316,
    "Name": "Floyd Landis",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Stripped of 2006 Tour de France title",
    "URL": "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case"
  },
  {
    "Time": "38:36",
    "Place": 12,
    "Seconds": 2316,
    "Name": "Andreas Klöden",
    "Year": 2006,
    "Nationality": "GER",
    "Doping": "Alleged use of illegal blood transfusions in 2006",
    "URL": "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations"
  },
  {
    "Time": "38:40",
    "Place": 13,
    "Seconds": 2320,
    "Name": "Jan Ullrich",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Confessed later in his career to doping",
    "URL": "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case"
  },
  {
    "Time": "38:44",
    "Place": 14,
    "Seconds": 2324,
    "Name": "Laurent Madouas",
    "Year": 1995,
    "Nationality": "FRA",
    "Doping": "Tested positive for Salbutemol in 1994, suspended for 1 month",
    "URL": "http://www.dopeology.org/incidents/Madouas-positive/"
  },
  {
    "Time": "38:55",
    "Place": 15,
    "Seconds": 2335,
    "Name": "Richard Virenque",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "In 2000 confessed to doping during his career",
    "URL": "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair"
  },
  {
    "Time": "39:01",
    "Place": 16,
    "Seconds": 2341,
    "Name": "Carlos Sastre",
    "Year": 2006,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:09",
    "Place": 17,
    "Seconds": 2349,
    "Name": "Iban Mayo",
    "Year": 2003,
    "Nationality": "ESP",
    "Doping": "Failed doping test in 2007 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Iban_Mayo"
  },
  {
    "Time": "39:12",
    "Place": 18,
    "Seconds": 2352,
    "Name": "Andreas Klöden",
    "Year": 2004,
    "Nationality": "GER",
    "Doping": "Alleged doping during 2006 Tour de France",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:14",
    "Place": 19,
    "Seconds": 2354,
    "Name": "Jose Azevedo",
    "Year": 2004,
    "Nationality": "POR",
    "Doping": "Implicated in the Operación Puerto doping case",
    "URL": "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case"
  },
  {
    "Time": "39:15",
    "Place": 20,
    "Seconds": 2355,
    "Name": "Levi Leipheimer",
    "Year": 2006,
    "Nationality": "USA",
    "Doping": "Testified in 2012 to doping during his time with US Postal Service ",
    "URL": "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328"
  },
  {
    "Time": "39:22",
    "Place": 21,
    "Seconds": 2362,
    "Name": "Francesco Casagrande",
    "Year": 1997,
    "Nationality": "ITA",
    "Doping": "Positive testosterone test in 1998",
    "URL": "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml"
  },
  {
    "Time": "39:23",
    "Place": 22,
    "Seconds": 2363,
    "Name": "Nairo Quintana",
    "Year": 2015,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:23",
    "Place": 23,
    "Seconds": 2363,
    "Name": "Bjarne Riis",
    "Year": 1997,
    "Nationality": "DEN",
    "Doping": "Alleged drug use during 1995 due to high hermatrocite levels",
    "URL": "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations"
  },
  {
    "Time": "39:30",
    "Place": 24,
    "Seconds": 2370,
    "Name": "Miguel Indurain",
    "Year": 1994,
    "Nationality": "ESP",
    "Doping": "1994 Failed test for salbutemol, not a banned drug at that time",
    "URL": "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html"
  },
  {
    "Time": "39:30",
    "Place": 25,
    "Seconds": 2370,
    "Name": "Luc Leblanc",
    "Year": 1994,
    "Nationality": "FRA",
    "Doping": "Admitted to using epo and amphetimines throughout 1994 ",
    "URL": "http://www.dopeology.org/people/Luc_Leblanc/"
  },
  {
    "Time": "39:32",
    "Place": 26,
    "Seconds": 2372,
    "Name": "Carlos Sastre",
    "Year": 2008,
    "Nationality": "ESP",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:37",
    "Place": 27,
    "Seconds": 2377,
    "Name": "Vladimir Poulnikov",
    "Year": 1994,
    "Nationality": "UKR",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:40",
    "Place": 28,
    "Seconds": 2380,
    "Name": "Giuseppe Guerini",
    "Year": 2004,
    "Nationality": "ITA",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:41",
    "Place": 29,
    "Seconds": 2381,
    "Name": "Santos Gonzalez",
    "Year": 2004,
    "Nationality": "ESP",
    "Doping": "High Hematocrit during 2005 season, removed by team management",
    "URL": "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/"
  },
  {
    "Time": "39:41",
    "Place": 30,
    "Seconds": 2381,
    "Name": "Vladimir Karpets",
    "Year": 2004,
    "Nationality": "RUS",
    "Doping": "Made payments to Ferrari, but no charges filed",
    "URL": "http://www.dopeology.org/incidents/Ferrari-investigation/"
  },
  {
    "Time": "39:45",
    "Place": 31,
    "Seconds": 2385,
    "Name": "Fernando Escartin",
    "Year": 1995,
    "Nationality": "ESP",
    "Doping": "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
    "URL": "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/"
  },
  {
    "Time": "39:47",
    "Place": 32,
    "Seconds": 2387,
    "Name": "Denis Menchov",
    "Year": 2006,
    "Nationality": "RUS",
    "Doping": "",
    "URL": ""
  },
  {
    "Time": "39:47",
    "Place": 33,
    "Seconds": 2387,
    "Name": "Michael Rasmussen",
    "Year": 2006,
    "Nationality": "DEN",
    "Doping": "Admitted to doping with multiple substances 1998-2010",
    "URL": "http://www.dopeology.org/people/Michael_Rasmussen/"
  },
  {
    "Time": "39:47",
    "Place": 34,
    "Seconds": 2387,
    "Name": "Pietro Caucchioli",
    "Year": 2006,
    "Nationality": "ITA",
    "Doping": "Associated with Mantova investigation, charges dropped",
    "URL": "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/"
  },
  {
    "Time": "39:50",
    "Place": 35,
    "Seconds": 2390,
    "Name": "Nairo Quintana",
    "Year": 2013,
    "Nationality": "COL",
    "Doping": "",
    "URL": ""
  }
];

// Set dimensions and margins
const margin = { top: 20, right: 30, bottom: 40, left: 60 };
const width = 800 - margin.left - margin.right;
const height = 400 - margin.top - margin.bottom;

// Create SVG container
const svg = d3.select("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", `translate(${margin.left},${margin.top})`);

// Set scales
const x = d3.scaleLinear()
  .domain([d3.min(data, d => d.Year) - 1, d3.max(data, d => d.Year) + 1])
  .range([0, width]);

const y = d3.scaleTime()
  .domain([d3.min(data, d => new Date(0, 0, 0, 0, d.Seconds / 60, d.Seconds % 60)), d3.max(data, d => new Date(0, 0, 0, 0, d.Seconds / 60, d.Seconds % 60))])
  .range([0, height]);

// Add axes
svg.append("g")
  .attr("id", "x-axis")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x).tickFormat(d3.format("d")));

svg.append("g")
  .attr("id", "y-axis")
  .call(d3.axisLeft(y).tickFormat(d3.timeFormat("%M:%S")));

// Add dots
svg.selectAll(".dot")
  .data(data)
  .enter().append("circle")
  .attr("class", "dot")
  .attr("cx", d => x(d.Year))
  .attr("cy", d => y(new Date(0, 0, 0, 0, d.Seconds / 60, d.Seconds % 60)))
  .attr("r", 5)
  .attr("data-xvalue", d => d.Year)
  .attr("data-yvalue", d => new Date(0, 0, 0, 0, d.Seconds / 60, d.Seconds % 60))
  .on("mouseover", function(event, d) {
    const tooltip = d3.select("#tooltip");
    tooltip.style("display", "block")
      .style("left", `${event.pageX + 5}px`)
      .style("top", `${event.pageY - 28}px`)
      .attr("data-year", d.Year)
      .html(`Name: ${d.Name}<br>Year: ${d.Year}<br>Time: ${d.Time}<br>Doping: ${d.Doping}`);
  })
  .on("mouseout", function() {
    d3.select("#tooltip").style("display", "none");
  });

// Add legend
const legend = d3.select("#legend");
legend.html("Legend: <br> Blue: No Doping Allegations <br> Orange: Doping Allegations");
