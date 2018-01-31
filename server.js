const express = require('express');
const app = express(); 

var fs = require('fs');
var obj;
fs.readFile('./server/data/data.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
 
});

var router = express.Router();

router.get('/all/:name', function(req, res) {
    
  const text = req.params.name;

  const a = obj
    .filter(word => {
      const wordObj = word.name.toLowerCase();
      const wordSearch = text.toLowerCase();

      return wordObj.match(wordSearch) == null 
            ? searchStringInArray(wordSearch, wordObj)
            : wordObj.match(wordSearch);
      })

    res.json(a);
});

router.route('/:stars/:name')
  .get(function(req, res){
    const param = req.params.stars;
    const text = req.params.name;
    const a = obj
      .filter(item => item.stars == req.params.stars)
      .filter(word => {
        const wordObj = word.name.toLowerCase();
        const wordSearch = text.toLowerCase();

        return wordObj.match(wordSearch) == null 
            ? searchStringInArray(wordSearch, wordObj)
            : wordObj.match(wordSearch);
      });

    res.json(a);
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


app.use('/api', router);

app.listen('8010', () => {
  console.log('listening on port 8010')
})