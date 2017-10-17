import { Injectable } from 'angular2/core';
import {URLSearchParams} from 'angular2/http';

Injectable()

export class NewsService
{
    news:Array<any>;
    constructor()
    {
        this.news = [
            { trainNo: '986', arrive: '22:37', info: '', estimate: '' },
            { trainNo: '986', arrive: '05:53', info: 'crash', estimate: '05:55' }
        ]
    }
    getNews()
    {
        return this.news;
    }
}