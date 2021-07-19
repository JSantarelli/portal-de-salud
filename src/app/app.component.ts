import { Component } from '@angular/core';
import { Plex } from '@andes/plex';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'portal del paciente';

    constructor(
        private plex: Plex,
    ) {
    }

    ngOnInit() {
        this.plex.navbarVisible = false;
    }
}

