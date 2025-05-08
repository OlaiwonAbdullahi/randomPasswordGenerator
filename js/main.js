function generatePassword() {
  const length = parseInt(document.getElementById("length").value);
  if (isNaN(length) || length < 4) {
    alert("Please enter a valid password length (minimum 4 characters).");
    return;
  }

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
  const allChars = upper + lower + numbers + symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randIndex];
  }

  document.getElementById("output").textContent = password;
  return password;
}
