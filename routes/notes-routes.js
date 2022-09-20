const express = require('express');

const router = express.Router();

var url = 'https://test-notes-netforemost-default-rtdb.firebaseio.com/';
var http = require('http')

router.get('/:id', (req, res, next) =>{
    const notesId = req.params.id;
    var data = null;

    if(notesId === 'all'){
        this.http.get(this.url + '/notes.json', { json: true }, (err, res, body) => {
            if (err) { return console.log(err);}
            console.log(body.url);
            console.log(body.explanation);
        });
        //data = this.http.get(this.url + '/notes.json');
    }

    res.json({Message:'probando'});    

    
});

module.exports = router;