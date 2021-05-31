

const todaySvg = d3.select("svg")
// const rectTags = d3.selectAll("rect")

todaySvg //ci dessous les instructions qu'on donne à d3 pour créer le bar chart.
    .selectAll("rect")
    .data(todayData)
    .enter()
    .append("rect")
    .attr("y", (d,i) => {return 112 - d})
    .attr("x", (d,i) => {return i * 36})
    .attr("width", 24)
    .attr("height", (d,i)=> { return d})