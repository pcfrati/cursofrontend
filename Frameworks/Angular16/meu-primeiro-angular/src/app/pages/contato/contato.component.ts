import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  nome: string = "";
  email: string = "";
  telefone: string = "";
  idade: number | null = null;
  profissao: string = "";

  limparDados(){
    this.nome = "";
    this.email= "";
    this.telefone = "";
    this.idade = null;
    this.profissao = "";
  }

  validarDados() {
    const erros: string[] = [];

    if (this.nome.trim().length < 3) {
      erros.push("O nome deve ter pelo menos 3 caracteres.");
    }

    if (!this.email.includes('@')) {
      erros.push("O e-mail deve conter o caractere '@'.");
    }

    if (this.idade === null || this.idade < 18) {
      erros.push("A idade deve ser maior ou igual a 18.");
    }

    if (
      this.nome.trim() === "" ||
      this.email.trim() === "" ||
      this.telefone.trim() === "" ||
      this.idade === null ||
      this.profissao.trim() === ""
    ) {
      erros.push("Todos os campos devem ser preenchidos.");
    }

    if (erros.length > 0) {
      alert("Erros encontrados:\n" + erros.join("\n"));
    } else {
      alert("Dados validados com sucesso!");
    }
  }
}