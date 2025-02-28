async function fetchProcedimento(apiUrl, token) {
    try {
    // Se o token não iniciar com "Bearer ", adiciona o prefixo
    const tokenWithBearer = token.startsWith("Bearer ")
      ? token
      : `Bearer ${token}`;

    // Adiciona um parâmetro único à URL para evitar o cache
    const finalUrl = `${apiUrl}${
      apiUrl.includes("?") ? "&" : "?"
    }_=${new Date().getTime()}`;

    // Extrai o idDoProcedimento da URL
    // Exemplo de URL: "https://spp.pc.pe.gov.br/b/api/procedimento/269551/envolvidos"
    // O array após split: ["https:", "", "spp.pc.pe.gov.br", "b", "api", "procedimento", "269551", "envolvidos"]
    const partesUrl = apiUrl.split("/");
    const idDoProcedimento = partesUrl[6]; // índice 6 corresponde ao ID (neste exemplo, "269551")

    const response = await fetch(finalUrl, {
      method: "GET",
      cache: "no-store", // Força a não utilizar cache
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
        Authorization: tokenWithBearer,
        Connection: "keep-alive",
        Host: "spp.pc.pe.gov.br",
        // Cabeçalho If-None-Match removido para forçar nova resposta
        "Procedimento-Id": idDoProcedimento,
        Referer: "https://spp.pc.pe.gov.br/",
        "Sec-CH-UA":
          '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
        "Sec-CH-UA-Mobile": "?0",
        "Sec-CH-UA-Platform": '"Windows"',
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "User-Agent": navigator.userAgent, // Usa o user agent do próprio navegador
      },
    });
    if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
      throw error;
    }
}

