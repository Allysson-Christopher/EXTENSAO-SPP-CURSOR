class DataAdapter {
  static adapt(obj, keys) {
    return keys.reduce((acc, key) => {
      if (
        obj.hasOwnProperty(key) &&
        obj[key] !== null &&
        obj[key] !== "" &&
        obj[key] !== "Não Informado"
      ) {
        if (key === "delegadoAtual" || key === "escrivaoAtual") {
          acc[key] = obj[key].nome || null;
          acc[`${key}Id`] = obj[key].id || null;
        } else if (key === "naturezaProcedimento" && Array.isArray(obj[key])) {
          const natureza = obj[key][0];
          if (natureza) {
            acc["dataDoFato"] = natureza.data || null;
            acc["horaDoFato"] = natureza.hora || null;
            if (natureza.endereco) {
              const end = natureza.endereco;
              acc["enderecoDoFato"] =
                [
                  end.logradouro || "",
                  end.numero || "",
                  end.bairro || "",
                  end.municipio?.descricao || "",
                  end.municipio?.uf?.sigla || "",
                  end.cep || "",
                ]
                  .filter((val) => val && val !== "Não Informado")
                  .join(", ") || null;
            }
          }
        } else if (key === "procedimentoNoticia" && Array.isArray(obj[key])) {
          const noticia = obj[key][0]?.noticia;
          if (noticia) {
            acc["numeroDoBO"] = noticia.numeroNoticia || null;
            acc["conteudoDoBO"] = noticia.conteudo || null;
          }
        } else if (
          key === "procedimentoInstauracao" &&
          obj[key]?.tipoInstauracao
        ) {
          acc[key] = {
            descricao: obj[key].tipoInstauracao.descricao || null,
            sigla: obj[key].tipoInstauracao.sigla || null,
          };
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          acc[key] = obj[key].descricao || obj[key];
        } else if (Array.isArray(obj[key])) {
          acc[key] = obj[key]
            .map((item) => item.descricao || item)
            .filter((val) => val)
            .join(", ");
        } else {
          acc[key] = obj[key];
        }
      }
      return acc;
    }, {});
  }

  static adaptEnvolvido(obj, keys) {
    return keys.reduce((acc, key) => {
      if (
        obj.hasOwnProperty(key) &&
        obj[key] !== null &&
        obj[key] !== "" &&
        obj[key] !== "Não Informado"
      ) {
        if (key === "endereco" && Array.isArray(obj[key])) {
          const enderecoCompleto = obj[key]
            .map((end) => end.enderecoCompleto || null)
            .filter((val) => val && val !== "Não Informado")
            .join(", ");
          if (enderecoCompleto) acc[key] = enderecoCompleto;
        } else if (key === "contato" && Array.isArray(obj[key])) {
          const valoresContato = obj[key]
            .map((cont) => cont.valor || null)
            .filter((val) => val && val !== "Não Informado")
            .join(", ");
          if (valoresContato) acc[key] = valoresContato;
        } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
          acc[key] = obj[key].descricao || obj[key];
        } else if (Array.isArray(obj[key])) {
          acc[key] = obj[key]
            .map((item) => item.descricao || item)
            .filter((val) => val)
            .join(", ");
        } else {
          acc[key] = obj[key];
        }
      }
      return acc;
    }, {});
  }
}

function extrairDadosPessoaFisica(dados) {
  const keys = [
    "nome",
    "nomeMae",
    "dataNascimento",
    "nomePai",
    "cpf",
    "naturalidadeMunicipio",
    "estadoCivil",
    "instrucao",
    "profissao",
    "endereco",
    "contato",
  ];
  return DataAdapter.adaptEnvolvido(dados, keys);
}

function extrairDadosPessoaJuridica(dados) {
  const keys = ["nomeFantasia"];
  return DataAdapter.adaptEnvolvido(dados, keys);
}

