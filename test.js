 const the_Calculation =[];


function button_click(value){

if ((value >= 0 && value < 10) || value === '*' || value === '/' || value === '-' || value === '+') {
   the_Calculation.push(value);
  console.log(the_Calculation);


  const myDisplay = document.getElementById('calculator_Display');

myDisplay.textContent = the_Calculation.join('') ;

 }
else if (value === 'DEL') {
    the_Calculation.pop();

    console.log(the_Calculation);


      const myDisplay = document.getElementById('calculator_Display');

myDisplay.textContent = the_Calculation.join('') ;
 }



}

function calculate() {


  if (the_Calculation.length === 0){
              const myDisplay = document.getElementById('calculator_Display');

myDisplay.textContent = 'READY' ;

  }
  else{
       // 1. Join array ['1', '+', '2'] into a single string "1+2"
       const equation = the_Calculation.join('');
    
    // 2. Use eval() to solve the string as math
    const result = eval(equation);
    
    console.log("Equation:", equation);
    console.log("Result:", result);

    the_Calculation.length = 0;


          const myDisplay = document.getElementById('calculator_Display');

myDisplay.textContent = `Result:${result}` ;

  }
 
 
}