// Base a ser utilizada
const alunosDaEscola = [{
    nome: "Henrique",
    notas: [],
    cursos: [],
    faltas: 5
}, {
    nome: "Edson",
    notas: [],
    cursos: [],
    faltas: 2
}, {
    nome: "Bruno",
    notas: [10, 9.8, 9.6],
    cursos: [],
    faltas: 0
}, {
    nome: "Guilherme",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "Full Stack",
        dataMatricula: new Date
    }],
    faltas: 0
}, {
    nome: "Carlos",
    notas: [],
    cursos: [],
    faltas: 0
}, {
    nome: "Lucca",
    notas: [10, 9.8, 9.6],
    cursos: [{
        nomeDoCurso: "UX",
        dataMatricula: new Date
    }],
    faltas: 0
}];

// {
//     nome: "Guilherme",
//     notas: [10, 9.8, 9.6],
//     cursos: [{
//         nomeDoCurso: "Full Stack",
//         dataMatricula: new Date
//     }],
//     faltas: 0
// }

// implementação

const adicionarAluno = (nome) => {
    if (typeof (nome) == "string") {
        let novoAluno = [{
            nome: nome,
            notas: [],
            cursos: [],
            faltas: 0
        }]
        alunosDaEscola.push(novoAluno)
        console.log(`Aluno \"${nome}\" incluído com sucesso!`)
    }
}

const listarAlunos = (() => {

    for (let aluno of alunosDaEscola) {
        console.log(`${aluno.nome}`)
        for (let matricula of aluno.notas) {
            console.log(`${matricula.cursos}
            ${matricula.notas}`)
        }
    }
})

/*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

const buscarAluno = (nome) => {
    
    let flag = false;
    for (let item in alunosDaEscola) {
        if (alunosDaEscola[item].nome == nome) {
            console.log(`Aluno \"${nome}\" Encontrado \nSerá detalhado`);
            flag = true;
        }
    }
    if (flag == false) {
        console.log(`Aluno ${nome} não consta em nossa base de dados`)
    }

}

//const matricularAluno(aluno: object, curso: string) => {
/* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
Lembre-se de exibir o feedback para o usuário. */


const aplicarFalta = (aluno) => {

    for (let item in alunosDaEscola) {
        if (alunosDaEscola[item].nome == aluno) {
            alunosDaEscola[item].faltas++;
            console.log(`Aluno \"${alunosDaEscola[item].nome} recebeu uma falta, agora possui ${alunosDaEscola[item].faltas} faltas`);
        }
    }
}

const aplicarNota = (aluno) => {

    for (let item in alunosDaEscola) {
        if (alunosDaEscola[item].nome == aluno.nome) {
            for (let item2 in alunosDaEscola[item].cursos) {
                if(alunosDaEscola[item].cursos[item2].nomeDoCurso == aluno.nomeDoCurso) {
                    alunosDaEscola[item].notas.push(aluno.nota);
                    console.log(`Nota \"${aluno.nota}\" incluída no curso \"${aluno.nomeDoCurso}\"`);
                }
            }
        }
    }
}

const aprovarAluno = (aluno) => {

    let flag = false;
    for (let item in alunosDaEscola) {
        if (alunosDaEscola[item].nome == aluno.nome) {
            for (let item2 in alunosDaEscola[item].cursos) {
                if(alunosDaEscola[item].cursos[item2].nomeDoCurso == aluno.nomeDoCurso) {
                    flag = true;
                    verificaAprovaAluno(alunosDaEscola[item].notas, alunosDaEscola[item].faltas);
                }

            }
            if(flag = false){
                console.log(`Curso não encontrado para o aluno \"${aluno.nome}\"`)
            }
        }else{console.log('faiou')}
    }    
    
}

const verificaAprovaAluno = (notas,faltas) => {
    let media = 0;
    for(let nota in notas){
        media =+ notas[nota];
    }
    media = media/(notas.length);

    if(faltas > 3 && notas <= 7){
        console.log('Aluno aprovado')
    }
}


let alunoNota = {
    nome: "Guilherme",
    nomeDoCurso: "Full Stack"
}

//console.log(alunoNota.nota)
aprovarAluno(alunoNota) 