async function controllerDadosDosEnvolvidos() {
    try {
      const token = extrairTokenNaPagina();
      const procedimentoId = extrairIdDoProcedimento();
      const apiRepository = new ApiRepository(token);
  
      // Obter dados dos envolvidos
      const dadosEnvolvidos = apiRepository.fetchEnvolvidos(procedimentoId);
      const mapaNomeEnvolvimento = extrairMapaNomeEnvolvimento(dadosEnvolvidos);
  
      const idsPessoaFisica = dadosEnvolvidos.filter(item => item.pessoaFisicaId).map(item => item.pessoaFisicaId);
      const idsPessoaJuridica = dadosEnvolvidos.filter(item => item.pessoaJuridicaId).map(item => item.pessoaJuridicaId);
  
      const dadosFisica = await buscarDadosEnvolvidos(idsPessoaFisica, "fisica", apiRepository);
      const dadosJuridica = await buscarDadosEnvolvidos(idsPessoaJuridica, "juridica", apiRepository);
  
      const extraidoFisica = dadosFisica.map(d => extrairDadosPessoaFisica(d));
      const extraidoJuridica = dadosJuridica.map(d => extrairDadosPessoaJuridica(d));
      const listaUnificada = [...extraidoFisica, ...extraidoJuridica];
      const listaFormatada = listaDeObjetosParaStrings(listaUnificada);
  
      const autores = filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Autor");
      const vitimas = filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Vítima");
  
      const autorFormatado = formatarListaComE(autores.map(a => a.split(", ")[0].split(": ")[1]));
      const vitimaFormatado = formatarListaComE(vitimas.map(v => v.split(", ")[0].split(": ")[1]));
  
      // Obter dados do procedimento
      const dadosProcedimento = await apiRepository.fetchProcedimento(procedimentoId);
      const extraidoProcedimento = extrairDadosProcedimento(dadosProcedimento);
  
      // Montar predefinidos
      const predefinidos = {
        dataInstauracao: extraidoProcedimento.dataInstauracao || null,
        delegadoAtual: extraidoProcedimento.delegadoAtual || null,
        escrivaoAtual: extraidoProcedimento.escrivaoAtual || null,
        unidadeAtual: extraidoProcedimento.unidadeAtual || null,
        numeroDoBO: extraidoProcedimento.numeroDoBO || null,
        conteudoDoBO: extraidoProcedimento.conteudoDoBO || null,
        dataDoFato: extraidoProcedimento.dataDoFato || null,
        horaDoFato: extraidoProcedimento.horaDoFato || null,
        enderecoDoFato: extraidoProcedimento.enderecoDoFato || null,
        tipoProcedimentoExtenso: extraidoProcedimento.procedimentoInstauracao?.descricao || null,
        tipoProcedimentoSigla: extraidoProcedimento.procedimentoInstauracao?.sigla || null,
        numeroTombo: extraidoProcedimento.numeroTombo || null,
        comarca: extraidoProcedimento.comarca || null,
        incidenciaPenal: extraidoProcedimento.incidenciaPenal || null,
        autor: autorFormatado,
        vitima: vitimaFormatado,
        qualificacaoAutor: autores,
        qualificacaoVitima: vitimas,
        qualificacaoTestemunha: filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Testemunha"),
        qualificacaoNoticiante: filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Noticiante"),
      };
  
      console.log("Predefinidos:", predefinidos);
      return predefinidos;
    } catch (error) {
      console.error("Erro no controlador:", error);
      throw error;
    }
  }
  
  function extrairDadosProcedimento(dados) {
    const keys = [
      "dataInstauracao",
      "delegadoAtual",
      "escrivaoAtual",
      "unidadeAtual",
      "procedimentoNoticia",
      "naturezaProcedimento",
      "procedimentoInstauracao",
      "numeroTombo",
      "comarca",
      "incidenciaPenal"
    ];
    return DataAdapter.adapt(dados, keys);
  }