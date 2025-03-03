async function controllerDadosDosEnvolvidos() {
    try {
      const token = extrairTokenNaPagina();
      const procedimentoId = extrairIdDoProcedimento();
      const apiRepository = new ApiRepository(token);
  
      // Obter dados dos envolvidos
      const dadosEnvolvidos = await apiRepository.fetchEnvolvidos(procedimentoId);
      const mapaNomeEnvolvimento = DataAdapter.extrairMapaNomeEnvolvimento(dadosEnvolvidos);
  
      // Extrair IDs
      const idsPessoaFisica = dadosEnvolvidos.filter(item => item.pessoaFisicaId).map(item => item.pessoaFisicaId);
      const idsPessoaJuridica = dadosEnvolvidos.filter(item => item.pessoaJuridicaId).map(item => item.pessoaJuridicaId);
  
      // Buscar dados detalhados
      const dadosFisica = await DataAdapter.buscarDadosEnvolvidos(idsPessoaFisica, "fisica", apiRepository);
      const dadosJuridica = await DataAdapter.buscarDadosEnvolvidos(idsPessoaJuridica, "juridica", apiRepository);
  
      // Extrair e formatar dados
      const extraidoFisica = dadosFisica.map(d => DataAdapter.extrairDadosPessoaFisica(d));
      const extraidoJuridica = dadosJuridica.map(d => DataAdapter.extrairDadosPessoaJuridica(d));
      const listaUnificada = [...extraidoFisica, ...extraidoJuridica];
      const listaFormatada = DataAdapter.listaDeObjetosParaStrings(listaUnificada);
  
      // Filtrar por tipo de envolvimento
      const autores = DataAdapter.filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Autor");
      const vitimas = DataAdapter.filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Vítima");
  
      // Formatar listas
      const autorFormatado = DataAdapter.formatarListaComE(autores.map(a => a.split(", ")[0].split(": ")[1]));
      const vitimaFormatado = DataAdapter.formatarListaComE(vitimas.map(v => v.split(", ")[0].split(": ")[1]));
  
      // Obter dados do procedimento
      const dadosProcedimento = await apiRepository.fetchProcedimento(procedimentoId);
      const extraidoProcedimento = extrairDadosProcedimento(dadosProcedimento);
  
      // Montar predefinidos
      const predefinidos = {
        dataInstauracao: extraidoProcedimento.dataInstauracao,
        delegadoAtual: extraidoProcedimento.delegadoAtual,
        autor: autorFormatado,
        vitima: vitimaFormatado,
      };
  
      console.log("Predefinidos:", predefinidos);
      return predefinidos;
    } catch (error) {
      console.error("Erro no controlador:", error);
      throw error;
    }
  }
  
  function extrairDadosProcedimento(dados) {
    const keys = ["dataInstauracao", "delegadoAtual", "escrivaoAtual", "unidadeAtual", "procedimentoNoticia", "naturezaProcedimento", "procedimentoInstauracao"];
    return DataAdapter.adapt(dados, keys);
  }
  
  // Exportação para uso em outros arquivos
  window.controllerDadosDosEnvolvidos = controllerDadosDosEnvolvidos;