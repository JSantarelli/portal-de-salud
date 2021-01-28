import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

import { Prestacion } from '../modelos/prestacion';
import { PRESTACIONES } from '../mock-data/mock-prestaciones';
import { Vacuna } from '../modelos/vacuna';
import { VACUNAS } from '../mock-data/mock-vacunas';
import { Turno } from '../modelos/turno';
import { TURNOS } from '../mock-data/mock-turnos';
import { Laboratorio } from '../modelos/laboratorio';
import { LABORATORIOS } from '../mock-data/mock-laboratorios';
import { Familiar } from '../modelos/familiar';
import { FAMILIARES } from '../mock-data/mock-familiares';

@Injectable()

export class PrestacionService {

    private previousUrl: string;
    private currentUrl: string;

    public getPreviousUrl() {
        return this.previousUrl;
    }

    private valorInicial = new BehaviorSubject<number>(9);
    valorActual = this.valorInicial.asObservable();

    constructor(private router: Router) {
        this.currentUrl = this.router.url;
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.previousUrl = this.currentUrl;
                this.currentUrl = event.url;
            };
        });
    }

    actualizarValor(sidebarValue: number) {
        this.valorInicial.next(sidebarValue)
    }

    getPrestaciones(): Observable<Prestacion[]> {
        return of(PRESTACIONES);
    }

    getPrestacion(id: number | string) {
        return this.getPrestaciones().pipe(
            map((prestaciones: Prestacion[]) => prestaciones.find(prestacion => prestacion.id === +id))
        );
    }

    getVacunas(): Observable<Vacuna[]> {
        return of(VACUNAS);
    }

    getVacuna(id: number | string) {
        return this.getVacunas().pipe(
            map((vacunas: Vacuna[]) => vacunas.find(vacuna => vacuna.id === +id))
        );
    }

    getFamiliares(): Observable<Familiar[]> {
        return of(FAMILIARES);
    }

    getFamiliar(id: number | string) {
        return this.getFamiliares().pipe(
            map((familiares: Familiar[]) => familiares.find(familiar => familiar.id === +id))
        );
    }

    getLaboratorios(): Observable<Laboratorio[]> {
        return of(LABORATORIOS);
    }

    getLaboratorio(id: number | string) {
        return this.getLaboratorios().pipe(
            map((laboratorios: Laboratorio[]) => laboratorios.find(laboratorio => laboratorio.id === +id))
        );
    }

    getTurnos(): Observable<Turno[]> {
        return of(TURNOS);
    }

    getTurno(id: number | string) {
        return this.getTurnos().pipe(
            map((turnos: Turno[]) => turnos.find(turno => turno.id === +id))
        );
    }
}
