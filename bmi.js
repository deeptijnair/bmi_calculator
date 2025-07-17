// document.getElementById("calculateBmi").disabled = true;
// document.getElementById("resetButton").disabled = true;

// if(document.getElementById("height").value !== "" && document.getElementById("weight").value !== "") {
//     document.getElementById("calculateBmi").disabled = false;
//     document.getElementById("resetButton").disabled = false;
// }


function calculateBMI(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");


    
    if (height <= 0 || weight <= 0) {
    result.innerHTML = "Please enter valid height and weight.";
    // return;

    }else if(height && weight) {
        let heightInMeters = height / 100; // Convert height from cm to meters
        let bmi = (weight) / (heightInMeters * heightInMeters);
        document.getElementById("bmiValue").innerHTML = bmi.toFixed(2);
 
    }

}

function resetForm(){
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("bmiValue").innerHTML = "";
    result.innerHTML = "Result:"

}