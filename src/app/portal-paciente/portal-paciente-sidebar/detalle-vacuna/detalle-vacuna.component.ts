import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';
import { Vacuna } from '../../../modelos/vacuna';

@Component({
    selector: 'app-detalle-vacuna',
    templateUrl: './detalle-vacuna.component.html',
})
export class DetalleVacunaComponent implements OnInit {

    public selectedId;
    public width: number;
    public vacunas$;
    public prestaciones$;
    public listadoPrestacion: Prestacion[];
    prestacion$: Observable<Prestacion>;
    vacuna$: Observable<Vacuna>;



    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.vacunas$ = this.prestacionService.getVacunas();

        // Mostrar detalle de prestacion
        this.vacuna$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getVacuna(params.get('id')))
        );
    }


}
