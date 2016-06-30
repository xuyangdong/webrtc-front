var express = require('express');
var app = express();
var birds = require("./birds");
var history = require("./history");
var schedule = require("node-schedule");







//var j = schedule.scheduleJob(rule, function(){
//  c++;
//  console.log(c);
//});


app.use('/static',express.static('public'))//静态页面

console.log("history",history)
app.use('/history',history)

app.get('/', function (req, res) {
  res.send('Hello World!');
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});