import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardService } from '../../servicios/card.service';
import { switchMap } from 'rxjs/operators';
import { Card } from '../../modelos/card';

@Component({
    selector: 'pdp-titulo',
    templateUrl: './portal-titulo.component.html'
})
export class PDPTituloComponent implements OnInit {

    searchTerm = new BehaviorSubject<string>('');

    public searchInput = false;
    public width: number;
    card$: Observable<Card>;
    cards$: Observable<Card[]>;

    constructor(
        private el: ElementRef,
        private cardService: CardService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() {
        this.cards$ = this.cardService.getCards();
        // Mostrar detalle de prestacion
        this.card$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.cardService.getCard(params.get('id')))
        );
    }

    showSearch() {
        this.searchInput = !this.searchInput;
    }

    isResponsive() {
        this.width = this.el.nativeElement.clientWidth;
        return this.width >= 980;
    }

}
