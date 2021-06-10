const monthSvg = d3.select("svg.month")


// 
const radiusScale = d3.scaleSqrt()
    .domain([0, 30000])
    .range([0, 50])

// On crée une autre variable pour paramétrer les nuances de couleurs
const colorScale = d3.scaleSqrt()
    .domain([10000, 30000])
    .range(["blue","red"])

monthSvg
    .selectAll("circle")
    .data(monthData)
    .enter()
    .append("circle")
    // Ici on utilise modulo et math.floor pour créer une grille .
    .attr("cx", (d, i) => { return (i % 7) * 120 + 60})
    .attr("cy", (d, i) => { return  Math.floor(i / 7) * 100 + 60})
    .attr("r", 10) //valeur de début
    .transition()//Initie la transition
    .duration(1000)//On définit la durée de la transition
    .delay((d, i)=> { return i * 20}) //On peut définir le delai également ce qui crée ce côté saccadé.
    .ease(d3.easeCubicOut)
    .attr("r", (d, i) => { return radiusScale(d) })
    .attr("fill", (d, i) => { return colorScale(d) })
