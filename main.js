observarBotaoKitFlagrante(async () => {
  try {
    await toggleSidebar();
    await handleKitSelection();
    

  } catch (error) {
    console.error("Erro ao executar o fluxo principal:", error);
  }
});
