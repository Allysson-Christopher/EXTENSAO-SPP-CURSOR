async function controllerDadosDosEnvolvidos(ehRelatorio = False) {
  try {
    const token = extrairTokenNaPagina();
    const procedimentoId = extrairIdDoProcedimento();
    const apiRepository = new ApiRepository(token);

    // Obter dados dos envolvidos
    const dadosEnvolvidos = apiRepository.fetchEnvolvidos(procedimentoId);
    const mapaNomeEnvolvimento = extrairMapaNomeEnvolvimento(dadosEnvolvidos);

    const idsPessoaFisica = dadosEnvolvidos
      .filter((item) => item.pessoaFisicaId)
      .map((item) => item.pessoaFisicaId);
    const idsPessoaJuridica = dadosEnvolvidos
      .filter((item) => item.pessoaJuridicaId)
      .map((item) => item.pessoaJuridicaId);

    const dadosFisica = await buscarDadosEnvolvidos(
      idsPessoaFisica,
      "fisica",
      apiRepository
    );
    const dadosJuridica = await buscarDadosEnvolvidos(
      idsPessoaJuridica,
      "juridica",
      apiRepository
    );

    const extraidoFisica = dadosFisica.map((d) => extrairDadosPessoaFisica(d));
    const extraidoJuridica = dadosJuridica[0].map((d) =>
      extrairDadosPessoaJuridica(d)
    );
    const listaUnificada = [...extraidoFisica, ...extraidoJuridica];
    const listaFormatada = listaDeObjetosParaStrings(listaUnificada);

    const autores = filtrarPorEnvolvimento(
      listaFormatada,
      mapaNomeEnvolvimento,
      "Autor"
    );
    const vitimas = filtrarPorEnvolvimento(
      listaFormatada,
      mapaNomeEnvolvimento,
      "Vítima"
    );

    const autorFormatado = formatarListaComE(
      autores.map((a) => a.split(", ")[0].split(": ")[1])
    );
    const vitimaFormatado = formatarListaComE(
      vitimas.map((v) => v.split(", ")[0].split(": ")[1])
    );

    const autoresQualificacoes = formatarStringsDasQualificacoes(autores);
    const vitimasQualificacoes = formatarStringsDasQualificacoes(vitimas);
    // Obter dados do procedimento

    const dadosProcedimento = await apiRepository.fetchProcedimento(
      procedimentoId
    );
    const extraidoProcedimento = extrairDadosProcedimento(dadosProcedimento);
    const numeroTombo = formatarNumero16Digitos(
      extraidoProcedimento.numeroTombo
    );
    const qualificacaoTestemunha = formatarStringsDasQualificacoes(
      filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Testemunha")
    );
    const qualificacaoNoticiante = formatarStringsDasQualificacoes(
      filtrarPorEnvolvimento(listaFormatada, mapaNomeEnvolvimento, "Noticiante")
    );

    const hora_atual = getCurrentTime();
    const data_mes_e_ano = getCurrentDate();
    const data_e_hora_do_fato = `${extraidoProcedimento.dataDoFato} - ${extraidoProcedimento.horaDoFato}`;

   

    textoOriginal = extraidoProcedimento.conteudoDoBO;
    instrucoes =
      "reescreva o texto como se fosse o depoimento do policial que foi o condutor dessa ocorrência. separe o depoimento em partes e coloque a expressão QUE {parte do depoimento}; QUE QUE {parte do depoimento}; QUE {parte do depoimento}... perceba que as frase são separadas por ponto e vírgula ';' depois disso crie um novo depoimento semelhante mas mudando um pouco a estrutura e o conteúdo para que seja mais natural e não tão repetitivo.esse segundo depoimento também deve ter a estrutura QUE {parte do depoimento}; QUE QUE {parte do depoimento}; QUE {parte do depoimento}.  quero  que você me retorne um array com os dois depoimentos.";
    instrucoesParaResumoDosFatos =
      "reescreva o texto em terceira pessoa e em linguem formal, culta e policial, reescreva como se você fosse o delegado que está relatando o inquérito policial e está citando o depoimento do condutor.";
    apiKey = APIKEY
      

    let depoimento1Global;
    let depoimento2Global;
    let resumoDosFatos;
    let depoimento_do_condutor_para_relatorio;
    let textoCondutorGlobal;
    let textoAutorGlobal;
    let interrogatorio_do_imputado;
    // Chamando a função de reescrita

    if (ehRelatorio) {
      const idDocumentoCondutor = await obterIdDocumentos(
        apiRepository,
        procedimentoId,
        "APFD-Condutor"
      );
      console.log("idDocumentoCondutor: ", idDocumentoCondutor);

      textoCondutorGlobal = await apiRepository.fetchTextoDocumentos(
        idDocumentoCondutor
      );
      //  const textoCondutorFinal =  extrairTrecho(TextoCondutor.conteudoHtml)
      textoCondutorGlobal = extrairTrecho(textoCondutorGlobal.conteudoHtml, "condutor");
      depoimento_do_condutor_para_relatorio = textoCondutorGlobal
      console.log("textoCondutorGlobal: ", textoCondutorGlobal);
      await reescreverResumoDosFatos(
        textoCondutorGlobal,
        instrucoesParaResumoDosFatos,
        apiKey
      )
        .then((textoReescrito) => {
          console.log("Texto reescrito:", textoReescrito);
          resumoDosFatos = textoReescrito;
        })
        .catch((erro) => {
          console.error("Erro:", erro);
        });

      const idDocumentoAutor = await obterIdDocumentos(
        apiRepository,
        procedimentoId,
        "Autor"
      );
      console.log("idDocumentoAutor: ", idDocumentoAutor);

      textoAutorGlobal = await apiRepository.fetchTextoDocumentos(
        idDocumentoAutor
      );
      //  const textoCondutorFinal =  extrairTrecho(TextoCondutor.conteudoHtml)
      textoCondutorGlobal = extrairTrecho(textoAutorGlobal.conteudoHtml);
      interrogatorio_do_imputado = textoCondutorGlobal
      console.log("interrogario_do_imputado: ", interrogatorio_do_imputado);
      
    } else {
      await reescreverTextoComOpenAI(textoOriginal, instrucoes, apiKey)
      .then(([depoimento1, depoimento2]) => {
        console.log("Depoimento 1:", depoimento1);
        depoimento1Global = depoimento1;
        console.log("Depoimento 2:", depoimento2);
        depoimento2Global = depoimento2;
      })
      .catch((erro) => {
        console.error("Erro:", erro);
      });
    }

   

    // Montar predefinidos
    const predefinidos = {
      data_de_instauracao: extraidoProcedimento.dataInstauracao || null,
      nome_do_delegado: extraidoProcedimento.delegadoAtual || null,
      nome_do_escrivao: extraidoProcedimento.escrivaoAtual || null,
      delegadoId: extraidoProcedimento.delegadoAtualId || null,
      escrivaoId: extraidoProcedimento.escrivaoAtualId || null,
      unidadeAtual: extraidoProcedimento.unidadeAtual || null,
      numero_do_bo: extraidoProcedimento.numeroDoBO || null,
      cole_aqui_a_descricao_do_bo: extraidoProcedimento.conteudoDoBO || null,
      data_do_fato: extraidoProcedimento.dataDoFato || null,
      hora_do_fato: extraidoProcedimento.horaDoFato || null,
      endereco_onde_ocorreu_o_fato: extraidoProcedimento.enderecoDoFato || null,
      tipo_de_procedimento:
        extraidoProcedimento.procedimentoInstauracao?.descricao || null,
      tipoProcedimentoSigla:
        extraidoProcedimento.procedimentoInstauracao?.sigla || null,
      numero_do_procedimento: numeroTombo || null,
      cidade_onde_o_procedimento_esta_sendo_realizado_:
        extraidoProcedimento.comarca || null,
      incidencia_penal: extraidoProcedimento.incidenciaPenal || null,
      nome_do_imputado: autorFormatado || null,
      nome_da_vitima: vitimaFormatado || null,
      qualificacao_completa_do_imputado_: autoresQualificacoes || null,
      qualificacao_da_vitima_: vitimasQualificacoes || null,
      qualificacao_da_primeira_testemunha_: qualificacaoTestemunha || null,
      qualificacao_do_condutor_: qualificacaoNoticiante || null,
      depoimento_do_condutor: depoimento1Global || null,
      depoimento_da_testemunha: depoimento2Global || null,
      depoimento_do_condutor_para_relatorio: depoimento_do_condutor_para_relatorio,
      resumo_dos_fatos: resumoDosFatos || null,
      interrogatorio_do_imputado: interrogatorio_do_imputado,
      hora_atual: hora_atual || null,
      data_mes_e_ano: data_mes_e_ano || null,
      data_e_hora_do_fato: data_e_hora_do_fato || null,
    };
    //COMO COLOCAR GLOBALMENTE?
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
    "incidenciaPenal",
  ];
  return DataAdapter.adapt(dados, keys);
}

/**
 * Função para obter o horário atual no formato hh:mm
 * @returns {string} - Horário atual
 */
getCurrentTime: function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Adiciona zero à esquerda se necessário
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return `${hours}:${minutes}`;
}
/**
 * Função para obter a data atual no formato "dd de mês de aaaa"
 * @returns {string} - Data atual formatada
 */
getCurrentDate: function getCurrentDate() {
  const now = new Date();

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };

  // Define o idioma para português do Brasil
  return now.toLocaleDateString("pt-BR", options);
}
