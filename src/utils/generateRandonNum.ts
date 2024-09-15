export function generateRandomNumber() {
  // Generate a random number between 100,000 and 999,999 (inclusive)
  return Math.floor(Math.random() * 900000) + 100000;
}
