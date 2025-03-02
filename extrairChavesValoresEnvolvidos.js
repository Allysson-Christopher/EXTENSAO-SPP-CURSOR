function extrairChavesValores(dados, listaDeKeys) {
    // Se "dados" não for um array, lança um erro
    if (!Array.isArray(dados)) {
        throw new Error(
            'O parâmetro "dados" deve ser um array ou uma lista de arrays.'
        );
    }

    let listaDeArrays;
    // Se o primeiro elemento não for um array, assumimos que "dados" é uma única array de objetos.
    if (dados.length > 0 && !Array.isArray(dados[0])) {
        listaDeArrays = [dados];
    } else {
        listaDeArrays = dados;
    }

    return listaDeArrays.map((arr) => {
        return arr.map((objeto) => {
            const extraido = {};
            listaDeKeys.forEach((key) => {
                if (
                    objeto.hasOwnProperty(key) && 
                    objeto[key] !== null && 
                    objeto[key] !== '' && 
                    objeto[key] !== 'Não Informado'
                ) {
                    // Se a chave for "endereco", extrair apenas o texto de "enderecoCompleto"
                    if (key === "endereco" && Array.isArray(objeto[key])) {
                        const enderecoCompleto = objeto[key]
                            .map(end => end.enderecoCompleto || null)
                            .filter(val => val !== null && val !== '' && val !== 'Não Informado')
                            .join(', ');
                        if (enderecoCompleto) extraido[key] = enderecoCompleto;
                    }
                    // Se a chave for "contato", extrair os dados da chave "valor"
                    else if (key === "contato" && Array.isArray(objeto[key])) {
                        const valoresContato = objeto[key]
                            .map(cont => cont.valor || null)
                            .filter(val => val !== null && val !== '' && val !== 'Não Informado')
                            .join(', ');
                        if (valoresContato) extraido[key] = valoresContato;
                    }
                    // Se a chave for "delegadoAtual" ou "escrivaoAtual", extrair o texto da chave "nome"
                    else if (key === "delegadoAtual" || key === "escrivaoAtual") {
                        if (typeof objeto[key] === 'object' && objeto[key].nome) {
                            extraido[key] = objeto[key].nome;
                        }
                    }
                    // Se a chave for "procedimentoNoticia", extrair "numeroNoticia" e "conteudo" de "noticia" dentro do array
                    else if (key === "procedimentoNoticia" && Array.isArray(objeto[key])) {
                        const noticiasExtraidas = objeto[key]
                            .map(proc => proc.noticia ? { 
                                numeroNoticia: proc.noticia.numeroNoticia || null, 
                                conteudo: proc.noticia.conteudo || null 
                            } : null)
                            .filter(noticia => noticia !== null);
                        if (noticiasExtraidas.length > 0) extraido[key] = noticiasExtraidas;
                    }
                    // Se a chave for "naturezaProcedimento", extrair "data", "endereco" e "hora"
                    else if (key === "naturezaProcedimento" && Array.isArray(objeto[key])) {
                        const naturezaExtraida = objeto[key]
                            .map(nat => ({
                                data: nat.data || null,
                                endereco: nat.endereco?.logradouro || null,
                                hora: nat.hora || null
                            }))
                            .filter(nat => nat.data !== null || nat.endereco !== null || nat.hora !== null);
                        if (naturezaExtraida.length > 0) extraido[key] = naturezaExtraida;
                    }
                    // Se a chave for "naturezaTipo", extrair o valor de "descricao"
                    else if (key === "naturezaTipo" && typeof objeto[key] === 'object') {
                        if (objeto[key].descricao) {
                            extraido[key] = objeto[key].descricao;
                        }
                    }
                    // Se a chave for "procedimentoInstauracao", extrair "descricao" e "sigla" de "tipoInstauracao"
                    else if (key === "procedimentoInstauracao" && typeof objeto[key] === 'object' && objeto[key].tipoInstauracao) {
                        extraido[key] = {
                            descricao: objeto[key].tipoInstauracao.descricao || null,
                            sigla: objeto[key].tipoInstauracao.sigla || null
                        };
                    }
                    // Se for um objeto, pegar apenas a chave "descricao"
                    else if (typeof objeto[key] === 'object' && !Array.isArray(objeto[key])) {
                        if (objeto[key].descricao && objeto[key].descricao !== 'Não Informado') {
                            extraido[key] = objeto[key].descricao;
                        }
                    } 
                    // Se for um array de objetos, extrair o texto dentro da chave "descricao" de cada objeto
                    else if (Array.isArray(objeto[key])) {
                        const descricaoArray = objeto[key]
                            .map(item => (typeof item === 'object' && item !== null ? item.descricao || null : item))
                            .filter(val => val !== null && val !== '' && val !== 'Não Informado')
                            .join(', ');
                        if (descricaoArray) extraido[key] = descricaoArray;
                    } else {
                        extraido[key] = objeto[key];
                    }
                }
            });
            return extraido;
        });
    });
}

