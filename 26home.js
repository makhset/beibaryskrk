
let footballers = ["Роналду", "Зидан", "Неймар", "Бензема"];

let zidaneIndex = footballers.indexOf("Зидан");
if (zidaneIndex !== -1) {
  footballers[zidaneIndex] = "Месси";
}

footballers.push("Мбаппе", "Салах");


if (footballers.length > 5) {
  console.log("көп");
} else {
  console.log("аз");
}

console.log(footballers);