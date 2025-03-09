// altere a função considerando que pieceIds é um array e predefinidos é um objeto

async function mudarHtmlDaPeca(pieceIds, predefinidos) {
  const quantidadeDeAutores =
    window.predefinidos.qualificacao_completa_do_imputado_.length;
  console.log(quantidadeDeAutores);
  console.log(window.predefinidos.qualificacao_completa_do_imputado_);
  const haMenosDeDoisAutores = quantidadeDeAutores < 2;
  
  if (haMenosDeDoisAutores) {
    for (const pieceId of pieceIds) {
      const peca = pecas.find((p) => p.id === pieceId);
      if (peca) {
        let conteudoOriginal = peca.htmlContent;
        // Inicializa conteudoPreenchido com o conteúdo original
        let conteudoPreenchido = conteudoOriginal;
        // Substitui os dados predefinidos acumulando as alterações
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoPreenchido.replace(regex, valor);
        }
        console.log(`Peça ID ${pieceId}:`, conteudoPreenchido);
        await criarEAtualizarDocumento(
          peca.nomePeca,
          conteudoPreenchido,
          peca.id
        );
      }
    }
  } else {
    let pecasParaDuplicar = [102, 24, 3, 160, 22];
    const multiAuthorPlaceholders = [
      "qualificacao_completa_do_imputado",
      "nome_da_pessoa_da_familia_do_preso_que_vai_receber_a_comunicacao",
      "grau_de_parentesco_da_pessoa_da_familia_que_vai_receber_a_comunicacao",
    ];

    let novasPecasIds = duplicarNumerosPreservandoOrdem(
      pieceIds,
      pecasParaDuplicar,
      quantidadeDeAutores
    );

    const pecasMap = new Map(pecas.map((p) => [p.id, p]));

    // Objeto para contar quantas vezes cada id apareceu em novasPecasIds
    let occurrenceMap = {};

    // Iterar sobre as novas peças e preencher os conteúdos corretamente
    for (const pieceId of novasPecasIds) {
      if (!occurrenceMap[pieceId]) {
        occurrenceMap[pieceId] = 1;
      } else {
        occurrenceMap[pieceId]++;
      }
      let occurrence = occurrenceMap[pieceId];

      const peca = pecasMap.get(pieceId);
      if (!peca) {
        console.warn(`⚠️ Peça ID ${pieceId} NÃO encontrada no mapa!`);
        continue;
      }

      let conteudoOriginal = peca.htmlContent;
      let conteudoPreenchido = conteudoOriginal;

      if (pecasParaDuplicar.includes(pieceId)) {
        for (const placeholderKey of multiAuthorPlaceholders) {
          const regex = new RegExp(`{${placeholderKey}}`, "g");
          let substitution = predefinidos[`${placeholderKey}_${occurrence}`];
          if (substitution) {
            conteudoPreenchido = conteudoPreenchido.replace(
              regex,
              substitution.toUpperCase()
            );
          }
        }
        for (const [chave, valor] of Object.entries(predefinidos)) {
          if (
            !multiAuthorPlaceholders.includes(chave) &&
            !chave.match(/^(.*)_\d+$/)
          ) {
            const regex = new RegExp(`{${chave}}`, "g");
            conteudoPreenchido = conteudoPreenchido.replace(regex, valor);
          }
        }
      } else {
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoPreenchido.replace(regex, valor);
        }
      }

      await criarEAtualizarDocumento(
        peca.nomePeca,
        conteudoPreenchido,
        peca.id
      );
    }
  }
}

function duplicarNumerosPreservandoOrdem(
  arrayNumeros,
  numerosADuplicar,
  multiplicador
) {
  let resultado = []; // Novo array que vai conter os números corretamente duplicados
  let contagem = {}; // Objeto para rastrear quantas vezes um número foi duplicado

  // Inicializa o contador para cada número que deve ser duplicado
  numerosADuplicar.forEach((num) => (contagem[num] = 0));

  arrayNumeros.forEach((num) => {
    resultado.push(num); // Adiciona o número original ao resultado

    // Se o número estiver na lista de duplicação e ainda não atingiu o limite
    if (numerosADuplicar.includes(num) && contagem[num] < multiplicador - 1) {
      for (let i = 0; i < multiplicador - 1; i++) {
        // Agora adicionamos apenas (multiplicador - 1) cópias
        resultado.push(num);
      }
      contagem[num] = multiplicador - 1; // Marca que já atingiu o limite de duplicação
    }
  });

  return resultado;
}
