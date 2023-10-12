import words from "../assets/words.json";

import { WORDS_AMOUNT } from "../consts";

enum CapitalOption {
  LOWER_CASE,
  UPPER_CASE,
  FIRST_UPPER,
}

function capitalizeWord(word: string, capitalOption: CapitalOption) {
  switch (capitalOption) {
    case CapitalOption.FIRST_UPPER:
      return word.charAt(0).toUpperCase() + word.slice(1);
    case CapitalOption.UPPER_CASE:
      return word.toUpperCase();
    case CapitalOption.LOWER_CASE:
      return word.toLowerCase();
  }
}

export function drawWords(
  capitalOption: CapitalOption = CapitalOption.FIRST_UPPER
) {
  const result = [];
  const wordsToDraw = [...words];

  for (let i = 0; i < WORDS_AMOUNT; i++) {
    const drawnWordIndex = Math.floor(Math.random() * wordsToDraw.length);
    const drawnWord = wordsToDraw.splice(drawnWordIndex, 1)[0];
    const capitalizedWord = capitalizeWord(drawnWord, capitalOption);
    result.push(capitalizedWord);
  }

  return result;
}

export function wordToLetters(word: string) {
  const result = [];
  const letters = word.split("");
  while (letters.length > 0) {
    const rand = Math.floor(Math.random() * letters.length);
    const letter = letters.splice(rand, 1)[0];
    result.push(letter);
  }
  return result;
}
