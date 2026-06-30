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

export const tasksReducer = (
    state: TaskState,
     action: TaskAction): 
     TaskState => {

        switch (action.type) {
            case 'ADD_TODO':
                return state; 
            
            case 'TOGGLE_TODO':
                return state;

            case 'DELETE_TODO':
                return state;
        }
                




    return state;
};