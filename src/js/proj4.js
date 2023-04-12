const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const changeBtn = document.querySelector(".change");
const resetBtn = document.querySelector(".reset");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let faranheit;
let celsius;

// Stopnie Fahrenheita na stopnie Celsjusza
// (°F - 32) x 5/9 =°C

// Stopnie Celsjusza na stopnie Fahrenheita
// (°C x 9/5) + 32 =°F

const swap = () => {
  if (one.textContent === "°C") {
    one.textContent = "°F";
    two.textContent = "°C";
    result.textContent = "";
  } else {
    one.textContent = "°C";
    two.textContent = "°F";
    result.textContent = "";
  }
};

const convToCelsius = () => {
  converter.value === "" ? (converter.value = 0) : converter.value;
  // (°F - 32) x 5/9 =°C
  celsius = ((converter.value - 32) * 5) / 9;
  // result.textContent = `${Math.round(celsius*100)/100} °C `
  result.textContent = `${converter.value} °F equals ${celsius.toFixed(1)} °C `;
  // Math.round((num + Number.EPSILON) * 100) / 100 - gives more accurate result to ensure things like 1.005 round correctly
  converter.value = "";
};

const convToFaranheit = () => {
  converter.value === "" ? (converter.value = 0) : converter.value;
  // (°C x 9/5) + 32 =°F
  faranheit = (converter.value * 9) / 5 + 32;
  // result.textContent = `${Math.round(celsius*100)/100} °F `
  result.textContent = `${converter.value} °C equals ${faranheit.toFixed(
    1
  )} °F `;
  converter.value = "";
};

const convert = () => {
  if (one.textContent === "°C") {
    convToFaranheit();
  } else {
    convToCelsius();
  }
};

const resetData = () => {
  result.textContent = "";
  converter.value = "";
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", convert);
resetBtn.addEventListener('click',resetData);
