console.log("JavaScript code is running...");

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    console.log("Clicked 'Sign Up'");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    console.log("Clicked 'Sign In'");
});

const signinBtn = document.getElementById('signInButton').addEventListener('click', function() {
    console.log("Clicked 'SignInButton'");
    window.location.href = 'desertindex.html';
});

const signupBtn = document.getElementById('signUpButton').addEventListener('click', function() {
    console.log("Clicked 'SignUpButton'");
    window.location.href = 'desertindex.html';
});

document.getElementById("signInButton").addEventListener("click", function() {
    // Redirect to index2.html
    window.location.href = "desertindex.html";
});
