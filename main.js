observarBotaoKitFlagrante(async () => {
  try {
    await toggleSidebar();
    await handleKitSelection();
    predefinidos = await controllerDadosDosEnvolvidos();
    window.predefinidos = predefinidos;

  } catch (error) {
    console.error("Erro ao executar o fluxo principal:", error);
  }
});
