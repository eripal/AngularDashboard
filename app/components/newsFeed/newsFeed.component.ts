import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Observable} from 'rxjs/Rx';
import {NewsService } from './newsFeed.service';

@Component({
    selector: 'news',
    providers: [NewsService],
    templateUrl: '../app/components/newsFeed/newsFeed.template.html'
})
export class News {
    componentName: 'News';

    constructor(private _newsService: NewsService)
    {
        this.news = _newsService.getNews();
    }
}
