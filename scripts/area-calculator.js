function calculateTriangleArea() {
  // get triangle base value
  const baseField = document.getElementById("triangle-base");
  const baseValueString = baseField.value;
  const baseValue = parseFloat(baseValueString);

  // get triangle base value
  const heightField = document.getElementById("triangle-height");
  const heightValueString = heightField.value;
  const heightValue = parseFloat(heightValueString);

  // calculate area
  const area = 0.5 * baseValue * heightValue;

  if (isNaN(baseValue) || isNaN(heightValue)) {
    alert("Please insert a number");
    return;
  }

  // show triangle area
  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = area;

  // add to calculation entry
  addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
  // get rectangle width
  const widthField = document.getElementById("rectangle-width");
  const widthValueString = widthField.value;
  const widthValue = parseFloat(widthValueString);

  // get rectangle length
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueString = lengthField.value;
  const lengthValue = parseFloat(lengthValueString);

  // calculate area
  const area = widthValue * lengthValue;

  if (isNaN(widthValue) || isNaN(lengthValue)) {
    alert("Please insert a number");
    return;
  }

  // show rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
  
  // add to calculation entry
  addToCalculationEntry('Rectangle', area);
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");

  const height = getInputValue("parallelogram-height");

  const area = base * height;

  if (isNaN(base) || isNaN(height)) {
    alert("Please insert a number");
    return;
  }

  setElementInnerText("parallelogram-area", area);

  // add to calculation entry
  addToCalculationEntry('Parallelogram', area);
}

function calculateEllipseArea() {
  const yAxis = getInputValue("ellipse-y-axis");

  const xAxis = getInputValue("ellipse-x-axis");

  const area = Math.PI * yAxis * xAxis;

  const areaInTowDecimal = area.toFixed(2);

  if (isNaN(yAxis) || isNaN(xAxis)) {
    alert("Please insert a number");
    return;
  }
  setElementInnerText("ellipse-area", areaInTowDecimal);

  // add to calculation entry
  addToCalculationEntry('Ellipse', areaInTowDecimal);
}





// FUNCTION:

// reusable get input value field in number
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  return inputValue;
}

// reusable set span, p, div, etc text
function setElementInnerText(elementId, area) {
  const element = document.getElementById(elementId);
  element.innerText = area;
}



// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set innerHTML, it could be dynamic template string
 * 5. append the created element as a child of the parent
 * 6. 
 * **/
function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `
    ${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = 'btn btn-sm btn-success mx-2'>Convert</button>
    `;

    calculationEntry.appendChild(p);
}






// Data validation
/* 
1. set the proper type of the input field. (number, data, email)
2. check type using typeof
3. NaN means: Not a Number. isNaN() is checking whether the input is not a number or not
*/


