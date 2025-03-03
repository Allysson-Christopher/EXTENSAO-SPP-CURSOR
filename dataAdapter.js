class DataAdapter {
    static adapt(obj, keys) {
      return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== '' && obj[key] !== 'Não Informado') {
          if (key === "delegadoAtual" || key === "escrivaoAtual") {
            acc[key] = obj[key].nome || null;
          } else if (key === "naturezaProcedimento" && Array.isArray(obj[key])) {
            const natureza = obj[key][0];
            if (natureza) {
              acc["dataDoFato"] = natureza.data || null;
              acc["horaDoFato"] = natureza.hora || null;
              if (natureza.endereco) {
                const end = natureza.endereco;
                acc["enderecoDoFato"] = [
                  end.logradouro || '',
                  end.numero || '',
                  end.bairro || '',
                  end.municipio?.descricao || '',
                  end.municipio?.uf?.sigla || '',
                  end.cep || ''
                ].filter(val => val && val !== 'Não Informado').join(', ') || null;
              }
            }
          } else if (key === "procedimentoNoticia" && Array.isArray(obj[key])) {
            const noticia = obj[key][0]?.noticia;
            if (noticia) {
              acc["numeroDoBO"] = noticia.numeroNoticia || null;
              acc["conteudoDoBO"] = noticia.conteudo || null;
            }
          } else if (key === "procedimentoInstauracao" && obj[key]?.tipoInstauracao) {
            acc[key] = {
              descricao: obj[key].tipoInstauracao.descricao || null,
              sigla: obj[key].tipoInstauracao.sigla || null
            };
          } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            acc[key] = obj[key].descricao || obj[key];
          } else if (Array.isArray(obj[key])) {
            acc[key] = obj[key].map(item => item.descricao || item).filter(val => val).join(', ');
          } else {
            acc[key] = obj[key];
          }
        }
        return acc;
      }, {});
    }
  
    static adaptEnvolvido(obj, keys) {
      return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== '' && obj[key] !== 'Não Informado') {
          if (key === "endereco" && Array.isArray(obj[key])) {
            const enderecoCompleto = obj[key]
              .map(end => end.enderecoCompleto || null)
              .filter(val => val && val !== 'Não Informado')
              .join(', ');
            if (enderecoCompleto) acc[key] = enderecoCompleto;
          } else if (key === "contato" && Array.isArray(obj[key])) {
            const valoresContato = obj[key]
              .map(cont => cont.valor || null)
              .filter(val => val && val !== 'Não Informado')
              .join(', ');
            if (valoresContato) acc[key] = valoresContato;
          } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            acc[key] = obj[key].descricao || obj[key];
          } else if (Array.isArray(obj[key])) {
            acc[key] = obj[key].map(item => item.descricao || item).filter(val => val).join(', ');
          } else {
            acc[key] = obj[key];
          }
        }
        return acc;
      }, {});
    }
  }
  
  function extrairDadosPessoaFisica(dados) {
    const keys = ["nome", "nomeMae", "dataNascimento", "nomePai", "cpf", "naturalidadeMunicipio", "estadoCivil", "instrucao", "profissao", "endereco", "contato"];
    return DataAdapter.adaptEnvolvido(dados, keys);
  }
  
  function extrairDadosPessoaJuridica(dados) {
    const keys = ["nomeFantasia"];
    return DataAdapter.adaptEnvolvido(dados, keys);
  }
  
  function extrairMapaNomeEnvolvimento(dados) {
    return dados.reduce((acc, item) => {
      if (item.nome && item.envolvimentoTipoDescricao) {
        acc[item.nome] = item.envolvimentoTipoDescricao;
      }
      return acc;
    }, {});
  }
  
  async function buscarDadosEnvolvidos(ids, tipo, apiRepository) {
    const promises = ids.map(id => tipo === "fisica" ? apiRepository.fetchPessoaFisica(id) : apiRepository.fetchPessoaJuridica(id));
    return Promise.all(promises);
  }
  
  function listaDeObjetosParaStrings(lista) {
    return lista.map(obj => {
      const entries = Object.entries(obj)
        .filter(([_, value]) => value && value !== 'Não Informado')
        .map(([key, value]) => `${key}: ${value}`);
      return entries.join(", ");
    });
  }
  
  function filtrarPorEnvolvimento(listaFormatada, mapaEnvolvimento, tipo) {
    return listaFormatada.filter(item => {
      const nomeMatch = item.match(/nome: ([^,]+)/);
      const nome = nomeMatch ? nomeMatch[1] : '';
      return mapaEnvolvimento[nome] === tipo;
    });
  }
  
  function formatarListaComE(lista) {
    if (lista.length === 0) return "";
    if (lista.length === 1) return lista[0];
    return lista.slice(0, -1).join(", ") + " e " + lista[lista.length - 1];
  }