import { Component, OnInit, ElementRef } from '@angular/core';
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
    public width: number;
    public laboratorio$;
    public laboratorios$;
    filtros = true;

    mainValue = 12;
    @Output() eventoMain = new EventEmitter<number>();
    @Output() eventoSidebar = new EventEmitter<boolean>(); @Output() eventoFoco = new EventEmitter<string>();

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef
    ) { }

    ngOnInit(): void {
        // Servicios
        this.laboratorios$ = this.prestacionService.getLaboratorios();

        // Mostrar listado
        this.laboratorio$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getLaboratorio(params.get('id')))
        );
    }

    nuevoValor() {
        this.prestacionService.actualizarValor(9);
    }

    mostrarSidebar() {
        this.prestacionService.actualizarSidebar(true);
    }

    cambiaFoco() {
        this.prestacionService.actualizarFoco('sidebar');
    }



    gotTo(id?) {
        if (id) {
            this.router.navigate([id], { relativeTo: this.route });
        } else {
            this.router.navigate(['misLaboratorios']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(laboratorio) {
        this.selectedId = laboratorio.id;
        this.router.navigate(['misLaboratorios', laboratorio.id]);
    }
}
