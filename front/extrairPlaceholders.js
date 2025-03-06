function Placeholders() {
  // Usa a variável global finalSelectedPieces
  const selectedPiecesId = window.finalSelectedPieces;
  console.log("Final selected pieces:", selectedPiecesId);
  const placeholders = extrairPlaceholders(selectedPiecesId);
  console.log("Placeholders:", placeholders);
  const predefinidos = window.predefinidos;
  console.log("Predefinidos:", predefinidos);
  let placeholdersToFill = filtrarPlaceholders(placeholders);
  console.log("Placeholders to fill:", placeholdersToFill);
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
  console.log("Placeholders to fill:", placeholdersToFill);
  const placeholdersMultiplos = extrairPlaceholdersMultiplos();
  console.log("Placeholders multiplos:", placeholdersMultiplos);
  const listaParaInputs = placeholdersToFill.concat(placeholdersMultiplos);
  console.log("Lista para inputs:", listaParaInputs);
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
      !predefinidos.hasOwnProperty(placeholder) || !predefinidos[placeholder]
    );
  });

  if (placeholdersToFill.length === 0) {
    status.textContent =
      "Todos os placeholders já estão preenchidos. Nenhum input necessário. Clique em Iniciar e depois em Enviar";
  }
    console.log("Placeholders to fill de dentro de filtrarPlaceholders:", placeholdersToFill);
  return placeholdersToFill;
}

// function filtrarPlaceholdersQuandoHouverMaisDeUmImputado() {
//   if (predefinidos.qualificacao_completa_do_imputado.length > 1) {
// // Arrays de configuração
//     // Array com os nomes dos placeholders que devem ter inputs separados para cada autor
//     const multiAuthorPlaceholders = [
//       "qualificacao_completa_do_imputado",
//       "nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao",
//     ];
//     // Array com os IDs das peças que deverão gerar um documento para cada autor (inputs usados separadamente)
//     const piecesSeparateIds = [102, 24, 3, 160, 22];
//   }
// }

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
    }
    else if (placeholder.includes("qualificacao_da_primeira_testemunha")) {
      input.value = predefinidos.qualificacao_da_primeira_testemunha_[0].toUpperCase();
    }
    else if (placeholder.includes("cidade_onde_o_procedimento_esta_sendo_realizado")) {
      input.value = predefinidos.cidade_onde_o_procedimento_esta_sendo_realizado_.toUpperCase();
    }
    // else if (placeholder.includes("qualificacao_completa_do_imputado")) {
    //   input.value = predefinidos.qualificacao_completa_do_imputado_.toUpperCase();
    // }
    else if (placeholder.includes("qualificacao_completa_do_imputado")) {
      let qualificacoes = [...predefinidos.qualificacao_completa_do_imputado_]; // Faz uma cópia da lista
    
      if (qualificacoes.length > 1) {
        input.value = qualificacoes.pop().toUpperCase(); // Remove e usa o último item
        predefinidos.qualificacao_completa_do_imputado_ = qualificacoes; // Atualiza a lista original
      } else {
        input.value = qualificacoes[0]?.toUpperCase() || ""; // Usa o único item disponível ou uma string vazia
      }
    }
    
    console.log("placeholder = ", placeholder);

    form.appendChild(label);
    form.appendChild(input);
    dynamicFormContainer.appendChild(form);
  });
}
