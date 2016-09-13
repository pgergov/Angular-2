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
        this.randomNumber = this.generateRandomNumber();
    }
    ;
    WordGame.prototype.generateRandomWord = function () {
        return this.data.words[0];
    };
    ;
    WordGame.prototype.generateRandomNumber = function () {
        return 42;
    };
    ;
    WordGame = __decorate([
        core_1.Component({
            selector: 'word-game',
            template: '<div>Word: {{ randomWord }}, Number: {{ randomNumber }}</div>'
        }), 
        __metadata('design:paramtypes', [])
    ], WordGame);
    return WordGame;
}());
exports.WordGame = WordGame;
//# sourceMappingURL=wordGame.component.js.map