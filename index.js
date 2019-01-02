//test line
var express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send('<h1>I LOVE BUBU BUT YOU HAVE TO GO AND POMPOM AND NOT SLEEP PLEASE!</h1>');
});

	var listener = app.listen(process.env.PORT,process.env.IP,function(){
		console.log("server has started");
	    console.log('Listening on port ' + listener.address().port);
});