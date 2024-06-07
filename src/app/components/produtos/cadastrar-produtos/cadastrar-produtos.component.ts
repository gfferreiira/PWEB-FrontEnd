import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { IProduto } from 'src/app/model/iproduto.model.ts/iproduto.model.ts.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit{



  produto: IProduto = {
    nome: '',
    validade: new Date(),
    precoProduto: 0
  };
  constructor(private produtosService: ProdutosService, private router: Router){}

  ngOnInit(): void{}

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto).subscribe(retorno => {
      this.produto = retorno;
      this.produtosService.exibirMensagem(
        'Sistema',
        `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
        'toast-success'
      );
      this.router.navigate(['/produtos']);
    });
  }

}
