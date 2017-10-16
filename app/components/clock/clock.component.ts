import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'clock',
    templateUrl: '../app/components/clock/clock.template.html'
})
export class Clock {
    clock = Observable
        .interval(1000)
        .map(()=>new Date())
}
