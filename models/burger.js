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
    
    updateOne:function(objColvals, condition, cb){
        orm.upddateOne("burgers",objColvals,condition,function(res){
            cb(res);
        });
    }
}


module.exports=burger;
