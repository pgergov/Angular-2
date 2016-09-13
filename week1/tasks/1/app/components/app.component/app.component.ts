import { Component } from '@angular/core';

@Component({
    selector: "application",
    template: "<div>{{ greetingsMessage }}</div>"
})
export class App{
    greetingsMessage:string;

    constructor() {
        this.greetingsMessage = "Hello Angular2!";
    }
}