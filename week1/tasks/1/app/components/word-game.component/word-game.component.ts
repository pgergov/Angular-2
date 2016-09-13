import { Component } from '@angular/core';
import { DataSource } from '../../dataSource';


@Component({
    selector: 'word-game',
    templateUrl: 'app/components/word-game.component/word-game.component.html',
    styleUrls: ['app/components/word-game.component/word-game.component.css']
})
export class WordGame{
    data: DataSource;
    randomWord: string;
    randomNumber: number;
    uniqueWordLetters: string[];
    wordBank: string[];

    constructor(){
        this.data = new DataSource();
        this.randomWord = this.generateRandomWord();
        this.uniqueWordLetters = this.generateUniqueWordLettersArray(this.randomWord);
        this.randomNumber = this.generateRandomNumber();
        // Present the word with the hidden N random letters represented as `_`
        this.formatWord();
        this.wordBank = this.generateWordBank();
    };

    pickLetter() {
        alert("test");
    }

    protected generateRandomWord(): string{
        var wordsLength = this.data.words.length;
        var randomWordsIndex = this.generateRandomNumberInInterval(0, wordsLength - 1);

        // Lowercase the word for simplicity
        return this.data.words[randomWordsIndex].toLowerCase();
    };

    protected generateRandomNumber(): number{
        return this.generateRandomNumberInInterval(0, this.uniqueWordLetters.length);
    };

    private generateRandomNumberInInterval(min:number, max:number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    private generateUniqueWordLettersArray(str:string): string[] {
        var result = [];

        for (let i = 0; i < str.length; i++) {
            var element = str[i];

            // Check if the element is letter from the alphabet
            if (!element.match(/[a-z]/)) {
                continue;
            };

            if (result.indexOf(element) < 0) {
                result.push(element);
            };

        };

        return result;
    };

    private generateRandomLettersArray(arr:string[]): string[] {
        var result = [];
        // Clone the letters array and return reference to the new array
        var deepClonedArr = arr.slice();
        var arrLength = deepClonedArr.length;

        for (let i = 1; i <= this.randomNumber; i++) {
            var randomIndex = this.generateRandomNumberInInterval(0, arrLength - 1)
            // Pop letter with the random index
            var letterToBeHidden = deepClonedArr.splice(randomIndex, 1)[0];
            result.push(letterToBeHidden);
            // Decrease alphabet's length because of the pop
            arrLength--;
        }

        return result;
    };

    private formatWord() {
        var lettersToBeHiddenArray = this.generateRandomLettersArray(this.uniqueWordLetters);

        var result = '';
        for (let i = 0; i < this.randomWord.length; i++) {
            var element = this.randomWord[i];

            if (lettersToBeHiddenArray.indexOf(element.toLowerCase()) > -1) {
                result += '_';
            } else {
                result += element;
            }
        }

        this.randomWord = result;
    };

    private generateWordBank() {
        if (this.uniqueWordLetters.length + this.randomNumber >= 26) {
            return this.data.alphabet;
        }

        var availableLetters = [];

        for (let i = 0; i < this.data.alphabet.length; i++) {
            var letter = this.data.alphabet[i];

            if (this.uniqueWordLetters.indexOf(letter) < 0) {
                availableLetters.push(letter);
            }
        }

        var extraLetters = this.generateRandomLettersArray(availableLetters);

        return this.uniqueWordLetters.concat(extraLetters);
    };
}
