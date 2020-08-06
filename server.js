var express = require("express");
var app = express();


var PORT = process.env.PORT || 3000;

//handle parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// app.use(routes);

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/portfolio", function(req, res){
    res.sendFile(path.join(__dirname, "./public/portfolio.html"))
})

app.get("/contact", function(req, res){
    res.sendFile(path.join(__dirname, "./public/contact.html"))
})

//start server
app.listen(PORT, function(){
    console.log("server listening on PORT:", PORT)
})
