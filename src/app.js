// const express= require('express')
// const path =require('path')

// const app=express()
// const publicdir=path.join(__dirname,'../public')
// constviewDir
// app.use(express.static(publicdir))
// app.get('',(req,res)=>{
//     res.send('hellow')
// })
// //app.get('/test',(req,res))
// app.listen(3000)
const express=require('express')
const path =require('path')
let publicdir=path.join(__dirname,'../public')
//let publicdir=__dirname+"../public"
console.log(publicdir)
let app=express();
app.use=(express.static(publicdir))

app.set('view engine','hbs')
app.get('',(req,res)=>{
    res.render('home')
})

// app.get(' ',(req,res)=>{
//    res.send('hellow');
// })
//  app.get('/test',(req,res)=>{
//      res.send('tessst');
//  })

app.listen(3000);
