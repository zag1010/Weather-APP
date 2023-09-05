ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 3000,
    delay: 200
});

ScrollReveal().reveal('.sign-up-content-image img', { origin: 'left' });
ScrollReveal().reveal('.sign-up-content-heading h3', { origin: 'top' });


ScrollReveal({
    reset: true,
    distance: '900px',
    duration: 5000,
    delay: 500
});

ScrollReveal().reveal('.sign-up-here', { origin: 'right' });

// --------------------------------------------------------

const signupForm = document.querySelector("#signup-form");
const errorMessage = document.querySelector(".message");
const passwordInput = document.getElementById("password");

signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    try {
        const response = await fetch("/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            errorMessage.textContent = "User account created successfully";
            errorMessage.style.color = "green";
            // window.location.href = '/login'
        } 
        
        else {
        // Signup failed
            errorMessage.textContent = data.message;
            errorMessage.style.color = "red";
        }
        
    } catch (error) {
        console.error("An error occurred:", error);
        errorMessage.textContent =
        "An error occurred while processing your request.";
        errorMessage.style.color = "red";
    }
});
