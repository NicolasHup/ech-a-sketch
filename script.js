
let setSize = document.querySelector('button');

function populateContainer(size){
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    container.style.border = "solid 1px rgb(167, 162, 162)";
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    // this will populate the main div with with the selected amount of divs

    let amount = size * size
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.style.border = "solid 1px rgb(167, 162, 162)";

        //changes the color of the box when hover over the grid
        square.addEventListener('mouseenter', () =>{
            square.style.backgroundColor = 'black';
        })
        container.insertAdjacentElement("beforeend",square);
    }
}

populateContainer(16);

setSize.addEventListener('click', () => {
    const userSize = prompt("What dimensions do you want for the new Grid?");
    populateContainer(userSize);
})

/*function changeSize(input){
    if (input >= 2 && input <= 100){
        populateContainer(input);
    } else {
        console.log("Too many sqaurs");
    }
}*/