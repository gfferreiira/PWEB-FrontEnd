import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    nomeProduto : string = "Curso de Angular";
    anuncio: string = `O ${this.nomeProduto} está em promoção`;
    idProduto: number = 3.5123;
    precoProduto : number = 2.59;
    promocao: boolean = false;
    foto: string = 'assets/img/crud.png'
    dataValidade = '2025-05-15'

  constructor() {
      // variáveis de string com concatenação
      // this.anuncio = "O"  + this.nomeProduto + "está em promoção";
      console.log("Nome do Produto: ", this.nomeProduto);
      console.log("Anuncio: ", this.anuncio);
      console.log("ID: ", this.idProduto);
      console.log("Preço: ", this.precoProduto);
      console.log("Promoção: ", this.promocao);

      //Escopo das variáveis dentro do código
      var variavel1;
      let variavel2;
     const variavel3 = 100;

     var idade = 10
     console.log("Minha idade é " + idade)

     /* function imprimeIdade() {
      var idade = 50
      console.log("Minha idade é " + idade)
     }
     imprimeIdade() */

     function imprimeIdade()
     {
      for (let idade  = 30; idade <=40; idade ++){
        console.log("Idade dentro do for: " + idade)
      }
      console.log("Idade fora do for " + idade)
     }
     imprimeIdade()
  }
}
