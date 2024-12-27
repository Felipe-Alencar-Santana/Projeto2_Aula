const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji Celebrando">';
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji Triste">';
const Atividade = [];
const Notas = [];
const spanAprovado = '<span class="Aprovado">Aprovado</span>';
const spanReprovado = '<span class="Reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima"));

let linhas = '';
form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionarLinha()
    atualizaTabela()
    atualizaMediaFinal()
});


function adicionarLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if(Atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    }
    else{
    Atividade.push(inputNomeAtividade.value);
    Notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;
    linhas += linha;
    }
    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMediaFinal(){
    const mediaFinal = calcularMediaFinal()

    document.getElementById('mediaValor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('mediaResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
}


function calcularMediaFinal(){
    let somaNotas = 0;
    
    for(let i = 0; i < Notas.length; i++){
        somaNotas += Notas[i];
        
    }
    
    return somaNotas / Notas.length;
}