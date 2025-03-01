function criarUrlParaObterIdDosEnvolvidos() {
  // Obtém o valor do hash
  let idDoProcedimento = extrairIdDoProcedimento(); // Obtém o último valor após a barra
  // Monta a URL com o ID extraído e um parâmetro único para evitar cache
  let url = `https://spp.pc.pe.gov.br/b/api/procedimento/${idDoProcedimento}/envolvidos?_=${new Date().getTime()}`;
  return url;
}

function criarUrlParaObterDadosDosEnvolvidos(id) {
  // Monta a URL com o ID extraído e um parâmetro único para evitar cache
  let url = `https://spp.pc.pe.gov.br/b/api/pessoa-fisicas/${id}?_=${new Date().getTime()}`;
  return url;
}

function criarUrlParaObterDadosPessoaJuridica(id) {
  // Monta a URL com o ID extraído e um parâmetro único para evitar cache
  let url = `https://spp.pc.pe.gov.br/b/api/pessoa-juridicas-pesquisa?&id=${id}`;
  return url;
}
function criarUrlParaObterDadosDoProcedimento() {
  // Monta a URL com o ID extraído e um parâmetro único para evitar cache
  let idDoProcedimento = extrairIdDoProcedimento(); // Obtém o último valor após a barra
  let url = `https://spp.pc.pe.gov.br/b/api/procedimento-informacoes/${idDoProcedimento}?includes=naturezaMotivacao`;
  return url;
}
