var orm=require("../config/orm.js");

var burger={
    selectAll:function(cb){
        orm.selectAll("burgers",function(res){
            //sending to burgers_controller.js
            cb(res);
        });
    },
    
    insertOne:function(cols,vals,cb){
        orm.insertOne("burgers",cols,vals,function(res){
            cb(res);
        });
    },
    
    updateOne:function(updateToval, condition, cb){
        orm.updateOne("burgers",updateToval,condition,function(res){
            cb(res);
        });
    }
}


module.exports=burger;
