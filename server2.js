const express = require('express')
const app = express()
const port = 3000

// app.use(
//     function(req,res,next){
//         res.header("Access-Control-Allow-Origin","*")
//         res.header("Access-Control-Allow-Headers","Content-Type")
//         next()
//     }
// )
app.use(express.static('public'))

app.get('/test', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))