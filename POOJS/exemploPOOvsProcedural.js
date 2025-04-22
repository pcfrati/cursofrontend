//? POO VS Procedural (estrutural)

//? Procedural :
// declaração de variavel
let produto = {
    nome: "Impressora",
    preco: 2000,
    desconto: function(){
        return this.preco*0.1;
    }
}//coleção ^

let produto2 = {
    nome: "Tablet",
    preco: 1500,
    desconto: function(){
        return this.preco*0.1;
    }
}//coleção ^

//? ___________________ . >

//? POO :
class Produto{
    // atributos criados diretamente pelo construtor, sem necessidade de declarar
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
    desconto(){
        return this.preco*0.1;
    }
}
// instanciar um objeto
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("Tablet", 1500);


//&  _________________________________________________________ . .
//atributos privados
class Produto{
    //atributos
    #nome; // # privado
    #preco;// # privado
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    //criar métodos getter e setter
    desconto(){
        return this.preco * 0.1; // erro ao chamar o this.preco, já que o atributo é privado
    }
}


//&  _________________________________________________________ . .
// sem erro
class Produto{
    //atributos
    #nome; // # privado
    #preco;// # privado
    constructor(nome, preco){
        this.#nome = nome;
        this.#preco = preco;
    }
    //criar métodos getter e setter
    get getNome(){
        return this.#nome;
    }
    get getPreco(){
        return this.#preco;
    }
    desconto(){
        return this.getPreco * 0.1; //erro ao chamar o this.preco, pois o atributo é privado
    }
}



//?  ____________________________________________________________________ . .

//? Exemplos de uso de POO
class Pessoa{
    //atributos privados
    #nome;
    #idade;
    #cpf;

    //construtor
    constructor(nome, idade, cpf){
        this.#nome = nome;
        this.#idade = idade;
        this.#cpf = cpf;
    }
    //metodos públicos
    get getNome(){return this.#nome;}
    get getIdade(){return this.#idade;}
    get getCPF(){return this.#cpf;}
    
    set setIdade(idade){
        this.#idade = idade;
    }
    exibirInfo() {
        console.log(`Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`);
    }
}

let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 35, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31;// atualiza a idade da pessoa1
pessoa1.exibirInfo(); // exibe as informações atualizadas


//herança (extends)

class Funcionario extends Pessoa {
    // atributos privados
    #cargo;
    #salario;

    //construtor
    constructor(nome, idade, cpf, cargo, salario){
        super(nome, idade,cpf); //chama o construtor da superclasse
        this.#cargo = cargo;
        this.#salario = salario;
    }
    //métodos publicos
    get getCargo(){return this.#cargo;}
    get getSalario(){return this.#salario;}

    set setSalario(salario){this.#salario = salario;}
    set setCargo(cargo){this.#cargo = cargo;}

    //método exibirInfo
    exibirInfo(){
        super.exibirInfo(); // chama a superclasse
        console.log(`Cargo: ${this.getCargo} \nSalário: ${this.getSalario}`);
    }
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);

funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo(); // exibe  as informações atualizadas