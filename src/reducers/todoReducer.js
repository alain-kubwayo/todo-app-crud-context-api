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
        default: 
            return state
    }
}