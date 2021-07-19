import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';

@Component({
    selector: 'app-detalle-consulta',
    templateUrl: './detalle-consulta.component.html',
})
export class DetalleConsultaComponent implements OnInit {

    public selectedId;
    public width: number;
    public prestaciones$;
    public listadoPrestacion: Prestacion[];
    prestacion$: Observable<Prestacion>;

    public items = [
        {
            label: 'opcion 1',
            key: '1',
        },
        {
            label: 'opcion 2',
            key: '2',
        },
        {
            label: 'opcion 3',
            key: '3',
        }
    ];

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.prestaciones$ = this.prestacionService.getConsultas();
        this.prestacionService.getPreviousUrl();

        // Mostrar detalle de prestacion
        this.prestacion$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getConsulta(params.get('id')))
        );
    }


}
