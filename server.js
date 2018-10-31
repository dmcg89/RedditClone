const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.send('Sup?')
})

app.listen(3000, () => {
    console.log('app listening on 3000')
})
