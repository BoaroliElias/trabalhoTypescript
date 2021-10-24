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

    // base calculo INSS
    const salarioCalc1 = 1100.00;
    const salarioCalc2 = 1101.00;
    const salarioCalc3 = 2203.48;
    const salarioCalc4 = 2203.49;
    const salarioCalc5 = 3305.22;
    const salarioCalc6 = 3305.23;
    const salarioCalc7 = 6433.57; 
    const limiteInss   = 713.09;// teto

    let faixaDescontoInss = 0;
    let vlrDescontadoInss = 0;
    let valorSalarioBaseInss = salarioBruto + vlrExtra;

    if (valorSalarioBaseInss <= salarioCalc1) {
        faixaDescontoInss = 7.5;
    
    } else if (valorSalarioBaseInss >= salarioCalc2  &&  valorSalarioBaseInss <= salarioCalc3){
        faixaDescontoInss = 9.0;
    
    } else if (valorSalarioBaseInss >= salarioCalc4 && valorSalarioBaseInss <= salarioCalc5 ){
        faixaDescontoInss = 12.00;
    
    } else if (valorSalarioBaseInss >= salarioCalc6){
        faixaDescontoInss = 14.00;
    } else {
        throw new Error('Dados inseridos inválidos')
    }

    // verificando se o desconto de inss bateu o máximo, se sim, irá retornar o teto
    if ( vlrDescontadoInss >= limiteInss){
        vlrDescontadoInss = limiteInss;
    }

    vlrDescontadoInss = valorSalarioBaseInss * (faixaDescontoInss/100);

    console.log("Faixa de desconto INSS %: " + faixaDescontoInss)
    console.log("Valor descontado INSS R$: " + vlrDescontadoInss)

}

// calcularINSS(2500,0)

// função para calcular imposto de renda

function calcularIRRF(salarioBruto: number, vlrDescontadoInss: number, vlrExtra: number ){
  
    // base calculo IRRF
    const salarioCalc1 = 1903.98;
    const salarioCalc2 = 1903.99;
    const salarioCalc3 = 2826.65;
    const salarioCalc4 = 2826.66;
    const salarioCalc5 = 3751.05;
    const salarioCalc6 = 3751.06;
    const salarioCalc7 = 4664.68; 

    let faixaDescontoIr = 0;
    let vlrDescontadoIr = 0;
    let valorSalarioBaseIr = salarioBruto + vlrExtra - vlrDescontadoInss ;

    if (valorSalarioBaseIr <= salarioCalc1 ) {
        faixaDescontoIr = 0;
    
    } else if (valorSalarioBaseIr >= salarioCalc2 && valorSalarioBaseIr <= salarioCalc3){
        faixaDescontoIr = 7.50;
    
    } else if (valorSalarioBaseIr >= salarioCalc4 && valorSalarioBaseIr <= salarioCalc5){
        faixaDescontoIr = 15.00;
    
    } else if (valorSalarioBaseIr >= salarioCalc6 && valorSalarioBaseIr <= salarioCalc7){
        faixaDescontoIr = 22.50;
    
    } else if (valorSalarioBaseIr > salarioCalc7){
        faixaDescontoIr = 27.50;
    }


}


//função que calcula folha de pagamento
// function calculaFolhaPgto(nome: String, salario: string, horasExtras: string){
//     let funcionario: IFuncionario = new Funcionario();

//     funcionario.nome = nome;
//     funcionario.salarioBruto = salario;
// }