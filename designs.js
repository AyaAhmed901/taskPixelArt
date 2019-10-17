// Select color input
// Select size input
var canvas = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

// When size is submitted by the user, call makeGrid()

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};

function makeGrid() {
    // Your code goes here!
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
    for (var i=0; i<height.value; i++){
        const row = canvas.insertRow(i);
        for (var j=0; j<width.value; j++){
            const cell = row.insertCell(j);
            cell.addEventListener("click", addColor);
        }
    }
    
}


function addColor () {
    
        this.setAttribute("style","background-color:"+ color.value);
    
}
