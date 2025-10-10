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
            2.3.1.2. "campo obrigatório";
        2.3.2. Se preenchido =>:
            2.3.2.1. borda verde;

*/

const btnSend = document.querySelector(".btn-send");
const inputs = document.querySelectorAll(".input");



btnSend.addEventListener("click", () => {

    inputs.forEach((input) => {


        if (input.value === "") {
            
            input.style.borderColor = "#F52E2E";
            requiredField()

            //rodar só 1 vez

        } else if (input.value !== "") {

            input.style.borderColor = "#00C22B"
            // requiredField.remove();
            //remove "campo obrigatório"

        } 

        function requiredField() {
            const requiredField = document.createElement("span");
            requiredField.classList.add("required-field");
            requiredField.textContent = "campo obrigatório";
            requiredField.style.fontSize = "8px";
            requiredField.style.color = "#F52E2E";
            input.after(requiredField);
        } return;
    });

});
