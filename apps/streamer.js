streamers = "";

console.log("init: streamer.js")
if(!apicalls) return console.log("intercepted: streamer.js");

var request = require("request");
var fs = require("fs");



var options = { method: 'GET',
    url: `https://api.twitch.tv/helix/streams?user_login=pietsmiet&user_login=dieseraj&user_login=Augsii&user_login=bastighg&user_login=bonjwa&user_login=briiaan&user_login=aceow_&user_login=Alphastein&user_login=briiaan&user_login=cengobengo&user_login=clym&user_login=cornel&user_login=dangermv&user_login=daannyy&user_login=danutopia99&user_login=danutopia99&user_login=mooo_&user_login=orangemorange&user_login=dienessy&user_login=dompra&user_login=earliboy&user_login=einfachjessie&user_login=eiterbeulelive&user_login=eleqs&user_login=exidus&user_login=fazon&user_login=dnertv&user_login=fireflo&user_login=fixxyt&user_login=flojamfm&user_login=fynix&user_login=gommehd&user_login=hakan_d_hanyou&user_login=hannimoonyt&user_login=discohengo&user_login=impimpimp&user_login=izzmaro&user_login=lemelodyyy&user_login=letshugotv&user_login=letsphillive&user_login=lexr4y&user_login=mizzuri_&user_login=mycoolnameyt&user_login=socialhase&user_login=nichtnilo&user_login=nieraus&user_login=nikeles&user_login=norisk&user_login=notcolln&user_login=papanota&user_login=patatl&user_login=paulterra94&user_login=pezcraft&user_login=plasm_&user_login=pumithecat&user_login=bonjwaredpanda&user_login=revedyt&user_login=rotpilz&user_login=sasukey&user_login=seltix&user_login=sereaxstreamt&user_login=spacemitx&user_login=sparkofphoenixtv&user_login=skybreaker99&user_login=thefabohd&user_login=stegi&user_login=takaishii&user_login=trilluxe&user_login=dervaspel&user_login=vossipanda&user_login=zanderlp&user_login=zeosite&user_login=zinushd&user_login=zombiezockttv&user_login=baastizockt&user_login=arfore&user_login=askationyt`

    ,
    headers:{ 	'Client-ID': '3pg3zv5se9mgdur14voydceb2hky4m' }
};

function getStreamer() {
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		fs.writeFile('./myfile.csv', body, { flag: 'w' }, function(err) {
			if (err){
				return console.error(err);
				clearInterval(requestLoop);
			}
			fs.readFile('./myfile.csv', 'utf-8', function (err, data) {
				if (err){
					return console.error(err);
					clearInterval(requestLoop);
				}
				console.log("success: streamers returned");
				// console.log(JSON.parse(data));
				streamers = JSON.parse(data);
			});
		});
	});
}

getStreamer();
var requestLoop = setInterval(function(){
	getStreamer();
}, 180000);





// var optionsYT = { method: 'GET',

    // url: 'https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=hHW1oY26kxQ&key=AIzaSyBm0grkDMecUGUmpSdNMY4WFI2yUXBQQLM'
    // url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UU4R8DWoMoI7CAwX8_LjQHig&key=AIzaSyBm0grkDMecUGUmpSdNMY4WFI2yUXBQQLM'
    // url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU4R8DWoMoI7CAwX8_LjQHig&maxResults=5&key=AIzaSyBm0grkDMecUGUmpSdNMY4WFI2yUXBQQLM'




    // url: 'https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=hHW1oY26kxQ&key=AIzaSyBm0grkDMecUGUmpSdNMY4WFI2yUXBQQLM'
    // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCL68ZdM_aGd2TgMviT5-sXg,UCoYWXymL7cz7rRpQxmDQySQ&eventType=live&type=video&key=AIzaSyBm0grkDMecUGUmpSdNMY4WFI2yUXBQQLM'





    // qs: { user: 'pietsmiettv', offset: '0', limit: '2' },
    // headers:{ 	'Client-ID': '3pg3zv5se9mgdur14voydceb2hky4m' }
// };

//Zuschauer = Local version
//watching =Production version


var matchString = "watching";
var cheerio = require("cheerio");
//
// var result = twstreamers.streamers.filter(x => x.name === "Ungespielt");
// console.log(result);

