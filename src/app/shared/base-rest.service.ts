import { AlertService } from './alert-service.service';
import { Injectable, isDevMode } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BaseRestService {

  baseUrl = 'http://localhost:8081/task/rest/';

  constructor(private http: HttpClient,
    private alertService: AlertService) {

  }
  
  getter(entidade, servico, parametros) {
    const url = this.baseUrl + entidade + '/' + servico + parametros;
    return this.http.get(url);
  }

  salvar(entidade, objeto) {
    const url = this.baseUrl + entidade + '/create';
    return this.http.post(url, objeto);
  }

  delete(entidade, parametro) {
    const url = this.baseUrl + entidade + '/' + parametro;
    return this.http.delete(url);
  }
}
