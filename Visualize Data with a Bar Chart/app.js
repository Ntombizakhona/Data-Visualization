// app.js

// Sample data (replace this with your actual data loading logic)
const data = [
  ["1947-01-01", 243.1],
  ["1947-04-01", 246.3],
  // ... (add all data points here)
  ["2015-07-01", 18064.7]
];

// Parse the data
const parsedData = data.map(d => ({
  date: new Date(d[0]),
  gdp: d[1]
}));

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
const x = d3.scaleTime()
  .domain(d3.extent(parsedData, d => d.date))
  .range([0, width]);

const y = d3.scaleLinear()
  .domain([0, d3.max(parsedData, d => d.gdp)])
  .range([height, 0]);

// Add axes
svg.append("g")
  .attr("id", "x-axis")
  .attr("transform", `translate(0,${height})`)
  .call(d3.axisBottom(x).ticks(10).tickFormat(d3.timeFormat("%Y")));

svg.append("g")
  .attr("id", "y-axis")
  .call(d3.axisLeft(y));

// Add bars
svg.selectAll(".bar")
  .data(parsedData)
  .enter().append("rect")
  .attr("class", "bar")
  .attr("x", d => x(d.date))
  .attr("y", d => y(d.gdp))
  .attr("width", width / parsedData.length - 1)
  .attr("height", d => height - y(d.gdp))
  .attr("data-date", d => d.date.toISOString().split('T')[0])
  .attr("data-gdp", d => d.gdp)
  .on("mouseover", function(event, d) {
    const tooltip = d3.select("#tooltip");
    tooltip.style("display", "block")
      .style("left", `${event.pageX + 5}px`)
      .style("top", `${event.pageY - 28}px`)
      .attr("data-date", d.date.toISOString().split('T')[0])
      .html(`Date: ${d.date.toISOString().split('T')[0]}<br>GDP: $${d.gdp} Billion`);
  })
  .on("mouseout", function() {
    d3.select("#tooltip").style("display", "none");
  });
