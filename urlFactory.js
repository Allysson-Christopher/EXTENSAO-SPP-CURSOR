class UrlFactory {
    static create(endpointType, id = null, procedimentoId = null) {
      const baseUrl = "https://spp.pc.pe.gov.br/b/api";
      const cacheBuster = `?_=${new Date().getTime()}`;
      switch (endpointType) {
        case "envolvidos":
          return `${baseUrl}/procedimento/${procedimentoId}/envolvidos${cacheBuster}`;
        case "pessoaFisica":
          return `${baseUrl}/pessoa-fisicas/${id}${cacheBuster}`;
        case "pessoaJuridica":
          return `${baseUrl}/pessoa-juridicas-pesquisa?&id=${id}${cacheBuster}`;
        case "procedimento":
          return `${baseUrl}/procedimento-informacoes/${procedimentoId}?includes=naturezaMotivacao${cacheBuster}`;
        default:
          throw new Error(`Endpoint type "${endpointType}" not supported.`);
      }
    }
  }
  
  // Exportação para uso em outros arquivos
  window.UrlFactory = UrlFactory;