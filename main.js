token = extrairTokenNaPagina()
let dadosEnvolvidos;

fetchProcedimento(criarUrlParaObterIdDosEnvolvidos(), token)
.then(data => {
    dadosEnvolvidos = data
  });

function extrairIdDosEnvolvidos() {
    let idsDosEnvolvidos = [];
  setTimeout(() => {
    for (let i = 0; i < dadosEnvolvidos.length; i++) {
        idsDosEnvolvidos.push(dadosEnvolvidos[i].pessoaFisica.id);
    }
  }, 1000);
  return idsDosEnvolvidos;
}

for (let i = 0; i < idsDosEnvolvidos.length; i++) {
    fetchProcedimento(criarUrlParaObterDadosDosEnvolvidos(idsDosEnvolvidos[i]), token)
    .then(data => {
        console.log(data);
    });
}
