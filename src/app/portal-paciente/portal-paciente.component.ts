import { Component, OnInit, ElementRef } from '@angular/core';

// rxjs
import { Observable } from 'rxjs';

// Servicios y modelo
import { Agenda } from '../modelos/agenda';
import { Paciente } from '../modelos/paciente';
import { Plex } from '@andes/plex';
import { EventEmitter, Output } from '@angular/core';
import { Card } from '../modelos/card';
import { PrestacionService } from '../servicios/prestacion.service';

@Component({
    selector: 'app-plex-portal-paciente',
    templateUrl: './portal-paciente.component.html',
    styleUrls: ['./portal-paciente.component.scss']
})


export class PortalPacienteComponent implements OnInit {

    @Output() motivoAccesoHuds = new EventEmitter<any>();
    @Output() eventoMain = new EventEmitter<number>();
    @Output() eventoFoco = new EventEmitter<string>();

    // Navegación lateral
    valorMain = 11;
    valorMenu = 1;
    valorResultante = this.valorMain - this.valorMenu;

    selectedId: number;
    mainValue: number;
    sidebarValue: boolean;
    valorFoco: string = 'main';
    previousUrl: string;
    width = 0;

    public sidebar;
    public i;

    constructor(
        private plex: Plex,
        private prestacionService: PrestacionService,
        private el: ElementRef,
    ) { }

    ngAfterViewInit() {
        this.sidebarValue = false;
        this.valorFoco = null;
    }

    ngOnInit() {

        this.modelo = { invert: false };

        // Paso valor del main
        this.prestacionService.valorActual.subscribe(valor => this.mainValue = valor);

        // Paso valor del sidebar
        this.prestacionService.sidebarActual.subscribe(valor => this.sidebarValue = valor);

        // Paso valor del foco
        this.prestacionService.focoActual.subscribe(valor => this.valorFoco = valor)
    }

    // public prueba = '';
    public templateModel2: any;
    public modelo: any;
    public showModal = false;

    // public listadoPaciente: Paciente[];
    pacientes$: Observable<Paciente[]>;
    agendas$: Observable<Agenda[]>;
    cards$: Observable<Card[]>;

    onChange() {
        this.plex.info('success', 'Este cartel se demoro un segundo en aparecer después de escribir.');
    }

    recibirMain($event) {
        this.mainValue = $event;
    }

    recibirSidebar($event) {
        this.sidebarValue = $event;
    }

    recibirFoco($event) {
        this.valorFoco = $event;
    }

    // fuerza not-focused (que solo funciona en responsive)
    //killSidebar() {
    //    this.sidebar = document.getElementsByClassName("h-100 col-0 not-focused");

    //    for (this.i = 0; this.i < this.sidebar.length; this.i++) {
    //        this.sidebar[this.i].style.display = 'none';
    //    }
    //}

    contraerSidebar() {
        this.mainValue = 12;
        this.valorFoco = null;
        this.sidebarValue = false;
    }

    // Nav lateral
    expandirMenu() {
        this.valorMenu = 2;
    }

    contraerMenu() {
        this.valorMenu = 1;
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        if (this.width < 780) {
            this.valorResultante = 12;
            return true;
        } else {
            this.valorResultante = 11;
        }
    }
}
