let result = document.getElementById("result");
let reset = document.getElementById("reset");
let error = document.getElementById("error");

result.style.display = "none";
error.style.display = "none";


function calculateResult() {
  let myname = document.getElementById("name").value.trim();
  let subject1 = document.getElementById("subject1").value;
  let subject2 = document.getElementById("subject2").value;
  let subject3 = document.getElementById("subject3").value;



  try {

    if (!myname || !subject1 || !subject2 || !subject3) {
      throw new Error("All Fields are Required.");
    };

    if(typeof myname !== "string" || !isNaN(myname)) {
      throw new Error("Enter Valid Name");
    };

    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3)) {
      throw new Error("Values must be in numbers.");
    };

    if (
      isNaN(subject1) || subject1 < 0 || subject1 > 100 ||
      isNaN(subject2) || subject2 < 0 || subject2 > 100 ||
      isNaN(subject3) || subject3 < 0 || subject3 > 100
      ) {
      throw new Error("Marks must be in numbers between 0 and 100.");
    };


    const total = Number (subject1) + Number (subject2) + Number (subject3);
    const avg = total / 3 ;



    const gradeassignment = function (avg){

      if(avg >= 90){
        return "A";
      }
      else if( avg >= 75 ){
        return "B";
      }
      else if( avg >= 50){
        return "C"
      }
      else if(avg < 50){
        return "Fail"
      }


    }
       const grades = gradeassignment(avg);

      const resultss = (grades) => {

        switch (grades) {
          case "Fail": return "Better Luck Next Time!";
          case "A": return "Excellent Performance!";
          case "B": return "Good Job!";
          case "C": return "Need Some Effort!";
        }
      };

      result.style.display = "block";


      result.innerHTML = `
      <strong>Name:</strong> ${myname} <br>
      <strong>Total Marks:</strong> ${total} <br>
      <strong>Average:</strong> ${avg.toFixed(2)} <br>
      <strong>Grade:</strong> ${grades} <br>
      <em>${resultss(grades)}</em>  
      `;

      error.style.display = "none";

  }
   catch (err) {
    error.textContent = err;
    error.style.display = "block";
    console.error(err);
    result.style.display = "none";
  };

    
};

reset.addEventListener("click", () => {
  document.getElementById("name").value = "";
  document.getElementById("subject1").value = "";
  document.getElementById("subject2").value = "";
  document.getElementById("subject3").value = "";
  error.style.display = "none";
  result.style.display = "none";
});