function extrairMapaNomeEnvolvimento(dados) {
  return dados.reduce((acc, item) => {
    if (item.nome) acc[item.nome] = item.envolvimentoTipoDescricao;
    if (item.nomeFantasia)
      acc[item.nomeFantasia] = item.envolvimentoTipoDescricao;
    return acc;
  }, {});
}

async function buscarDadosEnvolvidos(ids, tipo, apiRepository) {
  const promises = ids.map((id) =>
    tipo === "fisica"
      ? apiRepository.fetchPessoaFisica(id)
      : apiRepository.fetchPessoaJuridica(id)
  );
  return Promise.all(promises);
}

function listaDeObjetosParaStrings(lista) {
  return lista.map((obj) => {
    const nome = obj.nome || obj.nomeFantasia || "";
    const entries = Object.entries(obj)
      .filter(
        ([key, value]) =>
          value &&
          value !== "Não Informado" &&
          key !== "nome" &&
          key !== "nomeFantasia"
      )
      .map(([key, value]) => `${key}: ${value}`);
    return `${nome ? `nome: ${nome}` : ""}${
      entries.length ? (nome ? ", " : "") + entries.join(", ") : ""
    }`;
  });
}

function filtrarPorEnvolvimento(listaFormatada, mapaEnvolvimento, tipo) {
  return listaFormatada.filter((item) => {
    const nomeMatch = item.match(/nome: ([^,]+)/);
    const nome = nomeMatch ? nomeMatch[1] : "";
    return mapaEnvolvimento[nome] === tipo;
  });
}

function formatarListaComE(lista) {
  if (lista.length === 0) return "";
  if (lista.length === 1) return lista[0];
  return lista.slice(0, -1).join(", ") + " e " + lista[lista.length - 1];
}

function formatarNumero16Digitos(numero) {
  // Verifica se o input é uma string e tem exatamente 16 dígitos
  if (
    typeof numero !== "string" ||
    numero.length !== 16 ||
    !/^\d+$/.test(numero)
  ) {
    throw new Error(
      "A entrada deve ser uma string com exatamente 16 dígitos numéricos."
    );
  }

  // Divide a string em partes e formata
  const parte1 = numero.slice(0, 4); // Primeiros 4 dígitos
  const parte2 = numero.slice(4, 8); // Próximos 4 dígitos
  const parte3 = numero.slice(8, 14); // Próximos 6 dígitos
  const parte4 = numero.slice(14, 16); // Últimos 2 dígitos

  // Retorna a string formatada
  return `${parte1}.${parte2}.${parte3}-${parte4}`;
}