ytstreamers = {
  "streamers":[
    {"name":"Ungespielt", "channelID":"UCcn4UOBvB0W2HjCcLFLuu2w", "status":"offline", "viewers":"0"},
    {"name":"Abgegrieft", "channelID":"UCLTALEezHg3uzN3bdfqrhfQ", "status":"offline", "viewers":"0"},
    {"name":"Alphastein", "channelID":"UCiTydOPjFaDTkdygnFxAdaQ", "status":"offline", "viewers":"0"},
    {"name":"Balui", "channelID":"UCZQYQeUZ9TJJxUgXdbxv9JQ", "status":"offline", "viewers":"0"},
    {"name":"Caravas", "channelID":"UC4UDgtqBSQZ4yk7H_sEiFWA", "status":"offline", "viewers":"0"},
    {"name":"CuzImSara", "channelID":"UCDbyF9KKr9iuRRMswaJHnMw", "status":"offline", "viewers":"0"},
    {"name":"Dadosch", "channelID":"UCcJbf09hi5ESUKs45vfUYcw", "status":"offline", "viewers":"0"},
    {"name":"Dako", "channelID":"UCiphABouy0cuK6GOF9wvYqQ", "status":"offline", "viewers":"0"},
    {"name":"DiddiHD", "channelID":"UC_38KkE0w2pwMc74n1DNzag", "status":"offline", "viewers":"0"},
    {"name":"DJ JoeMen", "channelID":"UC1Bsw5AhSStMii_wHA09kEQ", "status":"offline", "viewers":"0"},
    {"name":"elpa", "channelID":"UCxiydj0IkvR0MHMNgMESWbA", "status":"offline", "viewers":"0"},
    {"name":"Firegoden", "channelID":"UCohZCZUm6uP6OdDQuRsMOIw", "status":"offline", "viewers":"0"},
    {"name":"InzuchtTV", "channelID":"UCMLlLKT0DcynQteDWfUNFXQ", "status":"offline", "viewers":"0"},
    {"name":"Just Nerov", "channelID":"UCiiGHI0DtajhSqQtf0478hA", "status":"offline", "viewers":"0"},
    {"name":"Kati Karenina", "channelID":"UCL7oLwxfYw_X6NWBhF2m57A", "status":"offline", "viewers":"0"},
    {"name":"LvckyLuke", "channelID":"UCEC9r4znARi_De6MaC3yaTw", "status":"offline", "viewers":"0"},
    {"name":"Mayd", "channelID":"UCHKc2NhGqamkTWINnUvQXGg", "status":"offline", "viewers":"0"},
    {"name":"Meistergamer", "channelID":"UCtY_-AjREq_QNEReTslmSDg", "status":"offline", "viewers":"0"},
    {"name":"Minimichecker", "channelID":"UC8fdIqgzju3-tHVtZ-6wFRA", "status":"offline", "viewers":"0"},
    {"name":"MultiGames", "channelID":"UCdTvgitpUNyZIaimMo25MbQ", "status":"offline", "viewers":"0"},
    {"name":"Perian", "channelID":"UCGtdlhalfikhSQgEJYcTRlQ", "status":"offline", "viewers":"0"},
    {"name":"Propa", "channelID":"UCkT2ozRegFriMovnpYb2Z6Q", "status":"offline", "viewers":"0"},
    {"name":"Qjuzel", "channelID":"UCfagsfM_Uk44LzA5egLrmTg", "status":"offline", "viewers":"0"},
    {"name":"Rippeax", "channelID":"UCiTydOPjFaDTkdygnFxAdaQ", "status":"offline", "viewers":"0"},
    {"name":"Scurrows", "channelID":"UCL68ZdM_aGd2TgMviT5-sXg", "status":"offline", "viewers":"0"},
    {"name":"ZumiHD", "channelID":"UC-ZrweK1lD-zXYH-yqHWZuw", "status":"offline", "viewers":"0"}
  ]
}


function getYTStreamer(streamer) {
  var id = streamer.channelID;
  var url = "https://www.youtube.com/channel/" + id;

  request(url, function (error, response, html) {
		if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var zuschauer = $('.yt-lockup-meta-info').eq(0).text();
      console.log(zuschauer);
      console.log(zuschauer);
      console.log(zuschauer);
      console.log(zuschauer);
      if (zuschauer.includes(matchString)) {
        var viewers = parseInt(zuschauer.split(',').join(""));// . = local version // , = prod version
        streamer.viewers = viewers;
        streamer.status = "online";
      }else{
        streamer.viewers = "0";
        streamer.status = "offline";
      }

      console.log(streamer.name + " is " + streamer.status + ". " + streamer.viewers + " Zuschauer.");
    }
	});
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getYTStreamers() {
  console.log('Launching YT Streamer-Loop');
  streamer = (ytstreamers.streamers)
  // Sleep in loop
  for (let i = 0; i < streamer.length; i++) {
      await sleep(10000);
      getYTStreamer(streamer[i]);
      await sleep(10000);
    }
}


getYTStreamers();
var requestYTLoop = setInterval(function(){
	getYTStreamers();
}, 300000);
