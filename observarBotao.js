
function observarBotaoKitFlagrante(mainCallback) {
  let observer = null;

  try {

    // Seleciona o botão com o texto "Kit Flagrante" (mais flexível, usando includes)
    function encontrarBotao() {
      const elements = Array.from(document.querySelectorAll('button, input[type="button"]'));
      const botao = elements.find(element =>
        element.textContent.toLowerCase().includes('kit flagrante')
      );
      return botao;
    }

    // Função para verificar e corrigir a visibilidade/clicabilidade do botão
    function verificarEBotao() {
      const botao = encontrarBotao();
      if (botao) {
        botao.style.display = 'block';
        botao.style.visibility = 'visible';
        botao.disabled = false;

        if (!botao.dataset.cliqueAdicionado) {
          botao.addEventListener('click', async () => {
            try {
              await mainCallback();
            } catch (error) {
              console.error("Erro ao executar main após clique no botão:", error);
            }
          });
          botao.dataset.cliqueAdicionado = 'true';
        } 
      }
    }

    // Configura o MutationObserver para monitorar mudanças no DOM
    function iniciarObservador() {
      observer = new MutationObserver((mutations) => {
        verificarEBotao();
      });

      const waitForBody = () => {
        if (document.body) {
          observer.observe(document.body, { childList: true, subtree: true });
        } else {
          setTimeout(waitForBody, 100);
        }
      };
      waitForBody();
    }

    // Verificação periódica (polling)
    function iniciarPolling() {
      const intervalId = setInterval(() => {
        verificarEBotao();
      }, 2000);

      window.addEventListener('unload', () => {
        clearInterval(intervalId);
        if (observer) observer.disconnect();
      });
    }

    // Inicia imediatamente e também no DOMContentLoaded
    verificarEBotao();
    iniciarObservador();
    iniciarPolling();

    document.addEventListener('DOMContentLoaded', () => {
      verificarEBotao();
    });
  } catch (error) {
    console.error("Erro no script de observação:", error);
  }
}