function formatarStringsDasQualificacoes(arrayDeStrings) {
  if (!Array.isArray(arrayDeStrings)) {
    throw new Error("A entrada deve ser um array de strings.");
  }

  return arrayDeStrings.map(strOriginal => {
    if (typeof strOriginal !== 'string') {
      throw new Error("Todos os elementos do array devem ser strings.");
    }
    
    let str = strOriginal; // cria cópia para manipulação

    // --- Extração do endereço ---
    let enderecoFormatted = '';
    // Regex que captura desde "endereco:" até "ponto de referencia:" com seus valores
    let enderecoRegex = /endereco:\s*((?:[^,]+:\s*[^,]+,\s*)*ponto de referencia:\s*[^,]+)/;
    let enderecoMatch = str.match(enderecoRegex);
    if (enderecoMatch) {
      let enderecoBlock = enderecoMatch[1].trim();
      // Separa os pares chave:valor pelo separador vírgula
      let parts = enderecoBlock.split(',');
      let validParts = [];
      parts.forEach(part => {
        part = part.trim();
        let [chave, ...valorParts] = part.split(':');
        if (valorParts.length > 0) {
          let valor = valorParts.join(':').trim();
          // Inclui somente se o valor existir, não for vazio e não for "não informado" (qualquer capitalização)
          if (valor && valor.toLowerCase() !== "não informado") {
            validParts.push(`${chave.trim()}: ${valor}`);
          }
        }
      });
      if (validParts.length > 0) {
        enderecoFormatted = validParts.join(', ');
      }
      // Remove o bloco de endereço da string para evitar interferências nas próximas extrações
      str = str.replace(enderecoRegex, '').trim();
    }
    // --- Fim da extração do endereço ---

    // Extrair o valor de nome (ou nomeFantasia)
    let nome = '';
    const nomeMatch = str.match(/nome: ([^,]+)/);
    const nomeFantasiaMatch = str.match(/nomeFantasia: ([^,]+)/);
    if (nomeMatch) {
      nome = nomeMatch[1].trim();
    } else if (nomeFantasiaMatch) {
      nome = nomeFantasiaMatch[1].trim();
    }

    // Extrair os valores de nomeMae e nomePai, se existirem
    let nomeMae = '';
    let nomePai = '';
    let resultado = str; // string a partir da qual os demais campos serão extraídos

    const nomeMaeMatch = str.match(/nomeMae: ([^,]+)/);
    const nomePaiMatch = str.match(/nomePai: ([^,]+)/);

    if (nomeMaeMatch && nomePaiMatch) {
      nomeMae = nomeMaeMatch[1].trim();
      nomePai = nomePaiMatch[1].trim();
      resultado = resultado.replace(/nomeMae: [^,]+,/, '').replace(/nomePai: [^,]+,/, '');
    } else if (nomeMaeMatch) {
      nomeMae = nomeMaeMatch[1].trim();
      resultado = resultado.replace(/nomeMae: [^,]+,/, '');
    } else if (nomePaiMatch) {
      nomePai = nomePaiMatch[1].trim();
      resultado = resultado.replace(/nomePai: [^,]+,/, '');
    }

    // Construir a string começando com o nome
    let formattedString = nome ? `${nome}` : '';

    // Adicionar "filho de [nomeMae] e [nomePai]" se existirem
    if (nomeMae || nomePai) {
      const paisFormatado = `filho de ${nomeMae ? nomeMae : ''}${(nomeMae && nomePai) ? ' e ' : ''}${nomePai ? nomePai : ''}`;
      formattedString += `${formattedString ? ', ' : ''}${paisFormatado}`;
    }

    // Substituições para os demais campos
    const substituicoes = {
      "dataNascimento: ": "data de nascimento ",
      "naturalidadeMunicipio: ": "natural de ",
      "estadoCivil: ": "estado civil ",
      "instrucao: ": "escolaridade ",
      "contato: ": "contato ",
      "profissao: ": "profissão ",
    };

    // Percorrer as substituições e inserir o endereço somente uma vez
    for (const [original, substituto] of Object.entries(substituicoes)) {
      // Se for "contato: " e o campo existir, insere o endereço apenas uma vez
      if (
        original === "contato: " &&
        enderecoFormatted &&
        resultado.includes("contato: ") &&
        !formattedString.includes("endereço: ")
      ) {
        formattedString += `${formattedString ? ', ' : ''}endereço: ${enderecoFormatted}`;
      }
      if (resultado.includes(original)) {
        const valor = resultado.match(new RegExp(`${original}([^,]+)`))?.[1]?.trim() || '';
        if (valor && valor.toLowerCase() !== 'não informado') {
          formattedString += `${formattedString ? ', ' : ''}${substituto}${valor}`;
        }
      }
    }

    // Se não houver campo "contato:" e o endereço existir, adiciona-o ao final (se ainda não foi inserido)
    if (!resultado.includes("contato: ") && enderecoFormatted && !formattedString.includes("endereço: ")) {
      formattedString += `${formattedString ? ', ' : ''}endereço: ${enderecoFormatted}`;
    }

    // Limpeza final de vírgulas e espaços extras
    formattedString = formattedString.trim().replace(/^, /, '').replace(/, $/, '');

    // Retorna a string formatada (ou a original caso nada seja formatado)
    return formattedString || strOriginal;
  });
}
