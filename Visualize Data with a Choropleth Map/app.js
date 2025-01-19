// app.js

// Education Data
const educationData = 
d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json')
  .then(data => {
    console.log(data); // The data is now stored in the 'data' variable
    // You can now use 'data' to manipulate or visualize it
  })
  .catch(error => {
    console.error('Error loading the data:', error);
  });

// Counties Data

  const counties = // Using D3.js
d3.json('https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json')
  .then(data => {
    console.log(data); // The data is now stored in the 'data' variable
    // Process the TopoJSON data
    const counties = topojson.feature(data, data.objects.counties).features;
    console.log(counties); // This will log the GeoJSON features
    // You can now use 'counties' to create visualizations
  })
  .catch(error => {
    console.error('Error loading the data:', error);
  });

  // Set dimensions and margins
  const width = 960;
  const height = 600;

  // Create SVG container
  const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

  // Set color scale
  const colorScale = d3.scaleQuantize()
    .domain([d3.min(educationData, d => d.bachelorsOrHigher), d3.max(educationData, d => d.bachelorsOrHigher)])
    .range(["#f7fbff", "#c6dbef", "#6baed6", "#2171b5"]);

  // Create a path generator
  const path = d3.geoPath();

  // Add counties
  svg.selectAll(".county")
    .data(counties)
    .enter().append("path")
    .attr("class", "county")
    .attr("d", path)
    .attr("data-fips", d => d.id)
    .attr("data-education", d => {
      const result = educationData.find(obj => obj.fips === d.id);
      return result ? result.bachelorsOrHigher : 0;
    })
    .attr("fill", d => {
      const result = educationData.find(obj => obj.fips === d.id);
      return result ? colorScale(result.bachelorsOrHigher) : "#ccc";
    })
    .on("mouseover", function(event, d) {
      const result = educationData.find(obj => obj.fips === d.id);
      const tooltip = d3.select("#tooltip");
      tooltip.style("display", "block")
        .style("left", `${event.pageX + 5}px`)
        .style("top", `${event.pageY - 28}px`)
        .attr("data-education", result ? result.bachelorsOrHigher : 0)
        .html(`County: ${result ? result.area_name : "Unknown"}<br>State: ${result ? result.state : "Unknown"}<br>Education: ${result ? result.bachelorsOrHigher : "N/A"}%`);
    })
    .on("mouseout", function() {
      d3.select("#tooltip").style("display", "none");
    });

  // Add legend
  const legend = d3.select("#legend");
  const legendData = colorScale.range().map(color => {
    const d = colorScale.invertExtent(color);
    return {
      color: color,
      min: d[0],
      max: d[1]
    };
  });

  legend.selectAll(".legend-rect")
    .data(legendData)
    .enter().append("div")
    .attr("class", "legend-rect")
    .style("background-color", d => d.color)
    .style("width", "30px")
    .style("height", "20px")
    .style("display", "inline-block")
    .style("margin-right", "5px");
});
