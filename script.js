
// ===============================
// SCROLL SUAVE
// ===============================
function scrollToForm() {
  const section = document.getElementById("formSection");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ===============================
// FORMULÁRIO HOME
// ===============================
const homeForm = document.getElementById("form");
const homeFeedback = document.getElementById("feedback");

if (homeForm) {
  homeForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!nome || !email) {
      homeFeedback.textContent = "Preencha os campos ❌";
      homeFeedback.style.color = "red";
      return;
    }

    homeFeedback.textContent = "Cadastro realizado 🚀";
    homeFeedback.style.color = "#22c55e";

    homeForm.reset();
  });
}

// ===============================
// MODAL
// ===============================
let cursoSelecionado = "";

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const modalFeedback = document.getElementById("modalFeedback");

const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const closeModal = document.getElementById("closeModal");

function comprar(curso) {
  if (!modal) return;

  cursoSelecionado = curso;
  modal.style.display = "flex";
  modalText.textContent = `Deseja comprar ${curso}?`;
  modalFeedback.textContent = "";
}

if (confirmBtn) {
  confirmBtn.addEventListener("click", () => {
    modalFeedback.textContent = "Compra realizada 🚀";
    modalFeedback.style.color = "#22c55e";

    setTimeout(() => {
      modal.style.display = "none";
    }, 2000);
  });
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", () => {
    modalFeedback.textContent = "Compra cancelada ❌";
    modalFeedback.style.color = "red";

    setTimeout(() => {
      modal.style.display = "none";
    }, 1500);
  });
}

if (closeModal) {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

// BOTÕES DE COMPRA
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    comprar(this.dataset.curso);
  });
});

// ===============================
// FORMULÁRIO CONTATO
// ===============================
const contactForm = document.getElementById("contactForm");
const contactFeedback = document.getElementById("contactFeedback");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !email || !mensagem) {
      contactFeedback.textContent = "Preencha todos os campos ❌";
      contactFeedback.style.color = "red";
      return;
    }

    contactFeedback.textContent = "Mensagem enviada com sucesso 🚀";
    contactFeedback.style.color = "#22c55e";

    contactForm.reset();
  });
}
