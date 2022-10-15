const exress = require('express');
const app = exress();

app.get('', (req, resp) => {
    resp.send("hello this is HomePage")
});

app.get('/a', (req, resp) => {
    resp.send(" Welcome  this is About us Page")
});

app.get('/s', (req, resp) => {
    resp.send(" Welcome this is ServciePage")
});
app.listen(5000)