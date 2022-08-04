//função atribuir serviço
const atribuirServico = (id, tipoServico, dataServico)=>{
    let cachorro = buscar(id);
    if(!cachorro){
        console.log("Cachorro inexistente")
    };
cachorro.servicos.push({
    nome: tipoServico,
    data: dataServico

})
}