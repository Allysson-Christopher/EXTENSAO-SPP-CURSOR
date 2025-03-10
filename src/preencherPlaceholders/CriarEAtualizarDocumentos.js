async function criarEAtualizarDocumento(
  nomePeca,
  conteudoPreenchido,
  pecaTipoId
) {
  // Obtém o token da sessionStorage
  const token = sessionStorage.getItem("token");
  if (!token) {
    console.error("⚠️ Token de autenticação não encontrado na sessionStorage.");
    return;
  }
  const delegadoUsuarioId = parseInt(window.predefinidos.delegadoId, 10);
  const policialUsuarioId = parseInt(window.predefinidos.escrivaoId, 10);
  const procedimentoId = parseInt(extrairIdDoProcedimento(), 10);

  // 1. Defina a URL da requisição POST
  const postUrl = "https://spp.pc.pe.gov.br/b/api/v1/documentos";


  // 2. Defina o payload da requisição POST
  const postData = {
    pecaTipoId: pecaTipoId,
    delegadoUsuarioId: delegadoUsuarioId,
    policialUsuarioId: policialUsuarioId,
    procedimentoId: procedimentoId,
    descricao: nomePeca,
    // Adicione outros campos conforme necessário
  };

  // 3. Defina os cabeçalhos da requisição POST
  const headers = {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: token,
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    Host: "spp.pc.pe.gov.br",
    Origin: "https://spp.pc.pe.gov.br",
    Pragma: "no-cache",
    Referer: "https://spp.pc.pe.gov.br/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": navigator.userAgent, // Opcional
  };

  try {
    // 4. Enviar a requisição POST
    const postResponse = await fetch(postUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(postData),
    });

    // Verificar se a requisição POST foi bem-sucedida
    if (!postResponse.ok) {
      throw new Error(
        `Erro na requisição POST: ${postResponse.status} ${postResponse.statusText}`
      );
    }

    // 5. Processar a resposta da requisição POST
    const postResponseData = await postResponse.json();

    // 6. Verificar se os dados necessários estão presentes na resposta
    if (!postResponseData.data) {
      throw new Error('Resposta da API POST não contém a propriedade "data".');
    }

    // 7. Extrair os dados necessários da resposta
    const {
      pecaId,
      versao,
      dataHora,
      delegadoUsuarioId: delegadoIdPost,
      numero,
      policialUsuarioId: policialIdPost,
      unidadeId,
    } = postResponseData.data;

    // Verificar se todos os campos foram extraídos corretamente
    if (
      pecaId === undefined ||
      versao === undefined ||
      dataHora === undefined ||
      delegadoIdPost === undefined ||
      numero === undefined ||
      policialIdPost === undefined ||
      unidadeId === undefined
    ) {
      throw new Error(
        "Alguns campos necessários estão ausentes na resposta da API POST."
      );
    }

    if (
      nomePeca.includes("Ofício") ||
      nomePeca.includes("Comunicação Interna") ||
      nomePeca.includes("Tombamento:")
    ) {
      // Divide o conteúdo original em parágrafos e quebras de linha
      const paragrafosOriginais =
        postResponseData.data.conteudoHtml.split(/<p>|<br>/);

      for (const paragrafo of paragrafosOriginais) {
        if (
          paragrafo.includes("Ofício n") ||
          paragrafo.includes("Comunicação Interna n")
        ) {
          const textoParaSubstituir = paragrafo;

          // Divide o conteúdo preenchido em parágrafos e quebras de linha
          const paragrafosPreenchidos = conteudoPreenchido.split(/<p>|<br>/);

          for (let i = 0; i < paragrafosPreenchidos.length; i++) {
            if (
              paragrafosPreenchidos[i].includes("Of&iacute;cio n&ordm") ||
              paragrafosPreenchidos[i].includes("Of&iacute;cio n&deg") ||
              paragrafosPreenchidos[i].includes(
                "Comunica&ccedil;&atilde;o Interna n&deg"
              ) ||
              paragrafosPreenchidos[i].includes("Tombamento:")
            ) {
              // Substitui o parágrafo ou quebra de linha correspondente
              paragrafosPreenchidos[i] = textoParaSubstituir;
              break;
            }
          }

          // Junta os parágrafos novamente, mantendo tanto <p> quanto <br>
          conteudoPreenchido = paragrafosPreenchidos.join("<p>");
        }
      }
    }

    // 8. Modificar o conteúdo HTML
    const conteudoModificado = conteudoPreenchido;

    // 9. Preparar o payload para a requisição PUT utilizando os dados extraídos
    const putData = {
      ativo: true,
      conteudoHtml: conteudoModificado,
      dataHora: dataHora, // Obtido do POST
      delegadoUsuarioId: delegadoUsuarioId, // Obtido da extração
      numero: numero, // Obtido do POST
      pecaId: pecaId, // Obtido do POST
      pecaTipoId: pecaTipoId, // Pode permanecer como está ou ser obtido do POST se necessário
      policialUsuarioId: policialUsuarioId, // Obtido da extração
      procedimentoId: procedimentoId, // Obtido da extração
      unidadeId: unidadeId, // Obtido do POST
      versao: versao, // Obtido do POST; verifique se precisa ser incrementado
    };

    // 10. Defina a URL da requisição PUT
    const putUrl = `https://spp.pc.pe.gov.br/b/api/v1/documentos/${pecaId}`;

    // 11. Defina os cabeçalhos da requisição PUT (mesmos do POST)
    const putHeaders = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: headers.Authorization, // Reutilizar o mesmo token
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br, zstd",
      "Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      Host: "spp.pc.pe.gov.br",
      Origin: "https://spp.pc.pe.gov.br",
      Pragma: "no-cache",
      Referer: "https://spp.pc.pe.gov.br/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-origin",
      "User-Agent": navigator.userAgent, // Opcional
    };

    // 12. Enviar a requisição PUT
    const putResponse = await fetch(putUrl, {
      method: "PUT",
      headers: putHeaders,
      body: JSON.stringify(putData),
    });

    // Verificar se a requisição PUT foi bem-sucedida
    if (!putResponse.ok) {
      throw new Error(
        `Erro na requisição PUT: ${putResponse.status} ${putResponse.statusText}`
      );
    }

    // 13. Processar a resposta da requisição PUT
    const putResponseData = await putResponse.json();
  } catch (error) {
    console.error(
      "Erro no processo de criação e atualização do documento:",
      error
    );
  }
}
