observarBotaoKitFlagrante(async () => {
  try {
    await toggleSidebar();
    await handleKitSelection();
    await controllerDadosDosEnvolvidos();
  } catch (error) {
    console.error("Erro ao executar o fluxo principal:", error);
  }
});
