//import { Pipe, PipeTransform } from '@angular/core';
//import { IPaciente } from '../modelos/turnos/IPaciente';


//@Pipe({
//    name: 'pacientesFilter'
//})
//export class PacientePipe implements PipeTransform {

//    transform(paciente: IPaciente[], searchTerm: string): any[] {
//        if (!paciente || !searchTerm) {
//            return paciente;
//        }

//        return paciente.filter(paciente => paciente.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
//    }
//}