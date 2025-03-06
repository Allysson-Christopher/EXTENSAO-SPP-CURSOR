function createPiecesModal(selectedKitName, kits, status) {
  console.log("Kit no modal:", selectedKitName);
  console.log("Kits disponíveis:", kits);

  // Reseta o modal caso já exista para limpar os checkbox previamente marcados
  const existingModal = document.getElementById("pieces-modal");
  if (existingModal) {
    existingModal.remove();
  }
  
  // Garante que kits[selectedKitName] esteja definido
  if (!kits[selectedKitName]) {
    kits[selectedKitName] = [];
  }

  const modal = document.createElement("div");
  modal.id = "pieces-modal";
  modal.classList.add("modal");

  const content = document.createElement("div");
  content.classList.add("modal-content");

  const header = document.createElement("div");
  header.classList.add("modal-header");
  header.id = "pieces-modal-title";
  header.textContent = "Escolha as Peças";

  const body = document.createElement("div");
  body.classList.add("modal-body");
  body.id = "pieces-modal-body";

  const form = document.createElement("form");
  form.id = "pieces-form";

  // Usa as peças já salvas para marcar os checkboxes
  const selectedKitPieces = kits[selectedKitName] || [];
  console.log("Peças originais do kit:", selectedKitPieces);

  // Supondo que 'pecas' seja uma lista global de peças disponíveis
  pecas.forEach((peca) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `peca-${peca.id}`;
    checkbox.name = "peças";
    checkbox.value = peca.id;

    // Marca as peças que já estão no kit
    if (selectedKitPieces.includes(peca.id)) {
      checkbox.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = `peca-${peca.id}`;
    label.textContent = peca.nomePeca;
    const br = document.createElement("br");

    form.appendChild(checkbox);
    form.appendChild(label);
    form.appendChild(br);
  });

  body.appendChild(form);

  const footer = document.createElement("div");
  footer.classList.add("modal-footer");

  const submitButton = document.createElement("button");
  submitButton.id = "pieces-submit";
  submitButton.textContent = "Confirmar";
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const selectedPieces = Array.from(form.querySelectorAll("input[name='peças']:checked"))
      .map(checkbox => parseInt(checkbox.value));
    console.log("Peças totais selecionadas no modal:", selectedPieces);

    // Para o cálculo, usamos as peças atuais do kit (que podem ser as originais ou modificadas)
    const originalPieces = kits[selectedKitName] || [];
    const newPieces = selectedPieces.filter(id => !originalPieces.includes(id));
    const removedPieces = originalPieces.filter(id => !selectedPieces.includes(id));

    let msg = "";
    if (newPieces.length > 0) {
      const addedPiecesNames = newPieces.map(id => pecas.find(peca => peca.id === id).nomePeca);
      if (selectedKitName === "criar-kit") {
        msg += `Novo kit criado com peças: ${addedPiecesNames.join(", ")}. `;
      } else {
        msg += `Peças adicionadas ao kit ${selectedKitName}: ${addedPiecesNames.join(", ")}. `;
      }
    }
    if (removedPieces.length > 0) {
      const removedPiecesNames = removedPieces.map(id => pecas.find(peca => peca.id === id).nomePeca);
      if (selectedKitName === "criar-kit") {
        msg += `Peças removidas do kit criar-kit: ${removedPiecesNames.join(", ")}.`;
      } else {
        msg += `Peças removidas do kit ${selectedKitName}: ${removedPiecesNames.join(", ")}.`;
      }
    }
    if (!msg) {
      msg = `${selectedKitName} selecionado. Clique em Iniciar para preencher algumas informações. Se precisar, você pode adicionar mais peças ao kit.`;
    }
    status.textContent = msg;

    // Atualiza o estado do kit com as peças selecionadas
    kits[selectedKitName] = selectedPieces;

    modal.style.display = "none";
  });


  const cancelButton = document.createElement("button");
  cancelButton.id = "pieces-cancel";
  cancelButton.classList.add("button-cancel");
  cancelButton.textContent = "Cancelar";
  cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "none";
  });

  footer.appendChild(submitButton);
  footer.appendChild(cancelButton);
  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);
  modal.appendChild(content);
  document.body.appendChild(modal);
  return modal;

}
