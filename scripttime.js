let showMovie = document.querySelector(".selected-movie-header");
showMovie.querySelector("h2").innerText = window.localStorage.getItem("moviename");
showMovie.querySelector(".percent").innerText = window.localStorage.getItem("movierating");
showMovie.querySelector(".percentnumber").innerText = window.localStorage.getItem("movieratingnumber");
showMovie.querySelector(".screen").innerText = window.localStorage.getItem("screen")
showMovie.querySelector(".language").innerText = window.localStorage.getItem("language");
showMovie.querySelector(".show-time").innerText = window.localStorage.getItem("show-time");
showMovie.querySelector(".show-description").innerText = window.localStorage.getItem("show-description");
showMovie.querySelector(".show-ua").innerText = window.localStorage.getItem("show-ua");
showMovie.querySelector(".show-releasedate").innerText = window.localStorage.getItem("show-releasedate");

let selectedMovieCast = Array.from(document.querySelectorAll(".item"));
selectedMovieCast.forEach((elm,id) => {
    elm.querySelector("img").src = window.localStorage.getItem(`img${id}`);
    elm.querySelector(".name").innerText = window.localStorage.getItem(`name${id}`);
});


let selectPvrNode = document.querySelectorAll(".pvr");
let selectPvr = Array.from(selectPvrNode);
selectPvr.forEach((elm) => {
    elm.addEventListener("click", function(event) {
        let remove = Array.from(elm.parentElement.parentElement.querySelectorAll(".pvr"));
        remove.forEach((elm) => elm.classList.remove("selected-pvr"));
        event.target.classList.add("selected-pvr");
        window.localStorage.setItem("selected-pvr", JSON.stringify(document.querySelector(".selected-pvr").innerText));
    });
});

let selectDateNode = document.querySelectorAll(".date");
let selectDate = Array.from(selectDateNode);
selectDate.forEach((elm) => {
    elm.addEventListener("click", function(event) {
        let remove = Array.from(elm.parentElement.parentElement.querySelectorAll(".date"));
        remove.forEach((elm) => elm.classList.remove("selected-date"));
        selectDate.forEach((elm) => elm.querySelector("span").classList.remove("selected-date"));            
        event.target.classList.add("selected-date");
        window.localStorage.setItem("selected-date", JSON.stringify(document.querySelector(".selected-date").innerText));
    });
});

let selectTimeNode = document.querySelectorAll(".time");
let selectTime = Array.from(selectTimeNode);
selectTime.forEach((elm) => {
    elm.addEventListener("click", function(event) {
        let remove = Array.from(elm.parentElement.parentElement.querySelectorAll(".time"));
        remove.forEach((elm) => elm.classList.remove("selected-time"));
        event.target.classList.add("selected-time");
        window.localStorage.setItem("selected-time", JSON.stringify(document.querySelector(".selected-time").innerText));
    });
});

let selectPeopleNode = document.querySelectorAll(".people");
let selectPeople = Array.from(selectPeopleNode);
selectPeople.forEach((elm) => {
    elm.addEventListener("click", function(event) {
        let remove = Array.from(elm.parentElement.parentElement.querySelectorAll(".people"));
        remove.forEach((elm) => elm.classList.remove("selected-people"));
        event.target.classList.add("selected-people");
        window.localStorage.setItem("selected-people", JSON.stringify(document.querySelector(".selected-people").innerText));
    });
});

