import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {Clock} from './components/clock/clock.component'
import {Train} from './components/train/train.component'


@Component
({
    selector: 'my-app',
    directives: [Clock, Train],
    template: `
            <clock></clock>
            <train></train>
            `
})
export class Main{
    componentName
}
bootstrap(Main)