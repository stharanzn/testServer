const express = require('express')
const path = require('path');
const notFound = require('./middlewares/notFound');
const app = express()

PORT = process.env.PORT || 5000;


app.use(express.static('./public'))
app.use(express.json())

app.get('/test', (req, res)=>{
    console.log(req.params);
})

app.get('/', function(req, res){
    // var options = {
    //     root: path.join(__dirname)
    // };
    const p = path.join(__dirname, "../index.html")
    console.log(p)
    // var fileName = 'index.html';
    res.sendFile(p, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Hosting index.html:', p);
        }
    });
});

app.use(notFound);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
