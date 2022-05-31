let container = document.getElementById('Converter');

//take the number from the form and the type of it 
let myForm = document.getElementById("form")
myForm.addEventListener('submit', convert)
function convert(event) {
    event.preventDefault();
    let numAdded = event.target.num.value;
    let x = document.getElementById("option").value;
    // console.log(x);
    switch (x) {
        case "1":
            convertDecToAll(numAdded);
            break;
        case "2":
            convertHexToAll(numAdded);
            break;
        case "3":
            convertOcatalToAll(numAdded);
            break;
        case "4":
            convertBinaryToAll(numAdded);
            break;
    }
}

// convert from Dec To All
function convertDecToAll(num) {
    //console.log(num);
    num = parseInt(num, 10)
    //console.log(num);
    answer = `${"Dec to: " + "Binary: " + num.toString(2) + " Hex: " + num.toString(16) +
        " Octal: " + num.toString(8)}`;
    print(answer);
}
// convert from Hex To All
function convertHexToAll(num) {
    //console.log(num);
    num = parseInt(num, 16)
    //console.log(num);
    answer = `${"Hex to: " + "Binary: " + num.toString(2) + " Dec: " + num.toString(10) +
        " Octal: " + num.toString(8)}`;
    print(answer);
}
// convert from octal To All
function convertOcatalToAll(num) {
    //console.log(num);
    num = parseInt(num, 8)
    //console.log(num);
    answer = `${"Ocatal to: " + "Binary: " + num.toString(2) + " Dec: " + num.toString(10) +
        " hex: " + num.toString(16)}`;
    print(answer);
}
// convert from binary To All
function convertBinaryToAll(num) {
    // console.log(num);
    num = parseInt(num, 2)
    // console.log(num);
    answer = `${"Binary to: " + "Hex: " + num.toString(16) + " Dec: " + num.toString(10) +
        " Octal: " + num.toString(8)}`;
    print(answer);
}

// print the answer
function print(ans) {
    document.getElementById('test1').innerHTML = ans;
}
