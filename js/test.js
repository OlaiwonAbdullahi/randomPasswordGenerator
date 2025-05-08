// test.js

function runTests() {
  console.log("Running password generator tests...");

  // Test 1: Password length
  const password1 = generatePassword(12);
  console.assert(
    password1.length === 12,
    "Test 1 Failed: Password should be 12 characters"
  );

  // Test 2: Contains lowercase
  console.assert(
    /[a-z]/.test(password1),
    "Test 2 Failed: Password should contain lowercase letters"
  );

  // Test 3: Contains uppercase
  console.assert(
    /[A-Z]/.test(password1),
    "Test 3 Failed: Password should contain uppercase letters"
  );

  // Test 4: Contains numbers
  console.assert(
    /[0-9]/.test(password1),
    "Test 4 Failed: Password should contain numbers"
  );

  // Test 5: Contains special characters
  console.assert(
    /[\W_]/.test(password1),
    "Test 5 Failed: Password should contain special characters"
  );

  // Test 6: Password length test with different input
  const password2 = generatePassword(20);
  console.assert(
    password2.length === 20,
    "Test 6 Failed: Password should be 20 characters"
  );

  console.log("All tests completed.");
}

function generatePassword(length = 12) {
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

  return password;
}

runTests();
