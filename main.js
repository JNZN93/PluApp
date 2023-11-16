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
        Swal.fire({
            title: "Richtig!",
            text: "Mach weiter so!",
            icon: "success"
          });
        userInput.value = ""
        nextPlu()
    } else if (userInput.value == ""){
        Swal.fire({
            title: "",
            text: "Bitte gib eine PLU Nummer ein!",
            icon: "info"
          });
    
    } else {
        Swal.fire({
            title: "Leider Falsch",
            text: "Die richtige Antwort wäre "+ plulist_global[randomNumber].plu,
            icon: "error"
          });
        userInput.value = ""
     }

}

function testEnter (event) {
  if (event.key == 'Enter') {
      userInput.blur()
      checkInput()
    }
  }
  // HI

sendButton.addEventListener("click",checkInput)
userInput.addEventListener("keypress",testEnter)




