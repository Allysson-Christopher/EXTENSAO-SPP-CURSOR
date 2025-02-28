async function main() {
  try {
    // Extrai o token da página
    const token = extrairTokenNaPagina();

    // Obtém os dados iniciais (IDs dos envolvidos)
    const dados = await fetchParaObterIdDosEnvolvidos(
      criarUrlParaObterIdDosEnvolvidos(),
      token
    );
    // console.log("Dados recebidos:", dados);

    // Extrai os IDs: pessoa física e pessoa jurídica
    const idsPessoaFisica = dados
      .filter((item) => item.pessoaFisicaId != null)
      .map((item) => item.pessoaFisicaId);

    const idsPessoaJuridica = dados
      .filter((item) => item.pessoaJuridicaId != null)
      .map((item) => item.pessoaJuridicaId);

    // Para cada ID de pessoa física, busca os dados completos do envolvido
    const dadosEnvolvidosCompletos = [];
    for (const id of idsPessoaFisica) {
      const dadosEnvolvido = await fetchParaObterDadosDosEnvolvidos(
        criarUrlParaObterDadosDosEnvolvidos(id),
        token
      );
      dadosEnvolvidosCompletos.push(dadosEnvolvido);
    }
    console.log(dadosEnvolvidosCompletos);

    // Para cada ID de pessoa jurídica, busca os dados completos do envolvido
    const dadosEnvolvidosCompletosJuridica = [];
    for (const id of idsPessoaJuridica) {
      const dadosEnvolvido = await fetchParaObterDadosDosEnvolvidos(
        criarUrlParaObterDadosPessoaJuridica(id),
        token
      );
      dadosEnvolvidosCompletosJuridica.push(dadosEnvolvido);
    }

    // Exemplo: extrai algumas chaves dos dados completos
    const extraidoFisica = extrairChavesValores(dadosEnvolvidosCompletos, [
      "nome",
      "cpf",
      "nomeMae",
      "contato",
      "dataNascimento",
      "endereco",
      "estadoCivil",
      "instrucao",
      "naturalidadeMunicipio",
      "nomePai",
      "profissao",
      
     
    ]);
    const extraidoJuridica = extrairChavesValores(
      dadosEnvolvidosCompletosJuridica,
      ["nome", "cnpj"]
    );

    console.log("Extraído Pessoa Física:", extraidoFisica);
    console.log("Extraído Pessoa Jurídica:", extraidoJuridica);
  } catch (error) {
    console.error("Erro na execução:", error);
  }
}

function extrairChavesValores(dados, listaDeKeys) {
  // Se "dados" não for um array, lança um erro
  if (!Array.isArray(dados)) {
    throw new Error(
      'O parâmetro "dados" deve ser um array ou uma lista de arrays.'
    );
  }

  let listaDeArrays;
  // Se o primeiro elemento não for um array, assumimos que "dados" é uma única array de objetos.
  if (dados.length > 0 && !Array.isArray(dados[0])) {
    listaDeArrays = [dados];
  } else {
    listaDeArrays = dados;
  }

  return listaDeArrays.map((arr) => {
    return arr.map((objeto) => {
      const extraido = {};
      listaDeKeys.forEach((key) => {
        if (objeto.hasOwnProperty(key)) {
          extraido[key] = objeto[key];
        }
      });
      return extraido;
    });
  });
}

main();
