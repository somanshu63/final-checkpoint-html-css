let allMovies = Array.from(document.querySelectorAll("h3"));
let input = document.querySelector("input[type=search]");
let inputValue = "";
function handleInput(event) {
    let value = event.target.value;
    inputValue = value;
        inputValue = inputValue.toLowerCase();
        allMovies.map(elm => elm.innerText.toLowerCase()).filter((elm,id) => {
            if(elm == inputValue){
                window.open(allMovies[id].parentElement.href);
                console.log("hello")
            }
        });
}
input.addEventListener("keyup", handleInput);
