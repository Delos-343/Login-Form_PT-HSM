const passwordInput = document.querySelector("#password-input");

const togglePasswordButton = document.querySelector("#toggle-password");

togglePasswordButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  }
  else if (passwordInput.type === "text") {
    passwordInput.type = "password";
  }
});