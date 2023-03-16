import { nanoid } from "nanoid"

export const todoReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, {
                id: nanoid(),
                name: action.payload.name,
                completed: false
            }]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'UPDATE_TODO':
            return state.map(todo => {
                return todo.id === action.payload.id ? (
                    { 
                        ...todo, 
                        name: action.payload.name,
                    }) : todo;
            })
        default: 
            return state
    }
}