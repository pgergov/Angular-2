"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dataSource_1 = require('../../dataSource');
var WordGame = (function () {
    function WordGame() {
        this.data = new dataSource_1.DataSource();
        this.randomWord = this.generateRandomWord();
        this.uniqueWordLetters = this.generateUniqueWordLettersArray(this.randomWord);
        this.randomNumber = this.generateRandomNumber();
        // Present the word with the hidden N random letters represented as `_`
        this.formatWord();
        this.wordBank = this.generateWordBank();
    }
    ;
    WordGame.prototype.pickLetter = function () {
        alert("test");
    };
    WordGame.prototype.generateRandomWord = function () {
        var wordsLength = this.data.words.length;
        var randomWordsIndex = this.generateRandomNumberInInterval(0, wordsLength - 1);
        // Lowercase the word for simplicity
        return this.data.words[randomWordsIndex].toLowerCase();
    };
    ;
    WordGame.prototype.generateRandomNumber = function () {
        return this.generateRandomNumberInInterval(0, this.uniqueWordLetters.length);
    };
    ;
    WordGame.prototype.generateRandomNumberInInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    ;
    WordGame.prototype.generateUniqueWordLettersArray = function (str) {
        var result = [];
        for (var i = 0; i < str.length; i++) {
            var element = str[i];
            // Check if the element is letter from the alphabet
            if (!element.match(/[a-z]/)) {
                continue;
            }
            ;
            if (result.indexOf(element) < 0) {
                result.push(element);
            }
            ;
        }
        ;
        return result;
    };
    ;
    WordGame.prototype.generateRandomLettersArray = function (arr) {
        var result = [];
        // Clone the letters array and return reference to the new array
        var deepClonedArr = arr.slice();
        var arrLength = deepClonedArr.length;
        for (var i = 1; i <= this.randomNumber; i++) {
            var randomIndex = this.generateRandomNumberInInterval(0, arrLength - 1);
            // Pop letter with the random index
            var letterToBeHidden = deepClonedArr.splice(randomIndex, 1)[0];
            result.push(letterToBeHidden);
            // Decrease alphabet's length because of the pop
            arrLength--;
        }
        return result;
    };
    ;
    WordGame.prototype.formatWord = function () {
        var lettersToBeHiddenArray = this.generateRandomLettersArray(this.uniqueWordLetters);
        var result = '';
        for (var i = 0; i < this.randomWord.length; i++) {
            var element = this.randomWord[i];
            if (lettersToBeHiddenArray.indexOf(element.toLowerCase()) > -1) {
                result += '_';
            }
            else {
                result += element;
            }
        }
        this.randomWord = result;
    };
    ;
    WordGame.prototype.generateWordBank = function () {
        if (this.uniqueWordLetters.length + this.randomNumber >= 26) {
            return this.data.alphabet;
        }
        var availableLetters = [];
        for (var i = 0; i < this.data.alphabet.length; i++) {
            var letter = this.data.alphabet[i];
            if (this.uniqueWordLetters.indexOf(letter) < 0) {
                availableLetters.push(letter);
            }
        }
        var extraLetters = this.generateRandomLettersArray(availableLetters);
        return this.uniqueWordLetters.concat(extraLetters);
    };
    ;
    WordGame = __decorate([
        core_1.Component({
            selector: 'word-game',
            templateUrl: 'app/components/wordGame.component/wordGame.component.html',
            styleUrls: ['app/components/wordGame.component/wordGame.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], WordGame);
    return WordGame;
}());
exports.WordGame = WordGame;
//# sourceMappingURL=wordGame.component.js.map