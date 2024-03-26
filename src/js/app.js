import checkCard from "./widget/card-number-validator";
import getCardType from "./widget/card-type-validator";

const btn = document.querySelector(".btn");
const input = document.querySelector(".text-field");
const success = document.querySelector(".success");
const fail = document.querySelector(".fail");

const cardsIcons = document.querySelector(".card-icons");
const cards = [...cardsIcons.querySelectorAll(".card-img")];

btn.addEventListener("click", () => {
  if (checkCard(input.value)) {
    success.classList.remove("hide");
    if (!fail.classList.contains("hide")) {
      fail.classList.add("hide");
    }
  } else {
    fail.classList.remove("hide");
    if (!success.classList.contains("hide")) {
      success.classList.add("hide");
    }
  }
});

input.addEventListener("input", () => {
  const cardType = getCardType(input.value);
  if (cardType !== "Unknown") {
    for (const card of cards) {
      if (card.classList.contains("grey-background")) {
        continue;
      } else {
        card.classList.add("grey-background");
      }
    }
    const currentCard = document.querySelector(`#card-${cardType}`);
    currentCard.classList.remove("grey-background");
  } else {
    for (const card of cards) {
      if (card.classList.contains("grey-background")) {
        card.classList.remove("grey-background");
      } else {
        continue;
      }
    }
  }
});
