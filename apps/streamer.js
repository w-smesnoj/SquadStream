streamers = "";

console.log("init: streamer.js")
if(!apicalls) return console.log("intercepted: streamer.js");

var request = require("request");
var fs = require("fs");


// &user_login=fynix&user_login=Augsii&user_login=rotpilz&user_login=fireflo&user_login=seltix&user_login=vossipanda&user_login=dhalucard&user_login=flojamfm&user_login=cengobengo&user_login=Hakan_d_hanyou&user_login=Sasukey&user_login=nieraus&user_login=danutopia99&user_login=takaishii&user_login=orangemorange&user_login=pumithecat&user_login=earliboy&user_login=baluilp&user_login=papaplatte&user_login=bastighg&user_login=sparkofphoenixtv&user_login=stegi&user_login=thefabohd&user_login=impimpimp&user_login=clym&user_login=zanderlp&user_login=fazon&user_login=letshugotv&user_login=notcolln&user_login=discohengo&user_login=cornel&user_login=nichtnilo&user_login=zinushd&user_login=aceow_&user_login=dienessy&user_login=eleqs&user_login=mycoolnameyt&user_login=skybreaker99






// &user_login=fynix
// &user_login=Augsii
// &user_login=rotpilz
// &user_login=fireflo
// &user_login=seltix
// &user_login=vossipanda
// &user_login=dhalucard
// &user_login=flojamfm
// &user_login=cengobengo
// &user_login=Hakan_d_hanyou
// &user_login=Sasukey
// &user_login=nieraus
// &user_login=danutopia99
// &user_login=takaishii
// &user_login=orangemorange
// &user_login=pumithecat
// &user_login=earliboy
// &user_login=baluilp
// &user_login=papaplatte
//
// &user_login=bastighg
// &user_login=sparkofphoenixtv
// &user_login=stegi
// &user_login=thefabohd
// &user_login=impimpimp
// &user_login=clym
// &user_login=zanderlp
// &user_login=fazon
// &user_login=letshugotv
// &user_login=notcolln
// &user_login=discohengo
// &user_login=cornel
// &user_login=nichtnilo
// &user_login=zinushd
// &user_login=aceow_
// &user_login=dienessy
// &user_login=eleqs
// &user_login=mycoolnameyt
// &user_login=skybreaker99
//

