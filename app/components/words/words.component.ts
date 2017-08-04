import { Component } from '@angular/core';
import * as ApplicationSettings from 'application-settings';
import { Word } from '../../interfaces/word.interface';

@Component({
    selector: 'dec-words',
    templateUrl: './components/words/words.component.xml'
})

export class WordsComponent {
    public words: Array<Word>;

    constructor() {
        //this.words = JSON.parse(ApplicationSettings.getString('words', '[]'));
        this.words = [
            {
                id: 4,
                phrase: "I",
                translate: 'Я',
                date: "04.08.2017"
            },
            {
                id: 6,
                phrase: "I df",
                translate: 'Я',
                date: "04.08.2017"
            }
        ];
        console.log(JSON.stringify(this.words));
    }

}