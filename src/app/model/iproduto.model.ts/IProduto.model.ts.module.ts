import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IProdutoModelTsModule { }

export interface IProduto
{
  id?: number;
  nome: string;
  validade: Date;
  precoProduto: number;
}
