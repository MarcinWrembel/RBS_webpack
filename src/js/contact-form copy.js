import intlTelInput from "intl-tel-input";

const contactForm = document.querySelector(".contact__form");
const modal = document.querySelector(".contact");
const btnClose = document.querySelector(".btn--close");
const btnCreateMessage = document.querySelector(".footer__sent-btn");
const btnSend = document.querySelector(".btn--send");
const telInput = document.querySelector("#phone");
const popup = document.querySelector(".contact__popup");

//get all form elements
const getInputElements = () => {
  const formElements = Array.from(contactForm.elements);

  return formElements.reduce((arrNew, el) => {
    if (el.tagName === "INPUT") {
      arrNew.push(el);
    }
    return arrNew;
  }, []);
};

const allInputs = getInputElements();

//form validation

const showError = (input, msg) => {
  const inputParent = input.parentElement;
  const errMsg = inputParent.querySelector(".contact__error");
console.log(errMsg);
  input.classList.add("contact__input--error");
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

const iti = intlTelInput(telInput, {
  initialCountry: "Pole",
  preferredCountries: ["gb", "de"],
});

console.log(iti.getValidationError());

const checkErrors = () => {
  let errorCount = 0;

  allInputs.forEach((el) => {
    if (el.classList.contains("contact__input--error")) {
      errorCount++;
    }
  });
  if (errorCount === 0) {
    popup.classList.add("show-popup");
  }
};

const checkLength = (input, min) => {
  if (input.value.length < min) {
    showError(input, ` Podaj prawidłowy nr: + 48 ...`);
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
