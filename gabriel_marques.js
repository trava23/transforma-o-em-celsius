/* código nº 001 Avaliação 05 
Nome do aluno: Gabriel Marques de Souza 
Turma: 1° TIST 
Data: 14/11/2023 
*/

var inValor = document.getElementById("inValor");
var btRegistra = document.getElementById("btRegistra");
var btMostra = document.getElementById("btMostra");
var outResultado = document.getElementById("outResultado");
var vetGraus = [];

btRegistra.addEventListener('click', Registrar);

function Registrar() {
    var Far = Number(inValor.value);

    if (Far <= 0) {
        alert("Por favor, insira um valor válido.");
        inValor.value = "";
        inValor.focus();
    } else {
        vetGraus.push(Far);
        inValor.value = ""; /* Limpa o campo após registrar*/
        outResultado.innerHTML = "";
    }
}

btMostra.addEventListener('click', Mostra);

function Mostra() {
    if (vetGraus.length == 0) {
        outResultado.innerHTML = "Vetor de temperaturas em °F está vazio";
        inValor.value = "";
        inValor.focus();
    } else {
        let listaGraus = "LISTA DE TEMPERATURAS: \n" +
            "°F\t°C\n";

        for (let i = 0; i < vetGraus.length; i++) {
            let Far = vetGraus[i];
            let C = 5 / 9 * (Far - 32);

            listaGraus += Far + "\t" + C.toFixed(2) + "\n";
        } 

        outResultado.innerHTML = listaGraus;
    }
}
