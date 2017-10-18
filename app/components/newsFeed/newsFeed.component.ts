import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'news',
    templateUrl: '../app/components/newsFeed/newsFeed.template.html'
})
export class News {
    constructor() { }
}

// $rss = new DOMDocument();
// $rss->load('http://feeds.idg.se/idg/vzzs'); // Specify the address to the feed
// $feed = array();
//     foreach ($rss->getElementsByTagName('item') as $node) {
//         $item = array (
//         'title' => $node->getElementsByTagName('title')->item(0)->nodeValue,
//         'desc' => $node->getElementsByTagName('description')->item(0)->nodeValue,
//         'date' => $node->getElementsByTagName('pubDate')->item(0)->nodeValue,
//         );
//     array_push($feed, $item);
//     }

// $limit = 1; // Number of posts to be displayed
// for($x=0;$x<$limit;$x++) {
//     $title = str_replace(' & ', ' &amp; ', $feed[$x]['title']);
//     $description = $feed[$x]['desc'];
//     $date = date('j F', strtotime($feed[$x]['date']));
//     echo '<h2 class="smaller">'.$title.'</h2>';
//     echo '<p class="date">'.$date.'</p>';
//     echo '<p>'.strip_tags($description, '<p><b>');
// }