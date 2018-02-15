var express=require("express");
var burger=require("../models/burger.js");


var router = express.Router();

//creating the home route
router.get("/",function(req,res){
    burger.selectAll(function(data){
        //console.log(data);

       var burgersObj={
           burgers:data
       }
        res.render("index",burgersObj);
    });
});

router.post("/api/burgers",function(req,res){
    burger.insertOne(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(result){
        res.json({ id: result.insertId });
        
   });
});

router.put("/api/burgers/:id",function(req,res){
    var condition="id= " + req.params.id;
    
    burger.updateOne({devoured:req.body.devoured},condition,function(result){
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
    });
});*/



module.exports=router;