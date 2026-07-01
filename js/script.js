document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Demo login validation
  if (email === "training@jalaacademy.com" && password === "jobprogram") {
    alert("Login successful!");
    window.location.href = "home.html"; // redirect to homepage
  } else {
    alert("Invalid credentials. Try again.");
  }
});
