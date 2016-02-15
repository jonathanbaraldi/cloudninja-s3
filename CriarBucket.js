
// Dependencias
require('./conn.js');

// GET
app.get('/',function(req,res){
	
    var params = {
        Bucket: 'CloudNinja-TESTE',
    };
    s3.createBucket(params, function(err, data) {
        if (err) {
          returnS3(err);
            console.log(err);
        } else {
          returnS3(data);
          console.log(data);
        }
    });

    var returnS3 = function(result){
        result = JSON.stringify(result);
        var body = '<html>'
  		    +'	<head>'
  		    +'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
  		    +'	</head>'
  		    +'	<body>'
  		    +	result
  		    +'	</body>'
  	         +'</html>';
        console.log(result);
        res.writeHead(200,{"Content-Type" : "text/html"});
        res.write(body);
        res.end();
    }
	
});

app.listen(8080,function(){
	console.log("Conectado e escutando na porta 8080");
});
