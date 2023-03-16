import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import TodoDetails from './TodoDetails';

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return todos.length ? ( 
        <div>
            <ul>
                { todos.map(todo => <TodoDetails key={todo.id} todo={todo} />)}
            </ul>
        </div>
    ) : (
        <div className="text-base text-gray-700/60 text-center my-8">No tasks to work on for now... 🏆</div>
    )
}
 
export default TodoList;