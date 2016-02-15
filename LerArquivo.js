
// Dependencias
require('./conn.js');

// GET
app.get('/',function(req,res){
	
	// Iniciando objeto S3
	var s3 = new AWS.S3();
    
  s3.listBuckets(function(error, data) {
    	
    if (error) {
      returnS3(error);
    	console.log(error);
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
