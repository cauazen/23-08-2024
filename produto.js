const produto = [{
    nome:"banana", preço: 3, quantidade: 5},
{nome: "laranja", preço: 4, quantidade: 5}];


function adicionarProduto(nome, preço, quantidade) {
    
    if (!nome || !preço || !quantidade) {
        console.error("Todos os campos devem ser preenchidos.");
        return;
    }

    
    if (preço && quantidade <= 0 ) {
        console.error("O preço e quantidade deve ser um número maior que 0.");
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


adicionarProduto("maçã", 10, 5);

 

listarProduto(); 
