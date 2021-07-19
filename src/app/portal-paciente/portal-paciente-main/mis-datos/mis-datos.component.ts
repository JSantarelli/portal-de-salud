import { Component, OnInit, ElementRef } from '@angular/core';
import { Plex } from '@andes/plex';
import { PacienteService } from 'src/app/servicios/paciente.service';

@Component({
    selector: 'app-mis-datos',
    templateUrl: './mis-datos.component.html',
})
export class MisDatosComponent implements OnInit {
    width: number;
    public edicionContacto = false;
    public paciente$;
    public pacientes$;
    public tModel: any;
    public tipoComunicacion: any[];
    public provincias: any[];
    public localidades: any[];
    public barrios: any[];
    public modelo1 = { select: null, radio: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public prueba = '';
    public templateModel2: any;
    public modelo: any;

    public opciones2 = [
        { id: 1, label: 'Rojo' },
        { id: 2, label: 'Verde' }
    ];

    constructor(
        private plex: Plex,
        private pacienteService: PacienteService,
        private el: ElementRef
    ) { }

    ngOnInit() {
        // Servicios
        this.pacientes$ = this.pacienteService.getPacientes();

        // plex-datetime
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            minHora: moment().add(30, 'minutes'),
            maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };


        // Template-Form2 model
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-phone
        // plex-float
        this.tModel = { valor: null };

        // plex-select
        this.tipoComunicacion = [{
            id: 1,
            nombre: 'teléfono fijo',
        },
        {
            id: 2,
            nombre: 'teléfono celular',
        },
        {
            id: 3,
            nombre: 'email',
        },
        ];

        // provincias
        this.provincias = [{
            id: 1,
            nombre: 'neuquén',
        },
        {
            id: 2,
            nombre: 'río negro',
        },
        {
            id: 3,
            nombre: 'mendoza',
        },
        ];

        // localidades
        this.localidades = [{
            id: 1,
            nombre: 'neuquén',
        },
        {
            id: 2,
            nombre: 'huinganco',
        },
        {
            id: 3,
            nombre: 'san martín de los andes',
        },
        ];

        // barrios
        this.barrios = [{
            id: 1,
            nombre: 'santa genoveva',
        },
        {
            id: 2,
            nombre: 'san lorenzo',
        },
        {
            id: 3,
            nombre: 'valentina sur',
        },
        ];

        this.modelo1.select = this.modelo2.select = this.tipoComunicacion[1];

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-bool
        this.modelo = { checkbox: false, slide: false };
    }

    updateMaxHora() {
        this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        return moment(this.tModel.hora).add(30, 'minutes');
    }

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }

    //isResponsive() {
    //    this.width = this.el.nativeElement.clientWidth;
    //    if (this.width < 1024) {
    //        return true;
    //    }
    //    else false;
    //    console.log(this.isResponsive());
    //}

    editarContacto() {
        this.edicionContacto = !this.edicionContacto;
    }
}

