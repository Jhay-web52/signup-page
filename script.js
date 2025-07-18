 document.addEventListener("DOMContentLoaded", function () {
            const form = document.getElementById("registrationForm");
            const submitBtn = document.getElementById("submitBtn");
            const submitText = document.getElementById("submitText");
            const successMessage = document.getElementById("successMessage");
        
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
        
                // Show loading state
                submitBtn.classList.add('loading');
                submitText.textContent = '';
                submitBtn.disabled = true;
        
                // Simulate processing time
                setTimeout(() => {
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
                    
                    // Show success message instead of alert
                    successMessage.style.display = 'block';
                    form.reset();
        
                    // Hide success message after 5 seconds
                    setTimeout(() => {
                        successMessage.style.display = 'none';
                    }, 5000);
        
                    // Reset button state
                    submitBtn.classList.remove('loading');
                    submitText.textContent = 'Create Account';
                    submitBtn.disabled = false;
                }, 1500);
            });
        });