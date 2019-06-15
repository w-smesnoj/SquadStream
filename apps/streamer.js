streamers = "";

console.log("init: streamer.js")
if(!apicalls) return console.log("intercepted: streamer.js");

var request = require("request");
var fs = require("fs");



var options = { method: 'GET',
    url: `https://api.twitch.tv/helix/streams?user_login=pietsmiet&user_login=izzi&user_login=stegi&user_login=bastighg&user_login=seltixonair&user_login=herrbergmann&user_login=seltixonairx&user_login=venicraftx&user_login=zeosite&user_login=seltixonairx&user_login=thekedoszone&user_login=mcbiirdy&user_login=thefabohd&user_login=bonjwa&user_login=moondye7&user_login=fazon&user_login=earliboy&user_login=cornel&user_login=zinushd&user_login=sparkofphoenixtv&user_login=clym&user_login=halbzwilling&user_login=nichtnilo&user_login=dienessy&user_login=baluilp&user_login=nieraus&user_login=eleqs&user_login=baastizockt&user_login=flojamfm&user_login=letstaddl&user_login=papaplatte`

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
    {"name":"Scurrows", "channelID":"UCL68ZdM_aGd2TgMviT5-sXg", "status":"offline", "viewers":"0"},
    {"name":"Mizzuri", "channelID":"UCiP3x_wVNSaS8Ap8psR5Ddw", "status":"offline", "viewers":"0"},
    {"name":"Parovi", "channelID":"UCOV8gY5m2IhoEsyGVA27gKQ", "status":"offline", "viewers":"0"},
    {"name":"RocketBeansTV", "channelID":"UCQvTDmHza8erxZqDkjQ4bQQ", "status":"offline", "viewers":"0"}
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
