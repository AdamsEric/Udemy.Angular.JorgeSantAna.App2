import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Oferta } from './oferta.model';
import { URL_API } from '../app.api';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasService {

    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
        .toPromise()
        .then((resposta) => resposta.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
        .toPromise().then((resposta) => resposta.json().shift());
    }
}