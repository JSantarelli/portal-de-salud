import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-familiares',
    templateUrl: './mis-familiares.component.html',
})
export class MisFamiliaresComponent implements OnInit {

    public selectedId;
    public width: number;
    public familiar$;
    public familiares$;

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
        this.familiares$ = this.prestacionService.getFamiliares();

        // Mostrar listado (familiares, historia, labs)
        this.familiar$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getFamiliar(params.get('id')))
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
            this.router.navigate(['misFamiliares']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(familiar) {
        familiar.selected = !familiar.selected;
        this.router.navigate(['misFamiliares', familiar.id]);
    }
}

