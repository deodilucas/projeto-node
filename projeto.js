const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}));

app.get('/login', (req, resp)=>{
    resp.sendFile(__dirname + '/login.html')
});

app.get('/pag1', (req, resp)=>{
    resp.sendFile(__dirname + 'Pagina1.html')
});

app.get('/pag2', (req, resp)=>{
    resp.sendFile(__dirname + 'Pagina2.html')
});

app.get('/pag3', (req, resp)=>{
    resp.sendFile(__dirname + 'Pagina3.html')
});


//#########################################################

app.post('/pagina1', (req, res)=>{
    
});

app.post('/pagina2', (req, res)=>{

});


//vars = nome, numero, endereco, email
app.post('/pagina3', (req, res)=>{
    let nome = String(req.body.nome);
    let numero = Number(req.body.numero);
    let endereco = String(req.body.endereco);
    let email = String(req.body.email);
});


app.listen(4047, ()=>{
    console.log('Servidor Iniciado!')
})



