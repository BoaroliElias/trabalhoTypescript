// testeee
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.nome = "";
        this.salarioBruto = 0;
        this.faixaDescontoInss = 0;
        this.vlrDescontadoInss = 0;
        this.faixaDescontoIr = 0;
        this.vlrDescontadoIr = 0;
        this.vlrSalarioLiquido = 0;
        this.qtdHorasExtras = 0;
        this.vlrExtra = 0;
    }
    return Funcionario;
}());
function viewObject() {
    var funcionario01 = new Funcionario();
    funcionario01.nome = "Elisao";
    console.log(funcionario01.nome);
    viewObject();
}
// função para calcular horas extras
function calcularHoraExtra(salarioBruto, qtdHorasExtras) {
    return 0;
}
// função para calcular INSS
function calcularINSS(salarioBruto, vlrExtra) {
    // setando dados de salario INSS
    var salarioCalc1 = 1100.00;
    var salarioCalc2 = 1101.00;
    var salarioCalc3 = 2203.48;
    var salarioCalc4 = 2203.49;
    var salarioCalc5 = 3305.22;
    var salarioCalc6 = 3305.23;
    var salarioCalc7 = 6433.57; // teto
    var limiteInss = 713.09;
    var faixaDescontoInss = 0;
    var vlrDescontadoInss = 0;
    var valorSalarioBase = salarioBruto + vlrExtra;
    if (valorSalarioBase <= salarioCalc1) {
        faixaDescontoInss = 7.5;
    }
    else if (valorSalarioBase >= salarioCalc2 && valorSalarioBase <= salarioCalc3) {
        faixaDescontoInss = 9.0;
    }
    else if (valorSalarioBase >= salarioCalc4 && valorSalarioBase <= salarioCalc5) {
        faixaDescontoInss = 12.00;
    }
    else if (valorSalarioBase >= salarioCalc6) {
        faixaDescontoInss = 14.00;
    }
    else {
        throw new Error('Dados inseridos inválidos');
    }
    // verificando se o desconto de inss bateu o máximo, se sim, irá retornar o teto
    if (vlrDescontadoInss >= 713.09) {
        vlrDescontadoInss = 713.09;
    }
    vlrDescontadoInss = valorSalarioBase * (faixaDescontoInss / 100);
    console.log("Faixa de desconto INSS R$: " + faixaDescontoInss);
    console.log("Valor descontado INSS %: " + vlrDescontadoInss);
}
calcularINSS(2500, 0);
// função para calcular imposto de renda
// function calcularIRRF(){
// }
//função que calcula folha de pagamento
// function calculaFolhaPgto(nome: String, salario: string, horasExtras: string){
//     let funcionario: IFuncionario = new Funcionario();
//     funcionario.nome = nome;
//     funcionario.salarioBruto = salario;
// }
