//alert("Hello ma men")

//changer le texte qui dit "Hello" --> "Hello[NOM]""

//pick the h1 tag
// const headerTag = document.querySelector("h1")

//then change the html content
// headerTag.innerHTML = "Hello mon gars"

//then change the html tag to a background of red
// headerTag.style.backgroundColor = "var--primary-orange"

//font-size goes big 
// headerTag.style.fontSize = ("64px")

//let's puck ALL of the H1 of the page
// const headerTags = document.querySelectorAll("h1")

//then for each tag let it ahve a BG color
// headerTags.forEach(h1 => {
//     const hue = 360 * Math.random() //Choisit une valeur de 0 à 360 (aléatoire)
//     h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)" //Ici on utilise la valeur HSL --> figma
// })

//Pick each tag and label it with each tag number, the index !!!
// headerTags.forEach((h1, index)=> { 
//     h1.innerHTML = "this is tag number" + index
// })


//Let's select all the rectangle tags
//Then let's change the style

// const rectTags = document.querySelectorAll("rect")




// rectTags.forEach((tag, i) => {
//     // tag.style.fill = ("red")
//     const width = data[i]
//     tag.setAttribute("width",  width + "px")
// })

const numberTags = document.querySelectorAll("h3")

numberTags.forEach((h3, index) => {
    h3.innerHTML = index
})

const data = [112, 80, 97, 60, 110, 99, 
    66, 26, 12, 80, 97, 60, 110, 99, 66, 
    26, 99, 66, 26, 12, 80, 97, 60 ]

const todaySvg = document.querySelector("svg")

//witdh bar = 24
//gap between bars = 12
//max height = 112

data.forEach((d, i) => {
    //add a rectangleTag to todaySvg
    const rectTag = document.createElementNS("http://www.w3.org/2000/svg", "rect")
    rectTag.setAttribute("x", i * 36)
    rectTag.setAttribute("y", 112 - d)
    rectTag.setAttribute("width", "24")
    rectTag.setAttribute("height", d)

    todaySvg.append(rectTag)
})

