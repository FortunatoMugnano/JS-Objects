console.log("logic js for functions and such");

const firstName = "Fortunato";
const lastName = "Mugnano";

function fullName() {
    const myName = `${firstName} ${lastName}`;
    console.log("My name is ", myName);
}

fullName();



const crayonColors = ["Green", "Blue", "Yellow"];
const fullBox = 4;

function addColor(newColor) {
    crayonColors.push(newColor);
    return crayonColors.length;
}

let crayonBoxNumber = addColor("Mulberry");
if (crayonBoxNumber < fullBox) {
    console.log("Pick more colors");
} else {
    console.log("Your box is full!");
}


console.log("crayonColorLenght", crayonColors.length);