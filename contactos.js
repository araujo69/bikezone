document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos do formulário
    });

    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        if (!validarEmail(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos do formulário
    });
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

function sendEmail() {
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  }
  emailjs.send('service_rt3yno9', 'template_w5jsxlf', params)
}

