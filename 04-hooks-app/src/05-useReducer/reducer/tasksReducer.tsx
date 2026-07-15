import * as z from "zod";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    lenght: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

    const TodoSchema = z.object({
        id: z.number(),
        text: z.string(),
        completed: z.boolean(),
    });

    const TaskStateSchema = z.object({
        todos: z.array(TodoSchema),
        lenght: z.number(),
        completed: z.number(),
        pending: z.number(),
    });



    export const getTaskInitialState = (): TaskState => {

        const localStorageState = localStorage.getItem('tasks-state');
        if (localStorageState) {
            return JSON.parse(localStorageState);
        }

        //Validar mediante Zod 
        const result = TaskStateSchema.safeParse(localStorageState);
        if (!result.success) {
            console.error('Invalid state in localStorage:', result.error);
        }


        return {
            todos: [],
            lenght: 0,
            completed: 0,
            pending: 0
        }
    };

export const tasksReducer = (
    state: TaskState,
    action: TaskAction):
    TaskState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            }
            //No se debe hacer 
            //state.todos.push(newTodo);

            return {
                ...state,
                todos: [...state.todos, newTodo],
                lenght: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case 'DELETE_TODO':
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload);

            // const completedTodos = currentTodos.filter((todo) => todo.completed).length;
            //const pendingTodos = currentTodos.filter((todo) => !todo.completed).length;

            return {
                ...state,
                todos: currentTodos,
                lenght: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length, 
            };

        case 'TOGGLE_TODO':
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter((todo) => todo.completed).length,
                pending: updatedTodos.filter((todo) => !todo.completed).length,
            };

        default:
            return state;
    }

    return state;
};