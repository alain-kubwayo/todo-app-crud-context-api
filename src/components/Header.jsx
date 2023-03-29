import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Header = ({ title }) => {
    const { todos } = useContext(TodoContext);

    return ( 
        <div className="mb-4">
            <h1 className="text-gray-600/70 font-extrabold text-center text-3xl md:text-7xl">{ title }</h1>
            <p className="text-gray-800 text-xl text-center">You have {todos.length} {todos.length > 1 ? 'tasks' : 'task'} in total.</p>

            { todos.length >= 1 && (
                <p className="text-base text-gray-500 text-center">Completed {todos.filter(todo => todo.completed === true).length} of {todos.length} {todos.length === 1 ? 'task' : 'tasks'}!
                </p> 
                )
            }
        </div>
    );
}
 
export default Header;