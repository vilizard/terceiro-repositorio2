const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;

numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    //tamanhoSenha = tamanhoSenha-1;
    if (tamanhoSenha > 1){
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

const campoSenha = document.querySelector("#campo-senha");

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';

const checkbox = document.querySelectorAll('.checkbox');

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto =alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto =alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto =alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto =alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i=0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha*Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classlist.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classlist.add('forte');
    } else if (entropia > 35 && entropia < 57) {
        forcaSenha.classlist.add('media');
    } else if (entropia <= 35) {
        forcaSenha.classlist.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
}