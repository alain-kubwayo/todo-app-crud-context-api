import { createContext, useReducer } from 'react';
import { nanoid } from 'nanoid';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;