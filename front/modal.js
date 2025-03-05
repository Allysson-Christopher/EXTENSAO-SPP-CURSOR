function createPiecesModal(selectedKitName, kits, status) {
    console.log("Kit no modal:", selectedKitName);
    console.log("Kits disponíveis:", kits);
  
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
  
    // Define as peças originais do kit selecionado
    const selectedKitPieces = selectedKitName && selectedKitName !== "criar-kit" 
      ? kits[selectedKitName] || [] 
      : [];
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
  
      if (selectedKitName === "criar-kit") {
        console.log("Novo kit criado com peças:", selectedPieces);
        status.textContent = "Novo kit criado. Defina um nome para o kit.";
      } else {
        const originalPieces = kits[selectedKitName] || [];
        console.log("Peças originais do kit:", originalPieces);
        const newPieces = selectedPieces.filter(id => !originalPieces.includes(id));
        console.log("Peças adicionadas:", newPieces);
        if (newPieces.length > 0) {
          kits[selectedKitName] = [...new Set([...originalPieces, ...selectedPieces])];
          const addedPiecesNames = newPieces.map(id => pecas.find(peca => peca.id === id).nomePeca);
          status.textContent = `Peças ${addedPiecesNames.join(", ")} adicionadas ao kit ${selectedKitName}.`;
        } else {
          status.textContent = "Nenhuma peça nova adicionada ao kit.";
        }
      }
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