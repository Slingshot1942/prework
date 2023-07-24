

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
const story= `Adjective 1: <b>${adj1}</b> | Adjective 2: <b>${adj2}</b> | Clothing: <b>${clothing}</b> | Noun: <b>${noun}</b> | Body Part: <b>${bodypart}</b> | Food: <b>${food}</b> | Verb: <b>${verb}</b>  `

form.addEventListener("submit", function (event) {
    event.preventDefault();

    madlibdisplay.innerHTML = story

    .replace(`${adj1}`, adj1.value)
    .replace(`${adj2}`, adj2.value)
    .replace(`${clothing}`, clothing.value)
    .replace(`${noun}`, noun.value)
    .replace(`${bodypart}`, bodypart.value)
    .replace(`${verb}`, verb.value)
    .replace(`${food}`, food.value)
});
