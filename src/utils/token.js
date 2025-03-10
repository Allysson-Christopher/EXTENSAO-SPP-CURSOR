function extrairTokenNaPagina() {
  try {
    let token = sessionStorage.getItem("token") || localStorage.getItem("token");
    if (!token) throw new Error("Token não encontrado.");
    return token;
  } catch (error) {
    console.error("Erro ao extrair token:", error);
    throw error;
  }
}