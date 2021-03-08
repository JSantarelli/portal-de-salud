import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';
import { Turno } from '../../../modelos/turno';
import { Mensaje } from 'src/app/modelos/mensaje';

@Component({
    selector: 'detalle-mensaje',
    templateUrl: './detalle-mensaje.component.html',
})
export class DetalleMensajeComponent implements OnInit {

    public selectedId;
    public mensajes$;
    public prestaciones$;
    mensaje$: Observable<Mensaje>;

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.mensajes$ = this.prestacionService.getMensajes();

        //mostrar detalle de prestacion
        this.mensaje$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getMensaje(params.get('id')))
        );
    }


}