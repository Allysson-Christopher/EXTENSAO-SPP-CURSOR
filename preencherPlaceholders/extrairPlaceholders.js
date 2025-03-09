function Placeholders() {
  // Usa a variável global finalSelectedPieces
  const selectedPiecesId = window.finalSelectedPieces;
  console.log("selectedPiecesId", selectedPiecesId);
  const placeholders = extrairPlaceholders(selectedPiecesId);
  console.log("placeholders", placeholders);
  const predefinidos = window.predefinidos;
  console.log("predefinidos", predefinidos);
  let placeholdersToFill = filtrarPlaceholders(placeholders, predefinidos);
  console.log("placeholdersToFill", placeholdersToFill);

  const multiAuthorPlaceholders = [
    "qualificacao_completa_do_imputado",
    "nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao",
    "grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao",
  ];
 

  // Só gera placeholders múltiplos se houver mais de um imputado e se os placeholders originais existirem
  if (predefinidos.qualificacao_completa_do_imputado_.length > 1) {
    // Remove o placeholder base para evitar duplicidade
    placeholdersToFill = placeholdersToFill.filter(
      (ph) => !multiAuthorPlaceholders.includes(ph)
    );
    const placeholdersMultiplos = extrairPlaceholdersMultiplos(
      placeholders,
      multiAuthorPlaceholders
    );
    console.log("placeholdersMultiplos", placeholdersMultiplos);
    placeholdersToFill = placeholdersToFill.concat(placeholdersMultiplos);
  }

  console.log("placeholdersToFill", placeholdersToFill);
  criarFormulario(placeholdersToFill, predefinidos);
}

// Extrai os placeholders de cada peça selecionada
function extrairPlaceholders(selectedPieceIds) {
  let placeholders = new Set();
  selectedPieceIds.forEach((pieceId) => {
    const peca = pecas.find((p) => p.id === pieceId);
    if (peca && peca.htmlContent) {
      const regex = /{([^}]+)}/g;
      let match;
      while ((match = regex.exec(peca.htmlContent)) !== null) {
        placeholders.add(match[1]);
      }
    }
  });
  return placeholders;
}

// Filtra os placeholders que precisam ser preenchidos
function filtrarPlaceholders(placeholders, predefinidos) {
  const status = document.querySelector("#status");
  const placeholdersToFill = [...placeholders].filter((placeholder) => {
    return (
      !predefinidos.hasOwnProperty(placeholder) || !predefinidos[placeholder]
    );
  });

  if (placeholdersToFill.length === 0) {
    status.textContent =
      "Todos os placeholders já estão preenchidos. Nenhum input necessário. Clique em Iniciar e depois em Enviar";
  }
  return placeholdersToFill;
}

// Extrai placeholders múltiplos apenas se estiverem presentes nas peças selecionadas
function extrairPlaceholdersMultiplos(placeholders, multiAuthorPlaceholders) {
  const piecesSeparateIds = [102, 24, 3, 160, 22];
  let placeholdersMultiplos = new Set();

  // Verifica se as peças selecionadas incluem as que requerem placeholders múltiplos
  const selectedPiecesId = window.finalSelectedPieces;
  const requerMultiplos = selectedPiecesId.some((id) =>
    piecesSeparateIds.includes(id)
  );

  if (
    requerMultiplos &&
    window.predefinidos.qualificacao_completa_do_imputado_.length > 1
  ) {
    window.predefinidos.qualificacao_completa_do_imputado_.forEach(
      (imputado, index) => {
        multiAuthorPlaceholders.forEach((placeholder) => {
          // Só adiciona o placeholder múltiplo se o original estiver presente nas peças
          if (placeholders.has(placeholder)) {
            placeholdersMultiplos.add(`${placeholder}_${index + 1}`);
          }
        });
      }
    );
  }
  return [...placeholdersMultiplos];
}

