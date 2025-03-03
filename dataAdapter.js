class DataAdapter {
    static adapt(obj, keys) {
      return keys.reduce((acc, key) => {
        if (obj.hasOwnProperty(key) && obj[key] !== null && obj[key] !== '' && obj[key] !== 'Não Informado') {
          if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
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
    return DataAdapter.adapt(dados, keys);
  }
  
  function extrairDadosPessoaJuridica(dados) {
    const keys = ["nomeFantasia"];
    return DataAdapter.adapt(dados, keys);
  }
  
  function extrairMapaNomeEnvolvimento(dados) {
    return dados.reduce((acc, item) => {
      if (item.nome) acc[item.nome] = item.envolvimentoTipoDescricao;
      return acc;
    }, {});
  }
  
  async function buscarDadosEnvolvidos(ids, tipo, apiRepository) {
    const promises = ids.map(id => tipo === "fisica" ? apiRepository.fetchPessoaFisica(id) : apiRepository.fetchPessoaJuridica(id));
    return Promise.all(promises);
  }
  
  function listaDeObjetosParaStrings(lista) {
    return lista.map(obj => Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join(", "));
  }
  
  function filtrarPorEnvolvimento(listaFormatada, mapaEnvolvimento, tipo) {
    return listaFormatada.filter(item => {
      const nome = item.split(", ")[0].split(": ")[1];
      return mapaEnvolvimento[nome] === tipo;
    });
  }
  
  function formatarListaComE(lista) {
    if (lista.length === 0) return "";
    if (lista.length === 1) return lista[0];
    return lista.slice(0, -1).join(", ") + " e " + lista[lista.length - 1];
  }
  
  // Exportações para uso em outros arquivos
  window.DataAdapter = {
    extrairDadosPessoaFisica,
    extrairDadosPessoaJuridica,
    extrairMapaNomeEnvolvimento,
    buscarDadosEnvolvidos,
    listaDeObjetosParaStrings,
    filtrarPorEnvolvimento,
    formatarListaComE,
  };