let result = document.getElementById("result");
let resetButton = document.getElementById("resetButton");

result.style.display = "none";

function calculateBMI() {
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);
  document.getElementById("bmiValue").innerHTML =
    "<span style='color:red'>Please enter valid height and weight.</span>";

  if (height <= 0 || weight <= 0) {
    document.getElementById("bmiValue").innerHTML = " ";
    result.innerHTML = "Please enter valid height and weight.";
    // return;
  } else if (height && weight) {
    let heightInMeters = height / 100; // Convert height from cm to meters
    let bmi = weight / (heightInMeters * heightInMeters);
    result.style.display = "block";
    document.getElementById("bmiValue").innerHTML = bmi.toFixed(2);
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  }
}

function resetForm() {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("bmiValue").innerHTML = "";
  resetButton.style.display = "none";
  result.style.display = "none";
}
