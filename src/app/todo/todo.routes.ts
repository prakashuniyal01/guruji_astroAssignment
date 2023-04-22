import {Request,Response, Router } from "express";
import {_todo} from "./todo.controller";

export const todoRoute = Router();

todoRoute.get('/',(req:Request,res:Response)=>_todo.find(res,{}))
.get('/:id',(req:Request,res:Response)=>_todo.findOne(res,{_id:req.params.id}))
.post('/',(req,res,next)=>{
    next();    
},(req:Request,res:Response)=>_todo.create(res,req.body))
.put('/:id',(req:Request,res:Response)=>_todo.update(res,req.params.id,req.body))
.delete('/:id',(req:Request,res:Response)=>_todo.delete(res,req.params.id))