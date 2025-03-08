function extrairListaFinalDePlaceholders() {
  let objetoFiltrado = removerChavesComUnderline(window.predefinidos);
  let inputs = extrairInputsDoFormulario();
  const listaFinalDePlaceholders = { ...objetoFiltrado, ...inputs };
  window.listaFinalDePlaceholders = listaFinalDePlaceholders;
  const finalSelectedPieces = window.finalSelectedPieces;
  console.log("listaFinalDePlaceholders = ", listaFinalDePlaceholders);
  console.log(window.finalSelectedPieces);
  mudarHtmlDaPeca(finalSelectedPieces, listaFinalDePlaceholders); 
  return listaFinalDePlaceholders;
}

function extrairInputsDoFormulario() {
  const form = document.querySelector("#form-placeholders");
  const formData = new FormData(form);
  const inputs = {};
  formData.forEach((value, key) => {
    inputs[key] = value;
  });
  return inputs;
}

function removerChavesComUnderline(obj) {
  let copia = { ...obj }; // Cria uma cópia do objeto original

  Object.keys(copia).forEach((chave) => {
    if (chave.endsWith("_")) {
      delete copia[chave]; // Remove as chaves com underline
    }
  });

  return copia; // Retorna o objeto sem as chaves indesejadas
}
