async function handleKitSelection() {
  const kits = await fetchKits(); // Função fictícia que retorna os kits
  console.log("Kits carregados:", kits);

  const sidebar = document.querySelector(".minha-sidebar");

  // Adiciona elementos à sidebar
  sidebar.appendChild(document.createElement("h4")).textContent = "Automação";
  sidebar.appendChild(createDropdown(kits)); // Função fictícia que cria o dropdown
  sidebar.appendChild(
    createButton("add-more-pieces", "Adicionar Mais Peças ao Kit") // Função fictícia que cria o botão
  );
  sidebar.appendChild(createStatusElement()); // Função fictícia que cria o elemento de status
  sidebar.appendChild(createButton("start-button", "Iniciar"));

  const kitSelect = sidebar.querySelector("#kit-select");
  const status = sidebar.querySelector("#status");
  if (!kitSelect || !status) return;

  let selectedKitName = null;

  // Listener para mudança no dropdown
  kitSelect.addEventListener("change", function () {
    selectedKitName = kitSelect.value; // Usa o value do dropdown, que deve corresponder às chaves em kits
    console.log("Kit selecionado:", selectedKitName);
    if (selectedKitName === "criar-kit") {
      status.textContent =
        "Clique em Adicionar Mais Peças ao Kit para criar um novo kit.";
    } else {
      status.textContent = `${selectedKitName} selecionado. Clique em Iniciar para preencher algumas informações. Se precisar, você pode adicionar mais peças ao kit.`;
    }
  });

  const addMorePiecesButton = document.querySelector("#add-more-pieces");
  addMorePiecesButton.addEventListener("click", () => {
    const piecesModal = createPiecesModal(selectedKitName, kits, status);
    piecesModal.style.display = "block";
  });
}

function createStatusElement() {
  const status = document.createElement("p");
  status.id = "status";
  status.style.marginTop = "10px";
  status.style.color = "red";
  return status;
}

function createDropdown(kits) {
  const select = document.createElement("select");
  select.id = "kit-select";
  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Selecione um Kit";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);
  const createKitOption = document.createElement("option");
  createKitOption.value = "criar-kit";
  createKitOption.textContent = "Criar Kit";
  select.appendChild(createKitOption);
  Object.keys(kits).forEach((kit) => {
    const option = document.createElement("option");
    option.value = kit;
    option.textContent = kit
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    select.appendChild(option);
  });

  return select;
}
