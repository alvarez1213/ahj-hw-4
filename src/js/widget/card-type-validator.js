const cardTypes = {
  amex: { prefix: "3", cardLength: [15] },
  diners: {
    prefix: "3",
    cardLength: [14],
  },
  discover: { prefix: "6", lengthRange: { min: 16, max: 19 } },
  jcb: { prefix: "3", lengthRange: { min: 16, max: 19 } },
  visa: { prefix: "4", lengthRange: { min: 13, max: 19 } },
  mastercard: {
    prefixes: ["5", "22", "23", "24", "25", "26", "27"],
    cardLength: [16],
  },
  mir: { prefix: "2", lengthRange: { min: 16, max: 19 } },
};

export default function getCardType(cardNumber) {
  for (const cardType in cardTypes) {
    const cardTypeInfo = cardTypes[cardType];
    let lengthCheck = false;

    if (cardTypeInfo.cardLength) {
      for (const l of cardTypeInfo.cardLength) {
        if (cardNumber.length === l) {
          lengthCheck = true;
        }
      }
    }  
    if (cardTypeInfo.lengthRange) {
      if (cardNumber.length >= cardTypeInfo.lengthRange.min && cardNumber.length <= cardTypeInfo.lengthRange.max) {
        lengthCheck = true;
      }
    }
    
    if (Array.isArray(cardTypeInfo.prefixes)) {
      for (const p of cardTypeInfo.prefixes) {
        if (cardNumber.startsWith(p)) {
          if (lengthCheck) {
            return cardType;
          }
        }
      }
    } 
    
    if (cardTypeInfo.prefix && cardNumber.startsWith(cardTypeInfo.prefix)) {
      if (lengthCheck) {
        return cardType;
      }
    }
  }
  
  return "Unknown";
}
