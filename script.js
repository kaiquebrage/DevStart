function scrollToForm() {
  document.getElementById("formSection").scrollIntoView({
    behavior: "smooth"
  });
}

const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    feedback.textContent = "Preencha os campos ❌";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Cadastro realizado 🚀";
  feedback.style.color = "#22c55e";
  form.reset();
});

// MODAL
let cursoSelecionado = "";

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalFeedback = document.getElementById("modalFeedback");

const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const closeModal = document.getElementById("closeModal");

function comprar(curso) {
  cursoSelecionado = curso;
  modal.style.display = "flex";
  modalText.textContent = `Deseja comprar ${curso}?`;
  modalFeedback.textContent = "";
}

confirmBtn.addEventListener("click", () => {
  modalFeedback.textContent = "Compra realizada 🚀";
  modalFeedback.style.color = "#22c55e";

  setTimeout(() => {
    modal.style.display = "none";
  }, 2000);
});

cancelBtn.addEventListener("click", () => {
  modalFeedback.textContent = "Compra cancelada ❌";
  modalFeedback.style.color = "red";

  setTimeout(() => {
    modal.style.display = "none";
  }, 1500);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    comprar(this.dataset.curso);
  });
});