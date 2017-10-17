import { Injectable } from 'angular2/core';
import {URLSearchParams} from 'angular2/http';

Injectable()

export class TrainService
{
    trains:Array<any>;
    constructor()
    {
        this.trains = [
            { trainNo: '986', arrive: '22:37', info: '', estimate: '' },
            { trainNo: '986', arrive: '05:53', info: 'crash', estimate: '05:55' }
        ]
    }
    getTrains()
    {
        return this.trains;
    }
}