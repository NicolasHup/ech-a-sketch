
let setSize = document.querySelector('.btnSet');
let clearBtn = document.querySelector('.btnClear');

function populateContainer(size){
    let container = document.querySelector(".container");
    let squares = container.querySelectorAll('div');
    squares.forEach((div)=> div.remove());
    container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    // this will populate the main div with with the selected amount of divs

    let amount = size * size
    for (let i = 0; i < amount; i++){
        let square = document.createElement("div");
        square.style.border = "solid 1px rgb(167, 162, 162)";

        //changes the color<RANDOMLY> of the box when hover over the grid
        square.addEventListener('mouseenter', () =>{
            let R = Math.floor(Math.random() * 255);
            let G = Math.floor(Math.random() * 255);
            let B = Math.floor(Math.random() * 255);
            square.style.backgroundColor = `rgb(${R},${G},${B})`;
        })
        container.insertAdjacentElement("beforeend",square);
    }
}

populateContainer(16);

setSize.addEventListener('click', () => {
    let userSize = Number(prompt("What dimensions do you want for the new Grid?",16));

  while (userSize > 100){
    userSize = Number(prompt("Pick a smaller number and make sure is 100 or less.",16));
  }  
  populateContainer(userSize);
})

clearBtn.addEventListener('click', () => {
    populateContainer(16);
})

/*function changeSize(input){
    if (input >= 2 && input <= 100){
        populateContainer(input);
    } else {
        console.log("Too many sqaurs");
    }
}*/