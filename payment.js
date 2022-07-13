
let showMovie = document.querySelector(".selected-movie-header");
showMovie.querySelector("h3").innerText = window.localStorage.getItem("moviename");
showMovie.querySelector(".show-time").innerText = window.localStorage.getItem("show-time");
showMovie.querySelector(".show-description").innerText = window.localStorage.getItem("show-description");
showMovie.querySelector(".show-ua").innerText = window.localStorage.getItem("show-ua");
let movieTime = document.querySelector(".show-selected-time");
movieTime.innerText = JSON.parse(window.localStorage.getItem("selected-time"));
let movieDate = document.querySelector(".show-selected-date");
movieDate.innerText = JSON.parse(window.localStorage.getItem("selected-date")).replace(/\n/g, " ");

let movieSummary = document.querySelector(".summary");
movieSummary.querySelector(".ticketnumber").innerText = window.localStorage.getItem("numberofticket");
movieSummary.querySelector(".ticket").innerText = `${window.localStorage.getItem("classname")}-${window.localStorage.getItem("seats")}`;
movieSummary.querySelector(".price").innerText = `Rs ${eval(`${window.localStorage.getItem("seatprice")}*${window.localStorage.getItem("numberofticket")}`)}/-`;
movieSummary.querySelector(".audi").innerText = `AUDI-01`;
let seatPrice = eval(`${window.localStorage.getItem("seatprice")}*${window.localStorage.getItem("numberofticket")}`);
movieSummary.querySelector(".tax-price").innerText = `Rs ${eval(seatPrice/100*18)}/-`;
let tax = eval(seatPrice/100*18);
movieSummary.querySelector(".total-price").innerText = `Rs ${eval(seatPrice+tax)}/-`;

let proceed = document.querySelector(".btn-tertiary");
proceed.addEventListener("click", function(event) {
    event.preventDefault();
})
