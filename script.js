let container = document.querySelector(".container");
container.style.border = "solid 1px rgb(167, 162, 162)";
container.style.gridTemplateColumns = "repeat(16 , 1fr)";
container.style.gridTemplateRows = "repeat(16 , 1fr)";

// this will populate the main div with 16x16 divs
for (let i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.style.border = "solid 1px rgb(167, 162, 162)";

    //changes the color of the box when hover over the grid
    square.addEventListener('mouseenter', () =>{
        square.style.backgroundColor = 'black';
    })
    container.insertAdjacentElement("beforeend",square);
}
