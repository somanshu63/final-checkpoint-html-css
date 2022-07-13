let movieDetails = document.querySelector(".movieoverview");
window.localStorage.setItem("moviename", movieDetails.querySelector("h1").innerText);
window.localStorage.setItem("movierating", movieDetails.querySelector(".percent").innerText);
window.localStorage.setItem("movierating", movieDetails.querySelector(".percent").innerText);
window.localStorage.setItem("movieratingnumber", movieDetails.querySelector(".percentnumber").innerText);
window.localStorage.setItem("screen", movieDetails.querySelector(".screen").innerText);
window.localStorage.setItem("language", movieDetails.querySelector(".language").innerText);
window.localStorage.setItem("show-time", movieDetails.querySelector(".show-time").innerText);
window.localStorage.setItem("show-description", movieDetails.querySelector(".show-description").innerText);
window.localStorage.setItem("show-ua", movieDetails.querySelector(".show-ua").innerText);
window.localStorage.setItem("show-releasedate", movieDetails.querySelector(".show-releasedate").innerText);

let castCrew = Array.from(document.querySelectorAll(".item"));
castCrew.forEach((elm,id) => {
    window.localStorage.setItem(`img${id}`, elm.querySelector("img").src);
    window.localStorage.setItem(`name${id}`, elm.querySelector(".name").innerText);
});