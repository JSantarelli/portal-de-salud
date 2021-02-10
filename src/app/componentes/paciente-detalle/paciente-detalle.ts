import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Servicios y modelo
import { Agenda } from '../../modelos/agenda';
import { Paciente } from '../../modelos/paciente';
import { Plex } from '@andes/plex';
import { EventEmitter, Output } from '@angular/core';
import { PacienteService } from '../../servicios/paciente.service';
import { PlexModalComponent } from '@andes/plex/src/lib/modal/modal.component';

@Component({
    selector: 'paciente-detalle',
    templateUrl: './paciente-detalle.html',
})


export class PacienteDetalleComponent implements OnInit {

    registros = [
        { dato: 'peso', valor: '62 kgs.', fecha: '21/01/2019' },
        { dato: 'talla', valor: '173 cms.', fecha: '12/03/2020' },
        { dato: 'T.A', valor: '96 / 124 mmHg.', fecha: '11/12/2021' },
        { dato: 'grupo/factor', valor: 'A+', fecha: '21/03/2020' },
        { dato: 'Saturación', valor: '96%', fecha: '31/01/2021' },
        { dato: 'Frecuencia', valor: '78 PPM', fecha: '13/03/2018' },
    ]

    alertas = [
        { dato: 'problemas', valor: '7', fecha: '11/03/2021', tipo: 'danger', color: '', icono: 'trastorno' },
        { dato: 'alergias', valor: '3', fecha: '17/07/2020', tipo: 'warning', color: '', icono: 'trastorno' },
        { dato: 'medicamentos', valor: '5', fecha: '21/09/2020', tipo: 'custom', color: '#00cab6', icono: 'trastorno' },
    ]

    @Output() motivoAccesoHuds = new EventEmitter<any>();

    pacientes$: Observable<Paciente[]>
    paciente$: Observable<Paciente>
    width = 0;

    selectedId: number;
    @Output() eventoSidebar = new EventEmitter<number>();

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        if (this.width >= 980) {
            return true;
        }
        else false;
    }

    constructor(
        private plex: Plex,
        private route: ActivatedRoute,
        private router: Router,
        private pacienteService: PacienteService,
        private el: ElementRef,
    ) { }

    ngOnInit() {
        this.pacientes$ = this.pacienteService.getPacientes();

    }

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }

}
