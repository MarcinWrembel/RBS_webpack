import intlTelInput from "intl-tel-input";

const contactForm = document.querySelector(".contact__form");
const modal = document.querySelector(".contact");
const btnClose = document.querySelector(".btn--close");
const btnCreateMessage = document.querySelector(".footer__sent-btn");
const btnSend = document.querySelector(".btn--send");
const popup = document.querySelector(".contact__popup");

const company = document.querySelector("#company");
const person = document.querySelector("#fullName");
const telInput = document.querySelector("#phone");
const email = document.querySelector("#email");


const allInputs = [company, person, email];

//form validation
const showError = (input, msg) => {
  const inputParent = input.parentElement;

  const errMsg =
    input !== telInput
      ? inputParent.querySelector(".contact__error")
      : inputParent.nextElementSibling;

  console.log(errMsg);
  
  input.classList.add("contact__input--error");
  input.setAttribute("data", input);
  errMsg.classList.add("contact__error--visible");
  errMsg.textContent = msg;
};

const clearError = (input) => {
  const inputParent = input.parentElement;
  const errMsg = inputParent.querySelector(".contact__error");

  input.classList.remove("contact__input--error");
  errMsg.classList.remove("contact__error--visible");
  errMsg.textContent = "";
};

const checkMail = (email) => {
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (pattern.test(email.value)) {
    clearError(email);
  } else {
    showError(email, "Adres e-mail jest niepoprawny");
  }
};

const inputPhoneValidator = intlTelInput(telInput, {
  initialCountry: "Pole",
  preferredCountries: ["gb", "de"],
});

// console.log(inputPhoneValidator.getValidationError());

const checkErrors = () => {
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("contact__input--error") || telInput.classList.contains("contact__input--error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    popup.classList.add("show-popup");
    setTimeout(() => {
      modal.classList.add("hidden");
      popup.classList.remove("show-popup");
      contactForm.reset()
    }, 2000);
  }

  console.log(errorCount);
};

const checkLength = (input, min) => {
  // console.log(input.value.length);
  // console.log(input);
  if (input.value.length < min) {
    showError(input, ` Podaj prawidłowy nr tel.: np. + 48 ...`);
  }
};

const checkForm = () => {
  allInputs.forEach((el) => {
    if (el.value.trim() === "") {
      showError(el, "Pole obowiązkowe");
    } else {
      clearError(el);
    }
  });
};
//----------------

const closeModal = (e) => {
  e.preventDefault();
  modal.classList.add("hidden");
};

const openModal = () => {
  modal.classList.remove("hidden");
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  checkForm();
  checkLength(telInput, 12);
  checkMail(email);
  checkErrors();
});

btnClose.addEventListener("click", closeModal);
btnCreateMessage.addEventListener("click", openModal);
