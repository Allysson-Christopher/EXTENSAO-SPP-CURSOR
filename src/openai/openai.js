// Função para reescrever texto usando JavaScript puro (Fetch API)
async function reescreverTextoComOpenAI(textoOriginal, instrucoes, apiKey) {
  // Configuração da requisição
  const url = 'https://api.openai.com/v1/chat/completions';
  const dados = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Você é um assistente especializado em reescrever textos. ${instrucoes} Retorne a resposta como um objeto JSON contendo a propriedade "depoimentos", que deve ser um array com os dois depoimentos.`
      },
      {
        role: "user",
        content: `Reescreva o seguinte texto: ${textoOriginal}`
      }
    ],
    temperature: 0.7,
    max_tokens: 3000
  };

  const opcoes = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  };

  try {
    // Fazendo a requisição
    const resposta = await fetch(url, opcoes);
    
    // Verificando se a resposta foi bem-sucedida
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(`Erro ${resposta.status}: ${JSON.stringify(erro)}`);
    }
    
    // Processando a resposta
    const resultado = await resposta.json();
    const respostaText = resultado.choices[0].message.content.trim();
    
    // Tenta converter a resposta para JSON
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(respostaText);
    } catch (e) {
      throw new Error('Erro ao parsear a resposta JSON: ' + e);
    }
    
    // Verifica se a resposta é um array ou um objeto contendo a propriedade "depoimentos"
    let depoimentos;
    if (Array.isArray(parsedResponse)) {
      depoimentos = parsedResponse;
    } else if (parsedResponse.depoimentos && Array.isArray(parsedResponse.depoimentos)) {
      depoimentos = parsedResponse.depoimentos;
    } else {
      throw new Error('A resposta JSON não contém um array com os depoimentos.');
    }
    
    // Verifica se o array contém exatamente dois depoimentos
    if (depoimentos.length !== 2) {
      throw new Error('O array de depoimentos não contém exatamente dois depoimentos.');
    }
    
    // Armazena cada depoimento em uma variável e retorna um array com ambos
    const [depoimento1, depoimento2] = depoimentos;
    return [depoimento1, depoimento2];
  } catch (erro) {
    console.error('Erro ao chamar a API da OpenAI:', erro);
    throw erro;
  }
}


async function reescreverResumoDosFatos(textoOriginal, instrucoes, apiKey) {
  const url = 'https://api.openai.com/v1/chat/completions';
  const dados = {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: `Você é um assistente especializado em reescrever textos. ${instrucoes} Retorne a resposta como um texto simples.`
      },
      {
        role: "user",
        content: `Reescreva o seguinte texto: ${textoOriginal}`
      }
    ],
    temperature: 0.7,
    max_tokens: 3000
  };

  const opcoes = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  };

  try {
    const resposta = await fetch(url, opcoes);
    if (!resposta.ok) {
      const erro = await resposta.json();
      throw new Error(`Erro ${resposta.status}: ${JSON.stringify(erro)}`);
    }
    
    const resultado = await resposta.json();
    const respostaText = resultado.choices[0].message.content.trim();
    return respostaText;
  } catch (erro) {
    console.error('Erro ao chamar a API da OpenAI:', erro);
    throw erro;
  }
}
