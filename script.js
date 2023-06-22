
(function getDarkMode() {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode == "ligth") {
        toggleMode()
    }
})();

function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const imgMain = document.querySelector("#logo-main")
    const imgHeader = document.querySelector("#logo-header")

    if (html.classList.contains("light")) {
        localStorage.setItem("darkMode", "ligth");
        imgMain?.setAttribute("src", "./assets/logo-main-light.png");
        imgHeader.setAttribute("src", "./assets/logo-header-light.png")
    } else {
        localStorage.setItem("darkMode", "dark");
        imgMain?.setAttribute("src", "./assets/logo-main.png")
        imgHeader.setAttribute("src", "./assets/logo-header.png")
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
}

function sendEmail(event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let topic = document.getElementById("topic").value;
    let message = document.getElementById("message").value;

    let formatedMessage = `
    <h1><b>Informações Enviadas<b/></h1>
    <br/>
    <b>Nome:</b> ${name}
    <br/>
    <br/>
    <b>Celular:</b> ${phone}
    <br/>
    <br/>
    <b>Mensagem:</b> ${message}
    <br/>
    <br/>
    <b>Agradecemos pelo seu contato.</b>
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "owlsoftwaredevelopment@gmail.com",
        Password : "C6B5F254BA29347668216F3C3F807C2E2AE5",
        To : email,
        From : "owlsoftwaredevelopment@gmail.com",
        Subject : topic,
        Body : formatedMessage
    }).then((res) => {
        alert("E-mail enviado com sucesso!");
        deleteInputsValues(event);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function deleteInputsValues(event) {
    event.preventDefault();
  
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("topic").value = "";
    document.getElementById("message").value = "";
  }
  