var express = require('express');
var router = express.Router();
var pool= require('./pool')

router.post('/sattendance', function(req, res) {
  console.log(req)
pool.query('insert into attendance(rollno,subject,status,facultyname,date)values(?,?,?,?,?)',[req.body.sno,req.body.subject,req.body.status,req.body.facultyname,req.body.date],function(error,result){
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
router.post('/slistattendance', function(req, res, next) {
  pool.query('select * from attendance',function(error,result){
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

router.post('/editattendence', function(req, res, next) {
  console.log(req.body)
pool.query('update attendance set subject=?, status=?,facultyname=?, date=? where rollno=?',[req.body.subject,req.body.status,req.body.facultyname,req.body.date,req.body.sno],function(error,result){
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
  