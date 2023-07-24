

//variable for user input
const adj1 = document.getElementById("adj1");
const adj2 = document.getElementById("adj2");
const noun = document.getElementById("noun");
const clothing = document.getElementById("clothing");
const bodypart = document.getElementById("bodypart");
const food= document.getElementById("food");
const verb = document.getElementById("verb");


//variable to display madlib
const madlibdisplay = document.querySelector(".madlib");

//variable for the form
const form = document.querySelector("form");

//variable for the mad lib sotry
const story= `Adjective 1: <b>${adj1}</b> | Adjective 2: <b>${adj2}</b> | Clothing: <b>${clothing}</b> | Noun: <b>${noun}</b> | Body Part: <b>${bodypart}</b> | Verb: <b>${verb}</b> | Food: <b>${food}</b>  `

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (adj1.value=="") {
        alert(`Please enter a value for Adjective 1 : ${adj1.name}`)
        adj1.focus();
    } else if (noun.value=="") {
        alert(`Please enter a value for Noun : ${noun.name}`)
        noun.focus();
    } else if (adj2.value=="") {
        alert(`Please enter a value for Adjective 2 : ${adj2.name}`)
        adj2.focus();
    } else if (clothing.value=="") {
        alert(`Please enter a value for Clothing : ${clothing.name}`)
        clothing.focus();
    } else if (bodypart.value=="") {
        alert(`Please enter a value for Body Part : ${bodypart.name}`)
        bodypart.focus();
    } else if (verb.value=="") {
        alert(`Please enter a value for Verb : ${verb.name}`)
        verb.focus();
    } else if (food.value=="") {
        alert(`Please enter a value for Food : ${food.name}`)
        food.focus();
    } else {
        madLibstoryDisplay();
    }

});

function madLibstoryDisplay() {
    madlibdisplay.innerHTML = story

    .replace(`${adj1}`, adj1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${noun}`, noun.value)
    .replace(`${bodypart}`, bodypart.value)
    .replace(`${verb}`, verb.value)
    .replace(`${food}`, food.value)
}