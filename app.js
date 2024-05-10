let listaNumEscolhidos = [];
let text = document.getElementById('resultado');
let botaoSortear = document.getElementById('btn-sortear');
let botaoReiniciar = document.getElementById('btn-reiniciar');
let repete = document.getElementById('permitir-repeticoes');

function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numMin = parseInt(document.getElementById('de').value);
    let numMax = parseInt(document.getElementById('ate').value);
    if (quantidade > (numMax - numMin + 1) && repete.value == 'nao'){
        alert('Para que os números não repitam, é necessário que o intervalo entre os números seja maior do que a quantidade de números desejadas');
        limparTodosCampos();
        return;
    }
    else if (numMin > numMax){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        limparTodosCampos();
        return;
    }
    else {
        for (let i = 0; i < quantidade; i++){
            gerarNumAleatorio(numMin, numMax, quantidade, repete.value);
        };
        text.innerText = `Números sorteados: ${listaNumEscolhidos}`;
        alterarStatus();
    }
};

function reiniciar(){
    limparTodosCampos();
    alterarStatus();
    text.innerText = 'Números sorteados:  nenhum até agora';
}

function gerarNumAleatorio(numMin, numMax, quantidade, repete){
    let numEscolhido = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    console.log(numEscolhido);
    if (repete == 'sim'){
        return listaNumEscolhidos.push(numEscolhido);
    }
    else {
    //função para fazer com que os numeros gerados não se repitam
    if (listaNumEscolhidos.length >= quantidade){
        listaNumEscolhidos = [];
    }
    //.includes -> verifica se uma string contém outra string ou se um array contém um determinado elemento.
    if(listaNumEscolhidos.includes(numEscolhido)){
        return gerarNumAleatorio(numMin, numMax, quantidade, repete);
    }
    else{
        //.push() adiciona um ou mais item ao final de um array 
        listaNumEscolhidos.push(numEscolhido);
        return numEscolhido;
    }
}
};

function limparCampo(tag){
    let campoChute = document.getElementById(tag);
    campoChute.value = null;
};

function limparTodosCampos(){
    limparCampo('quantidade');
    limparCampo('de');
    limparCampo('ate');
    listaNumEscolhidos = [];
};

function alterarStatus(){
    if (botaoReiniciar.hasAttribute('disabled')){
        botaoReiniciar.removeAttribute('disabled');
    }
    else{
        botaoReiniciar.setAttribute('disabled', true);
    }
    if (botaoSortear.hasAttribute('disabled')){
        botaoSortear.removeAttribute('disabled');
    }
    else{
        botaoSortear.setAttribute('disabled', true);
    }
}

