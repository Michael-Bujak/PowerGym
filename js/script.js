console.log("Cześć!")

let changeButtonName = document.querySelector(".js-changeButtonName");
let pricelist = document.querySelector(".pricelist");
let buttonName = document.querySelector(".js-buttonName")

changeButtonName.addEventListener("click", () => {
    pricelist.classList.toggle("pricelist");

    changeButtonName.innerText = pricelist.classList.contains("pricelist") ? "Kliknij by zobaczyć cennik" : "Ukryj cennik";

});