import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Login
import { LoginComponent } from './portal-paciente/portal-login/portal-login.component';

// Punto de inicio
import { MiInicioComponent } from './portal-paciente/portal-paciente-main/mi-inicio/mi-inicio.component';

import { PortalPacienteComponent } from './portal-paciente/portal-paciente.component';
import { PDPMenuComponent } from './componentes/portal-menu/portal-menu.component';
import { MiHudsComponent } from './portal-paciente/portal-paciente-main/mi-huds/mi-huds.component';
import { MisVacunasComponent } from './portal-paciente/portal-paciente-main/mis-vacunas/mis-vacunas.component';
import { MisLaboratoriosComponent } from './portal-paciente/portal-paciente-main/mis-laboratorios/mis-laboratorios.component';
import { MisTurnosComponent } from './portal-paciente/portal-paciente-main/mis-turnos/mis-turnos.component';
import { MisFamiliaresComponent } from './portal-paciente/portal-paciente-main/mis-familiares/mis-familiares.component';
import { MisProblemasComponent } from './portal-paciente/portal-paciente-main/mis-problemas/mis-problemas.component';
import { MisPrescripcionesComponent } from './portal-paciente/portal-paciente-main/mis-prescripciones/mis-prescripciones.component';
import { MisConsultasComponent } from './portal-paciente/portal-paciente-main/mis-consultas/mis-consultas.component'
import { MiEquipoComponent } from './portal-paciente/portal-paciente-main/mi-equipo/mi-equipo.component';
import { MisMensajesComponent } from './portal-paciente/portal-paciente-main/mis-mensajes/mis-mensajes.component';
import { MisOrganizacionesComponent } from './portal-paciente/portal-paciente-main/mis-organizaciones/mis-organizaciones.component';
import { MisDocumentosComponent } from './portal-paciente/portal-paciente-main/mis-documentos/mis-documentos.component';
import { MisSolicitudesComponent } from './portal-paciente/portal-paciente-main/mis-solicitudes/mis-solicitudes.component';
import { MisDatosComponent } from './portal-paciente/portal-paciente-main/mis-datos/mis-datos.component';

import { DetalleVacunaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-vacuna/detalle-vacuna.component';
import { DetalleLaboratorioComponent } from './portal-paciente/portal-paciente-sidebar/detalle-laboratorio/detalle-laboratorio.component';
import { DetalleTurnoComponent } from './portal-paciente/portal-paciente-sidebar/detalle-turno/detalle-turno.component';
import { DetalleHudsComponent } from './portal-paciente/portal-paciente-sidebar/detalle-huds/detalle-huds.component';
import { DetalleFamiliarComponent } from './portal-paciente/portal-paciente-sidebar/detalle-familiar/detalle-familiar.component';
import { DetalleProblemaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-problema/detalle-problema.component';
import { DetallePrescripcionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-prescripcion/detalle-prescripcion.component';
import { DetalleConsultaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-consulta/detalle-consulta.component';
import { DetalleProfesionalComponent } from './portal-paciente/portal-paciente-sidebar/detalle-profesional/detalle-profesional.component';
import { DetalleMensajeComponent } from './portal-paciente/portal-paciente-sidebar/detalle-mensaje/detalle-mensaje.component';
import { DetalleOrganizacionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-organizacion/detalle-organizacion.component';
import { DetalleSolicitudComponent } from './portal-paciente/portal-paciente-sidebar/detalle-solicitud/detalle-solicitud.component';


const appRoutes: Routes = [
    {
        path: 'miInicio', component: MiInicioComponent,
    },
    {
        path: 'miHuds', component: MiHudsComponent,
        children: [
            { path: ':id', component: DetalleHudsComponent }

        ]
    },
    {
        path: 'misVacunas', component: MisVacunasComponent,
        children: [
            { path: ':id', component: DetalleVacunaComponent }
        ]
    },
    {
        path: 'misLaboratorios', component: MisLaboratoriosComponent,
        children: [
            { path: ':id', component: DetalleLaboratorioComponent }
        ]
    },
    {
        path: 'misTurnos', component: MisTurnosComponent,
        children: [
            { path: ':id', component: DetalleTurnoComponent }
        ]
    },
    {
        path: 'misProblemas', component: MisProblemasComponent,
        children: [
            { path: ':id', component: DetalleProblemaComponent }
        ]
    },
    {
        path: 'misPrescripciones', component: MisPrescripcionesComponent,
        children: [
            { path: ':id', component: DetallePrescripcionComponent }
        ]
    },
    {
        path: 'misConsultas', component: MisConsultasComponent,
        children: [
            { path: ':id', component: DetalleConsultaComponent }
        ]
    },
    {
        path: 'miEquipo', component: MiEquipoComponent,
        children: [
            { path: ':id', component: DetalleProfesionalComponent }
        ]
    },
    {
        path: 'misFamiliares', component: MisFamiliaresComponent,
        children: [
            { path: ':id', component: DetalleFamiliarComponent }
        ]
    },
    {
        path: 'misMensajes', component: MisMensajesComponent,
        children: [
            { path: ':id', component: DetalleMensajeComponent }
        ]
    },
    {
        path: 'misOrganizaciones', component: MisOrganizacionesComponent,
        children: [
            { path: ':id', component: DetalleOrganizacionComponent }
        ]
    },
    {
        path: 'misSolicitudes', component: MisSolicitudesComponent,
        children: [
            { path: ':id', component: DetalleSolicitudComponent }
        ]
    },
    {
        path: 'misDocumentos', component: MisDocumentosComponent,
    },
    { path: 'misDatos', component: MisDatosComponent },

    { path: '', component: LoginComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export class AppRoutingModule { }
