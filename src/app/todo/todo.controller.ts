import { BaseController } from "../../common/base.controller";
import { ITodo,Todo } from "./todo.schema";

class TodoController extends BaseController<ITodo>{

}
export const _todo = new TodoController(Todo);