console.log("Peticiones")

//callback
/* const obtener = () => {
    console.log("obtener")
} */

const buttonObtener = document.getElementById("Button-obtener")
//agregar evento al boton


buttonObtener.addEventListener("click", () => {
    console.log("obtener")
})

const traerPokemon = async () => {

    const respuestaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu") 
    const datosPokemon = await respuestaPokemon.json()
    console.log(datosPokemon)
}
traerPokemon()
