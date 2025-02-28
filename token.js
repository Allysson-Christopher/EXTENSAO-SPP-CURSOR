function extrairTokenNaPagina() {
  
    try {
      let token = sessionStorage.getItem("token");
  
      if (!token) {
        console.warn("⚠️ Token não encontrado na sessionStorage, tentando localStorage...");
        token = localStorage.getItem("token");
      }
  
      return token || null;  // Retorna null se não encontrar o token
    } catch (error) {
      console.error("❌ Erro ao tentar acessar o token:", error);
      return null;  // Evita falhas na execução do script
    }
}

