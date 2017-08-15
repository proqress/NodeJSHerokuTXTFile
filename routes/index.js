var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'IoT',
    condition: true,
    anyArray: [1, 2, 3]
  });
});

router.get('/oku/', function (req, res, next) {
  fs.readFile(__dirname + "/yazilan.txt", "utf8", function (error, data) {
    console.log(data);
    res.send(data);
  });
});

router.post('/oku/submit', function (req, res, next) {
  var id = req.body.id;
  if (id == "ac") {
    fs.writeFile(__dirname + "/yazilan.txt", "0", function (err) {
      if (err) {
        return console.log(err);
        res.send("acilamadi" + err);
      }
      res.send("acildi");
    });
  } else if (id == "kapat") {
    fs.writeFile(__dirname + "/yazilan.txt", "1", function (err) {
      if (err) {
        return console.log(err);
        res.send("katilamadi" + err);
      }
      res.send("kapandi");
    });
  }else{
    res.send("yok oyle bir sey");
  }

});

module.exports = router;
