let tarefas = [];


function adicionarTarefa(descricao) {
    tarefas.push({ descricao: descricao, concluida: false });
}


function listarTarefas() {
    tarefas.forEach((tarefa, indice) => {
        console.log(`${indice}: ${tarefa.descricao} [${tarefa.concluida ? 'Concluída' : 'Pendente'}]`);
    });
}


function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
    } else {
        console.log('Índice inválido');
    }
}


function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
    } else {
        console.log('Índice inválido');
    }
}


adicionarTarefa('Comprar um computador');
adicionarTarefa('Estudar matemática');
adicionarTarefa('Ir ao shopping');


console.log('Lista de Tarefas:');
listarTarefas();


concluirTarefa(0);


console.log('\nLista de Tarefas Atualizada:');
listarTarefas();


removerTarefa(1);


