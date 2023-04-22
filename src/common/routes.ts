import { Router } from "express";
import { loginRouter } from "../app/login/login.routes";
import {todoRoute} from '../app/todo/todo.routes'

export const allRoutes: Record<string, Router> = {
    'auth': loginRouter,
    'todos': todoRoute
}
