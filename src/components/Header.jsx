import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Title = ({ title }) => {
    const { todos } = useContext(TodoContext);
    return ( 
        <div>
            <h1>{ title }</h1>
            <p>You have {todos.length} tasks to check off...</p>
        </div>
    );
}
 
export default Title;