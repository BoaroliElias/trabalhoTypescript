// testeee

import { createHistogram } from "perf_hooks";

interface IFuncionario {
    nome: String;
    salarioBruto: number;
    faixaDescontoInss: number;
    vlrDescontadoInss: number;
    faixaDescontoIr: number;
    vlrDescontadoIr: number;
    vlrSalarioLiquido: number;
    qtdHorasExtras: number;
    vlrHrExtra: number;
}

class Funcionario {

    private funcionario: IFuncionario;

    constructor(){
        this.funcionario = {} as IFuncionario;
        this.funcionario.nome = "";
        this.funcionario.salarioBruto = 0;
        this.funcionario.faixaDescontoInss = 0;
        this.funcionario.vlrDescontadoInss = 0;
        this.funcionario.faixaDescontoIr = 0;
        this.funcionario.vlrDescontadoIr = 0;
        this.funcionario.vlrSalarioLiquido = 0;
        this.funcionario.qtdHorasExtras = 0;
        this.funcionario.vlrHrExtra = 0;
    }

    // sets
    setNome(nomeParam: string) {
        this.funcionario.nome = nomeParam;
    }
    setSalarioBruto(salarioBrutoParam: number){
        this.funcionario.salarioBruto = salarioBrutoParam;
    }
    setFaixaDescontoInss(faixaDescontoInssParam: number){
        this.funcionario.faixaDescontoInss = faixaDescontoInssParam;
    }
    setValorDescontadoInss(vlrDescontadoInssParam: number){
        this.funcionario.vlrDescontadoInss = vlrDescontadoInssParam;
    }
    setFaixaDescontoIr(faixaDescontoIrParam: number){
        this.funcionario.faixaDescontoIr = faixaDescontoIrParam;
    }
    setValorDescontadoIr(vlrDescontadoIrParam: number){
        this.funcionario.vlrDescontadoIr = vlrDescontadoIrParam;
    }
    setValorSalarioLiquido(vlrSalarioLiquidoParam: number){
        this.funcionario.vlrSalarioLiquido = vlrSalarioLiquidoParam;
    }
    setQtdHorasExtras(qtdHorasExtrasParam: number){
        this.funcionario.qtdHorasExtras = qtdHorasExtrasParam;
    }
    setVlrHrExtra(vlrHrExtraParam: number){
        this.funcionario.vlrHrExtra = vlrHrExtraParam;
    }
    
    //gets
    getNome(){
        return this.funcionario.nome;
    }
    getSalarioBruto(){
        return this.funcionario.salarioBruto;
    }
    getFaixaDescontoInss(){
        return this.funcionario.faixaDescontoInss;
    }
    getValorDescontadoInss(){
        return this.funcionario.vlrDescontadoInss;
    }
    getFaixaDescontoIr(){
        return this.funcionario.faixaDescontoIr;
    }
    getValorDescontadoIr(){
        return this.funcionario.vlrDescontadoIr;
    }
    getSalarioLiquido(){
        return this.funcionario.vlrSalarioLiquido;
    }
    getQtdHorasExtra(){
        return this.funcionario.qtdHorasExtras;
    }
    getVlrHorasExtras(){
        return this.funcionario.vlrHrExtra;
    }

    

}

const funcionario = new Funcionario();

// função para calcular horas extras
// function calcularHoraExtra(salarioBruto: number, qtdHorasExtras: number){
//     let calcHrs = ((salarioBruto / 200) * 1.5) * qtdHorasExtras;
//     console.log("horas extras: " + calcHrs)
// }


function calcularHoraExtra(){
    console.log("Calculando Horas Extras...")

    let calcHrsExtra = 0,
        salario = funcionario.getSalarioBruto(),
        qtdHorasExtras = funcionario.getQtdHorasExtra();
        
    calcHrsExtra = ((salario / 200) * 1.5) * qtdHorasExtras;
    salario = salario + calcHrsExtra;

    funcionario.setVlrHrExtra(calcHrsExtra);

    //salario com horas extras
    funcionario.setValorSalarioLiquido(salario);

    console.log("Horas Extas: " + calcHrsExtra)
}


// função para calcular INSS
function calcularINSS() {
    console.log("calculando INSS... " );
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
    let valorSalarioBaseInss = funcionario.getSalarioLiquido();

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

    //calculando valor do inss
    vlrDescontadoInss = valorSalarioBaseInss * (faixaDescontoInss/100);

    // verificando se o desconto de inss bateu o máximo, se sim, irá retornar o teto
    if ( vlrDescontadoInss >= limiteInss){
        vlrDescontadoInss = limiteInss;
    }
    
    // descontando o inss do salario base
    valorSalarioBaseInss = valorSalarioBaseInss - vlrDescontadoInss;

    //setando dados no objeto
    funcionario.setFaixaDescontoInss(faixaDescontoInss);
    funcionario.setValorDescontadoInss(vlrDescontadoInss);
    funcionario.setValorSalarioLiquido(valorSalarioBaseInss);

    console.log("Faixa de desconto INSS %: " + faixaDescontoInss)
    console.log("Valor descontado INSS R$: " + vlrDescontadoInss)
}

// função para calcular imposto de renda
function calcularIRRF(){
    console.log("calculando IRRF... " );
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
    let valorSalarioBaseIr = funcionario.getSalarioLiquido();

    // console.log("salario base calculo: " + valorSalarioBaseIr);

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

    vlrDescontadoIr = valorSalarioBaseIr * (faixaDescontoIr/100);
    
    //descontando IR do salario base
    valorSalarioBaseIr = valorSalarioBaseIr - vlrDescontadoIr;

    //setando dados no objeto
    funcionario.setFaixaDescontoIr(faixaDescontoIr);
    funcionario.setValorDescontadoIr(vlrDescontadoIr);
    funcionario.setValorSalarioLiquido(valorSalarioBaseIr);

    console.log("Faixa de desconto IRRF %: " + faixaDescontoIr);
    console.log("Valor descontado IRFF R$: " + vlrDescontadoIr)

}


//função que calcula a folha de pagamento -- inserir parametros chamando ela
function calculaFolhaPgto(nomeFunc: string, salario: string, horasExtras?: string){
    console.log("Calculando Folha de Pagamento...");
    
    funcionario.setNome(nomeFunc);
    funcionario.setSalarioBruto(parseFloat(salario));
    funcionario.setQtdHorasExtras(parseFloat(horasExtras));
    
    calcularHoraExtra();
    calcularINSS();
    calcularIRRF();

    console.log('FOLHA DE PAGAMENTO DO(A) ' + nomeFunc.toUpperCase());
    modeloFolhaPagamento();
  
}

//função para montar dados da folha de pagamento
function modeloFolhaPagamento() {
    console.log({
        'Nome funcionário: ': funcionario.getNome(),
        'Valor salário bruto R$ ': funcionario.getSalarioBruto(),
        'Quantidade total de horas extras: ': funcionario.getQtdHorasExtra(),
        'Valor de horas extras R$ ': funcionario.getVlrHorasExtras(),
        'Faixa de desconto INSS % ': funcionario.getFaixaDescontoInss(),
        'Valor descontado INSS R$ ': funcionario.getValorDescontadoInss(),
        'Faixa de desconto IR %': funcionario.getFaixaDescontoIr(),
        'Valor descontado IR R$ ': funcionario.getValorDescontadoIr(),
        'Valor salário líquido R$ ': funcionario.getSalarioLiquido(),
    })
}

calculaFolhaPgto(process.argv[2], process.argv[3], process.argv[4]);

// function montaFolhaPagto() {
//     console.log({
//         "Nome: " : Funcionario.
//     })
// }

