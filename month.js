const monthSvg = d3.select("svg.month")

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => {return i * 28 + 10})
    .attr("cy", (d, i) => {return  40})
    .attr("r", (d, i) => {return 5})