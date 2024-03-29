import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home.component';
import { LoginComponent } from './portal-paciente/portal-login/portal-login.component';

import { PortalPacienteComponent } from './portal-paciente/portal-paciente.component';
import { MiHudsComponent } from './portal-paciente/portal-paciente-main/mi-huds/mi-huds.component';
import { MisVacunasComponent } from './portal-paciente/portal-paciente-main/mis-vacunas/mis-vacunas.component';
import { MisLaboratoriosComponent } from './portal-paciente/portal-paciente-main/mis-laboratorios/mis-laboratorios.component';
import { MisTurnosComponent } from './portal-paciente/portal-paciente-main/mis-turnos/mis-turnos.component';
import { MisFamiliaresComponent } from './portal-paciente/portal-paciente-main/mis-familiares/mis-familiares.component';
import { MisProblemasComponent } from './portal-paciente/portal-paciente-main/mis-problemas/mis-problemas.component';
import { MisPrescripcionesComponent } from './portal-paciente/portal-paciente-main/mis-prescripciones/mis-prescripciones.component';
import { MisConsultasComponent } from './portal-paciente/portal-paciente-main/mis-consultas/mis-consultas.component'

import { DetalleVacunaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-vacuna/detalle-vacuna.component';
import { DetalleLaboratorioComponent } from './portal-paciente/portal-paciente-sidebar/detalle-laboratorio/detalle-laboratorio.component';
import { DetalleTurnoComponent } from './portal-paciente/portal-paciente-sidebar/detalle-turno/detalle-turno.component';
import { DetalleHudsComponent } from './portal-paciente/portal-paciente-sidebar/detalle-huds/detalle-huds.component';
import { DetalleFamiliarComponent } from './portal-paciente/portal-paciente-sidebar/detalle-familiar/detalle-familiar.component';
import { DetalleProblemaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-problema/detalle-problema.component';
import { DetallePrescripcionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-prescripcion/detalle-prescripcion.component';
import { DetalleConsultaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-consulta/detalle-consulta.component';

const appRoutes: Routes = [
    {
        path: ' ', component: LoginComponent,

        children: [
            { path: ':id', component: DetalleHudsComponent, },
            { path: 'misVacunas', component: MisVacunasComponent, },
            { path: ':id', component: DetalleVacunaComponent, },

            { path: 'misLaboratorios', component: MisLaboratoriosComponent, },
            { path: ':id', component: DetalleLaboratorioComponent, },

            { path: 'misTurnos', component: MisTurnosComponent, },
            { path: ':id', component: DetalleTurnoComponent, },

            { path: 'misFamiliares', component: MisFamiliaresComponent, },
            { path: ':id', component: DetalleFamiliarComponent, },

            { path: 'misProblemas', component: MisProblemasComponent, },
            { path: ':id', component: DetalleProblemaComponent, },

            { path: 'misPrescripciones', component: MisPrescripcionesComponent, },
            { path: ':id', component: DetallePrescripcionComponent, },

            { path: 'misConsultas', component: MisConsultasComponent, },
            { path: ':id', component: DetalleConsultaComponent, },
        ]
    },
    { path: '', component: LoginComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
