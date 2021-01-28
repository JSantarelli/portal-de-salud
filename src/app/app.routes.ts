import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalPacienteComponent } from './portal-paciente/portal-paciente.component';
import { MisVacunasComponent } from './portal-paciente/portal-paciente-main/mis-vacunas/mis-vacunas.component';
import { MisLaboratoriosComponent } from './portal-paciente/portal-paciente-main/mis-laboratorios/mis-laboratorios.component';
import { MisTurnosComponent } from './portal-paciente/portal-paciente-main/mis-turnos/mis-turnos.component';
import { MisFamiliaresComponent } from './portal-paciente/portal-paciente-main/mis-familiares/mis-familiares.component';
import { MiHudsComponent } from './portal-paciente/portal-paciente-main/mi-huds/mi-huds.component';

import { DetalleVacunaComponent } from './portal-paciente/portal-paciente-sidebar/detalle-vacuna/detalle-vacuna.component';
import { DetalleLaboratorioComponent } from './portal-paciente/portal-paciente-sidebar/detalle-laboratorio/detalle-laboratorio.component';
import { DetalleTurnoComponent } from './portal-paciente/portal-paciente-sidebar/detalle-turno/detalle-turno.component';
import { DetallePrestacionComponent } from './portal-paciente/portal-paciente-sidebar/detalle-huds/detalle-huds.component';
import { DetalleFamiliarComponent } from './portal-paciente/portal-paciente-sidebar/detalle-familiar/detalle-familiar.component';

const appRoutes: Routes = [
    {
        path: 'portal-paciente', component: PortalPacienteComponent,
        children: [
            {
                path: 'miHuds', component: MiHudsComponent, outlet: 'listado', children: [
                    { path: ':id', component: DetallePrestacionComponent },
                ]
            },

            { path: 'misVacunas', component: MisVacunasComponent, outlet: 'listado' },
            //{ path: ':id', component: DetalleVacunaComponent },

            { path: 'misLaboratorios', component: MisLaboratoriosComponent, outlet: 'listado' },
            //{ path: ':id', component: DetalleLaboratorioComponent },

            { path: 'misTurnos', component: MisTurnosComponent, outlet: 'listado' },
            //{ path: ':id', component: DetalleTurnoComponent },

            { path: 'misFamiliares', component: MisFamiliaresComponent, outlet: 'listado' },
            //{ path: ':id', component: DetalleFamiliarComponent },
        ]
    },
    { path: '**', redirectTo: 'portal-paciente' }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
