const produto = [{
    nome: "banana", preço: 3, quantidade: 5
}, {
    nome: "laranja", preço: 4, quantidade: 5
}];

function adicionarProduto(nome, preço, quantidade) {
    if (!nome || !preço || !quantidade) {
        console.error("Todos os campos devem ser preenchidos.");
        return;
    }

    if (preço <= 0 || quantidade <= 0) {
        console.error("O preço e a quantidade devem ser números maiores que 0.");
        return;
    }

    const novoProduto = { nome, preço, quantidade };
    produto.push(novoProduto);
    console.log("Produto adicionado.");
}

function listarProduto() {
    if (produto.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("Lista de produtos:");
    produto.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: ${produto.preço}, Quantidade: ${produto.quantidade}`);
    });
}

function calcularValorTotal() {
    if (produto.length === 0) {
        console.log("Nenhum produto cadastrado para calcular o valor total.");
        return;
    }

    let valorTotal = 0;

    produto.forEach(p => {
        valorTotal += p.preço * p.quantidade;
    });

    console.log(`Valor total dos produtos em estoque: R$ ${valorTotal.toFixed(2)}`);
}


adicionarProduto("maçã", 10, 5);


listarProduto();


calcularValorTotal();
