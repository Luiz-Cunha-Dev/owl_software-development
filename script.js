
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
