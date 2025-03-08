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
      let conteudoOriginal = peca.htmlContent;
      if (peca) {
        // Substitui os inputs normais

        // Substitui os dados predefinidos
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoOriginal.replace(regex, valor);
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
      // Incrementa a contagem de ocorrência para esse id
      if (!occurrenceMap[pieceId]) {
        occurrenceMap[pieceId] = 1;
      } else {
        occurrenceMap[pieceId]++;
      }
      let occurrence = occurrenceMap[pieceId];

      // Obter a peça pelo id
      const peca = pecasMap.get(pieceId);
      if (!peca) {
        console.warn(`⚠️ Peça ID ${pieceId} NÃO encontrada no mapa!`);
        continue;
      }

      let conteudoOriginal = peca.htmlContent;
      let conteudoPreenchido = conteudoOriginal;

      // Se o id da peça está em pecasParaDuplicar, aplicamos a lógica dos multi-autores
      if (pecasParaDuplicar.includes(pieceId)) {
        // Para cada placeholder de multi-autor, substitui pelo valor correspondente com sufixo de ocorrência
        for (const placeholderKey of multiAuthorPlaceholders) {
          const regex = new RegExp(`{${placeholderKey}}`, "g");
          // Procura no objeto predefinidos pela chave com sufixo _<ocorrencia>
          let substitution = predefinidos[`${placeholderKey}_${occurrence}`];
          if (substitution) {
            conteudoPreenchido = conteudoPreenchido.replace(
              regex,
              substitution.toUpperCase()
            );
          }
        }
        // Para os demais placeholders que não fazem parte dos multi-autores,
        // fazemos a substituição normalmente, evitando chaves que já possuem sufixo.
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
        // Se o id não estiver em pecasParaDuplicar, substitui todos os placeholders normalmente
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoPreenchido.replace(regex, valor);
        }
      }

      // Cria e atualiza o documento com o conteúdo preenchido
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
