var http=require("http");
var fs=require("fs");
var server=http.createServer(function (req,res) {
  if (req.url=='/favicon.ico') {
      return;
  }
   //遍历文件夹里面所有的文件，
   //强行把异步变成同步。
   fs.readdir("./album/",function (err,file) {
        var myfile=[];
      (function iterator(i) {
          if(i==file.length){
              console.log(myfile);//把文件夹输出。
              return;
          }                         
          fs.stat("./album/"+file[i],function (err,sta) {//此处利用回调函数强行将异步变成同步。
               if(sta.isDirectory){
                   myfile.push(file[i]);
               }  
               iterator(i+1); 

          }  );
      })(0)

    res.end();
       
   }  ); 
  



}   ).listen(3000,"127.0.0.1");