var options = { method: 'GET',
    url: `https://api.twitch.tv/helix/streams?user_login=fynix&user_login=Augsii&user_login=rotpilz&user_login=fireflo&user_login=seltix&user_login=vossipanda&user_login=dhalucard&user_login=flojamfm&user_login=cengobengo&user_login=Hakan_d_hanyou&user_login=Sasukey&user_login=nieraus&user_login=danutopia99&user_login=takaishii&user_login=orangemorange&user_login=pumithecat&user_login=earliboy&user_login=baluilp&user_login=papaplatte&user_login=bastighg&user_login=sparkofphoenixtv&user_login=stegi&user_login=thefabohd&user_login=impimpimp&user_login=clym&user_login=zanderlp&user_login=fazon&user_login=letshugotv&user_login=notcolln&user_login=discohengo&user_login=cornel&user_login=nichtnilo&user_login=zinushd&user_login=aceow_&user_login=dienessy&user_login=eleqs&user_login=mycoolnameyt&user_login=skybreaker99`
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




// {"name":"", "channelID":"", "status":"offline", "viewers":"0"},


ytstreamers = {
  "streamers":[
    {"name":"Ungespielt", "channelID":"UCcn4UOBvB0W2HjCcLFLuu2w", "status":"offline", "viewers":"0"},
    {"name":"Reved", "channelID":"UC2EKkc5krBCtafHrRpQ4-xQ", "status":"offline", "viewers":"0"},
    {"name":"Abgegrieft", "channelID":"UCLTALEezHg3uzN3bdfqrhfQ", "status":"offline", "viewers":"0"},
    {"name":"Scurrows", "channelID":"UCL68ZdM_aGd2TgMviT5-sXg", "status":"offline", "viewers":"0"},
    {"name":"Dner", "channelID":"UCbuKwxnPVgjkWhYGtTeFPaw", "status":"offline", "viewers":"0"},
    {"name":"GommeHD", "channelID":"UC7MIk4LVEjcGiJX919oJ1Eg", "status":"offline", "viewers":"0"},
    {"name":"Sereax", "channelID":"UC9Lzkfdy7tLEBQyDOoc_QaA", "status":"offline", "viewers":"0"},
    {"name":"Dompra", "channelID":"UC6_pjbTvzqEUYPr_1L4KVYg", "status":"offline", "viewers":"0"},
    {"name":"NeotrixYT", "channelID":"UCTXvFDWlwDiYVQUzs1bKrkA", "status":"offline", "viewers":"0"},
    {"name":"baastiZockt", "channelID":"UCb4Y41mcq3CQotYj1DQiWFQ", "status":"offline", "viewers":"0"},
    {"name":"Arfore", "channelID":"UCrKQmMdrfEmbk2hF6GMLPQQ", "status":"offline", "viewers":"0"},
    {"name":"Mizzuri", "channelID":"UCiP3x_wVNSaS8Ap8psR5Ddw", "status":"offline", "viewers":"0"},
    {"name":"Fixx", "channelID":"UCnfBFGFCZ4Y1bL_vhvSW2xg", "status":"offline", "viewers":"0"},
    {"name":"Briiaan", "channelID":"UCgtUS-12SwxWETA3O1iOePg", "status":"offline", "viewers":"0"},
    {"name":"Caravas", "channelID":"UC4UDgtqBSQZ4yk7H_sEiFWA", "status":"offline", "viewers":"0"},
    {"name":"DangerMV", "channelID":"UCG6BfznnKOYKKiCghsdIBwA", "status":"offline", "viewers":"0"},
    {"name":"MultiGames", "channelID":"UCdTvgitpUNyZIaimMo25MbQ", "status":"offline", "viewers":"0"},
    {"name":"ZumiHD", "channelID":"UC-ZrweK1lD-zXYH-yqHWZuw", "status":"offline", "viewers":"0"},
    {"name":"Mayd", "channelID":"UCHKc2NhGqamkTWINnUvQXGg", "status":"offline", "viewers":"0"},
    {"name":"Lemelodyyy", "channelID":"UCdNMhGoH6u7m5s82lsj4w1Q", "status":"offline", "viewers":"0"},
    {"name":"SpaceX", "channelID":"UCFoYivpqBoPLHwHanD5opdQ", "status":"offline", "viewers":"0"},
    {"name":"Qjuzel", "channelID":"UCfagsfM_Uk44LzA5egLrmTg", "status":"offline", "viewers":"0"},
    {"name":"LvckyLuke", "channelID":"UCEC9r4znARi_De6MaC3yaTw", "status":"offline", "viewers":"0"},
    {"name":"LetsPhil", "channelID":"UCAjwRIf35yJv5CW7fjspd6g", "status":"offline", "viewers":"0"},
    {"name":"DiddiHD", "channelID":"UC_38KkE0w2pwMc74n1DNzag", "status":"offline", "viewers":"0"},
    {"name":"PezcraftYT", "channelID":"UCEgQQlikpCYhtwD10muIz0Q", "status":"offline", "viewers":"0"},
    {"name":"Meistergamer", "channelID":"UCtY_-AjREq_QNEReTslmSDg", "status":"offline", "viewers":"0"},
    {"name":"Alphastein", "channelID":"UCiTydOPjFaDTkdygnFxAdaQ", "status":"offline", "viewers":"0"}
    ]
}


function getYTStreamer(streamer) {
  var id = streamer.channelID;
  var url = "https://www.youtube.com/channel/" + id;

  request(url, function (error, response, html) {
		if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);

      var zuschauer = $('.yt-lockup-meta-info').eq(0).text();
      if (zuschauer.includes(matchString)) {
        var viewers = parseInt(zuschauer.split(',').join(""));// . = local version // , = prod version
        streamer.viewers = viewers;
        streamer.status = "online";
      }else{
        streamer.viewers = "0";
        streamer.status = "offline";
      }
      console.log(".");
      console.log(".");
      console.log(".");
      console.log(streamer.name + " is " + streamer.status + ". " + streamer.viewers + " Zuschauer.");
      console.log(zuschauer);
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
