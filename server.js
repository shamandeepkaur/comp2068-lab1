let connect = require('connect')

let app = connect()

let me = ((req, res)=>{
    res.writeHead(200)
    res.write('Shamandeep Kaur, loves Mom and Dad')
    res.end()
})

let mom = ((req, res)=>{
    res.writeHead(200)
    res.write('My mom')
    res.write('My world')
    res.write('Reason to live')
    res.end()
})

let dad = ((req, res)=>{
    res.writeHead(200)
    res.write('My Dad')
    res.write('My world')
    res.write('Always got my back')
    res.end()
})

app.use("/me", me)
app.use("/mom", mom)
app.use("/dad", dad)

console.log('Connect server runnning on port 3000')

app.listen(3000)


