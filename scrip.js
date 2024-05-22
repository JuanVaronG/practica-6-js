console.log("Peticiones")

//callback
/* const obtener = () => {
    console.log("obtener")
} */

const buttonObtener = document.getElementById("Button-obtener")
//agregar evento al boton


buttonObtener.addEventListener("click", async () => {
    console.log("obtener")
    const pokemonData = await traerPokemon()

    const pokemonArticle = document.getElementById("pokemon")
    //crea un elemento html
    const h3 = document.createElement("h3")
    // le asigna un texto
    h3.innerText = pokemonData.name
    //agrega un elemento como hijo
    pokemonArticle.appendChild(h3)

    // crear elemento img
    
    const img = document.createElement("img")
    img.src = pokemonData.sprites.front_default
    pokemonArticle.appendChild(img)



})

const traerPokemon = async () => {
    const leerImput = document.getElementById("NombrePokemon")
    let nombrePokemon = leerImput.value
    const respuestaPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    const datosPokemon = await respuestaPokemon.json()
    console.log(datosPokemon)
    return datosPokemon
}



