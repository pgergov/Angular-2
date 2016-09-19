import { Component } from '@angular/core';
import { IfElse} from '../../directives/if-else.directive/if-else.directive';


@Component({
    selector: 'application',
    template: `
        <div *ifElse="true; let msg = myMsg;">{{ greetingsMessage }} {{ msg }}</div>
    `,
})
export class App{
    greetingsMessage:string;

    constructor() {
        this.greetingsMessage = "Hello Angular2!";
    }
}
