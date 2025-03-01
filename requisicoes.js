function fetchParaObterIdDosEnvolvidos(apiUrl, token) {
    // Se o token não iniciar com "Bearer ", adiciona o prefixo
    var tokenWithBearer = token.startsWith("Bearer ") ? token : "Bearer " + token;
  
    // Adiciona um parâmetro único à URL para evitar o cache
    var finalUrl = apiUrl + (apiUrl.includes("?") ? "&" : "?") + "_=" + new Date().getTime();
  
    // Extrai o idDoProcedimento da URL
    // Exemplo: "https://spp.pc.pe.gov.br/b/api/procedimento/269551/envolvidos"
    var partesUrl = apiUrl.split("/");
    var idDoProcedimento = extrairIdDoProcedimento();
  
    var xhr = new XMLHttpRequest();
    // O terceiro parâmetro "false" torna a requisição SÍNCRONA
    xhr.open("GET", finalUrl, false);
  
    // Define os cabeçalhos permitidos (alguns cabeçalhos, como User-Agent, não podem ser definidos)
    xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
    xhr.setRequestHeader("Accept-Language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Pragma", "no-cache");
    xhr.setRequestHeader("Authorization", tokenWithBearer);
    xhr.setRequestHeader("Procedimento-Id", idDoProcedimento);
  
    try {
      xhr.send(null);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      throw error;
    }
  
    if (xhr.status < 200 || xhr.status >= 300) {
      var errorMsg = "Erro na requisição: " + xhr.status;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  
    // Verifica se o conteúdo da resposta é JSON
    var contentType = xhr.getResponseHeader("Content-Type");
    if (!contentType || contentType.indexOf("application/json") === -1) {
      var errorMsg = "Resposta inesperada da API: " + xhr.responseText;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }
  
    try {
      var data = JSON.parse(xhr.responseText);
      return data;
    } catch (error) {
      console.error("Erro ao parsear JSON:", error);
      throw error;
    }
  }


  function fetchParaObterDadosDosEnvolvidosOuProcedimento(apiUrl, token) {
    return new Promise((resolve, reject) => {
      // Se o token não iniciar com "Bearer ", adiciona o prefixo
      const tokenWithBearer = token.startsWith("Bearer ") ? token : `Bearer ${token}`;
  
      // Adiciona um parâmetro único à URL para evitar o cache
      const finalUrl = `${apiUrl}${apiUrl.includes("?") ? "&" : "?"}_=${new Date().getTime()}`;
  
      // Para este exemplo, o cabeçalho "Procedimento-Id" deve ser "269551" conforme os dados informados.
      const procedimentoId = extrairIdDoProcedimento();
  
      const xhr = new XMLHttpRequest();
      xhr.open("GET", finalUrl, true);
      xhr.withCredentials = true; // Envia cookies de sessão, se necessário
  
      // Define os cabeçalhos permitidos
      xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
      xhr.setRequestHeader("Accept-Language", "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7");
      xhr.setRequestHeader("Cache-Control", "no-cache");
      xhr.setRequestHeader("Pragma", "no-cache");
      xhr.setRequestHeader("Authorization", tokenWithBearer);
      xhr.setRequestHeader("If-None-Match", 'W/"5f2-nXTqonU9Hfx6HKQRGxT8vUEXtSY"');
      xhr.setRequestHeader("Procedimento-Id", procedimentoId);  
      xhr.onload = function() {
        if (xhr.status < 200 || xhr.status >= 300) {
          return reject(new Error(`Erro na requisição: ${xhr.status}`));
        }
  
        const contentType = xhr.getResponseHeader("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          return reject(new Error(`Resposta inesperada da API: ${xhr.responseText}`));
        }
  
        try {
          const data = JSON.parse(xhr.responseText);
        //   console.log("Resposta da API:", data);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      };
  
      xhr.onerror = function() {
        reject(new Error("Erro na requisição"));
      };
  
      xhr.send();
    });
  }
  