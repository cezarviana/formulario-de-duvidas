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
            2.3.2.2. remover "campo obrigatório";
*/

const btnSend = document.querySelector(".btn-send");
const inputs = document.querySelectorAll(".input");

btnSend.addEventListener("click", (e) => {

    e.preventDefault();

    inputs.forEach((input) => {

        if (input.value) {

            input.classList.remove("error");
            input.classList.add("filled");
            input.nextElementSibling.classList.add("hide");

        } else {

            input.classList.remove("filled");
            input.classList.add("error");
            input.nextElementSibling.classList.remove("hide");

        }

    });
       
});
