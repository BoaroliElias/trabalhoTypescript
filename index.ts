// testeee

interface IFuncionario {
    nome: String;
    salarioBruto: number;
    faixaDescontoInss: number;
    vlrDescontadoInss: number;
    faixaDescontoIr: number;
    vlrDescontadoIr: number;
    vlrSalarioLiquido: number;
    qtdHorasExtras: number;
    vlrExtra: number;
}

class Funcionario {
    nome: String;
    salarioBruto: number;
    faixaDescontoInss: number;
    vlrDescontadoInss: number;
    faixaDescontoIr: number;
    vlrDescontadoIr: number;
    vlrSalarioLiquido: number;
    qtdHorasExtras: number;
    vlrExtra: number;

    constructor(){
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
}


function viewObject(){
    let funcionario01: IFuncionario = new Funcionario();

    funcionario01.nome = "Elisao";

    console.log(funcionario01.nome);

    viewObject();
}

// função para calcular horas extras
function calcularHoraExtra(salarioBruto: number, qtdHorasExtras: number){
    return 0;
}


// função para calcular INSS
function calcularINSS(salarioBruto: number, vlrExtra: number) {

    // setando dados de salario INSS
    const salarioCalc1 = 1100.00;
    const salarioCalc2 = 1101.00;
    const salarioCalc3 = 2203.48;
    const salarioCalc4 = 2203.49;
    const salarioCalc5 = 3305.22;
    const salarioCalc6 = 3305.23;
    const salarioCalc7 = 6433.57; // teto
    const limiteInss   = 713.09;

    let faixaDescontoInss = 0;
    let vlrDescontadoInss = 0;
    let valorSalarioBase = salarioBruto + vlrExtra;

    if (valorSalarioBase <= salarioCalc1) {
        faixaDescontoInss = 7.5;
    
    } else if (valorSalarioBase >= salarioCalc2  &&  valorSalarioBase <= salarioCalc3){
        faixaDescontoInss = 9.0;
    
    } else if (valorSalarioBase >= salarioCalc4 && valorSalarioBase <= salarioCalc5 ){
        faixaDescontoInss = 12.00;
    
    } else if (valorSalarioBase >= salarioCalc6){
        faixaDescontoInss = 14.00;
    } else {
        throw new Error('Dados inseridos inválidos')
    }

    // verificando se o desconto de inss bateu o máximo, se sim, irá retornar o teto
    if ( vlrDescontadoInss >= 713.09){
        vlrDescontadoInss = 713.09
    }

    vlrDescontadoInss = valorSalarioBase * (faixaDescontoInss/100);

    console.log("Faixa de desconto INSS %: " + faixaDescontoInss)
    console.log("Valor descontado INSS R$: " + vlrDescontadoInss)

}

calcularINSS(2500,0)

// função para calcular imposto de renda

function calcularIRRF(){
    
}


//função que calcula folha de pagamento
// function calculaFolhaPgto(nome: String, salario: string, horasExtras: string){
//     let funcionario: IFuncionario = new Funcionario();

//     funcionario.nome = nome;
//     funcionario.salarioBruto = salario;
// }