import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../modelos/card';

@Pipe({
    name: 'hudsFilter'
})
export class PrestacionPipe implements PipeTransform {

    transform(cards: Card[], searchTerm: string): Card[] {
        if (!cards || !searchTerm) {
            return cards;
        }

        return cards.filter(cards => cards.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

    }
}
