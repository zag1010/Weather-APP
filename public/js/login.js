ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 3000,
    delay: 200
});

ScrollReveal().reveal('.login-content-image img', { origin: 'top' });
ScrollReveal().reveal('.login-content-topic p span', { origin: 'bottom' });
ScrollReveal().reveal('.login-content-heading h3', { origin: 'top' });


ScrollReveal({
    reset: true,
    distance: '900px',
    duration: 5000,
    delay: 500
});

ScrollReveal().reveal('.login-form', { origin: 'right' });

// -----------------------------------------------------------------------------------
const loginForm = document.getElementById("loglogin");
const passwordInput = document.getElementById('password')
const submitButton = document.getElementById("submit");
const errorMessage = document.querySelector(".message")

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      submitButton.disabled = true;

      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, redirect to home page or perform other actions
        errorMessage.textContent = "login Successful";
        errorMessage.style.color = "green";
        window.location.href = './public/page4.html'

      } else {
        // Login failed, display error message
        errorMessage.textContent = data.message;
        errorMessage.style.color = "red";
      }
    } catch (error) {
        console.error("An error occurred:", error);
        errorMessage.textContent = "An error occurred while processing your request.";
        errorMessage.style.color = "red";
      } finally {
          submitButton.disabled = false;
        }
});

