/*
1. O fundo do formulário deve ser feito usando a
imagem em anexo na aula.
2. Ao clicar para enviar o formulário, se caso
algum campo não estiver preenchido, a borda
do input deve ficar vermelha e uma mensagem
de "campo obrigatório" deve aparecer embaixo
do campo que não foi preenchido, conforme o
figma.
    2.1. obter o botão, borda e aviso "campo obrigatório";
    2.2. addEventListener para o botão;
    2.3. Function
        2.3.1. Se não preenchido =>:
            2.3.1.1. borda vermelha;
            2.3.1.2. "campo obrigatório", uma única vez;
        2.3.2. Se preenchido =>:
            2.3.2.1. borda verde;
            2.3.2.2. remover "campo obrigatório"

*/

const btnSend = document.querySelector(".btn-send");
const inputs = document.querySelectorAll(".input");



btnSend.addEventListener("click", () => {

    inputs.forEach((input) => {

        const errorSpan = document.createElement("span");

        if (input.value === "") {

            displayError();



        } else if (input.value !== "") {

            removeError();

        }


        function removeError() {

            input.style.borderColor = "#00C22B";


            if (input.nextElementSibling.classList.contains("error-class")) {

                input.nextElementSibling.remove();

            }
        };


        function displayError() {

            if (!input.nextElementSibling.classList.contains("error-class")) {

                input.style.borderColor = "#F52E2E";

                errorSpan.classList.add("error-class");
                errorSpan.textContent = "campo obrigatório";
                errorSpan.style.fontSize = "8px";
                errorSpan.style.color = "#F52E2E";
                errorSpan.style.padding = "0";

                input.after(errorSpan);

            }
        };


    });

});
