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
          return `https://spp.pc.pe.gov.br/b/api/pessoa-juridicas-pesquisa?&id=${id}`;
        case "procedimento":
          return `${baseUrl}/procedimento-informacoes/${procedimentoId}?includes=naturezaMotivacao${cacheBuster}`;
        case "documentosId":
          return `https://spp.pc.pe.gov.br/b/api/v1/procedimento/${procedimentoId}/documentos${cacheBuster}`;
        case "textoDcumentos":
          return `https://spp.pc.pe.gov.br/b/api/v1/documentos/${id}${cacheBuster}`;
        default:
          throw new Error(`Endpoint type "${endpointType}" not supported.`);
      }
    }
  }