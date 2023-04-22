import { Document, model,Schema } from 'mongoose';
import { z} from 'zod';

const todoValidator =z.object({
    task: z.string().min(2).max(50).trim(),
    isCompleted: z.boolean().optional(),
    createdAt: z.date().optional()
})


type  _todo = z.infer<typeof todoValidator>
export interface ITodo extends Document,_todo {}
const TodoSchema = new Schema<ITodo>({
    task: {
        type: String,
        required: true,
      },
      isCompleted: {
        type: Boolean,
        default: false,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
},{
    versionKey:false,
    timestamps:true
})

export const Todo = model<ITodo>("Todo",TodoSchema)