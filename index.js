
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

const listarAlunos = () => {
    
    for (let item in alunosDaEscola) {
        console.log('-----------------')
        console.log('Nome : ' + alunosDaEscola[item].nome)
        console.log('Notas : ' + alunosDaEscola[item].notas)
        console.log('Cursos : ' + JSON.stringify(alunosDaEscola[item].cursos))
        console.log('Faltas : ' + alunosDaEscola[item].faltas)
    
    }
        
}

const buscarAluno = (nome) => {
    
    let flag = false;
    for (let item in alunosDaEscola) {
        if (alunosDaEscola[item].nome == nome) {
            console.log(`Aluno \"${nome}\" encontrado`);
            for (let item in alunosDaEscola) {
                if(alunosDaEscola[item].nome == nome) {
                    console.log('Nome : ' + alunosDaEscola[item].nome)
                    console.log('Notas : ' + alunosDaEscola[item].notas)
                    console.log('Cursos : ' + JSON.stringify(alunosDaEscola[item].cursos))
                    console.log('Faltas : ' + alunosDaEscola[item].faltas)
                }
            }
            flag = true;
        }
    }
    if (flag == false) {
        console.log(`Aluno ${nome} não consta em nossa base de dados`)
    }

}

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
        if(alunosDaEscola[item].nome == aluno.nome) {
            console.log(alunosDaEscola[item].nome)
            for (let item2 in alunosDaEscola[item].cursos) {
                if(alunosDaEscola[item].cursos[item2].nomeDoCurso == aluno.nomeDoCurso) {
                    flag = true;
                    verificaCondicao(alunosDaEscola[item].notas, alunosDaEscola[item].faltas);
                }

            }
            if(flag = false){
                console.log(`Curso não encontrado para o aluno \"${aluno.nome}\"`)
            }
        }
    }    
    
}

const verificaCondicao = (notas,faltas) => {
    let media = 0;
    for(let nota in notas){
        media = media + notas[nota];
    }
    media = media/(notas.length);

    if(faltas <= 3 && media >= 7){
        console.log('Aluno aprovado')
    }else{
        console.log('Aluno reprovado')
    }
}