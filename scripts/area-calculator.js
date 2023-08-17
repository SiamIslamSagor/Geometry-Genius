

function calculateTriangleArea(){
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueString = baseField.value;
    const baseValue = parseFloat(baseValueString);
    console.log(baseValue);

    // get triangle base value
    const heightField = document.getElementById('triangle-height');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);
    console.log(heightValue);

    // calculate area
    const area = 0.5 * baseValue * heightValue;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}


function calculateRectangleArea(){
    // get rectangle width 
    const widthField = document.getElementById('rectangle-width');
    const widthValueString = widthField.value;
    const widthValue = parseFloat(widthValueString);
    console.log(widthValue);

    // get rectangle length 
    const lengthField = document.getElementById('rectangle-length');
    const lengthValueString = lengthField.value;
    const lengthValue = parseFloat(lengthValueString);
    console.log(lengthValue);

    // calculate area
    const area = widthValue * lengthValue;

    // show rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}