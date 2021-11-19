let number = Math.floor(Math.random() * 100);
let chance = 10;
console.log(number);

let champ = document.getElementById("number");
let result = document.getElementById("resultat");
let soumettre = document.getElementById("submit");
let winner = document.getElementById("game");
let howChance = document.getElementById("numberchance");
let before = document.getElementById("number_written");
let text = document.getElementById("propose");
let retry = document.getElementById("reset");
function test () {
    if (chance > 1) {
        if (parseInt(champ.value) === number) {
            result.innerHTML = "Félicitation, tu as gagné !";
            result.style.fontSize = "3rem";
            winner.style.display= "none";
        } else if (parseInt(champ.value) < number) {
            result.innerHTML = "Le nombre est trop petit";
            chance--;
            howChance.innerHTML = chance.toString();
            text.style.display = "inline";
            before.innerHTML +=  " " + champ.value;
        }
          else {
              result.innerHTML = "Le nombre est trop grand";
              chance--;
              howChance.innerHTML = chance.toString();
              text.style.display = "inline";
              before.innerHTML += " " + champ.value;
        }
    }
    else {
        result.innerHTML = "Tu as perdu ! Le nombre était " + number;
        result.style.fontSize = "3rem";
        winner.style.display= "none";
        chance--;
        howChance.innerHTML = chance.toString();
    }
}
soumettre.addEventListener("click", function (){
    test();
})

retry.addEventListener("click", function (){
    chance = 10;
    winner.style.display = "inline-block";
    before.innerHTML = "";
    champ.value = "";
    result.innerHTML = "";
    text.style.display = "none";
    number = Math.floor(Math.random() * 100);
    console.log(number);
})

