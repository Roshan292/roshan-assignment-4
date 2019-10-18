const mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"mydb"
})
con.connect((err)=>{
    if(err){
        throw err;
    }
    else
    console.log(" database is connected");
})


let  mdb={};

mdb.all=()=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT * FROM customers',(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
mdb.one=(id)=>{
    return new Promise((resolve,reject)=>{
        con.query('SELECT * FROM customers WHERE id=?',[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        })
    })
}

//insert a new customer in database
mdb.two=(name,address)=>{
    return new Promise((resolve,reject)=>{
        con.query("INSERT INTO customers (name,address) value(?,?)",[name,address],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        })
    })
}
//updating a existing customer record
mdb.three=(id,name,address)=>{
    return new Promise((resolve,reject)=>{
        con.query("UPDATE customers SET name= ?,address= ? WHERE id=?",[name,address,id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        })
    })
}
mdb.four=(id)=>{
    return new Promise((resolve,reject)=>{
        con.query("DELETE FROM customers WHERE id=?",[id],(err,results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);

        })
    })
}
module.exports=mdb;