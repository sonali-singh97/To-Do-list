const express = require("express");
const bodyParser = require("body-parser");
const app=express();

const date=require(__dirname+"/date.js");

app.set ("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const items=["Ice cresm","Pizza","Chicken"];
const workItems =[];

app.get("/",function(req,res){
  let day= date.getDate();

res.render("list",{
  listTitle : day,
  listItems :items
});
});

app.post("/",function (req,res){
const item= req.body.newItem;

if(req.body.list ==="Work"){
  workItems.push(item);
  res.redirect("/work");
}
else
{
items.push(item);
res.redirect("/");
}
});

app.get("/work",function(req,res){

  res.render("list",{listTitle : "Work List", listItems :workItems});
});



app.listen(3000,function(){
  console.log("server is running!");
});
