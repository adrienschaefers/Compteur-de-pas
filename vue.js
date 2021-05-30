const todayData = [20, 30, 47, 60, 110, 99, 
    66, 26, 12, 80, 97, 60, 110, 99, 66, 
    26, 99, 66, 26, 12, 80, 97, 60 ]


const todaySvg = d3.select("svg")
const rectTags = d3.selectAll("rect")

rectTags
    .data(todayData)
    .attr("width", (d, i) => { return d })
    .attr("y", (d, i) => {return 50 * i})
    .attr("x", 0)
    .attr("height", 40)