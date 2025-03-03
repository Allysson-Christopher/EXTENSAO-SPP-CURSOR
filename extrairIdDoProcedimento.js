function extrairIdDoProcedimento() {
  const hash = location.hash;
  if (!hash) throw new Error("ID do procedimento não encontrado na URL.");
  return hash.split("/").pop();
}

// Exportação para uso em outros arquivos
window.extrairIdDoProcedimento = extrairIdDoProcedimento;