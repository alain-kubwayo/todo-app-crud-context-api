import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Header = ({ title }) => {
    const { todos } = useContext(TodoContext);

    return ( 
        <div>
            <h1>{ title }</h1>
            <p>You have {todos.length} {todos.length > 1 ? 'tasks' : 'task'} in total.</p>

            { todos.length >= 1 && (
                <p>Completed {todos.filter(todo => todo.completed === true).length} of {todos.length} {todos.length === 1 ? 'task' : 'tasks'}!
                </p> 
                )
            }
        </div>
    );
}
 
export default Header;