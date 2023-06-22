let count = 0;
let increament = document.getElementById("increament");
let saveData = document.getElementById("save-data");
function increamentValue() {
  count += 1;
  increament.innerText = count;
}

function save() {
  saveData.innerText += count + "-";
  count = 0
  increament.innerText = count
}

//Welcome message by string

// function great(){
//   let getData = document.getElementById('greating')
//   getData.innerText += "Welcome Rukavendra ❤️"
// }