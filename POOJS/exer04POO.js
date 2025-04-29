//& Atividade 4: Criar um sistema de funcionários

class Funcionario{
    constructor(nome, salario, cargo){
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
    aumentarSalario(porcentual){
        console.log(`Salário atual aumentado em ${porcentual}%.`)
        this.salario += this.salario * (porcentual / 100);
        console.log(`Salário atual de R$${this.salario}.`);
    }
    exibirInfo(){
        console.log(`Nome: ${this.nome}  |  Salário: R$${this.salario}  |  Cargo: ${this.cargo}`);
    }
}

let funcionario1 = new Funcionario("Jorge Silva", 2000, "Supervisor");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(20);
funcionario1.exibirInfo();