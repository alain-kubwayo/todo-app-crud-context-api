import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoDetails = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [updateMode, setUpdateMode] = useState(false);
    const [newTodoName, setNewTodoName] = useState(todo.name);

    const { dispatch } = useContext(TodoContext);

    return ( 
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-1">
                <input 
                    type="checkbox"
                    onChange={() => setIsChecked(!isChecked)}
                    value={isChecked}
                />
                <h2 className={`${isChecked && 'line-through'}`}>{todo.name}</h2>
            </div>
            <div className="flex gap-x-1">
                <button 
                    className="bg-red-400 text-gray-200 px-1 py-0.5"
                    onClick={() => {
                        dispatch({ type: 'DELETE_TODO', payload: {id: todo.id}})
                    }}
                >Delete</button>
                <button 
                    className="bg-green-600 text-gray-200 px-1 py-0.5"
                    onClick={() => {
                        setUpdateMode(true);
                    }}
                >Update</button>
            </div>
            {updateMode && (
                <form onSubmit={e => {
                    e.preventDefault();
                    dispatch({ type: 'UPDATE_TODO', payload: {id: todo.id, name: newTodoName}})
                    setUpdateMode(false)
                }}>
                    <input 
                        className="px-2 py-1 border-b border-sky-500"
                        type="text" 
                        onChange={e => setNewTodoName(e.target.value)}
                        value={newTodoName}
                    />
                    <button>Save</button>
                </form>
            )}
            
        </div>
    );
}
 
export default TodoDetails;