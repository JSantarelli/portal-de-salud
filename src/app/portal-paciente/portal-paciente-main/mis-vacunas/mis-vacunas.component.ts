import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-vacunas',
    templateUrl: './mis-vacunas.component.html',
})
export class MisVacunasComponent implements OnInit {

    public selectedId;
    public width: number;
    public vacuna$;
    public vacunas$;

    mainValue: number;
    @Output() eventoMain = new EventEmitter<number>();
    @Output() eventoSidebar = new EventEmitter<boolean>(); @Output() eventoFoco = new EventEmitter<string>();

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef
    ) { }

    ngOnInit(): void {
        this.prestacionService.valorActual.subscribe(valor => this.mainValue = valor);

        // Servicios
        this.vacunas$ = this.prestacionService.getVacunas();

        // Mostrar listado (vacunas, historia, labs)
        this.vacuna$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getVacuna(params.get('id')))
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
            this.router.navigate(['misVacunas']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(vacuna) {
        vacuna.selected = !vacuna.selected;
        this.router.navigate(['misVacunas', vacuna.id]);

    }
}

