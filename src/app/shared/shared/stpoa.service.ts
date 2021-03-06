import { Linhas } from './../model/linhas';
import { ENDPOINTS } from '@core/constants/endpoint';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StpoaService {

  constructor(private http: HttpClient) {}

  public listaLinhas(): Observable<Array<Linhas>>{
    return this.http.get<Array<Linhas>>(`${environment.api}/${ENDPOINTS.LIST_LINHAS}`);
  }

  public listaByNome(nome: string): Observable<Array<Linhas>>{
    return this.http.get<Array<Linhas>>(`${environment.api}/${ENDPOINTS.LINHA_POR_NOME}${nome}`);
  }
}
