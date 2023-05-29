const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");

const inputTypeElement = document.getElementById("input-type");
const outputTypeElement = document.getElementById("output-type"); 

inputElement.addEventListener("keyup", calculateResult);
inputTypeElement.addEventListener("change", calculateResult);
outputTypeElement.addEventListener("change", calculateResult);



function calculateResult(){

    debugger;

    let inputType = inputTypeElement.value;
    let outputType = outputTypeElement.value;

    let input = inputElement.value;

    if(input == 0 || input === ""){
        outputElement.value = Number(input);
    }

    else if(inputType === outputType){
        outputElement.value = Number(input);
    }
 
    else if((inputType === "ton") && (outputType === "pound")){
        outputElement.value = tonToPound(input);
    }

    else if((inputType === "pound") && (outputType === "ton")){
        outputElement.value = 1 / tonToPound(input);
    }

    else if((inputType === "pound") && (outputType === "ounce")){
        outputElement.value = poundToOunce(input);
    }

    else if((inputType === "ounce") && (outputType === "pound")){
        outputElement.value = 1 / poundToOunce(input);
    }
    
    else if((inputType === "ton") && (outputType === "ounce")){
        outputElement.value = tonToOunce(input);
    }
    
    else if((inputType === "ounce") && (outputType === "ton")){
        outputElement.value = 1 / tonToOunce(input);
    }
}

function tonToPound(input){
    return Number(input) * 2000;
}

function poundToOunce(input){
    return Number(input) * 16;
}

function tonToOunce(input){
    return Number(input) * 16 * 2000;
}