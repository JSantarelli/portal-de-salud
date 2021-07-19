import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-turnos',
    templateUrl: './mis-turnos.component.html',
})
export class MisTurnosComponent implements OnInit {

    public selectedId;
    public width: number;
    public turno$;
    public turnos$;

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
        this.turnos$ = this.prestacionService.getTurnos();

        // Mostrar listado (turnos, historia, labs)
        this.turno$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getTurno(params.get('id')))
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
            this.router.navigate(['misTurnos']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(turno) {
        turno.selected = !turno.selected;
        this.router.navigate(['misTurnos', turno.id]);

    }
}

