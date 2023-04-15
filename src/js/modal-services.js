const modalServices = document.querySelector(".modal-services");
const servicesList = document.querySelector(".services__list");
const modalParent = document.querySelector(".modal-services__popup");
const modalChildren = [...modalParent.children];

const switchModalView = (e) => {
  if (e.target.tagName === "BUTTON") {
    modalChildren.forEach((child) => {
      if (child.className.includes(e.target.id)) {
        modalServices.classList.toggle("hidden");
        child.classList.toggle("hidden");
      } else {
      }
    });
  }
};

const hideModal = () => {
  modalServices.classList.contains("hidden")
    ? ""
    : modalServices.classList.toggle("hidden");

  modalChildren.forEach((child) => {
    if (!child.className.includes("hidden")) {
      child.classList.toggle("hidden");
    }
  });
};

modalServices.addEventListener("click", switchModalView);

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" || e.key === "Esc") {
    hideModal();
  }
});

window.addEventListener("click", (e) => {
  if (e.target.className === "modal-services") {
    hideModal();
  }
});

servicesList.addEventListener("click", switchModalView);
