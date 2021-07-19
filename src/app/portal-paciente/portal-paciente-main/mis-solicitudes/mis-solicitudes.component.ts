import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-solicitudes',
    templateUrl: './mis-solicitudes.component.html',
})
export class MisSolicitudesComponent implements OnInit {

    public selectedId;
    public width: number;
    public solicitud$;
    public solicitudes$;


    @Output() eventoMain = new EventEmitter<number>();
    @Output() eventoSidebar = new EventEmitter<boolean>(); @Output() eventoFoco = new EventEmitter<string>();

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit(): void {

        // Servicios
        this.solicitudes$ = this.prestacionService.getSolicitudes();

        // Mostrar listado
        this.solicitud$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getSolicitud(params.get('id')))
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
            this.router.navigate(['misSolicitudes']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(solicitud) {
        this.selectedId = solicitud.id;
        this.router.navigate(['misSolicitudes', solicitud.id]);
    }
}
