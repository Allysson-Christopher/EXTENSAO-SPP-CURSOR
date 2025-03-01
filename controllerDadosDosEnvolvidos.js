async function controllerDadosDosEnvolvidos() {
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
    const dadosEnvolvidosCompletosFisica = [];
    for (const id of idsPessoaFisica) {
      const dadosEnvolvido =
        await fetchParaObterDadosDosEnvolvidosOuProcedimento(
          criarUrlParaObterDadosDosEnvolvidos(id),
          token
        );
      dadosEnvolvidosCompletosFisica.push(dadosEnvolvido);
    }
    console.log(dadosEnvolvidosCompletosFisica);

    // Para cada ID de pessoa jurídica, busca os dados completos do envolvido
    const dadosEnvolvidosCompletosJuridica = [];
    for (const id of idsPessoaJuridica) {
      const dadosEnvolvido =
        await fetchParaObterDadosDosEnvolvidosOuProcedimento(
          criarUrlParaObterDadosPessoaJuridica(id),
          token
        );
      dadosEnvolvidosCompletosJuridica.push(dadosEnvolvido);
    }
    console.log(dadosEnvolvidosCompletosJuridica);

    // Exemplo: extrai algumas chaves dos dados completos
    const extraidoFisica = extrairChavesValores(
      dadosEnvolvidosCompletosFisica,
      [
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
      ]
    );
    const extraidoJuridica = extrairChavesValores(
      dadosEnvolvidosCompletosJuridica,
      ["nomeFantasia"]
    );

    console.log("Extraído Pessoa Física:", extraidoFisica);
    console.log("Extraído Pessoa Jurídica:", extraidoJuridica);

    const dadosProcedimento =
      await fetchParaObterDadosDosEnvolvidosOuProcedimento(
        criarUrlParaObterDadosDoProcedimento(),
        extrairTokenNaPagina()
      );

    console.log(dadosProcedimento);
    const extraidoProcedimento = extrairChavesValores(
      [dadosProcedimento],
      [
        "dataInstauracao",
        "incidenciaPenal",
        "numeroTombo",
        "comarca",
        "delegadoAtual",
        "escrivaoAtual",
        "unidadeAtual",
        "procedimentoNoticia",
        "naturezaProcedimento",
        "procedimentoInstauracao",
      ]
    );
    console.log("Extraído Procedimento:", extraidoProcedimento);
  } catch (error) {
    console.error("Erro na execução:", error);
  }
}
