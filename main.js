// Remova ou comente a chamada direta da função main()
// async function main() { ... }
// main();

// Inicia a observação do botão "Kit Flagrante"
// Quando o botão for clicado, controllerDadosDosEnvolvidos será executada
observarBotaoKitFlagrante(async () => {
  try {
    await toggleSidebar();
    await controllerDadosDosEnvolvidos();
  } catch (error) {
    console.error("Erro ao executar controllerDadosDosEnvolvidos:", error);
  }
});
