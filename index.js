"use strict";
// testeee
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario() {
        this.funcionario = {};
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
    Funcionario.prototype.setNome = function (nomeParam) {
        this.funcionario.nome = nomeParam;
    };
    Funcionario.prototype.setSalarioBruto = function (salarioBrutoParam) {
        this.funcionario.salarioBruto = salarioBrutoParam;
    };
    Funcionario.prototype.setFaixaDescontoInss = function (faixaDescontoInssParam) {
        this.funcionario.faixaDescontoInss = faixaDescontoInssParam;
    };
    Funcionario.prototype.setValorDescontadoInss = function (vlrDescontadoInssParam) {
        this.funcionario.vlrDescontadoInss = vlrDescontadoInssParam;
    };
    Funcionario.prototype.setFaixaDescontoIr = function (faixaDescontoIrParam) {
        this.funcionario.faixaDescontoIr = faixaDescontoIrParam;
    };
    Funcionario.prototype.setValorDescontadoIr = function (vlrDescontadoIrParam) {
        this.funcionario.vlrDescontadoIr = vlrDescontadoIrParam;
    };
    Funcionario.prototype.setValorSalarioLiquido = function (vlrSalarioLiquidoParam) {
        this.funcionario.vlrSalarioLiquido = vlrSalarioLiquidoParam;
    };
    Funcionario.prototype.setQtdHorasExtras = function (qtdHorasExtrasParam) {
        this.funcionario.qtdHorasExtras = qtdHorasExtrasParam;
    };
    Funcionario.prototype.setVlrHrExtra = function (vlrHrExtraParam) {
        this.funcionario.vlrHrExtra = vlrHrExtraParam;
    };
    //gets
    Funcionario.prototype.getNome = function () {
        return this.funcionario.nome;
    };
    Funcionario.prototype.getSalarioBruto = function () {
        return this.funcionario.salarioBruto;
    };
    Funcionario.prototype.getFaixaDescontoInss = function () {
        return this.funcionario.faixaDescontoInss;
    };
    Funcionario.prototype.getValorDescontadoInss = function () {
        return this.funcionario.vlrDescontadoInss;
    };
    Funcionario.prototype.getFaixaDescontoIr = function () {
        return this.funcionario.faixaDescontoIr;
    };
    Funcionario.prototype.getValorDescontadoIr = function () {
        return this.funcionario.vlrDescontadoIr;
    };
    Funcionario.prototype.getSalarioLiquido = function () {
        return this.funcionario.vlrSalarioLiquido;
    };
    Funcionario.prototype.getQtdHorasExtra = function () {
        return this.funcionario.qtdHorasExtras;
    };
    Funcionario.prototype.getVlrHorasExtras = function () {
        return this.funcionario.vlrHrExtra;
    };
    return Funcionario;
}());
var funcionario = new Funcionario();
function calcularHoraExtra() {
    console.log("Calculando Horas Extras...");
    var calcHrsExtra = 0, salario = funcionario.getSalarioBruto(), qtdHorasExtras = funcionario.getQtdHorasExtra();
    calcHrsExtra = ((salario / 200) * 1.5) * qtdHorasExtras;
    salario = salario + calcHrsExtra;
    funcionario.setVlrHrExtra(calcHrsExtra);
    //salario com horas extras
    funcionario.setValorSalarioLiquido(salario);
    console.log("Horas Extas: " + calcHrsExtra);
}
// função para calcular INSS
function calcularINSS() {
    console.log("calculando INSS... ");
    // base calculo INSS
    var salarioCalc1 = 1100.00;
    var salarioCalc2 = 1101.00;
    var salarioCalc3 = 2203.48;
    var salarioCalc4 = 2203.49;
    var salarioCalc5 = 3305.22;
    var salarioCalc6 = 3305.23;
    var salarioCalc7 = 6433.57;
    var limiteInss = 713.09; // teto
    var faixaDescontoInss = 0;
    var vlrDescontadoInss = 0;
    var valorSalarioBaseInss = funcionario.getSalarioLiquido();
    if (valorSalarioBaseInss <= salarioCalc1) {
        faixaDescontoInss = 7.5;
    }
    else if (valorSalarioBaseInss >= salarioCalc2 && valorSalarioBaseInss <= salarioCalc3) {
        faixaDescontoInss = 9.0;
    }
    else if (valorSalarioBaseInss >= salarioCalc4 && valorSalarioBaseInss <= salarioCalc5) {
        faixaDescontoInss = 12.00;
    }
    else if (valorSalarioBaseInss >= salarioCalc6) {
        faixaDescontoInss = 14.00;
    }
    else {
        throw new Error('Dados inseridos inválidos');
    }
    //calculando valor do inss
    vlrDescontadoInss = valorSalarioBaseInss * (faixaDescontoInss / 100);
    // verificando se o desconto de inss bateu o máximo, se sim, irá retornar o teto
    if (vlrDescontadoInss >= limiteInss) {
        vlrDescontadoInss = limiteInss;
    }
    // descontando o inss do salario base
    valorSalarioBaseInss = valorSalarioBaseInss - vlrDescontadoInss;
    //setando dados no objeto
    funcionario.setFaixaDescontoInss(faixaDescontoInss);
    funcionario.setValorDescontadoInss(vlrDescontadoInss);
    funcionario.setValorSalarioLiquido(valorSalarioBaseInss);
    console.log("Faixa de desconto INSS %: " + faixaDescontoInss);
    console.log("Valor descontado INSS R$: " + vlrDescontadoInss);
}
// função para calcular imposto de renda
function calcularIRRF() {
    console.log("calculando IRRF... ");
    // base calculo IRRF
    var salarioCalc1 = 1903.98;
    var salarioCalc2 = 1903.99;
    var salarioCalc3 = 2826.65;
    var salarioCalc4 = 2826.66;
    var salarioCalc5 = 3751.05;
    var salarioCalc6 = 3751.06;
    var salarioCalc7 = 4664.68;
    var faixaDescontoIr = 0;
    var vlrDescontadoIr = 0;
    var valorSalarioBaseIr = funcionario.getSalarioLiquido();
    // console.log("salario base calculo: " + valorSalarioBaseIr);
    if (valorSalarioBaseIr <= salarioCalc1) {
        faixaDescontoIr = 0;
    }
    else if (valorSalarioBaseIr >= salarioCalc2 && valorSalarioBaseIr <= salarioCalc3) {
        faixaDescontoIr = 7.50;
    }
    else if (valorSalarioBaseIr >= salarioCalc4 && valorSalarioBaseIr <= salarioCalc5) {
        faixaDescontoIr = 15.00;
    }
    else if (valorSalarioBaseIr >= salarioCalc6 && valorSalarioBaseIr <= salarioCalc7) {
        faixaDescontoIr = 22.50;
    }
    else if (valorSalarioBaseIr > salarioCalc7) {
        faixaDescontoIr = 27.50;
    }
    vlrDescontadoIr = valorSalarioBaseIr * (faixaDescontoIr / 100);
    //descontando IR do salario base
    valorSalarioBaseIr = valorSalarioBaseIr - vlrDescontadoIr;
    //setando dados no objeto
    funcionario.setFaixaDescontoIr(faixaDescontoIr);
    funcionario.setValorDescontadoIr(vlrDescontadoIr);
    funcionario.setValorSalarioLiquido(valorSalarioBaseIr);
    console.log("Faixa de desconto IRRF %: " + faixaDescontoIr);
    console.log("Valor descontado IRFF R$: " + vlrDescontadoIr);
    console.log("Salário líquido R$ " + valorSalarioBaseIr);
}
//função que calcula a folha de pagamento -- inserir parametros chamando ela
function calculaFolhaPgto(nomeFunc, salario, horasExtras) {
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
        'Valor salário líquido R$ ': funcionario.getSalarioLiquido()
    });
}
//chama função passando os argumentos por parametro
calculaFolhaPgto(process.argv[2], process.argv[3], process.argv[4]);
