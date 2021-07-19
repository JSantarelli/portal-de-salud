import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-organizaciones',
    templateUrl: './mis-organizaciones.component.html',
})
export class MisOrganizacionesComponent implements OnInit {

    public selectedId;
    public width: number;
    public organizacion$;
    public organizaciones$;

    mainValue = 9;
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
        this.organizaciones$ = this.prestacionService.getOrganizaciones();

        // Mostrar listado (organizaciones, historia, labs)
        this.organizacion$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getOrganizacion(params.get('id')))
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
            this.router.navigate(['misOrganizaciones']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(organizacion) {
        organizacion.selected = !organizacion.selected;
        this.router.navigate(['misOrganizaciones', organizacion.id]);
    }
}
