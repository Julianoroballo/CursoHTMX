document.addEventListener("DOMContentLoaded", function () {
  // 1. Widget de Chat — abre uma mensagem ao clicar
  const chatWidget = document.querySelector(".chat-widget");
  if (chatWidget) {
    chatWidget.addEventListener("click", () => {
      alert("Olá! Como podemos te ajudar hoje?");
    });
  }

  // 2. Scroll suave para seções internas
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Validação simples do formulário de agendamento
  const agendamentoForm = document.querySelector("#booking-form-step form");
  if (agendamentoForm) {
    agendamentoForm.addEventListener("submit", function (e) {
      const servico = document.getElementById("servico");
      if (!servico.value) {
        e.preventDefault();
        alert("Por favor, selecione um serviço antes de continuar.");
      } else {
        localStorage.setItem("servicoSelecionado", servico.value);
      }
    });
  }

  // 4. Mostrar serviço salvo no console (pode ser usado em outro passo)
  const servicoSalvo = localStorage.getItem("servicoSelecionado");
  if (servicoSalvo) {
    console.log("Serviço previamente selecionado:", servicoSalvo);
  }
});
