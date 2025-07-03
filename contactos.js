function sendEmail() {
  let params = {
    name: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    message: document.getElementById('mensagem').value,
  }
  emailjs.send('service_rt3yno9', 'template_w5jsxlf', params)
}

