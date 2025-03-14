class ApiRepository {
  constructor(token) {
    this.token = token;
    this.cache = new Map();
  }

  fetchEnvolvidos(procedimentoId) {
    const url = UrlFactory.create("envolvidos", null, procedimentoId);
    const finalUrl =
      url + (url.includes("?") ? "&" : "?") + "_=" + new Date().getTime();
    const tokenWithBearer = this.token.startsWith("Bearer ")
      ? this.token
      : "Bearer " + this.token;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", finalUrl, false);

    xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
    xhr.setRequestHeader(
      "Accept-Language",
      "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
    );
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Pragma", "no-cache");
    xhr.setRequestHeader("Authorization", tokenWithBearer);
    xhr.setRequestHeader("Procedimento-Id", extrairIdDoProcedimento());

    try {
      xhr.send(null);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      throw error;
    }

    if (xhr.status < 200 || xhr.status >= 300) {
      const errorMsg = "Erro na requisição: " + xhr.status;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    try {
      const data = JSON.parse(xhr.responseText);
      this.cache.set(finalUrl, data);
      return data;
    } catch (error) {
      console.error("Erro ao parsear JSON:", error);
      throw error;
    }
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

  async fetchIdDocumentos(procedimentoId) {
    const url = UrlFactory.create("documentosId", null, procedimentoId);
    return this._fetch(url);
  }

  async fetchTextoDocumentos(Id) {
    const url = UrlFactory.create("textoDcumentos", Id);
    return this._fetch(url);
  }

  async _fetch(url, additionalHeaders = {}) {
    if (this.cache.has(url)) {
      return this.cache.get(url);
    }

    return new Promise((resolve, reject) => {
      const tokenWithBearer = this.token.startsWith("Bearer ")
        ? this.token
        : `Bearer ${this.token}`;
      const finalUrl = `${url}${
        url.includes("?") ? "&" : "?"
      }_=${new Date().getTime()}`;

      const xhr = new XMLHttpRequest();
      xhr.open("GET", finalUrl, true);
      xhr.withCredentials = true;

      xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
      xhr.setRequestHeader(
        "Accept-Language",
        "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
      );
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("Pragma", "no-cache");
      xhr.setRequestHeader("Authorization", tokenWithBearer);
      xhr.setRequestHeader("Procedimento-Id", extrairIdDoProcedimento());
      xhr.setRequestHeader(
        "If-None-Match",
        'W/"5f2-nXTqonU9Hfx6HKQRGxT8vUEXtSY"'
      );

      for (const [key, value] of Object.entries(additionalHeaders)) {
        xhr.setRequestHeader(key, value);
      }

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          try {
            const data = JSON.parse(xhr.responseText);
            this.cache.set(finalUrl, data);
            resolve(data);
          } catch (error) {
            reject(new Error("Erro ao processar a resposta: " + error.message));
          }
        } else {
          reject(new Error(`Erro HTTP! Status: ${xhr.status}`));
        }
      };

      xhr.onerror = () => {
        reject(new Error("Erro na requisição"));
      };

      xhr.send();
    });
  }
}

async function fetchKits() {
  try {
    const response = await fetch(
      "https://kitsepecas.s3.us-east-1.amazonaws.com/kits.json"
    );
    if (!response.ok) throw new Error("Erro ao buscar os kits");
    return await response.json();
  } catch (error) {
    console.error("Erro ao carregar os kits:", error);
    return {};
  }
}







