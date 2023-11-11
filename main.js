let pluName = document.getElementById ("pluName");
const sendButton = document.getElementById("userSend");
let plulist_global;
let randomNumber
let userInput = document.getElementById("userInput");
let pluImage = document.getElementById("image")

// Wird als allererstes geladen
document.addEventListener("DOMContentLoaded",()=> {
// auf liste zugreifen
fetch("plulist.json")
   // in json umwandeln
  .then( (response)=> response.json() )
  // wert auslesen
  .then( (liste)=> {
    plulist_global = liste
    randomNumber = Math.round( Math.random() * (plulist_global.length -1));
    console.log(randomNumber)

    pluName.innerHTML = plulist_global[randomNumber].name
    pluImage.src = plulist_global[randomNumber].img
})

})

function nextPlu() {
    randomNumber = Math.round( Math.random() * (plulist_global.length -1));
    pluName.innerHTML = plulist_global[randomNumber].name
    pluImage.src = plulist_global[randomNumber].img
}

function checkInput () {
    if (userInput.value == plulist_global[randomNumber].plu){
        alert("Richtig!")
        userInput.value = ""
        nextPlu()
    } else {
        alert("Falsch! Richtige Antwort wäre "+ plulist_global[randomNumber].plu)
        userInput.value = ""
     }

}



sendButton.addEventListener("click",checkInput)




