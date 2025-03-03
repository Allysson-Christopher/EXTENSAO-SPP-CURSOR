async function main() {
  try {
    await controllerDadosDosEnvolvidos();
  } catch (error) {
    console.error("Erro na função main:", error);
  }
}

main();