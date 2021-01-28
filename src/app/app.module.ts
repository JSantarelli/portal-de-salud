import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlexModule } from '@andes/plex';
import { Plex } from '@andes/plex';
import * as $ from 'jquery';
import { Router } from '@angular/router';

// Pipe & Servicios
import { CardService } from './servicios/card.service';
import { PrestacionService } from './servicios/prestacion.service';
import { PacienteService } from './servicios/paciente.service';
import { AgendaService } from './servicios/agenda.service';
//import { PacientePipe } from './pipes/pacientes.pipe'

// Components
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

// Portal de pacientes
import { PortalPacienteComponent } from './portal-paciente/portal-paciente.component';
import { PortalPacienteMainComponent } from './portal-paciente/portal-paciente-main/portal-paciente-main.component';
import { MiHudsComponent } from './portal-paciente/portal-paciente-main/mi-huds/mi-huds.component';
import { DetalleFamiliarComponent } from './portal-paciente/portal-paciente-sidebar/detalle-familiar/detalle-familiar.component';
import { DetallePrestacionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-huds/detalle-huds.component';
import { DetalleLaboratorioComponent } from './portal-paciente/portal-paciente-sidebar/detalle-laboratorio/detalle-laboratorio.component';
import { DetalleTurnoComponent } from './portal-paciente/portal-paciente-sidebar/detalle-turno/detalle-turno.component';
import { DetalleVacunaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-vacuna/detalle-vacuna.component';
import { MisFamiliaresComponent } from './portal-paciente/portal-paciente-main/mis-familiares/mis-familiares.component';
import { MisVacunasComponent } from './portal-paciente/portal-paciente-main/mis-vacunas/mis-vacunas.component';
import { MisLaboratoriosComponent } from './portal-paciente/portal-paciente-main/mis-laboratorios/mis-laboratorios.component';
import { MisTurnosComponent } from './portal-paciente/portal-paciente-main/mis-turnos/mis-turnos.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        PortalPacienteComponent,
        PortalPacienteMainComponent,
        MiHudsComponent,
        MisLaboratoriosComponent,
        MisVacunasComponent,
        MisTurnosComponent,
        MisFamiliaresComponent,
        DetallePrestacionComponent,
        DetalleVacunaComponent,
        DetalleLaboratorioComponent,
        DetalleTurnoComponent,
        DetalleFamiliarComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule,
        PlexModule,
        routing,
        HttpClientModule,
        ReactiveFormsModule,
    ],
    providers: [
        Plex,
        appRoutingProviders,
        FormGroupDirective,
        CardService,
        PrestacionService,
        PacienteService,
        AgendaService

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        // Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
    }
}
