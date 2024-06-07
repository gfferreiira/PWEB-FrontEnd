import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { ToastrService } from 'ngx-toastr'
import { IProduto } from '../model/iproduto.model.ts/iproduto.model.ts.module';
import { HttpClient } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private URL: string = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient, private toastr: ToastrService){}

  buscarTodos(): Observable<IProduto[]>{
    return this.http.get<IProduto[]>(this.URL).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number): Observable<IProduto>{
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  exibirErro(e: any): Observable<any>{
    this.exibirMensagem('Erro!!', 'Não foi possível realizar a operação', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void {
      this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo)
  }

  cadastrar(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );
  }

  atualizar(produto: IProduto): Observable<IProduto>{
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );
  }
  excluir(id: number): Observable<any>{
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
      );
  }
}
