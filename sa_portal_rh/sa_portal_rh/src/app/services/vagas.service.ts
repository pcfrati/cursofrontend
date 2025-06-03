import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagasService {
  private apiUrl = 'http://localhost:3013/vagas';

  constructor(private http: HttpClient) {}

  //& criar os métodos para a conexão com a apiREST

  //*   get - obter a lista de vagas
  getVagas():Observable<Vaga[]> {   // observable -> rxjs => tradutor de json para typescript
    return this.http.get<Vaga[]>(this.apiUrl);
  }

  //*   post
  //*   put
  //*   delete
}
