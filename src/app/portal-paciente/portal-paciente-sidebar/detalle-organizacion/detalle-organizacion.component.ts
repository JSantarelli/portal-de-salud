import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrestacionService } from '../../../servicios/prestacion.service';
import { Prestacion } from '../../../modelos/prestacion';
import { Turno } from '../../../modelos/turno';
import { Organizacion } from 'src/app/modelos/organizacion';

@Component({
    selector: 'detalle-organizacion',
    templateUrl: './detalle-organizacion.component.html',
})
export class DetalleOrganizacionComponent implements OnInit {

    public selectedId;
    public organizaciones$;
    public prestaciones$;
    organizacion$: Observable<Organizacion>;

    registros = [
        {
            id: 123,
            evolucion: "Tensión arterial dentro de los valores de referencia. T.A baja: 96, alta: 125 mmHg.",
            valor: "96/125 mmHg",
            esDiagnosticoPrincipal: true,
            semanticTag: "trastorno",
            icono: "trastorno",
            color: "danger",
            term: "Hipertensión Arterial",
            fecha: "27/01/2021",
            estado: true,
        },
        {
            id: 765,
            evolucion: "El paciente se presenta con dolor agudo en la zona del abdomen",
            valor: "37,5º",
            esDiagnosticoPrincipal: true,
            semanticTag: "trastorno",
            icono: "trastorno",
            color: "danger",
            term: "lesión traumática del abdomen",
            fecha: "27/01/2021",
            estado: true,
        },
        {
            id: 356,
            evolucion: "El paciente presenta signos y síntomas frecuentes de la alergia a la penicilina: urticaria, sarpullido y picazón",
            valor: "125 mm",
            esDiagnosticoPrincipal: true,
            semanticTag: "hallazgo",
            icono: "lupa-ojo",
            color: "warning",
            term: "Alergia A Penicilina",
            fecha: "11/09/2020",
            estado: false,
        },
        {
            id: 986,
            evolucion: "Tensión arterial dentro de los valores de referencia",
            valor: "96/125 mmHg",
            esDiagnosticoPrincipal: true,
            semanticTag: "elemento de registro",
            icono: "documento-lapiz",
            color: "success",
            term: "documento adjunto",
            fecha: "27/01/2021",
            estado: false,
        },
        {
            id: 743,
            evolucion: "Temperatura de 37,5. T.A baja: 96, alta: 125 mmHg. Saturación: 96%. Peso: 75 Kg. Talla: 185 cms.",
            valor: "96 kgs.",
            esDiagnosticoPrincipal: true,
            semanticTag: "procedimiento",
            icono: "termometro",
            color: "info",
            term: "Registro de signos vitales",
            fecha: "27/01/2021",
            estado: true,
        },
        {
            id: 845,
            evolucion: "paciente refiere disnea que se intensifica con el esfuerzo. Presencia de sibilancias autoescuchadas durante la noche. Tos, No presenta historia de alergias. Antecedentes familiar de Asma. Durante los ultimos dias presenta fiebre que no cede 38º. Mucosidad serosa",
            valor: "38º",
            esDiagnosticoPrincipal: true,
            semanticTag: "hallazgo",
            icono: "lupa-ojo",
            color: "warning",
            term: "Antecedente familiar de asma",
            fecha: "17/11/2021",
            estado: false,
        },
        {
            id: 175,
            evolucion: "El paciente se encuentra apto para desarrollar actividad física.",
            valor: "96 kgs.",
            esDiagnosticoPrincipal: true,
            semanticTag: "elemento de registro",
            icono: "documento-lapiz",
            color: "success",
            term: "certificado médico",
            fecha: "27/01/2021",
            estado: false,
        },
    ]

    profesionales = [
        {
            id: 3121,
            documento: '31359294',
            activo: false,
            nombre: 'Walter Juan',
            apellido: 'Molini',
            contacto: [{
                tipo: 'Mail',
                valor: 'medico@mail.org.ar',
                ranking: 237, // Specify preferred order of use (1 = highest) // Podemos usar el rank para guardar un historico de puntos de contacto (le restamos valor si no es actual???)
                ultimaActualizacion: 'Miércoles 11/03/2021 - 11:32 hs.',
                activo: true,
            }],
            sexo: 'masculino',
            genero: 'masculino', // identidad autopercibida
            fechaNacimiento: '23/11/1947', // Fecha Nacimiento
            fechaFallecimiento: 'Date',
            direccion: [{
                valor: 'texto',
                codigoPostal: 'texto',
                ubicacion: 'texto',
                ranking: 4321,
                geoReferencia: {
                    type: [4321], // [<longitude>, <latitude>]
                    index: '2d' // create the geospatial index
                },
                ultimaActualizacion: 'Date',
                activo: false
            }],
            estadoCivil: 'casado',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6kC2G5mah771aAk-RG2zh10844QBCW9NHkZhE8zofvVkB_wAA&s',
            rol: 'Jefe de terapia intermedia de adultos', // Ejemplo Jefe de Terapia intensiva
            especialidad: [{ // El listado de sus especialidades
                id: '23tgwda34fr',
                nombre: 'Consulta general de medicina'
            }],
            matriculas: [{
                numero: 4321,
                descripcion: 'Licenciado en medicina',
                fechaInicio: '17/09/2020',
                fechaVencimiento: '17/09/2030',
                activo: false
            }],
            profesionalMatriculado: true,
        },
        {
            id: 5653,
            documento: '2454543',
            activo: false,
            nombre: 'Mónica Patricia',
            apellido: 'Cifuentes',
            contacto: [{
                tipo: 'Mail',
                valor: 'medico@mail.org.ar',
                ranking: 237, // Specify preferred order of use (1 = highest) // Podemos usar el rank para guardar un historico de puntos de contacto (le restamos valor si no es actual???)
                ultimaActualizacion: 'Miércoles 11/03/2021 - 11:32 hs.',
                activo: true,
            }],
            sexo: 'femenino',
            genero: 'femenino', // identidad autopercibida
            fechaNacimiento: '05/09/1974', // Fecha Nacimiento
            fechaFallecimiento: 'Date',
            direccion: [{
                valor: 'texto',
                codigoPostal: 'texto',
                ubicacion: 'texto',
                ranking: 4321,
                geoReferencia: {
                    type: [4321], // [<longitude>, <latitude>]
                    index: '2d' // create the geospatial index
                },
                ultimaActualizacion: 'Date',
                activo: false
            }],
            estadoCivil: 'soltera',
            foto: 'https://http2.mlstatic.com/fotos-4x4-3x3-5x5-varios-embajada-pasaporte-6-fotos-carnet-D_NQ_NP_990542-MLA31020537999_062019-O.webp',
            rol: 'Jefe de pediatría', // Ejemplo Jefe de Terapia intensiva
            especialidad: [{ // El listado de sus especialidades
                id: '23tgwda34fr',
                nombre: 'Consulta pediátrica'
            }],
            matriculas: [{
                numero: 4321,
                descripcion: 'Licenciado en medicina',
                fechaInicio: '17/09/2019',
                fechaVencimiento: '17/09/2029',
                activo: false
            }],
            profesionalMatriculado: true,
        },
    ]


    constructor(
        private prestacionService: PrestacionService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.organizaciones$ = this.prestacionService.getOrganizaciones();

        //mostrar detalle de organizacion
        this.organizacion$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.prestacionService.getOrganizacion(params.get('id')))
        );
    }


}
