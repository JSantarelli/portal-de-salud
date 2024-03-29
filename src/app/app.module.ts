import { FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PlexModule } from '@andes/plex';
import { Plex } from '@andes/plex';
import { Router } from '@angular/router';

// Pipe & Servicios
import { CardService } from './servicios/card.service';
import { PrestacionService } from './servicios/prestacion.service';
import { PacienteService } from './servicios/paciente.service';
import { AgendaService } from './servicios/agenda.service';
//import { PacientePipe } from './pipes/pacientes.pipe'
import { PrestacionPipe } from './pipes/prestaciones.pipe'

// Login
import { LoginComponent } from './portal-paciente/portal-login/portal-login.component';

import { AppComponent } from './app.component';

// Portal de pacientes
import { PortalPacienteComponent } from './portal-paciente/portal-paciente.component';
import { PortalPacienteMainComponent } from './portal-paciente/portal-paciente-main/portal-paciente-main.component';

// Punto de inicio
import { MiInicioComponent } from './portal-paciente/portal-paciente-main/mi-inicio/mi-inicio.component';
import { HomeComponent } from './home.component';

// Listados
import { MiHudsComponent } from './portal-paciente/portal-paciente-main/mi-huds/mi-huds.component';
import { MisFamiliaresComponent } from './portal-paciente/portal-paciente-main/mis-familiares/mis-familiares.component';
import { MisVacunasComponent } from './portal-paciente/portal-paciente-main/mis-vacunas/mis-vacunas.component';
import { MisLaboratoriosComponent } from './portal-paciente/portal-paciente-main/mis-laboratorios/mis-laboratorios.component';
import { MisTurnosComponent } from './portal-paciente/portal-paciente-main/mis-turnos/mis-turnos.component';
import { MisProblemasComponent } from './portal-paciente/portal-paciente-main/mis-problemas/mis-problemas.component';
import { MisPrescripcionesComponent } from './portal-paciente/portal-paciente-main/mis-prescripciones/mis-prescripciones.component';
import { MiEquipoComponent } from './portal-paciente/portal-paciente-main/mi-equipo/mi-equipo.component';
import { MisOrganizacionesComponent } from './portal-paciente/portal-paciente-main/mis-organizaciones/mis-organizaciones.component';
import { MisConsultasComponent } from './portal-paciente/portal-paciente-main/mis-consultas/mis-consultas.component';
import { MisMensajesComponent } from './portal-paciente/portal-paciente-main/mis-mensajes/mis-mensajes.component';
import { MisDocumentosComponent } from './portal-paciente/portal-paciente-main/mis-documentos/mis-documentos.component';
import { MisDatosComponent } from './portal-paciente/portal-paciente-main/mis-datos/mis-datos.component';

// Detalles
import { DetalleFamiliarComponent } from './portal-paciente/portal-paciente-sidebar/detalle-familiar/detalle-familiar.component';
import { DetalleHudsComponent } from './portal-paciente/portal-paciente-sidebar/detalle-huds/detalle-huds.component';
import { DetalleLaboratorioComponent } from './portal-paciente/portal-paciente-sidebar/detalle-laboratorio/detalle-laboratorio.component';
import { DetalleTurnoComponent } from './portal-paciente/portal-paciente-sidebar/detalle-turno/detalle-turno.component';
import { DetalleVacunaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-vacuna/detalle-vacuna.component';
import { DetalleProblemaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-problema/detalle-problema.component';
import { DetallePrescripcionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-prescripcion/detalle-prescripcion.component';
import { DetalleProfesionalComponent } from './portal-paciente/portal-paciente-sidebar/detalle-profesional/detalle-profesional.component';
import { DetalleMensajeComponent } from './portal-paciente/portal-paciente-sidebar/detalle-mensaje/detalle-mensaje.component';
import { DetalleConsultaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-consulta/detalle-consulta.component';
import { DetalleOrganizacionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-organizacion/detalle-organizacion.component';

// Componentes
import { PacienteDetalleComponent } from './componentes/paciente-detalle/paciente-detalle'
import { FiltrosHudsComponent } from './componentes/filtros-huds/filtros-huds';
import { MisSolicitudesComponent } from './portal-paciente/portal-paciente-main/mis-solicitudes/mis-solicitudes.component';
import { DetalleSolicitudComponent } from './portal-paciente/portal-paciente-sidebar/detalle-solicitud/detalle-solicitud.component';
import { ModalTemplateComponent } from './componentes/plex-modal-template/plex-modal-template';
import { PortalPacienteSidebarComponent } from './portal-paciente/portal-paciente-sidebar/portal-paciente-sidebar.component';
import { MapsComponent } from './utils/mapsComponent';
import { PDPMenuComponent } from './componentes/portal-menu/portal-menu.component';
import { PDPTituloComponent } from './componentes/portal-titulo/portal-titulo.component';
import { PlexVisualizadorService } from '@andes/plex';

@NgModule({
    declarations: [
        AppComponent,
        PortalPacienteComponent,
        PortalPacienteMainComponent,
        MiHudsComponent,
        MisLaboratoriosComponent,
        MisVacunasComponent,
        MisTurnosComponent,
        MisFamiliaresComponent,
        MisProblemasComponent,
        MisPrescripcionesComponent,
        MisConsultasComponent,
        MiEquipoComponent,
        MisMensajesComponent,
        MisOrganizacionesComponent,
        MisDocumentosComponent,
        MisSolicitudesComponent,
        MisDatosComponent,
        DetalleHudsComponent,
        DetalleVacunaComponent,
        DetalleLaboratorioComponent,
        DetalleTurnoComponent,
        DetalleFamiliarComponent,
        DetalleProblemaComponent,
        DetallePrescripcionComponent,
        DetalleConsultaComponent,
        DetalleProfesionalComponent,
        DetalleMensajeComponent,
        DetalleOrganizacionComponent,
        DetalleSolicitudComponent,
        PacienteDetalleComponent,
        FiltrosHudsComponent,
        ModalTemplateComponent,
        PortalPacienteComponent,
        PortalPacienteMainComponent,
        PortalPacienteSidebarComponent,
        PDPTituloComponent,
        PDPMenuComponent,
        PrestacionPipe,
        MapsComponent,
        MiInicioComponent,
        LoginComponent,
        HomeComponent
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
        PlexVisualizadorService,
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
