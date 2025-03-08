function extrairIdDoProcedimento() {
  const hash = location.hash;
  console.log("hash", hash);
  if (!hash) throw new Error("ID do procedimento não encontrado na URL.");
  return hash.split("/").pop();
}