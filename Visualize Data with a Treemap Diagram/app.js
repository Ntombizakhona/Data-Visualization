// app.js

// URL for the data
const dataUrl = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json';

// Load the data
d3.json(dataUrl).then(data => {
  // Set dimensions and margins
  const width = 960;
  const height = 600;

  // Create SVG container
  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  // Create a treemap layout
  const treemap = d3.treemap()
    .size([width, height])
    .paddingInner(1);

  // Create a hierarchy from the data
  const root = d3.hierarchy(data)
    .sum(d => d.value)
    .sort((a, b) => b.value - a.value);

  // Apply the treemap layout to the hierarchy
  treemap(root);

  // Set color scale
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

  // Add tiles
  svg.selectAll(".tile")
    .data(root.leaves())
    .enter().append("rect")
    .attr("class", "tile")
    .attr("x", d => d.x0)
    .attr("y", d => d.y0)
    .attr("width", d => d.x1 - d.x0)
    .attr("height", d => d.y1 - d.y0)
    .attr("fill", d => colorScale(d.data.category))
    .attr("data-name", d => d.data.name)
    .attr("data-category", d => d.data.category)
    .attr("data-value", d => d.data.value)
    .on("mouseover", function(event, d) {
      const tooltip = d3.select("#tooltip");
      tooltip.style("display", "block")
        .style("left", `${event.pageX + 5}px`)
        .style("top", `${event.pageY - 28}px`)
        .attr("data-value", d.data.value)
        .html(`Name: ${d.data.name}<br>Category: ${d.data.category}<br>Value: ${d.data.value}`);
    })
    .on("mouseout", function() {
      d3.select("#tooltip").style("display", "none");
    });

  // Add legend
  const categories = root.leaves().map(d => d.data.category).filter((v, i, a) => a.indexOf(v) === i);
  const legend = d3.select("#legend");

  legend.selectAll(".legend-item")
    .data(categories)
    .enter().append("div")
    .attr("class", "legend-item")
    .style("background-color", d => colorScale(d))
    .style("width", "30px")
    .style("height", "20px")
    .style("display", "inline-block")
    .style("margin-right", "5px")
    .text(d => d);
}).catch(error => {
  console.error('Error loading the data:', error);
});
