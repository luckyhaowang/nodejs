// import { encode } from "punycode";

var http= require("http");
var fs=require("fs");

var url=require("url");
http.createServer(function(req,res){

    // res.writeHead(200,"Content-Type:image/jpg;charset=UTF8");
       console.log( req.url );
   if( req.url=='/images/1.jpg'){
    // console.log( req.url == '/images/1.jpg');
    res.writeHead(200,"Content-Type:image/jpg;charset=UTF8");
       
       fs.readFile('./images/1.jpg',function(er,data){ 
            if(er){
               throw er;
            }
        
           res.end(data);
         });


   }else  {
    res.writeHead(200,"Content-Type:text/html;charset=UTF8");
       

    fs.readFile('./static.html',function (err,data) {
         res.end(data);  
        if(err){
            throw err;
        }
        res.end(data);
    
           
       }  );
    






   } 



   







    // var path=url.parse(req.url).pathname;
    // var qq=url.parse(req.url,true).query;//返回一个对象，然后通过对象调用属性。
    // console.log(path);
    // console.log(qq.age);
    // res.write("你好");
//  console.log(req.url);
    // console.log(req.);
//    res.end("sdjalkdfja");

// encoder = new TextEncoder('utf8');
    // return encoder.encode(str);
   
// var data='';

// var readerSteam;   

// fs.createReadStream('static.html');
// if(req.rul=='./images/1.jpg'){
//     res.writeHead(200,{"Content-Type":"image/jpg;charset=UTF8" });
//     readerSteam=fs.createReadStream('./images/1.jpg');
//     readerSteam.on('data',function (chunk) {
//         data+=chunk;
//    });
//    readerSteam.on('end',function(chunk){   
       
//        res.end(data);
   
//    });

//   }else {
//     res.writeHead(200,{"Content-Type":"text/html;charset=UTF8" });
//     readerSteam=fs.createReadStream('static.html');
//     readerSteam.on('data',function (chunk) {
//         data+=chunk;
//    });
//    readerSteam.on('end',function(chunk){   
       
//        res.end(data);
   
//    });

//   }



//    readerSteam.setEncoding('UTF8');
// readerSteam.on('data',function (chunk) {
//      data+=chunk;
// });
// readerSteam.on('end',function(chunk){   
    
//     res.end(data);

//   });

  






// var  bf1=Buffer.alloc(256);
// var  len= bf1.write("你");
// console.log(len);
// res.end(bf1);






}).listen(3000,"127.0.0.1");