export default function checkCard(cardNumber) {
  let sum = 0;
  const validLengths = [13, 14, 15, 16, 17, 18, 19];
  let alternate = false;
  for (let i = cardNumber.length - 1; i >= 0; i -= 1) {
    let num = parseInt(cardNumber[i]);
    if (alternate) {
      num *= 2;
      if (num > 9) {
        num = (num % 10) + 1;
      }
    }
    sum += num;
    alternate = !alternate;
  }
  return sum % 10 == 0 && validLengths.includes(cardNumber.length);
}
