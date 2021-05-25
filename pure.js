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
const headerTags = document.querySelectorAll("h1")

//then for each tag let it ahve a BG color
headerTags.forEach(h1 => {
    const hue = 360 * Math.random() //Choisit une valeur de 0 à 360 (aléatoire)
    h1.style.backgroundColor = "hsl(" + hue + ", 100%, 50%)" //Ici on utilise la valeur HSL --> figma
})