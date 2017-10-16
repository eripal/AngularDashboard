import { Injectable } from 'angular2/core';

Injectable()

export class TrainService
{
    trains:Array<any>;
    constructor()
    {
        // var message = '<REQUEST>' +
        // '<LOGIN authenticationkey="fe898a06841443beb05ea563a1ff2b8c" />' +
        // '<QUERY objecttype="TrainAnnouncement" orderby="AdvertisedTimeAtLocation">' +
        // '<FILTER>' +
        // '<AND>' +
        // '<EQ name="ActivityType" value="Avgang" />' +
        // '<EQ name="LocationSignature" value="Nkv" />' +
        // '<EQ name="ToLocation" value="Cst" />' +
        // '<OR>' +
        // '<AND>' +
        // '<GT name="AdvertisedTimeAtLocation" value="$dateadd(-00:15:00)" />' +
        // '<LT name="AdvertisedTimeAtLocation" value="$dateadd(15:00:00)" />' +
        // '</AND>' +
        // '<AND>' +
        //     '<LT name="AdvertisedTimeAtLocation" value="$dateadd(00:30:00)" />' +
        //     '<GT name="EstimatedTimeAtLocation" value="$dateadd(-00:15:00)" />' +
        // '</AND>' +
        // '</OR>' +
        // '</AND>' +
        // '</FILTER>' +
        // '<INCLUDE>AdvertisedTrainIdent</INCLUDE>' +
        // '<INCLUDE>AdvertisedTimeAtLocation</INCLUDE>' +
        // '<INCLUDE>EstimatedTimeAtLocation</INCLUDE>' +
        // '<INCLUDE>EstimatedTimeIsPreliminary</INCLUDE>' +
        // '<INCLUDE>ToLocation</INCLUDE>' +
        // '<INCLUDE>Canceled</INCLUDE>' +
        // '</QUERY>' +
        // '</REQUEST>';

        // var curl = new curl();
        // curl.setopt('URL', 'http://api.trafikinfo.trafikverket.se/v1/data.xml');
        // curl.setopt('CURLOPT_MUTE', 1);
        // curl.setopt('CURLOPT_SSL_VERIFYHOST', 0);
        // curl.setopt('CURLOPT_SSL_VERIFYPEER', 0);
        // curl.setopt('CURLOPT_POST', 1);
        // curl.setopt('CURLOPT_HEADER', false);
        // curl.setopt('CURLOPT_RETURNTRANSFER', 1);
        // curl.setopt('CURLOPT_POSTFIELDS', message);
        
        // var p = console.log;
        // // on 'data' must be returns chunk.length, or means interrupt the transfer
        // curl.on('data', function(chunk) {
        //     p("receive " + chunk.length);
        //     return chunk.length;
        // });

        // curl.on('header', function(chunk) {
        //     p("receive header " + chunk.length);
        //     return chunk.length;
        // })

        // // curl.close() should be called in event 'error' and 'end' if the curl won't use any more.
        // // or the resource will not release until V8 garbage mark sweep.
        // curl.on('error', function(e) {
        //     p("error: " + e.message);
        //     curl.close();
        // });


        // curl.on('end', function() {
        //     p('code: ' + curl.getinfo('RESPONSE_CODE'));
        //     p('done.');
        //     curl.close();
        // });

        // curl.perform();

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