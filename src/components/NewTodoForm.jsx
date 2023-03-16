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
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button>+</button>
        </form>
    );
}
 
export default NewTodoForm;