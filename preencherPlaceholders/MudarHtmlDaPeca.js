async function mudarHtmlDaPeca(pieceIds, predefinidos) {
  const quantidadeDeAutores =
    window.predefinidos.qualificacao_completa_do_imputado_.length;
  const haMenosDeDoisAutores = quantidadeDeAutores < 2;
  const modalTextHTML = `
  <div style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  ">
    <div style="
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      min-width: 300px;
    ">
      <h3>Processando...</h3>
      <progress id="progressBar" value="0" max="100" style="width: 100%;"></progress>
      <p id="progressText">Progresso: 0%</p>
    </div>
  </div>
`;

  if (haMenosDeDoisAutores) {
    // Define o total de peças a processar e cria o modal de progresso
    const total = pieceIds.length;
    const progressController = createProgressModal(total, modalTextHTML);

    // Itera sobre cada peça e atualiza o conteúdo
    for (const [index, pieceId] of pieceIds.entries()) {
      const peca = pecas.find((p) => p.id === pieceId);
      if (peca) {
        let conteudoOriginal = peca.htmlContent;
        let conteudoPreenchido = conteudoOriginal;
        // Substitui os dados predefinidos acumulando as alterações
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoPreenchido.replace(regex, String(valor).toUpperCase());
        }
        await criarEAtualizarDocumento(
          peca.nomePeca,
          conteudoPreenchido,
          peca.id
        );
      }
      // Atualiza a barra de progresso a cada iteração
      if (progressController) {
        progressController.update(index);
      }
    }
    // Fecha o modal após o processamento
    if (progressController) {
      progressController.close();
    }
  } else {
    let pecasParaDuplicar = [102, 24, 3, 160, 22, 28];
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
    // Define o total de peças a processar para a barra de progresso
   


    const total = novasPecasIds.length;
    const progressController = createProgressModal(total, modalTextHTML);

    const pecasMap = new Map(pecas.map((p) => [p.id, p]));

    // Objeto para contar quantas vezes cada id apareceu em novasPecasIds
    let occurrenceMap = {};

    // Itera sobre as novas peças e preenche os conteúdos corretamente
    for (const [index, pieceId] of novasPecasIds.entries()) {
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
            conteudoPreenchido = conteudoPreenchido.replace(regex, String(valor).toUpperCase());
          }
        }
      } else {
        for (const [chave, valor] of Object.entries(predefinidos)) {
          const regex = new RegExp(`{${chave}}`, "g");
          conteudoPreenchido = conteudoPreenchido.replace(regex, String(valor).toUpperCase());
        }
      }

      await criarEAtualizarDocumento(
        peca.nomePeca,
        conteudoPreenchido,
        peca.id
      );
      // Atualiza a barra de progresso a cada iteração
      if (progressController) {
        progressController.update(index);
      }
    }
    // Fecha o modal após o processamento
    if (progressController) {
      progressController.close();
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


// Função para criar e controlar o modal de progresso
function createProgressModal(total, modalTextHTML) {
  // Seleciona ou cria o modal de progresso
  let modal = document.getElementById("progressModal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "progressModal";
    modal.innerHTML = modalTextHTML;
    document.body.appendChild(modal);
  } else {
    console.log("Modal encontrado no DOM.");
  }

  // Seleciona os elementos da barra e do texto de progresso
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");

  if (!progressBar || !progressText) {
    console.error("Erro: Elementos de progresso não foram encontrados.");
    return null;
  }

  // Exibe o modal
  modal.style.display = "block";

  return {
    update: function(index) {
      const progressoAtual = ((index + 1) / total) * 100;
      progressBar.value = progressoAtual;
      progressText.textContent = `Progresso: ${Math.round(progressoAtual)}%`;
    },
    close: function() {
      setTimeout(() => {
        const modalTitle = modal.querySelector("h3");
        if (modalTitle) {
          modalTitle.textContent =
            "Concluído! Verifique os documentos na aba DOCUMENTOS.";
        }
        setTimeout(() => {
          modal.style.display = "none";
          window.location.reload();
        }, 4000);
      }, 1000);
    }
  };
}