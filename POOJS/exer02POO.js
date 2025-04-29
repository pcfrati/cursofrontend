//& Atividade 2: Criar uma classe representando um veículo

class Veiculo{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    exibirInfo(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, ano, quantidadePortas){
        super(marca, modelo, ano);
        this.quantidadePortas = quantidadePortas;
    }
    exibirInfo(){
        console.log(`Marca: ${this.marca}  |  Modelo: ${this.modelo}  |  Ano: ${this.ano}  |  Quantidade de Portas: ${this.quantidadePortas}`);
    }
}

let carro1 = new Carro("Volkswagen", "Fusca", 1955, 2);
carro1.exibirInfo();