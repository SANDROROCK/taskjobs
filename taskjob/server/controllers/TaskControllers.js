const Task = require('../models/task');

module.exports = {
    add:function(req,res){

        let task = new Task(req.body);  //Salvo a requisição em uma variavel do model task 

        task.save()   // Salvo com o uso do metodo save();
            .then(task=> res.status(200).json(task))  //devolvo se deu certo o json com os dados da task
            .cath(err =>{
                res.status(400).send("Não foi possivel adicionar uma nova task",err)  // deu erro devolvo um meg mais o erro 

            });

    },

    getAll:function(req,res){
     task.find(function(err,task){
         if(err){
             res.status(400).send('Erro nao foi possivel encontrar as Tasks',err);
         }
         else{

            res.status(200).json(task);
         }
     });
    },

    getById:function(req,res){
        task.findByid(req.params.id,function(err,task){
            if(err){
                res.status(400).send('Não foi possivel encontrar a task',err);
            }
            else{
                res.status(200).json(task);
            }
        });
    },

    delete:function(req,res){
        task.findByidAndRemove(req.params.id,function(err,task){
            if(err){
                res.status(400).send('Não foi possivel deletar a task',task);
            }
            else{
                res.status(200).json(req.params.id);
            }
        });
    },

    update:function(req,res){
        task.findByidandUpdate(req.params.id,req.body,{new:true},function(err,task){
            if(err){
                res.status(400).send('Erro ao atualizar a task',err);
            }
            else{
                res.status(200).json(taks);
            }
        });
    }
};