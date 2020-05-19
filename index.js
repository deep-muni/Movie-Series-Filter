const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/angularapp/dist/angularapp'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/angularapp/dist/angularapp/index.html'));
});



app.listen(process.env.PORT || 5000, function () {
    console.log('started');
});
