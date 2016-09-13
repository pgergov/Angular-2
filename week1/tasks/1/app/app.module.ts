import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './components/app.component/app.component';
import { WordGame } from './components/word-game.component/word-game.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ App, WordGame ],
    bootstrap: [ App, WordGame ]
}) export class AppModule {

}