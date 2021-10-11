const objs = [
    {
    nome : 'Matheus',
    idade : 30,
    esta_trabalhando : true,
    detalhes_profissiao :
        {
            profissao : 'Programador',
            empresa : 'Empresa X'
        } ,
    hobbies : ['Programar','Correr','Ler']
    },
    {
        nome : 'João',
        idade : 25,
        esta_trabalhando : false,
        detalhes_profissiao : {
                profissao : null,
                empresa : null
            } ,
        hobbies : ['Jogar','Academia']
    }
]


//JSON
//converter objeto para data
const jsonData = JSON.stringify(objs);

//converter json para objeto
const objData = JSON.parse(jsonData);

//loop nos objetos
objData.map((pessoa) => {
    console.log(pessoa.nome);
    console.log(pessoa.idade);
    console.log(pessoa.esta_trabalhando);
    console.log(pessoa.detalhes_profissiao.profissao);   
    console.log(pessoa.hobbies);
});