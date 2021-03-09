import { Component, OnInit } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-mis-consultas',
    templateUrl: './mis-consultas.component.html',
})
export class MisConsultasComponent implements OnInit {

    public selectedId;
    public prestacion$;
    public prestaciones$;

    @Output() eventoSidebar = new EventEmitter<number>();
    @Output() eventoFoco = new EventEmitter<string>();

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {

        // Servicios
        this.prestaciones$ = this.prestacionService.getConsultas();

        //mostrar listado
        this.prestacion$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getConsulta(params.get('id')))
        );
    }

    // Solo sirve para enviar a padre inmediato sino behaviourSubject
    //enviarFoco() {
    //    this.eventoFoco.emit(this.valorFoco)
    //    console.log(this.valorFoco)
    //}

    nuevoValor() {
        this.prestacionService.actualizarValor(9);
    }

    cambiaFoco() {
        this.prestacionService.actualizarFoco('sidebar');
    }

    selected(prestacion) {
        prestacion.selected = !prestacion.selected;
        this.nuevoValor();
        this.cambiaFoco();
        this.prestacionService.resetOutlet();
        setTimeout(() => {
            this.selectedId = prestacion.id;
            this.router.navigate(['portal-paciente', { outlets: { detalleConsulta: [this.selectedId] } }]);
        }, 500);
    }
}
