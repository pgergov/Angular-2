import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[ifElse]'
})
export class IfElse {

    constructor(private _template: TemplateRef<any>, private _vcr: ViewContainerRef){};

    @Input() set ifElse(value: boolean) {
        if (value) {
            var msg = "I am true";
        } else {
            var msg = "I am false";
        }
        this._vcr.createEmbeddedView(this._template, {myMsg: msg});
    };
};