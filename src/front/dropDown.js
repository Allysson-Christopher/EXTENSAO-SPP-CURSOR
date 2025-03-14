async function handleKitSelection() {
  const kits = await fetchKits();

  // Cria uma cópia dos kits originais para preservar o estado inicial
  const originalKits = JSON.parse(JSON.stringify(kits));
  const sidebar = document.querySelector(".minha-sidebar");

  // Adiciona elementos à sidebar
  // adicionar um id ao item abaixo
  // Cria uma div para o cabeçalho
  const headerDiv = document.createElement("div");
  headerDiv.classList.add("sidebar-header");

  // Cria o título
  const title = document.createElement("h4");
  title.id = "title-sidebar";
  title.textContent = "Automação";

  // Insere o título dentro da div de cabeçalho e depois na sidebar
  headerDiv.appendChild(title);
  sidebar.appendChild(headerDiv);

  sidebar.appendChild(createDropdown(kits)); // Função fictícia que cria o dropdown
  sidebar.appendChild(
    createButton("add-more-pieces", "Adicionar Mais Peças ao Kit")
  );
  sidebar.appendChild(createStatusElement());
  sidebar.appendChild(createButton("start-button", "Iniciar"));

  const kitSelect = sidebar.querySelector("#kit-select");
  const status = sidebar.querySelector("#status"); // quero colocar status no win

  if (!kitSelect || !status) return;

  let selectedKitName = null;
  // Torna kits disponíveis globalmente
  window.kits = kits;

  kitSelect.addEventListener("change", function () {
    const selectedKit = kitSelect.value;
    if (selectedKit === "criar-kit") {
      selectedKitName = "criar-kit";
      kits[selectedKitName] = [];
      status.textContent =
        "Criando novo kit. Clique em 'Adicionar Mais Peças ao Kit' para definir as peças.";
    } else if (selectedKit in originalKits) {
      selectedKitName = selectedKit;
      // Não redefinimos kits[selectedKitName], usando os dados originais
      status.textContent = `${selectedKitName} selecionado. Clique em 'Iniciar' para começar ou em 'Adicionar Mais Peças ao Kit' para adicionar peças ao kit.`;
    } else {
      status.textContent = "Kit não encontrado.";
    }
    // Torna o nome do kit selecionado disponível globalmente
    window.selectedKitName = selectedKitName;
  });

  const addMorePiecesButton = document.querySelector("#add-more-pieces");
  addMorePiecesButton.addEventListener("click", () => {
    if (!selectedKitName) {
      status.textContent = "Selecione um kit para adicionar peças.";
      return;
    }
    const piecesModal = createPiecesModal(selectedKitName, kits, status);
    piecesModal.style.display = "block";
  });

  const startButton = document.querySelector("#start-button");
  startButton.addEventListener("click", async () => {
    if (kits[selectedKitName][0] === 216) {
      predefinidos = await controllerDadosDosEnvolvidos((ehRelatorio = true));
    } else {
      predefinidos = await controllerDadosDosEnvolvidos((ehRelatorio = false));
    }
    window.predefinidos = predefinidos;
    console.log("kits[selectedKitName]", kits[selectedKitName]);
    // Se não houver peças selecionadas, exibe uma mensagem de erro
    if (!kits[selectedKitName] || kits[selectedKitName].length === 0) {
      status.textContent =
        "Nenhuma peça selecionada. Por favor, adicione peças ao kit antes de iniciar.";
      return;
    }

    // Cria a variável global com as peças finais selecionadas
    window.finalSelectedPieces = kits[selectedKitName];
    userProvidedValues = [102, 24, 3, 160, 22];

    // Agora, extrairPlaceholders (ou outra função) pode usar window.finalSelectedPieces
    Placeholders(userProvidedValues);
    // Exemplo: console.log("Final Selected Pieces:", window.finalSelectedPieces);
  });
}

function createStatusElement() {
  const status = document.createElement("p");
  status.id = "status";
  status.style.marginTop = "10px";
  status.style.color = "black";
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
