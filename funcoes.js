const cachorros = require('./database/cachorros.json');
const fs = require('fs')
const path = require('path')

function salvar(cachorros) {
    let arquivo = path.resolve(__dirname + './database/cachorros.json')
    let json = JSON.stringify(cachorros, null, 4)
    //console.log(typeof cachorros) 
    fs.writeFileSync(arquivo, json)
}

function buscar(id) {
    let TemCachorroBuscado = cachorro => cachorro.id === id ? true : false
    let cachorroBuscado = cachorros.find(TemCachorroBuscado)
    return cachorroBuscado ? 'O cachorro buscado é ' + cachorroBuscado.nome :
        'O cachorro não está cadastrado'

}
//buscar(4)

function listar() {
    console.table(cachorros)
}
listar()

//função descrever
let idBuscado = 0
function descrever(i) {
    let cachorro = buscar(idBuscado);
    cachorro ? console.log(cachorro) : console.log("Não existe cachorro com o id idBuscado");

}
//função adicionar
function adicionar(cachorro) {
    cachorro.vacinas = []
    cachorro.servicos = []
    cachorro.id = cachorros.length + 1
    //console.log(cachorros.length)
    cachorros.push(cachorro)
    salvar(cachorros)
    //return cachorros
}

//função vacinar
const vacinar = (id, nomeDaVacina, dataDaVacina) => {
    let cachorroVacinado = buscar(id);

    if (cachorroVacinado.id) {
        cachorroVacinado.vacinas.push({
            nome: nomeDaVacina, data: dataDaVacina
        });
        salvar()
    } else {
        console.log("Cachorro inexistente");
    }
}

//função atribuir serviço
const atribuirServico = (id, tipoServico, dataServico) => {
    let cachorro = buscar(id);
    if (!cachorro) {
        console.log("Cachorro inexistente")
    };
    cachorro.servicos.push({
        nome: tipoServico,
        data: dataServico

    })
}

//função remover
const remover = (id) => {
    let cachorro = remover(id);
    if (!cachorro) {
        console.log("Cachorro inexistente")
    };
    cachorro.servicos.pop(id)

}

module.exports = {
    listar,
    descrever,
    adicionar,
    vacinar,
    atribuirServico,
    remover,

}


