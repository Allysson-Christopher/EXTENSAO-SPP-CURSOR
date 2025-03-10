async function enviarDados(total) {
    const apiUrl =
      "https://lbovhwxvla.execute-api.us-east-1.amazonaws.com/dev/usuarios";

    predefinidos = window.predefinidos;
    const payload = {
      tabela: "LOGS_SPP",
      colunas: [
        "tipo_de_procedimento",
        "numero_do_procedimento",
        "escrivao",
        "delegado",
        "peças_geradas",
      ],
      
      valores: [
        [
          predefinidos.tipo_de_procedimento,
          predefinidos.numero_do_procedimento,
          predefinidos.nome_do_escrivao,
          predefinidos.nome_do_delegado,
          total,
        ],
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registro inserido com sucesso!");
      } else {
        console.log(`Erro: ${data.error}`);
      }
    } catch (error) {
      console.error("Erro ao enviar requisição:", error);
    }
  }