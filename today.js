

const todaySvg = d3.select("svg.today")
// const rectTags = d3.selectAll("rect")


const barScale = d3.scaleLinear()
    .domain([0, 2000])
    .range([1, 112])

todaySvg //ci dessous les instructions qu'on donne à d3 pour créer le bar chart.
    .selectAll("rect")
    .data(todayData)
    .enter()
    .append("rect")
    .attr("x", (d,i) => {return i * 36})
    .attr("y", (d,i) => {return 112})
    .attr("width", 24)
    .attr("height", 0)
    .transition()
    .duration(2000)
    .delay((d, i)=> { return i * 20}) 
    .ease(d3.easeCubicOut)
    .attr("y", (d,i) => {return 112 - barScale (d)})
    .attr("height", (d,i)=> { return barScale(d)})

todaySvg // le text est en svg
    .selectAll("text")
    .data(todayData)
    .enter()
    .append("text")
    .attr("x", (d,i)=> { return i * 36 + 12})
    .attr("y", 130)
    .text((d, i) => { return i})