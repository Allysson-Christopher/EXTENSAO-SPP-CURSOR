


function createButton(id, text) {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = text;
    return button;
}




function createPlaceholderForm() {
    const formContainer = document.createElement("div");
    formContainer.id = "placeholder-form";
    formContainer.style.display = "none";
    
    const title = document.createElement("h2");
    title.textContent = "Preencha os Campos";
    
    const form = document.createElement("form");
    form.id = "form-placeholders";
    
    const formFields = document.createElement("div");
    formFields.id = "form-fields";
    
    form.appendChild(formFields);
    form.appendChild(createButton("executar", "Enviar")).classList.add("button-submit");
    form.appendChild(createButton("cancel", "Cancelar")).classList.add("button-cancel");
    
    formContainer.appendChild(title);
    formContainer.appendChild(form);
    
    return formContainer;
}

// function createModal() {
//     const modal = document.createElement("div");
//     modal.id = "pieces-modal";
//     modal.classList.add("modal");
    
//     const content = document.createElement("div");
//     content.classList.add("modal-content");
    
//     const header = document.createElement("div");
//     header.classList.add("modal-header");
//     header.id = "pieces-modal-title";
//     header.textContent = "Escolha as Peças";
    
//     const body = document.createElement("div");
//     body.classList.add("modal-body");
//     body.id = "pieces-modal-body";
    
//     const form = document.createElement("form");
//     form.id = "pieces-form";
//     body.appendChild(form);
    
//     const footer = document.createElement("div");
//     footer.classList.add("modal-footer");
    
//     footer.appendChild(createButton("pieces-submit", "Confirmar"));
//     footer.appendChild(createButton("pieces-cancel", "Cancelar")).classList.add("button-cancel");
    
//     content.appendChild(header);
//     content.appendChild(body);
//     content.appendChild(footer);
    
//     modal.appendChild(content);
//     return modal;
// }


