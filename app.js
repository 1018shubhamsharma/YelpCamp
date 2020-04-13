const express = require("express"),
        app   = express();


app.get("/", function(req,res){
    res.send("This is landing page");
});

 
app.listen(3000,function(){
    console.log("YelpCamp server is running");
});        