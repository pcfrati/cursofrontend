//& Atividade 3: Criar uma classe representando uma conta bancária

class ContaBancaria {
    #titular;
    #saldo;

    constructor(titular) {
        this.#titular = titular;
        this.#saldo = 0;
    }

    depositar(valor) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }

    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente para o saque.");
        }
    }

    exibirSaldo() {
        console.log(`Saldo atual de ${this.#titular}: R$${this.#saldo.toFixed(2)}`);
    }
}

let conta1 = new ContaBancaria("Heloisa Silva");
console.log("");
conta1.exibirSaldo();
console.log("");
conta1.depositar(1000);
conta1.exibirSaldo();
console.log("");
conta1.sacar(500);
conta1.exibirSaldo();

console.log("");
console.log("");
console.log("");
console.log("");

let conta2 = new ContaBancaria("Jorge da Silva");
conta2.exibirSaldo();
console.log("");
conta2.depositar(10);
conta2.exibirSaldo();
console.log("");
conta2.sacar(500);
conta2.exibirSaldo();
console.log("");