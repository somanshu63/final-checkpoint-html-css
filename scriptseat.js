let selectSeatNode = document.querySelectorAll(".seat");
let selectSeat = Array.from(selectSeatNode);
selectSeat.forEach((elm) => {
    elm.addEventListener("click", function(event) {
        let allSelectedSeats = Array.from(document.querySelectorAll(".selected-seat"));
        if(allSelectedSeats.length<+JSON.parse(window.localStorage.getItem("selected-people")) && event.target.classList.contains("sold-seat")==false){
            event.target.classList.add("selected-seat");
            let bookedseat = Array.from(document.querySelectorAll(".selected-seat"));
            let allbookedseats = bookedseat.map(elm => elm.classList[1]);
            window.localStorage.setItem("seats", allbookedseats);
            allbookedseats = allbookedseats.join(", ");
            window.localStorage.setItem("classname", bookedseat[0].parentElement.parentElement.classList[0]);
            window.localStorage.setItem("seatprice", bookedseat[0].parentElement.parentElement.classList[1]);
            window.localStorage.setItem("numberofticket", bookedseat.length);
        }   else if(event.target.classList.contains("sold-seat")==true){
            alert("you can't select sold seat");
        } 
        else {
            alert(`you have selected ${+JSON.parse(window.localStorage.getItem("selected-people"))} seats`);
        }
    });
});
let showMovie = document.querySelector(".selected-movie-header");
showMovie.querySelector("h3").innerText = window.localStorage.getItem("moviename");
showMovie.querySelector(".show-time").innerText = window.localStorage.getItem("show-time");
showMovie.querySelector(".show-description").innerText = window.localStorage.getItem("show-description");
showMovie.querySelector(".show-ua").innerText = window.localStorage.getItem("show-ua");
let movieTime = document.querySelector(".show-selected-time");
movieTime.innerText = JSON.parse(window.localStorage.getItem("selected-time"));
let movieDate = document.querySelector(".show-selected-date");
movieDate.innerText = JSON.parse(window.localStorage.getItem("selected-date")).replace(/\n/g, " ");


let allSeats = Array.from(document.querySelectorAll(".seat"));
allSeats.forEach(elm => {
    if(Math.random()*100>90){
        elm.classList.add("sold-seat");
    }else{}
});
