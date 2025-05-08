document.addEventListener("DOMContentLoaded", function () {
  const lengthInput = document.getElementById("length");
  const generateBtn = document.getElementById("generateBtn");
  const outputElement = document.getElementById("output");
  const copyBtn = document.getElementById("copyBtn");

  generateBtn.addEventListener("click", function () {
    const password = generatePassword();
    if (password) {
      outputElement.textContent = password;
    }
  });

  copyBtn.addEventListener("click", function () {
    const password = outputElement.textContent;
    if (password && password !== 'Click "Generate" to create password') {
      navigator.clipboard
        .writeText(password)
        .then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "Copied!";
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
          alert("Failed to copy password to clipboard");
        });
    }
  });

  function generatePassword() {
    const length = parseInt(lengthInput.value);

    if (isNaN(length) || length < 4 || length > 64) {
      alert(
        "Please enter a valid password length (between 4 and 64 characters)."
      );
      return null;
    }

    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    const allowedChars = upper + lower + numbers + symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randIndex];
    }

    const types = [
      { chars: upper, selected: true },
      { chars: lower, selected: true },
      { chars: numbers, selected: true },
      { chars: symbols, selected: true },
    ];

    const meetsRequirements = types.every((type) => {
      if (!type.selected) return true;
      return [...password].some((char) => type.chars.includes(char));
    });

    if (
      !meetsRequirements &&
      length >= types.filter((t) => t.selected).length
    ) {
      return generatePasswordWithRequirements(length, types);
    }

    return password;
  }

  function generatePasswordWithRequirements(length, types) {
    const selectedTypes = types.filter((type) => type.selected);
    let password = "";

    selectedTypes.forEach((type) => {
      const randIndex = Math.floor(Math.random() * type.chars.length);
      password += type.chars[randIndex];
    });

    let allChars = "";
    selectedTypes.forEach((type) => {
      allChars += type.chars;
    });

    for (let i = password.length; i < length; i++) {
      const randIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randIndex];
    }

    return shuffleString(password);
  }

  function shuffleString(str) {
    const array = [...str];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
  }
});
