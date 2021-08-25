import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CardService } from '../../servicios/card.service';
import { switchMap } from 'rxjs/operators';
import { Card } from '../../modelos/card';

// rxjs
import { Observable } from 'rxjs';

@Component({
    selector: 'pdp-menu',
    templateUrl: './portal-menu.component.html'
})

export class PDPMenuComponent implements OnInit {
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
    card$: Observable<Card>;
    cards$: Observable<Card[]>;

    resizable = true;
    expanded: Boolean = false;

    constructor(
        private el: ElementRef,
        private cardService: CardService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.cards$ = this.cardService.getCards();
        // Mostrar detalle de prestacion
        this.card$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.cardService.getCard(params.get('id')))
        );
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        if (this.width < 780) {
            this.valorResultante = 12;
            return true;
        } else {
            this.valorResultante = 11;
            return this.width >= 980;
        }
    }

    goTo(path) {
        this.router.navigate([path]);
    }

    // Resize
    expandir() {
        this.expanded = !this.expanded;
    }
}
