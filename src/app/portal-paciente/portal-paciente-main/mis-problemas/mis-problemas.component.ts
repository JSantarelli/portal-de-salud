import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
    selector: 'app-mis-problemas',
    templateUrl: './mis-problemas.component.html',
})
export class MisProblemasComponent implements OnInit {

    public selectedId;
    public width: number;
    public problema$;
    public problemas$;
    mainValue: number;

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit(): void {
        this.prestacionService.valorActual.subscribe(valor => this.mainValue = valor);

        // Servicios
        this.problemas$ = this.prestacionService.getProblemas();

        // Mostrar listado
        this.problema$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getProblema(params.get('id')))
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
            this.router.navigate(['misProblemas']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(problema) {

        problema.selected = !problema.selected;
        //this.prestacionService.resetOutlet();
        setTimeout(() => {
            this.selectedId = problema.id;
            this.router.navigate(['misProblemas', this.selectedId]);
        }, 500);
    }
}
