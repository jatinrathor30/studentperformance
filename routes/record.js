var express = require('express');
var router = express.Router();
var pool= require('./pool')


router.post('/addrecord', function(req, res) {
    console.log(req)
pool.query('insert into studentrecord(name,rollno,dob,hindi,english,maths,science,social,physical)values(?,?,?,?,?,?,?,?,?)',[req.body.name,req.body.rollno,req.body.dob,req.body.hindi,req.body.english,req.body.maths,req.body.science,req.body.social,req.body.physical],function(error,result){
    if(error)
    {  console.log(error)
        res.status(500).json({RESULT:false})
    }
    else
    {
        res.status(200).json({RESULT:true})

    }
})
});

router.get('/listrecord', function(req, res, next) {
    pool.query('select * from studentrecord',function(error,result){
        if(error)
        { console.log(error)
         res.status(500).json({data:[]}) 
        }

        else
        { console.log(result)
        res.status(200).json({data:result})     
        }

 })
})

router.post('/editrecord', function(req, res, next) {
    console.log(req.body)
pool.query('update studentrecord set name=?,dob=?,hindi=?,english=?,maths=?,science=?,social=?,physical=? where rollno=?',[req.body.name,req.body.dob,req.body.hindi,req.body.english,req.body.maths,req.body.science,req.body.social,req.body.physical,req.body.rollno],function(error,result){
    if(error)
    {  console.log(error)
        res.status(500).json({data:[]})
    }
    else
    {
        res.status(200).json({data:result})
    }
})
});


module.exports = router;