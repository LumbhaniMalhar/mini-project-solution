const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000
const string = "Send me your {email|phone|address}, I will get back to you {today|tomorrow|day after tomorrow}, {Thanks | Thank you | Best regards}, @name"
const match = string.match(/{([^}]+)}/gm)
console.log("MATCH---",match)


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/textedit', (req, res) => {
    const {input_1, input_2} = req.body;
    replaceString(input_1, match, input_2)
    .then(response=>{
        res.status(200).json(response)
    }).catch(err=> console.log(err))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const replaceString = (str, match, name) => {
    return new Promise((resolve, reject) => {
        match.map((data, index) => {
            console.log(index)
            console.log(match.length)
            data = data.substring(1, data.length - 1)
            console.log("DATA1---",data)
            data = data.split('|')
            console.log("DATA2---",data)
            str = str.replace(/@[a-z]+/gm, name)
            console.log("strrr",str)
            const random = (Math.random() * (data.length - 1)).toFixed()
            str = str.replace(/{([^}]+)}/m, data[random])
            if (index == match.length - 1) {
                console.log(str)
                resolve(str)
            }
        })
    })
}


replaceString(string, match).then(response=>console.log(response)).catch(err=>console.log(err))