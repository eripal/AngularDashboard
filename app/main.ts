import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser'
import {Clock} from './components/clock/clock.component'
import {Train} from './components/train/train.component'
import {News} from './components/newsFeed/newsFeed.component'


@Component
({
    selector: 'my-app',
    directives: [Clock, Train, News],
    template: `
            <clock></clock>
            <train></train>
            <news></news>
            `
})
export class Main{
    componentName
}
bootstrap(Main)