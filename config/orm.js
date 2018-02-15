//importing mysql connection
var connection=require("./connection.js");

//CREATES THE QUESTION MARKS BASED ON THE lengthvalues array
function valuesQmarks(valLength){
    var Qs=[];
    for(var i=0;i<valLength;i++){
        Qs.push("?");
    }
    return Qs.toString();
}

var orm={
    selectAll:function(table,cb){
        var queryString="SELECT * FROM "+table;
        connection.query(queryString,function(err,res){
            if (err) throw err;
            //console.log(res);
            //sending response to burger.js
            cb(res);
        });
    },
    insertOne:function(table,cols,vals,cb){
        var queryString="INSERT INTO "+ table+" ("+cols.toString()+") VALUES ("+valuesQmarks(vals.length)+")";;
        
        connection.query(queryString,vals,function(err,res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, updateToval, condition, cb) {
        var queryString = "UPDATE "+table+" SET devoured="+updateToval+" WHERE "+condition;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    }

}

module.exports=orm;