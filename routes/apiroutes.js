
const router = require('express').Router();
const fs = require('fs');
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils');

// read and display data from db json
router.get('/notes', (req, res) => {
    
    readFromFile('./db/db.json').then((data)=>{
        res.json(JSON.parse(data))
    })
});


// add a new note
router.post('/notes', (req, res) => {
    console.log(req.body);
  
    const { isValid, errors } = req.body;
  
    const noteadded = {
      title: req.body.title,
      text: req.body.text,
      errors,
    };
  
    if (!isValid) {
      readAndAppend(noteadded, './db/db.json');
      res.json(`Diagnostic information added 🔧`);
    } else {
      res.json(
        'Object is valid, not logging. Check front end implementation',
       
      );
    }
  });



module.exports = router;