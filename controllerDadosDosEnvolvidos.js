async function controllerDadosDosEnvolvidos() {
  try {
    // Extrai o token da página
    const token = extrairTokenNaPagina();

    // Obtém os dados iniciais (IDs dos envolvidos)
    const dados = await fetchParaObterIdDosEnvolvidos(
      criarUrlParaObterIdDosEnvolvidos(),
      token
    );

    // Cria o objeto que mapeia nome com tipo de envolvimento
    const mapaNomeEnvolvimento = extrairMapaNomeEnvolvimento(dados);
    const idsPessoaFisica = extrairIdsPessoaFisica(dados);
    const idsPessoaJuridica = extrairIdsPessoaJuridica(dados);
    const dadosEnvolvidosFisica = await buscarDadosEnvolvidosFisica(
      idsPessoaFisica,
      token
    );
    const dadosEnvolvidosJuridica = await buscarDadosEnvolvidosJuridica(
      idsPessoaJuridica,
      token
    );

    // Exemplo de uso
    const extraidoFisica = extrairChavesValores(dadosEnvolvidosFisica, [
      "nome",
      "nomeMae",
      "dataNascimento",
      "nomePai",
      "cpf",
      "naturalidadeMunicipio",
      "estadoCivil",
      "instrucao",
      "profissao",
      "endereco",
      "contato",
    ]);

    const extraidoJuridica = extrairChavesValores(dadosEnvolvidosJuridica, [
      "nomeFantasia",
    ]);

    const listaUnificada = [...extraidoFisica, ...extraidoJuridica];

    const extraidoFisicaJuridica = listaDeObjetosParaStrings(listaUnificada);
    const autor = formatarListaComE(
      filtrarNomePorEnvolvimento(
        extraidoFisicaJuridica,
        mapaNomeEnvolvimento,
        "Autor"
      )
    );
    const vitima = formatarListaComE(
      filtrarNomePorEnvolvimento(
        extraidoFisicaJuridica,
        mapaNomeEnvolvimento,
        "Vítima"
      )
    );

    const qualificacaoAutor = extrairQualificacaoPorEnvolvimento(
      extraidoFisicaJuridica,
      mapaNomeEnvolvimento,
      "Autor"
    );

    const qualificacaoVitima = extrairQualificacaoPorEnvolvimento(
      extraidoFisicaJuridica,
      mapaNomeEnvolvimento,
      "Vítima"
    );

    const qualificacaoTestemunha = extrairQualificacaoPorEnvolvimento(
      extraidoFisicaJuridica,
      mapaNomeEnvolvimento,
      "Testemunha"
    );

    const qualificacaoNoticiante = extrairQualificacaoPorEnvolvimento(
      extraidoFisicaJuridica,
      mapaNomeEnvolvimento,
      "Noticiante"
    );

    console.log("Mapa de Nome de Envolvimento:", mapaNomeEnvolvimento);
    console.log(
      "Extraído Pessoa Física e Jurídica Formatado:",
      extraidoFisicaJuridica
    );
    console.log("Autor:", autor);
    console.log("Vítima:", vitima);
    console.log("Qualificação do Autor:", qualificacaoAutor);
    console.log("Qualificação da Vítima:", qualificacaoVitima);
    console.log("Qualificação da Testemunha:", qualificacaoTestemunha);
    console.log("Qualificação do Noticiante:", qualificacaoNoticiante);

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

    const predefinidos = {
      dataInstauracao: extraidoProcedimento[0][0].dataInstauracao,
      delegadoAtual: extraidoProcedimento[0][0].delegadoAtual,
      escrivaoAtual: extraidoProcedimento[0][0].escrivaoAtual,
      unidadeAtual: extraidoProcedimento[0][0].unidadeAtual,
      numeroDoBO: extraidoProcedimento[0][0].procedimentoNoticia[0].numeroNoticia,
      conteudoDoBO: extraidoProcedimento[0][0].procedimentoNoticia[0].conteudo,
      dataDoFato: extraidoProcedimento[0][0].naturezaProcedimento[0].data,
      horaDoFato: extraidoProcedimento[0][0].naturezaProcedimento[0].hora,
      enderecoDoFato: extraidoProcedimento[0][0].naturezaProcedimento[0].endereco,
      tipoProcedimentoExtenso:
        extraidoProcedimento[0][0].procedimentoInstauracao.descricao,
      tipoProcedimentoSigla:
        extraidoProcedimento[0][0].procedimentoInstauracao.sigla,
      numeroTombo: extraidoProcedimento[0][0].numeroTombo,
      comarca: extraidoProcedimento[0][0].comarca,
      incidenciaPenal: extraidoProcedimento[0][0].incidenciaPenal,
      autor: autor,
      vitima: vitima,
      qualificacaoAutor: qualificacaoAutor,
      qualificacaoVitima: qualificacaoVitima,
      qualificacaoTestemunha: qualificacaoTestemunha,
      qualificacaoNoticiante: qualificacaoNoticiante,
    };
    
    console.log("Extraído Procedimento:", extraidoProcedimento);
    console.log("Extraído Predefinidos:", predefinidos);
  } catch (error) {
    console.error("Erro na execução:", error);
  }
}
