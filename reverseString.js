function reverseString(string) {
  let reversed = '';
  for (let i = string.length - 1; i >= 0;) {
    reversed += string[i];
    --i;
  }
  return reversed;
}

module.exports = reverseString;