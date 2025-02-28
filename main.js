async function main() {
    try {
      // Extrai o token da página
      const token = extrairTokenNaPagina();
  
      // Obtém os dados iniciais (IDs dos envolvidos)
      const dados = await fetchProcedimentoSincrono(criarUrlParaObterIdDosEnvolvidos(), token);
      console.log("Dados recebidos:", dados);
  
      // Extrai os IDs (usa pessoaFisicaId se existir, senão usa pessoaJuridicaId)
      const idsDosEnvolvidos = dados.map(item => item.pessoaFisicaId ? item.pessoaFisicaId : item.pessoaJuridicaId);
      console.log("IDs extraídos:", idsDosEnvolvidos);
  
      // Para cada ID, busca os dados completos do envolvido
      const dadosEnvolvidosCompletos = [];
      for (const id of idsDosEnvolvidos) {
        const dadosEnvolvido = await fetchProcedimento(criarUrlParaObterDadosDosEnvolvidos(id), token);
        dadosEnvolvidosCompletos.push(dadosEnvolvido);
        console.log("Dados do envolvido:", dadosEnvolvido);
      }
  
      // Exibe todos os dados completos dos envolvidos
      console.log("Todos os dados completos:", dadosEnvolvidosCompletos);
  
    } catch (error) {
      console.error("Erro na execução:", error);
    }
  }
  
  main();
  