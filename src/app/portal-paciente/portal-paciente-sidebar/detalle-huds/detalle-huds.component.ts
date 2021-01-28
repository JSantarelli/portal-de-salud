import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';

@Component({
    selector: 'plex-detalle-huds',
    templateUrl: './detalle-huds.component.html',
})
export class DetallePrestacionComponent implements OnInit {

    public selectedId;
    public prestaciones$;
    public listadoPrestacion: Prestacion[];
    prestacion$: Observable<Prestacion>;

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.prestaciones$ = this.prestacionService.getPrestaciones();
        this.prestacionService.getPreviousUrl();

        //mostrar detalle de prestacion
        this.prestacion$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getPrestacion(params.get('id')))
        );
    }


}
