import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const NewTodoForm = () => {
    const { dispatch } = useContext(TodoContext);
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', payload: { name }});
        setName('');
    }

    return ( 
        <form onSubmit={handleSubmit} className="relative">
            <input 
                className="w-full border-sky-600 border-b outline-none"
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Add a todo..."
                required
            />
            <button className="absolute text-xl top-1/4 right-2 rounded-full h-4 w-4 bg-sky-900 flex items-center justify-center text-white">+</button>
        </form>
    );
}
 
export default NewTodoForm;