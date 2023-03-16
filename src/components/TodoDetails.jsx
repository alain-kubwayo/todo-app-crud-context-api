import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoDetails = ({ todo }) => {
    const { dispatch } = useContext(TodoContext);
    return ( 
        <div >
            <h2>{todo.name}</h2>
            <button 
                onClick={() => {
                    dispatch({ type: 'DELETE_TODO', payload: {id: todo.id}})
                }}
            >Delete</button>
        </div>
    );
}
 
export default TodoDetails;