// Função para criar o formulário (mantida como no código original)
function criarFormulario(listaParaInputs, predefinidos) {
  // Ocultar elementos indesejados
  const kitSelect = document.querySelector("#kit-select");
  const statusEl = document.querySelector("#status");
  const addMorePieces = document.querySelector("#add-more-pieces");
  const startButton = document.querySelector("#start-button");
  const titleSidebar = document.querySelector("#title-sidebar");

  if (kitSelect) kitSelect.style.display = "none";
  if (statusEl) statusEl.style.display = "none";
  if (addMorePieces) addMorePieces.style.display = "none";
  if (startButton) startButton.style.display = "none";
  if (titleSidebar) titleSidebar.style.display = "none";

  const minhaSidebar = document.querySelector(".minha-sidebar");
  if (!minhaSidebar) {
    console.error("Elemento com a classe .minha-sidebar não encontrado.");
    return;
  }

  minhaSidebar.style.width = window.innerWidth / 2 + "px";
  document.body.style.paddingRight = minhaSidebar.offsetWidth + 20 + "px";

  let dynamicFormContainer = minhaSidebar.querySelector("#dynamic-form");
  if (!dynamicFormContainer) {
    dynamicFormContainer = document.createElement("div");
    dynamicFormContainer.id = "dynamic-form";
    dynamicFormContainer.style.marginTop = "20px";
    minhaSidebar.appendChild(dynamicFormContainer);
  }
  dynamicFormContainer.innerHTML = "";

  const form = document.createElement("form");
  form.id = "form-placeholders";

  let indiceQualificacao = 0;

  const INPUT_WIDTH = minhaSidebar.offsetWidth * 0.9;
  const HEIGHT_VAZIO = 30;
  const HEIGHT_COM_VALOR = 60;
  const HEIGHT_COM_VALOR_QUALIFICACAO = 80;
  const HEIGHT_QUALIFICACAO = 60;

  function atualizarAltura(input) {
    if (
      input.name.includes("cidade_onde_o_procedimento_esta_sendo_realizado")
    ) {
      input.style.height = HEIGHT_VAZIO + "px";
    } else if (input.name.includes("qualificacao_completa_do_imputado")) {
      input.style.height = HEIGHT_COM_VALOR_QUALIFICACAO + "px";
    } else if (
      input.name.includes("qualificacao_do_condutor") ||
      input.name.includes("qualificacao_da_primeira_testemunha") ||
      input.name.includes("qualificacao_da_vitima")
    ) {
      input.style.height = HEIGHT_QUALIFICACAO + "px";
    } else {
      const linhas = input.value.split("\n").length;
      if (linhas > 1) {
        input.style.height = HEIGHT_COM_VALOR + "px";
      } else {
        input.style.height = HEIGHT_VAZIO + "px";
      }
    }
  }

  listaParaInputs.forEach((placeholder) => {
    const label = document.createElement("label");
    label.htmlFor = `input-${placeholder}`;
    label.classList.add("placeholder-form-label");
    label.textContent = placeholder.replace(/_/g, " ").toUpperCase();

    const input = document.createElement("textarea");
    input.id = `input-${placeholder}`;
    input.name = placeholder;
    input.style.width = INPUT_WIDTH + "px";
    input.style.whiteSpace = "pre-wrap";
    input.style.wordWrap = "break-word";
    input.style.resize = "none";
    input.style.overflow = "hidden";
    input.style.fontSize = "10px";

    if (placeholder.includes("qualificacao_do_condutor")) {
      input.value = predefinidos.qualificacao_do_condutor_[0].toUpperCase();
    } else if (placeholder.includes("qualificacao_da_primeira_testemunha")) {
      input.value =
        predefinidos.qualificacao_da_primeira_testemunha_[0].toUpperCase();
    } else if (
      placeholder.includes("cidade_onde_o_procedimento_esta_sendo_realizado")
    ) {
      input.value =
        predefinidos.cidade_onde_o_procedimento_esta_sendo_realizado_.toUpperCase();
    } else if (placeholder.includes("qualificacao_da_vitima")) {
      input.value = predefinidos.qualificacao_da_vitima_
        .join(", ")
        .toUpperCase();
    } else if (placeholder.includes("qualificacao_completa_do_imputado")) {
      let qualificacoes = [...predefinidos.qualificacao_completa_do_imputado_];
      if (indiceQualificacao < qualificacoes.length) {
        input.value = qualificacoes[indiceQualificacao].toUpperCase();
        indiceQualificacao++;
      } else {
        input.value = "";
        console.warn("⚠️ Nenhuma qualificação restante para ser atribuída!");
      }
    }

    atualizarAltura(input);
    input.addEventListener("input", function () {
      atualizarAltura(this);
    });

    form.appendChild(label);
    form.appendChild(input);
  });

  dynamicFormContainer.appendChild(form);
  dynamicFormContainer.appendChild(createButton("execute-button", "Executar"));

  const botaoExecutar = document.getElementById("execute-button");
  botaoExecutar.addEventListener("click", function (e) {
    e.preventDefault();
    extrairListaFinalDePlaceholders();
  });
}

// Função auxiliar para criar botões (assumindo que existe no seu código)
function createButton(id, text) {
  const button = document.createElement("button");
  button.id = id;
  button.textContent = text;
  return button;
}
