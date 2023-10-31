let card1 = document.getElementById("card");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let home = document.querySelector(".home_sec");
let modal = document.querySelector(".modal-sec1");
let modal2 = document.querySelector(".modal-sec2");
let modal3 = document.querySelector(".modal-sec3");
let modal4 = document.querySelector(".modal-sec4");
let close = document.getElementById("close");
let close2 = document.getElementById("close2");
let close3 = document.getElementById("close3");
let close4 = document.getElementById("close4");

card1.addEventListener("click", function () {
    home.classList.add("hide");
    modal.style.display = "block"
})

close.addEventListener("click", function () {
    home.classList.remove("hide");
    modal.style.display = "none"
})
card2.addEventListener("click", function () {
    home.classList.add("hide");
    modal2.style.display = "block"
})

close2.addEventListener("click", function () {
    home.classList.remove("hide");
    modal2.style.display = "none"
})
card3.addEventListener("click", function () {
    home.classList.add("hide");
    modal3.style.display = "block"
})

close3.addEventListener("click", function () {
    home.classList.remove("hide");
    modal3.style.display = "none"
})
card4.addEventListener("click", function () {
    home.classList.add("hide");
    modal4.style.display = "block"
})

close4.addEventListener("click", function () {
    home.classList.remove("hide");
    modal4.style.display = "none"
})
