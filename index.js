const FORCE_WIN = false;
const USE_FIXED_WINNING_NUMBERS = true;
const FIXED_WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
const WINNING_NUMBERS_COUNT = 6;
const EMAIL_REGEX = /^(?=.{9,29}$)[^@\s]+@[^@\s]+\.[a-zA-Z]{2,3}$/;

const resultElement = document.getElementById("result");
const lotoForm = document.getElementById("loto-form");

const isEmailValid = (email) => {
  return EMAIL_REGEX.test(email);
};

const areLotoNumbersValid = (lotoNumbers) => {
  return (
    Array.isArray(lotoNumbers) &&
    lotoNumbers.length === WINNING_NUMBERS_COUNT &&
    lotoNumbers.every((number) => Number.isFinite(number))
  );
};

const generateWinningNumbers = (playerNumbers) => {
  if (FORCE_WIN) {
    return [...playerNumbers];
  }

  if (USE_FIXED_WINNING_NUMBERS) {
    return [...FIXED_WINNING_NUMBERS];
  }

  return Array.from({ length: WINNING_NUMBERS_COUNT }, () => {
    return Math.floor(Math.random() * 49) + 1;
  });
};

const hasWinningGrid = (playerNumbers, winningNumbers) => {
  return playerNumbers.every((number) => winningNumbers.includes(number));
};

const checkLoto = (firstname, lastname, email, lotoNumbers) => {
  if (firstname.trim() === "") {
    return "Veuillez fournir un prénom";
  }

  if (lastname.trim() === "") {
    return "Veuillez fournir un nom";
  }

  if (email.trim() === "") {
    return "Veuillez fournir un email";
  }

  if (!isEmailValid(email.trim())) {
    return "Votre email n'est pas valide";
  }

  if (!areLotoNumbersValid(lotoNumbers)) {
    return "Veuillez fournir 6 nombres valides";
  }

  const winningNumbers = generateWinningNumbers(lotoNumbers);
  const isWinningGrid = hasWinningGrid(lotoNumbers, winningNumbers);

  if (isWinningGrid) {
    return "Félicitations, vous avez gagné 1 million!!!!!";
  }

  return `Désolé, vous avez perdu, les nombres gagnants sont: ${winningNumbers.join(", ")}`;
};

const getLotoNumbersFromForm = () => {
  const lotoNumberInputs = document.querySelectorAll('input[name="loto-number"]');

  return Array.from(lotoNumberInputs, (input) => {
    if (input.value.trim() === "") {
      return Number.NaN;
    }

    return Number(input.value);
  });
};

lotoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const lotoNumbers = getLotoNumbersFromForm();

  const message = checkLoto(firstname, lastname, email, lotoNumbers);

  resultElement.textContent = message;
});
