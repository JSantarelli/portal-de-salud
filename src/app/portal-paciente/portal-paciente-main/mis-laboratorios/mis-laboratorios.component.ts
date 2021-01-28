import { Component, OnInit } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-laboratorios',
    templateUrl: './mis-laboratorios.component.html',
})
export class MisLaboratoriosComponent implements OnInit {

    public selectedId;
    public laboratorio$;
    public laboratorios$;

    sidebarValue = 12;
    @Output() eventoSidebar = new EventEmitter<number>();

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,) { }

    ngOnInit(): void {
        // Servicios
        this.laboratorios$ = this.prestacionService.getLaboratorios();

        //mostrar listado
        this.laboratorio$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getLaboratorio(params.get('id')))
        );
    }

    enviarSidebar() {
        this.eventoSidebar.emit(this.sidebarValue);
        this.sidebarValue = 8;
    }

    selected(laboratorio) {
        this.selectedId = laboratorio.id;
        //this.router.navigate(['portal-paciente', this.selectedId]);
    }
}