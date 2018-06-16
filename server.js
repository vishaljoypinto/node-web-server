var express=require('express');
var hbs=require('hbs');
var app = express();
hbs.registerPartials(__dirname+'/partials/');
app.set('view engine','hbs');
hbs.registerHelper('screamIt',(text)=> text.toUpperCase());
// app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    console.log(`Method : ${req.method}, URL : ${req.url} `);
next();
});
app.use((req,res)=>{
    res.render('maintenance.hbs');
});
// app.get('/',(request,response)=>{
// response.send({
//     name:'Vishal',
//     age:[
//         0,
//         1
//     ]
// });
// });
app.get('/about',(req,res)=>{
res.render('about.hbs',{
    name:'Vishal',
    year:'2018',
    msg:'welcome'
});
});
app.listen(3000);