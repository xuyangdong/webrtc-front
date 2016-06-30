var express = require('express');
var fs = require('fs'); 
var app = express();
var bodyParser = require('body-parser')
app.set("view engine","jade")
app.set("views",__dirname)
// 该路由使用的中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
app.get('/', function(req, res) {
	var videoList = ['1.webm','2.webm','3.webm']
	res.render('history')
});
app.post('/video',function(req,res){
	var parm1 = req.body.name;
	var parm2 = req.body.date;
	console.log(parm1,parm2);
	var time = parm2.split("-");
	var group_name = parm1.split("-");
	var minute = parseInt(time[4]);
	var _minute = (minute%10)*10
	var timeS = group_name[1]+"_"+time[0]+"_"+time[1]+"_"+time[2]+"_"+time[3]+"_"+time[4]+".webm";
	var videoName = timeS;
	videoName = '2_2016_4_27_13_28.webm';
	console.log(videoName);
	var files = fs.readdirSync("./public/source/video");
	console.log("files",files)
	var tag = false;
	for(var file in files){
		console.log(files[file] == videoName)
		if(files[file] == videoName){
			tag = true
		}
	}
	if(tag){
		res.render('history',{video:videoName})
	}else{
		res.render('history',{video:""})
	}
});
// 定义 about 页面的路由
app.get('/about', function(req, res) {
  res.send('About History');
});

module.exports = app;