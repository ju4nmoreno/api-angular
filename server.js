const express = require('express');
const app = express(); 

var fs = require('fs');
var obj;
fs.readFile('./server/data/data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
 
});

function searchStringInArray (strSearch, strObj) {
    
  const strSearchArry = strSearch.split(" ");
  const strObjArry = strObj.split(" ");

  for (var j=0; j<strSearchArry.length; j++) {

    for (var i = 0; i<strObjArry.length; i++) {

        if (strSearchArry[j].match(strObjArry[i])) return true;
    }        
  }

  return false;
}

var router = express.Router();

router.get('/all/:name', function(req, res) {

  const text = req.params.name;
  let a = obj

    .filter(word => {

      const wordObj = word.name.toLowerCase();

      const wordSearch = text.toLowerCase();
      return wordObj.match(wordSearch) == null 
            ? searchStringInArray(wordSearch, wordObj)
            : wordObj.match(wordSearch);
      });

  let response = {
    'success': true,
    'response': a
  };

  if (a.length === 0) { 
    response.response = `no se encontro nada con ${text}`;
    response.success = false;
  }
  else if ( text === 'undefined') a = obj;

    
  res.json(response);
});


router.route('/:stars/:name')
  .get(function(req, res){
    const param = req.params.stars;
    const text = req.params.name;
    let a = obj
      .filter(item => item.stars == req.params.stars)
      .filter(word => {
        const wordObj = word.name.toLowerCase();
        const wordSearch = text.toLowerCase();

        return wordObj.match(wordSearch) == null 
            ? searchStringInArray(wordSearch, wordObj)
            : wordObj.match(wordSearch);
      });

    let response = {
      'success':true,
      'response': a
    };

    if (a.length === 0) { 
      response.response = `no se encontro nada con ${text}`;
      response.success = false;
    }


    res.json(response);
  });


app.use('/api', router);

app.listen('8010', () => {
  console.log('listening on port 8010');
})