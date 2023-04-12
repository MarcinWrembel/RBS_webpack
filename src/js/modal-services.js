const modalServices = document.querySelector(".modal-services");
const servicesList = document.querySelector(".services__list");
const modalParent = document.querySelector(".modal-services__popup");
const modalChildren = [...modalParent.children];

console.log(modalServices);
console.log(modalParent);
console.log(modalChildren);

const switchModalView = (e) => {

if (e.target.tagName === "BUTTON") {
    console.log(e);


}

};

const hideModal = () => {
  modalServices.classList.add("hidden");
};

modalServices.addEventListener("click", switchModalView);
window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    hideModal();
  }
});

servicesList.addEventListener("click", switchModalView);
