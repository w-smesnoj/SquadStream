
apicalls = true;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
const PORT = process.env.PORT || 5000


var streamerFunc = require('./apps/streamer');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
variable_you_need = 42;
drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

// $(document).ready(function() {
  // var usernames = ["freecodecamp", "storbeck", "terakilobyte", "habathcx", "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff", "esl_sc2", "OgamingSC2", "comster404"];
  // var online = document.getElementsByClassName("online");
 // var offline = document.getElementsByClassName("offline");
  // $.each(usernames, function(index, value) {

    // $.ajax({
      // type: "GET",
      // url: 'https://api.twitch.tv/kraken/streams/' + value,
      // headers: {'Client-ID': '3pg3zv5se9mgdur14voydceb2hky4m'},
      // success: function(online) {

          // $.ajax({
            // type: "GET",
            // url: 'https://api.twitch.tv/kraken/channels/' + value,
            // headers: {'Client-ID': '3pg3zv5se9mgdur14voydceb2hky4m'},
            // success: function(data) {

                // var div = document.createElement('div');
                // div.className = "col-md-12";

                // var name = data.display_name;

                // if (data.error) {
                  // name = value;
                // }
                // var logoURL = data.logo;
                // var url = data.url;
                // var logo = document.createElement('img');
                // logo.src = logoURL;
                // if (data.logo == null) {
                  // logo.src = 'https://www.adtechnology.co.uk/images/UGM-default-user.png'
                // }
                // logo.className = "logo col-md-2";
                // var link = document.createElement('a');
                // link.href = url;
                // link.className = "col-md-2";

                // if (data.error) {
                  // link.removeAttribute('href');
                  // link.className = "inactive col-md-2";
                // }
                // link.text = name;
                // link.target = "_blank";

                // $(div).append(logo);
                // $(div).append(link);
                // var status = document.createElement('p');
                // status.className = "col-md-8";
                // var title = '';
                // title.className = "col-md-8";

                // if (online.error) {
                  // title = 'Account Closed'
                  // $(div).addClass("offline");
                // } else if (online.stream == null) {
                  // title = 'Offline'
                  // $(div).addClass("offline");
                // } else if (online.stream !== null) {
                  // title = online.stream.channel.status;
                  // $(div).addClass("online");
                // }
              // if(title.length > 60){
                // var abbrv = title.slice(0, 57);
                // title = abbrv.concat("...");

              // }
                // $(status).append(title);

                // $(div).append(status);


                // $('#twitchbox').append(div);
                            // if (online.stream.channel.status){
                // $('#twitchbox').prepend(div);
              // }
              // } // ajax success 2
          // }); // ajax 2
        // } // ajax success 1
    // }); // ajax 1

  // }); // each function


  // $('#online').on('click', function(){
    // $(online).show();
    // $(offline).hide();
  // });
  // $('#offline').on('click', function(){
    // $(offline).show();
    // $(online).hide();
  // });
    // $('#all').on('click', function(){
    // $(offline).show();
    // $(online).show();
  // });
// }); // document ready
