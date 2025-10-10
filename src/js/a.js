const btnSend = document.querySelector(".btn-send");
const inputs = document.querySelectorAll(".input");
const ERROR_CLASS = "required-field"; // Constante para a classe de erro

// --- Funções Auxiliares para Reutilização ---

/**
 * Cria e insere a mensagem de erro se ela não existir.
 * @param {HTMLElement} inputElement O input que precisa da mensagem de erro.
 */
function displayError(inputElement) {
    // 1. VERIFICA se o elemento de erro já existe logo após o input
    const existingError = inputElement.nextElementSibling;

    // Se o próximo elemento existe E tem a classe de erro, NÃO FAZ NADA (evita duplicação)
    if (existingError && existingError.classList.contains(ERROR_CLASS)) {
        return;
    }

    // 2. CRIA o novo <span>
    const requiredFieldSpan = document.createElement("span");
    requiredFieldSpan.classList.add(ERROR_CLASS); // Adiciona a classe de identificação
    requiredFieldSpan.textContent = "campo obrigatório";

    // 3. ESTILIZAÇÃO
    requiredFieldSpan.style.fontSize = "8px";
    requiredFieldSpan.style.color = "#F52E2E";
    requiredFieldSpan.style.display = "block"; // Ajuda na formatação
    requiredFieldSpan.style.marginTop = "4px";

    // 4. INSERE o <span> após o input
    inputElement.after(requiredFieldSpan);
}

/**
 * Remove a mensagem de erro se ela existir.
 * @param {HTMLElement} inputElement O input.
 */
function removeError(inputElement) {
    const existingError = inputElement.nextElementSibling;

    // Verifica se o próximo elemento existe E se é a nossa mensagem de erro
    if (existingError && existingError.classList.contains(ERROR_CLASS)) {
        existingError.remove(); // Remove o elemento <span> do DOM
    }
}

// --- Event Listener Principal ---

btnSend.addEventListener("click", (event) => {
    // É importante prevenir o comportamento padrão do formulário
    event.preventDefault();

    inputs.forEach((input) => {
        // Use .trim() para verificar se há algo além de espaços
        if (input.value.trim() === "") {
            // Se NÃO preenchido
            input.style.borderColor = "#F52E2E";
            displayError(input); // Exibe o erro (agora sem duplicar)

        } else {
            // Se preenchido
            input.style.borderColor = "#00C22B";
            removeError(input); // Remove o <span> para limpar a validação
        }
    });
});