function extrairMapaNomeEnvolvimento(dados) {
    return dados.reduce((acc, item) => {
        if (item.nome) {
            acc[item.nome] = item.envolvimentoTipoDescricao;
        }
        return acc;
    }, {});
}

function extrairIdsPessoaFisica(dados) {
    return dados
        .filter((item) => item.pessoaFisicaId != null)
        .map((item) => item.pessoaFisicaId);
}

function extrairIdsPessoaJuridica(dados) {
    return dados
        .filter((item) => item.pessoaJuridicaId != null)
        .map((item) => item.pessoaJuridicaId);
}

async function buscarDadosEnvolvidosFisica(ids, token) {
    const dadosEnvolvidosCompletos = [];
    for (const id of ids) {
        const dadosEnvolvido = await fetchParaObterDadosDosEnvolvidosOuProcedimento(
            criarUrlParaObterDadosDosEnvolvidos(id),
            token
        );
        dadosEnvolvidosCompletos.push(dadosEnvolvido);
    }
    return dadosEnvolvidosCompletos;
}

async function buscarDadosEnvolvidosJuridica(ids, token) {
    const dadosEnvolvidosCompletos = [];
    for (const id of ids) {
        const dadosEnvolvido = await fetchParaObterDadosDosEnvolvidosOuProcedimento(
            criarUrlParaObterDadosPessoaJuridica(id),
            token
        );
        dadosEnvolvidosCompletos.push(dadosEnvolvido);
    }
    return dadosEnvolvidosCompletos;
}

function listaDeObjetosParaStrings(listaDeObjetos) {
    // Verifica se o primeiro nível é um array aninhado e ajusta
    if (Array.isArray(listaDeObjetos) && Array.isArray(listaDeObjetos[0])) {
        listaDeObjetos = listaDeObjetos.flat();
    }
    
    return listaDeObjetos.map(obj => 
        Object.entries(obj)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")
    );
}

function filtrarNomePorEnvolvimento(listaFormatada, mapaEnvolvimento, tipo) {
    return listaFormatada.reduce((acc, item) => {
        const partes = item.split(", ");
        let nomeExtraido = "";
        
        if (partes[0].startsWith("nome: ")) {
            nomeExtraido = partes[0].replace("nome: ", "").trim();
        } else if (partes[0].startsWith("nomeFantasia: ")) {
            nomeExtraido = partes[0].replace("nomeFantasia: ", "").trim();
        }
        
        if (mapaEnvolvimento[nomeExtraido] === tipo) {
            acc.push(nomeExtraido);
        }
        return acc;
    }, []);
}

function formatarListaComE(lista) {
    if (lista.length === 0) return "";
    if (lista.length === 1) return lista[0];
    return lista.slice(0, -1).join(", ") + " e " + lista[lista.length - 1];
}

function extrairQualificacaoPorEnvolvimento(listaFormatada, mapaEnvolvimento, tipo) {
    return listaFormatada.reduce((acc, item) => {
        const partes = item.split(", ");
        let nomeExtraido = "";
        
        if (partes[0].startsWith("nome: ")) {
            nomeExtraido = partes[0].replace("nome: ", "").trim();
        } else if (partes[0].startsWith("nomeFantasia: ")) {
            nomeExtraido = partes[0].replace("nomeFantasia: ", "").trim();
        }
        
        if (mapaEnvolvimento[nomeExtraido] === tipo) {
            acc.push(item);
        }
        return acc;
    }, []);
}