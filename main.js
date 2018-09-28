(() => {

    var  form = document.forms[0],
        cards = document.getElementById("cards"),
        texto = document.querySelector(".form__caixa");

    form.addEventListener("submit", e => {
        var card1 = document.createElement("div");

        card1.classList.add("card");
        card1.innerText = texto.value;
        cards.appendChild(card1);

        texto.value = "";
    });

})();
