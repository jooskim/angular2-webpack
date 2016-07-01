/**
 * Created by jooskim on 6/30/16.
 */
import {Component} from 'angular2/core';

@Component({
    selector: 'app',
    template: `
        <h2>Hello</h2>
    `
})

export class AppComponent {
    constructor() {
        require('assets/app.scss');
        console.log('yo');
    }
}