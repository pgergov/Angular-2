import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component/app.component';
import { IfElse} from './directives/if-else.directive/if-else.directive';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, IfElse ],
    bootstrap: [ App ]
}) export class AppModule {

}