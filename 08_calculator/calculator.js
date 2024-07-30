
// display selected numbers in screen
// build function for each type of operation (register numbers, operation type, equal)
// display result in screen
// reset screen

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

const equal = document.querySelector("#equal");
const reset = document.querySelector("#reset");

let operator = "";
let previousNumber = "";
let currentNumber = "";
let result = 0;


// function to display formula

numbers.forEach(function (btn) {
  btn.addEventListener("click", function() {

    // display formula
    let displayFormula = document.querySelector(".formula");
    displayFormula.append(btn.textContent)

    // create currentNumber
    currentNumber = currentNumber + btn.textContent
    console.log("currentNumber: " + currentNumber)
    })
  })



// function defining operators

operators.forEach(function (btn) {
    btn.addEventListener("click", function() {
    let displayFormula = document.querySelector(".formula");
    displayFormula.append(" " + btn.textContent + " ");

    // set operator value
    operator = btn.textContent;

    // if previousNumber is not empty, keep the result

    if (previousNumber != "") {
      currentNumber = "";
    }
    else {
      previousNumber = currentNumber;
      currentNumber = "";
    }


    // console logs
    console.log("operator: " + operator);
    console.log("previousNumber: " + previousNumber);
    })
  })



// set equal action

equal.addEventListener("click", function() {
  
  // set calculation logic for each operator

  if (operator == "+") {
    result = Number(previousNumber) + Number(currentNumber);
  }
  else if (operator == "-") {
    result = Number(previousNumber) - Number(currentNumber);
  }
  else if (operator == "x") {
    result = Number(previousNumber) * Number(currentNumber);
  }
  else {
    result = Number(previousNumber) / Number(currentNumber);
  }

  // display result

  let displayResult = document.querySelector(".result");
  displayResult.innerHTML = ("" + result);


  // set previous as result and empty currentNumber

  previousNumber = result.toString();
  currentNumber = "";

  console.log("result: " + result)
  console.log("previousNumber: " + previousNumber)

})



// set reset action

reset.addEventListener(("click"), function() {
  let displayResult = document.querySelector(".result");
  let displayFormula = document.querySelector(".formula");

  previousNumber = "";
  currentNumber = "";
  displayFormula.innerHTML = "";
  displayResult.innerHTML = "0";

})






const add = function() {
	
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

/* // Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}; */
