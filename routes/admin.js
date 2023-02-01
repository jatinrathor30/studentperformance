var express = require('express');
var router = express.Router();
var pool= require('./pool')





router.get('/registration', function(req, res, next) {
  res.render('registration',{msg:''});
});

router.get('/signup', function(req, res, next) {
  pool.query('insert into admintable(adminid,adminname,password)values(?,?,?)',[req.query.id,req.query.nm,req.query.pd],function(error,result){
    if(error)
    { console.log(error)
      res.render('registration',{msg:'Server Error'});

    }
    else
    {
      res.render('login',{msg:''});

    }
  })

});



  
  router.post('/adminlogin', function(req, res, next) {
  pool.query('select * from adminlogin where email=? and password=?',[req.body.email,req.body.password],function(error,result){
          if(error)
          { console.log(error)
            res.status(500).json({'result':false})
          }
          else
          {
            if(result.length==0)
            {
                res.status(200).json({'result':false})
            }
            else
            {   
              res.status(200).json({'status':true,'result':result})
            }
          }
      })
    
  });

module.exports = router;
