import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

// Servicios & mock-data
import { PacienteService } from 'src/app/servicios/paciente.service';
import { CardService } from 'src/app/servicios/card.service';
import { Paciente } from 'src/app/modelos/paciente';
import { Card } from 'src/app/modelos/card';

@Component({
    selector: 'app-mi-inicio',
    templateUrl: './mi-inicio.component.html',
})
export class MiInicioComponent implements OnInit {
    registros = [
        { dato: 'peso', valor: '62 kgs.', fecha: '21/01/2019' },
        { dato: 'talla', valor: '173 cms.', fecha: '12/03/2020' },
        { dato: 'T.A', valor: '96 / 124 mmHg.', fecha: '11/12/2021' },
        { dato: 'grupo/factor', valor: 'A+', fecha: '21/03/2020' },
        { dato: 'Saturación', valor: '96%', fecha: '31/01/2021' },
        { dato: 'Frecuencia', valor: '78 PPM', fecha: '13/03/2018' },
    ]

    searchTerm = new BehaviorSubject<string>('');

    paciente$: Observable<Paciente>;
    pacientes$: Observable<Paciente[]>;
    card$: Observable<Card>;
    cards$: Observable<Card[]>;
    width: number;
    datosSecundarios = true;

    constructor(
        private cardService: CardService,
        private route: ActivatedRoute,
        private router: Router,
        private pacienteService: PacienteService,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();
        this.cards$ = this.cardService.getCards();
    }

    ocultarDatos() {
        this.datosSecundarios = !this.datosSecundarios;
    }

    goTo(path) {
        this.router.navigate([path]);
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        if (this.width < 780) {
            return true;
        }
        else false;
        this.datosSecundarios = false;
    }

}
