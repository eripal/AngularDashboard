import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Observable} from 'rxjs/Rx';
import {TrainService } from './train.service';

@Component({
    selector: 'train',
    providers: [TrainService],
    templateUrl: '../app/components/train/train.template.html'
})
export class Train {
    componentName: 'Train';

    constructor(private _trainService: TrainService)
    {
        this.trains = _trainService.getTrains();
    }
}
