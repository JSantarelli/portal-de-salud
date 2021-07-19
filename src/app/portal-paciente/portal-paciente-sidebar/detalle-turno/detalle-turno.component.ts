import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';
import { Turno } from '../../../modelos/turno';

@Component({
    selector: 'app-detalle-turno',
    templateUrl: './detalle-turno.component.html',
})
export class DetalleTurnoComponent implements OnInit {

    public selectedId;
    public width: number;
    public turnos$;
    public prestaciones$;
    public listadoPrestacion: Prestacion[];
    public turnoConfirmado = false;
    prestacion$: Observable<Prestacion>;
    turno$: Observable<Turno>;

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.turnos$ = this.prestacionService.getTurnos();

        // Mostrar detalle de prestacion
        this.turno$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getTurno(params.get('id')))
        );
    }

    confirmarTurno() {
        this.turnoConfirmado = !this.turnoConfirmado;
        console.log(this.confirmarTurno());
    }

}
