const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000

//middlewares
app.use(bodyParser.json());
app.use(cors());

//main function
const replaceString = (str, name) => {
    const match = str.match(/{([^}]+)}/gm)
    return new Promise((resolve, reject) => {
        match.map((data, index) => {
            data = data.substring(1, data.length - 1)
            data = data.split('|')
            str = str.replace(/@[a-z]+/gm, name)
            const random_int = (Math.random() * (data.length - 1)).toFixed()
            str = str.replace(/{([^}]+)}/m, data[random_int])
            if (index == match.length - 1) {
                console.log(str)
                resolve(str)
            }
        })
    })
}

//post request
app.post('/textedit', (req, res) => {
    const {input_1, input_2} = req.body;
    replaceString(input_1, input_2)
    .then(response=>{
        res.status(200).json(response)
    }).catch(err=> console.log(err))
})

//starting server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
