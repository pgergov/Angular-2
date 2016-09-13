import { Component } from '@angular/core';
import { DataSource } from '../../dataSource';


@Component({
    selector: 'word-game',
    template: '<div>Word: {{ randomWord }}, Number: {{ randomNumber }}</div>'
})
export class WordGame{
    data: DataSource;
    randomWord: string;
    randomNumber: number;

    constructor(){
        this.data = new DataSource();
        this.randomWord = this.generateRandomWord();
        this.randomNumber = this.generateRandomNumber();
    };

    generateRandomWord(){
        return this.data.words[0];
    };

    generateRandomNumber(){
        return 42;
    };
}