// ----------------------------------------------------------Systematic calculator----------------------------------------------------------//
let input = document.getElementById('call');
let calcBtn = document.querySelectorAll('.calc');

let string = "";
let arr = Array.from(calcBtn);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'Ac'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'Del'){
            string = string.substring(0, string.length-1);
            input.value = string
        }

        else{
            string += e.target.innerHTML;
            input.value = string
        }
    })
})

//---------------------------Below is the BMI calculator-------------------//

const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
  bmiText.textContent = 0;
  bmiText.className = "";
  descText.textContent = "N/A";
}

function onFormSubmit(e) {
  e.preventDefault();

  const weight = parseFloat(form.weight.value);
  const height = parseFloat(form.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height");
    return;
  }

  const heightInMeters = height / 100; // cm -> m
  const bmi = weight / Math.pow(heightInMeters, 2);
  const desc = interpretBMI(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = desc;
  descText.innerHTML = `You are <strong>${desc}</strong>`;
}

function interpretBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi < 25) {
    return "healthy";
  } else if (bmi < 30) {
    return "overweight";
  } else {
    return "obese";
  }
}

//-----------------------------------Below is the love calculator-----------------------------------------------------//

document.getElementById("calculate").addEventListener("click", function() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;

  // Calculate a random love percentage (for demonstration purposes)
  const lovePercentage = Math.floor(Math.random() * 101);

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `${name1} and ${name2} have a ${lovePercentage}% love compatibility! ❤️`;
});

// -----------------------------------------Below is the tip calculator------------------------------------------------------//

document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('total');
  calculateButton.addEventListener('click', calculateTip);

  function calculateTip() {
      const billAmount = parseFloat(document.getElementById('billAmount').value);
      const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

      if (isNaN(billAmount) || isNaN(tipPercentage)) {
          alert('Please enter valid numbers for bill amount and tip percentage.');
          return;
      }

      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;

      document.getElementById('tipAmount').textContent = `$${tipAmount.toFixed(2)}`;
      document.getElementById('totalAmount').textContent = `$${totalAmount.toFixed(2)}`;
  }
});
