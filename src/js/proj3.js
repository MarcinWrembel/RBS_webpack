const pass = document.querySelector("#password");
const p = document.querySelector(".passinfo");
const letters = /[a-z]/i; // i: It means that both A/a are possible.
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const showMsg = () => {
  if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers) &&
    pass.value.match(special)
  ) {
    p.textContent = "Masz bardzo dobre hasło 💪";
    p.style.color = "lime";
  } else if (
    pass.value.length > minValue &&
    pass.value.match(letters) &&
    pass.value.match(numbers)
  ) {
    p.textContent = "Masz dobre hasło 🤝";
    p.style.color = "gold";
  } else {
    p.textContent = "Twoje hasło jest słabe ";
    p.style.color = "tomato";
  }
};

const checkPassword = () => {
    if (pass.value !== "") {
        showMsg()
    } else {
        p.textContent = "Nie podałeś hasła ...";
        p.style.color = "grey"; 
    }
};

pass.addEventListener("keyup", checkPassword);
