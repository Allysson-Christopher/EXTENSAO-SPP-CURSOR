function Placeholders() {
  // Usa a variável global finalSelectedPieces
  const selectedPiecesId = window.finalSelectedPieces;
  const placeholders = extrairPlaceholders(selectedPiecesId);
  const predefinidos = window.predefinidos;
  let placeholdersToFill = filtrarPlaceholders(placeholders);
  const multiAuthorPlaceholders = [
    "qualificacao_completa_do_imputado",
    "nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao",
    "grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao",
  ];
  if (predefinidos.qualificacao_completa_do_imputado_.length > 1) {
    placeholdersToFill = placeholdersToFill.filter(
      (placeholder) => !multiAuthorPlaceholders.includes(placeholder)
    );
  }
  const placeholdersMultiplos = extrairPlaceholdersMultiplos();
  const listaParaInputs = placeholdersToFill.concat(placeholdersMultiplos);
  criarFormulario(listaParaInputs, predefinidos);
}

// Filtra os placeholders que precisam ser preenchidos via form
// transforme o código acima em uma função

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

function filtrarPlaceholders(placeholders) {
  const status = sidebar.querySelector("#status");

  const placeholdersToFill = [...placeholders].filter((placeholder) => {
    return (
      !predefinidos.hasOwnProperty(placeholder) ||
      !window.predefinidos[placeholder]
    );
  });

  if (placeholdersToFill.length === 0) {
    status.textContent =
      "Todos os placeholders já estão preenchidos. Nenhum input necessário. Clique em Iniciar e depois em Enviar";
  }
  return placeholdersToFill;
}

function extrairPlaceholdersMultiplos() {
  const piecesSeparateIds = [102, 24, 3, 160, 22];
  const multiAuthorPlaceholders = [
    "qualificacao_completa_do_imputado",
    "nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao",
    "grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao",
  ];
  let placeholders = new Set();

  // Executa somente se houver mais de um imputado
  if (predefinidos.qualificacao_completa_do_imputado_.length > 1) {
    // Para cada imputado, gera o índice (começando em 1)
    predefinidos.qualificacao_completa_do_imputado_.forEach(
      (imputado, index) => {
        // Itera apenas sobre as peças definidas em piecesSeparateIds
        piecesSeparateIds.forEach((pieceId) => {
          const peca = pecas.find((p) => p.id === pieceId);
          if (peca && peca.htmlContent) {
            // Extrai os placeholders do conteúdo HTML da peça
            const regex = /{([^}]+)}/g;
            let match;
            while ((match = regex.exec(peca.htmlContent)) !== null) {
              const placeholder = match[1];
              // Só processa se o placeholder estiver na lista multiAuthorPlaceholders
              if (multiAuthorPlaceholders.includes(placeholder)) {
                // Acrescenta o número do imputado (index + 1)
                placeholders.add(`${placeholder}_${index + 1}`);
              }
            }
          }
        });
      }
    );
  }
  return [...placeholders];
}

function criarFormulario(listaParaInputs, predefinidos) {
  let indiceQualificacao = 0;

  let dynamicFormContainer = sidebar.querySelector("#dynamic-form");
  if (!dynamicFormContainer) {
    dynamicFormContainer = document.createElement("div");
    dynamicFormContainer.id = "dynamic-form";
    dynamicFormContainer.style.marginTop = "20px";
    sidebar.appendChild(dynamicFormContainer);
  }
  // Cria o formulário dinamicamente
  dynamicFormContainer.innerHTML = "";
  const form = document.createElement("form");
  form.id = "form-placeholders";

  listaParaInputs.forEach((placeholder) => {
    const label = document.createElement("label");
    label.htmlFor = `input-${placeholder}`;
    label.classList.add("placeholder-form-label");
    label.textContent = placeholder.replace(/_/g, " ").toUpperCase();

    const input = document.createElement("input");
    input.type = "text";
    input.id = `input-${placeholder}`;
    input.classList.add("input-full-width");
    input.name = placeholder;
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
    }
    // Variável global para rastrear qual item foi usado
    // let indiceQualificacao = 0;
    else if (placeholder.includes("qualificacao_da_vitima")) {
      input.value = predefinidos.qualificacao_da_vitima_
        .join(", ")
        .toUpperCase();
    } else if (placeholder.includes("qualificacao_completa_do_imputado")) {
      let qualificacoes = [...predefinidos.qualificacao_completa_do_imputado_]; // Copia o array
      console.log("Lista de qualificações:", qualificacoes);

      // Se ainda houver elementos no array, pegamos o próximo
      if (indiceQualificacao < qualificacoes.length) {
        input.value = qualificacoes[indiceQualificacao].toUpperCase();
        indiceQualificacao++; // Avança para o próximo índice
      } else {
        input.value = ""; // Se não houver mais elementos, define vazio
        console.warn("⚠️ Nenhuma qualificação restante para ser atribuída!");
      }
    }

    form.appendChild(label);
    form.appendChild(input);

    dynamicFormContainer.appendChild(form);
  });
  dynamicFormContainer.appendChild(createButton("execute-button", "Executar"));
  const botaoExecutar = document.getElementById("execute-button");
  botaoExecutar.addEventListener("click", function (e) {
    e.preventDefault();
    extrairListaFinalDePlaceholders();
  });
}
