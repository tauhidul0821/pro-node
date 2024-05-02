const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send('Hello world');
});

const server = app.listen(8081, "127.0.0.1", ()=> {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
