class ApiRepository {
    constructor(token) {
      this.token = token;
      this.cache = new Map();
    }
  
    async fetchEnvolvidos(procedimentoId) {
      const url = UrlFactory.create("envolvidos", null, procedimentoId);
      return this._fetch(url);
    }
  
    async fetchPessoaFisica(id) {
      const url = UrlFactory.create("pessoaFisica", id);
      return this._fetch(url);
    }
  
    async fetchPessoaJuridica(id) {
      const url = UrlFactory.create("pessoaJuridica", id);
      return this._fetch(url);
    }
  
    async fetchProcedimento(procedimentoId) {
      const url = UrlFactory.create("procedimento", null, procedimentoId);
      return this._fetch(url);
    }
  
    async _fetch(url) {
      if (this.cache.has(url)) return this.cache.get(url);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${this.token}`,
            "Procedimento-Id": extrairIdDoProcedimento(),
          },
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        this.cache.set(url, data);
        return data;
      } catch (error) {
        console.error("Erro na requisição:", error);
        throw error;
      }
    }
  }
  
  // Exportação para uso em outros arquivos
  window.ApiRepository = ApiRepository;