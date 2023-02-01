var express = require('express');
var router = express.Router();
var pool= require('./pool')

router.post('/login', function(req, res, next) {
    pool.query('select * from studentrecord where rollno=? and dob=?',[req.body.rollno,req.body.dob],function(error,result){
        if(error)
        { console.log(error)
          res.status(500).json({result:false})
        }
        else
        {
          if(result.length==0)
          {
              res.status(200).json({result:false})
          }
          else
          {   
            res.status(200).json({result:true,data:result[0]})
          }
            }
        })
      
    });
  
  module.exports = router;
  