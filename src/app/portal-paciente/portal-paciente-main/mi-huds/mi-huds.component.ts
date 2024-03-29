import { Component, OnInit, ElementRef } from '@angular/core';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventEmitter, Output } from '@angular/core';
import { switchMap } from 'rxjs/operators';
//import { Plex } from '@andes/plex';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-mi-huds',
    templateUrl: './mi-huds.component.html',
})
export class MiHudsComponent implements OnInit {
    searchTerm$ = new BehaviorSubject<string>('');

    public selectedId;
    public width: number;
    public hud$;
    public huds$;

    mainValue: number;
    filtros = true;
    verHuds = false;

    public duracion = '1 hs. 34 min.';
    //public plex: Plex;
    public tModel: any;
    public optiones: any[];
    public options: any[];
    public huds: any[];
    public profesionales: any[];
    public efectores: any[];
    public modelo1 = { select: null };
    public modelo2 = {
        select: null,
        soloLectura: false,
        selectMultiple: null
    };
    public modelo3 = { select: null };
    public templateModel2: any;
    public modelo: any;

    public showModal = false;

    @Output() eventoMain = new EventEmitter<number>();
    @Output() eventoSidebar = new EventEmitter<boolean>(); @Output() eventoFoco = new EventEmitter<string>();

    updateMaxHora() {
        //this.tModel.minHora = moment().add(30, 'minutes').add(1, 'days');
    }

    horaPlus() {
        //return moment(this.tModel.hora).add(30, 'minutes');
    }

    onChange() {
        //this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }

    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
        private router: Router,
        private el: ElementRef,
    ) { }

    ngOnInit(): void {
        this.prestacionService.valorActual.subscribe(valor => this.mainValue = valor);

        // Servicios
        this.huds$ = this.prestacionService.getHuds();

        // Mostrar listado
        this.hud$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getHud(params.get('id')))
        );

        // plex-datetime
        this.tModel = {
            fechaHora: null,
            fecha: null,
            hora: null,
            horados: null,
            disabled: false,
            min: new Date(1970, 0, 1),
            //minHora: moment().add(30, 'minutes'),
            //maxHora: moment().add(180, 'minutes'),
            fechaDecounce: new Date(1970, 0, 1),
        };

        // plex-phone
        // plex-float
        this.tModel = { valor: null };

        // Radio
        this.options = [
            {
                label: 'todas',
                key: 1,
            },
            {
                label: 'mías',
                key: 2,
            },
        ];

        // plex-select efectores
        this.efectores = [{
            id: 1,
            nombre: 'Hospital Provincial Neuquén',
            continente: 'Neuquén',
        },
        {
            id: 2,
            nombre: 'Hospital San Martín de los Andes',
            continente: 'Neuquén',
        },
        {
            id: 3,
            nombre: 'Hospital de Plottier',
            continente: 'Neuquén',
        }];

        // plex-select huds
        this.huds = [{
            id: 1,
            nombre: 'Consulta general de medicina',
        },
        {
            id: 2,
            nombre: 'Consulta domiciliaria',
        },
        {
            id: 3,
            nombre: 'Exámen médico del adulto"',
        },
        {
            id: 4,
            nombre: 'Consulta de psicología',
        },
        {
            id: 5,
            nombre: 'Consulta pediátrica de neurología',
        }
        ];

        // plex-select profesionales
        this.profesionales = [{
            id: 1,
            nombre: 'Monteverde, María Laura ',
        },
        {
            id: 2,
            nombre: 'Molini, Walter Juan',
        },
        {
            id: 3,
            nombre: 'Mendiguren, Macarena Agustina',
        },
        {
            id: 4,
            nombre: 'Siracussi, Alejandra Gabriela',
        },
        {
            id: 5,
            nombre: 'Cifuentes, Mónica Patricia',
        }
        ];

        this.modelo1.select = this.modelo2.select = this.efectores[1];

        // plex-text
        this.templateModel2 = { nombre: null, min: 10, max: 15 };

        // plex-bool
        this.modelo = { checkbox: false, slide: false };
    }

    mostrarFiltros() {
        this.filtros = !this.filtros;
    }

    mostrarHuds() {
        this.verHuds = !this.verHuds;
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
            this.router.navigate(['miHuds']);
        }
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

    selected(hud) {
        hud.selected = !hud.selected;
        this.selectedId = hud.id;
        this.router.navigate(['miHuds', this.selectedId]);
    }
}

