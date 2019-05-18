const express = require('express');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/config');
const taskRoutes = require('./routes/Task');
const cors = require('cors');

const app = express();


//conexão com o bd mongo
console.log(config.mongodbUri);
mongoose.connect(config.mongodbUri,{ useNewUrlParser: true })
    .then(()=>console.log('Database conectado'))
    .catch((err) =>console.log('Erro ao se conectar',err));


mongoose.set('useFindAndModify',false);

app.use(bodyparse.json());
app.use(cors());
app.use('api/task',taskRoutes);





const port = process.env.PORT || 3001;

app.listen(port,function(){
    console.log(`API rodando na porta ${port}`);
});

