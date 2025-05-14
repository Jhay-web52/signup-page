document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting
  
      const firstName = document.getElementById("Firstname").value.trim();
      const lastName = document.getElementById("Lastname").value.trim();
      const gender = document.getElementById("gender").value;
      const dob = document.getElementById("dateofbirth").value;
      const weight = document.getElementById("weight").value;
      const height = document.getElementById("height").value;
      const activityLevel = document.getElementById("activitylevel").value;
      const password = document.getElementById("password").value;
  
      if (
        !firstName || !lastName || gender === "select" || !dob ||
        !weight || !height || activityLevel === "select" || !password
      ) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
      const formData = {
        firstName,
        lastName,
        gender,
        dob,
        weight: parseFloat(weight),
        height: parseFloat(height),
        activityLevel,
        password,
      };
  
      console.log("Form submitted successfully:", formData);
      alert("Registration successful!");
      form.reset();
    });
  });
  
  